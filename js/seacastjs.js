var pos = '';

	$(document).ready(function () {
			$('.tmpList__').mouseover(function () {
				if ($(this).hasClass('tmpList_sel__'))
					return;

				_tempList__Button(this);
				var t = $(this).attr('name');
				$(this).addClass('tmpList_sel__');
			});

			$('.tmpList2__').mouseover(function () {
				if ($(this).hasClass('tmpList_sel2__'))
					return;

				_tempList2__Button(this);
				var t = $(this).attr('name');
				$(this).addClass('tmpList_sel2__');
			});
	});

	function _tempList__Button(obj){
		$('.tmpList__').each(function () {
			if (this != obj) {
				$(this).removeClass('tmpList_sel__');
			}
		});
	}

	function _tempList2__Button(obj){
		$('.tmpList2__').each(function () {
			if (this != obj) {
				$(this).removeClass('tmpList_sel2__');
			}
		});
	}


	function check(po) {
            pos = po;
			loadWeathers(pos, viewWeather);
	}

	function goURL(pos) {
				_openSeaForecast3(pos);
				//_loadMap3(pos);		
	}
	

	function viewWeather() {
           var curWeather = abalone_position[pos].currWeather;

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


                
		   if (curWeather != null && curWeather.SKY) {

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
		}