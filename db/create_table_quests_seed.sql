create table quests 
questId serial primary key
campIId foreign key
questName varchar (80)
questDescription text
questPicture text
questObtained boolean 
questCompleted boolean;