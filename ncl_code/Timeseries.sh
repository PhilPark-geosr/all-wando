#SHELL=/bin/bash
NCARG_ROOT=/usr/local/server/tomcat/webapps/ROOT/ocean/NCL
PATH=#NCARG_ROOT/bin:$PATH
export NCARG_ROOT
export PATH
/usr/local/server/tomcat/webapps/ROOT/ocean/NCL/bin/ncl /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/code/Timeseries.ncl >& /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/code/log.ncl_run &
/usr/local/server/tomcat/webapps/ROOT/ocean/NCL/bin/ncl /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/code/Distribution_temp_sal.loop.ncl >& /usr/local/server/tomcat/webapps/ROOT/ocean/NCL/code/log.ncl_run2 &
