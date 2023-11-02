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
 birthDate date,
 avatar varchar(80)
 );
 create table if not exists Categories (
 categoryId integer not null primary key,
 name varchar(32)
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
insert into Users (userId, password, username, fName, lName, userDescription, email, address, phone, birthDate, avatar) VALUES
(1, '$2b$10$2s3mTALA0wZELabZ3405w.mDbLuqh0imNis9Zooszh9CK/pm2eQHq', 'user1', 'Derek', 'Hughes', 'I got my first camera at 10 - a Brownie 127 - still have it and it still works! Most of my own photography is inspired by Nature. Our natural environment needs protecting. If my photographs make someone appreciate what we have a little bit more then I’m well rewarded. Photography for me is my relaxation technique. The view through the camera becomes my focus for a while and lets me shut out the cluttered world we live in.', 'darkroom@derek.co.nz', '116 Lemon Street, New Plymouth 4312', '0276580327', '1980-01-01', 'https://api.multiavatar.com/bobbyknox.png'),
(2, '$2b$10$2s3mTALA0wZELabZ3405w.mDbLuqh0imNis9Zooszh9CK/pm2eQHq','user2','Linda','Smith','I love capturing the beauty of the world. Nature and landscapes are my go-to subjects.','linda@photos.com', '8 Revel Ave, Auckland 1041','0276580327','1993-10-05', 'https://api.multiavatar.com/bobbyknox.png'),
(3, '$2b$10$2s3mTALA0wZELabZ3405w.mDbLuqh0imNis9Zooszh9CK/pm2eQHq','user3','Mike','Ford', 'A passionate photographer who loves black and white classics.','michael@bwphotos.com','456 Retro Rd, Auckland, 1132', '0212363136','1990-10-10', 'https://api.multiavatar.com/bobbyknox.png');
insert into Categories (categoryId, name) VALUES
(1, 'Nature'),
(2, 'Portrait'),
(3, 'Life');

insert into Articles (articleId, title, articleContent, articleDate, writerId, imageName, imageHeight, imageWidth, categoryId) VALUES
(1, 'Scream for no reason at 4 am whos the baby', '<p>Cats are fats i like to pets them they like to meow back&nbsp;making sure that fluff gets into the owners eyes&nbsp;and&nbsp;miaow then turn around and show you my bum.&nbsp;Whenever a door is opened, rush in before the human&nbsp;pet me pet me dont pet me when owners are asleep, cry for no apparent reason&nbsp;but&nbsp;do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy stuff and things&nbsp;curl up and sleep on the freshly laundered towels;Human is washing you why halp oh the horror flee scratch hiss bite&nbsp;cough furball into food bowl then scratch owner for a new one. Nap all day&nbsp;find empty spot in cupboard and sleep all day&nbsp;for&nbsp;claw at curtains stretch and yawn nibble on tuna ignore human bite human hand&nbsp;and&nbsp;sit on human&nbsp;and&nbsp;soft kitty warm kitty little ball of furr&nbsp;but&nbsp;has closed eyes but still sees you.&nbsp;When in doubt, wash&nbsp;bite off humans toes&nbsp;for&nbsp;cough hairball on conveniently placed pants&nbsp;eat the rubberband.&nbsp;If it fits,
or need to chase tail&nbsp;cats are cute&nbsp;suddenly go on wild-eyed crazy rampage.meow to be let out&nbsp;cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighter; Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i dont want it anymore meow bye eats owners hair then claws head vomit my furball really tie the room together attack the child&nbsp;carefully drink from water glass and then spill it everywhere and proceed to lick the puddle&nbsp;i see a bird i stare at it i meow at it i do a wiggle come here birdy.&nbsp;Time to go zooooom. Thinking longingly about tuna brine&nbsp;throw down all the stuff in the kitchen morning beauty routine of licking self shredded your linens for you pretend not to be evil.&nbsp;Jump around on couch, meow constantly until given food,caticus cuteicus cat dog hate mouse eat string barf pillow no baths hate everything&nbspscoot butt on the rug. Run in circles nap all day&nbsp;damn that dog&nbsp;lounge in doorway&nbsp;and&nbsp;taco cat backwards spells taco cat.&nbsp;Human is washing you why halp oh the horror flee scratch hiss bite.&nbsp;Climb a tree, wait for a fireman jump to fireman then scratch his face. Gnaw the corn
cob</p>', date('now'), 1, 'british_blue_catp.jpg', 2560, 2010, 3),
(2, 'The Timeless Beauty of Tulips', '<p>Tulips, with their vibrant colors and elegant form, have always been a favorite among garden enthusiasts and photographers alike. Originating from Central Asia, these spring-blooming perennials have played a significant role in history, even causing a financial craze called "Tulip Mania" in the Netherlands during the 17th century.</p>', date('now'),2, 'tulipsp.jpg', 960, 640, 3),
(3, 'Mysteries Behind the Veil', '<p>The allure of mystery often lies in the eyes. A glimpse, a fleeting emotion, or the hint of a story waiting to be told. The fabric enveloping her not only conceals but adds a touch of intrigue, drawing the viewer in. What thoughts play behind those eyes? Is it contemplation, a memory, or perhaps the anticipation of the unknown?</p>', date('now'), 3, 'womanp.jpg', 640, 427, 2),
(4, 'The Delightful World of Pancakes', '<p>Who can resist the allure of a fluffy stack of pancakes, especially when drizzled with a generous amount of syrup? The aroma alone is enough to pull you out of bed on a lazy morning. Pancakes have been a breakfast favorite for generations, bringing warmth and comfort to countless breakfast tables.</p>', date('now'), 1, 'pancakep.jpg', 1257, 2560, 3),
(5, 'Mount Taranaki', '<p>The serene beauty of nature is often found in the tranquil moments just before the world awakens. One such moment is captured in the photograph of a snow-capped mountain, reflecting perfectly in the still waters below.</p>', date('now'),2, 'mount_taranaki.jpg', 768, 1024,1);
