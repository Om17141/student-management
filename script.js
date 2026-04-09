let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  if(name === "" || age === "" || course === "") {
    alert("Please fill all fields");
    return;
  }

  students.push({name, age, course});
  displayStudents();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
}

function displayStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>
          <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}