import './App.css'

function Header({name, year}) {
  return (
    <header>
      <h1>Hi {name}</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

function App() {
  return (
  <div>
    <Header name="Alex" year={new Date().getFullYear()} />
    <main>
      <h2>Yes</h2>
    </main>
  </div>
  )
}

export default App
