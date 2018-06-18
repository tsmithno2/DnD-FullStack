select p.party_id, p.camp_id 
from parties p 
join campaigns camp on camp.camp_id = p.camp_id
join users u on camp.user_id = u.user_id
where u.user_id = $1;

