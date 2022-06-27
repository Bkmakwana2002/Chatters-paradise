import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
