let userImgCahnge = document.querySelector(".user_profile .profile_content .profile_photo .photo img"),
    fileInput = document.querySelector(".user_profile .profile_content .profile_photo input");

    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                userImgCahnge.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });