<?php
	$name = $_POST["name"];
	$password = $_POST["password"];
header("Access-Control-Allow-Origin: *");
	//连接数据库
	$con = mysqli_connect("localhost","root","","test");

	$sql = "SELECT `id`, `name`, `password` FROM `userinfo` WHERE name = '$name' AND password = '$password'";
	$result = mysqli_query($con,$sql);
	$test = mysqli_num_rows($result);
	if(!$test==0){
		echo 1;
	}else{
		echo 0;
	}
	mysqli_close($con);
?>
