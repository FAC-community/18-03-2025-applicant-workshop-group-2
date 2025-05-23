// import...
const darkbutton = document.getElementById('dark');
const darkbutton2 = document.getElementById("section1");
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// });


darkbutton.addEventListener('click', () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  //document.getElementById("section1").style.backgroundColor="black";
  document.getElementById("section1").style.background="black";
})

//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 

// Toggle hidden information
const toggleButton = document.getElementById('btn-toggle1');
const hiddenInfo = document.querySelector('.hidden-info');

toggleButton.addEventListener('click', () => {
    hiddenInfo.classList.toggle('hidden-info');
});

// Change background color of the box
const colorButton = document.getElementById('btn-change-color');
const colorBox = document.getElementById('color-box');

colorButton.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
    
});

// Form submission handling
const form = document.getElementById('feedback-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    formResponse.textContent = `Thank you, ${name}, for your feedback: "${feedback}"`;
    form.reset();
});

// Function to render the items on data-container
function renderItems(items) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content
  
    items.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${item}</p>`;
      container.appendChild(div);
    });
  }
//new

  // Creating a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.setAttribute('id','testId');
// Setting the text content of the new paragraph
newParagraph.textContent = 'I hate GitHub.';

// Appending the new paragraph to the body of the document
document.body.appendChild(newParagraph)



const hideButton = document.getElementById('hide-btn')
const showButton = document.getElementById('show-btn')

hideButton.addEventListener('click', function hideSection2(){
  const section2 = document.getElementById('section2');
  section2.style.display = 'none';
 }
);

showButton.addEventListener('click', function showSection2(){
  const section2 = document.getElementById('section2');
  section2.style.display = '';
 }
);

/* IDEAS FOR ADDITIONAL INTERACTIONS

1. Add functionality to highlight the navigation link of the current section as the user scrolls.
2. Implement a light/dark mode toggle using CSS root variables.
3. Create a dynamic list where users can add and remove items.
4. Add validation to the feedback form to ensure name and feedback are not empty.
5. Use localStorage to save the user's name for personalized greetings.
6. Animate the color change of the box with a smooth transition.
7. Display a live character counter for the feedback textarea.
8. Implement drag-and-drop functionality for rearranging items in a list.
9. Add a countdown timer to a section, resetting after it reaches zero.
10. Fetch and display data from a public API (e.g., random jokes or quotes).

*/

// Call the render function on page load or when needed
renderItems(dataItems);
;