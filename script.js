// 
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// pulling from local storage

function showNotes() { 
    notesContainer.innerHTML = localStorage.getItem('notes');
}

// for adding to local storage

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// create notes button functionality 

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// delete button functionality

notesContainer.addEventListener('click', function(e) { 
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        // wait what does this do then? 
        // OHH I think this assumes the user would have just added some content to the input box for a note.  So it updates local storage to hold the note
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

// so the return button works inside the input box
document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
                document.execCommand("insertLineBreak");
                event.preventDefault();
            }
        })
       
showNotes()