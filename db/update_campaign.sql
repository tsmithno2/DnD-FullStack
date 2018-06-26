update campaigns
set camp_name =$2,
    camp_desc1=$3,
    camp_desc2 =$4,
    camp_picture = $5
where camp_id = $1;