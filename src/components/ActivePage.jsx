import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Heading from "./Heading";
import { useEffect } from "react";
import { getTasks } from "../redux/slice/todo-slice";
import TaskContainer from "./TaskContainer";
import EmptyTask from "./EmptyTask";
import PropTypes from 'prop-types';

function ActivePage({ screen }) {
  const dispatch = useDispatch();
  const { activeTasks, message } = useSelector(state => state.todo);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className="main">
    {screen > 426 ? <Header header={'Active'}></Header> : <div></div>}

      <div className="content">
        <Heading page={'Active'}></Heading>
        {message === 'Error' || activeTasks.length === 0 ? <EmptyTask status={'active'}></EmptyTask>
          : <TaskContainer tasks={{ activeTasks }}></TaskContainer>}
      </div>
    </div>
  );
}

ActivePage.propTypes = {
  screen: PropTypes.number
}

export default ActivePage;