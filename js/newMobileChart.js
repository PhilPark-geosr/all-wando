var data;
var options;
var chart;
var chartDate = new Date(); //무조건 오늘
var value_name = ["나쁨", "보통", "좋음"];
      
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCrosshairs);

function _showChart(e)
{
    if(chart)
        chart.clearChart();
    chart.draw(data, options);
}

//var strJson1 = { "전복지수": {"대상지점":["완도 노화도", "완도 백도"], "총일수":10,"시작일자":"", "종료일자":"","완도 노화도":[2,1,2,2,0,1,2,0,1,2], "완도 백도:":[1,2,1,2,2,0,1,2,0,1] }};
//var strJson2 = { "전복지수": {"대상지점":["완도 노화도", "완도 백도"], "총일수":10,"시작일자":"", "종료일자":"","완도 노화도":[2,1,2,2,0,1,2,0,1,2], "완도 백도:":[1,2,1,2,2,0,1,2,0,1] }};
//var strJson3 = { "전복지수": {"대상지점":["완도 노화도", "완도 백도"], "총일수":10,"시작일자":"", "종료일자":"","완도 노화도":[2,1,2,2,0,1,2,0,1,2], "완도 백도:":[1,2,1,2,2,0,1,2,0,1] }};
//var strJson4 = { "전복지수": {"대상지점":["완도 노화도", "완도 백도"], "총일수":10,"시작일자":"", "종료일자":"","완도 노화도":[2,1,2,2,0,1,2,0,1,2], "완도 백도:":[1,2,1,2,2,0,1,2,0,1] }};

function makeJSON(title, startDate, days){

    var result = new Object();
    var targetPoint = ["완도 노화도", "완도 백도"];
    
    result[title] = {};
    var resultJson = result[title];
    resultJson["대상지점"] = targetPoint;
    resultJson["총일수"] = days;
    resultJson["시작일자"] = startDate;

    var endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);

    resultJson["종료일자"] = endDate.toISOString().slice(0,10);
    
    for(var i = 0 ; i < targetPoint.length ; i++){
        resultJson[targetPoint[i]] = [];
        for(var j = 0; j < days; j++){
            var rnd = Math.round((Math.random() * 100)) % 3;
            resultJson[targetPoint[i]].push(rnd);
        }
    }

    return resultJson;
}

//function createChart2(pos, tableDiv, chartDiv){
//    drawTable2(tableDiv, pos);
//    drawCrosshairs2(chartDiv, pos);
//}


function drawTable2(tableDiv, pos){
    var table = '<table style="border: 1px solid ##aeadad">';
    var trs = [];

    trs.push("<th rowspan=2>시간별</th>");
	trs.push("");
    trs.push("<td>날씨</td>");
    trs.push("<td>풍향</td>");
    trs.push("<td>풍속</td>");
    trs.push("<td>파고</td>");
    trs.push("<td>전복입식</td>");
    trs.push("<td>전복양성/수확</td>");
    //trs.push("<td>전복수확</td>");
    trs.push("<td>미역입식</td>");
    trs.push("<td>미역양성</td>");
    trs.push("<td>미역수확</td>");

    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val = "현재";
    trs[0] += "<th rowspan=2>" + val + "</th>";
    var skyValue = '';
    if (currWeather.SKY <= 2) {
        skyValue = skyName[0];
    } else if (currWeather.SKY <= 8) {
        skyValue = skyName[1];
    } else {
        skyValue = skyName[2];
    }

    if (currWeather.PTY != '0') {
        skyValue = ptyName[currWeather.PTY];
    }
    trs[2] += "<td>" + skyValue + "</td>";
    //val = vecValue2[Math.floor((parseFloat(currWeather.VEC) + 22.5 * 0.5) / 22.5)];
	val = '<img class="WSD_POS" alt=' + parseFloat(currWeather.VEC) + ' src="../images/arrow.jpg" width="20px" height="20px">';
    trs[3] += "<td>" + val + "</td>";
    val = currWeather.WSD;
    trs[4] += "<td>" + val + "</td>";
    val = currWeather.WAV;
    trs[5] += "<td>" + val + "</td>";
    val = abalone_position[pos]["지수"]["전복"]["입식"];
    trs[6] += "<td>" + val + "</td>";
    val = abalone_position[pos]["지수"]["전복"]["양성"];
    trs[7] += "<td>" + val + "</td>";
    //val = abalone_position[pos]["지수"]["전복"]["수확"];
    //trs[8] += "<td>" + val + "</td>";
    val = abalone_position[pos]["지수"]["해조류"]["입식"];
    trs[8] += "<td>" + val + "</td>";
    val = abalone_position[pos]["지수"]["해조류"]["양성"];
    trs[9] += "<td>" + val + "</td>";
    val = abalone_position[pos]["지수"]["해조류"]["수확"];
    trs[10] += "<td>" + val + "</td>";

	var dates = [];
	
	for (var i = 0; i < datas.length; i++) {

        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		var dateVal = null;
		for(var j = 0 ; j < dates.length ; j++){
			if(dates[j].date == b){
				dateVal = dates[j];
				break;
			}
		}
		
		if(dateVal == null){
			dateVal = {};
			dateVal.date = b;
			dateVal.colspan = 1;
			dates.push(dateVal);
		}else{
			dateVal['colspan']++;
		}
	}

	for(var i = 0; i < dates.length ; i++){
		trs[0] += '<th colspan="' + dates[i].colspan + '">' + dates[i].date + '일</th>';
	}
	
    for(var i = 0; i < datas.length ; i++){
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

        var val = forecast["fcstTime"].substring(0, 2) + "시";
        trs[1] += "<th>" + val + "</th>";
        var skyValue = '';
        if (forecast.SKY <= 2) {
            skyValue = skyName[0];
        } else if (forecast.SKY <= 8) {
            skyValue = skyName[1];
        } else {
            skyValue = skyName[2];
        }

        if (forecast.PTY != '0') {
            skyValue = ptyName[forecast.PTY];
        }
        trs[2] += "<td>" + skyValue + "</td>";
        //val = vecValue2[Math.floor((parseFloat(forecast.VEC) + 22.5 * 0.5) / 22.5)];
		val = '<img class="WSD_POS" alt=' + parseFloat(forecast.VEC) + ' src="../images/arrow.jpg" width="20px" height="20px">';
        trs[3] += "<td>" + val + "</td>";
        val = forecast.WSD;
        trs[4] += "<td>" + val + "</td>";
        val = forecast.WAV;
        trs[5] += "<td>" + val + "</td>";
        val = forecast["지수"]["전복"]["입식"];
        trs[6] += "<td>" + val + "</td>";
        val = forecast["지수"]["전복"]["양성"];
        trs[7] += "<td>" + val + "</td>";
        //val = forecast["지수"]["전복"]["수확"];
        //trs[8] += "<td>" + val + "</td>";
        val = forecast["지수"]["해조류"]["입식"];
        trs[8] += "<td>" + val + "</td>";
        val = forecast["지수"]["해조류"]["양성"];
        trs[9] += "<td>" + val + "</td>";
        val = forecast["지수"]["해조류"]["수확"];
        trs[10] += "<td>" + val + "</td>";
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}

//현재 작업지수 전복, 미역, 다시마, 김/////
function currdrawTable(tableDiv, pos){
	var table = '<table border=0 cellspacing=0 style="width:390px; height:178px; font-size:13px; margin-top:0px; border-top:0px solid #bbbbbb; border-bottom:2px solid #bbbbbb; font-weight:bold; text-align:center;">';
    var trs = [];

    table +='<tr><td rowspan=6 style="width:120px; font-size:18px;">작업지수</td><td style="background:#d7e7ef; width:90px;"></td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">입식</td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">양성</td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">수확</td></tr>';


    table +='<tr><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc;">전복</td>';
 
    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val2 = '';
	    
    val = abalone_position[pos]["지수"]["전복"]["입식"];
	val2 = abalone_position[pos]["지수"]["전복"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";


	    table +='<tr><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc;">미역</td>';
	val = abalone_position[pos]["지수"]["해조류"]["입식"];
	val2 = abalone_position[pos]["지수"]["해조류"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["양성"];
	val2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["수확"];
	val2 = abalone_position[pos]["지수"]["해조류"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";



	table +='<tr><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">다시마</td>';
	val = abalone_position[pos]["지수"]["다시마"]["입식"];
	val2 = abalone_position[pos]["지수"]["다시마"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["양성"];
	val2 = abalone_position[pos]["지수"]["다시마"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["수확"];
	val2 = abalone_position[pos]["지수"]["다시마"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";


	    table +='<tr><td style="background:#d7e7ef;">김</td>';
	val = abalone_position[pos]["지수"]["김"]["입식"];
	val2 = abalone_position[pos]["지수"]["김"]["입식값"];
	table += "<td><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["김"]["양성"];
	val2 = abalone_position[pos]["지수"]["김"]["양성값"];
    table += "<td><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["김"]["수확"];
	val2 = abalone_position[pos]["지수"]["김"]["수확값"];
    table += "<td><span class='idx_" + val2 + "'>" + val + "</span></td><tr>";

 
	//var dates = [];
	
    //for (var i = 0; i < trs.length; i++ ){
    //    table += "" + trs[i] + "";   
    //}
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//모바일 현재 작업지수 전복, 미역, 다시마, 김/////
/*
function currdrawTable2(tableDiv, pos){
	var table = '<table border=0 cellspacing=0 style="width:100%; font-size:13px; margin-top:0px; border-bottom:1px solid #bbbbbb; font-weight:bold; text-align:center;">';
    var trs = [];

    table +='<tr><td style="height:30px; background:#d7e7ef; width:90px;"></td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">입식</td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">양성</td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">수확</td></tr>';


    table +='<tr><td style="height:30px; background:#d7e7ef; border-bottom:1px dashed #cccccc;">전복</td>';
 
    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val2 = '';
	    
    val = abalone_position[pos]["지수"]["전복"]["입식"];
	val2 = abalone_position[pos]["지수"]["전복"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";


    table +='<tr><td style="height:30px;background:#d7e7ef; border-bottom:1px dashed #cccccc;">미역</td>';
	val = abalone_position[pos]["지수"]["해조류"]["입식"];
	val2 = abalone_position[pos]["지수"]["해조류"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["양성"];
	val2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["수확"];
	val2 = abalone_position[pos]["지수"]["해조류"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";



	table +='<tr><td style="height:30px; background:#d7e7ef; border-bottom:1px dashed #cccccc">다시마</td>';
	val = abalone_position[pos]["지수"]["다시마"]["입식"];
	val2 = abalone_position[pos]["지수"]["다시마"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["양성"];
	val2 = abalone_position[pos]["지수"]["다시마"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["수확"];
	val2 = abalone_position[pos]["지수"]["다시마"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";


	table +='<tr><td style="height:30px;background:#d7e7ef;">김</td>';
	val = abalone_position[pos]["지수"]["김"]["입식"];
	val2 = abalone_position[pos]["지수"]["김"]["입식값"];
	table += "<td><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["김"]["양성"];
	val2 = abalone_position[pos]["지수"]["김"]["양성값"];
    table += "<td><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["김"]["수확"];
	val2 = abalone_position[pos]["지수"]["김"]["수확값"];
    table += "<td><span class='idx_" + val2 + "'>" + val + "</span></td><tr>";

 
	//var dates = [];
	
    //for (var i = 0; i < trs.length; i++ ){
    //    table += "" + trs[i] + "";   
    //}
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}
*/
//모바일 현재 작업지수 전복, 미역, 다시마, 김/////
function currdrawTable2(tableDiv, pos){
	var table = '<div style="padding:5px"><table border=0 colspacing=0 style="width:100%; font-size:14px; font-weight:bold; text-align:center;">';
    var trs = [];

//    table +='<tr><td style="height:30px;">품 목</td><td style="background:#d7e7ef; border-bottom:1px solid #bbbbbb">입 식</td><td style="background:#d7e7ef; border-bottom:1px  solid #bbbbbb">양 성</td><td style="background:#d7e7ef; border-bottom:1px  solid #bbbbbb">수 확</td></tr>';
    table +='<tr><td colspan=4 style="height:30px; border-top:1px solid #cccccc;border-bottom:1px solid #cccccc; color:#777777;"><table style="width:100%;"><tr><td style="border-right:1px solid #cccccc;">품 종</td><td style="border-right:1px solid #cccccc;">입 식</td><td style="border-right:1px solid #cccccc;">양 성</td><td style="">수 확</td></tr></table></td></tr>';


    table +='<tr><td style="height:30px; width:25%; border-bottom:1px dashed #cccccc; color:#555555">전 복</td>';
 
    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val2 = '';
	    
    val = abalone_position[pos]["지수"]["전복"]["입식"];
	val2 = abalone_position[pos]["지수"]["전복"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td></tr>";


    table +='<tr><td style="height:30px; width:25%; border-bottom:1px dashed #cccccc; color:#555555">미 역</td>';
	val = abalone_position[pos]["지수"]["해조류"]["입식"];
	val2 = abalone_position[pos]["지수"]["해조류"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["양성"];
	val2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["수확"];
	val2 = abalone_position[pos]["지수"]["해조류"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td></tr>";



	table +='<tr><td style="height:30px; width:25%;  border-bottom:1px dashed #cccccc; color:#555555">다시마</td>';
	val = abalone_position[pos]["지수"]["다시마"]["입식"];
	val2 = abalone_position[pos]["지수"]["다시마"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["양성"];
	val2 = abalone_position[pos]["지수"]["다시마"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["수확"];
	val2 = abalone_position[pos]["지수"]["다시마"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td></tr>";


	table +='<tr><td style="height:30px; width:25%;  border-bottom:1px dashed #cccccc; color:#555555">김</td>';
	val = abalone_position[pos]["지수"]["김"]["입식"];
	val2 = abalone_position[pos]["지수"]["김"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["김"]["양성"];
	val2 = abalone_position[pos]["지수"]["김"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["김"]["수확"];
	val2 = abalone_position[pos]["지수"]["김"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='midx" + val2 + "'>" + val + "</span></td><tr>";

 
	//var dates = [];
	
    //for (var i = 0; i < trs.length; i++ ){
    //    table += "" + trs[i] + "";   
    //}
    
    table += '</table></div>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//전복작업지수
function drawTable3(tableDiv, pos){
    var table = '<table border=1 style="border:1px solid #cccccc; width:100%">';
    var trs = [];


    trs.push("<tr><td style='background-color:whitesmoke; padding:5px; font-weight:bold;' colspan=2>시간별</td>" 
		+ "<td style='background-color:whitesmoke; style='padding:5px; font-weight:bold;' rowspan=1>입식</td>"
		+ "<td style='background-color:whitesmoke; style='padding:5px; font-weight:bold;' rowspan=1>양성/수확</td></tr>");

    var datas = abalone_position[pos].forecast;
	var dates = [];
	var tdstyle='';
	var tdstyle2='';
    var val = "현재";
	var val01 = abalone_position[pos]["지수"]["전복"]["입식"];
    var val02 = abalone_position[pos]["지수"]["전복"]["양성"];
 	tdstyle = abalone_position[pos]["지수"]["전복"]["입식값"];
	tdstyle2 = abalone_position[pos]["지수"]["전복"]["양성값"];

	trs[0] += "<tr><td colspan=2 style='padding:5px; font-weight:bold;'>" + val + "</td><td class='midx_" + tdstyle + "'>" + val01 + "</td><td class='midx_" + tdstyle2 + "'>" +  val02 +"</td></tr>";

	
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		var dateVal = null;
		for(var j = 0 ; j < dates.length ; j++){
			if(dates[j].date == b){
				dateVal = dates[j];
				break;
			}
		}
		
		if(dateVal == null){
			dateVal = {};
			dateVal.date = b;
			dateVal.colspan = 1;
			dates.push(dateVal);
		}else{
			dateVal['colspan']++;
		}
	}


	//중복된 날짜 계산후 td rosspan 수 처리////////////////////////////////
	var array = new Array();

	for (var i = 0; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var b = forecast["fcstDate"].substring(0);
			array[i]=b;
	}
	var result = {};
	for(var value in array) {
	    var index = array[value];
		result[index] = result[index] == undefined ? 1 : result[index] += 1;
	}        
	/////////////////////////////////////////////////////////////////////////
	var m = 0;
	var k = 0;

	for(var value in result) 
	{
		m += result[value];
		k = m-result[value];		
		trs[0] += "<tr><td  style='width:25%; padding:5px; font-weight:bold;' rowspan=" + result[value] + ">" + value.substring(6) + "일</td>" ;

		for(var i = k; i < m; i++)
		{
				var forecast = datas[i];
				//var b = forecast["fcstDate"].substring(6);	//일
				var b = value.substring(6);						//일
				var timeval = forecast["fcstTime"].substring(0, 2) + "시";		//시간

				tdstyle='';
				tdstyle2='';

				val01 = forecast["지수"]["전복"]["입식"];
				val02 = forecast["지수"]["전복"]["양성"];
				tdstyle =forecast["지수"]["전복"]["입식값"];
				tdstyle2 =forecast["지수"]["전복"]["양성값"];

				trs[0] += "<td style='width:25%; padding:5px; font-weight:bold;'>" + timeval + "</td><td width=25% class='midx_" + tdstyle + "'>"  + val01 + "</td><td width=25% class='midx_" + tdstyle2 + "'>"  + val02 + "</td></tr>";	//시간

		}
	}

    for (var i = 0; i < trs.length; i++ ){
        table += "" + trs[i] +  "";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//미역 작업지수
function drawTable4(tableDiv, pos){
     var table = '<table border=1 style="border:1px solid #cccccc; width:100%">';
    var trs = [];


    trs.push("<tr><td style='background-color:whitesmoke; padding:5px; font-weight:bold;' colspan=2>시간별</td>" 
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>입식</td>"
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>양성</td>"
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>수확</td></tr>");
 
    var datas = abalone_position[pos].forecast;
    var dates = [];
	var tdstyle='';
	var tdstyle2='';
	var tdstyle3='';

    var val = "현재";
	var val01 = abalone_position[pos]["지수"]["해조류"]["입식"];
    var val02 = abalone_position[pos]["지수"]["해조류"]["양성"];
    var val03 = abalone_position[pos]["지수"]["해조류"]["수확"];

	tdstyle = abalone_position[pos]["지수"]["해조류"]["입식값"];
    tdstyle2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    tdstyle3 = abalone_position[pos]["지수"]["해조류"]["수확값"];

	trs[0] += "<tr><td colspan=2>" + val + "</td><td class='midx_" + tdstyle + "'>" + val01 + "</td><td class='midx_" + tdstyle2 + "'>" +  val02 +"</td><td class='midx_" + tdstyle3 + "'>" +  val03 +"</td></tr>";
	
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		var dateVal = null;
		for(var j = 0 ; j < dates.length ; j++){
			if(dates[j].date == b){
				dateVal = dates[j];
				break;
			}
		}
		
		if(dateVal == null){
			dateVal = {};
			dateVal.date = b;
			dateVal.colspan = 1;
			dates.push(dateVal);
		}else{
			dateVal['colspan']++;
		}
	}


	//중복된 날짜 계산후 td rosspan 수 처리////////////////////////////////
	var array = new Array();

	for (var i = 0; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var b = forecast["fcstDate"].substring(0);
			array[i]=b;
	}
	var result = {};
	for(var value in array) {
	    var index = array[value];
		result[index] = result[index] == undefined ? 1 : result[index] += 1;
	}        
	/////////////////////////////////////////////////////////////////////////
	var m = 0;
	var k = 0;

	for(var value in result) 
	{
		m += result[value];
		k = m-result[value];		
		trs[0] += "<tr><td style='width:20%; font-weight:bold;' rowspan=" + result[value] + ">" + value.substring(6) + "일</td>" ;

		for(var i = k; i < m; i++)
		{
				var forecast = datas[i];
				//var b = forecast["fcstDate"].substring(6);	//일
				var b = value.substring(6);						//일
				var timeval = forecast["fcstTime"].substring(0, 2) + "시";		//시간
				tdstyle='';
				tdstyle2='';
				tdstyle3='';


				val01 = forecast["지수"]["해조류"]["입식"];
				val02 = forecast["지수"]["해조류"]["양성"];
				val03 = forecast["지수"]["해조류"]["수확"];

				tdstyle = forecast["지수"]["해조류"]["입식값"];
				tdstyle2 = forecast["지수"]["해조류"]["양성값"];
				tdstyle3 = forecast["지수"]["해조류"]["수확값"];

				trs[0] += "<td style='width:20%; font-weight:bold;'>" + timeval + "</td><td style='width:20%;' class='midx_" + tdstyle + "'>"  + val01 + "</td><td style='width:20%;' class='midx_" + tdstyle2 + "'>"  + val02 + "</td><td style='width:20%;' class='midx_" + tdstyle3 + "'>"  + val03 + "</td></tr>";	//시간
		}
	}

    for (var i = 0; i < trs.length; i++ ){
        table += "" + trs[i] +  "";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}

//다시마 작업지수
function drawTable5(tableDiv, pos){
    var table = '<table border=1 style="border:1px solid #cccccc; width:100%">';
    var trs = [];


    trs.push("<tr><td style='background-color:whitesmoke; padding:5px; font-weight:bold;' colspan=2>시간별</td>" 
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>입식</td>"
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>양성</td>"
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>수확</td></tr>");
 
    var datas = abalone_position[pos].forecast;
    var dates = [];
	var tdstyle='';
	var tdstyle2='';
	var tdstyle3='';

    var val = "현재";
	var val01 = abalone_position[pos]["지수"]["다시마"]["입식"];
    var val02 = abalone_position[pos]["지수"]["다시마"]["양성"];
    var val03 = abalone_position[pos]["지수"]["다시마"]["수확"];

	tdstyle = abalone_position[pos]["지수"]["다시마"]["입식값"];
    tdstyle2 = abalone_position[pos]["지수"]["다시마"]["양성값"];
    tdstyle3 = abalone_position[pos]["지수"]["다시마"]["수확값"];

	trs[0] += "<tr><td colspan=2>" + val + "</td><td class='midx_" + tdstyle + "'>" + val01 + "</td><td class='midx_" + tdstyle2 + "'>" +  val02 +"</td><td class='midx_" + tdstyle3 + "'>" +  val03 +"</td></tr>";
	
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		var dateVal = null;
		for(var j = 0 ; j < dates.length ; j++){
			if(dates[j].date == b){
				dateVal = dates[j];
				break;
			}
		}
		
		if(dateVal == null){
			dateVal = {};
			dateVal.date = b;
			dateVal.colspan = 1;
			dates.push(dateVal);
		}else{
			dateVal['colspan']++;
		}
	}


	//중복된 날짜 계산후 td rosspan 수 처리////////////////////////////////
	var array = new Array();

	for (var i = 0; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var b = forecast["fcstDate"].substring(0);
			array[i]=b;
	}
	var result = {};
	for(var value in array) {
	    var index = array[value];
		result[index] = result[index] == undefined ? 1 : result[index] += 1;
	}        
	/////////////////////////////////////////////////////////////////////////
	var m = 0;
	var k = 0;

	for(var value in result) 
	{
		m += result[value];
		k = m-result[value];		
		trs[0] += "<tr><td style='width:20%; font-weight:bold;' rowspan=" + result[value] + ">" + value.substring(6) + "일</td>" ;

		for(var i = k; i < m; i++)
		{
				var forecast = datas[i];
				//var b = forecast["fcstDate"].substring(6);	//일
				var b = value.substring(6);						//일
				var timeval = forecast["fcstTime"].substring(0, 2) + "시";		//시간
				tdstyle='';
				tdstyle2='';
				tdstyle3='';


				val01 = forecast["지수"]["다시마"]["입식"];
				val02 = forecast["지수"]["다시마"]["양성"];
				val03 = forecast["지수"]["다시마"]["수확"];

				tdstyle = forecast["지수"]["다시마"]["입식값"];
				tdstyle2 = forecast["지수"]["다시마"]["양성값"];
				tdstyle3 = forecast["지수"]["다시마"]["수확값"];

				trs[0] += "<td style='width:20%; font-weight:bold;'>" + timeval + "</td><td style='width:20%;' class='midx_" + tdstyle2 + "'>"  + val01 + "</td><td style='width:20%;' class='midx_" + tdstyle2 + "'>"  + val02 + "</td><td style='width:20%;' class='midx_" + tdstyle3 + "'>"  + val03 + "</td></tr>";	//시간
		}
	}

    for (var i = 0; i < trs.length; i++ ){
        table += "" + trs[i] +  "";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//김 작업지수
function drawTable6(tableDiv, pos){
    var table = '<table border=1 style="border:1px solid #cccccc; width:100%">';
    var trs = [];


    trs.push("<tr><td style='background-color:whitesmoke; padding:5px; font-weight:bold;' colspan=2>시간별</td>" 
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>입식</td>"
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>양성</td>"
		+ "<td style='background-color:whitesmoke; padding:5px; font-weight:bold;' rowspan=1>수확</td></tr>");
 
    var datas = abalone_position[pos].forecast;
    var dates = [];
	var tdstyle='';
	var tdstyle2='';
	var tdstyle3='';

    var val = "현재";
	var val01 = abalone_position[pos]["지수"]["김"]["입식"];
    var val02 = abalone_position[pos]["지수"]["김"]["양성"];
    var val03 = abalone_position[pos]["지수"]["김"]["수확"];

	tdstyle = abalone_position[pos]["지수"]["김"]["입식값"];
    tdstyle2 = abalone_position[pos]["지수"]["김"]["양성값"];
    tdstyle3 = abalone_position[pos]["지수"]["김"]["수확값"];

	trs[0] += "<tr><td colspan=2>" + val + "</td><td class='midx_" + tdstyle + "'>" + val01 + "</td><td class='midx_" + tdstyle2 + "'>" +  val02 +"</td><td class='midx_" + tdstyle3 + "'>" +  val03 +"</td></tr>";
	
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		var dateVal = null;
		for(var j = 0 ; j < dates.length ; j++){
			if(dates[j].date == b){
				dateVal = dates[j];
				break;
			}
		}
		
		if(dateVal == null){
			dateVal = {};
			dateVal.date = b;
			dateVal.colspan = 1;
			dates.push(dateVal);
		}else{
			dateVal['colspan']++;
		}
	}


	//중복된 날짜 계산후 td rosspan 수 처리////////////////////////////////
	var array = new Array();

	for (var i = 0; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var b = forecast["fcstDate"].substring(0);
			array[i]=b;
	}
	var result = {};
	for(var value in array) {
	    var index = array[value];
		result[index] = result[index] == undefined ? 1 : result[index] += 1;
	}        
	/////////////////////////////////////////////////////////////////////////
	var m = 0;
	var k = 0;

	for(var value in result) 
	{
		m += result[value];
		k = m-result[value];		
		trs[0] += "<tr><td style='width:20%; font-weight:bold;' rowspan=" + result[value] + ">" + value.substring(6) + "일</td>" ;

		for(var i = k; i < m; i++)
		{
				var forecast = datas[i];
				//var b = forecast["fcstDate"].substring(6);	//일
				var b = value.substring(6);						//일
				var timeval = forecast["fcstTime"].substring(0, 2) + "시";		//시간
				tdstyle='';
				tdstyle2='';
				tdstyle3='';


				val01 = forecast["지수"]["김"]["입식"];
				val02 = forecast["지수"]["김"]["양성"];
				val03 = forecast["지수"]["김"]["수확"];

				tdstyle = forecast["지수"]["김"]["입식값"];
				tdstyle2 = forecast["지수"]["김"]["양성값"];
				tdstyle3 = forecast["지수"]["김"]["수확값"];

				trs[0] += "<td style='width:20%; font-weight:bold;'>" + timeval + "</td><td style='width:20%;' class='midx_" + tdstyle + "'>"  + val01 + "</td><td style='width:20%;' class='midx_" + tdstyle2 + "'>"  + val02 + "</td><td style='width:20%;' class='midx_" + tdstyle3 + "'>"  + val03 + "</td></tr>";	//시간
		}
	}

    for (var i = 0; i < trs.length; i++ ){
        table += "" + trs[i] +  "";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}

//20170625 add 날씨
function drawTable7(tableDiv, pos){
	var abalone = abalone_position[pos];
    var datas = abalone_position[pos].forecast;
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var table = '<table border=1 style=" width:860px; font-size:10px; border:1px solid #cccccc">';

	//중복된 날짜 계산후 td collspan 수 처리////////////////////////////////
	var array = new Array();

	for (var i = 0; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var b = forecast["fcstDate"].substring(0);
			array[i]=b;
	}
	var result = {};
	//	array.sort();

	for(var value in array) {
	    var index = array[value];
		result[index] = result[index] == undefined ? 1 : result[index] += 1;
	}        
	/////////////////////////////////////////////////////////////////////////
	
	table += "<tr><td style='background-color:#e7e9fb; font-size:12px;'>날짜</td>";
	for(var value in result) {
		var today; 

		today='';
		today+=  value.substring(0,4) + "-";
		today+=  value.substring(4,6) + "-";
		today+=  value.substring(6);

		var today1=new Date(today).getDay();
		var todayLabel=week[today1];

		table +=  "<td colspan=" + result[value] + "><span style='font-weight:bold; font-size:12px;'>" + value.substring(6)  + "(" + todayLabel+ ")</span></td>"; 
	}
	/*
	table += "<tr><td style='background-color:#e7e9fb; font-size:12px;'>날짜</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
        var b = forecast["fcstDate"].substring(6);

		table +=  "<td><span style='font-weight:bold; font-size:12px;'>" + b  + "</span></td>"; 
	}
	*/
	

	/*
	table += "</tr><tr><td style='background-color:#e7e9fb;'>강수확률</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td>" +parseFloat(forecast.POP) + "</td>"; 
	}
	*/



	table += "<tr><td style='background-color:#e7e9fb; font-size:12px;'>시간</td>";
	for (var k = 0; k < datas.length; k++) {
        var forecast = datas[k];
        var b = forecast["fcstTime"].substring(0, 2);

		table +=  "<td><span style='font-weight:bold; font-size:12px; border:1px solid #cccccc; background-color:#e7e9fb;padding:2px 3px 2px 3px;border-radius:5px;'>" + b  + "</span></td>"; 
	}

	table += "</tr><tr><td style='background-color:#e7e9fb; font-size:12px;'>날씨</td><td colspan=21 style='padding-left:0px;'><table style='border:0; width:746px; line-height:100%; height:30px;'><tr>";
	//table += "</tr><tr><td style='background-color:#e7e9fb; font-size:12px;'>날씨</td>";
	for (var i = 1; i < datas.length; i++) {
        var forecast = datas[i];
		var b = forecast["fcstTime"].substring(0, 2);
		var sky=parseFloat(forecast.SKY);
		var pty=parseFloat(forecast.PTY);

		if(pty=='1')
		{		sky='5';	}	//비
		else if(pty=='2')
		{		sky='6';	}	//비,눈
		else if(pty=='3')
		{		sky='7';	}	//눈





//		table += "<td style='line-height:100%;' colspan=20>";
		table += "<td style='line-height:100%;'>";

			if ( b > 18 || b < 6) // 밤일때 
			{
					if(sky=='1')		//맑음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/nigthsky1.png width=32>"; 		}
					else if(sky=='2')	//구름조금
					{	table +=  "<img style='margin:0; padding:0;' src=./images/nightsky2.png width=32>"; 		}
					else if(sky=='3')	//구름많음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/nightsky3.png width=32>"; 		}	
					else if(sky=='4')	//흐림
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky4.png width=32>"; 		}
					else if(sky=='5')	//비
					{	table +=  "<img style='margin:0; padding:0;' src=http://web.kma.go.kr/images/icon/DY/DB05.png width=32>"; 		}	//비
					else if(sky=='6')	//비,눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty02.png width=32>"; 		}			//비,눈
					else if(sky=='7')	//눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty03.png width=32>"; 		}			//눈
			}
			else
			{
					if(sky=='1')		//맑음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky1.png width=32>"; 		}
					else if(sky=='2')	//구름조금
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky2.png width=32>"; 		}
					else if(sky=='3')	//구름많음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky3.png width=32>"; 		}	
					else if(sky=='4')	//흐림
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky4.png width=32>"; 		}
					else if(sky=='5')	//비
					{	table +=  "<img style='margin:0; padding:0;' src=http://web.kma.go.kr/images/icon/DY/DB05.png width=32>"; 		}	//비
					//{	table +=  "<img style='margin:0; padding:0;' src=./images/pty01.png width=35>"; 		}	//비
					else if(sky=='6')	//비,눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty02.png width=32>"; 		}			//비,눈
					else if(sky=='7')	//눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty03.png width=32>"; 		}			//눈

			}
		table +=  "</td>";
		//table +=  "<td>" + parseFloat(forecast.SKY)+ "</td>"; 
	}
	table += "</tr></table></td>";

	//table += "</tr><tr><td style='background-color:#e7e9fb; line-height:110%; font-size:12px;'>강수량 <br />(mm)</td>";
	table += "</tr><tr><td style='background-color:#e7e9fb; line-height:120%; font-size:12px;'>강수량 <br />(mm)</td><td colspan=21 style='padding-left:0px;'><table style='border:0px solid black; width:746px; line-height:100%; height:30px;'><tr>"

	for (var i = 2; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var r06val;
			r06val=parseFloat(forecast.R06);
			var k=0;
			
			table +=  "<td style='width:42px;'><span style='font-weight:bold; font-size:12px;'>";

			if(i==0)
			{
					if(!r06val)
						table +=  "-"; 
					else
						table +=  r06val; 
			}
			else
			{
					if(!r06val)
					{
						k=i-1;
						if(r06val=='0')	
							{	table +=  r06val;		}
						else
							{	table +=  parseFloat(datas[k].R06); }
					}
					else
					{	table +=  r06val;		}
			}
			table +=  "</span></td>";
	}
	table += "<td style='width:42px;'>" + parseFloat(forecast.R06) + "</td>";
	table += "</tr></table></td>";

	table += "</tr><tr><td style='line-height:130%; background-color:#e7e9fb; font-size:12px;'>기온 (℃)</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td><span style='font-size:12px;font-weight:bold; color:white;background-color:#f38686; padding:1px 6px 1px 6px;border-radius:5px;'>" + parseFloat(forecast.T3H)+ "</span></td>"; 
	}

	table += "<tr><td style='background-color:#e7e9fb; font-size:12px;'>최저/최고</td>";

	var m = 0;
	var k = 0;
	var tmnVal;
	var tmxVal;
	for(var value in result) 
	{
		m += result[value];
		k = m-result[value];		
		
		for(var i = k; i < m; i++)
		{
			var forecast = datas[i];
			var tmnVal2=parseFloat(forecast.TMN);
			var tmxVal2=parseFloat(forecast.TMX);

			if(tmnVal2)		tmnVal=tmnVal2;
			if(tmxVal2)		tmxVal=tmxVal2;

			if(!tmnVal) 	tmnVal='-';
			else			tmnVal=tmnVal;

			if(!tmxVal) 	tmxVal='-';
			else			tmxVal=tmxVal;
		}		
		table +=  "<td colspan=" + result[value] + "><span style='font-weight:bold; font-size:12px;'>" + tmnVal + "/" + tmxVal + "</span></td>"; 
		tmnVal='';
		tmxVal='';
	}


	


	table += "</tr><tr><td style='line-height:160%;background-color:#e7e9fb; height:46px; font-size:12px;'>풍향<br />(풍속)</td>";
	for (var i = 0; i < datas.length; i++) {
		var VECval=vecValue[Math.floor((parseFloat(forecast.VEC) + 22.5 * 0.5) / 22.5)];
		var val = '<img class="WSD_POS" src=./images/' +VECval + '.gif width="15px" height="15px">';

        var forecast = datas[i];
		table +=  "<td style='line-height:110%'>" + val + "<br><span style='font-size:12px; color:blue; font-weight:bold; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.WSD) + "</span></td>"; 
		
	}

	table += "</tr><tr><td style='background-color:#e7e9fb; font-size:12px;'>파고</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td><span style='font-size:12px; font-weight:bold; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.WAV)+ "</span></td>"; 
	}
	
	/******************************************************
	table += "</tr><tr><td style='background-color:#e7e9fb; line-height:110%; font-size:12px;'>최저</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td>" + parseFloat(forecast.TMN) + "</td>"; 
	}
	table += "</tr><tr><td style='background-color:#e7e9fb; line-height:110%; font-size:12px;'>최고</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td>" + parseFloat(forecast.TMX)+ "</td>"; 
	}
	*******************************************************/


	table += "</tr><tr><td style='background-color:#e7e9fb; line-height:110%; font-size:12px; width:60px;'>습도(%)</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td><span style='font-size:12px; font-weight:bold; background-color:whitesmoke; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.REH)+ "</span></td>"; 
	}


	table += "</tr>";

		
     
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//20170909 모바일 기상청 동네예보 add 날씨
function drawTable8(tableDiv, pos){
	var abalone = abalone_position[pos];
    var datas = abalone_position[pos].forecast;
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var table = '<table border=0 style="width:100%; text-align:center; font-size:10px; border:1px solid #cccccc">';

	var datai= 8;

	//중복된 날짜 계산후 td collspan 수 처리////////////////////////////////
	var array = new Array();

	//for (var i = 0; i < datas.length; i++) 
	for (var i = 0; i < datai; i++) 
	{
			var forecast = datas[i];
			var b = forecast["fcstDate"].substring(0);
			array[i]=b;
	}
	var result = {};
	//	array.sort();

	for(var value in array) {
	    var index = array[value];
		result[index] = result[index] == undefined ? 1 : result[index] += 1;
	}        
	/////////////////////////////////////////////////////////////////////////

	//날짜	
	table += "<tr>";
	for(var value in result) {
		var today; 

		today='';
		today+=  value.substring(0,4) + "-";
		today+=  value.substring(4,6) + "-";
		today+=  value.substring(6);

		var today1=new Date(today).getDay();
		var todayLabel=week[today1];

		table +=  "<td colspan=" + result[value] + " style='text-align:left; padding:10px 0 0 9px;'><span style='font-weight:bold; font-size:12px;'>" + value.substring(6)  + "(" + todayLabel+ ")</span></td>"; 
	}
	

	//시간
	table += "<tr>";
	//for (var k = 0; k < datas.length; k++) {
	for (var k = 0; k < datai; k++) {
        var forecast = datas[k];
        var b = forecast["fcstTime"].substring(0, 2);

		table +=  "<td><span style='font-weight:bold; font-size:13px;'>" + b  + "시</span></td>"; 
	}

	table += "</tr><tr>";

	//날씨
	//for (var i = 1; i < datas.length; i++) {
	for (var k = 0; k < datai; k++) {
        var forecast = datas[k];
		var b = forecast["fcstTime"].substring(0, 2);
		var sky=parseFloat(forecast.SKY);
		var pty=parseFloat(forecast.PTY);

		if(pty=='1')
		{		sky='5';	}	//비
		else if(pty=='2')
		{		sky='6';	}	//비,눈
		else if(pty=='3')
		{		sky='7';	}	//눈



		table += "<td valign=top style='padding:3px 0 3px 0; line-height:130%; font-size:11px;'>";

			if ( b > 18 || b < 6) // 밤일때 
			{
					if(sky=='1')		//맑음
					{	table +=  "<img style='margin:0; padding:0;' src=../images/nightsky1.png width=32><br>맑음"; 		}
					else if(sky=='2')	//구름조금
					{	table +=  "<img style='margin:0; padding:0;' src=../images/nightsky2.png width=32><br>구름<br>조금"; 		}
					else if(sky=='3')	//구름많음
					{	table +=  "<img style='margin:0; padding:0;' src=../images/nightsky3.png width=32><br>구름<br>많음"; 		}	
					else if(sky=='4')	//흐림
					{	table +=  "<img style='margin:0; padding:0;' src=../images/sky4.png width=32><br>흐림"; 		}
					else if(sky=='5')	//비
					{	table +=  "<img style='margin:0; padding:0;' src=http://web.kma.go.kr/images/icon/DY/DB05.png width=32><br>비"; 		}	//비
					else if(sky=='6')	//비,눈
					{	table +=  "<img style='margin:0; padding:0;' src=../images/pty02.png width=32><br>비/눈"; 		}			//비,눈
					else if(sky=='7')	//눈
					{	table +=  "<img style='margin:0; padding:0;' src=../images/pty03.png width=32><br>눈"; 		}			//눈
			}
			else
			{
					if(sky=='1')		//맑음
					{	table +=  "<img style='margin:0; padding:0;' src=../images/sky1.png width=32><br> 맑음"; 		}
					else if(sky=='2')	//구름조금
					{	table +=  "<img style='margin:0; padding:0;' src=../images/sky2.png width=32><br>구름<br>조금"; 		}
					else if(sky=='3')	//구름많음
					{	table +=  "<img style='margin:0; padding:0;' src=../images/sky3.png width=32><br>구름<br>많음"; 		}	
					else if(sky=='4')	//흐림
					{	table +=  "<img style='margin:0; padding:0;' src=../images/sky4.png width=32><br>흐림"; 		}
					else if(sky=='5')	//비
					{	table +=  "<img style='margin:0; padding:0;' src=http://web.kma.go.kr/images/icon/DY/DB05.png width=32><br>비"; 		}	//비
					//{	table +=  "<img style='margin:0; padding:0;' src=./images/pty01.png width=35>"; 		}	//비
					else if(sky=='6')	//비,눈
					{	table +=  "<img style='margin:0; padding:0;' src=../images/pty02.png width=32><br>비/눈"; 		}			//비,눈
					else if(sky=='7')	//눈
					{	table +=  "<img style='margin:0; padding:0;' src=../images/pty03.png width=32><br>눈"; 		}			//눈

			}
		table +=  "</td>";
	}

	table += "</tr><tr>"

	//강수량
	//for (var i = 2; i < datas.length; i++) 
	for (var i = 0; i < datai; i++) 
	{
			var forecast = datas[i];
			var r06val;
			r06val=parseFloat(forecast.R06);
			var k=0;
			
			table +=  "<td style='width:42px;'><span style='font-weight:normal; font-size:12px;'>";

			if(i==0)
			{
					//if(!r06val)	table +=  "-"; 
					if(!r06val)
					{
						var curWeather = abalone_position[pos].currWeather;
						var rn1cur =curWeather.RN1;						
						table += rn1cur; 
					}
					else		table +=  r06val; 

			}
			else
			{
					if(!r06val)
					{
						k=i-1;
						if(r06val=='0')	
							{	table +=  r06val;		}
						else
							{	table +=  parseFloat(datas[k].R06); }
					}
					else
					{	table +=  r06val;		}
			}
			table +=  "<span style='font-size:10px; letter-spacing:-1px;'>mm</span></span></td>";
	}


	//기온
	table += "</tr><tr>";
	//for (var i = 0; i < datas.length; i++) {
	for (var i = 0; i < datai; i++) {
        var forecast = datas[i];
		table +=  "<td style='padding:5px 0 10px 0;'><span style='font-size:14px;font-weight:bold;'>" + parseFloat(forecast.T3H)+ "°</span></td>"; 
	}

	

	//풍향 풍속
	table += "</tr><tr>";
	//for (var i = 0; i < datas.length; i++) {
	for (var i = 0; i < datai; i++) {
		var VECval=vecValue[Math.floor((parseFloat(forecast.VEC) + 22.5 * 0.5) / 22.5)];
		var val = '<img class="WSD_POS" src=../images/' +VECval + '.gif width="15px" height="15px">';

        var forecast = datas[i];
		table +=  "<td style='line-height:120%; padding:0px 0 10px 0;'>" + val + "<br><span style='font-size:12px; color:blue; font-weight:normal;'>" + parseFloat(forecast.WSD) + "<span style='font-size:10px;'>m/s</span></span></td>"; 
		
	}

	
	//습도
	table += "</tr><tr>";
	//for (var i = 0; i < datas.length; i++) {
	for (var i = 0; i < datai; i++) {
        var forecast = datas[i];
		table +=  "<td style='padding-bottom:15px;'><span style='font-size:12px; font-weight:normal; background-color:whitesmoke; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.REH)+ "%</span></td>"; 
	}


	table += "</tr>";

		
     
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}