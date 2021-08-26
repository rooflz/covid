import './App.css';
import AreaChart from './AreaChart';
import BarChart from "./BarChart"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        Daily covid cases in Wake County Public Schools
        {/* <AreaChart width="800" height="800" /> */}
        <BarChart width="800" height="800" />
      {/* </header> */}
    </div>
  );
}

export default App;
