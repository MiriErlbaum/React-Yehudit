import './App.css';
import MyButton from "./components/example";

function App() {
  return (
    <div>
      <MyButton title="I'm a disabled button" disabled={false}/>
    </div>
  );
}

export default App;
