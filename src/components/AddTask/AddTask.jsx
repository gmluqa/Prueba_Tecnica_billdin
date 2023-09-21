import "./AddTasks.scss";

const createNewTask = () => {
  sessionStorage.setItem("taskCreated", "true");

  setTimeout(() => {
    sessionStorage.setItem("taskCreated", "false");
  }, 1);
};

function AddTask() {
  return (
    <div className="addTaskButtonBorder addTaskButton" onClick={createNewTask}>
      +
    </div>
  );
}

export default AddTask;
