const aboutHumans = document.querySelector(".aboutHumans");
const aboutInfo = document.querySelector(".aboutInfo");

aboutHumans.addEventListener("mouseover", () => {
  aboutInfo.classList.toggle("hidden");
});

aboutInfo.addEventListener("mouseout", () => {
  aboutInfo.classList.toggle("hidden");
});
