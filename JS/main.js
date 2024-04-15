let userImg = document.querySelector(".avatar"),
    settingMenu = document.querySelector(".setting_menu"),
    removeMaarefImgBtn = document.querySelector(".img_close"),
    maarefImg = document.querySelector(".image_maaref"),
    scheduleOverlay = document.querySelector(".schedule_overlay "),
    overlay = document.querySelector(".schedule_overlay  .overlay"),
    academicScheduleBtn = document.querySelector(".academic_schedule")


let showSettingMenue = false;


userImg.addEventListener("click", (e) => {  // toggle the menue when click on user img
    showSettingMenue = !showSettingMenue;
    if (showSettingMenue) {
        settingMenu.classList.add("block")
    } else {
        settingMenu.classList.remove("block")
    }
});

// remove maaref image from the page
removeMaarefImgBtn.addEventListener("click", (e) => {
    maarefImg.style.display = "none"
});

academicScheduleBtn.addEventListener("click", (e) => {
    scheduleOverlay.classList.add("block")
})

overlay.addEventListener("click", (e) => {
    scheduleOverlay.classList.remove("block")
})