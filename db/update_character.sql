update characters
set char_name= $2,
    char_picture= $3,
    char_alignment= $4,
    char_deity= $5,
    char_strength= $6,
    char_dexterity= $7,
    char_constitution= $8,
    char_intelligence= $9,
    char_wisdom= $10,
    char_charisma= $11,
    char_inventory= $12,
    char_dm_notes= $13
where char_id= $1;
      