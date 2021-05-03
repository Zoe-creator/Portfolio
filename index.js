const projects = [
  {
    title: "Collection-Forum",
    livingSite: "https://collection-forum.netlify.app/",
    img: "./asset/collections.png",
    github: "https://github.com/Zoe-creator/collections",
    description: "It's a place allowing users to share their collections. It allows users to create accounts and post multiple posts with pictures, details, comments, and lets users 'like' other users posts!"
  },
  {
    title: "Reventa",
    livingSite: "https://reventa.netlify.app/",
    img: "./asset/furniture.png",
    github: "https://github.com/ginestah/reventa",
    description: "Community furniture re-sale app allows only sign-in users to add posts, but only allows to edit/delete posts that belongs to them. Each user has own unique wishlist that they can add/remove posts from the wishlist. Guests are limited to see posts and post details(not inlclude seller's contact info) only."
  },
  {
    title: "Cultural-Food",
    livingSite: "https://cultural-food.netlify.app/",
    img: "./asset/Cultural-Food.png",
    github: "https://github.com/Zoe-creator/Cultural-Food",
    description: "This website was developed utilized React on front-end with an AirTable API as a database, allowing any user to post/edit/delete food, it shows the details of the food includes its nutrient facts"
  },
  {
    title: "Calendar",
    livingSite: "https://zoe-creator.github.io/Calendar/",
    img: "./asset/Calendar.png",
    github: "https://github.com/Zoe-creator/Calendar",
    description: "This calendar displays all holidays and its description on corresponding days with external API."
  }
]
projects.forEach(project => {
  let projectContainer = document.querySelector(".projects-display")
  let eachProject = `<div class="project">
  <a href=${project.livingSite}  target="_blank">
  <img src=${project.img} alt=${project.title} > </a>
  <div class="project-description">
  <a href=${project.github} target="_blank"><button>Github</button></a>
  <p>${project.description}</p>
  </div>
  </div>`
  projectContainer.insertAdjacentHTML('beforeend', eachProject)
});