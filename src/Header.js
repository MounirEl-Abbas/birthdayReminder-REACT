const Header = ({ data }) => {
  let number = data.length;
  console.log(number);
  return (
    <>
      <p></p>
      <header>{data.length} Birthdays Today</header>
    </>
  );
};

export default Header;
