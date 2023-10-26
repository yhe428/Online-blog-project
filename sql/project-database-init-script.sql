drop table if exists Comments;
drop table if exists Articles;
drop table if exists Categories;
drop table if exists Users;

 create table Users (
 userId integer not null primary key,
 password char(72) not null,
 username varchar(64) unique not null,
 authToken varchar(128),
 fName varchar(64),
 lName varchar (64),
 userDescription varchar(255),
 email varchar(254),
 address varchar(64),
 phone varchar(15)
 );
 
 create table Categories (
 categoryId integer not null primary key,
 name varchar(32),
 catDescription varchar(255)
 );
 
 create table Articles (
 articleId integer not null primary key,
 title varchar(32),
 articleContent varchar(3000),
 articleDate timestamp not null,
 imageUrl varchar(64),
 writerId integer not null,
 categoryId integer not null,
 foreign key (writerId) references Users(userId),
 foreign key (categoryId) references Categories(categoryId)
 );
 
 create table Comments (
 commentId integer not null primary key,
 parentId integer,
 commentDateTime timestamp not null,
 content varchar(255),
 posterId integer not null,
 articleCommented integer not null,
 foreign key (posterId) references Users(userId),
 foreign key (articleCommented) references Articles(articleId)
 );
 
 insert into Users (userId, password, username, fName, lName, userDescription, email, address, phone) VALUES
 (1, 'password1', 'user1', 'Derek', 'Hughes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum viverra mauris. Quisque suscipit ipsum nec tortor accumsan, sed pellentesque sapien porta. Donec eleifend vehicula sodales. Mauris auctor est eu mattis feugiat. Nunc viverra nulla id magna tempor, ut feugiat massa viverra. Nam ut nunc nec felis pretium malesuada. Duis dignissim nibh nec arcu sagittis vestibulum.', 'darkroom@derek.co.nz', '116 Lemon Street, New Plymouth 4312', '0276580327'),
 (2, 'password2', 'user2', 'Daniel', 'Murray', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam elit odio, nec maximus turpis suscipit eget. Duis vel venenatis libero. Vestibulum gravida erat a dapibus imperdiet. Suspendisse sagittis massa mauris, id sollicitudin enim mollis id. Aliquam id pulvinar neque. Praesent facilisis vulputate dui accumsan ornare. Vivamus vehicula fringilla diam, ac dictum dui mattis vel. Mauris accumsan volutpat sapien, quis scelerisque mi finibus et.', 'danielmurray@somewhere.com', '456 Someplace Street, Christchurch 8011', '0211231234'),
 (3, 'password3', 'user3', 'Meghan', 'Maloney', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis dui justo, a ornare enim scelerisque in. In quis congue libero, vel euismod ligula. In sit amet tristique ligula. Pellentesque vitae neque non ligula dictum condimentum. Fusce et ligula sed ligula accumsan iaculis. Aenean sagittis commodo libero, sed vulputate odio vestibulum ut. Pellentesque malesuada malesuada quam. Aenean non velit dictum, viverra nisl eu, ultricies nisi. Aenean a tristique ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim tempor justo. Mauris vel velit non libero luctus ullamcorper id fringilla turpis.', 'meghanmaloney@someplace.co.nz', '78 Place Road, Cambridge 3283', '0274567890'); 
 
 insert into Categories (categoryId, name, catDescription) VALUES
 (1, 'Nature', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a cursus purus. Curabitur pulvinar tempor ligula sed luctus. Nam id justo vel eros ultrices placerat. Mauris vehicula odio a fringilla sollicitudin.'),
 (2, 'Portrait', 'Curabitur auctor aliquet congue. Aenean a consequat tellus. Praesent dignissim aliquam sodales. Ut consequat at massa vel dignissim. Sed pulvinar aliquam urna, non interdum nulla accumsan ut.'),
 (3, 'Life', 'Nulla vel vestibulum ante, posuere tristique nibh. Aliquam erat volutpat. Nulla velit tortor, ornare vel venenatis ac, imperdiet eu diam.');
 
 insert into Articles (articleId, title, articleContent, articleDate, writerId, categoryId) VALUES
 (1, 'Article 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mattis ex, nec luctus urna pulvinar vitae. Pellentesque ultricies, arcu quis feugiat ullamcorper, arcu ligula maximus eros, non malesuada augue neque quis dolor. Sed sagittis mollis est quis malesuada. Nullam vel ornare nisl. Praesent sed condimentum mauris. Etiam finibus tortor at ligula bibendum iaculis. Aenean dolor eros, malesuada et egestas sed, feugiat sed diam. Pellentesque nunc justo, blandit ac urna eget, faucibus gravida quam. Donec vel odio nec nulla sollicitudin dictum porta vitae dui. Maecenas rutrum nisi lobortis lacus viverra, a mollis enim lobortis. Pellentesque eu luctus nisl. Cras in mauris sollicitudin, cursus arcu id, interdum leo. Ut ultrices sapien nec turpis lobortis, in mollis purus tincidunt. Vivamus nec quam eu justo interdum mattis. Phasellus rutrum est in nisl tincidunt consectetur. Nunc a consequat nisi. Mauris vitae rhoncus felis. Sed vitae vulputate purus. Donec et ante vel orci viverra facilisis quis vel risus. Mauris laoreet elementum cursus. Duis dolor magna, varius in consectetur in, ultricies id felis. Integer pretium tortor et lacus mattis condimentum. Fusce consectetur ac lorem vel porta. Vivamus aliquam nisl et eleifend egestas. Suspendisse iaculis libero dolor, nec feugiat diam luctus ultrices. Sed ullamcorper turpis odio, a semper velit venenatis dignissim. Nam sit amet purus lectus.', datetime('now'), 1, 2),
 (2, 'Article 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper tortor in metus vulputate pulvinar. Donec vel vehicula dui. Vestibulum consectetur tempus nisl at rhoncus. Nullam blandit eleifend nisi. Duis ut sodales magna. Pellentesque accumsan cursus porta. Donec bibendum ante nec est maximus blandit. Donec sollicitudin leo vel vestibulum aliquam. Praesent id vulputate nisl, non scelerisque mi. Morbi id sem est. Etiam nec urna felis. Vestibulum volutpat est ut enim laoreet maximus. Donec varius ultrices augue sit amet pretium. Aliquam porttitor turpis fringilla, posuere arcu et, iaculis est. Pellentesque eget odio sapien. Sed cursus risus non nisl fermentum pretium.Aliquam diam nisi, fringilla at malesuada fringilla, mattis id felis. Nullam non facilisis neque. Proin pellentesque elit elit, accumsan volutpat eros vestibulum quis. Duis tempus ullamcorper magna in maximus. Phasellus nibh libero, ultrices sit amet dictum sed, commodo quis velit. Suspendisse tincidunt, sem at vehicula convallis, arcu mauris vehicula turpis, a blandit mi magna eget ex. Morbi eleifend varius est, id tincidunt lacus mollis ut. Curabitur porttitor nec neque vitae lobortis. Quisque egestas enim arcu, nec vehicula urna rhoncus non. Nullam sed ex sed purus hendrerit finibus. Nullam non leo ex.', datetime('now'), 1, 3),
 (3, 'Article 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque posuere erat vitae convallis. Praesent a venenatis quam. Maecenas sed sapien et urna elementum finibus. Aenean purus tortor, vehicula ac metus sit amet, gravida dictum tellus. Nulla nec elit quam. Vivamus rhoncus odio tristique erat venenatis tincidunt non non nibh. Donec sodales lectus quis ornare varius. Aliquam eget metus quis urna bibendum molestie. Suspendisse iaculis viverra lectus, at finibus mi placerat at. Vestibulum et nulla dignissim, luctus mi vel, ultrices purus. Vivamus lectus nulla, mollis sit amet risus sit amet, eleifend tristique eros. Phasellus tincidunt quis tellus id commodo. Integer eu gravida leo.Integer eget libero lectus. Praesent sed lorem id mauris sodales pellentesque sit amet ut tortor. Sed eget convallis massa. Morbi placerat, nunc at viverra efficitur, diam nunc pulvinar nulla, vel luctus nisl felis auctor nibh. Curabitur et euismod sem. Quisque ut erat iaculis, egestas ante quis, pellentesque turpis. Fusce scelerisque tellus nisi. Donec sodales lacus diam, quis egestas libero gravida et. Phasellus malesuada tellus quis dui blandit, ac venenatis sem gravida. Nullam porttitor lacus ac sem dapibus, vitae laoreet elit semper. Praesent malesuada vel nulla a ultrices. Nunc vel nulla vitae nisi cursus porta.', datetime('now'), 2, 1),
 (4, 'Article 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas finibus malesuada. Aenean quis purus et odio placerat ultricies in sed ante. Etiam eleifend massa ornare nisl congue, vel gravida orci posuere. Phasellus in vehicula ex, id faucibus ante. Nullam semper nisl elit, a vestibulum magna rutrum id. Nunc sed libero eu quam dignissim pharetra id non eros. Nulla consequat, orci nec euismod varius, massa metus dignissim urna, sed posuere neque libero vitae dui. Donec mauris ligula, varius facilisis diam quis, accumsan tristique leo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ac arcu hendrerit, fermentum ante in, pulvinar metus. Proin vel elit ut magna sollicitudin tempus. Vestibulum fermentum volutpat venenatis. Fusce et risus sapien. Etiam maximus sem sed felis eleifend, sit amet varius mi scelerisque. Quisque bibendum, tortor ut sagittis efficitur, mi magna porttitor odio, eget aliquet urna eros sed ipsum. In nec dapibus mi, id euismod sapien. Nullam sit amet diam blandit, mattis nunc in, congue nibh. Suspendisse congue ligula at lorem rhoncus, sit amet gravida ante elementum.', datetime('now'), 2, 2),
 (5, 'Article 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum augue quis arcu lobortis vestibulum. Donec at lectus molestie nisi faucibus porta eget sit amet nisl. Quisque quis augue sed neque vulputate bibendum vitae eu massa. Nulla volutpat fermentum sem vitae tincidunt. Donec aliquam tristique diam, vitae elementum ex aliquet eu. Etiam dignissim, leo eget malesuada convallis, mi sapien mollis felis, sed volutpat est diam sed erat. Praesent eget nisi vitae felis venenatis finibus. Aenean nec lectus sed tellus accumsan ullamcorper ut nec ante. Nam tristique dolor et ligula commodo, consectetur suscipit elit lacinia. Donec a egestas velit, id blandit tellus. Quisque ultrices, justo eget aliquet faucibus, nulla justo facilisis sem, a posuere quam lorem in metus. Cras maximus imperdiet elit, at vestibulum eros.Proin eleifend velit id libero placerat pellentesque. Pellentesque rutrum dapibus ipsum eu mollis. Cras sit amet maximus libero, malesuada mollis dui. Aliquam non dolor est. In et cursus elit. In ut nibh orci. Integer nunc lectus, ultrices quis vulputate vitae, vehicula quis nunc. Donec et orci leo.', datetime('now'), 3, 1),
 (6, 'Article 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam egestas risus eu egestas. Cras ut vehicula enim. Integer et risus ac augue gravida mollis et vitae lectus. Sed lacinia, ante a pretium mattis, est quam lacinia eros, eget dapibus metus tortor eget lorem. In hac habitasse platea dictumst. Nam eget efficitur dui. Proin porttitor, lacus vel tincidunt faucibus, est velit tempus urna, ac iaculis nulla metus et mauris. Integer vel placerat est. Phasellus varius in sem ut rhoncus. Vivamus sit amet sapien eget elit lobortis tempus. Etiam laoreet, metus sed bibendum auctor, sem purus euismod ex, ut sodales quam felis in nisl. Nunc nec vehicula neque.Integer iaculis diam vitae maximus ultricies. Integer ipsum nisi, egestas ac odio sed, eleifend bibendum urna. Ut finibus lobortis sollicitudin. Nullam eu elit nibh. Aenean tristique, mauris non posuere hendrerit, lorem mi rutrum tortor, accumsan pellentesque urna orci nec odio. Nam mi dolor, dictum sed arcu eu, varius molestie mi. Cras sodales lacus quis eleifend ornare. Suspendisse potenti. Sed sem sem, efficitur et odio id, tincidunt euismod lectus. Curabitur quis diam sed velit convallis ornare quis quis massa.', datetime('now'), 3, 3);
 
 insert into Comments (commentId, commentDateTime, content, posterId, articleCommented) VALUES
 (1, datetime('now'), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie interdum turpis ut condimentum. Etiam ornare malesuada velit non iaculis. Cras vitae lorem luctus, cursus tellus non, elementum sapien.', 1, 6),
 (2, datetime('now'), 'Aenean at posuere nisl. Morbi id blandit lacus. Donec rhoncus leo non dignissim vestibulum. Aliquam eget nisi egestas, mattis nisi sed, consequat justo. Phasellus ac felis sed neque porta placerat in id magna. Donec iaculis justo sit amet quam tempus rutrum.', 2, 4),
 (3, datetime('now'), 'Vestibulum vitae lacus id diam feugiat consectetur eget euismod nisi. Praesent vitae nisl et augue eleifend egestas. Sed vel arcu et nisl pharetra dapibus a nec tortor.', 3, 5),
 (4, datetime('now'), 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 1, 1),
 (5, datetime('now'), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit hendrerit dolor, id vulputate arcu pretium interdum. Aenean aliquam vel ipsum ut ornare.', 2, 3),
 (6, datetime('now'), 'Vestibulum in nunc ac leo eleifend pretium eu at mi. Morbi pharetra ornare sollicitudin. Maecenas et ligula nisi. Vestibulum in gravida quam. Suspendisse interdum dui pretium est dictum suscipit. Integer pretium ante vel mi pellentesque convallis.', 3, 2);
 