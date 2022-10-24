import './App.css';
import HomeScreen from './components/HomeScreen';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
