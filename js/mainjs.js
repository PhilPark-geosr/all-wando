var pos = '';
			
            function check(po) {
                pos = po;

                var posName = pos;
                posName = decodeURIComponent(posName);
                pos = posName;
                
                $('#position').text(posName);
				$('#pointName').text(posName);
				$('#pointName2').text(posName);
				$('#pointName3').text(posName);
				$('#pointName4').text(posName);
				$('#weatherPoint').text(posName);

                loadWeathers(pos, viewWeather);

            }

			
       
			function goURL(pos) {
                check(pos);
				var div1 = document.getElementById('index_table1');
				var div2 = document.getElementById('index_table2');
				var div3 = document.getElementById('index_table3');
				var div4 = document.getElementById('index_table4');
				var div5 = document.getElementById('index_table5');
				var div6 = document.getElementById('index_table6'); //현재 전복, 미역, 다시마, 김 작업지수
				drawTable3(div1, pos);
				drawTable4(div2, pos);
				drawTable5(div3, pos);
				drawTable6(div4, pos);
				drawTable7(div5, pos);
				currdrawTable(div6, pos);	//현재 전복, 미역, 다시마, 김 작업지수
				
				_loadMap(pos);

            }

           
            function viewWeather() {
				// ppark 정상표출
                // console.log('abalone_position[pos]', abalone_position[pos]);
				// var curWeather = abalone_position[pos].currWeather;
				var curWeather = abalone_position[pos].forecast[0];

				console.log('curWeather', curWeather);
				
				//var curWeather1 = abalone_position['노화읍'].currWeather;
				//var curWeather2 = abalone_position['금일읍'].currWeather;
//				var curWeather3 = abalone_position['완도읍'].currWeather;
//				var curWeather4 = abalone_position['고금면'].currWeather;
//				var curWeather5 = abalone_position['청산면'].currWeather;
//				var curWeather6 = abalone_position['소안면'].currWeather;
//				var curWeather7 = abalone_position['생일면'].currWeather;


                var wth = abalone_position[pos].WTH;
                var dox = abalone_position[pos].DOX;

				var wth1 = abalone_position['노화읍'].WTH;  //관측지점 : 노화도
                var dox1 = abalone_position['노화읍'].DOX;

				var wth2 = abalone_position['금일읍'].WTH;  //관측지점 : 금일
                var dox2 = abalone_position['금일읍'].DOX;

				var wth3 = abalone_position['완도읍'].WTH;  //관측지점 : 망남
                var dox3 = abalone_position['완도읍'].DOX;

				var wth4 = abalone_position['고금면'].WTH;  //관측지점 : 가교
                var dox4 = abalone_position['고금면'].DOX;

				var wth5 = abalone_position['청산면'].WTH;  //관측지점 : 청산
                var dox5 = abalone_position['청산면'].DOX;

				var wth6 = abalone_position['소안면'].WTH;  //관측지점 : 백도
                var dox6 = abalone_position['소안면'].DOX;

				var wth7 = abalone_position['생일면'].WTH;  //관측지점 : 동백
                var dox7 = abalone_position['생일면'].DOX;

				var wth8 = abalone_position['일정'].WTH;  //관측지점 : 일정


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

					 else if (curWeather.SKY ==2 ) {			// 구름조금
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

                    if (curWeather.PTY != '0') {
                        skyValue = ptyName[curWeather.PTY];
                        imgName = "pty" + curWeather.PTY + ".png";
                    }

                    var temp = parseFloat(curWeather.T1H).toFixed(1)

                    $("#sky_value").text(skyValue);
                    $("#sky_icon").attr("src", "./images/" + imgName);
                    $("#sky_icon").attr("width", "100px");
                    $("#sky_icon").attr("height", "70px");
                    $("#tempo").text(temp + "℃");

                    var vec = vecValue2[Math.floor((parseFloat(curWeather.VEC) + 22.5 * 0.5) / 22.5)];
					//var vec = vecValue2[curWeather.VEC];
					var vec2= vecValue2[Math.floor((parseFloat(curWeather.VEC) + 22.5 * 0.5) / 22.5)];
					
					
                    vec = ' ' + curWeather.WSD + ' m/s';
                    $("#wind_text").text(vec);
                    
                    //$("#wind_icon").attr('alt', parseFloat(curWeather.VEC)); 	//풍향
					$("#wind_icon").attr('alt', parseFloat(curWeather.VEC)-180); 	//풍향
					$("#wind_val").text('' + vec2 + "");  	 	//풍향값(한글명칭)
                    $("#wave").text('' + curWeather.WAV + " m");  		//파고

					if (curWeather.RN1==0)	{	$("#rain").text(" - mm"); }		//강수량	
					else					{	$("#rain").text('' + curWeather.RN1 + " mm"); } 		//강수량

                    //$("#rain").text('' + curWeather.RN1 + " mm"); 		//강수량
                    $("#wth").text('' + wth + " ℃");  				//수온


					if(!dox)	$("#dox").text('미설치');  				//표층용존산소	
					else		$("#dox").text('' + dox + " mg/L");  	//표층용존산소


					//////////////////////////////////////////////////////////////
					///// 일정 /////////////////////////////////////
					if(wth8 == '0')				
					{	$("#unit15").text('점검중');	}
					else
					{
						$("#wth8").text('' + wth8 + "");
						$("#unit15").text(' ℃');
					}

					$("#unit16").text('미설치');  			
					

					///// 동백 /////////////////////////////////////
					if(wth7 == '0')				
					{	$("#unit13").text('점검중');	}
					else
					{
						$("#wth7").text('' + wth7 + "");
						$("#unit13").text(' ℃');
					}

					if(dox7)
					{	$("#dox7").text('' + dox7 + "");
						$("#unit14").text(' mg/L');
					}
					else
					{
						$("#unit14").text('점검중');  			
					}

					///// 백도 /////////////////////////////////////
					if(wth6 == '0')				
					{	$("#unit11").text('점검중');	}
					else
					{
						$("#wth6").text('' + wth6 + "");
						$("#unit11").text(' ℃');
					}

					if(dox6)
					{	$("#dox6").text('' + dox6 + "");
						$("#unit12").text(' mg/L');
					}
					else
					{	$("#unit12").text('점검중');  	}

					///// 청산 /////////////////////////////////////
					if(wth5 == '0')				
					{	$("#unit9").text('점검중');	}
					else
					{
						$("#wth5").text('' + wth5 + "");
						$("#unit9").text(' ℃');
					}

					if(dox5)
					{	$("#dox5").text('' + dox5 + "");
						$("#unit10").text(' mg/L');
					}
					else
					{	$("#unit10").text('점검중');  	}					

					///// 가교 /////////////////////////////////////
					if(wth4 == '0')				
					{	$("#unit7").text('점검중');	}
					else
					{
						$("#wth4").text('' + wth4 + "");
						$("#unit7").text(' ℃');
					}

					if(dox4)
					{	$("#dox4").text('' + dox4 + "");
						$("#unit8").text(' mg/L');
					}
					else
					{	$("#unit8").text('점검중');  	}
				

					///// 망남 /////////////////////////////////////
					if(wth3 == '0')				
					{	$("#unit5").text('점검중');	}
					else
					{
						$("#wth3").text('' + wth3 + "");
						$("#unit5").text(' ℃');
					}

					if(dox3)
					{	$("#dox3").text('' + dox3 + "");
						$("#unit6").text(' mg/L');
					}
					else
					{	$("#unit6").text('점검중');  	}

					///// 금일 ///////////////////////////////////////
					if(wth2 == '0')				
					{	$("#unit3").text('점검중');	}
					else
					{
						$("#wth2").text('' + wth2 + "");
						$("#unit3").text(' ℃');
					}

					if(dox2)					//금일 용존산소
					{	$("#dox2").text('' + dox2 + "");  			
						$("#unit4").text(' mg/L');
					}
					else
					{	$("#unit4").text('점검중');  	}
					

					///// 노화도 ////////////////////////////////////
					if(wth1 == '0')				
					{	$("#unit1").text('점검중');	}
					else
					{
						$("#wth1").text('' + wth1 + "");
						$("#unit1").text(' ℃');
					}

					if(dox1)
					{	$("#dox1").text('' + dox1 + "");  			
						$("#unit2").text(' mg/L');
					}
					else
					{	$("#unit2").text('미설치');  	}


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
				
				// ppark null 값 나옴
				// console.log('curWeather', curWeather);
                // var baseDate = curWeather.baseDate;
				var baseDate = '20220812';
				// ppark null 값 나옴
				// console.log('baseDate', baseDate);
                // var baseTime = curWeather.baseTime;
				var baseTime = '0800';

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


                //var curTime = " [" + a + "년 " + parseInt(b) + "월 " + parseInt(c) + "일 " + d + "시" + e + "분 기준]";
				var curTime = "( " + a + "년 " + parseInt(b) + "월 " + parseInt(c) + "일 " + d + "시 기준 }";
				

                $('#curDateTime').text(curTime);

                //curTime = " [" + a + "년 " + parseInt(b) + "월 " + parseInt(c) + "일 " + d + "시" + e + "분 기준]";
				//curTime = " [" + a + "년 " + parseInt(b) + "월 " + parseInt(c) + "일 " + d + "시 기준]";
                $('#curDateTime1').text(curTime);
                $('#curDateTime2').text(curTime);
                $('#curDateTime3').text(curTime);
				$('#curDateTime4').text(curTime);
				$('#curDateTime5').text(curTime);

				/*
                var curDate = new Date();
                var cMonth2ing = curDate.format('yyyyMMdd');
				var dateYM = curDate.format('MM.dd'); 
                var waterValue = waterInOut[cMonth2ing];
				*/

				var curDate1 = new Date();
				var dayOfday1 = curDate1.getDate();
				curDate1.setDate(dayOfday1 +0);
				var cMonth2ing1 = curDate1.format('yyyyMMdd');
				// ppark 확인
				
				// var cMonth2ing1 = '20171101';
				
				var dateYM1 = curDate1.format('MM.dd'); 
				// console.log('dateYM1', dateYM1);
				var waterValue1 = waterInOut[cMonth2ing1];
				// ppark 확인
				console.log('waterValue1', waterValue1);

				var curDate2 = new Date();
				var dayOfday2 = curDate2.getDate();
				curDate2.setDate(dayOfday2 +1);
				var cMonth2ing2 = curDate2.format('yyyyMMdd');
				var dateYM2 = curDate2.format('MM.dd'); 
				var waterValue2 = waterInOut[cMonth2ing2];

				var curDate3 = new Date();
				var dayOfday3 = curDate3.getDate();
				curDate3.setDate(dayOfday3 +2);
				var cMonth2ing3 = curDate3.format('yyyyMMdd');
				var dateYM3 = curDate3.format('MM.dd'); 
				var waterValue3 = waterInOut[cMonth2ing3];

				var curDate4 = new Date();
				var dayOfday4 = curDate4.getDate();
				curDate4.setDate(dayOfday4 +3);
				var cMonth2ing4 = curDate4.format('yyyyMMdd');
				var dateYM4 = curDate4.format('MM.dd'); 
				var waterValue4 = waterInOut[cMonth2ing4];

				var curDate5 = new Date();
				var dayOfday5 = curDate5.getDate();
				curDate5.setDate(dayOfday5 + 4);
				var cMonth2ing5 = curDate5.format('yyyyMMdd');
				var dateYM5 = curDate5.format('MM.dd'); 
				var waterValue5 = waterInOut[cMonth2ing5];
				

				if(waterValue1)
				{
					var tt = waterValue1[0].substring(0, waterValue1[0].indexOf('('));
					var vv = waterValue1[0].substring(waterValue1[0].indexOf('('));
					$("#wv1t").text(tt);
					$("#wv1v").text(vv);

					tt = waterValue1[1].substring(0, waterValue1[1].indexOf('('));
					vv = waterValue1[1].substring(waterValue1[1].indexOf('('));
					$("#wv2t").text(tt);
					$("#wv2v").text(vv);

					tt = waterValue1[2].substring(0, waterValue1[2].indexOf('('));
					vv = waterValue1[2].substring(waterValue1[2].indexOf('('));
					$("#wv3t").text(tt);
					$("#wv3v").text(vv);

					tt = waterValue1[3].substring(0, waterValue1[3].indexOf('('));
					vv = waterValue1[3].substring(waterValue1[3].indexOf('('));
					$("#wv4t").text(tt);
					$("#wv4v").text(vv);

					vv = waterValue1[6].substring(waterValue1[6].indexOf('('));
					$("#wv6v").text(vv);

					vv = waterValue1[7].substring(waterValue1[7].indexOf('('));
					$("#wv7v").text(vv);

					vv = dateYM1;
					$("#wv10v").text(vv);


					//$("#wv_name").text("(" + waterValue[5] + ")" + "  ▲(고조), ▼(저조)");
					$("#wv_name1").text("(" + waterValue1[5] + ")");


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

					$("#wv_name2").text("(" + waterValue2[5] + ")");


					var tt3 = waterValue3[0].substring(0, waterValue3[0].indexOf('('));
					var vv3 = waterValue3[0].substring(waterValue3[0].indexOf('('));
					$("#wv13t").text(tt3);
					$("#wv13v").text(vv3);

					tt3 = waterValue3[1].substring(0, waterValue3[1].indexOf('('));
					vv3 = waterValue3[1].substring(waterValue3[1].indexOf('('));
					$("#wv23t").text(tt3);
					$("#wv23v").text(vv3);

					tt3 = waterValue3[2].substring(0, waterValue3[2].indexOf('('));
					vv3 = waterValue3[2].substring(waterValue3[2].indexOf('('));
					$("#wv33t").text(tt3);
					$("#wv33v").text(vv3);

					tt3 = waterValue3[3].substring(0, waterValue3[3].indexOf('('));
					vv3 = waterValue3[3].substring(waterValue3[3].indexOf('('));
					$("#wv43t").text(tt3);
					$("#wv43v").text(vv3);

					vv3 = waterValue3[6].substring(waterValue3[6].indexOf('('));
					$("#wv63v").text(vv3);

					vv3 = waterValue3[7].substring(waterValue3[7].indexOf('('));
					$("#wv73v").text(vv3);

					vv3 = dateYM3;
					$("#wv103v").text(vv3);

					$("#wv_name3").text("(" + waterValue3[5] + ")");


					var tt4 = waterValue4[0].substring(0, waterValue4[0].indexOf('('));
					var vv4 = waterValue4[0].substring(waterValue4[0].indexOf('('));
					$("#wv14t").text(tt4);
					$("#wv14v").text(vv4);

					tt4 = waterValue4[1].substring(0, waterValue4[1].indexOf('('));
					vv4 = waterValue4[1].substring(waterValue4[1].indexOf('('));
					$("#wv24t").text(tt4);
					$("#wv24v").text(vv4);

					tt4 = waterValue4[2].substring(0, waterValue4[2].indexOf('('));
					vv4 = waterValue4[2].substring(waterValue4[2].indexOf('('));
					$("#wv34t").text(tt4);
					$("#wv34v").text(vv4);

					tt4 = waterValue4[3].substring(0, waterValue4[3].indexOf('('));
					vv4 = waterValue4[3].substring(waterValue4[3].indexOf('('));
					$("#wv44t").text(tt4);
					$("#wv44v").text(vv4);

					vv4 = waterValue4[6].substring(waterValue4[6].indexOf('('));
					$("#wv64v").text(vv4);

					vv4 = waterValue4[7].substring(waterValue4[7].indexOf('('));
					$("#wv74v").text(vv4);

					vv4 = dateYM4;
					$("#wv104v").text(vv4);

					$("#wv_name4").text("(" + waterValue4[5] + ")");


					var tt5 = waterValue5[0].substring(0, waterValue5[0].indexOf('('));
					var vv5 = waterValue5[0].substring(waterValue5[0].indexOf('('));
					$("#wv15t").text(tt5);
					$("#wv15v").text(vv5);

					tt5 = waterValue5[1].substring(0, waterValue5[1].indexOf('('));
					vv5 = waterValue5[1].substring(waterValue5[1].indexOf('('));
					$("#wv25t").text(tt5);
					$("#wv25v").text(vv5);

					tt5 = waterValue5[2].substring(0, waterValue5[2].indexOf('('));
					vv5 = waterValue5[2].substring(waterValue5[2].indexOf('('));
					$("#wv35t").text(tt5);
					$("#wv35v").text(vv5);

					tt5 = waterValue5[3].substring(0, waterValue5[3].indexOf('('));
					vv5 = waterValue5[3].substring(waterValue5[3].indexOf('('));
					$("#wv45t").text(tt5);
					$("#wv45v").text(vv5);

					vv5 = waterValue5[6].substring(waterValue5[6].indexOf('('));
					$("#wv65v").text(vv5);

					vv5 = waterValue5[7].substring(waterValue5[7].indexOf('('));
					$("#wv75v").text(vv5);

					vv5 = dateYM5;
					$("#wv105v").text(vv5);

					$("#wv_name5").text("(" + waterValue5[5] + ")");
				}
		}