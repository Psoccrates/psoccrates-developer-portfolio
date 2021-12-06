// Open & closing modal for contact form
const containerModal = document.getElementById('form-modal');
const openContactForm = document.getElementById('open-contact-page');
const closeModalAbout = document.getElementById('close-modal--about');
const closeModalProjects = document.getElementById('close-modal--projects');
const closeModalHome = document.getElementById('close-modal--home');

// Listen for clicks opening & closing
openContactForm.addEventListener('click', openModal);
closeModalAbout.addEventListener('click', closeModal);
closeModalProjects.addEventListener('click', closeModal);
closeModalHome.addEventListener('click', closeModal);
window.addEventListener('click', clickedOutside);


// Modal functionality
function openModal() {
    containerModal.style.display ='block';

}

function closeModal() {
    containerModal.style.display = 'none';
}

function clickedOutside(a) {
    if(a.target === containerModal) {
       closeModal();
    }
}