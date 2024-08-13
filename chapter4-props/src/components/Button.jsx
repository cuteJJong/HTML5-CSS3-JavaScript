
function Button({title, color, children}) {
  //console.log(props);
  return (  
    <div>
      <button style={{'backgroundColor' : color}}>{title}{children}</button>
    </div>
  );
}

export default Button;