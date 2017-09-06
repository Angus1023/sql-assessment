UPDATE vehicles
SET owner_id = null
WHERE id=$2
RETURNING *;