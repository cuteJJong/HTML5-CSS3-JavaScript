import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Articl from './components/Article'
import Nav from './components/Nav'
import myComponent from './components/myComponent'
import YourComponent from './components/YourComponent'

function App() {
  // const topics = [
  //   {id:1, title:'html5', body:'html5 is ...'},
  //   {id:2, title:'css3', body:'css3 is ...'},
  //   {id:3, title:'javascript', body:'javascript is ...'}
  // ];
  // const buttonProps = {
  //   title : 'Red',
  //   color : 'red'
  // }
  // const array = [1,2,3];
  // const node = <h1>Node</h1>
  // const func = () => {console.log('message');};
  // const student = {
  //   name: "Jimin",
  //   age:28
  // }
  const employee = {age: 30};
  return (
    <>
    {/* <Button title={'Red'} color={'red'}/> */}
    {/* <Button {...buttonProps} />
    <Button title={'Green'} color={'green'} />
    <Button title={'Blue'} color={'blue'}/>
    <Button title={'Black'}>
      <div>자식 요소</div>
    </Button> */}
    {/* <Header title="React"/>
    <Nav topics={topics} />
    <Articl title="welcome" body="Hello, Web" /> */}
    {/* <myComponent StringValue={'씅찬'} booleanValue={1 == 1}
     numberValue = {30} arrayValue = {array} nodeValue={node}
     functionValue={func} objectValue={student}/> */}
    <YourComponent objValue={employee} requiredStringValue='문자' />
    </>
  ) 
}
//Properties의 기본값 설정
Button.defaultProps = {
  color : 'yellow',
}

export default App
