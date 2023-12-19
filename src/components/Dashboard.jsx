import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import Header from "./Header";
import Heading from "./Heading";
import StatBox from "./StatBox";
import hero from "../assets/hero-img.png"

function Dashboard() {
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
    },
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

  // dummy data filtering
  const active = data.filter(v => v.isCompleted == false);
  const completed = data.filter(v => v.isCompleted == true);

  return (
    <div>
      <Header header={'Dashboard'}></Header>

      <div className="hero">
        <h1 className="title">Hello, Beautiful Human!</h1>
        <p className="desc">What do you want to do today?</p>
        <img src={hero} alt="working-women" />
      </div>

      {/* dummy props, akan diganti pakai state context atau redux */}
      <StatBox props={{ status: 'Completed', amount: active.length, data: data.length }}></StatBox>
      <StatBox props={{ status: 'Active', amount: completed.length, data: data.length }}></StatBox>

      <Heading page={''}></Heading>
      <ActiveTask data={active}></ActiveTask>
      <CompletedTask data={completed}></CompletedTask>
    </div>
  );
}

export default Dashboard;