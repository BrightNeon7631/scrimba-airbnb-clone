import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './data';

function App() {
  const cardElements = cardData.map((item) => {
    return (
        <Card 
          key={item.id}
          item={item}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <div className='content'>
        <Hero />
        <section className='cards-list'>
          {cardElements}
        </section>
      </div>
    </div>
  )
}

export default App