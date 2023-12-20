import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";

function TaskContainer({ tasks }) {
  return (
    <div className="container">
      {/* run if active tasks array is not empty */}
      {tasks.activeTasks ? tasks.activeTasks.map(val => (
        <ActiveTask key={val.id} data={val}></ActiveTask>
      )) : <div></div>}

      {/* run if completed tasks array is not empty */}
      {tasks.completedTasks ? tasks.completedTasks.map(val => (
        <CompletedTask key={val.id} data={val}></CompletedTask>
      )) : <div></div>}
    </div>
  );
}

export default TaskContainer;