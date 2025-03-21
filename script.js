document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my portfolio website!");
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide "Back to Top" button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on page load
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formStatus = document.getElementById("formStatus");

    if (name && email && message) {
        formStatus.textContent = "✅ Message sent successfully!";
        formStatus.style.color = "green";
        this.reset(); // Clear the form
    } else {
        formStatus.textContent = "❌ Please fill out all fields!";
        formStatus.style.color = "red";
    }
});
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Check user preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function changeTestimonial(step) {
    testimonials[currentTestimonial].classList.remove("active");
    currentTestimonial = (currentTestimonial + step + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add("active");
}

// Auto-slide every 5 seconds
setInterval(() => changeTestimonial(1), 5000);
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize on page load
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseElement = document.getElementById("formResponse");

    // Simulating form submission (you can replace this with a backend service)
    setTimeout(() => {
        responseElement.textContent = `Thank you, ${name}! Your message has been sent.`;
        responseElement.style.color = "green";

        // Reset form
        document.getElementById("contactForm").reset();
    }, 1000);
});
const blogPosts = [
    { title: "My Journey into Web Development", content: "I started learning web development with JavaScript, and it's been an amazing experience!" },
    { title: "Understanding JavaScript Closures", content: "Closures can be tricky, but they are a powerful feature of JavaScript. Here's how they work..." },
    { title: "Tips for Writing Clean Code", content: "Clean code is not just about functionality, but also readability and maintainability. Here are my top tips..." }
];

function loadBlogPosts() {
    const blogContainer = document.getElementById("blogPosts");
    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(postElement);
    });
}

document.addEventListener("DOMContentLoaded", loadBlogPosts);
const projects = [
    { title: "Portfolio Website", image: "portfolio.png", link: "https://github.com/yourusername/portfolio" },
    { title: "Task Manager App", image: "task-manager.png", link: "https://github.com/yourusername/task-manager" },
    { title: "Weather App", image: "weather-app.png", link: "https://github.com/yourusername/weather-app" }
];

function loadProjects() {
    const projectContainer = document.getElementById("projects");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectElement);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);
