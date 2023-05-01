import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Section1 from './components/Section1';
import Footer from './components/Footer';
import Flex from './components/Flex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />

        <Section1 title="Section 1"/>
        <Flex />
        <Footer />
      </header>
    </div>
  );
}

export default App;
