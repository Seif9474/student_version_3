let boxTitle = document.querySelector(".box .btn p"),
  boxImg = document.querySelector(".box .img img"),
  boxDescription = document.querySelector(".box .text p"),
  nextBtn = document.querySelectorAll(".next_img ");

let index = 0;

const qualityData = [
  {
    title: "Message and Program",
    img: "../images/proplem.png",
    text: "The program has an approved and declared mission, and a qualified leadership to manage. ",
  },
  {
    title: "Program Design",
    img: "../images/problem_design.png",
    text: "The program adopts national academic reference standards or other standards approved.",
  },
  {
    title: "Teaching and Learning",
    img: "../images/teaching_learning.png",
    text: "The program has various teaching and learning methods to encourage self-learning and the acquisition of thinking",
  },
  {
    title: "Studying and Graduates",
    img: "../images/graduate.png",
    text: "The program has clear policies and rules for admission and transfer, and systems for support, academic guidance",
  },
  {
    title: "Members and Staff",
    img: "../images/staff.png",
    text: "The program has a qualified number of faculty members and supporting staff, and they are selected according to standards",
  },
  {
    title: "Learning Resources",
    img: "../images/resources.png",
    text: "The program has financial resources, material resources appropriate to its nature, security and safety requirements",
  },
  {
    title: "Quality Assurrance",
    img: "../images/quality_assurance.png",
    text: "The Program has an effective quality management system and objective indicators foe self-evaluation",
  },
];

nextBtn[0].addEventListener("click", (e) => {
  if (index < 7) {
    index = index + 1;
    console.log(index);
    changeBoxCentent();
  }
});

nextBtn[1].addEventListener("click", (e) => {
  if (index >= 0) {
    index = index - 1;
    changeBoxCentent();
  }
});

const changeBoxCentent = () => {
  boxTitle.innerText = qualityData[index].title;
  boxImg.src = qualityData[index].img;
  boxDescription.innerText = qualityData[index].text;

  if (index > 0) {
    nextBtn[1].classList.remove("none");
  }

  if (index === 0) {
    nextBtn[1].classList.add("none");
  }

  if (index === 6) {
    nextBtn[0].classList.add("none");
  } else {
    nextBtn[0].classList.remove("none");
  }
};
