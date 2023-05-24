import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
    return (
        <main className="App">
         <Routes>
             <Route path={'/'} element={<Home/>}/>
         </Routes>
        </main>
    );
}

export default App;
