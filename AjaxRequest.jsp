<%@ page language="java" import="java.io.*,java.net.*" 	contentType="text/xml; charset=utf-8"  pageEncoding="utf-8"%>
<%


    String saved = request.getParameter("saved");
    String buffer = "";
	String encode = request.getParameter("encode");
	if(encode == null)
		encode = "euc-kr";

	
    if(saved != null && saved.equals("n")){
        String str = request.getParameter("url");
        str = URLDecoder.decode(str, "UTF-8");
        System.out.println(str);

        URL url = new URL(request.getParameter("url"));
        URLConnection connection = url.openConnection();
        connection.setRequestProperty("CONTENT-TYPE","text/html"); 
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream(),encode));
        String inputLine;
        buffer = "";
        int writeLine = 0;
        while ((inputLine = in.readLine()) != null){
            inputLine = inputLine.trim();
            if(inputLine.length() == 0)
	            continue;
			
            writeLine++;
            buffer += inputLine.trim();
        }
        buffer = buffer.replaceAll("src=\"/", "src=\"http://www.kma.go.kr/");
        buffer = buffer.replaceAll("href=\"/", "href=\"http://www.kma.go.kr/");
        System.out.println("buffer : " + buffer);
        in.close();
    } else {
	    String str = request.getParameter("url");

        str = str.substring(str.lastIndexOf("/")+1).replace("\\?", "_");
		//20170829 Add 파일생성시 파일명이 길어 서비스키를 버림
		str = str.replace("ServiceKey=POjNMXE9MZRqbdx%2BQRgwsuuDmuNaF0yeEh8notuOkYME07kxwx%2FR%2FBFqRuHVq63CAuAbkAwHWhffF0PsZGVOYg%3D%3D&", "");
	
	    str = URLEncoder.encode(str); 
        //String path = application.getRealPath("./cache") + "\" + str;
		String path = application.getRealPath("./cache") + "\\" + str;

        File f = new File(path);
	
        if(f.isFile() == false){
            FileWriter fw = new FileWriter(path, true);
	        BufferedWriter bw = new BufferedWriter(fw);

	        URL url = new URL(request.getParameter("url"));
	        URLConnection connection = url.openConnection();
	        connection.setRequestProperty("CONTENT-TYPE","text/html"); 
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream(),"utf-8"));
			
            String inputLine;
            buffer = "";
		    int writeLine = 0;
            while ((inputLine = in.readLine()) != null){
			    inputLine = inputLine.trim();
			    if(inputLine.length() == 0)
				    continue;
			
			    writeLine++;
                bw.write(inputLine);
     	        //buffer += inputLine.trim();
            }
            System.out.println("buffer : " + buffer);
            in.close();
		    bw.flush();
		    bw.close();
		    fw.close();
        }
    
        BufferedReader in = new BufferedReader(new FileReader(path));
        String inputLine;
    
        while ((inputLine = in.readLine()) != null){
            buffer += inputLine.trim();
        }

        System.out.println("buffer : " + buffer);
	
        in.close();    
	
        buffer = buffer.trim();
	    if(buffer.length() == 0){
		    File f2 = new File(path);
		    f2.delete();
	    }
    }
%><%=buffer%>
