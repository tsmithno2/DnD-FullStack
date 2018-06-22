create table quests (
    quest_id serial primary key,
    quest_name varchar (80),
    quest_description text,
    quest_picture text,
    quest_obtained boolean, 
    quest_completed boolean
);
