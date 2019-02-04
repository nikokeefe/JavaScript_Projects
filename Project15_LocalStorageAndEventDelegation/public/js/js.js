const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkAll = document.querySelector('.check-all');
const uncheckAll = document.querySelector('.uncheck-all');
const deleteAll = document.querySelector('.delete-all');
const ul = document.querySelector('ul');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    
    e.preventDefault();
    
    const text = (this.querySelector('[name=item')).value;
    const item = {
        text, // ES6 same as 'text: text'
        done: false
    };
    
    items.push(item);
    populateList(items, itemsList)
    
    localStorage.setItem('items', JSON.stringify(items));
    
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join(''); // joins it all together for html string
}

function toggleDone(e) {

    if (!e.target.matches('input')) return; //skip this unless its an input
    const element = e.target; //get the input
    const index = element.dataset.index; // get the data index
    items[index].done = !items[index].done; // set to the opposite of what it currently is
    
    localStorage.setItem('items', JSON.stringify(items)); //save it 
    populateList(items, itemsList); // display it
}


function checkAllBoxes() {
    
    items.forEach(element => {
        element.done = true;
      });
      
      populateList(items, itemsList);

}

function uncheckAllBoxes() {

    items.forEach(element => {
      element.done = false;
    });
    
    populateList(items, itemsList);
    
}

function deleteAllPlates() {

    localStorage.clear(); 

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    items = [];

    console.log(items)
}



addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

checkAll.addEventListener('click', checkAllBoxes);

uncheckAll.addEventListener('click', uncheckAllBoxes);

deleteAll.addEventListener('click', deleteAllPlates);

populateList(items, itemsList);
