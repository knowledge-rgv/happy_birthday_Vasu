// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Age Calculator (index.html)
const birthday = new Date("2001-03-10"); // Replace with Menati's birthday
const ageDisplay = document.getElementById("age");

if (ageDisplay) {
  const calculateAge = () => {
    const now = new Date();
    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();
    let hours = now.getHours() - birthday.getHours();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }

    ageDisplay.innerHTML = `
      <p>${years} Years</p>
      <p>${months} Months</p>
      <p>${days} Days</p>
      <p>${hours} Hours</p>
    `;
  };

  calculateAge();
  setInterval(calculateAge, 1000 * 60 * 60); // Update every hour
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});