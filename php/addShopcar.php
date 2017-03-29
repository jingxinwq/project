<?php
	header("Access-Control-Allow-Origin:*");


	$username = $_POST["username"];
	
	$shopname = $_POST["shopname"];

	$goodsname = $_POST["goodsname"];
	
	$oldprice = $_POST["oldprice"];

	$newprice = $_POST["newprice"];
	
	$number = $_POST["number"];

	$overgoods = $_POST["overgoods"];
	
	$goodsimg = $_POST["goodsimg"];

	$goodsID = $_POST["goodsID"];
	
	$con = mysqli_connect("localhost","root","root","haoshiqi");
	
	mysqli_query($con,"set names utf-8");
	
	$sql = "INSERT INTO `shopcar`(`username`, `shopname`, `goodsimg`, `goodsname`, `newprice`, `oldprice`, `number`, `overgoods`, `goodsID`) VALUES ('$username','$shopname','$goodsimg','$goodsname','$newprice','$oldprice','$number','$overgoods','$goodsID')";
	
	$result = mysqli_query($con,$sql);
	
	if($result){
		echo 1;
	}else{
		echo 0;
	}
	
	mysqli_close($con);
?>