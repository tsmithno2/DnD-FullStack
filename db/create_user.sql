insert into users 
(username, user_avatar, auth_id)
values
($1, $2, $3)
returning *;