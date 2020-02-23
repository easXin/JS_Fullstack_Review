<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>People at Clearleft</title>
<style type="text/css">
	@import url("clearleft.css");
</style>
<script type="text/javascript">
	window.onload = function()
	{
		var aNodes = document.getElementsByTagName("a");
	
		for(var i=0; i<aNodes.length; i++)
		{
			aNodes[i].onclick=function()
			{
				var request = new XMLHttpRequest();
				var method = "GET";
				var url = this.href;
	
				request.open(method,url);
				request.send(null);
				
				request.onreadystatechange=function()
				{
					if(request.readyState==4)
					{

						if(request.status==200 || request.status ==304 )
						{
							// HTML data format doesn't work effectively, if we have to update 
							// multiple areas in the html file 
							document.getElementById("divResult").innerHTML = request.responseText;
						}
					}
				}
				return false;
			}
		
		}
	
	}
</script>
</head>
<body>
	<h1>People</h1>
	<ul>
		<li><a href="files/andy.html">Andy</a></li>
		<li><a href="files/richard.html">Richard</a></li>
		<li><a href="files/jeremy.html">Jeremy</a></li>
	</ul>
	<div id="divResult"></div>
</body>
</html>