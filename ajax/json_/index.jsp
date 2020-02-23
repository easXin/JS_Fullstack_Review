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
	var jsonObject = 
	{
			"name":"atguigu",
			"age":12,
			"address":
			{
				"city":"BeiJing",
				"school":"尚硅谷"
			},
			"teaching":function()
			{
				alert("JavaEE, Android...");
			}
			
	};
	//alert(jsonObject.name);
	// 阶层格式
	//alert(jsonObject.address.city);
	//jsonObject.teaching();
	
	var jsonStr = "{'name':'atguigu'}";
	
	// 把字符串转成 字符对象
	// 使用eval（） 方法
	var testStr = "alert('hello eval')";
	//alert(testStr)
	
	// eval 把一个字符串转为本地代码来执行！！
	eval(testStr);
	
	// 用这个格式把JSON 字符串 转为 JSON 对象来执行
	var testObject = eval("("+ jsonStr+")");
	alert(testObject.name);
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