import EachBirthday from "./EachBirthday";

const Reminders = ({ data }) => {
  return (
    <div className="persons-birthday">
      <p>{data.id}</p>
      {data.map((person) => {
        return <EachBirthday key={person.id} {...person} />;
      })}
    </div>
  );
};

export default Reminders;
