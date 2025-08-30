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
  const [status, setStatus] = useState(true)
  return (
  <div>
    <h1>Current status is {status ? "open" : "closed"}.</h1>
    <button onClick={() => setStatus(!status)}>
      {status ? "Close" : "Open"}
    </button>
    <Header name="Alex" year={new Date().getFullYear()} />
    <Main numbers={numberObjects} />
  </div>
  )
}

export default App
