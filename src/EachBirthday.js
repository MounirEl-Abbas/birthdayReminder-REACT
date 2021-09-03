const EachBirthday = ({ name, age, image }) => {
  return (
    <div className="birthday-reminder">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default EachBirthday;
