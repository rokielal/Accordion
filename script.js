const data = [
  {
    id: "1",
    question: "Is JavaScript a compiled or interpreted language?",
    answer:
      "JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.",
  },
  {
    id: "2",
    question: "Is JavaScript a case-sensitive language?",
    answer:
      "Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.",
  },
  {
    id: "3",
    question: "What is scope in javascript?",
    answer:
      "In JavaScript, scope refers to the context in which variables, functions, and objects are accessible.  There are mainly two types of scope in JavaScript:",
  },
];

const accordianWrapper = document.querySelector(".accordion");

function createAccodionData() {
  accordianWrapper.innerHTML = data
    .map(
      (dataItem) =>
        `
        <div class="accordion_item">
           <div class="accordion_title">
            <h3>${dataItem.question}</h3>
            <i class="fa-solid fa-arrow-down-long"></i>
            
           </div>
           <div class="accordion_content">
           <p>${dataItem.answer}</p>
           </div>
        </div>
        `
    )
    .join(" ");
}
createAccodionData();

const getAccordionTitles = document.querySelectorAll(".accordion_title");

console.log(getAccordionTitles);

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", () => {
    // here we are checking if the clicked item has active class or not if it already contians active class than we are removing it else first we are selecting all the items having active class if any found we are removing it then at last adding active class to the clicked item

    // if (currentItem.classList.contains("active")) {
    //   currentItem.classList.remove("active");
    // } else {
    //   let getAlreadyActiveClasses = document.querySelectorAll(".active");

    //   getAlreadyActiveClasses.forEach((currentActiveItem) => {
    //     currentActiveItem.classList.remove("active");
    //   });

    //   currentItem.classList.add("active");
    // }

    // Simply we can use toggle it will check if class has active or not. if active is present it will remove it and if active is not present it will add it
    currentItem.classList.toggle("active");
  });
});
