drop table if exists Comments;
drop table if exists Articles;
drop table if exists Categories;
drop table if exists Users;
 create table if not exists Users (
 userId integer not null primary key,
 password char(72) not null,
 username varchar(64) unique not null,
 authToken varchar(128),
 fName varchar(64),
 lName varchar (64),
 userDescription varchar(255),
 email varchar(254),
 address varchar(64),
 phone varchar(15),
 birthDate date
 );
 create table if not exists Categories (
 categoryId integer not null primary key,
 name varchar(32),
 catDescription varchar(255)
 );
 create table if not exists Articles (
 articleId integer not null primary key,
 title varchar(32),
 articleContent varchar(3000),
 articleDate timestamp not null,
 imageUrl varchar(64),
 imageName varchar(64),
 imageHeight integer,
 imageWidth integer,
 writerId integer not null,
 categoryId integer not null,
 foreign key (writerId) references Users(userId) ON DELETE CASCADE,
 foreign key (categoryId) references Categories(categoryId) ON DELETE CASCADE
 );
 create table if not exists Comments (
 commentId integer not null primary key,
 parentId integer,
 commentDateTime timestamp not null,
 content varchar(255),
 posterId integer not null,
 articleCommented integer not null,
 foreign key (posterId) references Users(userId)ON DELETE CASCADE,
 foreign key (articleCommented) references Articles(articleId) ON DELETE CASCADE
 );
insert into Users (userId, password, username, fName, lName, userDescription, email, address, phone, birthDate) VALUES
 (1, 'password1', 'user1', 'Derek', 'Hughes', 'I got my first camera at 10 - a Brownie 127 - still have it and it still works! Most of my own photography is inspired by Nature. Our natural environment needs protecting. If my photographs make someone appreciate what we have a little bit more then I’m well rewarded. Photography for me is my relaxation technique. The view through the camera becomes my focus for a while and lets me shut out the cluttered world we live in.', 'darkroom@derek.co.nz', '116 Lemon Street, New Plymouth 4312', '0276580327', '1980-01-01');
 insert into Categories (categoryId, name, catDescription) VALUES
 (1, 'Nature', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a cursus purus. Curabitur pulvinar tempor ligula sed luctus. Nam id justo vel eros ultrices placerat. Mauris vehicula odio a fringilla sollicitudin.');
 insert into Articles (articleId, title, articleContent, articleDate, writerId, imageName, imageHeight, imageWidth, categoryId) VALUES
 (1, 'Scream for no reason at 4 am whos the baby', '<p>Cats are fats i like to pets them they like to meow back&nbsp;making sure that fluff gets into the owners eyes&nbsp;and&nbsp;miaow then turn around and show you my bum.&nbsp;Whenever a door is opened, rush in before the human&nbsp;pet me pet me dont pet me when owners are asleep, cry for no apparent reason&nbsp;but&nbsp;do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy stuff and things&nbsp;curl up and sleep on the freshly laundered towels;Human is washing you why halp oh the horror flee scratch hiss bite&nbsp;cough furball into food bowl then scratch owner for a new one. Nap all day&nbsp;find empty spot in cupboard and sleep all day&nbsp;for&nbsp;claw at curtains stretch and yawn nibble on tuna ignore human bite human hand&nbsp;and&nbsp;sit on human&nbsp;and&nbsp;soft kitty warm kitty little ball of furr&nbsp;but&nbsp;has closed eyes but still sees you.&nbsp;When in doubt, wash&nbsp;bite off humans toes&nbsp;for&nbsp;cough hairball on conveniently placed pants&nbsp;eat the rubberband.&nbsp;If it fits,
or need to chase tail&nbsp;cats are cute&nbsp;suddenly go on wild-eyed crazy rampage.meow to be let out&nbsp;cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighter; Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i dont want it anymore meow bye eats owners hair then claws head vomit my furball really tie the room together attack the child&nbsp;carefully drink from water glass and then spill it everywhere and proceed to lick the puddle&nbsp;i see a bird i stare at it i meow at it i do a wiggle come here birdy.&nbsp;Time to go zooooom. Thinking longingly about tuna brine&nbsp;throw down all the stuff in the kitchen morning beauty routine of licking self shredded your linens for you pretend not to be evil.&nbsp;Jump around on couch, meow constantly until given food,caticus cuteicus cat dog hate mouse eat string barf pillow no baths hate everything&nbspscoot butt on the rug. Run in circles nap all day&nbsp;damn that dog&nbsp;lounge in doorway&nbsp;and&nbsp;taco cat backwards spells taco cat.&nbsp;Human is washing you why halp oh the horror flee scratch hiss bite.&nbsp;Climb a tree, wait for a fireman jump to fireman then scratch his face. Gnaw the corn
cob</p>', date('now'), 1, 'british_blue_catp.jpg', 2560, 2010, 1);
 insert into Comments (commentId, commentDateTime, content, posterId, articleCommented) VALUES
 (1, date('now'), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie interdum turpis ut condimentum. Etiam ornare malesuada velit non iaculis. Cras vitae lorem luctus, cursus tellus non, elementum sapien.', 1, 1);