let getAllButton = document.getElementsByTagName("button");
for (const btn of getAllButton) {
  btn.style.cursor = "pointer";
}

let getFilterSection = document.getElementById("filter-section");
let totalCount = document.getElementById("total");

let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");
let allCards = document.getElementById("allCards");

let interviewList = [];
let rejectedList = [];

function calculateCard() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCard();

let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectedFilterBtn = document.getElementById("rejected-filter-btn");
function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-blue-400", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-400", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-400", "text-white");

  allFilterBtn.classList.add("text-gray-600");
  interviewFilterBtn.classList.add("text-gray-600");
  rejectedFilterBtn.classList.add("text-gray-600");

  let selected = document.getElementById(id);
  selected.classList.remove("text-gray-600");
  selected.classList.add("bg-blue-400", "text-white");
}

let mainSection = document.getElementById("main-section");
mainSection.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    let cardDiv = event.target.closest(".card");
    let cardHeading = cardDiv.querySelector(".heading").textContent;
    let cardInfo = cardDiv.querySelector(".info").textContent;
    let cardSalary = cardDiv.querySelector(".salary").textContent;
    let cardStatus = cardDiv.querySelector(".status").textContent;
    let cardPara = cardDiv.querySelector(".para").textContent;

    let cardInfomation = {
      cardHeading,
      cardInfo,
      cardSalary,
      cardStatus,
      cardPara,
      };
      console.log(cardInfomation)
  }
});
