import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Heading from "./Heading";
import { getTasks } from "../redux/slice/todo-slice";
import { useEffect } from "react";
import TaskContainer from "./TaskContainer";
import EmptyTask from "./EmptyTask";
import PropTypes from 'prop-types';

function CompletedPage({ screen }) {
  const dispatch = useDispatch();
  const { completedTasks, message } = useSelector(state => state.todo);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className="main">
    {screen > 426 ? <Header header={'Completed'}></Header> : <div></div>}

      <div className="content">
        <Heading page={'Completed'}></Heading>
        {message === 'Error' || completedTasks.length === 0 ? <EmptyTask status={'completed'}></EmptyTask>
          : <TaskContainer tasks={{ completedTasks }}></TaskContainer>}
      </div>
    </div>
  );
}

CompletedPage.propTypes = {
  screen: PropTypes.number
}

export default CompletedPage;