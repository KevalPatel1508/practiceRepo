const students = [
  {name:"keval", marks:98, class:12, address:"patan"},
  {name:"meet", marks:45, class:12, address:"jamnagar"},
  {name:"rushi", marks:67, class:12, address:"navasari"},
  {name:"jenil", marks:80, class:12, address:"junagadh"},
  {name:"dax", marks:70, class:12, address:"patan"},
  {name:"ravi", marks:55, class:12, address:"baroda"},
  {name:"nirav", marks:33, class:12, address:"jamnagar"},
  {name:"swayam", marks:62, class:12, address:"ahmedabad"},
  {name:"viren", marks:52, class:12, address:"ahmedabad"},
  {name:"jiya", marks:75, class:11, address:"mahesana"},
  {name:"niyati", marks:80, class:11, address:"patan"},
  {name:"het", marks:77, class:11, address:"patan"},
  {name:"bhavy", marks:49, class:12, address:"mahesana"},
  {name:"hardika", marks:63, class:12, address:"jamnagar"},
  {name:"riya", marks:91, class:12, address:"ahmedabad"},
  {name:"aanshi", marks:84, class:12, address:"ahmedabad"},
  {name:"meet", marks:50, class:12, address:"surat"},
  {name:"kavya", marks:61, class:12, address:"surat"},
  {name:"dev", marks:60, class:11, address:"patan"},

]

const container = document.getElementById("student_data");

students.forEach((student) => {
  const card = document.createElement("div");
  card.classList.add("student-card");

  card.innerHTML = `
        <h2>Name:${student.name}</h2>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p>Address: ${student.address}</p>
    `;

    // Add card to HTML container
    container.appendChild(card);

})