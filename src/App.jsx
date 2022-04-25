import "./App.scss"

import Header from "./components/Header/Header"
import Todo from "./components/Todos/Todo";
import Todos from "./components/TodoClassCompanet/Todo";
import Form from "./components/Form/Form";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Todo /> 
      {/* <Todos /> */}
    <Form/>
  </div>
  )
 }

export default App
