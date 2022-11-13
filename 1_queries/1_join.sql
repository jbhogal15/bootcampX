SELECT students.name as student_name, email, cohorts.name as cohrot_name
FROM students JOIN cohorts ON cohort_id = cohorts.id;