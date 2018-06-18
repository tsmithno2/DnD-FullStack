select *
from characters char
join parties p on char.party_id = p.party_id
join campaigns camp on camp.camp_id = p.camp_id
where camp.camp_id = $1;
