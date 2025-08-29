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
      const icon = btn.querySelector("i");
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

// 3. functionalities for click the call button

const coinCountEl = document.getElementById("coin-count");

const allCallButtons = document.querySelectorAll(".btn-call-click");

const callHistoryListEl = document.getElementById("history-list");

for (const btn of allCallButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const card = btn.closest(".card-body");

    const title = card.querySelector(".card-title").innerText;

    const hotline = card.querySelector(".hotline-number").innerText;

    let current = parseInt(coinCountEl.innerText);
    if (isNaN(current)) current = 100;

    if (current < 20) {
      alert("You need at least 20 coins to make a call.");
      return;
    }

    alert("Calling...\n" + title + "\n" + hotline);

    coinCountEl.innerText = current - 20;

    const exactTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const li = document.createElement("li");

    li.classList.add("p-2", "bg-gray-100", "rounded");

    li.innerText = `${title}\n${hotline}\nCalled at ${exactTime}`;

    callHistoryListEl.prepend(li);
  });
}

const clearHistoryBtn = document.getElementById("clear-history-btn");

clearHistoryBtn.addEventListener("click", function () {
  callHistoryListEl.innerHTML = "";
});
