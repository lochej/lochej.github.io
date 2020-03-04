<?php

	function getPDO()
	{
		$servername = "mysql:host=localhost;dbname=dii5_21503914;charset=utf8";
		$username = "root";
		$password = "";
		return new PDO($servername,$username,$password);
	}
?>