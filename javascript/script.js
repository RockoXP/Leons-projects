// JavaScript to open and close the modal
function openModal(projectNumber) 
{
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');

    // Set the image source dynamically (adjust as needed)
    modalImage.src = `Images/Project image ${projectNumber}.jpg`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
}

let currentSlide = 0;

function showSlide(index) 
{
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Hide all slides
    slides.forEach(slide => (slide.style.display = 'none'));

    // Calculate the new slide index (looping logic)
    currentSlide = (index + totalSlides) % totalSlides;

    // Show the current slide
    slides[currentSlide].style.display = 'block';
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the first slide as visible
showSlide(0);

// Open modal and show the first slide
function openModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'flex';
    showSlide(0); 
}

// Close modal
function closeModal() 
{
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
}

/*============================================= typing animation =======================*/
var typed = new Typed(".typing",{
    strings:["","Junior Web Developer", "junior Data Analyst", "Junior Data Scientist"],
    typeSpeed:65,
    Backspeed:50,
    loop:true
})