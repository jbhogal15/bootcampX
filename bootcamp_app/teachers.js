const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
 
let input = process.argv;

const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
JOIN assistance_requests ON students.id = assistance_requests.student_id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`;

const cohortName = input[2];
const values = [`%${cohortName}%`];

pool.query(queryString, values) 
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));


// pool.query(`
// SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
// FROM cohorts
// JOIN students ON cohorts.id = students.cohort_id
// JOIN assistance_requests ON students.id = assistance_requests.student_id
// JOIN teachers ON assistance_requests.teacher_id = teachers.id
// WHERE cohorts.name LIKE '%${input[2]}%'
// ORDER BY teachers.name;
// `)
// .then(res => {
//   res.rows.forEach(row => {
//     console.log(`${row.cohort}: ${row.teacher}`);
//   })
// })
// .catch(err => console.error('query error', err.stack));

// pool.query(`
// SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
// FROM teachers
// JOIN assistance_requests ON teacher_id = teachers.id
// JOIN students ON student_id = students.id
// JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
// ORDER BY teacher;
// `)
// .then(res => {
//   console.log(res.rows);
// });