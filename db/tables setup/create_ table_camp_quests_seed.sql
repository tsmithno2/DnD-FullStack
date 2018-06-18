create table camp_quests (
    cpq_id serial primary key,
    camp_id integer
    references campaigns(camp_id)
);
