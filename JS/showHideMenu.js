let dashsboardMenu = document.querySelector(".dashboard_menu"),
    iconShowDashsboardMenu = document.querySelector(".nav_bar .icon"),
    overlay = document.querySelector(".user_profile .overlay"),
    userImg = document.querySelector(".avatar"),
    settingMenu = document.querySelector(".setting_menu");



    
let showSettingMenue = false;


userImg.addEventListener("click", (e) => {  // toggle the menue when click on user img
    showSettingMenue = !showSettingMenue;
    if (showSettingMenue) {
        settingMenu.classList.add("block")
    } else {
        settingMenu.classList.remove("block")
    }
});


iconShowDashsboardMenu.addEventListener("click", (e) => {
    dashsboardMenu.classList.add("active");
    overlay.classList.add("active")
});


overlay.addEventListener("click", (e) => {

    dashsboardMenu.classList.remove("active");
    overlay.classList.remove("active");

});