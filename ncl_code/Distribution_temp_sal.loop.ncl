;******************************************************
; FIle name = "temp_loop.ncl"
; Distribution of Surface temperature & Salinity in Wando Sea
; Made by Kim.Young.Min of Chonnam National Universtiy
; Date by 2017.09.03
;******************************************************

load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/gsn_code.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/gsn_csm.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/contributed.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/shea_util.ncl"
setvalues NhlGetWorkspaceObjectId()
    "wsMaximumSize" : 100000000
end setvalues
begin

  minlon = 126.0222
  maxlon = 127.7278
  minlat = 33.8611
  maxlat = 34.6389
;******************************************************
; Read data
;******************************************************
   today = systemfunc("date -d 'yesterday' +%Y%m%d00")
   f_in = addfile("/home/wando/mod/WANDO_HYDR_"+today+".nc","r")
   printVarSummary( f_in )
;******************************************************
; Read Time
;******************************************************
   time0 = f_in->time(0:29)
   time0@units = "seconds since 2005-01-01 00:00:00"
;******************************************************
; Change UST -> KST
;******************************************************
   dt=dimsizes(time0)
   time = new((/dt/),"double")
   time@units = "seconds since 2005-01-01 00:00:00"
   time(:)= time0 + 32400
;******************************************************
   date = ut_calendar(time, 0)
   yyyy = tointeger(date(:,0))
   mm   = tointeger(date(:,1))
   dd   = tointeger(date(:,2))
   hh   = tointeger(date(:,3))
   date_str = sprinti("%0.4i-", yyyy) + sprinti("%0.2i-", mm) + \
              sprinti("%0.2i ", dd) + sprinti("%0.2i:00", hh) 
   print(date_str)
;******************************************************
; Read Temperature
;******************************************************
   temp = f_in->temperature
   temp@units = "degC"
   temp@_FillValue = -9.899999e+15
   printVarSummary( temp )
;******************************************************
; Read Salinity
;******************************************************
   sal = f_in->salinity
   sal@units = "PSU"
   sal@_FillValue = -9.899999e+15
   printVarSummary( sal )

   ndim = dimsizes( temp )
   print( ndim )
   dt = ndim(0)
   dy = ndim(1)
   dx = ndim(2)

   do ii = 0,dt-1
   date_1  = sprinti("%0.4i", yyyy) + sprinti("%0.2i", mm) + \
           sprinti("%0.2i", dd) + sprinti("%0.2i", hh)
 
;******************************************************
; Temperature
;******************************************************
   res = True
   dir="/home/pumba/study/Answer/test"
   wks = gsn_open_wks("png", "/usr/local/server/tomcat/webapps/ROOT/ocean/NCL/output/Wando_temp_"+ date_1(ii)+"")
   gsn_define_colormap ( wks, "MPL_gist_rainbow")
   gsn_reverse_colormap(wks)

   plot = new(1, graphic)

   res = True
   res@gsnFrame = False
   res@gsnDraw = False
   res@gsnAddCyclic = False

   res@cnLevelSelectionMode     = "ManualLevels"
   res@cnFillOn  = True
   res@cnLinesOn = True 
   res@cnLineLabelsOn = True
   res@cnLineLabelBackgroundColor = "white"
   res@cnInfoLabelOn = False
   res@cnMinLevelValF           =  0.0
   res@cnMaxLevelValF           =  32.0
   res@cnLevelSpacingF          =  0.2
   res@lbLabelStride            =  5
   res@cnLineLabelInterval      = 1
   res@cnLineLabelDensityF      = 2

   res@mpDataBaseVersion        = "HighRes"
   res@mpFillOn                 = True 
   res@mpOutlineOn              = True 
   res@mpMinLatF                = minlat
   res@mpMaxLatF                = maxlat
   res@mpMinLonF                = minlon
   res@mpMaxLonF                = maxlon

   res@mpFillDrawOrder          = "PostDraw"

   res@lbBoxLinesOn             = False
   res@lbLabelBarOn             = True
   res@lbOrientation            = "Vertical" 
   res@pmLabelBarOrthogonalPosF  = 0.0005    ;move label bar left/right  

   res@tmXTOn = False
   res@tmYROn = False


   res@tiMainString  = ""
   res@tiMainOffsetYF = 0.025
   res@tiMainFontHeightF = 0.026

   res@gsnRightString = ""+date_str(ii)+""
   res@gsnCenterString = ""
   res@gsnLeftString = "SeaWater Temperature(~S~o~N~C) [Depth : Surface]"
   res@gsnStringFontHeightF = 0.015
   res@gsnMinorLatSpacing =1
   res@gsnMinorLonSpacing =1

   plot(0) = gsn_csm_contour_map(wks,temp(ii,10,:,:),res)

   resP=True
   resP@gsnPanelYWhiteSpacePercent = 3
   resP@gsnPanelXWhiteSpacePercent = 5

   gsn_panel( wks, plot, (/1,1/),resP )
;******************************************************
; Salinity
;******************************************************
   res2 = True
   wks2 = gsn_open_wks("png", "/usr/local/server/tomcat/webapps/ROOT/ocean/NCL/output//Wando_sal_"+ date_1(ii)+"")
   gsn_define_colormap ( wks2, "MPL_gist_rainbow")
   gsn_reverse_colormap(wks2)
   plot = new(1, graphic)

   res2 = True
   res2@gsnFrame = False
   res2@gsnDraw = False
   res2@gsnAddCyclic = False

   res2@cnLevelSelectionMode     = "ManualLevels"
   res2@cnFillOn  = True
   res2@cnLinesOn = True 
   res2@cnLineLabelsOn = True
   res2@cnLineLabelBackgroundColor = "white"
   res2@cnInfoLabelOn = False
   res2@cnMinLevelValF           =  25.0
   res2@cnMaxLevelValF           =  35.0
   res2@cnLevelSpacingF          =  0.1
   res2@lbLabelStride            =  5
   res2@cnLineLabelInterval      =  1
   res2@cnLineLabelDensityF      =  2


   res2@mpDataBaseVersion        = "HighRes"
   res2@mpFillOn                 = True 
   res2@mpOutlineOn              = True 
   res2@mpMinLatF                = minlat
   res2@mpMaxLatF                = maxlat
   res2@mpMinLonF                = minlon
   res2@mpMaxLonF                = maxlon

   res2@mpFillDrawOrder          = "PostDraw"

   res2@lbBoxLinesOn             = False
   res2@lbLabelBarOn             = True
   res2@lbOrientation            = "Vertical"        
   res@pmLabelBarOrthogonalPosF  = 0.0005  ;move label bar left/right 

   res2@tmXTOn = False
   res2@tmYROn = False


   res2@tiMainString  = ""
   res2@tiMainOffsetYF = 0.025
   res2@tiMainFontHeightF = 0.026

   res2@gsnRightString = ""+date_str(ii)+""
   res2@gsnCenterString = ""
   res2@gsnLeftString = "Salinity(PSU) [Depth : Surface]"
   res2@gsnStringFontHeightF = 0.015
   res2@gsnMinorLatSpacing =1
   res2@gsnMinorLonSpacing =1

   plot(0) = gsn_csm_contour_map(wks2,sal(ii,10,:,:),res2)

   res2P=True
   res2P@gsnPanelYWhiteSpacePercent = 3
   res2P@gsnPanelXWhiteSpacePercent = 5
 
   gsn_panel( wks2, plot, (/1,1/),res2P )

   

cmd1 = "convert -trim /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/output/Wando_temp_"+date_1(ii)+".png /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/output/Wando_temp_"+date_1(ii)+".png"
cmd2 = "convert -trim /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/output/Wando_sal_"+date_1(ii)+".png /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/output/Wando_sal_"+date_1(ii)+".png"
system(cmd1)
system(cmd2)

end do ;;; end dt
end 
