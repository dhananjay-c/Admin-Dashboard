import Nav from "./Components/Nav"
import Dashboard from "./Components/Dashboard"

function App() {

  return (
    <>
      <div className="flex w-screen h-screen p-3 overflow-hidden custom-scrollbar">
        <Nav></Nav>
        <Dashboard></Dashboard>
      </div>
    </>
  )
}

export default App
