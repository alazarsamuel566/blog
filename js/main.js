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
