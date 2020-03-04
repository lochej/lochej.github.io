<?php

	include("db_access.php");

	function getCommentCount()
	{
		$count=0;

		$conn=getPDO();

		$sql="SELECT COUNT(id) FROM dii5_21503914_comments";
		
		$result=$conn->query($sql);

		while($data = $result->fetch())
		{
			$count=$data[0];
		}

		$result->closeCursor();
		return $count;
	}

	function getComments($page,$page_size)
	{
		$comments=array();

		$conn=getPDO();

		$sql="SELECT pseudo,comment FROM dii5_21503914_comments ORDER BY id DESC LIMIT :page_size OFFSET :offset";
		
		$statement=$conn->prepare($sql);
		$statement->bindValue('page_size', $page_size, PDO::PARAM_INT);
		$statement->bindValue('offset',$page*$page_size,PDO::PARAM_INT);

		$statement->execute();

		//$statement->execute([$page_size,($page-1)*$page_size]);

		while($data = $statement->fetch())
		{
			array_push($comments,array($data["pseudo"],$data["comment"]));
		}

		$statement->closeCursor();
		return $comments;
	}

	function addComment($pseudo,$comment)
	{
		$pseudo=htmlspecialchars($pseudo);
		$comment=htmlspecialchars($comment);

		$conn=getPDO();

		$sql="INSERT INTO dii5_21503914_comments (pseudo,comment) VALUES (?,?)";
		$statement=$conn->prepare($sql);

		$statement->execute([$pseudo,$comment]);

		$statement->closeCursor();

		return true;
	}



?>