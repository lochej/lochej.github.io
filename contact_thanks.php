<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Thank you</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/contact.js"></script>
</head>


<?php
//Send to the database, then run the JS script
	//header("Location: index.html");
?>
	<body>
		<div class="card centered-card" id="feedback-card">
			<div class="wrap-content-card">
				<h1>Thank you for your message</h1>
				<p> You will be redirected in <b><span id="countdown">5</span></b> seconds.</p>
				<a href="index.php">Go back to home</a>
			</div>	
		</div>
	</body>
</html>
