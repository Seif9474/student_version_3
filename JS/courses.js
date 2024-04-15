let coursesItems = document.querySelectorAll(".user_profile .course .course_continer ul li");

coursesItems.forEach((course) => {
    course.addEventListener("click", (e) => {

       coursesItems.forEach((course) => {
        course.classList.remove("active")
       });

       course.classList.add("active")
    })
})