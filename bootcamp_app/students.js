const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let input = process.argv;


pool.query(`
SELECT students.id AS id, students.name AS name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${input[2]}%'
LIMIT ${input[3]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`)
  })
})
.catch(err => console.error('query error', err.stack));