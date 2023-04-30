import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Section1 from './components/Section1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Section1 title="Section 1"/>
        <Banner />
        
        <Footer />
      </header>
    </div>
  );
}

export default App;
