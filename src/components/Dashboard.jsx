import Header from "./Header";
import Heading from "./Heading";
import StatBox from "./StatBox";
import hero from "../assets/hero-img.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../redux/slice/todo-slice";
import TaskContainer from "./TaskContainer";
import EmptyTask from "./EmptyTask";
import '../styles/Dashboard.css';
import PropTypes from 'prop-types';

function Dashboard({ screen }) {
  const dispatch = useDispatch();
  const { activeTasks, completedTasks, message } = useSelector(state => state.todo);
  const allTasks = activeTasks.concat(completedTasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className="main">
      {screen > 426 ? <Header header={'Dashboard'}></Header> : <div></div>}

      <div className="content">
        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-title">Hello, Beautiful Human!</h1>
            <p className="hero-desc">What do you want to do today?</p>
          </div>
          <img className="hero-img" src={hero} alt="working-women" />
        </div>

        <div className="task-section">
          <Heading page={''}></Heading>

          <div className="task">
            {message === 'Error' ? <EmptyTask></EmptyTask> : <TaskContainer tasks={{ activeTasks, completedTasks }}></TaskContainer>}

            <div className="stats">
              <StatBox props={{ status: 'Active', amount: activeTasks.length, total: allTasks.length }}></StatBox>
              <StatBox props={{ status: 'Completed', amount: completedTasks.length, total: allTasks.length }}></StatBox>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

Dashboard.propTypes = {
  screen: PropTypes.number
}

export default Dashboard;