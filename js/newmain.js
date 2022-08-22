//var abalone_position = JSON.parse('{"완도읍":{"NX":"57","NY":"56","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.31643,126.7456"},"금일읍":{"NX":"62","NY":"57","관측소명":"완도 금일","좌표":"34.3786,127.0654","코드":"wk094","LATLNG":"34.34881,127.0295"},"노화읍":{"NX":"53","NY":"53","관측소명":"완도 노화도","좌표":"34.2193,126.5549","코드":"wn087","LATLNG":"34.17779,126.5758"},"군외면":{"NX":"55","NY":"57","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.38937,126.6474"},"신지면":{"NX":"58","NY":"56","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.33462,126.8273"},"고금면":{"NX":"58","NY":"58","관측소명":"완도 가교","좌표":"34.4347,126.8083","코드":"fwgf1","LATLNG":"34.3949,126.8043"},"약산면":{"NX":"59","NY":"58","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.39249,126.8981"},"청산면":{"NX":"59","NY":"53","관측소명":"완도 청산","좌표":"34.1698,126.8547","코드":"wc001","LATLNG":"34.17977,126.8585"},"소안면":{"NX":"55","NY":"53","관측소명":"완도 백도","좌표":"34.1636,126.6269","코드":"fwbf1","LATLNG":"34.17451,126.651"},"금당면":{"NX":"62","NY":"58","관측소명":"완도 금일","좌표":"34.3786,127.0654","코드":"wk094","LATLNG":"34.42984,127.0712"},"보길면":{"NX":"53","NY":"53","관측소명":"완도 백도","좌표":"34.1636,126.6269","코드":"fwbf1","LATLNG":"34.16904,126.5676"},"생일면":{"NX":"61","NY":"56","관측소명":"완도 동백","좌표":"34.3275,127.035","코드":"fwdf1","LATLNG":"34.33296,126.9976"}}');
//var weather_position = JSON.parse('{"완도읍":{"NX":"57","NY":"56"},"금일읍":{"NX":"62","NY":"57"},"노화읍":{"NX":"53","NY":"53"},"군외면":{"NX":"55","NY":"57"},"신지면":{"NX":"58","NY":"56"},"고금면":{"NX":"58","NY":"58"},"약산면":{"NX":"59","NY":"58"},"청산면":{"NX":"59","NY":"53"},"소안면":{"NX":"55","NY":"53"},"금당면":{"NX":"62","NY":"58"},"보길면":{"NX":"53","NY":"53"},"생일면":{"NX":"61","NY":"56"}}');
var abalone_position = JSON.parse('{"노화읍":{"NX":"53","NY":"53","관측소명":"완도 노화도","좌표":"34.2193,126.5549","코드":"wn087","LATLNG":"34.17779,126.5758"},"금일읍":{"NX":"62","NY":"57","관측소명":"완도 금일","좌표":"34.3786,127.0654","코드":"wk094","LATLNG":"34.34881,127.0295"},"완도읍":{"NX":"57","NY":"56","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.31643,126.7456"},"군외면":{"NX":"55","NY":"57","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.38937,126.6474"},"신지면":{"NX":"58","NY":"56","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.33462,126.8273"},"고금면":{"NX":"58","NY":"58","관측소명":"완도 가교","좌표":"34.4347,126.8083","코드":"fwgf1","LATLNG":"34.3949,126.8043"},"약산면":{"NX":"59","NY":"58","관측소명":"완도 망남","좌표":"34.3013,126.768","코드":"fwmg3","LATLNG":"34.39249,126.8981"},"청산면":{"NX":"59","NY":"53","관측소명":"완도 청산","좌표":"34.1698,126.8547","코드":"wc001","LATLNG":"34.17977,126.8585"},"소안면":{"NX":"55","NY":"53","관측소명":"완도 백도","좌표":"34.1636,126.6269","코드":"fwbf1","LATLNG":"34.17451,126.651"},"금당면":{"NX":"62","NY":"58","관측소명":"완도 금일","좌표":"34.3786,127.0654","코드":"wk094","LATLNG":"34.42984,127.0712"},"보길면":{"NX":"53","NY":"53","관측소명":"완도 백도","좌표":"34.1636,126.6269","코드":"fwbf1","LATLNG":"34.16904,126.5676"},"생일면":{"NX":"61","NY":"56","관측소명":"완도 동백","좌표":"34.3275,127.035","코드":"fwdf1","LATLNG":"34.33296,126.9976"},"일정":{"NX":"61","NY":"56","관측소명":"완도 일정","좌표":"34.3275,127.035","코드":"fwih6","LATLNG":"34.3674,126.9941"}}');
var weather_position = JSON.parse('{"노화읍":{"NX":"53","NY":"53"},"금일읍":{"NX":"62","NY":"57"},"완도읍":{"NX":"57","NY":"56"},"군외면":{"NX":"55","NY":"57"},"신지면":{"NX":"58","NY":"56"},"고금면":{"NX":"58","NY":"58"},"약산면":{"NX":"59","NY":"58"},"청산면":{"NX":"59","NY":"53"},"소안면":{"NX":"55","NY":"53"},"금당면":{"NX":"62","NY":"58"},"보길면":{"NX":"53","NY":"53"},"생일면":{"NX":"61","NY":"56"}}');
var vecValue = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];
var vecValue2 = ["북","북북동","북동","동북동","동","동남동","남동","남남동","남","남남서","남서","서남서","서","서북서","북서","북북서","북"];
var skyCheckPoint = [2, 8, 10];
var skyName = ["맑음", "구름조금","구름많음", "흐림"];
var ptyValue = [1, 2, 3];
var ptyName = ["", "비", "비/눈","눈/비", "눈"];

// ppark 물때표, 최신화 필요
// console.log('waterInOut', waterInOut)

var waterInOut = JSON.parse('{"20220801":["02 : 11 (98) 저▼","08 : 00 (298) 고▲","14 : 18 (97) 저▼","20 : 16 (322) 고▲","09-13","5물","06 : 53","17 : 40"],"20220802":["02 : 46 (69) 저▼","08 : 38 (329) 고▲","15 : 02 (74) 저▼","20 : 51 (338) 고▲","09-14","6물","06 : 54","17 : 39"],"20220803":["03 : 22 (42) 저▼","09 : 16 (359) 고▲","15 : 46 (54) 저▼","21 : 28 (349) 고▲","09-15","7물","06 : 55","17 : 38"],"20220804":["03 : 59 (18) 저▼","09 : 57 (384) 고▲","16 : 29 (43) 저▼","22 : 07 (354) 고▲","09-16","8물","06 : 55","17 : 37"],"20220805":["04 : 38 (3) 저▼","10 : 39 (399) 고▲","17 : 14 (42) 저▼","22 : 47 (348) 고▲","09-17","9물","06 : 56","17 : 36"],"20220806":["05 : 19 (-1) 저▼","11 : 23 (402) 고▲","18 : 01 (52) 저▼","23 : 29 (333) 고▲","09-18","10물","06 : 57","17 : 36"],"20220807":["06 : 02 (7) 저▼","12 : 10 (392) 고▲","18 : 51 (71) 저▼","","09-19","11물","06 : 58","17 : 35"],"20220808":["00 : 13 (310) 고▲","06 : 49 (27) 저▼","13 : 01 (371) 고▲","19 : 45 (96) 저▼","09-20","12물","06 : 59","17 : 34"],"20220809":["01 : 02 (283) 고▲","07 : 40 (55) 저▼","13 : 58 (344) 고▲","20 : 50 (120) 저▼","09-21","13물","07 : 00","17 : 33"],"20220810":["02 : 02 (255) 고▲","08 : 41 (85) 저▼","15 : 08 (317) 고▲","22 : 07 (134) 저▼","09-22","14물","07 : 01","17 : 32"],"20220811":["03 : 29 (237) 고▲","09 : 57 (110) 저▼","16 : 36 (300) 고▲","23 : 32 (133) 저▼","09-23","조금","07 : 02","17 : 32"],"20220812":["05 : 22 (240) 고▲","11 : 23 (120) 저▼","17 : 59 (295) 고▲","","09-24","1물","07 : 03","17 : 31"],"20220813":["00 : 43 (120) 저▼","06 : 44 (260) 고▲","12 : 43 (117) 저▼","18 : 59 (297) 고▲","09-25","2물","07 : 04","17 : 30"],"20220814":["01 : 36 (102) 저▼","07 : 38 (283) 고▲","13 : 46 (107) 저▼","19 : 44 (301) 고▲","09-26","3물","07 : 05","17 : 30"],"20220815":["02 : 18 (84) 저▼","08 : 21 (306) 고▲","14 : 37 (97) 저▼","20 : 21 (305) 고▲","09-27","4물","07 : 06","17 : 29"],"20220816":["02 : 55 (69) 저▼","08 : 58 (324) 고▲","15 : 20 (88) 저▼","20 : 55 (308) 고▲","09-28","5물","07 : 07","17 : 28"],"20220817":["03 : 27 (57) 저▼","09 : 32 (339) 고▲","15 : 58 (83) 저▼","21 : 27 (310) 고▲","09-29","6물","07 : 08","17 : 28"],"20220818":["03 : 58 (49) 저▼","10 : 05 (349) 고▲","16 : 34 (82) 저▼","21 : 58 (308) 고▲","10-01","8물","07 : 09","17 : 27"],"20220819":["04 : 26 (45) 저▼","10 : 37 (353) 고▲","17 : 08 (85) 저▼","22 : 29 (304) 고▲","10-02","9물","07 : 10","17 : 27"],"20220820":["04 : 54 (45) 저▼","11 : 09 (353) 고▲","17 : 41 (91) 저▼","23 : 00 (297) 고▲","10-03","10물","07 : 11","17 : 26"],"20220821":["05 : 23 (50) 저▼","11 : 41 (348) 고▲","18 : 15 (101) 저▼","23 : 33 (287) 고▲","10-04","11물","07 : 11","17 : 26"],"20220822":["05 : 53 (59) 저▼","12 : 15 (338) 고▲","18 : 52 (113) 저▼","","10-05","12물","07 : 12","17 : 25"],"20220823":["00 : 07 (274) 고▲","06 : 26 (72) 저▼","12 : 52 (324) 고▲","19 : 33 (126) 저▼","10-06","13물","07 : 13","17 : 25"],"20220824":["00 : 45 (259) 고▲","07 : 05 (89) 저▼","13 : 32 (307) 고▲","20 : 21 (139) 저▼","10-07","14물","07 : 14","17 : 25"],"20220825":["01 : 30 (243) 고▲","07 : 50 (109) 저▼","14 : 22 (290) 고▲","21 : 21 (146) 저▼","10-08","조금","07 : 15","17 : 24"],"20220826":["02 : 30 (230) 고▲","08 : 49 (127) 저▼","15 : 25 (277) 고▲","22 : 31 (145) 저▼","10-09","1물","07 : 16","17 : 24"],"20220827":["03 : 57 (226) 고▲","10 : 05 (138) 저▼","16 : 42 (271) 고▲","23 : 40 (133) 저▼","10-10","2물","07 : 17","17 : 24"],"20220828":["05 : 28 (237) 고▲","11 : 29 (137) 저▼","17 : 52 (275) 고▲","","10-11","3물","07 : 18","17 : 23"],"20220829":["00 : 37 (112) 저▼","06 : 35 (262) 고▲","12 : 44 (124) 저▼","18 : 48 (286) 고▲","10-12","4물","07 : 19","17 : 23"],"20220830":["01 : 25 (85) 저▼","07 : 27 (293) 고▲","13 : 45 (104) 저▼","19 : 35 (300) 고▲","10-13","5물","07 : 20","17 : 23"],"20221201":["02 : 08 (56) 저▼","08 : 13 (326) 고▲","14 : 38 (81) 저▼","20 : 20 (315) 고▲","10-14","6물","07 : 21","17 : 23"],"20221202":["02 : 51 (27) 저▼","08 : 58 (359) 고▲","15 : 28 (61) 저▼","21 : 04 (326) 고▲","10-15","7물","07 : 22","17 : 23"],"20221203":["03 : 34 (2) 저▼","09 : 43 (386) 고▲","16 : 17 (46) 저▼","21 : 48 (332) 고▲","10-16","8물","07 : 22","17 : 23"],"20221204":["04 : 18 (-15) 저▼","10 : 28 (404) 고▲","17 : 04 (40) 저▼","22 : 32 (331) 고▲","10-17","9물","07 : 00","17 : 33","07 : 23","17 : 23"],"20221205":["05 : 03 (-21) 저▼","11 : 14 (408) 고▲","17 : 53 (44) 저▼","23 : 17 (322) 고▲","10-18","10물","07 : 24","17 : 23"],"20221206":["05 : 49 (-14) 저▼","12 : 02 (400) 고▲","18 : 43 (57) 저▼","","10-19","11물","07 : 25","17 : 23"],"20221207":["00 : 04 (306) 고▲","06 : 37 (5) 저▼","12 : 51 (380) 고▲","19 : 35 (75) 저▼","10-20","12물","07 : 26","17 : 23"],"20221208":["00 : 54 (285) 고▲","07 : 28 (34) 저▼","13 : 43 (352) 고▲","20 : 32 (95) 저▼","10-21","13물","07 : 26","17 : 23"],"20221209":["01 : 51 (264) 고▲","08 : 24 (67) 저▼","14 : 40 (322) 고▲","21 : 35 (110) 저▼","10-22","14물","07 : 27","17 : 23"],"20221210":["03 : 02 (246) 고▲","09 : 28 (98) 저▼","15 : 46 (296) 고▲","22 : 44 (117) 저▼","10-23","조금","07 : 28","17 : 23"],"20221211":["04 : 35 (241) 고▲","10 : 44 (121) 저▼","16 : 59 (278) 고▲","23 : 54 (114) 저▼","10-24","1물","07 : 29","17 : 23"],"20221212":["06 : 07 (251) 고▲","12 : 05 (131) 저▼","18 : 09 (270) 고▲","","10-25","2물","07 : 30","17 : 24"],"20221213":["00 : 54 (103) 저▼","07 : 14 (269) 고▲","13 : 18 (129) 저▼","19 : 04 (268) 고▲","10-26","3물","07 : 30","17 : 24"],"20221214":["01 : 44 (90) 저▼","08 : 04 (288) 고▲","14 : 16 (121) 저▼","19 : 49 (270) 고▲","10-27","4물","07 : 31","17 : 24"],"20221215":["02 : 24 (76) 저▼","08 : 44 (306) 고▲","15 : 03 (111) 저▼","20 : 28 (275) 고▲","10-28","5물","07 : 32","17 : 24"],"20221216":["03 : 00 (64) 저▼","09 : 19 (321) 고▲","15 : 43 (101) 저▼","21 : 04 (280) 고▲","10-29","6물","07 : 32","17 : 25"],"20221217":["03 : 32 (53) 저▼","09 : 52 (334) 고▲","16 : 19 (93) 저▼","21 : 38 (285) 고▲","10-30","7물","07 : 33","17 : 25"],"20221218":["04 : 03 (44) 저▼","10 : 24 (343) 고▲","16 : 53 (88) 저▼","22 : 11 (288) 고▲","11-01","8물","07 : 33","17 : 25"],"20221219":["04 : 34 (39) 저▼","10 : 55 (348) 고▲","17 : 26 (87) 저▼","22 : 45 (288) 고▲","11-02","9물","07 : 34","17 : 26"],"20221220":["05 : 05 (37) 저▼","11 : 27 (349) 고▲","18 : 00 (89) 저▼","23 : 18 (286) 고▲","11-03","10물","07 : 35","17 : 26"],"20221221":["05 : 38 (40) 저▼","11 : 59 (344) 고▲","18 : 34 (94) 저▼","23 : 53 (281) 고▲","11-04","11물","07 : 35","17 : 27"],"20221222":["06 : 13 (49) 저▼","12 : 33 (335) 고▲","19 : 11 (101) 저▼","","11-05","12물","07 : 36","17 : 27"],"20221223":["00 : 29 (272) 고▲","06 : 51 (63) 저▼","13 : 08 (322) 고▲","19 : 52 (109) 저▼","11-06","13물","07 : 36","17 : 28"],"20221224":["01 : 10 (262) 고▲","07 : 32 (81) 저▼","13 : 48 (307) 고▲","20 : 38 (115) 저▼","11-07","14물","07 : 37","17 : 28"],"20221225":["02 : 00 (251) 고▲","08 : 20 (100) 저▼","14 : 33 (292) 고▲","21 : 31 (118) 저▼","11-08","조금","07 : 37","17 : 29"],"20221226":["03 : 01 (243) 고▲","09 : 18 (118) 저▼","15 : 30 (278) 고▲","22 : 32 (114) 저▼","11-09","1물","07 : 37","17 : 30"],"20221227":["04 : 19 (245) 고▲","10 : 33 (129) 저▼","16 : 38 (270) 고▲","23 : 37 (101) 저▼","11-10","2물","07 : 38","17 : 30"],"20221228":["05 : 42 (259) 고▲","11 : 57 (129) 저▼","17 : 52 (269) 고▲","","11-11","3물","07 : 38","17 : 31"],"20221229":["00 : 38 (80) 저▼","06 : 53 (286) 고▲","13 : 15 (115) 저▼","18 : 58 (277) 고▲","11-12","4물","07 : 38","17 : 32"],"20221230":["01 : 34 (54) 저▼","07 : 51 (318) 고▲","14 : 21 (94) 저▼","19 : 55 (289) 고▲","11-13","5물","07 : 39","17 : 32"],"20221231":["02 : 26 (25) 저▼","08 : 44 (351) 고▲","15 : 17 (71) 저▼","20 : 47 (303) 고▲","11-14","6물","07 : 39","17 : 33"],"20180101":["03 : 16 (-1) 저▼","09 : 33 (380) 고▲","16 : 08 (52) 저▼","21 : 36 (315) 고▲","11-15","7물","07 : 39","17 : 34"],"20180102":["04 : 05 (-21) 저▼","10 : 20 (400) 고▲","16 : 57 (39) 저▼","22 : 09 (323) 고▲","11-16","8물","07 : 39","17 : 34"],"20180103":["04 : 52 (-31) 저▼","11 : 36 (408) 고▲","17 : 44 (35) 저▼","23 : 09 (323) 고▲","11-17","9물","07 : 39","17 : 35"],"20180104":["05 : 39 (-28) 저▼","11 : 52 (403) 고▲","18 : 30 (41) 저▼","23 : 55 (316) 고▲","11-18","10물","07 : 40","17 : 36"],"20180105":["06 : 26 (-12) 저▼","12 : 36 (385) 고▲","19 : 17 (54) 저▼","","11-19","11물","07 : 40","17 : 37"],"20180106":["00 : 42 (303) 고▲","07 : 13 (16) 저▼","13 : 20 (359) 고▲","20 : 04 (71) 저▼","11-20","12물","07 : 40","17 : 38"],"20180107":["01 : 31 (284) 고▲","08 : 01 (51) 저▼","14 : 05 (327) 고▲","20 : 53 (89) 저▼","11-21","13물","07 : 40","17 : 39"],"20180108":["02 : 27 (264) 고▲","08 : 54 (89) 저▼","14 : 52 (296) 고▲","21 : 47 (104) 저▼","11-22","14물","07 : 40","17 : 39"],"20180109":["03 : 36 (249) 고▲","09 : 55 (122) 저▼","15 : 46 (268) 고▲","22 : 49 (113) 저▼","11-23","조금","07 : 40","17 : 40"],"20180110":["05 : 08 (243) 고▲","11 : 12 (145) 저▼","16 : 54 (248) 고▲","23 : 58 (113) 저▼","11-24","1물","07 : 40","17 : 41"],"20180111":["06 : 41 (252) 고▲","12 : 41 (152) 저▼","18 : 12 (239) 고▲","","11-25","2물","07 : 40","17 : 42"],"20180112":["01 : 01 (105) 저▼","07 : 45 (268) 고▲","13 : 55 (144) 저▼","19 : 17 (241) 고▲","11-26","3물","07 : 40","17 : 43"],"20180113":["01 : 53 (93) 저▼","08 : 31 (286) 고▲","14 : 49 (130) 저▼","20 : 07 (249) 고▲","11-27","4물","07 : 39","17 : 44"],"20180114":["02 : 35 (78) 저▼","09 : 09 (304) 고▲","15 : 31 (115) 저▼","20 : 48 (260) 고▲","11-28","5물","07 : 39","17 : 45"],"20180115":["03 : 13 (63) 저▼","09 : 41 (320) 고▲","16 : 07 (100) 저▼","21 : 25 (271) 고▲","11-29","6물","07 : 39","17 : 46"],"20180116":["03 : 47 (49) 저▼","10 : 12 (334) 고▲","16 : 39 (89) 저▼","21 : 59 (282) 고▲","11-30","7물","07 : 39","17 : 47"],"20180117":["04 : 20 (36) 저▼","10 : 42 (344) 고▲","17 : 10 (80) 저▼","22 : 32 (291) 고▲","12-01","8물","07 : 39","17 : 48"],"20180118":["04 : 53 (28) 저▼","11 : 12 (350) 고▲","17 : 42 (74) 저▼","23 : 04 (297) 고▲","12-02","9물","07 : 38","17 : 49"],"20180119":["05 : 27 (25) 저▼","11 : 42 (351) 고▲","18 : 14 (72) 저▼","23 : 38 (299) 고▲","12-03","10물","07 : 38","17 : 50"],"20180120":["06 : 01 (29) 저▼","12 : 12 (347) 고▲","18 : 47 (74) 저▼","","12-04","11물","07 : 38","17 : 51"],"20180121":["00 : 13 (296) 고▲","06 : 37 (40) 저▼","12 : 44 (338) 고▲","19 : 22 (78) 저▼","12-05","12물","07 : 37","17 : 52"],"20180122":["00 : 50 (290) 고▲","07 : 14 (56) 저▼","13 : 18 (325) 고▲","20 : 01 (83) 저▼","12-06","13물","07 : 37","17 : 53"],"20180123":["01 : 33 (281) 고▲","07 : 57 (77) 저▼","13 : 56 (307) 고▲","20 : 45 (89) 저▼","12-07","14물","07 : 36","17 : 54"],"20180124":["02 : 25 (271) 고▲","08 : 47 (101) 저▼","14 : 42 (287) 고▲","21 : 38 (94) 저▼","12-08","조금","07 : 36","17 : 54"],"20180125":["03 : 30 (263) 고▲","09 : 52 (122) 저▼","15 : 40 (267) 고▲","22 : 42 (93) 저▼","12-09","1물","07 : 35","17 : 55"],"20180126":["04 : 54 (264) 고▲","11 : 18 (134) 저▼","17 : 01 (254) 고▲","23 : 56 (83) 저▼","12-10","2물","07 : 35","17 : 56"],"20180127":["06 : 24 (280) 고▲","12 : 54 (128) 저▼","18 : 29 (254) 고▲","","12-11","3물","07 : 34","17 : 57"],"20180128":["01 : 07 (63) 저▼","07 : 37 (309) 고▲","14 : 11 (107) 저▼","19 : 41 (268) 고▲","12-12","4물","07 : 34","17 : 58"],"20180129":["02 : 09 (35) 저▼","08 : 35 (342) 고▲","15 : 10 (80) 저▼","20 : 38 (289) 고▲","12-13","5물","07 : 33","17 : 59"],"20180130":["03 : 05 (7) 저▼","09 : 26 (371) 고▲","16 : 01 (55) 저▼","21 : 28 (309) 고▲","12-14","6물","07 : 32","18 : 00"],"20180131":["03 : 56 (-17) 저▼","10 : 11 (393) 고▲","16 : 47 (36) 저▼","22 : 14 (326) 고▲","12-15","7물","07 : 32","18 : 01"],"20180201":["04 : 44 (-31) 저▼","10 : 54 (402) 고▲","17 : 29 (26) 저▼","22 : 59 (336) 고▲","12-16","8물","07 : 31","18 : 02"],"20180202":["05 : 29 (-31) 저▼","11 : 35 (399) 고▲","18 : 11 (26) 저▼","23 : 42 (335) 고▲","12-17","9물","07 : 30","18 : 03"],"20180203":["06 : 12 (-17) 저▼","12 : 14 (384) 고▲","18 : 51 (35) 저▼","","12-18","10물","07 : 29","18 : 04"],"20180204":["00 : 24 (326) 고▲","06 : 54 (10) 저▼","12 : 51 (359) 고▲","19 : 30 (51) 저▼","12-19","11물","07 : 29","18 : 05"],"20180205":["01 : 07 (309) 고▲","07 : 36 (46) 저▼","13 : 27 (328) 고▲","20 : 09 (70) 저▼","12-20","12물","07 : 28","18 : 06"],"20180206":["01 : 51 (287) 고▲","08 : 19 (86) 저▼","14 : 03 (296) 고▲","20 : 50 (91) 저▼","12-21","13물","07 : 27","18 : 07"],"20180207":["02 : 43 (264) 고▲","09 : 07 (123) 저▼","14 : 42 (266) 고▲","21 : 36 (109) 저▼","12-22","14물","07 : 26","18 : 08"],"20180208":["03 : 53 (246) 고▲","10 : 11 (154) 저▼","15 : 33 (239) 고▲","22 : 38 (121) 저▼","12-23","조금","07 : 25","18 : 09"],"20180209":["05 : 43 (241) 고▲","11 : 50 (168) 저▼","16 : 58 (221) 고▲","-","12-24","1물","07 : 24","18 : 10"],"20180210":["00 : 00 (123) 저▼","07 : 18 (253) 고▲","13 : 32 (161) 저▼","18 : 43 (220) 고▲","12-25","2물","07 : 23","18 : 11"],"20180211":["01 : 16 (113) 저▼","08 : 14 (272) 고▲","14 : 35 (142) 저▼","19 : 49 (233) 고▲","12-26","3물","07 : 22","18 : 12"],"20180212":["02 : 12 (96) 저▼","08 : 53 (292) 고▲","15 : 17 (122) 저▼","20 : 34 (250) 고▲","12-27","4물","07 : 22","18 : 13"],"20180213":["02 : 55 (76) 저▼","09 : 26 (311) 고▲","15 : 50 (102) 저▼","21 : 12 (268) 고▲","12-28","5물","07 : 21","18 : 14"],"20180214":["03 : 32 (56) 저▼","09 : 55 (328) 고▲","16 : 21 (85) 저▼","21 : 45 (285) 고▲","12-29","6물","07 : 20","18 : 15"],"20180215":["04 : 07 (38) 저▼","10 : 23 (341) 고▲","16 : 50 (71) 저▼","22 : 16 (301) 고▲","12-30","7물","07 : 19","18 : 16"],"20180216":["04 : 40 (25) 저▼","10 : 51 (351) 고▲","17 : 19 (59) 저▼","22 : 48 (314) 고▲","01-01","8물","07 : 17","18 : 17"],"20180217":["05 : 12 (17) 저▼","11 : 19 (356) 고▲","17 : 49 (50) 저▼","23 : 20 (323) 고▲","01-02","9물","07 : 16","18 : 18"],"20180218":["05 : 46 (17) 저▼","11 : 48 (356) 고▲","18 : 19 (46) 저▼","23 : 54 (326) 고▲","01-03","10물","07 : 15","18 : 19"],"20180219":["06 : 21 (25) 저▼","12 : 18 (349) 고▲","18 : 53 (47) 저▼","","01-04","11물","07 : 14","18 : 20"],"20180220":["00 : 31 (323) 고▲","06 : 59 (42) 저▼","12 : 50 (335) 고▲","19 : 28 (53) 저▼","01-05","12물","07 : 13","18 : 21"],"20180221":["01 : 12 (314) 고▲","07 : 39 (66) 저▼","13 : 26 (315) 고▲","20 : 09 (64) 저▼","01-06","13물","07 : 12","18 : 22"],"20180222":["01 : 59 (300) 고▲","08 : 27 (94) 저▼","14 : 08 (289) 고▲","20 : 57 (77) 저▼","01-07","14물","07 : 11","18 : 22"],"20180223":["02 : 58 (284) 고▲","09 : 28 (122) 저▼","15 : 02 (261) 고▲","22 : 00 (88) 저▼","01-08","조금","07 : 10","18 : 23"],"20180224":["04 : 20 (273) 고▲","10 : 57 (141) 저▼","16 : 25 (239) 고▲","23 : 22 (90) 저▼","01-09","1물","07 : 09","18 : 24"],"20180225":["06 : 04 (280) 고▲","12 : 45 (136) 저▼","18 : 15 (237) 고▲","","01-10","2물","07 : 07","18 : 25"],"20180226":["00 : 47 (76) 저▼","07 : 28 (304) 고▲","14 : 06 (113) 저▼","19 : 36 (257) 고▲","01-11","3물","07 : 06","18 : 26"],"20180227":["01 : 59 (50) 저▼","08 : 27 (333) 고▲","15 : 03 (83) 저▼","20 : 33 (285) 고▲","01-12","4물","07 : 05","18 : 27"],"20180228":["02 : 57 (21) 저▼","09 : 14 (360) 고▲","15 : 49 (55) 저▼","21 : 21 (312) 고▲","01-13","5물","07 : 04","18 : 28"],"20180301":["03 : 47 (-4) 저▼","09 : 56 (379) 고▲","16 : 30 (33) 저▼","22 : 04 (335) 고▲","01-14","6물","07 : 03","18 : 29"],"20180302":["04 : 32 (-18) 저▼","10 : 35 (388) 고▲","17 : 08 (20) 저▼","22 : 44 (350) 고▲","01-15","7물","07 : 01","18 : 30"],"20180303":["05 : 14 (-19) 저▼","11 : 11 (385) 고▲","17 : 45 (17) 저▼","23 : 24 (353) 고▲","01-16","8물","07 : 00","18 : 30"],"20180304":["05 : 54 (-6) 저▼","11 : 46 (372) 고▲","18 : 20 (23) 저▼","","01-17","9물","06 : 59","18 : 31"],"20180305":["00 : 03 (347) 고▲","06 : 33 (19) 저▼","12 : 19 (350) 고▲","18 : 53 (37) 저▼","01-18","10물","06 : 57","18 : 32"],"20180306":["00 : 41 (331) 고▲","07 : 11 (52) 저▼","12 : 50 (323) 고▲","19 : 25 (56) 저▼","01-19","11물","06 : 56","18 : 33"],"20180307":["01 : 20 (309) 고▲","07 : 48 (89) 저▼","13 : 21 (294) 고▲","19 : 57 (78) 저▼","01-20","12물","06 : 55","18 : 34"],"20180308":["02 : 01 (285) 고▲","08 : 28 (124) 저▼","13 : 53 (265) 고▲","20 : 33 (100) 저▼","01-21","13물","06 : 54","18 : 35"],"20180309":["02 : 52 (262) 고▲","09 : 21 (154) 저▼","14 : 34 (237) 고▲","21 : 20 (120) 저▼","01-22","14물","06 : 52","18 : 35"],"20180310":["04 : 17 (245) 고▲","10 : 49 (172) 저▼","15 : 44 (214) 고▲","22 : 38 (134) 저▼","01-23","조금","06 : 51","18 : 36"],"20180311":["06 : 26 (247) 고▲","12 : 57 (167) 저▼","18 : 02 (209) 고▲","","01-24","1물","06 : 50","18 : 37"],"20180312":["00 : 23 (132) 저▼","07 : 40 (264) 고▲","14 : 10 (147) 저▼","19 : 27 (225) 고▲","01-25","2물","06 : 48","18 : 38"],"20180313":["01 : 41 (115) 저▼","08 : 25 (283) 고▲","14 : 52 (124) 저▼","20 : 15 (246) 고▲","01-26","3물","06 : 47","18 : 39"],"20180314":["02 : 31 (92) 저▼","08 : 59 (303) 고▲","15 : 24 (102) 저▼","20 : 52 (270) 고▲","01-27","4물","06 : 46","18 : 39"],"20180315":["03 : 11 (69) 저▼","09 : 28 (320) 고▲","15 : 52 (81) 저▼","21 : 24 (293) 고▲","01-28","5물","06 : 44","18 : 40"],"20180316":["03 : 46 (47) 저▼","09 : 55 (335) 고▲","16 : 20 (61) 저▼","21 : 56 (315) 고▲","01-29","6물","06 : 43","18 : 41"],"20180317":["04 : 20 (30) 저▼","10 : 22 (348) 고▲","16 : 49 (43) 저▼","22 : 27 (334) 고▲","02-01","8물","06 : 42","18 : 42"],"20180318":["04 : 54 (19) 저▼","10 : 50 (356) 고▲","17 : 19 (29) 저▼","23 : 00 (348) 고▲","02-02","9물","06 : 40","18 : 43"],"20180319":["05 : 29 (16) 저▼","11 : 19 (357) 고▲","17 : 50 (21) 저▼","23 : 36 (356) 고▲","02-03","10물","06 : 39","18 : 43"],"20180320":["06 : 05 (23) 저▼","11 : 51 (351) 고▲","18 : 24 (21) 저▼","","02-04","11물","06 : 37","18 : 44"],"20180321":["00 : 14 (355) 고▲","06 : 44 (39) 저▼","12 : 25 (335) 고▲","19 : 01 (29) 저▼","02-05","12물","06 : 36","18 : 45"],"20180322":["00 : 55 (344) 고▲","07 : 27 (65) 저▼","13 : 03 (311) 고▲","19 : 42 (45) 저▼","02-06","13물","06 : 35","18 : 46"],"20180323":["01 : 43 (326) 고▲","08 : 17 (96) 저▼","13 : 45 (282) 고▲","20 : 30 (66) 저▼","02-07","13물","06 : 33","18 : 47"],"20180324":["02 : 41 (303) 고▲","09 : 21 (125) 저▼","14 : 40 (251) 고▲","21 : 33 (87) 저▼","02-08","조금","06 : 32","18 : 47"],"20180325":["04 : 02 (285) 고▲","10 : 53 (143) 저▼","16 : 12 (228) 고▲","23 : 00 (98) 저▼","02-09","1물","06 : 31","18 : 48"],"20180326":["05 : 50 (285) 고▲","12 : 40 (135) 저▼","18 : 14 (232) 고▲","","02-10","2물","06 : 29","18 : 49"],"20180327":["00 : 33 (90) 저▼","07 : 14 (302) 고▲","13 : 55 (110) 저▼","19 : 31 (258) 고▲","02-11","3물","06 : 28","18 : 50"],"20180328":["01 : 48 (67) 저▼","08 : 10 (324) 고▲","14 : 46 (82) 저▼","20 : 24 (289) 고▲","02-12","4물","06 : 26","18 : 50"],"20180329":["02 : 45 (41) 저▼","08 : 55 (344) 고▲","15 : 29 (56) 저▼","21 : 09 (319) 고▲","02-13","5물","06 : 25","18 : 51"],"20180330":["03 : 34 (21) 저▼","09 : 34 (358) 고▲","16 : 06 (35) 저▼","21 : 49 (343) 고▲","02-14","6물","06 : 24","18 : 52"],"20180331":["04 : 17 (9) 저▼","10 : 09 (364) 고▲","16 : 42 (21) 저▼","22 : 27 (358) 고▲","02-15","7물","06 : 22","18 : 53"]}');


var _indexed = [];
var _specialNews = null;

function parseSpecialNews(xml){
	var items = null;
    try{
        items = xml.documentElement.firstChild.nextSibling.firstChild.children;   
    }catch(e){
		setTimeout(_loadSpecialNews, 1000 * 60 * 30); //30 minutes;
        return null;
    }

	if(_specialNews != null && _specialNews.length < items.length){
		alert('기상특보가 있습니다!!!');
	}
	
	_specialNews = [];
	for (var i = 0; i < items.length; i++) {
        var item = items[i];
		var ii = {};
		var time = item.getElementsByTagName('tmFc')[0].textContent;
		var title = item.getElementsByTagName('title')[0].textContent;
		if(time){
			time = time.substring(0, 4) + '년' + time.substring(4, 6) + '월' + time.substring(6, 8) + '일 ' + time.substring(8,10) + ':' + time.substring(10);
		}
		ii['time'] = time;
		ii['title'] = title;
		
        _specialNews.push(ii);
    }
	
	setTimeout(_loadSpecialNews, 1000 * 60 * 30); //30 minutes;
    return;
}

function _loadSpecialNews(callback) {
	var curDate = new Date();
    var edate = curDate.format('yyyyMMdd');
    curDate.setDate(curDate.getDate()-1);
    var sdate = curDate.format('yyyyMMdd');
	
	var xhr = new XMLHttpRequest();
    var url = 'http://newsky2.kma.go.kr/service/WetherSpcnwsInfoService/WeatherWarningList'; /*URL*/
	var queryParams = '?' + ('ServiceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D'); /*Service Key*/
	queryParams += '&' + ('stnId') + '=' + ('156'); /*발표관서*/
	queryParams += '&' + ('fromTmFc') + '=' + (sdate); /*발표시각(From)*/
	queryParams += '&' + ('toTmFc') + '=' + (edate); /*발표시각(To)*/
	queryParams += '&' + ('numOfRows') + '=' + ('999'); /*검색건수*/
	queryParams += '&' + ('pageNo') + '=' + ('1'); /*페이지 번호*/
	

	
    var proxy = "/ocean/AjaxRequest.jsp?encode=utf8&saved=n&url=" + encodeURIComponent(url + queryParams);
    // var proxy = "/ocean/AjaxRequest.jsp?encode=utf8&saved=n&url=" + encodeURIComponent(url + queryParams);


	
    xhr.open('GET', proxy);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.responseXML != null){
				parseSpecialNews(this.responseXML);
            } else {
                var text = this.responseText.trim();

				var xmlDoc = null;
                try { // code for IE
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(text);
                } catch (error) { // code for Mozilla, Firefox, Opera, etc.
                    try {
                        var parser = new DOMParser();
                        xmlDoc = parser.parseFromString(text, "text/xml");
						
                    } catch (error) {
                        if (callback)
                            callback(error);
                        else
                            return;
                    }
                }
				parseSpecialNews(xmlDoc);
            }
			if(callback)
				callback();
        }
    }
    xhr.send('');
}

function _extend(source, target){
    var obj = {};

    if (!(source == name || typeof (source) == 'undefined')) {
        for (var k in source)
            obj[k] = source[k];
    }

    if (!(target == name || typeof (target) == 'undefined')) {
        for (var k in target)
            obj[k] = target[k];
    }

    return obj;
}

function parseNowForecast(xml) {
    var items = null;
    try{
        // items = xml.documentElement.firstChild.nextSibling.firstChild.children;
        items = xml.documentElement.childNodes[1].childNodes[1].children;
        // items = xml.documentElement.childNodes[1].childNodes[1]
    }catch(e){
        return null;
    }
    // console.log('parseNowForecast', items );
    var curWeather = {};
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        for (var j = 0; j < item.children.length; j++) {
            var name = item.children[j].nodeName;


            if (name != 'category')
                continue;

            var category = item.children[j].textContent;
            var v = item.getElementsByTagName('obsrValue')[0].textContent;
			var baseDate = item.getElementsByTagName('baseDate')[0].textContent;
            // ppark 표출됨
            // console.log('parseNowForecast', baseDate );
			var baseTime = item.getElementsByTagName('baseTime')[0].textContent;
            
            if (category == 'SKY') {
                curWeather[category] = v;
				curWeather['baseDate'] = baseDate;
				curWeather['baseTime'] = baseTime;
            } else if (category == 'PTY') {
                curWeather[category] = v;
            } else if (category == 'R06' || category == 'PCP') {
                curWeather[category] = v;
            } else if (category == 'T3H' || category == 'T1H') {
                curWeather[category] = v;
            } else if (category == 'WAV') {
                curWeather[category] = v;
            } else if (category == 'VEC') {
                curWeather[category] = v;
            } else if (category == 'WSD') {
                curWeather[category] = v;
			} else if (category == 'POP') {
                curWeather[category] = v;
            } else if (category == 'REH') {
                curWeather[category] = v;
            } else if (category == 'TMN') {
                curWeather[category] = v;
            } else if (category == 'TMX') {
                curWeather[category] = v;
            } else {
                break;
            }
        }
    }
    return curWeather;
}

function parseShortForecast(xml) {
    var items = null;
    // console.log('xml.documentElement', xml.documentElement.childNodes[1].nextSibling);
    try{
        // items = xml.documentElement.firstChild.nextSibling.firstChild.children;   
        items = xml.documentElement.childNodes[1].childNodes[1].children;
    }catch(e){
        console.log('error',e);
        return null;
    }
    console.log('items', items[0].children);
    var forecast = [];
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // ppark 확인
        // console.log('item', item);
        for (var j = 0; j < item.children.length; j++) {
            var name = item.children[j].nodeName;


            if (name != 'category')
                continue;

            var category = item.children[j].textContent;
            // console.log('category', category);
            
            var fcstDate =item.getElementsByTagName('fcstDate')[0].textContent;
            var fcstTime =item.getElementsByTagName('fcstTime')[0].textContent;
            var v = item.getElementsByTagName('fcstValue')[0].textContent;
            // console.log('vsss', v);

            var t = fcstDate + "_" + fcstTime;
            
            var foundIndex = -1;

            for (var k = 0; k < forecast.length; k++ ){
                var ff = forecast[k];
                if(ff.fcstDate == fcstDate && ff.fcstTime == fcstTime){
                    foundIndex = k;
                    break;
                }
            }
            // ppark 확인
            console.log('forecast1', forecast);
            if (foundIndex < 0) {
                var obj = {};
                obj["fcstDate"] = fcstDate;
                obj["fcstTime"] = fcstTime;
                forecast.push(obj);
                foundIndex = 0;
            }

            if (category == 'SKY') {
                forecast[foundIndex][category] = v;
            } else if (category == 'PTY') {
                forecast[foundIndex][category] = v;
            } else if (category == 'PCP' || category == 'RN1') {
                forecast[foundIndex][category] = v;
            } else if (category == 'TMP' || category == 'T1H') {
                forecast[foundIndex][category] = v;
            } else if (category == 'WAV') {
                forecast[foundIndex][category] = v;
            } else if (category == 'VEC') {
                forecast[foundIndex][category] = v;
            } else if (category == 'WSD') {
                forecast[foundIndex][category] = v;
			} else if (category == 'POP') {
                forecast[foundIndex][category] = v;
			} else if (category == 'REH') {
                forecast[foundIndex][category] = v;
			} else if (category == 'TMN') {
                forecast[foundIndex][category] = v;
			} else if (category == 'TMX') {
                forecast[foundIndex][category] = v;
            } else {
                break;
            }
            // ppark 확인
            // console.log('forecast2', forecast);
        }
    }
    return forecast;
}


function loadForecast(pos, callback){
    var count = 0;

    var posName = pos;
    loadNowForecast(pos, function (pos) {
        count++;
        if (count == 3) {
            if (callback)
                callback(posName != pos ? null : pos);
        }
    });

    loadShortForecate(pos, function(pos){
        count++;
        if (count == 3) {
            if (callback)
                callback(posName != pos ? null : pos);
        }
    });

    loadSeaTempo(pos, function (pos) {
        count++;
        if (count == 3) {
            if (callback)
                callback(posName != pos ? null : pos);
        }
    });
}


// 동네예보.. getVilageFcst
function loadShortForecate(pos, callback){
    var curDate = new Date();
    var dateString = curDate.format('yyyyMMdd');
    var timeString
    if (curDate.getMinutes() < 50) {
        timeString = curDate.getHours() - 1;
    } else {
        timeString = curDate.getHours();
    }
    timeString = timeString.zf(2) + "00";

    if (parseInt(timeString) < 200) {
        timeString = "2300";
        curDate.setDate(curDate.getDate()-1);
        dateString = curDate.format('yyyyMMdd');
    } else if (parseInt(timeString) < 500) {
        timeString = "0200";
    } else if (parseInt(timeString) < 800) {
        timeString = "0500";
    } else if (parseInt(timeString) < 1100) {
        timeString = "0800";
    } else if (parseInt(timeString) < 1400) {
        timeString = "1100";
    } else if (parseInt(timeString) < 1700) {
        timeString = "1400";
    } else if (parseInt(timeString) < 2000) {
        timeString = "1700";
    } else if (parseInt(timeString) < 2300) {
        timeString = "2000";
    }
    


    var position = abalone_position[pos];

    if (position.forecast != null && typeof (position.forecast) != 'undefined') {
        if (callback)
            callback(pos);
        else
            return position.forecast;
    }
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'
    // var queryParams = '?' + ('ServiceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D'); /*Service Key*/
    var queryParams = '?' + ('ServiceKey=LrXygMrb2AUq%2Blt2uKLv9b7Ogi3Dajn4qf48rZSnu%2Bpf8%2Fkd9BxsAX5zUgSE041bDhjijxkQNx8N%2BI2Eu4pUbQ%3D%3D'); /*Service Key*/
	
	
    queryParams += '&' + ('base_date') + '=' + (dateString); /*해상위치(남해서부)*/
    queryParams += '&' + ('base_time') + '=' + (timeString); /*페이지 번호*/
    queryParams += '&' + ('nx') + '=' + (position.NX); /*해상위치(남해서부)*/
    queryParams += '&' + ('ny') + '=' + (position.NY); /*페이지 번호*/
    queryParams += '&' + ('numOfRows') + '=' + ('999'); /*검색건수*/
    queryParams += '&' + ('pageNo') + '=' + ('1'); /*페이지 번호*/

    // ppark
    console.log('동네예보 url', url + queryParams);
    var proxy = "/ocean/AjaxRequest.jsp?url=" + encodeURIComponent(url + queryParams);
    

    xhr.open('GET', proxy);
    xhr.onreadystatechange = function () {
        // ppark 확인
        // console.log('readyState2', this.readyState);
        if (this.readyState == 4) {
            // console.log('this.responseXML1', this.responseXML);
            if (this.responseXML != null){
                position.forecast = parseShortForecast(this.responseXML);
                // ppark
                // console.log('position.forecast1', position.forecast);
                }
                
            else {
                
                var text = this.responseText.trim();
                // console.log('this.responseText', this.responseText);
				var xmlDoc = null;
                try { // code for IE
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(text);
                } catch (error) { // code for Mozilla, Firefox, Opera, etc.
                    try {
                        var parser = new DOMParser();
                        xmlDoc = parser.parseFromString(text, "text/xml");
                    } catch (error) {
                        if (callback)
                            callback(error);
                        else
                            return;
                    }
                }
                // ppark
                // console.log('xmlDoc',xmlDoc )
                position.forecast = parseShortForecast(xmlDoc);
                // console.log('this.responseXML2', parseShortForecast(xmlDoc));
                // ppark
                // console.log('position.forecast2', position.forecast);
            }
            if (callback) {
                callback(position.forecast == null ? null : pos);
                // ppark
                // console.log('position.forecast3', position.forecast);
            }
                
            else
                return position.forecast;
        }
        
    }
    
    xhr.send('');
}


function loadNowForecast(pos, callback) {

    var curDate = new Date();
    var dateString = curDate.format('yyyyMMdd');
    var timeString
    if (curDate.getMinutes() < 58) {
        timeString = curDate.getHours() - 1;
    } else {
        timeString = curDate.getHours();
    }
    timeString = timeString.zf(2) + "00";

	if(parseInt(timeString) < 0){
		timeString = "2300";
        curDate.setDate(curDate.getDate()-1);
        dateString = curDate.format('yyyyMMdd');
	}

    var position = abalone_position[pos];

    var xhr = new XMLHttpRequest();
    // var url = 'http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastGrib'; /*URL*/
    // ppark
    var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';    
    // var queryParams = '?' + ('ServiceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D'); /*Service Key*/
    var queryParams = '?' + ('ServiceKey=LrXygMrb2AUq%2Blt2uKLv9b7Ogi3Dajn4qf48rZSnu%2Bpf8%2Fkd9BxsAX5zUgSE041bDhjijxkQNx8N%2BI2Eu4pUbQ%3D%3D'); /*Service Key*/
    


    queryParams += '&' + ('base_date') + '=' + (dateString); /*해상위치(남해서부)*/
    queryParams += '&' + ('base_time') + '=' + (timeString); /*페이지 번호*/
    queryParams += '&' + ('nx') + '=' + (position.NX); /*해상위치(남해서부)*/
    queryParams += '&' + ('ny') + '=' + (position.NY); /*페이지 번호*/
    queryParams += '&' + ('numOfRows') + '=' + ('999'); /*검색건수*/
    queryParams += '&' + ('pageNo') + '=' + ('1'); /*페이지 번호*/

    // ppark
    // console.log('초단기 url', url + queryParams);

    var proxy = "/ocean/AjaxRequest.jsp?url=" + encodeURIComponent(url + queryParams);

	//var proxy = "../AjaxRequest.jsp?url=" + url + queryParams;
	

    xhr.open('GET', proxy);

    position.currWeather = null;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.responseXML != null){
                //  ppark 여기로 안들어옴
                position.currWeather = _extend(position.currWeather, parseNowForecast(this.responseXML));
                console.log('초단기 currWeather1', position.currWeather);
            }
                
            else {
                var text = this.responseText.trim();
                console.log('초단기 text', text);
				var xmlDoc = null;
                try { // code for IE
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(text);
                } catch (error) { // code for Mozilla, Firefox, Opera, etc.
                    try {
                        var parser = new DOMParser();
                        xmlDoc = parser.parseFromString(text, "text/xml");
                    } catch (error) {
                        if (callback)
                            callback(error);
                        else
                            return;
                    }
                }
                position.currWeather = _extend(position.currWeather, parseNowForecast(xmlDoc));
                console.log('초단기 currWeather2', position.currWeather);
            }
            if (callback ) {
                callback(position.currWeather == null ? null : pos);
                console.log('초단기 currWeather3', position.currWeather);
            }
                
            else
                return position.currWeather;
        }
    }
    xhr.send('');
}
//날씨정보읽기
// function viewWeather() {
//          var curWeather = abalone_position[pos].currWeather;
// 		 console.log('intro.html', curWeather);

//                 var wth = abalone_position[pos].WTH;
//                 var dox = abalone_position[pos].DOX;

// 				var wth1 = abalone_position['노화읍'].WTH;  //관측지점 : 노화도
//                 var dox1 = abalone_position['노화읍'].DOX;

// 				var wth2 = abalone_position['금일읍'].WTH;  //관측지점 : 금일
//                 var dox2 = abalone_position['금일읍'].DOX;

// 				var wth3 = abalone_position['완도읍'].WTH;  //관측지점 : 망남
//                 var dox3 = abalone_position['완도읍'].DOX;

// 				var wth4 = abalone_position['고금면'].WTH;  //관측지점 : 가교
//                 var dox4 = abalone_position['고금면'].DOX;

// 				var wth5 = abalone_position['청산면'].WTH;  //관측지점 : 청산
//                 var dox5 = abalone_position['청산면'].DOX;

// 				var wth6 = abalone_position['소안면'].WTH;  //관측지점 : 백도
//                 var dox6 = abalone_position['소안면'].DOX;

// 				var wth7 = abalone_position['생일면'].WTH;  //관측지점 : 동백
//                 var dox7 = abalone_position['생일면'].DOX;

// 				var wth8 = abalone_position['일정'].WTH;  //관측지점 : 일정
				

// 				///// 일정 /////////////////////////////////////
// 					if(wth8 == '0')				
// 					{	$("#unit15").text('점검중');	}
// 					else
// 					{
// 						$("#wth8").text('' + wth8 + "");
// 						$("#unit15").text(' ℃');
// 					}

// 					$("#unit16").text('미설치');  			
					

// 					///// 동백 /////////////////////////////////////
// 					if(wth7 == '0')				
// 					{	$("#unit13").text('점검중');	}
// 					else
// 					{
// 						$("#wth7").text('' + wth7 + "");
// 						$("#unit13").text(' ℃');
// 					}

// 					if(dox7)
// 					{	$("#dox7").text('' + dox7 + "");
// 						$("#unit14").text(' mg/L');
// 					}
// 					else
// 					{
// 						$("#unit14").text('점검중');  			
// 					}

// 					///// 백도 /////////////////////////////////////
// 					if(wth6 == '0')				
// 					{	$("#unit11").text('점검중');	}
// 					else
// 					{
// 						$("#wth6").text('' + wth6 + "");
// 						$("#unit11").text(' ℃');
// 					}

// 					if(dox6)
// 					{	$("#dox6").text('' + dox6 + "");
// 						$("#unit12").text(' mg/L');
// 					}
// 					else
// 					{	$("#unit12").text('점검중');  	}

// 					///// 청산 /////////////////////////////////////
// 					if(wth5 == '0')				
// 					{	$("#unit9").text('점검중');	}
// 					else
// 					{
// 						$("#wth5").text('' + wth5 + "");
// 						$("#unit9").text(' ℃');
// 					}

// 					if(dox5)
// 					{	$("#dox5").text('' + dox5 + "");
// 						$("#unit10").text(' mg/L');
// 					}
// 					else
// 					{	$("#unit10").text('점검중');  	}					

// 					///// 가교 /////////////////////////////////////
// 					if(wth4 == '0')				
// 					{	$("#unit7").text('점검중');	}
// 					else
// 					{
// 						$("#wth4").text('' + wth4 + "");
// 						$("#unit7").text(' ℃');
// 					}

// 					if(dox4)
// 					{	$("#dox4").text('' + dox4 + "");
// 						$("#unit8").text(' mg/L');
// 					}
// 					else
// 					{	$("#unit8").text('점검중');  	}
				

// 					///// 망남 /////////////////////////////////////
// 					if(wth3 == '0')				
// 					{	$("#unit5").text('점검중');	}
// 					else
// 					{
// 						$("#wth3").text('' + wth3 + "");
// 						$("#unit5").text(' ℃');
// 					}

// 					if(dox3)
// 					{	$("#dox3").text('' + dox3 + "");
// 						$("#unit6").text(' mg/L');
// 					}
// 					else
// 					{	$("#unit6").text('점검중');  	}

// 					///// 금일 ///////////////////////////////////////
// 					if(wth2 == '0')				
// 					{	$("#unit3").text('점검중');	}
// 					else
// 					{
// 						$("#wth2").text('' + wth2 + "");
// 						$("#unit3").text(' ℃');
// 					}

// 					if(dox2)					//금일 용존산소
// 					{	$("#dox2").text('' + dox2 + "");  			
// 						$("#unit4").text(' mg/L');
// 					}
// 					else
// 					{	$("#unit4").text('점검중');  	}
					

// 					///// 노화도 ////////////////////////////////////
// 					if(wth1 == '0')				
// 					{	$("#unit1").text('점검중');	}
// 					else
// 					{
// 						$("#wth1").text('' + wth1 + "");
// 						$("#unit1").text(' ℃');
// 					}

// 					if(dox1)
// 					{	$("#dox1").text('' + dox1 + "");  			
// 						$("#unit2").text(' mg/L');
// 					}
// 					else
// 					{	$("#unit2").text('미설치');  	}

//                 _updateWSD();
// 	}
function loadWeathers(position, callback){
    var count = 0;
    var len = 0;
    var sendResult = false;
    for(var key in abalone_position){
        var currWeather = abalone_position[key].currWeather;
        if (currWeather == null || typeof (currWeather) == 'undefined') {
            len++;
            loadForecast(key, function (pos) {
                if (pos != null) {
                    var tt = abalone_position[pos];
                    console.log('ttap', tt);
                    // tt.currWeather.WAV = tt.forecast[0].WAV;

                    calcIndexes(pos, function (pos) {
                        count++;
                        if (sendResult == false && (count == len || position == pos)) {
                            sendResult = true;
                            if (callback)
                                callback();
                            else
                                return count;
                        }
                    });
                } else {
                    if(sendResult == false){
                        sendResult = true;
                        if (callback)
                            callback("error");
                    }
                }
            });
        }
    }
    if(len == count){
        if (callback)
            callback();
    }


}

// ppark 용존산소위젯
function viewWeather() {
    var curWeather = abalone_position[pos].currWeather;
    console.log('inro.html', curWeather);

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
function parseRadarImage(xml){
    var items = null;
    try{
        items = xml.documentElement.firstChild.nextSibling.firstChild.children;   
    }catch(e){
        return null;
    }

    var path = '';
    for (var i = 0; i < items.length; i++) {
        var item = items[0];

        var pos = item.children.length - 1;
        var path = item.children[pos].textContent;
        break;
    }

    return path;
}

function loadRadarImage(callback) {

    var curDate = new Date();
    var dateString = curDate.format('yyyyMMdd');
    var timeString
    if (curDate.getMinutes() < 58) {
        timeString = curDate.getHours() - 1;
    } else {
        timeString = curDate.getHours();
    }
    timeString = timeString.zf(2) + "00";
    if(parseInt(timeString) < 0){
		timeString = "2300";
        curDate.setDate(curDate.getDate()-1);
        dateString = curDate.format('yyyyMMdd');
	}
    var reTime = new Date () ;
    
    var timeString = (reTime.getHours() < 0) ? "0" + reTime.getHours() : reTime.getHours();;

    if (reTime.getMinutes() < 58)
        reTime.setHours(reTime.getHours() - 1);

    reTime.setMinutes(0);
    //timeString += ":00";
    reTime = reTime.getTime() ;

    var distanceValue = parseInt($('#radar_cd_bl_bar').width() / 15) + 1

    var timeArray = new Array() ;
    var j = 14 ;
    var dateArray = new Array();
    for ( var i = 0 ; i < 15 ; i++ ){
        var dDate = new Date (reTime-(i*(1800*1000))) ;
        dateArray[i] = dDate.format('yyyyMMdd');
        dateArray[i] += ( dDate.getHours() < 10 ) ? "0"+dDate.getHours() : dDate.getHours() ;
        dateArray[i] += ( dDate.getMinutes() < 10 ) ? "00" : (( dDate.getMinutes() / 10).toFixed(0) * 10) ;
        timeArray[j] = ( dDate.getHours() < 10 ) ? "0"+dDate.getHours() : dDate.getHours() ;
        timeArray[j]+= ":" ;
        timeArray[j]+= ( dDate.getMinutes() < 10 ) ? "00" : (( dDate.getMinutes() / 10).toFixed(0) * 10) ;
        j-- ;
    }
    var cssValue = {}, rulerPoint = new Array(), innerHtml = '' ;
    for ( var i = 0 ; i < 15 ; i++ ){
        $('#radar_image').append('<img class="radar_class_radar_img" ' + ((i > 0) ? 'style="display:none;' : '') + '" id="radar_image" alt="radar" src="http://www.kma.go.kr/DATA/OPENAPI/RDR/IMG/JNI/' + dateArray[i].substring(0, 6) + '/' + dateArray[i].substring(6, 8) + '/RDR_JNI_' + dateArray[i] + '.png" style="width: 450px; height:450px;">');
        $('#radar_cd_bl_craduation').append('<li data="'+i+'" class=\"pclass_dib\"></li>') ;
        if ( timeArray[i].substr(3,2)=='00' ) {
            cssValue['top'] = '6px' ;
            cssValue['height'] = '20px' ; 
            cssValue['background-color'] = '#777' ;
        }
        else {
            cssValue['top'] = '8px' ;
            cssValue['height'] = '16px' ;
            cssValue['background-color'] = '#BBB' ;
        }
        $('#radar_cd_bl_craduation li').eq(i).css(cssValue).css({'left': ((distanceValue*i)+12)+'px'}) ;
        rulerPoint[i] = (distanceValue*i)+12 ;
        if (timeArray[i].substr(3,2)=='00') {
            innerHtml = '<li data="'+i+'" class="pclass_dib' ;
            if ( i > 0 ) innerHtml+= ' pclass_mlp' ;
            innerHtml+= '">'+ timeArray[i]+'</li>' ;
            $('#ps_cd_time').append(innerHtml);
        }
    }
    $('#ps_cd_time li').eq(rulerPoint.length-1).css({'color': '#4966c7', 'font-weight': 'bold'});
    $('#radar_cd_bl_point').css('left', (rulerPoint[14]-9)+'px') ;


    var startNum = 0;
    $('#ps_btn_play').click(function () {
        for (var i = startNum; i < rulerPoint.length; i++) {
            $('#radar_cd_bl_point').animate({ left: rulerPoint[i] - 9 }, {
                duration: 1000,
                step: function (now, fx) {
                    $('#ps_btn_stop').click(function () {
                        $('#radar_cd_bl_point').css('left', rulerPoint[startNum] - 9 + 'px');
                        $('.radar_class_radar_img').css('display', 'none');
                        $('.radar_class_radar_img').eq(14 - startNum).css('display', 'block');
                        $('#radar_cd_bl_point').stop();
                    });
                },
                complete: function () {
                    $('.radar_class_radar_img').css('display', 'none');
                    $('.radar_class_radar_img').eq(14 - startNum).css('display', 'block');
                    startNum++;
                    if (rulerPoint.length == startNum) {
                        startNum = 0;
                        $('#ps_btn_play').click();
                    }
                }
            });
        }
    });

    $('#ps_cd_time li').click( function() {
        $('#ps_cd_time li').css({'color': '#666', 'font-weight': 'normal'}) ;
        $(this).css({'color': '#4966c7', 'font-weight': 'bold'})
        $('.radar_class_radar_img').css('display', 'none') ;
        $('.radar_class_radar_img').eq(14-$(this).attr('data')).css('display', 'block') ;
        $('#radar_cd_bl_point').css('left', rulerPoint[$(this).attr('data')]-9+'px') ;
    })

 
}

//수온읽기
function parseSeaTemp(xml){
    var items = null;
    try{
        items = xml.documentElement.firstChild.nextSibling.firstChild.children;   
    }catch(e){
        return 0;
    }

    if (items.length == 0)
        return 0;
    var item = items[0];


    var seaTemp = 0;
    try{
        seaTemp = item.getElementsByTagName('wtrTmp_1')[0].textContent;   
    }catch(e){
        seaTemp = 0;
    }
    
    return seaTemp;
}

//용존산소읽기
function parseSeaDox1(xml){
    var items = null;
    try{
        items = xml.documentElement.firstChild.nextSibling.firstChild.children;   
    }catch(e){
        return '';
    }

    if (items.length == 0)
        return '';
    var item = items[0];


    var dox = '';
    try{
        dox = item.getElementsByTagName('dox_1')[0].textContent;   
    }catch(e){
        dox = '';
    }
    
    return dox;
}



//수온읽기
function loadSeaTempo(pos, callback){
    var curDate = new Date();
    var edate = curDate.format('yyyyMMdd');
    curDate.setDate(curDate.getDate()-1);
    var sdate = curDate.format('yyyyMMdd');
    var position = abalone_position[pos];

    var xhr = new XMLHttpRequest();
    //http://apis.data.go.kr/1520635/OceanMensurationService/getOceanMesurationListrisa?serviceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D&numOfRows=999&pageSize=999&pageNo=1&startPage=1&GRU_NAM=002&
    var url = 'http://apis.data.go.kr/1520635/OceanMensurationService/getOceanMesurationListrisa'; /*URL*/
    var queryParams = '?' + ('ServiceKey=LrXygMrb2AUq%2Blt2uKLv9b7Ogi3Dajn4qf48rZSnu%2Bpf8%2Fkd9BxsAX5zUgSE041bDhjijxkQNx8N%2BI2Eu4pUbQ%3D%3D'); /*Service Key*/
    // var queryParams = '?' + ('ServiceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D'); /*Service Key*/
	//var queryParams = '?' + ('1uWqs5kcuEDYjb47xOYexEoWXKkLCmvjwdK1CibGjJzFWdjb9y%2BlNTq2RyU%2BgTGGz3s02Cy%2BWR3Fk59C0kE08Q%3D%3D'); /*Service Key*/

    //queryParams += '&' + ('GRU_NAM') + '=' + '002'; /*서해*/
	queryParams += '&' + ('GRU_NAM') + '=' + '003'; /*남해*/
    queryParams += '&' + ('SDATE') + '=' + (sdate); /*페이지 번호*/
    queryParams += '&' + ('EDATE') + '=' + (edate); /*해상위치(남해서부)*/
    queryParams += '&' + ('STA_CDE') + '=' + (position["코드"]); /*페이지 번호*/
    queryParams += '&' + ('numOfRows') + '=' + ('1'); /*최근 1 건*/
    queryParams += '&' + ('pageNo') + '=' + ('1'); /*페이지 번호*/

    var proxy = "/ocean/AjaxRequest.jsp?url=" + encodeURIComponent(url + queryParams);
    xhr.open('GET', proxy);
    // ppark
    // console.log('apiget');
    xhr.onreadystatechange = function () {
        // ppark
        // console.log('this.readyState', this.readyState)
        if (this.readyState == 4) {
            // ppark
            // console.log('ppark1', this.responseXML);
            if (this.responseXML != null){
                
                position.WTH = parseSeaTemp(this.responseXML);
                position.DOX = parseSeaDox1(this.responseXML);
                // ppark
                // console.log('position.WTH', position.WTH);
            } else {
                
                var text = this.responseText.trim();
                // ppark
                // console.log('text', text);
				var xmlDoc = null;
                try { // code for IE
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(text);
                } catch (error) { // code for Mozilla, Firefox, Opera, etc.
                    try {
                        var parser = new DOMParser();
                        xmlDoc = parser.parseFromString(text, "text/xml");
						
                    } catch (error) {
                        if (callback)
                            callback(error);
                        else
                            return;
                    }
                }
                position.WTH = parseSeaTemp(xmlDoc);
                position.DOX = parseSeaDox1(xmlDoc);
                console.log('null', position.WTH);
            }
            if (callback)
                callback(position.WTH == null ? null : pos);
            else
                return position.WTH;
        }
    }
    xhr.send('');
}


function getValueName(v){
    var values = ["적합", "보통", "주의", "위험"];

    if (v <= 5)
        return values[0];
    else if (6 <= v && v <= 10)
        return values[1];
    else if (11 < v && v < 15)
        return values[2]
    else
        return values[3];
}

function getValue(v){
    if (v <= 5)
        return 1;
    else if (6 <= v && v <= 10)
        return 2;
    else if (11 < v && v < 15)
        return 3
    else
        return 4;
}

function calcIndexes(pos, callback){
    var abalone = abalone_position[pos];

    var j1, j2, j3;
    var jp1, jp2, jp3;
    var h1, h2, h3;
    var hp1, hp2, hp3;

	//20170625 add
	var k1, k2, k3;
    var kp1, kp2, kp3;
	var m1, m2, m3;
    var mp1, mp2, mp3;

    var wav, r06, wsd, t1h;
    var p1, p2, p3, p4, p5;
    
    var values = ["-", "적합", "보통", "주의", "위험"];

    wth = parseFloat(abalone.WTH);	
    console.log('wth', wth);		//수온
    wav = parseFloat(abalone.forecast[0].WAV);
    // console.log('newmainjs_PCP_currWeather', abalone.forecast[0]);	//파고
    // r06 = parseFloat(abalone.forecast[0].PCP);	//강수량 (6시간)
    wsd = parseFloat(abalone.forecast[0].WSD);  //풍속
    console.log('WSD', wsd);	
    t1h = parseFloat(abalone.currWeather.T1H);	//한시간 기온
    console.log('t1h', t1h);	
	//20170625 Add 강수량이 6시간 간격이므로 값이 없으면 0으로 셋팅
	if(!r06) { r06=0; }

    ///현재 시간 전복지수 계산///////
	//전복 입식 수온
    if (12 < wth && wth <= 19) {
        p1 = 0;
    } else if ((7 < wth && wth <= 12) || (19 < wth && wth <= 22)) {
        p1 = 1;
    } else if ((5 < wth && wth <= 7) || (22 < wth && wth <= 24)) {
        p1 = 2;
    } else if ( (0 <= wth && wth <= 5) ||  wth > 24) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    //전복 입식  기온
    if (12 < t1h && t1h <= 15)
        p2 = 0;
    else if ((9 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
        p2 = 1;
    else if ((5 < t1h && t1h <= 9) || (20 < t1h && t1h <= 30))
        p2 = 2;
    else if ((4 < t1h && t1h <= 5) || (30 < t1h && t1h <= 32))
        p2 = 3;
    else
        p2 = 4;
    
	//강수량 지수
    if (r06 == 0)
        p3 = 0;
    else if (r06 <= 10)
        p3 = 1;
    else if ( r06 <= 30)
        p3 = 2;
    else if ( r06 <= 70)
        p3 = 3;
    else
        p3 = 4;

	//풍속 지수
    if (wsd == 0)
        p4 = 0;
    else if (wsd <= 2)
        p4 = 1;
    else if (wsd <= 5)
        p4 = 2;
    else if ( wsd <= 10)
        p4 = 3;
    else
        p4 = 4;

	//파고 지수
    if (wav == 0)
        p5 = 0
    else if (wav <= 0.5)
        p5 = 1;
    else if (wav <= 1.0)
        p5 = 2;
    else if ( wav <= 2.0)
        p5 = 3;
    else
        p5 = 4;

    var av = 0;
    jp1 = p1 + p2 + p3 + p4 + p5;


    if (p5 == 4 || p4 == 4 || p2 == 4)
        av = 16;
    else
        av = jp1; 

    jp1 = getValue(av);
    print('전복지수', jp1)
    j1 = getValueName(av);
	jpp1 = av;

	a1p1 = p1;
	a1p2 = p2;
	a1p3 = p3;
	a1p4 = p4;
	a1p5 = p5;
    

	//전복 양성/수확지수 수온
     if (10 < wth && wth <= 25) {
        p1 = 0;
    } else if ((8 < wth && wth <= 10) || (25 < wth && wth <= 27)) {
        p1 = 1;
    } else if ((5 < wth && wth <= 8) || (27 < wth && wth <= 29)) {
        p1 = 2;
    } else if ( 4 < wth && wth <= 5 || (29 < wth && wth <= 31)) {
        p1 = 3;
    } else {
        p1 = 4;
    }

	//전복 양성/수확 기온
    if (12 < t1h && t1h <= 15)
        p2 = 0;
    else if ((10 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
        p2 = 1;
    else if ((5 < t1h && t1h <= 10) || (20 < t1h && t1h <= 30))
        p2 = 2;
    else if ((t1h <= 5) || (30 < t1h && t1h <= 32))
        p2 = 3;
    else
        p2 = 4;

    jp2 = p1 + p2 + p3 + p4 + p5;

    if (p5 == 4 || p4 == 4 || p2 == 4)
        av = 16;
    else
        av = jp2; 

    jp2 = getValue(av);
    j2 = getValueName(av);
	jpp2 = av;

	a2p1 = p1;
	a2p2 = p2;

	//수확값은 양성값을 그대로 받아옴
    jp3 = jp2;
    j3 = j2;
	jpp3 = av;

	a3p1 = p1;
	a3p2 = p2;
    


    //현재 시간 미역 지수 계산
    //미역 입식
    if (0 <= wth && wth <= 20) {
        p1 = 0;
    } else if (20 < wth && wth <= 23) {
        p1 = 1;
    } else if (23 < wth && wth < 26) {
        p1 = 2;
    } else if (26 <= wth) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (12 < t1h && t1h <= 15)
        p2 = 0;
    else if ((10 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
        p2 = 1;
    else if ((5 < t1h && t1h <= 10) || (20 < t1h && t1h <= 30))
        p2 = 2;
    else if ((t1h <= 5) || (30 < t1h && t1h <= 32))
        p2 = 3;
    else
        p2 = 4;

    hp1 = p1 + p2 + p3 + p4 + p5;
    if (p4 == 4 || p5 == 4)
        av = 16;
    else
        av = hp1;

    hp1 = getValue(av);
    h1 = getValueName(av);
	hpp1=av

	b1p1 = p1;
	b1p2 = p2;

    //미역 양성
    if (11 < wth && wth <= 12) {
        p1 = 0;
    } else if (12 < wth && wth <= 15) {
        p1 = 1;
    } else if (15 < wth && wth <= 18) {
        p1 = 2;
    } else if (18 < wth) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (12 < t1h && t1h <= 15)
        p2 = 0;
    else if ((10 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
        p2 = 1;
    else if ((5 < t1h && t1h <= 10) || (20 < t1h && t1h <= 30))
        p2 = 2;
    else if ((t1h <= 5) || (30 < t1h && t1h <= 32))
        p2 = 3;
    else
        p2 = 4;

    hp2 = p1 + p2 + p3 + p4 + p5;
    if (p4 == 4 || p5 == 4)
        av = 16;
    else
        av = hp2; 
    
    hp2 = getValue(av);
    h2 = getValueName(av);
	hpp2=av;

	b2p1 = p1;
	b2p2 = p2;

    //미역 수확
    if(0<= wth <= 14){
        p1 = 0;
    }else if(14 < wth && wth <= 17){
        p1 = 1;
    }else if(17 < wth && wth <= 20){
        p1 = 2;
    }else if(20 < wth){
        p1 = 3;
    }else{
        p1 = 4;
    }
    
   if (12 < t1h && t1h <= 15)
        p2 = 0;
    else if ((15 < t1h && t1h <= 20))
        p2 = 1;
    else if ((9 < t1h && t1h <= 11) || (20 < t1h && t1h <= 30))
        p2 = 2;
    else if ((5 < t1h && t1h <= 9) || (30 < t1h && t1h <= 32))
        p2 = 3;
    else
        p2 = 4;

    hp3 = p1 + p2 + p3 + p4 + p5;

    if (p4 == 4 || p5 == 4)
        av = 16;
    else
        av = hp3; 

    hp3 = getValue(av);
    h3 = getValueName(av);
	hpp3 = av;

	b3p1 = p1;
	b3p2 = p2;



	//현재 시간 다시마 지수 계산 20170625 add
    //다시마 입식 수온
    //if (0 <= wth && wth <= 20) {
	if ( wth <= 22) {
        p1 = 0;
    } else if (23 <= wth && wth <= 24) {
        p1 = 1;
    } else if (25 <= wth && wth <= 26) {
        p1 = 2;
    } else if (27 <= wth && wth <= 28) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (10 <= t1h && t1h <= 17)
        p2 = 0;
    else if ((8 <= t1h && t1h <= 9) || (18 <= t1h && t1h <= 19))
        p2 = 1;
    else if ((6 <= t1h && t1h <= 7) || (20 <= t1h && t1h <= 21))
        p2 = 2;
    else if ((4 <= t1h && t1h <= 5) || (22 <= t1h && t1h <= 23))
        p2 = 3;
    else
        p2 = 4;

    kp1 = p1 + p2 + p3 + p4 + p5;

    if (p2 == 4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = kp1;

    kp1 = getValue(av);
    k1 = getValueName(av);
	kpp1= av;

	c1p1 = p1;
	c1p2 = p2;


    //다시마 양성
    if (wth <= 18) {
        p1 = 0;
    } else if (18 < wth && wth <= 20) {
        p1 = 1;
    } else if (20 < wth && wth <= 22) {
        p1 = 2;
    } else if (22 < wth && wth <= 24) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if ( t1h <= 17)
        p2 = 0;
    else if (17 < t1h && t1h <= 19)
        p2 = 1;
    else if (19 < t1h && t1h <= 21)
        p2 = 2;
    else if (21 < t1h && t1h <= 23)
        p2 = 3;
    else
        p2 = 4;

    kp2 = p1 + p2 + p3 + p4 + p5;
    if (p2 ==4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = kp2; 
    
    kp2 = getValue(av);
    k2 = getValueName(av);
	kpp2 = av;

	c2p1 = p1;
	c2p2 = p2;

    //다시마 수확
    if(wth < 23){
        p1 = 0;
    }else if(24 <= wth && wth <= 25){
        p1 = 1;
    }else if(26 <= wth && wth <= 27){
        p1 = 2;
    }else if(28 <= wth && wth <= 29){
        p1 = 3;
    }else{
        p1 = 4;
    }
    
	if (17 <= t1h && t1h <= 24)
        p2 = 0;
    else if ((15 <= t1h && t1h <= 16) || (25 <= t1h && t1h <= 26))
        p2 = 1;
    else if ((13 <= t1h && t1h <= 14) || (27 <= t1h && t1h <= 28))
        p2 = 2;
    else if ((11 <= t1h && t1h <= 12) || (29 <= t1h && t1h <= 30))
        p2 = 3;
    else
        p2 = 4;

    kp3 = p1 + p2 + p3 + p4 + p5;

    if (p2 == 4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = kp3; 

    kp3 = getValue(av);
    k3 = getValueName(av);
	kpp3 = av;

	c3p1 = p1;
	c3p2 = p2;


	//현재 시간 김 지수 계산 20170625 add ////////////////////////////
    //입식
    if (wth <= 23) {
        p1 = 0;
    } else if (24 <= wth && wth <= 25) {
        p1 = 1;
    } else if (26 <= wth && wth <= 27) {
        p1 = 2;
    } else if (28 <= wth && wth <= 29) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (20 <= t1h && t1h <= 24)
        p2 = 0;
    else if ((18 <= t1h && t1h <= 19) || (25 <= t1h && t1h <= 26))
        p2 = 1;
    else if ((16 <= t1h && t1h <= 17) || (27 <= t1h && t1h <= 28))
        p2 = 2;
	else if ((14 <= t1h && t1h <= 15) || (29 <= t1h && t1h <= 30))
        p2 = 3;
    else
        p2 = 4;

    mp1 = p1 + p2 + p3 + p4 + p5;

    if (p2==4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = mp1;

    mp1 = getValue(av);
    m1 = getValueName(av);
	mpp1= av;

	d1p1 = p1;
	d1p2 = p2;

    //김 양성
    if (wth <= 18) {
        p1 = 0;
    } else if (19 <= wth && wth <= 20) {
        p1 = 1;
    } else if (21 <= wth && wth <= 22) {
        p1 = 2;
    } else if (23 <= wth && wth <= 24) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (2 <= t1h && t1h <= 15)
        p2 = 0;
    else if ((t1h < 1) || (16 <= t1h && t1h <= 17))
        p2 = 1;
    else if ((t1h < 0) || (18 <= t1h && t1h <= 19))
        p2 = 2;
    else if ((t1h < -1) || (20 <= t1h && t1h <= 21))
        p2 = 3;
    else if ((t1h < -2) || (t1h <= 22))
        p2 = 4;
    else
        p2 = 4;

    mp2 = p1 + p2 + p3 + p4 + p5;
    if (p2 == 4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = mp2; 
    
    mp2 = getValue(av);
    m2 = getValueName(av);
	mpp2 = av;

	d2p1 = p1;
	d2p2 = p2;

    //수확
     if (wth <= 18) {
        p1 = 0;
    } else if (19 <= wth && wth <= 20) {
        p1 = 1;
    } else if (21 <= wth && wth <= 22) {
        p1 = 2;
    } else if (23 <= wth && wth <= 24) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (2 <= t1h && t1h <= 15)
        p2 = 0;
    else if ((t1h < 1) || (16 <= t1h && t1h <= 17))
        p2 = 1;
    else if ((t1h < 0) || (18 <= t1h && t1h <= 19))
        p2 = 2;
    else if ((t1h < -1) || (20 <= t1h && t1h <= 21))
        p2 = 3;
    else if ((t1h < -2) || (t1h <= 22))
        p2 = 4;
    else
        p2 = 4;

    mp3 = p1 + p2 + p3 + p4 + p5;

    if (p2 == 4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = mp3; 

    mp3 = getValue(av);
    m3 = getValueName(av);
	mpp3= av;

	d3p1 = p1;
	d3p2 = p2;


    abalone["지수"] = {};
    abalone["지수"]["전복"] = {};
    abalone["지수"]["전복"]["입식"] = j1;
    abalone["지수"]["전복"]["양성"] = j2;
    abalone["지수"]["전복"]["수확"] = j3;
    abalone["지수"]["전복"]["입식값"] = jp1;
    abalone["지수"]["전복"]["양성값"] = jp2;
    abalone["지수"]["전복"]["수확값"] = jp3;
	//20170625 Add ////////////////////////
	abalone["지수"]["전복"]["파고"] = wav;
	abalone["지수"]["전복"]["강수량"] = r06;
	abalone["지수"]["전복"]["풍속"] = wsd;
	abalone["지수"]["전복"]["기온"] = t1h;
	abalone["지수"]["전복"]["수온"] = wth;
	abalone["지수"]["전복"]["p1"] = p1; //수온
	abalone["지수"]["전복"]["p2"] = p2;	//기온
	abalone["지수"]["전복"]["p3"] = p3;	//강수량
	abalone["지수"]["전복"]["p4"] = p4;	//풍속
	abalone["지수"]["전복"]["p5"] = p5; //파고
	abalone["지수"]["전복"]["지수값1"] = jpp1; //입식값
	abalone["지수"]["전복"]["지수값2"] = jpp2; //양성값
	abalone["지수"]["전복"]["지수값3"] = jpp3; //수확값

	abalone["지수"]["전복"]["입식수온"] = a1p1; 
	abalone["지수"]["전복"]["입식기온"] = a1p2; 
	abalone["지수"]["전복"]["입식강수량"] = a1p3;
	abalone["지수"]["전복"]["입식풍속"] = a1p4;
	abalone["지수"]["전복"]["입식파고"] = a1p5;

	abalone["지수"]["전복"]["양성수온"] = a2p1; 
	abalone["지수"]["전복"]["양성기온"] = a2p2; 

	abalone["지수"]["전복"]["수확수온"] = a3p1; 
	abalone["지수"]["전복"]["수확기온"] = a3p2; 

	///////////////////////////////////////

    abalone["지수"]["해조류"] = {};
    abalone["지수"]["해조류"]["입식"] = h1;
    abalone["지수"]["해조류"]["양성"] = h2;
    abalone["지수"]["해조류"]["수확"] = h3;
    abalone["지수"]["해조류"]["입식값"] = hp1;
    abalone["지수"]["해조류"]["양성값"] = hp2;
    abalone["지수"]["해조류"]["수확값"] = hp3;
	abalone["지수"]["해조류"]["지수값1"] = hpp1;
	abalone["지수"]["해조류"]["지수값2"] = hpp2;
	abalone["지수"]["해조류"]["지수값3"] = hpp3;

	abalone["지수"]["해조류"]["입식수온"] = b1p1;
	abalone["지수"]["해조류"]["입식기온"] = b1p2;
	abalone["지수"]["해조류"]["양성수온"] = b2p1; 
	abalone["지수"]["해조류"]["양성기온"] = b2p2; 
	abalone["지수"]["해조류"]["수확수온"] = b3p1; 
	abalone["지수"]["해조류"]["수확기온"] = b3p2; 

	////////////////////////////////////////////////////////////
	abalone["지수"]["다시마"] = {};				//20170625 add
    abalone["지수"]["다시마"]["입식"] = k1;
    abalone["지수"]["다시마"]["양성"] = k2;
    abalone["지수"]["다시마"]["수확"] = k3;
    abalone["지수"]["다시마"]["입식값"] = kp1;
    abalone["지수"]["다시마"]["양성값"] = kp2;
    abalone["지수"]["다시마"]["수확값"] = kp3;
	abalone["지수"]["다시마"]["지수값1"] = kpp1;
	abalone["지수"]["다시마"]["지수값2"] = kpp2;
	abalone["지수"]["다시마"]["지수값3"] = kpp3;

	abalone["지수"]["다시마"]["입식수온"] = c1p1;
	abalone["지수"]["다시마"]["입식기온"] = c1p2;
	abalone["지수"]["다시마"]["양성수온"] = c2p1; 
	abalone["지수"]["다시마"]["양성기온"] = c2p2; 
	abalone["지수"]["다시마"]["수확수온"] = c3p1; 
	abalone["지수"]["다시마"]["수확기온"] = c3p2; 

	////////////////////////////////////////////////////////////
	abalone["지수"]["김"] = {};				//20170625 add
    abalone["지수"]["김"]["입식"] = m1;
    abalone["지수"]["김"]["양성"] = m2;
    abalone["지수"]["김"]["수확"] = m3;
    abalone["지수"]["김"]["입식값"] = mp1;
    abalone["지수"]["김"]["양성값"] = mp2;
    abalone["지수"]["김"]["수확값"] = mp3;
	abalone["지수"]["김"]["지수값1"] = mpp1;
	abalone["지수"]["김"]["지수값2"] = mpp2;
	abalone["지수"]["김"]["지수값3"] = mpp3;

	abalone["지수"]["김"]["입식수온"] = d1p1;
	abalone["지수"]["김"]["입식기온"] = d1p2;
	abalone["지수"]["김"]["양성수온"] = d2p1; 
	abalone["지수"]["김"]["양성기온"] = d2p2; 
	abalone["지수"]["김"]["수확수온"] = d3p1; 
	abalone["지수"]["김"]["수확기온"] = d3p2;

	var k;
    for (var i = 0; i < abalone.forecast.length; i++ ){

		var forecast = abalone.forecast[i];
        console.log('newmainjs_forecast', forecast);
        wav = parseFloat(forecast.WAV);
        //20170625 강수량은 6시간 예보이므로 중간에 빈 시간은 값이 없어 parseFloat 함수가 오류
		//r06 = parseFloat(forecast.WAV);  
 		r06 = forecast.R06; 	    
        wsd = parseFloat(forecast.WSD);
        //20220822 ppark수정 3시간 기온 없음
        t1h = parseFloat(forecast.TMP);
        console.log('TMP', t1h);
		pop = parseFloat(forecast.POP);

		//20170625 Add 강수량이 6시간 간격이므로 값이 없으면 앞시간 값 가져오기
		if(!r06)	
		{ 
				if (i==0) 
				{	
					r06=0;	
					//첫번째 예보시 강수량이 없으면 초단기 예보의 현재 강수량 값을 가져옴
					//가져올때 시간때별로 값이 없으면 에러남 추후 수정
					//var curWeather = abalone_position[pos].currWeather;
					//var rn1cur =parseFloat(curWeather.RN1);		
					//r06=rnlcur;
				
				}
				else	//두번째 이상부터 강수량이 없으면 앞시간대의 강수량 값을 가져옴
					{		
						k=i-1;
						r06=parseFloat(abalone.forecast[k].R06);					
										
					}
		}
		//////////////////////////////////////////////////////////////////////

        //전복지수 계산///////////////////////
		//입식/////////
		//수온
        if (12 < wth && wth <= 19) {
            p1 = 0;
        } else if ((7 < wth && wth <= 12) || (19 < wth && wth <= 22)) {
            p1 = 1;
        } else if ((5 < wth && wth <= 7) || (22 < wth && wth <= 24)) {
            p1 = 2;
        } else if ( (0 <= wth && wth <= 5) ||  wth > 24) {
            p1 = 3;
        } else {
            p1 = 4;
        }
		//기온
        if (12 < t1h && t1h <= 15)
            p2 = 0;
        else if ((9 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
            p2 = 1;
        else if ((5 < t1h && t1h <= 9) || (20 < t1h && t1h <= 30))
            p2 = 2;
        else if ((4 < t1h && t1h <= 5) || (30 < t1h && t1h <= 32))
            p2 = 3;
        else
            p2 = 4;
    
		//강수량
        if (r06 == 0)
            p3 = 0;
        else if (r06 <= 10)
            p3 = 1;
        else if ( r06 <= 30)
            p3 = 2;
        else if ( r06 <= 70)
            p3 = 3;
		//else if (!r06) //20170625 add 기상청 예상강수량은 12시간예보로 값이 없으면 0으로 셋팅
		//	p3=0;
        else
            p3 = 4;

		//풍속
        if (wsd == 0)
            p4 = 0;
        else if (wsd <= 2)
            p4 = 1;
        else if (wsd <= 5)
            p4 = 2;
        else if ( wsd <= 10)
            p4 = 3;
        else
            p4 = 4;
		
		//파고
        if (wav == 0)
            p5 = 0
        else if (wav <= 0.5)
            p5 = 1;
        else if (wav <= 1.0)
            p5 = 2;
        else if ( wav <= 2.0)
            p5 = 3;
        else
            p5 = 4;

        //var av = 0;

	    jp1 = p1 + p2 + p3 + p4 + p5;

		//파고, 풍속, 기온 중 하나라도 4점 이면
        if (p5 == 4 || p4 == 4 || p2 == 4)
            av = 16;	
        else
            av = jp1; 

        jp1 = getValue(av);
        j1 = getValueName(av);
		jpp1 = av;

		a1p1=p1;  //수온
		a1p2=p2;  //기온
		a1p3=p3;  //강수량
		a1p4=p4;  //풍속
		a1p5=p5;  //파고



		//양성////////
		//수온
        if (10 < wth && wth <= 25) {
            p1 = 0;
        } else if ((8 < wth && wth <= 10) || (25 < wth && wth <= 27)) {
            p1 = 1;
        } else if ((5 < wth && wth <= 8) || (27 < wth && wth <= 29)) {
            p1 = 2;
        } else if ( 4 < wth && wth <= 5 || (29 < wth && wth <= 31)) {
            p1 = 3;
        } else {
            p1 = 4;
        }

		//기온
        if (12 < t1h && t1h <= 15)
            p2 = 0;
        else if ((10 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
            p2 = 1;
        else if ((5 < t1h && t1h <= 10) || (20 < t1h && t1h <= 30))
            p2 = 2;
        else if ((t1h <= 5) || (30 < t1h && t1h <= 32))
            p2 = 3;
        else
            p2 = 4;

        jp2 = p1 + p2 + p3 + p4 + p5;

		//파고, 풍속, 기온 중 하나라도 4점 이면
        if (p5 == 4 || p4 == 4 || p2 == 4)
            av = 16;
        else
            av = jp2; 

        jp2 = getValue(av);
        j2 = getValueName(av);
		jpp2 = av;
		a2p1 = p1;
		a2p2 = p2;


		//수확
        jp3 = jp2;
        j3 = j2;
		jpp3 = av;

		a3p1=p1;
		a3p2=p2;

    

        //해조류지수 계산(미역)///////////////////////
        //입식///////////
		//수온
        if (0 <= wth && wth <= 20) {
            p1 = 0;
        } else if (20 < wth && wth <= 23) {
            p1 = 1;
        } else if (23 < wth && wth < 26) {
            p1 = 2;
        } else if (26 <= wth) {
            p1 = 3;
        } else {
            p1 = 4;
        }

		//기온
        if (12 < t1h && t1h <= 15)
            p2 = 0;
        else if ((10 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
            p2 = 1;
        else if ((5 < t1h && t1h <= 10) || (20 < t1h && t1h <= 30))
            p2 = 2;
        else if ((t1h <= 5) || (30 < t1h && t1h <= 32))
            p2 = 3;
        else
            p2 = 4;

        hp1 = p1 + p2 + p3 + p4 + p5;

		//풍속, 파고 중 하나라도 4점 이면
        if (p4 == 4 || p5 == 4)
            av = 16;
        else
            av = hp1;

        hp1 = getValue(av);
        h1 = getValueName(av);
		hpp1 = av;

		b1p1=p1;
		b1p2=p2;

        //양성///////////
        if (11 < wth && wth <= 12) {
            p1 = 0;
        } else if (12 < wth && wth <= 15) {
            p1 = 1;
        } else if (15 < wth && wth <= 18) {
            p1 = 2;
        } else if (18 < wth) {
            p1 = 3;
        } else {
            p1 = 4;
        }

        if (12 < t1h && t1h <= 15)
            p2 = 0;
        else if ((10 < t1h && t1h <= 12) || (15 < t1h && t1h <= 20))
            p2 = 1;
        else if ((5 < t1h && t1h <= 10) || (20 < t1h && t1h <= 30))
            p2 = 2;
        else if ((t1h <= 5) || (30 < t1h && t1h <= 32))
            p2 = 3;
        else
            p2 = 4;

        hp2 = p1 + p2 + p3 + p4 + p5;
        if (p4 == 4 || p5 == 4)
            av = 16;
        else
            av = hp2; 
		
        hp2 = getValue(av);
        h2 = getValueName(av);
		hpp2 = av;

		b2p1=p1;
		b2p2=p2;

        //수확///////////
        if(0<= wth <= 14){
            p1 = 0;
        }else if(14 < wth && wth <= 17){
            p1 = 1;
        }else if(17 < wth && wth <= 20){
            p1 = 2;
        }else if(20 < wth){
            p1 = 3;
        }else{
            p1 = 4;
        }
    
       if (12 < t1h && t1h <= 15)
            p2 = 0;
        else if ((15 < t1h && t1h <= 20))
            p2 = 1;
        else if ((9 < t1h && t1h <= 11) || (20 < t1h && t1h <= 30))
            p2 = 2;
        else if ((5 < t1h && t1h <= 9) || (30 < t1h && t1h <= 32))
            p2 = 3;
        else
            p2 = 4;

        hp3 = p1 + p2 + p3 + p4 + p5;

        if (p4 == 4 || p5 == 4)
            av = 16;
        else
            av = hp3; 

        hp3 = getValue(av);
        h3 = getValueName(av);
		hpp3 = av;

		b3p1=p1;
		b3p2=p2;


		//현재 시간 다시마 지수 계산 20170625 add
		//다시마 입식 수온
		//if (0 <= wth && wth <= 20) {
		if ( wth <= 22) {
			p1 = 0;
		} else if (23 <= wth && wth <= 24) {
			p1 = 1;
		} else if (25 <= wth && wth <= 26) {
			p1 = 2;
		} else if (27 <= wth && wth <= 28) {
			p1 = 3;
		} else {
			p1 = 4;
		}

		if (10 <= t1h && t1h <= 17)
			p2 = 0;
		else if ((8 <= t1h && t1h <= 9) || (18 <= t1h && t1h <= 19))
			p2 = 1;
		else if ((6 <= t1h && t1h <= 7) || (20 <= t1h && t1h <= 21))
			p2 = 2;
		else if ((4 <= t1h && t1h <= 5) || (22 <= t1h && t1h <= 23))
			p2 = 3;
		else
			p2 = 4;

		kp1 = p1 + p2 + p3 + p4 + p5;

		if (p2 == 4 || p4 == 4 || p5 == 4)
			av = 16;
		else
			av = kp1;

		kp1 = getValue(av);
		k1 = getValueName(av);
		kpp1= av;

		c1p1=p1;
		c1p2=p2;


		//다시마 양성
		if (wth <= 18) {
			p1 = 0;
		} else if (18 < wth && wth <= 20) {
			p1 = 1;
		} else if (20 < wth && wth <= 22) {
			p1 = 2;
		} else if (22 < wth && wth <= 24) {
			p1 = 3;
		} else {
			p1 = 4;
		}

		if ( t1h <= 17)
			p2 = 0;
		else if (17 < t1h && t1h <= 19)
			p2 = 1;
		else if (19 < t1h && t1h <= 21)
			p2 = 2;
		else if (21 < t1h && t1h <= 23)
			p2 = 3;
		else
			p2 = 4;

		kp2 = p1 + p2 + p3 + p4 + p5;
		if (p2 ==4 || p4 == 4 || p5 == 4)
			av = 16;
		else
			av = kp2; 
		
		kp2 = getValue(av);
		k2 = getValueName(av);
		kpp2= av;

		c2p1=p1;
		c2p2=p2;

		//다시마 수확
		if(wth < 23){
			p1 = 0;
		}else if(24 <= wth && wth <= 25){
			p1 = 1;
		}else if(26 <= wth && wth <= 27){
			p1 = 2;
		}else if(28 <= wth && wth <= 29){
			p1 = 3;
		}else{
			p1 = 4;
		}
		
		if (17 <= t1h && t1h <= 24)
			p2 = 0;
		else if ((15 <= t1h && t1h <= 16) || (25 <= t1h && t1h <= 26))
			p2 = 1;
		else if ((13 <= t1h && t1h <= 14) || (27 <= t1h && t1h <= 28))
			p2 = 2;
		else if ((11 <= t1h && t1h <= 12) || (29 <= t1h && t1h <= 30))
			p2 = 3;
		else
			p2 = 4;

		kp3 = p1 + p2 + p3 + p4 + p5;

		if (p2 == 4 || p4 == 4 || p5 == 4)
			av = 16;
		else
			av = kp3; 

		kp3 = getValue(av);
		k3 = getValueName(av);
		kpp3 = av;

		c3p1=p1;
		c3p2=p2;



    //김 지수 계산 20170625 add ////////////////////////////
    //입식
    if (wth <= 23) {
        p1 = 0;
    } else if (24 <= wth && wth <= 25) {
        p1 = 1;
    } else if (26 <= wth && wth <= 27) {
        p1 = 2;
    } else if (28 <= wth && wth <= 29) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (20 <= t1h && t1h <= 24)
        p2 = 0;
    else if ((18 <= t1h && t1h <= 19) || (25 <= t1h && t1h <= 26))
        p2 = 1;
    else if ((16 <= t1h && t1h <= 17) || (27 <= t1h && t1h <= 28))
        p2 = 2;
	else if ((14 <= t1h && t1h <= 15) || (29 <= t1h && t1h <= 30))
        p2 = 3;
    else
        p2 = 4;

    mp1 = p1 + p2 + p3 + p4 + p5;

    if (p2==4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = mp1;

    mp1 = getValue(av);
    m1 = getValueName(av);
	mpp1 = av;

	d1p1=p1;
	d1p2=p2;

    //김 양성
    if (wth <= 18) {
        p1 = 0;
    } else if (19 <= wth && wth <= 20) {
        p1 = 1;
    } else if (21 <= wth && wth <= 22) {
        p1 = 2;
    } else if (23 <= wth && wth <= 24) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (2 <= t1h && t1h <= 15)
        p2 = 0;
    else if ((t1h < 1) || (16 <= t1h && t1h <= 17))
        p2 = 1;
    else if ((t1h < 0) || (18 <= t1h && t1h <= 19))
        p2 = 2;
    else if ((t1h < -1) || (20 <= t1h && t1h <= 21))
        p2 = 3;
    else if ((t1h < -2) || (t1h <= 22))
        p2 = 4;
    else
        p2 = 4;

    mp2 = p1 + p2 + p3 + p4 + p5;
    if (p2 == 4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = mp2; 
    
    mp2 = getValue(av);
    m2 = getValueName(av);
	mpp2 = av;

	d2p1=p1;
	d2p2=p2;

    //수확
     if (wth <= 18) {
        p1 = 0;
    } else if (19 <= wth && wth <= 20) {
        p1 = 1;
    } else if (21 <= wth && wth <= 22) {
        p1 = 2;
    } else if (23 <= wth && wth <= 24) {
        p1 = 3;
    } else {
        p1 = 4;
    }

    if (2 <= t1h && t1h <= 15)
        p2 = 0;
    else if ((t1h < 1) || (16 <= t1h && t1h <= 17))
        p2 = 1;
    else if ((t1h < 0) || (18 <= t1h && t1h <= 19))
        p2 = 2;
    else if ((t1h < -1) || (20 <= t1h && t1h <= 21))
        p2 = 3;
    else if ((t1h < -2) || (t1h <= 22))
        p2 = 4;
    else
        p2 = 4;

    mp3 = p1 + p2 + p3 + p4 + p5;

    if (p2 == 4 || p4 == 4 || p5 == 4)
        av = 16;
    else
        av = mp3; 

    mp3 = getValue(av);
    m3 = getValueName(av);
	mpp3= av;

	d3p1=p1;
	d3p2=p2;

        forecast["지수"] = {};

        forecast["지수"]["전복"] = {};
        forecast["지수"]["전복"]["입식"] = j1;
        forecast["지수"]["전복"]["양성"] = j2;
        forecast["지수"]["전복"]["수확"] = j3;
        forecast["지수"]["전복"]["입식값"] = jp1;
        forecast["지수"]["전복"]["양성값"] = jp2;
        forecast["지수"]["전복"]["수확값"] = jp3;
		//20170625 add
		forecast["지수"]["전복"]["파고"] = wav;
		forecast["지수"]["전복"]["강수량"] = r06;
		forecast["지수"]["전복"]["풍속"] = wsd;
		forecast["지수"]["전복"]["기온"] = t1h;
		forecast["지수"]["전복"]["수온"] = wth;
		forecast["지수"]["전복"]["p1"] = p1;	//수온
		forecast["지수"]["전복"]["p2"] = p2;	//기온
		forecast["지수"]["전복"]["p3"] = p3;	//강수량
		forecast["지수"]["전복"]["p4"] = p4;	//풍속
		forecast["지수"]["전복"]["p5"] = p5;	//파고
		forecast["지수"]["전복"]["지수값1"] = jpp1;	//입식
		forecast["지수"]["전복"]["지수값2"] = jpp2;	//양성값
		forecast["지수"]["전복"]["지수값3"] = jpp3;	//수확값

		forecast["지수"]["전복"]["입식수온"] = a1p1;	//
		forecast["지수"]["전복"]["입식기온"] = a1p2;	//
		forecast["지수"]["전복"]["입식강수량"] = a1p3;	//
		forecast["지수"]["전복"]["입식풍속"] = a1p4;	//
		forecast["지수"]["전복"]["입식파고"] = a1p5;	//

		forecast["지수"]["전복"]["양성수온"] = a2p1;	//
		forecast["지수"]["전복"]["양성기온"] = a2p2;	//


		///////////////////////////////////////////////////
        forecast["지수"]["해조류"] = {};
        forecast["지수"]["해조류"]["입식"] = h1;
        forecast["지수"]["해조류"]["양성"] = h2;
        forecast["지수"]["해조류"]["수확"] = h3;
		forecast["지수"]["해조류"]["설명"] = h3;
        forecast["지수"]["해조류"]["입식값"] = hp1;
        forecast["지수"]["해조류"]["양성값"] = hp2;
        forecast["지수"]["해조류"]["수확값"] = hp3;
		forecast["지수"]["해조류"]["지수값1"] = hpp1;	//입식값
		forecast["지수"]["해조류"]["지수값2"] = hpp2;	//양성값
		forecast["지수"]["해조류"]["지수값3"] = hpp3;	//수확값

		forecast["지수"]["해조류"]["입식수온"] = b1p1;	
		forecast["지수"]["해조류"]["입식기온"] = b1p2;	//
		forecast["지수"]["해조류"]["양성수온"] = b2p1;	//
		forecast["지수"]["해조류"]["양성기온"] = b2p2;	//
		forecast["지수"]["해조류"]["수확수온"] = b3p1;	//
		forecast["지수"]["해조류"]["수확기온"] = b3p2;	//

		///////////////////////////////////////////////////////////////
		forecast["지수"]["다시마"] = {};				//20170625 add
		forecast["지수"]["다시마"]["입식"] = k1;
		forecast["지수"]["다시마"]["양성"] = k2;
		forecast["지수"]["다시마"]["수확"] = k3;
		forecast["지수"]["다시마"]["입식값"] = kp1;
		forecast["지수"]["다시마"]["양성값"] = kp2;
		forecast["지수"]["다시마"]["수확값"] = kp3;
		forecast["지수"]["다시마"]["지수값1"] =kpp1;  //입식지수
		forecast["지수"]["다시마"]["지수값2"] =kpp2;  //양성지수
		forecast["지수"]["다시마"]["지수값3"] =kpp3;  //수확지수

		forecast["지수"]["다시마"]["입식수온"] = c1p1;	//
		forecast["지수"]["다시마"]["입식기온"] = c1p2;	//
		forecast["지수"]["다시마"]["양성수온"] = c2p1;	//
		forecast["지수"]["다시마"]["양성기온"] = c2p2;	//
		forecast["지수"]["다시마"]["수확수온"] = c3p1;	//
		forecast["지수"]["다시마"]["수확기온"] = c3p2;	//



		//////////////////////////////////////////////////////////////
		forecast["지수"]["김"] = {};				//20170625 add
		forecast["지수"]["김"]["입식"] = m1;
		forecast["지수"]["김"]["양성"] = m2;
		forecast["지수"]["김"]["수확"] = m3;
		forecast["지수"]["김"]["입식값"] = mp1;
		forecast["지수"]["김"]["양성값"] = mp2;
		forecast["지수"]["김"]["수확값"] = mp3;
		forecast["지수"]["김"]["지수값1"] = mpp1;
		forecast["지수"]["김"]["지수값2"] = mpp2;
		forecast["지수"]["김"]["지수값3"] = mpp3;

		forecast["지수"]["김"]["입식수온"] = d1p1;	//
		forecast["지수"]["김"]["입식기온"] = d1p2;	//
		forecast["지수"]["김"]["양성수온"] = d2p1;	//
		forecast["지수"]["김"]["양성기온"] = d2p2;	//
		forecast["지수"]["김"]["수확수온"] = d3p1;	//
		forecast["지수"]["김"]["수확기온"] = d3p2;	//


    }

    if (callback)
        callback(pos);
}

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

$(document).ready(function () {
    $('.left_item').click(function () {
        var t = $(this).text();
        _loadPage(t);
    });

    $('.weatherClick').click(function () {
        _clearSelect(this);
        var t = $(this).text();

        $(this).addClass('weatherClicked');
        _openWeather(t);
    });

    $('.download_file').click(function () {
        var t = this.id;
        console.log('pds, 이게뭐냐?', t)
        if (t == null || typeof (t) == 'undefined' || t.length == 0) {
            alert('아직 제공되지 않는 데이터입니다.');
            return;
        }
        _fileDownload(t);
    });

    $('.top_menu_button').mouseover(function () {
        var t = $(this).attr('name');
        if (t == '소개')
            $(this).css('background-image', 'url("../images/intro_o.png")');
        else if (t == '현재날씨')
            $(this).css('background-image', 'url("../images/weather_o.png")');
        else if (t == '해상날씨')
            $(this).css('background-image', 'url("../images/seaWeather_o.png")');
        else if (t == '자료실')
            $(this).css('background-image', 'url("../images/pds_o.png")');
    });

    $('.top_menu_button').click(function () {
        var t = $(this).attr('name');
        var url = '';
        if (t == '소개')
            url = 'index_intro.html';
        else if (t == '현재날씨')
            url = 'index.html';
        else if (t == '해상날씨')
            url = 'forecast.html';
        else if (t == '자료실')
            url = 'pds.html';
        if (url != '')
            window.location = url;
    });

    $('.top_menu_button').mouseout(function () {
        var t = $(this).attr('name');
        if (t == '소개')
            $(this).css('background-image', 'url("../images/intro.png")');
        else if (t == '현재날씨')
            $(this).css('background-image', 'url("../images/weather.png")');
        else if (t == '해상날씨')
            $(this).css('background-image', 'url("../images/seaWeather.png")');
        else if (t == '자료실')
            $(this).css('background-image', 'url("../images/pds.png")');
    });

    $('.index_item').click(function () {
        if ($(this).hasClass('index_item_sel'))
            return;

        _clearSeaIndexButton(this);
        var t = $(this).text();
        $(this).addClass('index_item_sel');
        var div1 = document.getElementById('index_table');
        var chart1 = document.getElementById('chart_div');
        createChart(div1, chart1, '다시마', t.replace('지수', ''));
    });

    $('.index_item1').click(function () {
        if ($(this).hasClass('index_item_sel'))
            return;

        _clearIndexButton(this);
        var t = $(this).attr('name');
        $(this).addClass('index_item_sel');
        var div1 = document.getElementById('index_table');
        var chart1 = document.getElementById('chart_div');
        createChart(div1, chart1, '전복', t.replace('지수', ''));
    });


	//20170625 add
	/*
	$('.index_item2').click(function () {
        if ($(this).hasClass('index_item_sel'))
            return;

        _clearSeaIndexButton(this);
        var t = $(this).text();
        $(this).addClass('index_item_sel');
        var div1 = document.getElementById('index_table');
        var chart1 = document.getElementById('chart_div');
        createChart(div1, chart1, '해조류', t.replace('지수', ''));
    });
	*/
	$('.MOHIDpoint__').click(function () {
        if ($(this).hasClass('MOHIDpoint_sel__'))
            return;

        _clearWeatherButton(this);
        var t = $(this).attr('name');
        $(this).addClass('MOHIDpoint_sel__');
        check(t);
       
    });

    $('.weather_item').click(function () {
        if ($(this).hasClass('weather_item_sel'))
            return;

        _clearWeatherButton(this);
        var t = $(this).attr('name');
        $(this).addClass('weather_item_sel');
        check(t);
        _openAreaForecast(t);
        //var div1 = document.getElementById('index_table1');
        //var chart1 = document.getElementById('chart_div1');
        //createChart2(t, div1, chart1);
        var div1 = document.getElementById('index_table1');
        var div2 = document.getElementById('index_table2');
		//20170625 add
        var div3 = document.getElementById('index_table3');

        drawTable3(div1, t);
        drawTable4(div2, t);
		//20170625 add
		drawTable5(div3, t);
    });

    //$('.weather_item__').click(function () {
	$('.weather_item__').mouseover(function () {
        if ($(this).hasClass('weather_item_sel__'))
            return;

        _clearWeather__Button(this);
        var t = $(this).attr('name');
        $(this).addClass('weather_item_sel__');

        if (t == '중기예보')
            _openMidForecast();
        else
            _openAreaForecast(pos);
        //var div1 = document.getElementById('index_table1');
        //var chart1 = document.getElementById('chart_div1');
        //createChart2(t, div1, chart1);
        //var div1 = document.getElementById('index_table1');
        //var div2 = document.getElementById('index_table2');
        //drawTable3(div1,t);
        //drawTable4(div2,t);
    });

    //$('.weather_item2__').click(function () {
	  $('.weather_item2__').mouseover(function () {
        if ($(this).hasClass('weather_item2_sel__'))
            return;

        _clearWeather2__Button(this);
        var t = $(this).attr('name');
        $(this).addClass('weather_item2_sel__');

        _openSeaForecast(t);
        //var div1 = document.getElementById('index_table1');
        //var chart1 = document.getElementById('chart_div1');
        //createChart2(t, div1, chart1);
        //var div1 = document.getElementById('index_table1');
        //var div2 = document.getElementById('index_table2');
        //drawTable3(div1,t);
        //drawTable4(div2,t);
    });

    $('.index_prev').click(function () {
        createChart("", -10);
    });

    $('.index_next').click(function () {
        createChart("", 10);
    });


	//20170811 Add
	//$('.pointButton__').click(function () {
	$('.pointButton__').mouseover(function () {
        if ($(this).hasClass('pointButton_sel__'))
            return;

        _clearWeather3__Button(this);
        var t = $(this).attr('name');
        $(this).addClass('pointButton_sel__');

       
        //var div1 = document.getElementById('index_table1');
        //var chart1 = document.getElementById('chart_div1');
        //createChart2(t, div1, chart1);
        //var div1 = document.getElementById('index_table1');
        //var div2 = document.getElementById('index_table2');
        //drawTable3(div1,t);
        //drawTable4(div2,t);
    });

   
});

function _updateWSD()
{
	$(".WSD_POS").each(function(){
		var val = $(this).attr('alt') - 90;
		$(this).css('webkitTransform', 'rotate(' + val + 'deg)');
		$(this).css('msTransform', 'rotate(' + val + 'deg)');
		$(this).css('MozTransform', 'rotate(' + val + 'deg)');
		$(this).css('OTransform', 'rotate(' + val + 'deg)');
		$(this).css('transform', 'rotate(' + val + 'deg)');
	});
}

function viewWeather() {
    var curWeather = abalone_position[pos].currWeather;
    console.log('index.html_viewWeather_curWeather', currWeather);

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

//20170811 Add
function _clearWeather3__Button(obj){
    $('.pointButton__').each(function () {
        if (this != obj) {
            $(this).removeClass('pointButton_sel__');
        }
    });
}

function _clearWeather2__Button(obj){
    $('.weather_item2__').each(function () {
        if (this != obj) {
            $(this).removeClass('weather_item2_sel__');
        }
    });
}

function _clearWeather__Button(obj){
    $('.weather_item__').each(function () {
        if (this != obj) {
            $(this).removeClass('weather_item_sel__');
        }
    });
}


function _clearIndexButton(obj){
    $('.index_item1').each(function () {
        if (this != obj) {
            $(this).removeClass('index_item_sel');
        }
    });
}

function _clearSeaIndexButton(obj){
    $('.index_item').each(function () {
        if (this != obj) {
            $(this).removeClass('index_item_sel');
        }
    });
}


function _clearWeatherButton(obj){
    $('.weather_item').each(function () {
        if (this != obj) {
            $(this).removeClass('weather_item_sel');
        }
    });
}

function _clearSelect(obj){
    $('.weatherClick').each(function () {
        if (this != obj) {
            $(this).removeClass('weatherClicked');
        }
    });
}
function _loadPage(name){
    var url = '';
    switch(name){
        case '시스템소개':
            url = 'index_intro.html';
            break;
        case '전복 작업지수':
            url = 'index_view.html';
            break;
        case '날씨보기':
            url = 'weather.html';
            break;
        case '해상예보':
            url = 'sea_forecast.html';
            break;
        case '관측 · 통계정보':
            url = 'stat_pds.html';
            break;
        case '미역 작업지수':
            url = 'sea_index_view.html';
            break;
        case '해류정보':
            url = 'sea_current.html';
            break;
        case '염분정보':
            url = 'sea_salty.html';
            break;
        case '수온정보':
            url = 'sea_tempo.html';
            break;
        case '현재날씨':
            url = 'weather.html';
            break;
    }

    if(url.length > 0){
        window.location = url;
    }
}

function _openWeather(name){
    var url1 = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689025600'; //노화읍    
    var url2 = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689038000'; //보길면    
    var url = '';
    if (name == '노화도')
        url = url1;
    else if (name == '백도')
        url = url2;

    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style = 'width:870px;height:850px;margin-left:-160px;margin-top:-300px;';
    iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    $('#weather_content').html('');
    $('#weather_content').append(iframe);

    $('#weather_content ~ a').each(function () {
        $(this).attr('target', '_blank');
    })
}


//
function _loadSeaForecast(url, callback){


    var xhr = new XMLHttpRequest();
//	http://apis.data.go.kr/1520635/OceanMensurationService/getOceanMesurationListrisa?serviceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D&numOfRows=999&pageSize=999&pageNo=1&startPage=1&GRU_NAM=002&"
	//20170625 수정
   var url="http://apis.data.go.kr/1520635/OceanMensurationService/getOceanMesurationListrisa?serviceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D&numOfRows=999&pageSize=999&pageNo=1&startPage=1&GRU_NAM=002&";
   //var url="http://apis.data.go.kr/1520635/OceanMensurationService/getOceanMesurationListrisa?serviceKey=1uWqs5kcuEDYjb47xOYexEoWXKkLCmvjwdK1CibGjJzFWdjb9y%2BlNTq2RyU%2BgTGGz3s02Cy%2BWR3Fk59C0kE08Q%3D%3D&numOfRows=999&pageSize=999&pageNo=1&startPage=1&GRU_NAM=002&";
	

    var proxy = "/ocean/AjaxRequest.jsp?saved=n&url=" + encodeURIComponent(url);
    xhr.open('GET', proxy);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var aaa = 0;
        }
    }
    xhr.send('');
}


// # 해역별 예보 -> seainfo.html
function _openSeaForecast(pos){

    $('.weather_item2__').each(function () {
        var t = $(this).attr('name');
        
        if (t != pos) {
            $(this).removeClass('weather_item2_sel__');
        }else{
            $(this).addClass('weather_item2_sel__');
        }
    });

    var url = 'https://www.weather.go.kr/plus/sea/forecast/marine_daily.jsp?topArea=12B10000&x=12&y=8&midArea=12A30100&btmArea=22A30105'; //남해서부앞바다    
    
    if(pos == '전남남부서해앞'){
        url = 'https://www.weather.go.kr/plus/sea/forecast/marine_daily.jsp?topArea=12A30000&midArea=12A30100&btmArea=22A30105'; //전남남부서해앞바다
    }else if(pos == '전남동부남해앞'){
        url = 'https://www.weather.go.kr/plus/sea/forecast/marine_daily.jsp?topArea=12A30000&midArea=12A30100&btmArea=22A30105&x=19&y=9'; //전남동부남해앞바다
    }else if(pos == '전남서부남해앞'){
        url = 'https://www.weather.go.kr/plus/sea/forecast/marine_daily.jsp?topArea=12B10000&midArea=12B10100&btmArea=12B10101&x=19&y=7'; //전남서부남해앞바다
    }else if(pos == '남해서부앞바다'){
        url = 'https://www.weather.go.kr/plus/sea/forecast/marine_daily.jsp?topArea=12B10000&midArea=12B10100&btmArea=12B10100'; //남해서부앞바다    
    }

    //_loadSeaForecast(url, function (result) {

    //});

	
    var iframe = document.createElement("iframe");
    //iframe.src = "../AjaxRequest.jsp?saved=n&url=" + encodeURIComponent(url); //해상정보 프레임
	iframe.src = url; //해상정보 프레임
    //iframe.style = "width:860px; height:810px; margin-left:-565px; margin-top:-395px; display:none;";
	iframe.style = "width:860px; height:810px; margin-left:-565px; margin-top:-294px;";
    // iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    $('#sea_content').html('');
    $('#sea_content').append(iframe);

    //$($('iframe').get(0).contentDocument).ready(function () {
    //    $($('iframe').get(0).contentDocument.body).attr('font-family', '');
    //});
    setTimeout(function () {
        $($('iframe').get(0).contentDocument.body).attr('style', 'font-family:""');
        $($('iframe').get(0)).show();
    }, 500);
}

function _openSeaForecast3(pos){    
	var	currDate = new Date();

	var cYear = currDate.getFullYear();	//년
	var cMon = currDate.getMonth()+1;	//월
	var cDay = currDate.getDate();		//일

	if(cMon<10) { cMon ='0'+cMon 	}
	if(cDay<10) { cDay ='0'+cDay 	}
	var today = cYear + '' + cMon + '' + cDay; 

	 $('.MOHIDpoint__').each(function () {
        var t = $(this).attr('name');
        
        if (t != pos) {
            $(this).removeClass('MOHIDpoint_sel__');
        }else{
            $(this).addClass('MOHIDpoint_sel__');
        }
    });

    // ppark url 수정
	var url = './NCL/timeseries/temp_Nohwado.png'; //노화도
	var url2 = './NCL/timeseries/sal_Nohwado.png'; //노화도
    
    if(pos == '노화도'){
        url = './NCL/timeseries/temp_Nohwado.png';
		url2 = './NCL/timeseries/sal_Nohwado.png';
    }else if(pos == '백도'){
        url = './NCL/timeseries/temp_Baekdo.png';
		url2 = './NCL/timeseries/sal_Baekdo.png';
    }else if(pos == '청산도'){
        url = './NCL/timeseries/temp_Cheongsando.png';
		url2 = './NCL/timeseries/sal_Cheongsando.png';
    }else if(pos == '망남'){
        url = './NCL/timeseries/temp_Myangnam.png';
		url2 = './NCL/timeseries/sal_Myangnam.png';
    }else if(pos == '가교'){
        url = './NCL/timeseries/temp_Gagyo.png';
		url2 = './NCL/timeseries/sal_Gagyo.png';
    }else if(pos == '일정'){
        url = './NCL/timeseries/temp_Iljung.png';
		url2 = './NCL/timeseries/sal_Iljung.png';
	}else if(pos == '금일'){
        url = './NCL/timeseries/temp_Geumil.png';
		url2 = './NCL/timeseries/sal_Geumil.png';
	}else if(pos == '동백'){
        url = './NCL/timeseries/temp_Dongbaek.png';
		url2 = './NCL/timeseries/sal_Dongbaek.png';
	}else if(pos == '장도'){
        url = './NCL/timeseries/temp_Jangdo.png';
		url2 = './NCL/timeseries/sal_Jangdo.png';
	}else if(pos == '약산'){
        url = './NCL/timeseries/temp_Yaksan.png';
		url2 = './NCL/timeseries/sal_Yaksan.png';
	}else if(pos == '금당'){
        url = './NCL/timeseries/temp_Geumdang.png';
		url2 = './NCL/timeseries/sal_Geumdang.png';
	}else if(pos == '생일도'){
        url = './NCL/timeseries/temp_Saengildo.png';
		url2 = './NCL/timeseries/sal_Saengildo.png';
	}else if(pos == '덕도'){
        url = './NCL/timeseries/temp_Deokdo.png';
		url2 = './NCL/timeseries/sal_Deokdo.png';
	}else if(pos == '당목'){
        url = './NCL/timeseries/temp_Dangmok.png';
		url2 = './NCL/timeseries/sal_Dangmok.png';
	}else if(pos == '군외'){
        url = './NCL/timeseries/temp_Gunoe.png';
		url2 = './NCL/timeseries/sal_Gunoe.png';
	}else if(pos == '보길도'){
        url = './NCL/timeseries/temp_Bogildo.png';
		url2 = './NCL/timeseries/sal_Bogildo.png';
    }
	

	var img = document.createElement("img");
	var img2 = document.createElement("img");
	img.src=url;
	img2.src=url2;

	img.style="width:100%;";
	img2.style="width:100%;";

	$('#sea_content3').html('');
    $('#sea_content3').append(img);


	$('#sea_content4').html('');
    $('#sea_content4').append(img2);

	

	// setTimeout(function () {
      //  $($('iframe').get(0).contentDocument.body).attr('style', 'font-family:""');
        //$($('iframe').get(0)).show();
//    }, 500);

}


//기상청 특보에보 
function _openSeaForecast2(){

    var url = 'http://www.kma.go.kr/weather/warning/status.jsp'; //기상청 특보 예보
    	
    var iframe = document.createElement("iframe");
	iframe.src = url; //해상정보 프레임
	iframe.style = "width:860px; height:1070px; margin-left:-230px; margin-top:-294px;";
    iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    $('#sea_status').html('');
    $('#sea_status').append(iframe);

    setTimeout(function () {
        $($('iframe').get(0).contentDocument.body).attr('style', 'font-family:""');
        $($('iframe').get(0)).show();
    }, 500);
}


//동네예보 날씨 프레임
function _openAreaForecast(pos){
    var url = '';
    if (pos == '고금면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689033000'; //고금면
    } else if (pos == '군외면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689031000'; //군외면
    } else if (pos == '금당면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689037000'; //금당면
    } else if (pos == '금일읍') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689025300'; //금일읍
    } else if (pos == '노화읍') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689025600'; //노화읍
    } else if (pos == '보길면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689038000'; //보길면
    } else if (pos == '생일면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689039000'; //생일면
    } else if (pos == '소안면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689036000'; //소안면
    } else if (pos == '신지면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689032000'; //신지명
    } else if (pos == '약산면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689034000'; //약산면
    } else if (pos == '청산면') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689035000'; //청산면
    } else if (pos == '완도읍') {
        url = 'http://www.kma.go.kr/weather/forecast/timeseries.jsp?searchType=INTEREST&wideCode=4600000000&cityCode=4689000000&dongCode=4689025000'; //완도읍
    }

    var iframe = document.createElement("iframe");
    iframe.src = url;  //"../AjaxRequest.jsp?saved=n&url=" + encodeURIComponent(url);;
    iframe.style = 'border:0px solid red;width:870px;height:870px;margin-left:-170px;margin-top:-550px;';
    iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    $('#i_content').html('');
    $('#i_content').append(iframe);

}

function _openMidForecast(){
    var url = 'http://www.kma.go.kr/weather/forecast/mid-term_05.jsp';

    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style = 'width:870px;height:1030px;margin-left:-150px;margin-top:-590px;';
    iframe.scrolling = 'no';
    iframe.frameBorder = '0';
    $('#i_content').html('');
    $('#i_content').append(iframe);
}
function _fileDownload(fileName){

    var url = 'http://' + location.host + location.pathname.substring(0, location.pathname.lastIndexOf('/'))  + '/' + '../stat_datas/' + fileName;
    var a = document.createElement("a");
    a.href = 'http://view.officeapps.live.com/op/view.aspx?src=' + (url);

    //if(typeof(a.download) != 'undefined'){
    //    a.download = fileName;
    //}
    a.target = '_blank';
    a.id = 'download_a';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



var inforWindows = [];

function makeMarker(map, marker, value) {
    var infowindow = new daum.maps.InfoWindow({
        //content: "<div class='infoWindow'><div>조사지점: 완도 백도 </div>" +
        //            "<div>조사위치: 126.6269, 34.1636 </div>" +
        //            "<div>지수: 좋음 </div></div>"
        content: "<div class='infoWindow'>" + value + "</div>"
    });

    inforWindows.push(infowindow);
    daum.maps.event.addListener(marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        //infowindow.open(map, marker);
    });
    daum.maps.event.addListener(marker, 'mouseout', function() {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        //infowindow.close();
    });

    daum.maps.event.addListener(marker, 'click', function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        for (var i in inforWindows) {
            var iwin = inforWindows[i];
            if (infowindow != iwin)
                iwin.close();
        }
        infowindow.open(map, marker);
        check(value);

		//20170625 Add 다음지도에서 포인트를 클릭하면 지역별 작업지수 변경
		//check(value);
        var div1 = document.getElementById('index_table1');
        var div2 = document.getElementById('index_table2');
		var div3 = document.getElementById('index_table3');
		var div4 = document.getElementById('index_table4');
		var div5 = document.getElementById('index_table5');
		var div6 = document.getElementById('index_table6'); //현재 전복, 미역, 다시마, 김 작업지수
        drawTable3(div1, value);
        drawTable4(div2, value);
		drawTable5(div3, value);
		drawTable6(div4, value);
		drawTable7(div5, value);
		currdrawTable(div6, value);	//현재 전복, 미역, 다시마, 김 작업지수
        // _loadMap();
        //_openAreaForecast(value);    //기상청 동네예보 포인트별 불러오기

		$(document).ready(function()
		{
			//$('.pointButton__').addClass('pointButton__');
			$('.pointButton__').removeClass('pointButton_sel__');

			$('[name='+value+']').addClass('pointButton_sel__');

			//$('.pointButton__').addClass('pointButton_sel__');
			
		});

		

    });

    if(value == pos)
        infowindow.open(map, marker);
}

function makeMarker2(map, marker, value) {
    daum.maps.event.addListener(marker, 'click', function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        _openSeaForecast(value);
    });
}


function _loadMap3(){
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 1 //지도의 레벨(확대, 축소 정도)
    };
    
    map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    map.setMapTypeId(daum.maps.MapTypeId.HYBRID);
    $("#map>div:nth-child(2)").hide();

    var bounds = new daum.maps.LatLngBounds();

    var infor = [];

    var added = [];
    var seaValue = {
        '노화도': '34.2167,126.5556',
        '백도': '34.1616,126.6278',
        '청산도': '34.1833,126.8556',
        '망남' : '34.3000,126.7667',
		'가교' : '34.4333,126.8056',
		'일정' : '34.3667,126.9945',
		'금일' : '34.3778,127.0667',
		'동백' : '34.3278,127.0334',
		'장도' : '34.3556,126.7611',
		'약산' : '34.3667,126.8556',
		'금당' : '34.4111,127.0000',
		'생일도' : '34.3444,126.9834',
		'덕도' : '34.4222,126.9389',
		'당목' : '34.3500,126.9389',
		'군외' : '34.3444,126.6278',
		'보길도' : '34.1667,126.4945'
    };

	var seaValue2 = ["노화도","백도","청산도","망남","가교","일정","금일","동백","장도","약산","금당","생일도","덕도","당목","군외","보길도"];

    var cnt = 1;
	var cnt2=0;
    for (var i in seaValue ){
       
        var position = seaValue[i].split(',');
		var position2 = seaValue2[i];

        var latLng = new daum.maps.LatLng(parseFloat(position[0]), parseFloat(position[1]));

        bounds.extend(latLng);

        var content = '<div style="padding:1px 2px 1px 2px; background:white;border-radius:3px;"><li onclick="_openSeaForecast3(\''+i+'\');" style="cursor:pointer; font-size:11px; letter-spacing:-1px;">'  + seaValue2[cnt2]  + '</li></div>';
        var customOverlay = new daum.maps.CustomOverlay({
            position: latLng,
            content: content   
        });

        cnt++;
		cnt2++;
        customOverlay.setMap(map);

       // makeMarker2(map, customOverlay, i);
        
    }

    map.relayout();
    map.setBounds(bounds);
    var lv = map.getLevel();

}

function _loadMap2(){
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    map.setMapTypeId(daum.maps.MapTypeId.HYBRID);
    $("#map>div:nth-child(2)").hide();
    //완도 노화도 - 126.5549, 34.2193

    //완도 백도 - 126.6269, 34.1636
    var bounds = new daum.maps.LatLngBounds();
    //var latLng = new daum.maps.LatLng(34.2193, 126.5549);

    //bounds.extend(latLng);

    //var marker = new daum.maps.Marker({
    //    map: map, // 마커를 표시할 지도
    //    position: latLng
    //});

    //var date = new Date();
    //var dateString = date.toISOString().slice(0,10);

    //var indexes = ["전복지수", "입식지수", "양성지수", "수확지수"];

    //var json1 = makeJSON("전복지수",dateString, 1);
    //var json2 = makeJSON("입식지수",dateString, 1);
    //var json3 = makeJSON("양생지수",dateString, 1);
    //var json4 = makeJSON("수확지수",dateString, 1);

    //var targetPoint = json1["대상지점"];
    //var targetPosition = json1["대상위치"];

    var infor = [];

    var added = [];
    var seaValue = {
        '전남남부서해앞': '34.3407425,126.2626093',
        '전남서부남해앞': '34.3280316,126.7404626',
        '전남동부남해앞': '34.4718841,127.0679939',
        '남해서부앞바다': '34.0847095,126.7105855'
    };

    var cnt = 1;
    for (var i in seaValue ){
       

        //var nm = abalone_position[i]['관측소명'];
        //var found = false;
        //for (var j = 0; j < added.length; j++ ){
        //    if(added[j] == nm){
        //        found = true;
        //        break;
        //    }
        //}
        //if (found)
        //    continue;

        //added.push(nm);

        var position = seaValue[i].split(',');

        var latLng = new daum.maps.LatLng(parseFloat(position[0]), parseFloat(position[1]));

        bounds.extend(latLng);

        var content = '<div style="margin-left:-79px;margin-top:-15px;"><img onclick="_openSeaForecast(\''+i+'\');" style="cursor:pointer;" src="/ocean/images/sea' + cnt + '.png" alt="'+cnt+'"></div>';//'<div class ="infoWindow" onclick="_openSeaForecast(\''+i+'\');">'+ i + '</div>';
        var customOverlay = new daum.maps.CustomOverlay({
            position: latLng,
            content: content   
        });

        cnt++;
        customOverlay.setMap(map);

        makeMarker2(map, customOverlay, i);
        //var marker = new daum.maps.Marker({
        //    map: map, // 마커를 표시할 지도
        //    position: latLng
        //});

        //makeMarker2(map, marker, i);
        //infowindow.open(map, marker);
    }

    map.relayout();
    map.setBounds(bounds);
    var lv = map.getLevel();
    //map.setLevel(lv + 1, {animate: true});
}
function _loadMap() {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    console.log('daum1');
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    console.log('daum2');
    //var h = $(window).height();
    //var w = $(window).width();

    ////container.style = 'width:' + (w - 15) + 'px;height:' + (h - 120) + 'px';
    //$(window).resize(function () {
    //    var h = $(window).height();
    //    var w = $(window).width();
    //    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    //    //container.style = 'width:' + (w - 15)+ 'px;height:' + (h - 70) + 'px';
    //    map.relayout();
    //});
    map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    map.setMapTypeId(daum.maps.MapTypeId.HYBRID);
    $("#map>div:nth-child(2)").hide();
    //완도 노화도 - 126.5549, 34.2193

    //완도 백도 - 126.6269, 34.1636
    var bounds = new daum.maps.LatLngBounds();
    //var latLng = new daum.maps.LatLng(34.2193, 126.5549);

    //bounds.extend(latLng);

    //var marker = new daum.maps.Marker({
    //    map: map, // 마커를 표시할 지도
    //    position: latLng
    //});

    //var date = new Date();
    //var dateString = date.toISOString().slice(0,10);

    //var indexes = ["전복지수", "입식지수", "양성지수", "수확지수"];

    //var json1 = makeJSON("전복지수",dateString, 1);
    //var json2 = makeJSON("입식지수",dateString, 1);
    //var json3 = makeJSON("양생지수",dateString, 1);
    //var json4 = makeJSON("수확지수",dateString, 1);

    //var targetPoint = json1["대상지점"];
    //var targetPosition = json1["대상위치"];

    var infor = [];

    var added = [];

    for (var i in abalone_position ){
        var html = "<div class='infoWindow'><div style='font-size:13px;'>조사지점: <b>" + abalone_position[i]['관측소명'] + "</b></div>";
        html += "<div style='font-size:9px;'>조사위치: " + abalone_position[i]['좌표'] + "</div>";
        html += "<div style='font-size:12px;'>전복작업 입식지수: " + abalone_position[i]["지수"]["전복"]["입식"]+ "</div>";
        html += "<div style='font-size:12px;'>전복작업 양성/수확지수: " + abalone_position[i]["지수"]["전복"]["양성"]+ "</div>";
        html += "<div style='font-size:12px;'>미역작업 입식지수: " + abalone_position[i]["지수"]["해조류"]["입식"]+ "</div>";
        html += "<div style='font-size:12px;'>미역작업 양성지수: " + abalone_position[i]["지수"]["해조류"]["양성"]+ "</div>";
        html += "<div style='font-size:12px;'>미역작업 수확지수: " + abalone_position[i]["지수"]["해조류"]["수확"]+ "</div>";
        html += "<div style='font-size:12px;'>수온: " + abalone_position[i].WTH + "℃</div>";
        html += "<div style='font-size:12px;'>표층용존산소: " + abalone_position[i].DOX + "mg/L</div>";
        infor[i] = html;

        //var nm = abalone_position[i]['관측소명'];
        //var found = false;
        //for (var j = 0; j < added.length; j++ ){
        //    if(added[j] == nm){
        //        found = true;
        //        break;
        //    }
        //}
        //if (found)
        //    continue;

        //added.push(nm);

        var position = abalone_position[i]['LATLNG'].split(',');

        var latLng = new daum.maps.LatLng(parseFloat(position[0]), parseFloat(position[1]));

        bounds.extend(latLng);

        var infowindow = new daum.maps.InfoWindow({
            //content: "<div class='infoWindow'><div>조사지점: 완도 백도 </div>" +
            //            "<div>조사위치: 126.6269, 34.1636 </div>" +
            //            "<div>지수: 좋음 </div></div>"
            content: infor[i]
        });

        var marker = new daum.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: latLng
        });

        makeMarker(map, marker, i);
        //infowindow.open(map, marker);
    }

    //var infowindow = new daum.maps.InfoWindow({
    //    //content: "<div class='infoWindow'><div>조사지점: 완도 노화도 </div>" +
    //    //        "<div>조사위치: 126.5549, 34.2193 </div>" +
    //    //        "<div>지수: 좋음 </div></div>"
    //    content: infor[0]
    //});
    //infowindow.open(map, marker);

    //latLng = new daum.maps.LatLng(34.1636, 126.6269);

    //bounds.extend(latLng);

    //marker = new daum.maps.Marker({
    //    map: map, // 마커를 표시할 지도
    //    position: latLng
    //});

    //infowindow = new daum.maps.InfoWindow({
    //    //content: "<div class='infoWindow'><div>조사지점: 완도 백도 </div>" +
    //    //            "<div>조사위치: 126.6269, 34.1636 </div>" +
    //    //            "<div>지수: 좋음 </div></div>"
    //    content: infor[1]
    //});
    //infowindow.open(map, marker);

    map.relayout();
    map.setBounds(bounds);
    var lv = map.getLevel();
    map.setLevel(lv, {animate: true});
}