create table parties (
    party_id serial primary key,
    camp_id integer
    references campaigns(camp_id),
    user_id integer
    references users(user_id)
);
