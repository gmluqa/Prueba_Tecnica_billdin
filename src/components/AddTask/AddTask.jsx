import "./AddTasks.scss";

const createNewTask = () => {
  if (localStorage.getItem("taskCreated") === null) {
    localStorage.setItem("taskCreated", "[]");
  }
  const taskCreated = JSON.parse(localStorage.getItem("taskCreated"));
  let newTask = {
    id: taskCreated.length + 1,
    title: "",
    notes: "",
    status: "porHacer",
  };
  taskCreated.push(newTask);
  localStorage.setItem("taskCreated", JSON.stringify(taskCreated));
};

function AddTask() {
  return (
    <div className="addTaskButtonBorder addTaskButton" onClick={createNewTask}>
      +
    </div>
  );
}

export default AddTask;
