import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Discography from './pages/Discography';
import TestPage from './pages/TestPage';
import NavLayout from './components/NavLayout';

function App() {
  return (
    <>
      <NavLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/disco" element={<Discography />} />
        </Routes>
      </NavLayout>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  )
}

export default App
