import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((item, id) => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}

    </div>
  );
}

export default App;
