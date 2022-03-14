import React, { cloneElement } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import './styles/tailwindOutput.css'
import App from './App'
import RootHome from "./pages/Home/Home"
import Ramadan from './pages/ramadan/Ramadan'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<RootHome />}></Route>
        <Route path="ramadan" element={<Ramadan />}></Route>
      </Route>

      {/* error page if the page is not found (optional) */}
      <Route path="*" element={<h1 style={{textAlign:"center"}}>404, Page not found.</h1>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
