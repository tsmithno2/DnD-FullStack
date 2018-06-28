update characters
set party_id=$2,
    char_name= $3,
    char_picture= $4,
    char_alignment= $5,
    char_deity= $6,
    char_strength= $7,
    char_dexterity= $8,
    char_constitution= $9,
    char_intelligence= $10,
    char_wisdom= $11,
    char_charisma= $12,
    char_inventory= $13,
    char_dm_notes= $14
where char_id= $1;
   
      
      
      