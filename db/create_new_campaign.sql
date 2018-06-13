insert into campaigns 
(user_id, camp_name, camp_desc1, camp_desc2, camp_picture)
values
($1, $2, $3, $4, $5)
returning *;