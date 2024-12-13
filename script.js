// Custom Cursor Logic
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');

  // Calculate mouse movement speed
  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Adjust cursor size and position
  cursor.style.width = `${50 + speed / 2}px`;
  cursor.style.height = `${50 - speed / 2}px`;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('scroll', () => {
  const cursor = document.getElementById('cursor');
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;

  // Adjust cursor position during scrolling
  cursor.style.transform = `translate(${scrollLeft}px, ${scrollTop}px)`;
});

// Tab Navigation Logic
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  document.getElementById(tabname).classList.add("active-tab");
  document
    .querySelector(`.tab-links[onclick="opentab('${tabname}')"]`)
    .classList.add("active-link");
}

// Sidebar Menu Logic
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// Page Load Animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
