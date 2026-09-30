import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Placeholder from './pages/Placeholder';
//CHANGE PLACEHOLDER WITH REAL PAGE LATER
//I'LL MAKE EVERYTHING INTO INDEX FOR TESTING AND SPLIT INTO OTHER PAGES LATER

function App() {

  return (
    <Routes>
      <Route>
        <Route index element={<Placeholder />} />
      </Route>
    </Routes>
  )
}

export default App
