import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Discography from './pages/Discography';
import TestPage from './pages/TestPage';
import NavLayout from './components/NavLayout';
import { useEffect, useState } from 'react';
import client from './client';
import DataContext from './context/data';


function App() {
  const [data, setData] = useState(null)
  const query = '*[_type == "talent" || _type == "work" || _type == "feed" || _type == "dsp"] {_id, _type, name, profileImage, shortBio, title, publicationName, logo, link, artistName, features, cover, contributor, icon, links}'
  useEffect(() => {
    client.fetch(query).then((data: any) => {
      data = data.map((d: any) => {
        return Object.fromEntries(
          Object.entries(d).filter(([key, value]) => value !== null)
        );
      })

      const filteredData = data.reduce((acc: any, item: any) => { //TODO change types from "any"
        acc[item._type] = acc[item._type] || []
        acc[item._type].push(item)
        return acc
      }, {})

      setData(filteredData)
    })

  }, [])
  return (
    <DataContext.Provider value={data}>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/discography" element={<Discography />} />
        </Route>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </DataContext.Provider>
  )
}

export default App
