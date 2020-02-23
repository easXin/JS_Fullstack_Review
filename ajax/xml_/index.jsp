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
							//1. 结果为xml格式，必须使用responseXML 来获取
							var result = request.responseXML;
							//2. 结果不能直接使用，必须先创建对应的节点，再把节点
							//   加入到#details 中
							// 目标格式：
							/* <h2>
								   <a href="mailto:richard@clearleft.com">
									  Richard Budd </a>
							   </h2>
								   <a href="http://richardbudd.com/">
								   	 http://richardbudd.com/ </a>
							*/
							var name = result.getElementsByTagName("name")[0].firstChild.nodeValue;
							var website = result.getElementsByTagName("website")[0].firstChild.nodeValue;
							var email = result.getElementsByTagName("email")[0].firstChild.nodeValue;
							
							var aNode = document.createElement("a");
							// 创建文本域
							aNode.appendChild(document.createTextNode(name));
							// 添加属性
							aNode.href = "mailto:"+email;
							
							var h2Node = document.createElement("h2");
							h2Node.appendChild(aNode);
							
							var aNode2 = document.createElement("a");
							aNode2.appendChild(document.createTextNode(website));
							aNode2.href = website;
							
							var detailNode = document.getElementById("details");
							detailNode.innerHTML = "";
							detailNode.appendChild(h2Node);
							detailNode.appendChild(aNode2);
							// 文档解析有点复杂， 如果xml太长的话
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
		<li><a href="files/andy.xml">Andy</a></li>
		<li><a href="files/richard.xml">Richard</a></li>
		<li><a href="files/jeremy.xml">Jeremy</a></li>
	</ul>
	<div id="details"></div>
</body>
</html>