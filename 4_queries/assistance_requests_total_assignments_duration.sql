SELECT assignments.day AS day, count(assignments) AS number_of_assignments, SUM(duration) AS duration
FROM assignments
GROUP BY assignments.day
ORDER BY day;