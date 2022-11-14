SELECT AVG(cohort_assistance_request_time.total_duration) AS average_total_duration
FROM (
  SELECT cohorts.name AS name, SUM(completed_at - started_at) AS total_duration
FROM cohorts
JOIN students ON cohorts.id = cohort_id 
JOIN assistance_requests ON students.id = student_id 
GROUP BY cohorts.name
ORDER BY total_duration
) cohort_assistance_request_time;