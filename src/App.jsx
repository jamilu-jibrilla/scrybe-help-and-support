import { useState } from "react"
import General from "./pages/General/General"
import HelpSupport from "./pages/HelpAndSupport/HelpSupport"

function App() {
const [display, setDisplay] = useState(true)
  return (
    <div className="App">
      {
      display ?
      <HelpSupport setDisplay={setDisplay}/> :
      <General />}
    </div>
  )
}

export default App
