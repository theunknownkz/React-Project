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
  return (
  <div>
    <Header name="Alex" year={new Date().getFullYear()} />
    <Main numbers={numberObjects} />
  </div>
  )
}

export default App
