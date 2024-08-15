import './App.css'
import Card from './components/Card'
function App() {

  // let myObj = {
  //   username: "rakhee",
  //   age: 21
  // }

  let newArr = [1, 2, 3];

  return ( 
    <>
    <h1 className="text-3xl font-bold underline bg-green-400 p-4 rounded-xl">
      Hello world!
    </h1>
      <Card username="chaiaurcode" someObj={newArr}/>
      <Card username="Rekha" someObj={newArr}/>
    </>
  )
}

export default App
