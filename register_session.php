<?php
	
	include("php/db_access.php");

	function newVisitor()
	{
		$conn = getPDO();
	
		$sql = "UPDATE dii5_21503914_counter SET visits = visits+1 WHERE id = 1";
		$conn->query($sql);
	}

	function getVisitorCount()
	{
		$visits=0;

		$conn = getPDO();

		$sql = "SELECT visits FROM dii5_21503914_counter WHERE id = 1";
		$result = $conn->query($sql);
	
		while($donnes = $result->fetch())
		{
			$visits=$donnes["visits"];  
		}    
		$result->closeCursor();
		return $visits;
	}

	//If a session is already created, return
	if(isset($_SESSION))
	{
		//echo 'session_isset';
		return;
	}

	session_start();
	
	//If a session has been started, then it is the same visitor
	if(array_key_exists("has_visited",$_SESSION))
	{
		//echo 'has_visited';
		return;
	}

	$_SESSION["has_visited"]=true;
	newVisitor();

	//echo 'new visitor';
	
    

?>