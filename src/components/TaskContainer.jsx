import { useDispatch } from "react-redux";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import { deleteTask, editCheck } from "../redux/slice/todo-slice";

function TaskContainer({ tasks }) {
  const dispatch = useDispatch();

  const deleteHander = (id) => {
    dispatch(deleteTask(id))
  };

  const checkHandler = (id, status) => {
    dispatch(editCheck(id, status));
  };

  return (
    <div className="container">
      {/* run if active tasks array is not empty */}
      {tasks.activeTasks ? tasks.activeTasks.map(val => (
        <ActiveTask key={val.id} props={{
          data: val,
          checkBtn: () => checkHandler(val.id, val.isCompleted),
          deleteBtn: () => deleteHander(val.id),
        }} ></ActiveTask>
      )) : <div></div>}

      {/* run if completed tasks array is not empty */}
      {tasks.completedTasks ? tasks.completedTasks.map(val => (
        <CompletedTask key={val.id} props={{
          data: val,
          checkBtn: () => checkHandler(val.id, val.isCompleted),
          deleteBtn: () => deleteHander(val.id)
        }} ></CompletedTask>
      )) : <div></div>}
    </div>
  );
}

export default TaskContainer;