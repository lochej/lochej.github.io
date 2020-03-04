<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Logout</title>
    <link rel="stylesheet" href="css/styles.css">
    <script type="text/javascript" src="js/logout.js"></script>
</head>



<body>
    <div class="card centered-card" id="logout-card">
        <div class="wrap-content-card">
            <?php
				session_start();


				if(!array_key_exists("username",$_SESSION)){

					echo "<h1>No session to disconnect</h1>";
				}
				else{
					$login = $_SESSION["username"];

					session_destroy();
					echo sprintf("<h1><b>%s</b> is now disconnected.</h1>",$login);
				}
			?>

                <p> You will be redirected in <b><span id="countdown">5</span></b> seconds.</p>
                <a href="index.html">Go back to home</a>
        </div>
    </div>
</body>

</html>