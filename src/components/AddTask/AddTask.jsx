import { useDispatch } from "react-redux";
import { placeTasks } from "../../store/slices/tasksSlice";
import "./AddTasks.scss";

function AddTask() {
  const dispatch = useDispatch();

  const createNewTask = () => {
    if (localStorage.getItem("taskCreated") === null) {
      localStorage.setItem("taskCreated", "[]");
    }
    const taskCreated = JSON.parse(localStorage.getItem("taskCreated"));
    let newTask = {
      id: taskCreated.length + 1,
      title: "",
      notes: "",
      subtasks: [],
      status: "porHacer",
    };
    taskCreated.push(newTask);
    localStorage.setItem("taskCreated", JSON.stringify(taskCreated));
    dispatch(placeTasks(taskCreated));
  };

  return (
    <div className="addTaskButtonBorder addTaskButton" onClick={createNewTask}>
      +
    </div>
  );
}

export default AddTask;
