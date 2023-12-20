import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Heading from "./Heading";
import { useEffect } from "react";
import { getTasks } from "../redux/slice/todo-slice";
import TaskContainer from "./TaskContainer";
import EmptyTask from "./EmptyTask";

function ActivePage() {
  const dispatch = useDispatch();
  const { activeTasks, message } = useSelector(state => state.todo);
  
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      <Header header={'Active'}></Header>

      <Heading page={'Active'}></Heading>
      {message === 'Error' || activeTasks.length === 0 ? <EmptyTask status={'active'}></EmptyTask> 
        : <TaskContainer tasks={{ activeTasks }}></TaskContainer>}
    </div>
  );
}

export default ActivePage;