# Introduction to the LOCHE Jérémy's website

In this web administration project, I have made a dynamic website using HTML,CSS and PHP.

This website presents the following pages:
1. Homepage : present the overhall content of the website
2. Resume : This is my personal CV containing useful information about me
3. Projects : This is a page presenting my End of studies project with some usefull links about it.
4. Contact : In this page, you will be able post a comment or send an email (not functionnal at the time of writing)

## Databases

1. Database name: **dii5_21503914**
	1. user : "root"
	2. password: ""
2. Tables for the comments : **dii5_21503914_comments**
	1. column[0] = "id" INT autoincrement primary key
	2. column[1] = "pseudo" VARCHAR(64)
	3. column[2] = "comment" VARCHAR(128)
3. Tables for the visit counter : **dii5_21503914_counter**
	1. column[0] = "id" INT autoincrement primary key
	2. column[1] = "visits" INT

## General architecture

I have wanted to create an easy to use website with a small number of pages which well describe me and my work.

## Functionning of the visit counter

I have used 1 line from the counter table which is incremented every time a new user is detected on the website.

What happens is: 
Every time a new user open the index.php page (where the visit counter is displayed), the PHP scripts verifies if the users has already been on the page by using the PHP sessions method.

If no PHP session has been opened for the new user, a new one is created for the first visit and an attribute **"has_visited"** is added to the session and set to **true** and the visit counter is **incremented**. 

When the user comes back on the website or reloads the **index.php file**, the PHP session cookie will allow PHP to detect that the session was started before and that is has the **has_visited** field. From this point, PHP detects that it is not a new user and **doesn't** increment the visitor counter.

If you want to increment the visitor counter, please **delete you browser cache/cookies**:
1. Firefox: **about:preferences#privacy** -> Effacer les données...
2. **Tested on Firefox 73.0**

## Validating the pages with W3C validator

The pages were validated using the W3C validator service. 
As pages are writtent partly generated with PHP by the server, I have used the **"Code source de la page"** of Firefox feature verify the HTML with the Direct input validator of W3C.

https://validator.w3.org/#validate_by_input

Pages which have been verified: 
1. index.php -> Home page is OK :)
2. resume.php -> CV page is OK :)
3. projects.php -> Project page is OK :)
4. contact.php -> Contact page is OK :)

