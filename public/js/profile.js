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


// async function loadTasks() {
//     const response = await fetch('http://localhost:3001/tasks');
//     const tasks = await response.json();
//     const taskList = document.getElementById('task-list');
//     taskList.innerHTML = '';
//
//     tasks.forEach(task => {
//         const li = document.createElement('li');
//         li.textContent = `${task.title} - ${task.description} (date: ${task.date})`;
//         taskList.appendChild(li);
//     });
// }


// document.getElementById('create-task-btn').addEventListener('click', async (e) => {
//
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const date = document.getElementById('date').value;
//
//     if (!title || !description || !date) {
//         alert('invalid title or description');
//         return;
//     }