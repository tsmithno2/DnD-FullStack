create table parties (
    party_id serial primary key,
    camp_id integer
    references campaigns(camp_id)
);
