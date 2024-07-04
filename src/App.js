import About from './components/About';
import HomeScreen from './components/HomeScreen';
import Sidebar from './components/Sidebar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App h-screen flex">
      <div className="w-40 lg:w-64 xl:flex lg:flex md:flex hidden">
        <Sidebar />
      </div>
      <div class="flex-1 flex bg-gray-100 overflow-hidden">
        <div className="flex-1 overflow-y-scroll sm:scroll-smooth">
          <HomeScreen />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
