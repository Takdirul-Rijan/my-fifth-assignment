// 1. functionalities for click the heart icon to increase the count

const heartCountEl = document.getElementById("heart-count");

function increaseHeartCount(heartCountEl, buttonSelector) {
  const allHeartButtons = document.querySelectorAll(buttonSelector);

  for (const btn of allHeartButtons) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      let current = parseInt(heartCountEl.innerText) || 0;

      heartCountEl.innerText = current + 1;

      // --- change icon style ---
      const icon = btn.querySelector("i"); // find <i> inside this button
      if (icon && icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      }
    });
  }
}
increaseHeartCount(heartCountEl, ".btn-heart-click");

// 2. functionalities for click the copy button to increase the copy count and copy hotline number

const copyCountEl = document.getElementById("copy-count");

const allCopyButtons = document.querySelectorAll(".btn-copy-click");

for (const btn of allCopyButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const card = btn.closest(".card-body");

    const title = card.querySelector(".card-title").innerText;

    const hotline = card.querySelector(".hotline-number").innerText;

    navigator.clipboard.writeText(hotline);

    alert(title + "\n" + hotline);

    let current = parseInt(copyCountEl.innerText);

    if (isNaN(current)) current = 0;

    copyCountEl.innerText = current + 1;
  });
}
