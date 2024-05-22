import './App.css';
import Example from "./components/example.component";

function App() {
  return (
    <div>
      <Example title="I'm a disabled button" disabled={false}/>
    </div>
  );
}

export default App;
