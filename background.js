// chrome.storage.onChanged.addListener((changes, area) => {
//   console.log(changes, area, "background");
// });

chrome.action.onClicked.addListener((tab) => {
  console.log("clicked icon");
});
