
const Header = (props) => {
  const clickHandler = (evt) => {   //event handler
    console.log(evt);
  }
  return (
    <>
      <header>
        {/* <h1 onClick={clickHandler}>{props.title}</h1> */}
        <h1>{props.title}</h1>
      </header>
    </>
  );
};

export default Header;