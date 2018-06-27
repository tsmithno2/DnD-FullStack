update quests
set quest_name=$2, 
    quest_description=$3, 
    quest_picture=$4,
    quest_obtained=$5,
    quest_completed=$6
where quest_id=$1;
