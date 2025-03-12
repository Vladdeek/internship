import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from 'react-router'
import './style/style.css'
import MainPage from './pages/MainPage'

createRoot(document.getElementById('root')).render(
	<>
		<MainPage />
	</>
)
