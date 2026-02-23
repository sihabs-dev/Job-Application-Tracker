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
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  totalCount.innerText =
    allCards.children.length -
    interviewCount.innerText -
    rejectedCount.innerText;
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
      cardStatus: "interview",
      cardPara,
    };
    // console.log(cardInfomation);
    let isExit = interviewList.find(
      (item) => item.cardHeading == cardInfomation.cardHeading,
    );
    if (!isExit) {
      interviewList.push(cardInfomation);
    }

    renderInterviewCard();
    calculateCard();
  } else if (event.target.classList.contains("rejected-btn")) {
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
      cardStatus: "rejected",
      cardPara,
    };
    // console.log(cardInfomation);
    let isExit = rejectedList.find(
      (item) => item.cardHeading == cardInfomation.cardHeading,
    );
    if (!isExit) {
      rejectedList.push(cardInfomation);
    }

    renderRejectedCard();
    calculateCard();
  }
});

function renderInterviewCard() {
  getFilterSection.innerHTML = "";

  for (const makeCard of interviewList) {
    let createNewDiv = document.createElement("div");
    createNewDiv.className = "card space-y-3 p-5 shadow-sm rounded-md relative";
    createNewDiv.innerHTML = `
    <div>
              <h2 class="heading text-2xl font-bold">${makeCard.cardHeading}</h2>
              <p class="info text-gray-500">${makeCard.cardInfo}</p>
            </div>
            <div>
              <p class="salary text-gray-600">
                ${makeCard.cardSalary}
              </p>
            </div>
            <div class="px-3.5 py-2 bg-black/15 inline-block rounded-md">
              <p class="status">${makeCard.cardStatus}</p>
            </div>
            <div>
              <p class="para text-gray-700">
                ${makeCard.cardPara}
              </p>
            </div>
            <!-- interview and rejected btn -->
            <div>
              <button
                
                class="interview-btn text-green-500 px-3 py-1.5 border-2 border-green-500 rounded-sm"
              >
                INTERVIEW
              </button>
              <button
               
                class="rejected-btn text-red-500 px-3 py-1.5 border-2 border-red-500 rounded-sm"
              >
                REJECTED
              </button>
            </div>
            <div class="absolute top-7 right-7">
              <button id="delete-btn">
                <img src="./images/delete.png" alt="" />
              </button>
            </div>
    `;
    getFilterSection.appendChild(createNewDiv);
  }
}

function renderRejectedCard() {
  getFilterSection.innerHTML = "";

  for (const makeCard of rejectedList) {
    let createNewDiv = document.createElement("div");
    createNewDiv.className = "card space-y-3 p-5 shadow-sm rounded-md relative";
    createNewDiv.innerHTML = `
    <div>
              <h2 class="heading text-2xl font-bold">${makeCard.cardHeading}</h2>
              <p class="info text-gray-500">${makeCard.cardInfo}</p>
            </div>
            <div>
              <p class="salary text-gray-600">
                ${makeCard.cardSalary}
              </p>
            </div>
            <div class="px-3.5 py-2 bg-black/15 inline-block rounded-md">
              <p class="status">${makeCard.cardStatus}</p>
            </div>
            <div>
              <p class="para text-gray-700">
                ${makeCard.cardPara}
              </p>
            </div>
            <!-- interview and rejected btn -->
            <div>
              <button
                
                class="interview-btn text-green-500 px-3 py-1.5 border-2 border-green-500 rounded-sm"
              >
                INTERVIEW
              </button>
              <button
               
                class="rejected-btn text-red-500 px-3 py-1.5 border-2 border-red-500 rounded-sm"
              >
                REJECTED
              </button>
            </div>
            <div class="absolute top-7 right-7">
              <button id="delete-btn">
                <img src="./images/delete.png" alt="" />
              </button>
            </div>
    `;
    getFilterSection.appendChild(createNewDiv);
  }
}
