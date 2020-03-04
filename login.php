<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Login</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div class="card centered-card" id="login-card">
        <div class="form-container">
            <h1>Login</h1>
            <form id="contact" name="contact" action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
                <label>Username</label><input name="username" type="username" required placeholder="username" />
                <label>Password</label><input name="password" type="password" required placeholder="password"></input>
                <button class="button-centered" name="submit" type="submit">Login</button>
            </form>
        </div>
        <a href="index.php">Go back to home</a>
	</div>
	
	<?php
	//Check form content
	if(isset($_POST["submit"]))
	{
		
		$username=htmlentities($_POST["username"]);
		$password=htmlentities($_POST["password"]);

		echo $username;
		echo $password;

		//Eviter les injections 
		//echaper les caracteres < et > 
		//addslashes()
		//mysql_real_escape_string()
		//htmlentities() supprime les balises html
		//sstrip-tags() supprime les balices PHP
		//framework PHP data object

		//if(check credentials)
		$hash_pwd=base64_encode(hash("sha512",$password,true));



		if($password == "dii5")
		{
		
			//Create a session for the user
			session_start();
			$_SESSION["username"]=$username;
		}
		else
		{
			echo('<div class="card centered-card">
					<p>Unauthorized</p>
				</div>');
		}	
	}
	?>

</body>



</html>