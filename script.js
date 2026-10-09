const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

function addTask() {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const button = document.createElement("button");
    button.textContent = "удалить";

    button.onclick = function () {
        li.remove();
    };

    li.append(button);
    list.append(li);
    input.value = "";
}

btn.onclick = addTask;

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addTask();
});