import "./App.css";
import PaperCard from "./PaperCard";

function App() {
  return (
    <div>
      <div className='projectTitle'>general exam</div>
      <div className='cardContainer'>
        <PaperCard />
        <PaperCard />
      </div>
    </div>
  );
}

export default App;
