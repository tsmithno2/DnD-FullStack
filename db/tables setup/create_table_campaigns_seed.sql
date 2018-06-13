create table campaigns (
    camp_id serial primary key,
    user_id integer,
    references users(user_id), 
    camp_name varchar(80),
    camp_desc1 varchar (120),
    camp_desc2 text,
    camp_picture text
);

