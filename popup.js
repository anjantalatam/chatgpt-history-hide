// const toggle = document.querySelector("#toggle-nav");
const statusElement = document.querySelector("#nav-status");

chrome.storage.local.get(["isHistoryVisible"], (res) => {
  // const navContainer = document.querySelector("#__next > div > div");
  const isVisible = res?.isHistoryVisible ?? true;

  if (isVisible) {
    statusElement.textContent = "Visible";
    // navContainer.style.display = "block";
  } else {
    statusElement.textContent = "Hidden";
    // navContainer.style.display = "none";
  }
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes?.isHistoryVisible) {
    const isVisible = changes?.isHistoryVisible?.newValue ?? true;

    if (isVisible) {
      statusElement.textContent = "Visible";
    } else {
      statusElement.textContent = "Hidden";
    }
  }
});

document.getElementById("toggle-history").addEventListener("click", () => {
  chrome.tabs.query(
    { active: true, currentWindow: true, url: "https://chat.openai.com/" },
    (tabs) => {
      const tab = tabs[0];

      function printTitle() {
        const navContainer = document.querySelector("#__next > div > div");
        chrome.storage.local.get(["isHistoryVisible"], (res) => {
          const isVisible = res?.isHistoryVisible ?? true;

          const newState = !isVisible;

          // if (isVisible) {
          // statusElement.textContent = "visible";
          chrome.storage.local.set({ isHistoryVisible: newState });

          if (newState) {
            navContainer.style.display = "block";
          } else {
            navContainer.style.display = "none";
          }
          // } else {
          //   statusElement.textContent = "Hidden";
          // }
        });

        // const title = document.querySelector("head");
      }

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: printTitle,
        //        files: ['contentScript.js'],  // To call external file instead
      });
    }
  );
});
