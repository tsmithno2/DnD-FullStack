select * from characters
where camp_id = $1
and char_npc = true
and party_id is null;