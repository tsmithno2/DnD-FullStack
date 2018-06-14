SELECT *
FROM campaigns 
where user_id = ($1)
order by camp_id;