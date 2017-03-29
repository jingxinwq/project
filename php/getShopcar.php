<?php
	header("Access-Control-Allow-Origin:*");
	
	$username = $_POST["username"];
	
	
	
	$con = mysqli_connect("localhost","root","root","haoshiqi");
	
	mysqli_query($con,"set names utf-8");
	
	$sql = "SELECT  `username`, `shopname`, `goodsimg`, `goodsname`, `newprice`, `oldprice`, `number`, `overgoods`, `goodsID` FROM `shopcar` WHERE username = '$username'";
	
	$result = mysqli_query($con,$sql);
	
	// $res = json_encode($result);
	// echo 1;
	// echo $res;
	$array=[];
	
	while($arr = mysqli_fetch_assoc($result)){
		$array[]=$arr;
		
	}
	$res = json_encode($array);
		echo $res;
	// $data = count($array);
	
	// if($data>0){
	// 	echo 1;
	// }else{
	// 	echo 0;
	// }
	
	 mysqli_close($con);
?>