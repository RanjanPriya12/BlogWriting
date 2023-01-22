import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { SingleBlog } from './components/singleBlog/SingleBlog';
import Helper from './components/writeBlog/helper';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/:id" element={<SingleBlog/>}/>
        <Route path="/newBLog" element={<Helper/>}/>
      </Routes>
    </div>
  );
}

export default App;
