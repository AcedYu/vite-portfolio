import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Layout from './Layout.jsx';
import Placeholder from './pages/Placeholder';
//CHANGE PLACEHOLDER WITH REAL PAGE LATER
//I'LL MAKE EVERYTHING INTO INDEX FOR TESTING AND SPLIT INTO OTHER PAGES LATER

function App() {

  return (
    <Routes>
      <Route element = {<Layout />}>
        <Route index element={<Placeholder />} />
      </Route>
    </Routes>
  )
}

export default App
