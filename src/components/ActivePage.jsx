import ActiveTask from "./ActiveTask";
import Header from "./Header";
import Heading from "./Heading";

function ActivePage() {
  // dummy data
  const data = [
    {
      id: 1,
      task: 'Buy monthly groceries',
      isCompleted: false
    },
    {
      id: 2,
      task: 'Pick up the kids',
      isCompleted: false
    },
    {
      id: 3,
      task: 'Get nails and hair done',
      isCompleted: false
    }
  ];

  return (
    <div>
      <Header header={'Active'}></Header>

      <Heading page={'Active'}></Heading>
      <ActiveTask data={data}></ActiveTask>
    </div>
  );
}

export default ActivePage;