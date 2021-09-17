import EachBirthday from "./EachBirthday";

const Reminders = ({ data }) => {
  return (
    <div className="persons-birthday">
      {data.map((person) => {
        const { name, image, age, id } = person;
        return (
          <div key={id} className="birthday-reminder">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reminders;
