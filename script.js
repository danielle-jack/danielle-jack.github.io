// Get the modal elements
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

// Function to open the modal
function openModal(card) {
    // 1. Get data from the clicked card
    const title = card.getAttribute("data-title");
    const image = card.getAttribute("data-image");
    const tech = card.getAttribute("data-tech");
    const desc = card.getAttribute("data-desc");
    const link = card.getAttribute("data-link");

    // 2. Populate the modal with that data
    modalTitle.innerText = title;
    modalTech.innerText = tech;
    modalDesc.innerText = desc;
    modalLink.href = link;
    
    // Check if an image is provided, otherwise use a placeholder color
    if (image && image !== "") {
        modalImg.src = image;
        modalImg.style.display = "block";
    } else {
        // If no image, hide the image tag or show a placeholder color
        modalImg.style.display = "none"; 
    }

    // 3. Show the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside the white content box
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// --- Scroll Effect Logic ---
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // If scrolled down more than 50px, add the outline class
        navbar.classList.add('scrolled');
    } else {
        // If back at the top, remove the outline class
        navbar.classList.remove('scrolled');
    }
});