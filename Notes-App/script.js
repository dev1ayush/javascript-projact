
const createBtn = document.getElementById('create');
const noteContainer = document.querySelector('.container');

window.onload = loadfromLs();

function loadfromLs() {
    const notes = JSON.parse(localStorage.getItem('notes'));
   if (notes) {
    notes.forEach(note => {
        createNotes(note);
    });
  }
}

function createNotes(note) {
        const newEl = document.createElement('div');
        newEl.classList.add('notes');
        noteContainer.appendChild(newEl);
    if (typeof note === 'string' ) {
        newEl.innerHTML = `
    
        <div class="header">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        <div class="notes_text">
            <p class="para">${note}</p>
            <textarea>${note}</textarea>
        </div>

    `;
    } else {
        newEl.innerHTML = `
    
        <div class="header">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        <div class="notes_text">
            <p class="para"></p>
            <textarea></textarea>
        </div>
    
    `;
    }
        const deletBtn = newEl.querySelector('.fa-trash');
        const para = newEl.querySelector('.para');
        const textArea = newEl.querySelector('textarea');
        const editBtn = newEl.querySelector('.fa-pen-to-square');
        editBtn.addEventListener('click', () => {
            textArea.classList.toggle('active');
            const textAreaValue = textArea.value;
            para.innerHTML = textAreaValue;
            updateLs();
        });

        deletBtn.addEventListener('click', () => {
            newEl.remove();
            updateLs();
        });
    
    
    updateLs();
}

function updateLs() {
    const notesEl = document.querySelectorAll('.para');
    const notes = [];
    notesEl.forEach(note => {
        if (note.innerHTML != "") {
            notes.push(note.innerHTML)
        }
    });

    localStorage.setItem('notes', JSON.stringify(notes));
   
}



createBtn.addEventListener('click', createNotes);

