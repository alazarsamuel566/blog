// Mobile menu button
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the menu when a link is clicked
var allLinks = navLinks.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// ========== Blog posts data ==========
var posts = [
  {
    title: "How I Built My First Blog",
    tag: "Web",
    date: "October 12, 2026",
    image: "assets/post1.svg",
    text: "A simple story about how I started writing online and what I learned on the way."
  },
  {
    title: "5 Easy CSS Tricks for Beginners",
    tag: "CSS",
    date: "October 5, 2026",
    image: "assets/post2.svg",
    text: "Small CSS tips that make your pages look nicer without any extra hard work."
  },
  {
    title: "Understanding Flexbox in 10 Minutes",
    tag: "CSS",
    date: "September 28, 2026",
    image: "assets/post3.svg",
    text: "Flexbox is the easiest way to line things up. Here is a short and friendly guide."
  },
  {
    title: "JavaScript Tips I Use Every Day",
    tag: "JavaScript",
    date: "September 20, 2026",
    image: "assets/post4.svg",
    text: "A few small JavaScript habits that save me time and make my code easier to read."
  },
  {
    title: "Why Simple Design Works Better",
    tag: "Design",
    date: "September 11, 2026",
    image: "assets/post5.svg",
    text: "Clean and simple pages are easier to use, easier to build and easier to read."
  },
  {
    title: "Notes From My First Year of Writing",
    tag: "Life",
    date: "September 2, 2026",
    image: "assets/post6.svg",
    text: "Some things I learned after writing on this blog for one whole year."
  }
];

// ========== Show the posts ==========
var postGrid = document.getElementById("postGrid");

function showPosts() {
  var html = "";

  for (var i = 0; i < posts.length; i++) {
    html +=
      '<div class="post-card">' +
      '<img src="' + posts[i].image + '" alt="' + posts[i].title + '">' +
      '<div class="post-body">' +
      '<span class="post-tag">' + posts[i].tag + "</span>" +
      "<h3>" + posts[i].title + "</h3>" +
      "<p>" + posts[i].text + "</p>" +
      '<p class="post-date">' + posts[i].date + "</p>" +
      '<a href="#posts" class="post-link">Read more &rarr;</a>' +
      "</div>" +
      "</div>";
  }

  postGrid.innerHTML = html;
}

showPosts();

// ========== Gallery images data ==========
var gallery = [
  { file: "assets/gal1.svg", name: "Mountain Lake", category: "nature" },
  { file: "assets/gal2.svg", name: "City Lights", category: "city" },
  { file: "assets/gal3.svg", name: "Old Friends", category: "people" },
  { file: "assets/gal4.svg", name: "Green Forest", category: "nature" },
  { file: "assets/gal5.svg", name: "Old Street", category: "city" },
  { file: "assets/gal6.svg", name: "Coffee Break", category: "people" },
  { file: "assets/gal7.svg", name: "Desert Road", category: "nature" },
  { file: "assets/gal8.svg", name: "Night Bridge", category: "city" },
  { file: "assets/gal9.svg", name: "Quiet Morning", category: "people" }
];

// ========== Show the gallery ==========
var galleryGrid = document.getElementById("galleryGrid");

function showGallery() {
  var html = "";

  for (var i = 0; i < gallery.length; i++) {
    html +=
      '<div class="gallery-item" data-category="' + gallery[i].category + '">' +
      '<img src="' + gallery[i].file + '" alt="' + gallery[i].name + '">' +
      '<div class="gallery-caption">' + gallery[i].name + "</div>" +
      "</div>";
  }

  galleryGrid.innerHTML = html;
}

showGallery();

// ========== Filter buttons ==========
var filterButtons = document.getElementById("filterButtons");
var filterButtonsList = filterButtons.querySelectorAll(".filter-btn");
var galleryItems = galleryGrid.querySelectorAll(".gallery-item");

filterButtonsList.forEach(function (button) {
  button.addEventListener("click", function () {
    // remove the active class from every button
    filterButtonsList.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    var wanted = button.getAttribute("data-filter");

    // hide the pictures that do not match
    galleryItems.forEach(function (item) {
      if (wanted === "all" || item.getAttribute("data-category") === wanted) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

// ========== Lightbox ==========
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxCaption = document.getElementById("lightboxCaption");
var lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var image = item.querySelector("img");
    var name = item.querySelector(".gallery-caption");

    lightboxImg.src = image.src;
    lightboxCaption.textContent = name.textContent;
    lightbox.classList.add("open");
  });
});

// close the lightbox
lightboxClose.addEventListener("click", function () {
  lightbox.classList.remove("open");
});

// click outside the picture to close it
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.classList.remove("open");
  }
});

// press escape key to close it
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    lightbox.classList.remove("open");
  }
});

// ========== Contact form check ==========
var contactForm = document.getElementById("contactForm");
var formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var subjectError = document.getElementById("subjectError");
  var messageError = document.getElementById("messageError");

  var isOk = true;

  // check the name
  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    isOk = false;
  } else {
    nameError.textContent = "";
  }

  // check the email
  if (email.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    isOk = false;
  } else if (email.value.indexOf("@") === -1) {
    emailError.textContent = "Please enter a valid email.";
    isOk = false;
  } else {
    emailError.textContent = "";
  }

  // check the subject
  if (subject.value.trim() === "") {
    subjectError.textContent = "Please enter a subject.";
    isOk = false;
  } else {
    subjectError.textContent = "";
  }

  // check the message
  if (message.value.trim() === "") {
    messageError.textContent = "Please write a message.";
    isOk = false;
  } else {
    messageError.textContent = "";
  }

  if (isOk) {
    formMsg.textContent = "Thanks " + name.value.trim() + "! Your message has been sent.";
    contactForm.reset();
  } else {
    formMsg.textContent = "";
  }
});
