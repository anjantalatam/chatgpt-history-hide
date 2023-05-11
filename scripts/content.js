// function init() {
//   const navContainer = document.querySelector("#__next > div > div");

//   if (navContainer) {
//     // nav.style.display = "block";
//     // navContainer.style.background = "pink";

//     const arrow = document.createElement("div");
//     arrow.textContent = "<-";
//     arrow.classList.add("left-arrow");
//     navContainer.appendChild(arrow);
//   }
// }

// init();
const navContainer = document.querySelector("#__next > div > div");
chrome.storage.local.get(["isHistoryVisible"], (res) => {
  const isVisible = res?.isHistoryVisible ?? true;

  if (isVisible) {
    navContainer.style.display = "block";
  } else {
    navContainer.style.display = "none";
  }
  // } else {
  //   statusElement.textContent = "Hidden";
  // }
});
