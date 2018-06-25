select * from quests
where camp_id = $1
and quest_obtained = false;