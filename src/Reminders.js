import EachBirthday from "./EachBirthday";
import { useState } from "react";

const Reminders = ({ data }) => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="persons-birthday">
      <p>{people.id}</p>
      {people.map((person) => {
        return <EachBirthday key={person.id} {...person} />;
      })}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default Reminders;
