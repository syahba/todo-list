import Header from "./Header";
import Heading from "./Heading";
import StatBox from "./StatBox";
import hero from "../assets/hero-img.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../redux/slice/todo-slice";
import TaskContainer from "./TaskContainer";
import EmptyTask from "./EmptyTask";

function Dashboard() {
  const dispatch = useDispatch();
  const { activeTasks, completedTasks, message } = useSelector(state => state.todo);
  const allTasks = activeTasks.concat(completedTasks);
  
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      <Header header={'Dashboard'}></Header>

      <div className="hero">
        <h1 className="title">Hello, Beautiful Human!</h1>
        <p className="desc">What do you want to do today?</p>
        <img src={hero} alt="working-women" />
      </div>

      {/* dummy props, akan diganti pakai state context atau redux */}
      <StatBox props={{ status: 'Active', amount: activeTasks.length, total: allTasks.length }}></StatBox>
      <StatBox props={{ status: 'Completed', amount: completedTasks.length, total: allTasks.length }}></StatBox>

      <Heading page={''}></Heading>
      {message === 'Error' ? <EmptyTask></EmptyTask> : <TaskContainer tasks={{ activeTasks, completedTasks }}></TaskContainer>}
    </div>
  );
}

export default Dashboard;