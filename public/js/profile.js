(async () => {
    if (!localStorage.getItem("token")) {
        window.location.href = "/users/login";
    } else {
        const response = await fetch("/users/profile", {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token"),
            },
        });

        if (!response.ok) {
            localStorage.removeItem("token");
            location.href = "/users/login";
        }

        console.log(await response.json());
    }
})();


const CreateTask = document.querySelector("#CrateTask")
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector('#closeBtn');



CreateTask.addEventListener("click", async () => {
    modal.style.display = 'flex';
});



window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});