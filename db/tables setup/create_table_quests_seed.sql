create table quests (
    quest_id serial primary key,
    camp_id integer
    references campaigns(camp_id),
    user_id integer
    references users(user_id),
    quest_name varchar (80),
    quest_escription text,
    quest_icture text,
    quest_obtained boolean, 
    quest_completed boolean
);
