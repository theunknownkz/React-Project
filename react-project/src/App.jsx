import { useState, useReducer, use } from "react"
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

function Main({ numbers, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>Set to open</button>
        <h2>
          {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <ul>
        {numbers.map((number) =>
        <li key={number.id} style={{ listStyleType: "None" }}>{number.title}
        </li>)}
      </ul>
    </>
  )
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true)
  return (
  <div>
    <h1>Current status is {status ? "open" : "closed"}.</h1>
    <button onClick={toggle}>
      {status ? "Close" : "Open"}
    </button>
    <Header name="Alex" year={new Date().getFullYear()} />
    <Main
      numbers={numberObjects}
      openStatus={status}
      onStatus={toggle} />
  </div>
  )
}

export default App
