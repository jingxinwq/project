<?php
   header('Access-Control-Allow-Origin:*');
	$name = $_POST["nam"];
	$password = $_POST["psw"];
	$con = mysqli_connect("localhost","root","","test");
	mysqli_query($con,"set names utf8");
	$sql = "INSERT INTO `userinfo`(`id`, `name`, `password`) VALUES ('','$name','$password')";
	$result = mysqli_query($con,$sql);
	if($result){
		echo 1;
	}else{
		echo 0;
	}
	mysqli_close($con);
?>

