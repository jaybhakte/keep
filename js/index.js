console.log("Project 1");

//select add button
let addBtn = document.getElementById("addBtn");
//apply click event
addBtn.addEventListener("click", addNotes);
//addnotes function
function addNotes() {
    //title and note element selected
    let title = document.getElementById("title");
    let note = document.getElementById("note");

    let html = document.getElementById("notes");

    html.innerHTML += `
    <div class="col ml-3 mb-3">
    <div class="card  h-100" style="width: 18rem;">
    <div class="card-body ">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">${note.value}</p>
      <a href="#" class="btn btn-primary">Delete</a>
    </div>
  </div>
  </div>
  `
}

