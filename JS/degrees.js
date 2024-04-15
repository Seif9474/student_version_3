let liBtns = document.querySelectorAll(".degrees_content ul li"),
  degreeName = document.querySelector(".degree_text h3"),
  degreeText = document.querySelector(".degreee"),
  liBtnsCenter = document.querySelectorAll(".center_content ul li"),
  centerName = document.querySelector(".center_text h3"),
  aboutCenter = document.querySelector(".about_center");
 

let bachaloDegree =
  "The college accepts high school graduates who have successfully completed at least one of the mathematics and physics subjects The duration of study to obtain a bachelor’s degree is 4 university years divided into: Classes and field training. The college offers three study programs that lead to obtaining a bachelor’s degree. The student studies in the first and second year general studies, then studies for two years in One of the following specializations: A - Computer Science The field of computer science focuses on the study of algorithms, data structures, various programming languages, and scientific computers. Some fields can also be studied, such as: Artificial intelligence, computer graphics, databases and networks. The strength of a computer science graduate lies in his ability to solve problems related to computer efficiency and the general performance of computer applications from the perspective of the computer. Graduates studying this major can work in many fields such as: Software engineering, financial calculations, modeling, game design, computer graphics. Robotics, artificial intelligence, computer hardware development, motion graphics. Biotechnology as well as supplement postgraduate studies in all related fields By computer. B - Information systems Students in this specialization learn everything related to information, including collecting, storing, processing, and transferring data between institutions. This specialization focuses on Information in the field of business administration and decision management, as it is concerned with information systems that contribute to solving issues by using computers in business management processes to obtain information that helps in decision-making. Students in this specialization also study the basics of software development for business administration applications, decision management, and database management. The student learns how to integrate technology into the business sector through planning, analyzing and designing systems, developing application software, and supporting system users. The student also gains knowledge About general ideas of business management. The fields of work for this specialization are in various work sectors such as systems analysis and design, application programming in companies, hospitals, etc.";

let diplomaDegree =
  "The college accepts high school graduates who have successfully completed at least one of the mathematics and physics subjects The duration of study to obtain a bachelor’s degree is 4 university years divided into: Classes and field training. The college offers three study programs that lead to obtaining a bachelor’s degree. The student studies in the first and second year general studies, then studies for two years in One of the following specializations: A - Computer Science The field of computer science focuses on the study of algorithms, data structures, various programming languages, and scientific computers. Some fields can also be studied, such as: Artificial intelligence, computer graphics, databases and networks. The strength of a computer science graduate lies in his ability to solve problems related to computer efficiency and the general performance of computer applications from the perspective of the computer. Graduates studying this major can work in many fields such as: Software engineering, financial calculations, modeling, game design, computer graphics. Robotics, artificial intelligence, computer hardware development, motion graphics. Biotechnology as well as supplement postgraduate studies in all related fields By computer. B - Information systems Students in this specialization learn everything related to information, including collecting, storing, processing, and transferring data between institutions. This specialization focuses on Information in the field of business administration and decision management, as it is concerned with information systems that contribute to solving issues by using computers in business management processes to obtain information that helps in decision-making. Students in this specialization also study the basics of software development for business administration applications, decision management, and database management. The student learns how to integrate technology into the business sector through planning, analyzing and designing systems, developing application software, and supporting system users. The student also gains knowledge About general ideas of business management. The fields of work for this specialization are in various work sectors such as systems analysis and design, application programming in companies, hospitals, etc.";

let masterDegree =
  "The college accepts high school graduates who have successfully completed at least one of the mathematics and physics subjects The duration of study to obtain a bachelor’s degree is 4 university years divided into: Classes and field training. The college offers three study programs that lead to obtaining a bachelor’s degree. The student studies in the first and second year general studies, then studies for two years in One of the following specializations: A - Computer Science The field of computer science focuses on the study of algorithms, data structures, various programming languages, and scientific computers. Some fields can also be studied, such as: Artificial intelligence, computer graphics, databases and networks. The strength of a computer science graduate lies in his ability to solve problems related to computer efficiency and the general performance of computer applications from the perspective of the computer. Graduates studying this major can work in many fields such as: Software engineering, financial calculations, modeling, game design, computer graphics. Robotics, artificial intelligence, computer hardware development, motion graphics. Biotechnology as well as supplement postgraduate studies in all related fields By computer. B - Information systems Students in this specialization learn everything related to information, including collecting, storing, processing, and transferring data between institutions. This specialization focuses on Information in the field of business administration and decision management, as it is concerned with information systems that contribute to solving issues by using computers in business management processes to obtain information that helps in decision-making. Students in this specialization also study the basics of software development for business administration applications, decision management, and database management. The student learns how to integrate technology into the business sector through planning, analyzing and designing systems, developing application software, and supporting system users. The student also gains knowledge About general ideas of business management. The fields of work for this specialization are in various work sectors such as systems analysis and design, application programming in companies, hospitals, etc.";

let PHDdegree =
  "The college accepts high school graduates who have successfully completed at least one of the mathematics and physics subjects The duration of study to obtain a bachelor’s degree is 4 university years divided into: Classes and field training. The college offers three study programs that lead to obtaining a bachelor’s degree. The student studies in the first and second year general studies, then studies for two years in One of the following specializations: A - Computer Science The field of computer science focuses on the study of algorithms, data structures, various programming languages, and scientific computers. Some fields can also be studied, such as: Artificial intelligence, computer graphics, databases and networks. The strength of a computer science graduate lies in his ability to solve problems related to computer efficiency and the general performance of computer applications from the perspective of the computer. Graduates studying this major can work in many fields such as: Software engineering, financial calculations, modeling, game design, computer graphics. Robotics, artificial intelligence, computer hardware development, motion graphics. Biotechnology as well as supplement postgraduate studies in all related fields By computer. B - Information systems Students in this specialization learn everything related to information, including collecting, storing, processing, and transferring data between institutions. This specialization focuses on Information in the field of business administration and decision management, as it is concerned with information systems that contribute to solving issues by using computers in business management processes to obtain information that helps in decision-making. Students in this specialization also study the basics of software development for business administration applications, decision management, and database management. The student learns how to integrate technology into the business sector through planning, analyzing and designing systems, developing application software, and supporting system users. The student also gains knowledge About general ideas of business management. The fields of work for this specialization are in various work sectors such as systems analysis and design, application programming in companies, hospitals, etc.";

liBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    liBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    if (index === 0) {
      degreeName.innerText = "Bachelor’s Degree";
      degreeText.innerText = bachaloDegree;
    } else if (index === 1) {
      degreeName.innerText = "Diploma’s Degree";
      degreeText.innerText = diplomaDegree;
    } else if (index === 2) {
      degreeName.innerText = "Master’s Degree";
      degreeText.innerText = masterDegree;
    } else if (index === 3) {
      degreeName.innerText = "PHD Degree";
      degreeText.innerText = PHDdegree;
    }
  });
});

liBtnsCenter.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    liBtnsCenter.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    if (index === 0) {
      degreeName.innerText = "Consulting Center";
      degreeText.innerText = bachaloDegree;
    } else if (index === 1) {
      degreeName.innerText = "ITI Center";
      degreeText.innerText = diplomaDegree;
    } else if (index === 2) {
      degreeName.innerText = "NTI Center";
      degreeText.innerText = masterDegree;
    }
  });
});
