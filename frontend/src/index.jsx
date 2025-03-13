import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from 'react-router'
import './style/style.css'
import MainPage from './pages/MainPage'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'

createRoot(document.getElementById('root')).render(
	<>
		<div className='flex'>
			<SideBar />
			<Header />
		</div>
	</>
)
