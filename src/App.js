import './App.css';
import Header from "./component/header/Header";
import DownHeader from "./component/header/DownHeader";
import Speakers from "./component/speakers/Speakers";

function App() {

    return (
        <div className="app" id="content-root">
            <Header></Header>
            <DownHeader></DownHeader>
            <Speakers></Speakers>
        </div>
    );
}

export default App;
