import { useState, useEffect } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {


  return (
	  <BrowserRouter>
		<div className="container-fluid">
		<Navbar />
			<Routes>
				<Route path="login" element='Login'>
					login
				</Route>
				<Route path="admin" element="admin">
					admin
				</Route>
				<Route path='/' element='inicio'>

				</Route>
			</Routes>
		</div>
	</BrowserRouter>
  )
}

export default App
