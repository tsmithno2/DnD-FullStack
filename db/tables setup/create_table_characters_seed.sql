create table characters (
    char_id serial primary key,
    party_id integer
    references parties(party_id),
    camp_id integer
    references campaigns(camp_id),
    char_npc boolean,
    char_pc boolean,
    char_trouble_list boolean,
    char_name varchar(80),
    char_picture text,
    char_alignment varchar(30),
    char_deity varchar (120), 
    char_strength integer,
    char_dexterity integer,
    char_constitution integer,
    char_intelligence integer,
    char_wisdom integer,
    char_charisma integer,
    char_inventory text,
    char_dm_notes text
);


