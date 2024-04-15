let answers = document.querySelectorAll(".questions ul li");

answers.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    if (answer.classList.contains("active")) {
      answer.classList.remove("active");
    } else {
      answer.classList.add("active");
    }
  });
});
