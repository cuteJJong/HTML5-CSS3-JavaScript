
const Nav = (props) => {
  //console.log(props.topics);
  const lists = [];
  for(let i = 0; i < props.topics.Length; i++) {
    let topic = props.topics[i];
    lists.push(<li key={topic.id}><a href={'/read/' + topic.id}>{topic.title}</a></li>);
  }
  return (
    <div>
      <>
        <nav>
          <ol>
            {lists};
          </ol>
        </nav>
      </>
    </div>
  );
};

export default Nav;