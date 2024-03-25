// Define an interface for a Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students using the Student interface
const student1: Student = {
  firstName: 'Adam',
  lastName: 'Sanusi',
  age: 21,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Tunde',
  lastName: 'Sanusi',
  age: 20,
  location: 'Nigeria',
};

// Create an array of students
const studentsList: Array<Student> = [student1, student2];

// Function to render a table of students
function renderStudentTable(): void {
  // Create a new table element
  const table = document.createElement('table');

  // Insert a row for the table headers
  const headerRow = table.insertRow();
  headerRow.innerHTML = '<th>First Name</th><th>Location</th>';

  // For each student in the studentsList array
  studentsList.forEach((student: Student) => {
    // Insert a new row in the table
    const row = table.insertRow();

    // Insert a cell for the student's first name and location
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    // Set the text content of the cells to the student's first name and location
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the function to render the table
renderStudentTable();