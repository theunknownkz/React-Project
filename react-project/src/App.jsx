import { useState } from "react"
import "./App.css"

function Header({ name, year }) {
  return (
    <header>
      <h1>Hi {name}</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "One",
  "Two",
  "Three"
]

const numberObjects = items.map((number, i) => ({
  id: i,
  title: number
}))

function Main({ numbers }) {
  return (
    <>
      <ul>
        {numbers.map((number) =>
        <li key={number.id} style={{ listStyleType: "None" }}>{number.title}
        </li>)}
      </ul>
    </>
  )
}

function App() {
  const [status, setStatus] = useState("Open")
  return (
  <div>
    <h1>Current status is {status}.</h1>
    <button onClick={() => setStatus("Closed")}>
      Close
    </button>
    <Header name="Alex" year={new Date().getFullYear()} />
    <Main numbers={numberObjects} />
  </div>
  )
}

export default App
