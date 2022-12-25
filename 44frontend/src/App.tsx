import { Route, Routes } from 'react-router-dom';
import Discography from './pages/Discography';
import Feed from './pages/Feed';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/disco" element={<Discography />} />
      </Routes>
    </>
  )
}

export default App
