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
	var table = '<table border=0 cellspacing=0 style="width:390px; font-size:13px; margin-top:0px; font-weight:normal; text-align:center;">';
    var trs = [];

    table +='<tr><td rowspan=6 style="width:120px; font-size:16px; font-weight:bold;">작업지수</td><td style="background:#d7e7ef; width:90px;"></td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">입식</td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">양성</td><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc">수확</td></tr>';


    table +='<tr><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc; height:32px;">전복</td>';
 
    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val2 = '';
	    
    val = abalone_position[pos]["지수"]["전복"]["입식"];
	val2 = abalone_position[pos]["지수"]["전복"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc;'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["전복"]["양성"];
	val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";


	table +='<tr><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc; height:32px;">미역</td>';
	val = abalone_position[pos]["지수"]["해조류"]["입식"];
	val2 = abalone_position[pos]["지수"]["해조류"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["양성"];
	val2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["해조류"]["수확"];
	val2 = abalone_position[pos]["지수"]["해조류"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";



	table +='<tr><td style="background:#d7e7ef; border-bottom:1px dashed #cccccc; height:32px;">다시마</td>';
	val = abalone_position[pos]["지수"]["다시마"]["입식"];
	val2 = abalone_position[pos]["지수"]["다시마"]["입식값"];
	table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["양성"];
	val2 = abalone_position[pos]["지수"]["다시마"]["양성값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    val = abalone_position[pos]["지수"]["다시마"]["수확"];
	val2 = abalone_position[pos]["지수"]["다시마"]["수확값"];
    table += "<td style='border-bottom:1px dashed #cccccc'><span class='idx_" + val2 + "'>" + val + "</span></td></tr>";


	table +='<tr><td style="background:#d7e7ef; height:32px;">김</td>';
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


//전복작업지수
function drawTable3(tableDiv, pos){
    var table = '<table class=abalone>';

    var trs = [];

    trs.push("<th rowspan=2 style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;'>시간별</th>");
	trs.push("");
    trs.push("<td style='border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>입식</td>");
    trs.push("<td style='border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>양성</td>");
	trs.push("<td style='border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>수확</td>");
 
    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

	var forecast = datas[0];

    var val = "현재";
	var dayM 
    var val2 = '';
	
	//20170625 add
	val3 = abalone_position[pos]["지수"]["전복"]["파고"];
	val4 = abalone_position[pos]["지수"]["전복"]["강수량"];
	val5 = abalone_position[pos]["지수"]["전복"]["풍속"];
	val6 = abalone_position[pos]["지수"]["전복"]["기온"];
	val7 = abalone_position[pos]["지수"]["전복"]["수온"];
	val8 = abalone_position[pos]["지수"]["전복"]["지수값1"];
	val9 = abalone_position[pos]["지수"]["전복"]["지수값2"];
	val10 = abalone_position[pos]["지수"]["전복"]["지수값3"];

	val11 = abalone_position[pos]["지수"]["전복"]["입식수온"];
	val12 = abalone_position[pos]["지수"]["전복"]["입식기온"];
	val13 =abalone_position[pos]["지수"]["전복"]["입식강수량"];
	val14 = abalone_position[pos]["지수"]["전복"]["입식풍속"];
	val15 =abalone_position[pos]["지수"]["전복"]["입식파고"];

	val16 = abalone_position[pos]["지수"]["전복"]["양성수온"];
	val17 = abalone_position[pos]["지수"]["전복"]["양성기온"];

	val18 = abalone_position[pos]["지수"]["전복"]["수확수온"];
	val19 = abalone_position[pos]["지수"]["전복"]["수확기온"];


	val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
	val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
	val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;

		

	////////////////////////////////////////

    trs[0] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;' rowspan=2>" + val + "</th>";
    val = abalone_position[pos]["지수"]["전복"]["입식"];
    val2 = abalone_position[pos]["지수"]["전복"]["입식값"];
    trs[2] += "<td style='border:3px solid white; border-collapse:collapse;' title='" + val20 + "'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["전복"]["양성"];
    val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" + val21 + "'><span class='idx_" + val2 + "'>" + val + "</span></td>";
	val = abalone_position[pos]["지수"]["전복"]["양성"];
    val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    trs[4] += "<td style='border:3px solid white; border-collapse:collapse;' title='" + val22 + "'><span class='idx_" + val2 + "'>" + val + "</span></td>";

    //val = abalone_position[pos]["지수"]["전복"]["수확"];
    //trs[8] += "<td>" + val + "</td>";
 
	var dates = [];
	
	for (var i = 0; i < datas.length; i++) {
		var forecast = datas[i];
        var a = forecast["fcstDate"].substring(0);		//전체날짜 yyyymmdd
        var b = forecast["fcstDate"].substring(6);		//일 구함  dd
		var c = forecast["fcstTime"].substring(0,2);	//시간

		//00시를 24시로 표기하기 위해 00시일때 날짜에서 하루를 뺀다 //////
		var year = a.substr(0,4);		
		var month = a.substr(4,2);
		var day= a.substr(6,2);
		var sday=new Date(year, month, day-1);	//

		var cDay3 = sday.getDate();		
		
		if (c=='00')	
		{
			b=cDay3;
		}
	
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
		//document.write(i + "=> a=" + a + "시간= " + c +  ", b=" + b + ", cDay3=" + cDay3 + ", sday= " + sday + ", year=" + year + ", month=" + month + ", day=" + day + "<br>");
	}

	
	for(var i = 0; i < dates.length ; i++){
		if(i==3)	{	break	}
		else		{	trs[0] += '<th style="border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;" colspan="' + dates[i].colspan + '">' + dates[i].date + '일</th>';		}
	}
	
    for(var i = 0; i < datas.length ; i++){
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		if(forecast["fcstTime"].substring(0, 2)==00)
		{	
			//if (i==20 && forecast["fcstTime"].substring(0, 2)==00)
			//{			var val = "00시";				}
			//else{
				var val = "24시";	
			//	}
		}
		else
		{	var val = forecast["fcstTime"].substring(0, 2) + "시";}        

        var val2 = '';


		//20170625 add
		val3 = forecast["지수"]["전복"]["파고"];
		val4 = forecast["지수"]["전복"]["강수량"];
		val5 = forecast["지수"]["전복"]["풍속"];
		val6 = forecast["지수"]["전복"]["기온"];
		val7 = forecast["지수"]["전복"]["수온"];
		val8 = forecast["지수"]["전복"]["지수값1"];
		val9 = forecast["지수"]["전복"]["지수값2"];
		val10 = forecast["지수"]["전복"]["지수값3"];

		val11 = forecast["지수"]["전복"]["입식수온"];
		val12 = forecast["지수"]["전복"]["입식기온"];
		val13 =forecast["지수"]["전복"]["입식강수량"];
		val14 = forecast["지수"]["전복"]["입식풍속"];
		val15 =forecast["지수"]["전복"]["입식파고"];

		val16 = forecast["지수"]["전복"]["양성수온"];
		val17 = forecast["지수"]["전복"]["양성기온"];

		val18 = forecast["지수"]["전복"]["양성수온"];
		val19 = forecast["지수"]["전복"]["양성기온"];


		val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
		val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
		val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;

		////////////////////////////////////////

        trs[1] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;'>"  + val + "</th>";
        val = forecast["지수"]["전복"]["입식"];
        val2 = forecast["지수"]["전복"]["입식값"];
		trs[2] += "<td style='border:3px solid white; border-collapse:collapse;' title='" + val20 + "'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["전복"]["양성"];
        val2 = forecast["지수"]["전복"]["양성값"];
        trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" + val21 + "'><span class='idx_" + val2 + "'>" + val + "</span></td>";
		val = forecast["지수"]["전복"]["양성"];
        val2 = forecast["지수"]["전복"]["양성값"];
        trs[4] += "<td style='border:3px solid white; border-collapse:collapse;' title='" + val22 + "'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        //val = forecast["지수"]["전복"]["수확"];
        //trs[8] += "<td>" + val + "</td>";
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//미역 작업지수
function drawTable4(tableDiv, pos){
    var table = '<table class=abalone>';

    var trs = [];

    trs.push("<th style='border:3px solid white; border-collapse:collapse; background-color:#d7e7ef;' rowspan=2>시간별</th>");
	trs.push("");
    trs.push("<td style='border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>입식</td>");
    trs.push("<td style='border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>양성</td>");
    trs.push("<td style='border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>수확</td>");

    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;


    var val = "현재";
    var val2 = '';

		//20170625 add
		val3 = abalone_position[pos]["지수"]["전복"]["파고"];
		val4 = abalone_position[pos]["지수"]["전복"]["강수량"];
		val5 = abalone_position[pos]["지수"]["전복"]["풍속"];
		val6 = abalone_position[pos]["지수"]["전복"]["기온"];
		val7 = abalone_position[pos]["지수"]["전복"]["수온"];
		val8 = abalone_position[pos]["지수"]["해조류"]["지수값1"];
		val9 = abalone_position[pos]["지수"]["해조류"]["지수값2"];
		val10 = abalone_position[pos]["지수"]["해조류"]["지수값3"];

		val11 = abalone_position[pos]["지수"]["해조류"]["입식수온"];
	val12 = abalone_position[pos]["지수"]["해조류"]["입식기온"];
	val13 =abalone_position[pos]["지수"]["전복"]["입식강수량"];
	val14 = abalone_position[pos]["지수"]["전복"]["입식풍속"];
	val15 =abalone_position[pos]["지수"]["전복"]["입식파고"];

	val16 = abalone_position[pos]["지수"]["해조류"]["양성수온"];
	val17 = abalone_position[pos]["지수"]["해조류"]["양성기온"];

	val18 = abalone_position[pos]["지수"]["해조류"]["수확수온"];
	val19 = abalone_position[pos]["지수"]["해조류"]["수확기온"];


	val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
	val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
	val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;
		////////////////////////////////////////

    trs[0] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;' rowspan=2>" + val + "</th>";
    val = abalone_position[pos]["지수"]["해조류"]["입식"];
    val2 = abalone_position[pos]["지수"]["해조류"]["입식값"];
    trs[2] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val20 +"' ><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["해조류"]["양성"];
    val2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val21 +"' ><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["해조류"]["수확"];
    val2 = abalone_position[pos]["지수"]["해조류"]["수확값"];
    trs[4] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val22 +"' ><span class='idx_" + val2 + "'>" + val + "</span></td>";

	var dates = [];
	
	for (var i = 0; i < datas.length; i++) {

        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(0);		//전체날짜 yyyymmdd
        var b = forecast["fcstDate"].substring(6);		//일 구함  dd
		var c = forecast["fcstTime"].substring(0,2);	//시간

		//00시를 24시로 표기하기 위해 00시일때 날짜에서 하루를 뺀다 //////
		var year = a.substr(0,4);		
		var month = a.substr(4,2);
		var day= a.substr(6,2);
		var sday=new Date(year, month, day-1);	//하루를 뺀다
		var cDay3 = sday.getDate();				//일 구함

		if (c=='00')	{	b=cDay3;	}

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
		if(i==3)	{	break	}
		else		{	trs[0] += '<th style="border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;" colspan="' + dates[i].colspan + '">' + dates[i].date + '일</th>';		}
	}
	
    for(var i = 0; i < datas.length ; i++){
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

        if(forecast["fcstTime"].substring(0, 2)==00)
		{	
			//if (i==20 && forecast["fcstTime"].substring(0, 2)==00)
			//{			var val = "00시";				}
			//else{
				var val = "24시";	
			//	}
		}
		else
		{	var val = forecast["fcstTime"].substring(0, 2) + "시";}        

        var val2 = '';
		//20170625 add
		val3 = forecast["지수"]["전복"]["파고"];
		val4 = forecast["지수"]["전복"]["강수량"];
		//if(!forecast["지수"]["전복"]["강수량"])	{	val4 =0; }
		//else									{	val4 = forecast["지수"]["전복"]["강수량"];}
		val5 = forecast["지수"]["전복"]["풍속"];
		val6 = forecast["지수"]["전복"]["기온"];
		val7 = forecast["지수"]["전복"]["수온"];
		val8 = forecast["지수"]["해조류"]["지수값1"];
		val9 = forecast["지수"]["해조류"]["지수값2"];
		val10 = forecast["지수"]["해조류"]["지수값3"];

		val11 = forecast["지수"]["해조류"]["입식수온"];
		val12 = forecast["지수"]["해조류"]["입식기온"];
		val13 =forecast["지수"]["전복"]["입식강수량"];
		val14 = forecast["지수"]["전복"]["입식풍속"];
		val15 =forecast["지수"]["전복"]["입식파고"];

		val16 = forecast["지수"]["해조류"]["양성수온"];
		val17 = forecast["지수"]["해조류"]["양성기온"];

		val18 = forecast["지수"]["해조류"]["수확수온"];
		val19 = forecast["지수"]["해조류"]["수확기온"];


		val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
		val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
		val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;
		////////////////////////////////////////

        trs[1] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;'>" + val + "</th>";
        val = forecast["지수"]["해조류"]["입식"];
        val2 = forecast["지수"]["해조류"]["입식값"];
        trs[2] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val20 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["해조류"]["양성"];
        val2 = forecast["지수"]["해조류"]["양성값"];
        trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val21 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["해조류"]["수확"];
        val2 = forecast["지수"]["해조류"]["수확값"];
        trs[4] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val22 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}

//다시마 작업지수
function drawTable5(tableDiv, pos){
    var table = '<table class=abalone>';
    var trs = [];

    trs.push("<th style='border:3px solid white; border-collapse:collapse; background-color:#d7e7ef;' rowspan=2>시간별</th>");
	trs.push("");
    trs.push("<td style='font-weight:bold;color:#1B40A8;border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>입식</td>");
    trs.push("<td style='font-weight:bold;color:#1B40A8;border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>양성</td>");
    trs.push("<td style='font-weight:bold;color:#1B40A8;border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;''>수확</td>");

    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;


    var val = "현재";
    var val2 = '';

	//20170625 add
	val3 = abalone_position[pos]["지수"]["전복"]["파고"];
	val4 = abalone_position[pos]["지수"]["전복"]["강수량"];
	val5 = abalone_position[pos]["지수"]["전복"]["풍속"];
	val6 = abalone_position[pos]["지수"]["전복"]["기온"];
	val7 = abalone_position[pos]["지수"]["전복"]["수온"];
	val8 = abalone_position[pos]["지수"]["다시마"]["지수값1"];
	val9 = abalone_position[pos]["지수"]["다시마"]["지수값2"];
	val10 = abalone_position[pos]["지수"]["다시마"]["지수값3"];
	
	

	val11 = abalone_position[pos]["지수"]["다시마"]["입식수온"];
	val12 = abalone_position[pos]["지수"]["다시마"]["입식기온"];
	val13 =abalone_position[pos]["지수"]["전복"]["입식강수량"];
	val14 = abalone_position[pos]["지수"]["전복"]["입식풍속"];
	val15 =abalone_position[pos]["지수"]["전복"]["입식파고"];

	val16 = abalone_position[pos]["지수"]["다시마"]["양성수온"];
	val17 = abalone_position[pos]["지수"]["다시마"]["양성기온"];

	val18 = abalone_position[pos]["지수"]["다시마"]["수확수온"];
	val19 = abalone_position[pos]["지수"]["다시마"]["수확기온"];


	val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
	val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
	val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;
	////////////////////////////////////////

    trs[0] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;' rowspan=2>" + val + "</th>";
    val = abalone_position[pos]["지수"]["다시마"]["입식"];
    val2 = abalone_position[pos]["지수"]["다시마"]["입식값"];
    trs[2] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val20 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["다시마"]["양성"];
    val2 = abalone_position[pos]["지수"]["다시마"]["양성값"];
    trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val21 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["다시마"]["수확"];
    val2 = abalone_position[pos]["지수"]["다시마"]["수확값"];
    trs[4] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val22 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";

	var dates = [];
	
	for (var i = 0; i < datas.length; i++) {

        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(0);		//전체날짜 yyyymmdd
        var b = forecast["fcstDate"].substring(6);		//일 구함  dd
		var c = forecast["fcstTime"].substring(0,2);	//시간
			
		//00시를 24시로 표기하기 위해 00시일때 날짜에서 하루를 뺀다 //////
		var year = a.substr(0,4);		
		var month = a.substr(4,2);
		var day= a.substr(6,2);
		var sday=new Date(year, month, day-1);	//하루를 뺀다
		var cDay3 = sday.getDate();				//일 구함

		if (c=='00')	{	b=cDay3;	}

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
		if(i==3)	{	break	}
		else		{	trs[0] += '<th style="border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;" colspan="' + dates[i].colspan + '">' + dates[i].date + '일</th>';		}
	}
	
    for(var i = 0; i < datas.length ; i++){
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

       if(forecast["fcstTime"].substring(0, 2)==00)
		{	
			//if (i==20 && forecast["fcstTime"].substring(0, 2)==00)
			//{			var val = "00시";				}
			//else{
				var val = "24시";	
			//	}
		}
		else
		{	var val = forecast["fcstTime"].substring(0, 2) + "시";}        

        var val2 = '';

		//20170625 add
		val3 = forecast["지수"]["전복"]["파고"];
		val4 = forecast["지수"]["전복"]["강수량"];
		//if(forecast["지수"]["전복"]["강수량"]=='NaN')	{	val9 ='h'; }
		//else									{	val9 = forecast["지수"]["전복"]["강수량"];}
		val5 = forecast["지수"]["전복"]["풍속"];
		val6 = forecast["지수"]["전복"]["기온"];
		val7 = forecast["지수"]["전복"]["수온"];

		val8 = forecast["지수"]["다시마"]["지수값1"];
		val9 = forecast["지수"]["다시마"]["지수값2"];
		val10 = forecast["지수"]["다시마"]["지수값3"];

		val11 = forecast["지수"]["다시마"]["입식수온"];
		val12 = forecast["지수"]["다시마"]["입식기온"];
		val13 =forecast["지수"]["전복"]["입식강수량"];
		val14 = forecast["지수"]["전복"]["입식풍속"];
		val15 =forecast["지수"]["전복"]["입식파고"];

		val16 = forecast["지수"]["다시마"]["양성수온"];
		val17 = forecast["지수"]["다시마"]["양성기온"];

		val18 = forecast["지수"]["다시마"]["수확수온"];
		val19 = forecast["지수"]["다시마"]["수확기온"];


		val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
		val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
		val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;

		////////////////////////////////////////

        trs[1] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;'>" + val + "</th>";
        val = forecast["지수"]["다시마"]["입식"];
        val2 = forecast["지수"]["다시마"]["입식값"];
        trs[2] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val20 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["다시마"]["양성"];
        val2 = forecast["지수"]["다시마"]["양성값"];
        trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val21+"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["다시마"]["수확"];
        val2 = forecast["지수"]["다시마"]["수확값"];
        trs[4] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val22 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}


//김 작업지수
function drawTable6(tableDiv, pos){
    var table = '<table class=abalone>';
    var trs = [];

    trs.push("<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;' rowspan=2>시간별</th>");
	trs.push("");
    trs.push("<td style='font-weight:bold;color:#1B40A8;border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>입식</td>");
    trs.push("<td style='font-weight:bold;color:#1B40A8;border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;'>양성</td>");
    trs.push("<td style='font-weight:bold;color:#1B40A8;border:3px solid white; font-size:13px; background-color:#d7e7ef; border-collapse:collapse;''>수확</td>");

    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;


    var val = "현재";
    var val2 = '';

	//20170625 add
	val3 = abalone_position[pos]["지수"]["전복"]["파고"];
	val4 = abalone_position[pos]["지수"]["전복"]["강수량"];
	val5 = abalone_position[pos]["지수"]["전복"]["풍속"];
	val6 = abalone_position[pos]["지수"]["전복"]["기온"];
	val7 = abalone_position[pos]["지수"]["전복"]["수온"];
	val8 = abalone_position[pos]["지수"]["김"]["지수값1"];
	val9 = abalone_position[pos]["지수"]["김"]["지수값2"];
	val10 = abalone_position[pos]["지수"]["김"]["지수값3"];


	val11 = abalone_position[pos]["지수"]["김"]["입식수온"];
	val12 = abalone_position[pos]["지수"]["김"]["입식기온"];
	val13 =abalone_position[pos]["지수"]["전복"]["입식강수량"];
	val14 = abalone_position[pos]["지수"]["전복"]["입식풍속"];
	val15 =abalone_position[pos]["지수"]["전복"]["입식파고"];

	val16 = abalone_position[pos]["지수"]["김"]["양성수온"];
	val17 = abalone_position[pos]["지수"]["김"]["양성기온"];

	val18 = abalone_position[pos]["지수"]["김"]["수확수온"];
	val19 = abalone_position[pos]["지수"]["김"]["수확기온"];


	val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
	val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
	val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;

	////////////////////////////////////////

    trs[0] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;' rowspan=2>" + val + "</th>";
    val = abalone_position[pos]["지수"]["김"]["입식"];
    val2 = abalone_position[pos]["지수"]["김"]["입식값"];
    trs[2]  += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val20 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["김"]["양성"];
    val2 = abalone_position[pos]["지수"]["김"]["양성값"];
    trs[3] += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val21 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    val = abalone_position[pos]["지수"]["김"]["수확"];
    val2 = abalone_position[pos]["지수"]["김"]["수확값"];
    trs[4]  += "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val22 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";

	var dates = [];
	
	for (var i = 0; i < datas.length; i++) {

        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(0);		//전체날짜 yyyymmdd
        var b = forecast["fcstDate"].substring(6);		//일 구함  dd
		var c = forecast["fcstTime"].substring(0,2);	//시간
			
		//00시를 24시로 표기하기 위해 00시일때 날짜에서 하루를 뺀다 //////
		var year = a.substr(0,4);		
		var month = a.substr(4,2);
		var day= a.substr(6,2);
		var sday=new Date(year, month, day-1);	//하루를 뺀다
		var cDay3 = sday.getDate();				//일 구함

		if (c=='00')	{	b=cDay3;	}

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
		if(i==3)	{	break	}
		else		{	trs[0] += '<th style="border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;" colspan="' + dates[i].colspan + '">' + dates[i].date + '일</th>';		}
	}
	
    for(var i = 0; i < datas.length ; i++){
        var forecast = datas[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

        if(forecast["fcstTime"].substring(0, 2)==00)
		{	
			//if (i==20 && forecast["fcstTime"].substring(0, 2)==00)
			//{			var val = "00시";				}
			//else{
				var val = "24시";	
			//	}
		}
		else
		{	var val = forecast["fcstTime"].substring(0, 2) + "시";}        

        var val2 = '';
		//20170625 add
		val3 = forecast["지수"]["전복"]["파고"];
		val4 = forecast["지수"]["전복"]["강수량"];
		//if(!forecast["지수"]["전복"]["강수량"])	{	val4 =''; }
		//else									{	val4 = forecast["지수"]["전복"]["강수량"];}
		val5 = forecast["지수"]["전복"]["풍속"];
		val6 = forecast["지수"]["전복"]["기온"];
		val7 = forecast["지수"]["전복"]["수온"];
		val8 = forecast["지수"]["김"]["지수값1"];
		val9 = forecast["지수"]["김"]["지수값2"];
		val10 = forecast["지수"]["김"]["지수값3"];



		val11 = forecast["지수"]["김"]["입식수온"];
		val12 = forecast["지수"]["김"]["입식기온"];
		val13 =forecast["지수"]["전복"]["입식강수량"];
		val14 = forecast["지수"]["전복"]["입식풍속"];
		val15 =forecast["지수"]["전복"]["입식파고"];

		val16 = forecast["지수"]["김"]["양성수온"];
		val17 = forecast["지수"]["김"]["양성기온"];

		val18 = forecast["지수"]["김"]["수확수온"];
		val19 = forecast["지수"]["김"]["수확기온"];


		val20 = " 수   온 : " + val7 + " ℃ (지수:" + val11 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val12 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val8 ;
		val21 = " 수   온 : " + val7 + " ℃ (지수:" + val16 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val17 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val9 ;
		val22 = " 수   온 : " + val7 + " ℃ (지수:" + val18 + "점)\n기   온 : " + val6 + " ℃ (지수:" + val19 + "점)\n강수량 : " + val4 + " mm (지수:" + val13 + "점)\n풍   속 : " + val5+ " m/s (지수:" + val14 + "점)\n파   고 : " + val3 + " m {지수:" + val15 + "점)\n지수결과값 : " + val10 ;
		////////////////////////////////////////

        trs[1] += "<th style='border:3px solid white; border-collapse:collapse;background-color:#d7e7ef;'>" + val + "</th>";
        val = forecast["지수"]["김"]["입식"];
        val2 = forecast["지수"]["김"]["입식값"];
        trs[2] +=  "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val20 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["김"]["양성"];
        val2 = forecast["지수"]["김"]["양성값"];
        trs[3] +=  "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val21 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
        val = forecast["지수"]["김"]["수확"];
        val2 = forecast["지수"]["김"]["수확값"];
        trs[4] +=  "<td style='border:3px solid white; border-collapse:collapse;' title='" +  val22 +"'><span class='idx_" + val2 + "'>" + val + "</span></td>";
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
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
	var table = '<table>';

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
	
	table += "<tr><th class=tdtext style='width:60px;'>날짜</th>";
	table += "<th colspan=24 style='margin:0; padding:0;'><table border=0 style='border:0; padding:0; margin:0; width:768px'><tr>";

	var todayi=0;
	var colwidth;
	
	for(var value in result) {
		var today; 
		

		today='';
		today+=  value.substring(0,4) + "-";
		today+=  value.substring(4,6) + "-";
		today+=  value.substring(6);
		
		var today1=new Date(today).getDay();
		var todayLabel=week[today1];

		if(todayi==0)
			if (result[value]==1)
			{	colwidth=result[value]*52;	}
			else
			{	colwidth=result[value]*39;	}
		else
			colwidth=result[value]*35;

		if(todayi==3)
			{break;}

		//table +=  "<th style='letter-spacing:-1px;' colspan=" + result[value] + "><span style='font-weight:bold; font-size:12px;'>" + value.substring(6)  + "(" + todayLabel+ ")</span></th>"; 
		if(todayi==2)
			table +=  "<td style='letter-spacing:-1px;  border:0; width:" + colwidth + "px'><span style='font-weight:bold; font-size:12px;'>" + value.substring(6)  + "(" + todayLabel + ")</span></td>"; 
		else
			table +=  "<td style='letter-spacing:-1px;  border:0; border-right:1px solid #cccccc; width:" + colwidth + "px'><span style='font-weight:bold; font-size:12px;'>" + value.substring(6)  + "(" + todayLabel + ")</span></td>"; 

		todayi  +=1;
		colwidth=0;
	}

	//table += "</tr>";
	table += "</tr></table></th></tr>";
	

	table += "<tr><th class=tdtext>시간</th>";
	for (var k = 0; k < datas.length; k++) {
        var forecast = datas[k];
        var b = forecast["fcstTime"].substring(0, 2);
		if (b=='00')
		{
				b='24';
		}

		table +=  "<th><span style='font-weight:bold; font-size:12px; border:1px solid #cccccc; background-color:#e7e9fb; padding:2px 2px 2px 2px;border-radius:5px;'>" + b  + "</span></th>"; 
	}

	table += "</tr><tr><td class=tdtext>날씨</td><td colspan=21><table style='border:0px; margin-left:18px; width:754px; line-height:100%;'><tr>";

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

		table += "<td valign=top style='padding:0; border:0px; font-size:11px;'>";

			if ( b > 18 || b < 9) // 밤일때 
			{
					if(sky=='1')		//맑음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/nightsky1.png width=24><br>맑음"; 		}
					else if(sky=='2')	//구름조금
					{	table +=  "<img style='margin:0; padding:0;' src=./images/nightsky2.png width=24><br>구름<br>조금"; 		}
					else if(sky=='3')	//구름많음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/nightsky3.png width=24><br>구름<br>많음"; 		}	
					else if(sky=='4')	//흐림
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky4.png width=24><br>흐림"; 		}
					else if(sky=='5')	//비
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty1.png width=24><br>비"; 		}	//비
					else if(sky=='6')	//비,눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty2.png width=24><br>비/눈"; 		}			//비,눈
					else if(sky=='7')	//눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty3.png width=24><br>눈"; 		}			//눈
			}
			else
			{
					if(sky=='1')		//맑음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky1.png width=24><br> 맑음"; 		}
					else if(sky=='2')	//구름조금
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky2.png width=24><br>구름<br>조금"; 		}
					else if(sky=='3')	//구름많음
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky3.png width=24><br>구름<br>많음"; 		}	
					else if(sky=='4')	//흐림
					{	table +=  "<img style='margin:0; padding:0;' src=./images/sky4.png width=24><br>흐림"; 		}
					else if(sky=='5')	//비
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty1.png width=24><br>비"; 		}	//비
					else if(sky=='6')	//비,눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty2.png width=24><br>비/눈"; 		}			//비,눈
					else if(sky=='7')	//눈
					{	table +=  "<img style='margin:0; padding:0;' src=./images/pty3.png width=24><br>눈"; 		}			//눈

			}
		table +=  "</td>";

	}
	table += "</tr></table></td>";
	table += "</tr><tr><td class=tdtext>강수량 <br />(mm)</td><td colspan=21><table border=1 style='border:1px solid white; margin-left:18px; width:758px;'><tr>"

	for (var i = 2; i < datas.length; i++) 
	{
			var forecast = datas[i];
			var r06val;
			r06val=parseFloat(forecast.R06);
			var k=0;
			
			//table +=  "<td><span style='font-weight:bold; font-size:12px;'>";
			table += "<td style='width:40px; border:0px;  padding:0; font-size:11px;'>";

			if(i==2)
			{
					if(!r06val)
					{
						//table +=  "-"; 
						var curWeather = abalone_position[pos].currWeather;
						var rn1cur = curWeather.RN1;

						if (!rn1cur || rn1cur=='0')
						{	table += '-';	}
						else
						{	table += rn1cur; }
					}
					else
						table +=  r06val; 
			}
			else
			{
					if(!r06val)
					{
						k=i-1;
						if(r06val=='0')	
							//{	table +=  r06val;		}
							{	table +=  '-';		}
						else
							if(!parseFloat(datas[k].R06))
								{table +=  '-';	}
							else
								{ table +=  parseFloat(datas[k].R06);	}
					}
					else
					{	table +=  r06val;		}
			}
			table +=  "</span></td>";
	}
	table += "<td style='border:0px; width:42px;'>-</td>";
	table += "</tr></table></td>";

	table += "</tr><tr><td class=tdtext>기온 (℃)</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td><span style='font-size:12px;font-weight:bold; color:white;background-color:#f38686; padding:1px 6px 1px 6px;border-radius:5px;'>" + parseFloat(forecast.T3H)+ "</span></td>"; 
	}

	table += "<tr><td class=tdtext>최저/최고</td>";

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


	table += "</tr><tr><td class=tdtext>풍향<br />(풍속)</td>";
	for (var i = 0; i < datas.length; i++) {
		var VECval=vecValue[Math.floor((parseFloat(forecast.VEC) + 22.5 * 0.5) / 22.5)];
		var val = '<img class="WSD_POS" src=./images/' +VECval + '.gif width="15px" height="15px">';

        var forecast = datas[i];
		table +=  "<td style='line-height:110%'>" + val + "<br><span style='font-size:12px; color:blue; font-weight:bold; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.WSD) + "</span></td>"; 
		
	}

	table += "</tr><tr><td class=tdtext>파고(m)</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td><span style='font-size:12px; font-weight:bold; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.WAV)+ "</span></td>"; 
	}
		
	table += "</tr><tr><td class=tdtext>습도(%)</td>";
	for (var i = 0; i < datas.length; i++) {
        var forecast = datas[i];
		table +=  "<td><span style='font-size:12px; font-weight:bold; background-color:whitesmoke; border:1px solid #cccccc; padding:0px 4px 1px 4px;border-radius:5px;'>" + parseFloat(forecast.REH)+ "</span></td>"; 
	}

	table += "</tr></table>";

    $(tableDiv).html(table);
	
	_updateWSD();
}

