const container = document.getElementById("container");
const numBtn = document.querySelectorAll(".btn-num");
const submitBtn = document.querySelector(".submit-btn");
const resPage = document.querySelector(".res-container");
const ratingPara = document.querySelector(".rating-selected");
console.log(numBtn);

// submit form

submitBtn.addEventListener("click", function () {
  resPage.classList.add("show-class");
  container.classList.add("remove-class");
});

// rating number selected

numBtn.forEach((e) => {
  e.addEventListener("click", function () {
    //   forEach to remove class for every element in the nodelist
    numBtn.forEach((element) => {
      element.classList.remove("selected-btn");
    });
    //   perform the EventListener
    e.classList.add("selected-btn");
    let value = e.value;
    console.log(value);
    ratingPara.innerHTML = `You selected ${value} out of 5`;
  });
});
