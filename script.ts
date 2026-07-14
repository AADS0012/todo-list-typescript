const themeToggleBtn = document.getElementById("themeToggle")!;
const themeIcon = themeToggleBtn.children[0];
const themeLabel = themeToggleBtn.children[1];

const taskInput = document.querySelector<HTMLInputElement>("#taskInput")!;
const addTaskBtn = document.getElementById("addBtn")!;

const taskList = document.getElementById("taskList")!;

const taskCountLabel = document.getElementById("taskCount")!;
const clearAllBtn = document.getElementById("clearBtn")!;

type Themes = "dark" | "light";
interface Task {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
}

let tasks: Task[] = [];

let nextTaskId = 1;
let currentTheme: Themes = "light";

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

themeToggleBtn.addEventListener("click", toggleTheme);
addTaskBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
  let target = (e.target as HTMLElement).closest("[data-action]");
  if (!target) return;

  const li = target.closest(".task-item") as HTMLElement;
  if (!li || !li.dataset.index) return;

  const index = parseInt(li.dataset.index, 10) + 1;
  if (isNaN(index)) return;

  const action = (target as HTMLElement).dataset.action;

  if (action === "toggle") {
    toggleTask(index);
  } else if (action === "delete") {
    deleteTask(index);
  } else if (action === "edit") {
    editTask(index, { title: "wait" });
  }
});

clearAllBtn.addEventListener("click", clearTasks);

function init(): void {
  loadTheme();
  renderTasks();
  updateCounter();
}

// ---- for header

function toggleTheme(): void {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  setTheme();
}

function setTheme(): void {
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "dark" : ""
  );

  if (currentTheme === "light") {
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "تاریک";
  } else {
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "روشن";
  }

  try {
    localStorage.setItem("todo-theme", currentTheme);
  } catch (_) {}
}

function loadTheme() {
  let savedTheme: Themes;
  try {
    let stored = localStorage.getItem("todo-theme");
    if (stored === "dark" || stored === "light") {
      currentTheme = stored;
      setTheme();
    }
  } catch (error) {}
}

// for tasks

function addTask(): void {
  const trueText = taskInput?.value.trim();
  if (!trueText) {
    alert("لطفا متنی وارد کنید");
    taskInput.value = "";
    return;
  }
  const task: Task = {
    id: nextTaskId++,
    title: trueText,
    desc: "test",
    isDone: false,
  };
  tasks.push(task);

  renderTasks();
  taskInput.value = "";
}

function getTask(id: number): Task {
  const selectedTask = tasks.find((t) => id === t.id);
  if (selectedTask) return selectedTask;
  else {
    throw new Error(`task not found with #${id} id`);
  }
}

function getTaskIndex(id: number): number {
  return id - 1;
}

function editTask(id: number, data: Partial<Task>): void {
  const task: Task = getTask(id);
  if (data.title) {
    let newTitle = prompt("برای این کار یه متن جدید وارد کنید: ");
    while (!newTitle) {
      newTitle = prompt("برای این کار یه متن جدید وارد کنید: ");
    }
    data.title = newTitle;
  }
  Object.assign(task, data);
  renderTasks();
}

function toggleTask(id: number) {
  editTask(id, { isDone: true });
  renderTasks();
}

function deleteTask(id: number): void {
  tasks.splice(getTaskIndex(id), 1);
  renderTasks();
}

function renderTasks() {
  if (tasks.length === 0) {
    taskList.innerHTML = `
                        <div class="empty-state">
                            <span>📋</span>
                            هیچ کاری ثبت نشده! <br /> یکی اضافه کن.
                        </div>
                    `;
    updateCounter();
    return;
  }

  let html = "";

  tasks.forEach((task, index) => {
    const checked = task.isDone ? "completed" : "";
    const checkMark = task.isDone ? "✔" : "";

    html += `
    <li class="task-item ${checked}" data-index="${index}">
        <span class="checkbox" data-action="toggle">${checkMark}</span>
        <span class="task-text" data-action="edit">${task.title}</span>
        <button class="delete-btn" data-action="delete" aria-label="حذف">✕</button>
    </li>
    `;
  });

  taskList.innerHTML = html;
  updateCounter();
}

// for footer

function updateCounter() {
  taskCountLabel.textContent = `${tasks.length} کار`;
}

function clearTasks() {
  if (tasks.length === 0) return;
  if (confirm("همه کارها حذف شوند؟")) {
    tasks = [];
    renderTasks();
  }
}
