SELECT vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id, users.name
FROM vehicles
JOIN users
ON users.id=vehicles.owner_id
WHERE year > 1999
ORDER BY vehicles.year DESC;