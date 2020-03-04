
<?php
	//Send to the database the comment

	include("php/golden_book.php");

	addComment($_POST["pseudo"],$_POST["comment"]);

	//Go back to the contact page
	header("Location: contact.php");
?>
