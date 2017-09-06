SELECT count(*)
FROM users
JOIN vehicles
ON users.id = vehicles.owner_id
WHERE vehicles.owner_id = $1
GROUP BY users.name;