import './App.css';
import Header from "./component/header/Header";
import DownHeader from "./component/header/DownHeader";
import Speakers from "./component/speakers/Speakers";
import Cart from "./component/cart/Cart";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <DownHeader></DownHeader>
            <div className="app-container">
                <Speakers></Speakers>
                <Cart></Cart>
            </div>
        </div>
    );
}

export default App;
