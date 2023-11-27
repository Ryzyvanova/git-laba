import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1);

    return (
        <div className="App">
            <h1 style={{fontSize: 70, color: 'green'}}>value = {state}</h1>
            <button
                style={{background: 'black', color: "red", padding: 15}}
                onClick={increment}
            >
                Старт
            </button>
        </div>
    );
}

export default App;
