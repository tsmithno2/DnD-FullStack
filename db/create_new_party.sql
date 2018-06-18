insert into parties
(camp_id)
values
($1)
returning *;