import CompletedTask from "./CompletedTask";
import Header from "./Header";
import Heading from "./Heading";

function CompletedPage() {
    // dummy data
    const data = [
      {
        id: 4,
        task: 'Prepare presentations',
        isCompleted: true
      },
      {
        id: 5,
        task: 'Go to the gym',
        isCompleted: true
      }
    ];

  return (
    <div>
      <Header header={'Completed'}></Header>

      <Heading page={'Completed'}></Heading>
      <CompletedTask data={data}></CompletedTask>
    </div>
  );
}

export default CompletedPage;