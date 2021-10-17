import './App.css';
import Header from "./component/header/Header";
import DownHeader from "./component/header/DownHeader";
import Speakers from "./component/speakers/Speakers";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <DownHeader></DownHeader>
            <div className="app-container">
                <Speakers></Speakers>
            </div>
        </div>
    );
}

export default App;
