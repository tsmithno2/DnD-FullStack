create table characters
charId serial primary key
campId foreign key
userId foreign key
partyId foreign key
charNpc boolean
charPc boolean
charShitList boolean
charName varchar (80)
charPicture text
charAlignment varchar(30)
charDeity varchar (120) 
charStrength integer
charDexterity integer
charConstitution integer
charIntelligence integer
charWisdom integer
charCharisma integer
charInventory text
carDmNotes text;

