create table camp_quest (
    cpq_id serial primary key,
    camp_id integer
    references campaigns(camp_id)
);
