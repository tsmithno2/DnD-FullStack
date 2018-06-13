insert into quests 
(camp_id, user_id, quest_name, quest_description, quest_picture, quest_obtained, quest_completed)
values
($1, $2, $3, $4, $5, $6, $7)
returning *;