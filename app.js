const iconoNav = document.getElementById("icono-nav");
const nav = document.getElementById("nav");

iconoNav.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

const posts = document.querySelectorAll(".post");

function checkPosts() {
  const triggerBottom = window.innerHeight * 0.85; // ajustar el punto de disparo

  posts.forEach((post) => {
    const postTop = post.getBoundingClientRect().top;

    if (postTop < triggerBottom) {
      post.classList.add("visible");
    } else {
      post.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", checkPosts);
checkPosts(); // para ejecutar también al cargar la página
