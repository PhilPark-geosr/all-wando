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

function createChart2(pos, tableDiv, chartDiv){
    drawTable2(tableDiv, pos);
    drawCrosshairs2(chartDiv, pos);
}


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


function drawTable3(tableDiv, pos){
    var table = '<table style="border: 1px solid ##aeadad">';
    var trs = [];

    trs.push("<th rowspan=2>시간별</th>");
	trs.push("");
    trs.push("<td style='color: #1B40A8'>입식</td>");
    trs.push("<td style='color: #1B40A8'>양성/수확</td>");
    //trs.push("<td>전복수확</td>");
 
    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val = "현재";
    var val2 = '';
    trs[0] += "<th rowspan=2>" + val + "</th>";
    val = abalone_position[pos]["지수"]["전복"]["입식"];
    val2 = abalone_position[pos]["지수"]["전복"]["입식값"];
    trs[2] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
    val = abalone_position[pos]["지수"]["전복"]["양성"];
    val2 = abalone_position[pos]["지수"]["전복"]["양성값"];
    trs[3] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
    //val = abalone_position[pos]["지수"]["전복"]["수확"];
    //trs[8] += "<td>" + val + "</td>";
 
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
        var val2 = '';
        trs[1] += "<th>" + val + "</th>";
        val = forecast["지수"]["전복"]["입식"];
        val2 = forecast["지수"]["전복"]["입식값"];
        trs[2] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
        val = forecast["지수"]["전복"]["양성"];
        val2 = forecast["지수"]["전복"]["양성값"];
        trs[3] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
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


function drawTable4(tableDiv, pos){
    var table = '<table style="border: 1px solid ##aeadad">';
    var trs = [];

    trs.push("<th rowspan=2>시간별</th>");
	trs.push("");
    trs.push("<td style='color: #1B40A8'>입식</td>");
    trs.push("<td style='color: #1B40A8'>양성</td>");
    trs.push("<td style='color: #1B40A8'>수확</td>");

    var datas = abalone_position[pos].forecast;
    var currWeather = abalone_position[pos].currWeather;

    var val = "현재";
    var val2 = '';
    trs[0] += "<th rowspan=2>" + val + "</th>";
    val = abalone_position[pos]["지수"]["해조류"]["입식"];
    val2 = abalone_position[pos]["지수"]["해조류"]["입식값"];
    trs[2] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
    val = abalone_position[pos]["지수"]["해조류"]["양성"];
    val2 = abalone_position[pos]["지수"]["해조류"]["양성값"];
    trs[3] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
    val = abalone_position[pos]["지수"]["해조류"]["수확"];
    val2 = abalone_position[pos]["지수"]["해조류"]["수확값"];
    trs[4] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";

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
        var val2 = '';
        trs[1] += "<th>" + val + "</th>";
        val = forecast["지수"]["해조류"]["입식"];
        val2 = forecast["지수"]["해조류"]["입식값"];
        trs[2] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
        val = forecast["지수"]["해조류"]["양성"];
        val2 = forecast["지수"]["해조류"]["양성값"];
        trs[3] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
        val = forecast["지수"]["해조류"]["수확"];
        val2 = forecast["지수"]["해조류"]["수확값"];
        trs[4] += "<td style='color: #000;' class='idx_" + val2 + "'>" + val + "</td>";
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
	
	_updateWSD();
}

function drawCrosshairs2(targetDiv, pos) {

    if (pos == null || typeof (pos) == 'undefined')
        return;
    data = new google.visualization.DataTable();
    data.addColumn('string', 'X');

    var position = abalone_position[pos];

    data.addColumn('number', "전복입식");
    data.addColumn('number', "전복양성/수확");
    //data.addColumn('number', "전복수확");
    data.addColumn('number', "미역입식");
    data.addColumn('number', "미역양성");
    data.addColumn('number', "미역수확");

    var rows = [];
    var row = [];
    row.push("현재");

    var value = {};
    var _j = position["지수"]

    value = {};
    value["v"] = 5 - parseInt(_j["전복"]["입식값"]);
    value["f"] = _j["전복"]["입식"];
    row.push(value);
    value = {};
    value["v"] = 5 -  parseInt(_j["전복"]["양성값"]);
    value["f"] = _j["전복"]["양성"];
    row.push(value);
    value = {};
    //value["v"] = 5 -  parseInt(_j["전복"]["수확값"]);
    //value["f"] = _j["전복"]["수확"];
    //row.push(value);
    value = {};
    value["v"] = 5 -  parseInt(_j["해조류"]["입식값"]);
    value["f"] = _j["해조류"]["입식"];
    row.push(value);
    value = {};
    value["v"] = 5 -  parseInt(_j["해조류"]["양성값"]);
    value["f"] = _j["해조류"]["양성"];
    row.push(value);
    value = {};
    value["v"] = 5 -  parseInt(_j["해조류"]["수확값"]);
    value["f"] = _j["해조류"]["수확"];
    row.push(value);;
    rows.push(row);

    for (var i = 0; i < position.forecast.length ; i++) {
        var forecast = position.forecast[i];

        row = [];

        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

        var dateVal =  parseInt(b) + "일 " + forecast["fcstTime"].substring(0, 2) + "시";
        
        row.push(dateVal);

        _j = forecast["지수"]

        value = {};
        value["v"] = 5 - parseInt(_j["전복"]["입식값"]);
        value["f"] = _j["전복"]["입식"];
        row.push(value);
        value = {};
        value["v"] = 5 -  parseInt(_j["전복"]["양성값"]);
        value["f"] = _j["전복"]["양성"];
        row.push(value);
        value = {};
        //value["v"] = 5 -  parseInt(_j["전복"]["수확값"]);
        //value["f"] = _j["전복"]["수확"];
        //row.push(value);
        value = {};
        value["v"] = 5 -  parseInt(_j["해조류"]["입식값"]);
        value["f"] = _j["해조류"]["입식"];
        row.push(value);
        value = {};
        value["v"] = 5 -  parseInt(_j["해조류"]["양성값"]);
        value["f"] = _j["해조류"]["양성"];
        row.push(value);
        value = {};
        value["v"] = 5 -  parseInt(_j["해조류"]["수확값"]);
        value["f"] = _j["해조류"]["수확"];
        row.push(value);
       

        rows.push(row);
    }

    data.addRows(rows);

    options = {
        hAxis: {
            title: '',
            showTextEvery: 1,
			slantedText: true,
            textStyle: {
                color: '#000',
                fontSize: 6
            }
        },
        vAxis: {
            title: '',
            ticks:
          [
            { "v": 0, "f": "" },
            { "v": 1, "f": "금지" },
            { "v": 2, "f": "주의" },
            { "v": 3, "f": "보통" },
            { "v": 4, "f": "적합" },
            { "v": 5, "f": "" }
            
          ],
            textStyle: {
                color: '#000',
                fontSize: 12
            }
        },
        backgroundColor: { fill: 'transparent' },

        //colors: ['#a52714', '#097138', '#097138', '#097138', '#097138', '#097138'],
        colors: ['#fbc97f','ff4500','#bb3385', '8a2be2', '#00dddd','yellowgreen'],
        crosshair: {
            color: '#000',
            trigger: 'selection'
        },
        legend: { 
            position: 'bottom',
            textStyle: {
                color: '#000'
            }
        },
        tooltip :{
            textStyle: {
                color: '#6081E0'
            }
        }
    };

    var chart_div = targetDiv;//document.getElementById('chart_div');
    var h = $(window).height();
    var w = $(window).width();
    //chart_div.style.width = (w - 15) + 'px';
    chart_div.style.height = '300px';

    chart = new google.visualization.LineChart(chart_div);

    chart.draw(data, options);
    //chart.setSelection([{row: 38, column: 1}]);

}

function createChart(tableDiv, chartDiv, group, name){
    
    drawTable(tableDiv, group, name);
    drawCrosshairs(chartDiv, group, name);
}

function drawTable(tableDiv, group, name){
    var table = '<table style="border: 1px solid ##aeadad">';

    var len = abalone_position['고금면'].forecast.length;

    var trs = [];
    trs.push("<th rowspan=2>지점</th><th rowspan=2>현재</th>");
    trs.push("");
	var names = [];
    for(var key in abalone_position){
        var td = "<td>" + key + "</td>";
        td += "<td>" + abalone_position[key]["지수"][group][name] + "</td>";
        trs.push(td);
        names.push(key);
    }

    var dates = [];
	
	for (var i = 0; i < len; i++) {

        var forecast = abalone_position[names[0]].forecast[i];
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
	
    for (var i = 0; i < len; i++) {

        var forecast = abalone_position[names[0]].forecast[i];
        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

		var dateVal =  forecast["fcstTime"].substring(0, 2) + "시";
        trs[1] += "<th>" + dateVal + "</th>";

        for (var j = 0; j < names.length; j++) {
            var forecast = abalone_position[names[j]].forecast[i];
            var value = forecast["지수"][group][name];
            trs[j + 2] += "<td>" + value + "</td>";
        }
    }

    for (var i = 0; i < trs.length; i++ ){
        table += "<tr>" + trs[i] + "</tr>";   
    }
    
    table += '</table>';

    $(tableDiv).html(table);
}

function drawCrosshairs(chartDiv, group, name) {

    if (group == null || typeof (group) == 'undefined')
        return;
    data = new google.visualization.DataTable();
    data.addColumn('string', 'X');


    var title = group + name;
    //data.addColumn('number', title);

    var position = abalone_position['고금면'];
    
	for (var key in abalone_position ){
		data.addColumn('number', key);
	}
    var rows = [];
    var row = [];
    //for (var i = 0; i < forecast.length; i++ ){
    //    var a = forecast["fcstDate"].substring(4, 6);
    //    var b = forecast["fcstDate"].substring(6);
    //    var dateVal =  parseInt(b) + "일 " + forecast["fcstTime"].substring(0, 2) + "시";
    //    data.addColumn('number', dateVale);
    //}

    row.push('현재');
    var names = [];
    for(var key in abalone_position){    
        var _j = abalone_position[key]["지수"];
        var value = {};
        value["v"] = 5 - parseInt(_j[group][name + "값"]);
        value["f"] = _j[group][name];
        names.push(key);
        row.push(value);
    }
    rows.push(row);

    for(var i = 0; i < position.forecast.length; i++ ){
        var forecast = position.forecast[i];

        row = [];

        var a = forecast["fcstDate"].substring(4, 6);
        var b = forecast["fcstDate"].substring(6);

        var dateVal =  parseInt(b) + "일 " + forecast["fcstTime"].substring(0, 2) + "시";
        
        row.push(dateVal);

        for (var j = 0; j < names.length; j++ ){
            var forecast = abalone_position[names[j]].forecast[i];
            var value = {};
            value["v"] = 5 -  parseInt(forecast["지수"][group][name + "값"]);
            value["f"] = forecast["지수"][group][name];
            row.push(value);
        }

        rows.push(row);
    }


      data.addRows(rows);

    options = {
        hAxis: {
            title: '',
            showTextEvery: 1,
			slantedText: true,
            textStyle: {
                color: '#000',
                fontSize: 6
            }
        },
        vAxis: {
            title: '',
            ticks:
          [
            { "v": 0, "f": "" },
            { "v": 1, "f": "금지" },
            { "v": 2, "f": "주의" },
            { "v": 3, "f": "보통" },
            { "v": 4, "f": "적합" },
            { "v": 5, "f": "" }
            
          ],
            textStyle: {
                color: '#000',
                fontSize: 12
            }
        },
        backgroundColor: { fill: 'transparent' },

        //colors: ['#a52714', '#097138', '#097138', '#097138', '#097138', '#097138'],
        colors: ['yellow','#fbc97f','orange','ff4500','red','#bb3385', 'violet', '8a2be2', 'blue','#00dddd','green', 'yellowgreen'],
        crosshair: {
            color: '#000',
            trigger: 'selection'
        },
        legend: { 
            position: 'bottom',
            textStyle: {
                color: '#000',
				fontSize: 8
            }
        },
        tooltip :{
            textStyle: {
                color: '#6081E0'
            }
        }
    };

	
      chart = new google.visualization.LineChart(chartDiv);
	  chart_div.style.height = '300px';
      chart.draw(data, options);
      //chart.setSelection([{row: 38, column: 1}]);

    }