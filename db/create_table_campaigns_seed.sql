create table campaigns
campId serial primary key
userId foreign key
campName varchar(80)
campDesc1 varchar (120)
campDesc2 text
campPicture text;
