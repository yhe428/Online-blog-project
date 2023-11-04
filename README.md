Final project &ndash; A personal blogging system &ndash; Starter project
==========
This repository contains a starting point for your team's final project.

Your team should update this README to include the information required, as presented in the project handout available on Canvas.

a.	Our webapp has been designed to give amateur photographers the chance to showcase their skills to an interested audience and interact with other photographers on the site. By uploading their latest photographs and articles outlining locations, techniques, and other points of interest, they can share and receive feedback as they continue to develop their photographic talent.

b.	Each user (photographer) can create an account which allows them to begin to share photographs and articles. All other visitors to the site can freely browse all available content, including articles and photographer profiles. We have implemented the compulsory features as follows:

Compulsory feature 1 – Creation of a new account. On the home page for our webapp, a create account button takes an interested user to a form where they can complete their details, including providing a username, their name, date of birth, password, phone, address, and email. Within the create account form, there is also a text field which allows the photographer to upload a short profile description about themselves. All individual photographer profiles can also be browsed by navigating to the “photographers” page.

Compulsory feature 2- Username availability. When creating their new account, users are immediately informed when a username has already been used. This has been implemented by sending a request to the server to verify username using the inputted value, and if the returned username is shown to be true, a message is immediately displayed indicating that it is unavailable to the new user and they must select a different username.

Compulsory feature 3 – Password verification. The new account form includes an input field for both entering and confirming password. An event listener has been added to both input fields which calls a checkPasswordsMatch function, and if passwords do not match, the user is prompted to retype their password. 

Compulsory feature 4 – Avatar selection. When the user creates a new account, they are presented with a list of avatars to choose from. This avatar is also able to be edited from their own profile page once logged in and will show whenever they author or comment on an article. We implemented this with an async function that fetches the avatars and then adds them to an avatar array when the new account view is rendered, and the avatar is stored as an attribute of the user in the database.

Compulsory feature 5 – Login and Logout. Once password and username have been verified when logging in, the user is redirected to an individual user page route “/yourPage”, and the login on the nav bar changes to instead show the logged in user’s username, and a drop-down menu from which they can choose to either edit their account or logout.

Compulsory feature 6 – Password hashing and salting. Password hashing and salting was implemented with the use of the bcrypt package.

Compulsory feature 7- Article browsing. A visitor to the site can navigate to a “blog” page which displays a list of all articles and their associated photographs which are presented as cards. A button which links to the full article is included at the bottom of each card. When logged in, “/yourPage” shows the user a list of their own submitted articles.

Compulsory feature 8 – Add and edit articles. A logged in user is directed to “/yourPage” which includes an article editor where they can add new articles and photos. This page also displays a summary of their already submitted articles which include buttons for editing (that links to the article editor) or deleting if they would like to remove that article from their list.

Compulsory feature 9 – Article editor. We used Quill for the text editor that allows the user to author articles. The text editor allows for multi-level headings, normal text, bold, underlined, or italicised text, and formatting by number or bullet points. We chose to allow only a single image file upload with each article. 

Compulsory feature 10 – Edit and delete account. A user logged in to their individual page can change any of their originally entered account details, including changing their password. They can also choose to delete their full account, which will remove all their details and authored articles.

Compulsory feature 11 – Website look and feel. CSS was written from scratch to apply a consistent style across the website and ensure a smooth user experience when navigating between pages.

c.	We chose to implement three extra features to enhance the user experience and functionality of our webapp that fit with our theme of showcasing photography and interacting with other amateur photographers. These were:

Extra feature 1 – Categorisation. When logged in users write a new article, they are also presented with category radio buttons and asked to select which category their article and photograph belong to. Category pages are then displayed for Life, Portrait, and Nature categories, which a user or visitor to the site can navigate to by way of a drop-down menu on the nav bar. We felt that this was an important addition to allow browsing for photographic inspiration within a coherent theme.

Extra feature 2 – Seach function. We also wanted our users and visitors to be able to look for something more specific. Therefore, we chose to implement a full text search function using the FTS5 extension for SQLite. Our search page allows users to input any search term, whether that is a word of interest they may be looking for in an article, or the name (or partial name) of a photographer whose work they want to view, or a known or partially known article title. This was achieved by creating a virtual table against which the input text can be matched. The results are displayed in the form of article cards that are ordered by rank, and from these the user can also click to choose to view the full article or full photographer profile.

Extra feature 3 – Commenting. We wanted our webapp to encourage interaction between users, so they can share feedback, tips, and experience as they develop their photography skills. For this reason, we also felt that commenting was an important extra feature to add. Commenting has been restricted to logged in users, and when logged in they can leave a comment, or reply to any comment, from within the full-article page. The number of comments on an article is also displayed on all article cards.

Extra feature 4 – CSS structure using database attributes. An additional feature we included while developing our webapp was the use of a masonry-like grid style in css for the display of our photographers’ article cards. By storing the height and width of each image as an attribute within our database “Articles” table, we were more easily able to draw on these properties to achieve a consistent style across different web pages and have our article cards display in a way that maintained the overall look and feel despite their varying sizes.


d.	Our database file should be named project-database.db, and the script that should be run is called final-script.sql

e.	Prior to running the webapp, npm install should also include bcrypt, jimp, and quill. 

f.	Nothing other than npm start is required to run the webapp.

g.	As an example user, the following should be used:
o	Username: user1
o	Password: p1
This is for a user with the name Derek Hughes, who should have three published articles!

h.	No additional instructions or comments 😊
