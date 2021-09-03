import Header from "./Header";
import Reminders from "./Reminders";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <Header data={people} />
      <Reminders data={people} />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;
