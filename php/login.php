<?php
	header("Access-Control-Allow-Origin:*");
	
	$name = $_POST["nam"];
	
	$password = $_POST["psw"];
	
	$con = mysqli_connect("localhost","root","","test");
	
	mysqli_query($con,"set names utf-8");
	
	$sql = "SELECT `name`, `password` FROM `userinfo` WHERE name = '$name' and password = '$password'";
	
	$result = mysqli_query($con,$sql);
	
	
	$array=[];
	
	while($arr = mysqli_fetch_assoc($result)){
		$array[]=$arr;
	}
	$data = count($array);
	
	if($data>0){
		echo 1;
	}else{
		echo 0;
	}
	
	mysqli_close($con);
?>