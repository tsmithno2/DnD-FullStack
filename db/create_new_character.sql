insert into chracters 
(party_id, camp_id, user_id, char_npc, char_pc, char_trouble_list, char_name, char_picture, char_alignment, char_deity, char_strength, char_dexterity, char_constitution, char_intelligence, char_wisdom, char_charisma, char_inventory, char_dm_notes)
values
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
returning *;