insert into parties
(camp_id, user_id )
values
($1, $2)
returning *;