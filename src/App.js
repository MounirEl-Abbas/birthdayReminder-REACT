import Header from "./Header";
import Reminders from "./Reminders";
import { data } from "./data";

function App() {
  return (
    <div className="container">
      <Header data={data} />
      <Reminders data={data} />
    </div>
  );
}

export default App;
