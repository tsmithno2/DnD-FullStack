delete from characters
where camp_id = $1;

delete from parties 
where camp_id = $1;

-- delete from quests
-- where camp_id = $1;

delete from campaigns
where camp_id = $1;

select * 
from campaigns
where user_id = $2;
