function myfuncation() {
    console.log("I was clicked right now");
}

function myfuncation() {
    console.log("oh I was clicked wow my js is runing Ahamdulillah!");
}


const box2 = document.getElementById('box-2');

box2.addEventListener('mousemove', (e) => {
    console.log('Click on box-2', e);
});

const input = document.getElementById('input');

input.addEventListener('keypress', (e) => {
    console.log('click on input', e), true
})

const container = document.getElementById('container');

input.addEventListener('keypress', (e) => {
    console.log('click on container', e), true
})

const newparagraph = document.createElement('p')
newparagraph.innerText = "this is para.this is parathis is parathis is parathis is parathis is parathis is parathis is parathis is parathis is parathis is parathis is para";

const babloo = document.getElementById('main_content');
main_content.appendChild(newparagraph);

const changeContent = document.getElementById('box-2')
changeContent.textContent = "this is new content yahoo!"

const changeStyle = document.getElementById('box-3');
changeStyle.style.backgroundColor = 'gray';
changeStyle.style.fontSize = '40px';


const addElement = document.querySelector('p');

const createElement = document.createElement('span');
createElement.textContent = 'Add New Span yahoo!';

addElement.appendChild(createElement);

//17/ 11 // 2023

const addNewOne = document.querySelector('h3');

const createNew =document.createElement('span');
createNew.textContent = 'add that in span';

addNewOne.appendChild(createNew);

const newButton = document.createElement('button');
newButton.innerText = "button-1";

const body = document.querySelector('body');
body.appendChild(newButton);

const classRemove = document.getElementById('box-5');
classRemove.classList.remove('boxing');

const classAdd = document.querySelector('#box-6 img');
classAdd.src = './image/blog-2.jpg'
classAdd.alt = 'hacker image'

const newText = document.getElementById('myParagraph');
newText.textContent = 'The is a new Add text Added Yahoo!';

const removeElement = document.querySelector('.heading-remome');

if (removeElement) {
  removeElement.parentNode.removeChild(removeElement);
} else {
  console.error('Element with class "heading-remome" not found.');
}

const buttonContent = document.getElementById('button-para')
const chagePara = document.getElementById('event-para')

buttonContent.addEventListener( 'click', function(){
    chagePara.textContent = "Wow this Content is change"
});

const hideContent = document.getElementById('button-para1')
const hidePara = document.getElementById('event-para1');

hideContent.addEventListener('click', function(){
    hidePara.style.display = 'none';
});

const buttonChange = document.getElementById('change-button');

if (buttonChange) {
    buttonChange.addEventListener('click', function() {
        buttonChange.textContent = 'This button was clicked';
    });
} else {
    console.error("Element with ID 'change-button' not found");
}

function addRow() {
    const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    for (let i = 0; i < 3; i++) {
      const newCell = newRow.insertCell();
      const newText = document.createTextNode(`Row ${table.rows.length}, Cell ${i + 1}`);
      newCell.appendChild(newText);
    }
  }

  const listEvent = document.getElementById('event-list');

  listEvent.addEventListener('click', function(){
    const target = event.target;
    if (target.tagName === 'LI') {
        console.log('Click on item', target.textContent)
    }
  });

  document.addEventListener('DOMContentLoaded', function(){

  });

  document.getElementById('myform-Event').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    console.log("Name", name);
    console.log("Email", email);
    console.log("Age", age);

    document.getElementById('name').value = "John Doe";
    document.getElementById('email').value = "johndoe@example.com";
    document.getElementById('age').value = "30";

    if (name.trim() === '') {
        alert('Please enter a name.');
    }
});

//erorr Hadling

//1.Validate user input

function validateInput(event) {
    event.preventDefault();
    const validateInput = document.getElementById('nameinput').value;

    try {
        const validateNumber = validateInput(inputValue);
        console.log('Valid Number', validateNumber)
    } catch(erorr) {
        console.error(erorr.message);
    }

}

//2.Handl

  




