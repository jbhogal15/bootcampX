SELECT students.name as student_name, email, cohorts.name as cohrot_name
FROM students FULL OUTER JOIN cohorts ON cohort_id = cohorts.id,
