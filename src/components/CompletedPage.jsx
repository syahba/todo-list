import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Heading from "./Heading";
import { getTasks } from "../redux/slice/todo-slice";
import { useEffect } from "react";
import TaskContainer from "./TaskContainer";
import EmptyTask from "./EmptyTask";

function CompletedPage() {
  const dispatch = useDispatch();
  const { completedTasks, message } = useSelector(state => state.todo);
  
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      <Header header={'Completed'}></Header>

      <Heading page={'Completed'}></Heading>
      {message === 'Error' || completedTasks.length === 0 ? <EmptyTask status={'completed'}></EmptyTask> 
        : <TaskContainer tasks={{ completedTasks }}></TaskContainer>}
    </div>
  );
}

export default CompletedPage;