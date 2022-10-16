SELECT name, email, id, cohort_id
FROM students
WHERE phone is NULL 
AND email NOT LIKE '%gmail.com';