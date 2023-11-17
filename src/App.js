import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NotFound/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/post/:postId' element={<PostDetail/>}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
