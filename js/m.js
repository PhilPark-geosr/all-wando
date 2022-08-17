            var pos = '';
            function check(po) {
                pos = po;

                var posName = pos;
                posName = decodeURIComponent(posName);
                pos = posName;
                
                $('#position').text(posName);
				$('#position2').text(posName);
				$('#position3').text(posName);
                loadWeathers(pos, viewWeather);
            }

			function goURL(pos) {
				var div1 = document.getElementById('index_table1');
				var div2 = document.getElementById('index_table2');
				var div3 = document.getElementById('index_table3');
				var div4 = document.getElementById('index_table4');
				var div8 = document.getElementById('index_table8'); //동네예보
				
				drawTable3(div1, pos);
				drawTable4(div2, pos);
				drawTable5(div3, pos);
				drawTable6(div4, pos);
				drawTable8(div8, pos);	// 동네예보
				check(pos);

            }

          
            function viewWeather() {
                var curWeather = abalone_position[pos].currWeather;
                var wth = abalone_position[pos].WTH;
                var dox = abalone_position[pos].DOX;
				var currDate=new Date();
				var cHours = currDate.getHours();	//시간


                if (curWeather != null && curWeather.SKY) {
                    var imgName = '';
                    var skyValue = '';

                    if (curWeather.SKY == 1) {				// 맑음
                        skyValue = skyName[0];
						if((18 <= cHours && cHours <= 24) || ( 0 <= cHours &&  cHours <= 6))
							imgName = "nightsky1.png";
						else
							imgName = "sky1.png";
                    } 

					 else if (curWeather.SKY ==2 ) {				// 구름조금
                        skyValue = skyName[1];
						if((18 <= cHours && cHours <= 24) || ( 0 <= cHours &&  cHours <= 6))
							imgName = "nightsky2.png";
						else
							imgName = "sky2.png";
                    } 
					else if (curWeather.SKY ==3 ) {				// 구름많음
                        skyValue = skyName[2];
						if((18 <= cHours && cHours <= 24) || ( 0 <= cHours &&  cHours <= 6))
							imgName = "nightsky3.png";
						else
							imgName = "sky3.png";
                    } 
					else if (curWeather.SKY ==4 ) {				// 흐림
                        skyValue = skyName[3];
						if((18 <= cHours && cHours <= 24) || ( 0 <= cHours &&  cHours <= 6))
							imgName = "nightsky4.png";
						else
							imgName = "sky4.png";
                    } 
					
                    if (curWeather.PTY != '0') {	//
                        skyValue = ptyName[curWeather.PTY];
                        imgName = "pty" + curWeather.PTY + ".png";
                    }

                    var temp = parseFloat(curWeather.T1H).toFixed(1)

                    $("#sky_value").text(skyValue);
                    $("#sky_icon").attr("src", "/ocean//images/" + imgName);
                    $("#sky_icon").attr("width", "100px");
                    $("#sky_icon").attr("height", "70px");
                    $("#tempo").text(temp + "℃");

                    var vec = vecValue2[Math.floor((parseFloat(curWeather.VEC) + 22.5 * 0.5) / 22.5)];
					var vec2= vecValue2[Math.floor((parseFloat(curWeather.VEC) + 22.5 * 0.5) / 22.5)];					

                    vec = ' ' + curWeather.WSD + 'm/s';
                    $("#wind_text").text(vec);
                    
                    //$("#wind_icon").attr('alt', parseFloat(curWeather.VEC)); 	//풍향
                    $("#wind_icon").attr('alt', parseFloat(curWeather.VEC)-180); 	//풍향
					$("#wind_val").text('' + vec2 + "");  	 	//풍향값(한글명칭)
                    $("#wave").text('' + curWeather.WAV + "M");  		//파고
                    $("#rain").text('' + curWeather.RN1 + "mm"); 		//강수량
                    $("#wth").text('' + wth + "℃");  				//수온
                    $("#dox").text('' + dox + "mg/L");  			//표층용존산소
                    _updateWSD();
                }

                var indexes = abalone_position[pos]["지수"];
                if (indexes != null && typeof (indexes) != 'undefined') {
                    var _j = indexes["전복"];
                    $("#j1").text(_j["입식"]);
                    $("#j2").text(_j["양성"]);
                    $("#j3").text(_j["수확"]);
                    var _h = indexes["해조류"];
                    $("#h1").text(_h["입식"]);
                    $("#h2").text(_h["양성"]);
                    $("#h3").text(_h["수확"]);
					var _k = indexes["다시마"]; //20170625 추가 
                    $("#k1").text(_k["입식"]);
                    $("#k2").text(_k["양성"]);
                    $("#k3").text(_k["수확"]);
                }
				
                var baseDate = curWeather.baseDate;
                var baseTime = curWeather.baseTime;

                var a = baseDate.substring(0, 4);
                var b = baseDate.substring(4, 6);
                var c = baseDate.substring(6);
                var d = baseTime.substring(0, 2);
                var e = baseTime.substring(2);

				if(d==13)	d="오후 1" ;
				else if(d==14) d="오후 2" ;
				else if(d==15) d="오후 3" ;
				else if(d==16) d="오후 4" ;
				else if(d==17) d="오후 5" ;
				else if(d==18) d="오후 6" ;
				else if(d==19) d="오후 7" ;
				else if(d==20) d="오후 8" ;
				else if(d==21) d="오후 9" ;
				else if(d==22) d="오후 10" ;
				else if(d==23) d="오후 11" ;
				else if(d==24) d="오전 12" ;
				else	d=d;
                //var curTime = " [" + a + "년 " + parseInt(b) + "월" + parseInt(c) + "일 " + d + "시" + e + "분 기준]";
                var curTime = "( " + a + "년 " + parseInt(b) + "월 " + parseInt(c) + "일  " + d + "시" + "  )";
				$('#curDateTime').text(curTime);
                $('#curDateTime1').text(curTime);
                $('#curDateTime2').text(curTime);
                $('#curDateTime3').text(curTime);
				$('#curDateTime4').text(curTime);
				$('#curDateTime5').text(curTime);

                var curDate = new Date();
                var dateString = curDate.format('yyyyMMdd');
				var dateYM = curDate.format('MM.dd'); 
                var waterValue = waterInOut[dateString];

				var curDate2 = new Date();
				var dayOfday = curDate.getDate();
				curDate2.setDate(dayOfday +1);
						   
				var dateString2 = curDate2.format('yyyyMMdd');
				var dateYM2 = curDate2.format('MM.dd'); 
				var waterValue2 = waterInOut[dateString2];

				if(waterValue)
				{
					var tt = waterValue[0].substring(0, waterValue[0].indexOf('('));
					var vv = waterValue[0].substring(waterValue[0].indexOf('('));
					$("#wv1t").text(tt);
					$("#wv1v").text(vv);

					tt = waterValue[1].substring(0, waterValue[1].indexOf('('));
					vv = waterValue[1].substring(waterValue[1].indexOf('('));
					$("#wv2t").text(tt);
					$("#wv2v").text(vv);

					tt = waterValue[2].substring(0, waterValue[2].indexOf('('));
					vv = waterValue[2].substring(waterValue[2].indexOf('('));
					$("#wv3t").text(tt);
					$("#wv3v").text(vv);

					tt = waterValue[3].substring(0, waterValue[3].indexOf('('));
					vv = waterValue[3].substring(waterValue[3].indexOf('('));
					$("#wv4t").text(tt);
					$("#wv4v").text(vv);

					vv = waterValue[6].substring(waterValue[6].indexOf('('));
					$("#wv6v").text(vv);

					vv = waterValue[7].substring(waterValue[7].indexOf('('));
					$("#wv7v").text(vv);

					vv = dateYM;
					$("#wv10v").text(vv);


					//$("#wv_name").text("(" + waterValue[5] + ")" + "  ▲(고조), ▼(저조)");
					$("#wv_name1").text("(" + waterValue[5] + ")");

					var tt2 = waterValue2[0].substring(0, waterValue2[0].indexOf('('));
					var vv2 = waterValue2[0].substring(waterValue2[0].indexOf('('));
					$("#wv12t").text(tt2);
					$("#wv12v").text(vv2);

					tt2 = waterValue2[1].substring(0, waterValue2[1].indexOf('('));
					vv2 = waterValue2[1].substring(waterValue2[1].indexOf('('));
					$("#wv22t").text(tt2);
					$("#wv22v").text(vv2);

					tt2 = waterValue2[2].substring(0, waterValue2[2].indexOf('('));
					vv2 = waterValue2[2].substring(waterValue2[2].indexOf('('));
					$("#wv32t").text(tt2);
					$("#wv32v").text(vv2);

					tt2 = waterValue2[3].substring(0, waterValue2[3].indexOf('('));
					vv2 = waterValue2[3].substring(waterValue2[3].indexOf('('));
					$("#wv42t").text(tt2);
					$("#wv42v").text(vv2);

					vv2 = waterValue2[6].substring(waterValue2[6].indexOf('('));
					$("#wv62v").text(vv2);


					vv2 = waterValue2[7].substring(waterValue2[7].indexOf('('));
					$("#wv72v").text(vv2);

					vv2 = dateYM2;
					$("#wv102v").text(vv2);


					//$("#wv_name2").text("(" + waterValue2[5] + ")" + "  ▲(고조), ▼(저조)");
					$("#wv_name2").text("(" + waterValue2[5] + ")");
				}
		}
