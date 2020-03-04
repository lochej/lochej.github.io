<!DOCTYPE html>
<html lang="en">
<?php

	include("php/golden_book.php");

?>

<head>
    <meta charset="UTF-8" />
    <title>CV J.LOCHE</title>
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/comments.css">
    <script src="js/index.js"></script>
</head>

<body>
    <div class="header">
        <div class="profile-container">
			<a href="game.html"><img alt="profile image" src="img/profile.png" /></a>
        </div>
        <h1>lochej</h1>
        <h2><span id="profile-title">Contact : Feel free to post a comment</span><span class="trailing-underscore"><strong>_</strong></span> </h2>

    </div>

    <div class="topnav">
        <a href="index.php">Home</a>
        <a href="resume.php">Resume</a>
        <a href="projects.php">Projects</a>
        <a href="contact.php" style="float:right" class="active">Contact</a>
    </div>

    <div class="row">
        <div class="leftcolumn">
			
			<div class="card">
				<h2>Leave a comment</h2>
				<h5>Fill up this form to leave a comment</h5>

				<div class="form-container">
					<form id="comment" name="comment" action="comment_post.php" method="POST">
						<label>Pseudo</label><input required  name="pseudo" type="text" placeholder="johndoe" />
						<label>Comment</label><textarea required name="comment" maxlength="120" cols="50" placeholder="I'm john doe and I love your work !"></textarea>
						<button class="button-centered" type="submit">Comment</button>
					</form>
				</div>				
			</div>
			<div class="card">
                <h2>Contact</h2>
                <h5>If you wish to send me a private message, fill up this form and hit Send !</h5>

                <div class="form-container">
                    <form id="contact" name="contact" action="contact_thanks.php" method="POST">
                        <label>E-mail</label><input name="email" type="email" placeholder="john.doe@email.com" />
                        <label>Message</label><textarea name="message" maxlength="500" cols="50" placeholder="I'm john doe and I love your work !"></textarea>
                        <button class="button-centered" type="submit">Send</button>
                    </form>
                </div>
			</div>
			
			
        </div>
        
        <div class="rightcolumn">
			
			<div class="card">
				<h2>Latests comments (<?php echo getCommentCount(); ?>)</h2>
				<div class="comment-zone">
					<?php
						
						$comments=getComments(0,10);

						if(count($comments)>0){
							
							for($i=0;$i<count($comments);$i++)
							{
								$comment=$comments[$i];

								echo sprintf("<div class=\"comment-bubble %s\">
								<div class=\"content\">%s</div>
								<div class=\"pseudo\">by: <b>%s</b></div>
								</div>",($i%2 ? "bubble-1":"bubble-2"),$comment[1],$comment[0],);
							}
						}
						else{
							echo "<p>No Comments</p>";
						}
						
					?>	
				</div>
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