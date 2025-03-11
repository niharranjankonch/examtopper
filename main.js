// Swipe functionality for testimonials
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonials = document.querySelector('.testimonials');

let isDragging = false;
let startX, scrollLeft;

testimonialsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - testimonialsContainer.offsetLeft;
  scrollLeft = testimonialsContainer.scrollLeft;
});

testimonialsContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

testimonialsContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

testimonialsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - testimonialsContainer.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  testimonialsContainer.scrollLeft = scrollLeft - walk;
});

// Timer Functionality
let timeLeft = 5400; // 1 hour 30 minutes in seconds
const timer = document.getElementById('time');

function updateTimer() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (timeLeft === 0) {
    clearInterval(interval);
    alert('Time is up!');
  } else {
    timeLeft--;
  }
}

const interval = setInterval(updateTimer, 1000);

// Show Solution Dropdown
const solutionButton = document.querySelector('.solution-button');
const solutionDropdown = document.querySelector('.solution-dropdown');

solutionButton.addEventListener('click', () => {
  solutionDropdown.style.display = solutionDropdown.style.display === 'block' ? 'none' : 'block';
});

// Question Navigation
const questionNumbers = document.querySelectorAll('.question-numbers span');
questionNumbers.forEach((number) => {
  number.addEventListener('click', () => {
    alert(`Navigate to Question ${number.textContent}`);
  });
});

// Timer Functionality
let timeLeft = 5400; // 1 hour 30 minutes in seconds
const timer = document.getElementById('time');


const interval = setInterval(updateTimer, 1000);

// Show Solution Dropdown
const solutionButtons = document.querySelectorAll('.solution-button');
solutionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dropdown = button.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});


solutionButton.addEventListener('click', () => {
  solutionDropdown.style.display = solutionDropdown.style.display === 'block' ? 'none' : 'block';
});

// Question Navigation
const questionNumbers = document.querySelectorAll('.question-numbers span');
questionNumbers.forEach((number) => {
  number.addEventListener('click', () => {
    alert(`Navigate to Question ${number.textContent}`);
  });
});

// Next, Save, and Submit Buttons
const nextButton = document.querySelector('.next-button');
const saveNextButton = document.querySelector('.save-next-button');
const submitButton = document.querySelector('.submit-button');

nextButton.addEventListener('click', () => {
  alert('Next Question');
});

saveNextButton.addEventListener('click', () => {
  alert('Answer Saved and Moving to Next Question');
});

submitButton.addEventListener('click', () => {
  alert('Exam Submitted');
});

const isPremium = true; // Change this based on user’s plan

document.querySelectorAll('.paper-button').forEach(button => {
    if (isPremium) {
        button.classList.remove('locked');
        button.classList.add('unlocked');
        button.addEventListener('click', () => {
            alert('Starting Paper-wise Practice!');
        });
    }
});
