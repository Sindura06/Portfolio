'use strict';

// Sidebar Toggle for Mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { 
    sidebar.classList.toggle("active");
});

// Navigation functionality to toggle between tabs
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
        // Remove active class from all links and pages
        navigationLinks.forEach(nav => nav.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));

        // Add active class to the clicked link and its corresponding page
        this.classList.add("active");
        pages[index].classList.add("active");

        // Scroll to the top
        window.scrollTo(0, 0);
    });
});

// Social Image Hover Effect
document.querySelectorAll('.social-image').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.src = this.getAttribute('data-hover');
    });
  
    item.addEventListener('mouseout', function() {
        this.src = this.getAttribute('data-src').replace('-white', '');
    });
});

// Modal Functionality for Testimonials
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

function toggleModal() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        toggleModal();
    });
});

// Custom Select Dropdown for Portfolio Filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterBtn[0];

select.addEventListener("click", function () { 
    this.classList.toggle("active");
});

selectItems.forEach(item => {
    item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        //selectValue.innerText = selectedValue;
        select.classList.toggle("active");
        filterFunc(selectedValue);
    });
});

function filterFunc(selectedValue) {
    filterItems.forEach(item => {
        const categories = item.dataset.category.split(',').map(cat => cat.trim().toLowerCase());
        if (selectedValue === "all" || categories.includes(selectedValue)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        //selectValue.innerText = selectedValue;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

// Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
    input.addEventListener("input", function () {
        formBtn.disabled = !form.checkValidity();
    });
});
// Experience Modal Logic
const experienceItems = document.querySelectorAll("[data-experience-item]");
const experienceModal = document.getElementById("experience-modal");
const experienceModalTitle = document.getElementById("experience-modal-title");
const experienceModalDescription = document.getElementById("experience-modal-description");

function closeExperienceModal() {
  experienceModal.style.display = "none";
}

experienceItems.forEach(item => {
  item.addEventListener("click", function () {
    const title = this.querySelector("[data-experience-title]").innerText;
    const description = this.querySelector("[data-experience-detail]").innerText;
    experienceModalTitle.innerText = title;
    experienceModalDescription.innerText = description;
    experienceModal.style.display = "block";
  });
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  if (event.target === experienceModal) {
    closeExperienceModal();
  }
});
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
// Education Modal Logic
const eduTriggers = document.querySelectorAll("[data-modal-trigger]");

eduTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const modalId = trigger.getAttribute("data-modal-trigger");
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.add("active");
      document.querySelector("[data-overlay]").classList.add("active");
      document.querySelector("[data-modal-container]").classList.add("active");
    }
  });
});

document.querySelectorAll("[data-modal-close-btn], [data-overlay]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".testimonials-modal").forEach(modal => modal.classList.remove("active"));
    document.querySelector("[data-overlay]").classList.remove("active");
    document.querySelector("[data-modal-container]").classList.remove("active");
  });
});



