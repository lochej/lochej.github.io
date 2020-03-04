<!DOCTYPE html>
<html lang="en">
<?php
		include("register_session.php");
	?>

    <head>
        <meta charset="UTF-8" />
        <title>CV J.LOCHE</title>
        <link rel="stylesheet" href="css/styles.css">
        <script src="js/index.js"></script>
    </head>

    <body>

        <div class="header">
            <div class="profile-container">
                <a href="game.html"><img alt="profile image" src="img/profile.png" /></a>
            </div>
            <h1>lochej</h1>
            <h2><span id="profile-title">Welcome Home ! :-)</span><span class="trailing-underscore"><strong>_</strong></span> </h2>
        </div>

        <div class="topnav">
            <a href="index.php" class="active">Home</a>
            <a href="resume.php">Resume</a>
            <a href="projects.php">Projects</a>
            <a href="contact.php" style="float:right">Contact</a>
        </div>

        <div class="row">
            <div class="leftcolumn">
                <div class="card">
                    <h2>Welcome to my website ! 👋</h2>
                    <h5>Feb 7, 2020</h5>
                    
                    <p>Welcome to my website where you can find all sorts of information <b>about me</b> and my <b>projects</b>.</p>
                    <p>Feel free to have a look at my <b>resume</b> for more info about my qualifications.</p>
                    <p>If you are an adventurous person you can also have a look at my projects.</p>
                </div>
            </div>
            <div class="rightcolumn">
                <div class="card">
                    <h2>Quick notes about Me 👌</h2>
                    
                    <p><span class="quote">"</span>I'm fond of <b>computers</b>, <b>electronics</b> and <b>new
						technologies</b>. My <i>scientific</i> profile allows me to be a <i>versatile</i> and
                        <i>motivated</i> teamworker.<span class="quote">"</span></p>
                </div>

                <div class="card">
                    <h3>Visits: <span id="visitcounter"><?php echo getVisitorCount(); ?></span></h3>
                </div>

            </div>
        </div>

        <div class="footer">
            <div class="card">
                <h2>Follow Me 👍</h2>
                <div class="social-links">
					<a href="https://www.github.com/lochej">
						<img alt="Github" src="img/github.svg" />
						<p>Github</p>
					</a>
					<a href="https://www.youtube.com/channel/UCNTvG4FvYYZbHS-vY5pbDLQ/">
						<img alt="Youtube" src="img/youtube.svg" />
						<p>Youtube</p>
					</a>
					<a href="#Facebook">
						<img alt="Facebook" src="img/facebook.svg" />
						<p>Facebook</p>
					</a>
				</div>
            </div>
        </div>


    </body>

</html>