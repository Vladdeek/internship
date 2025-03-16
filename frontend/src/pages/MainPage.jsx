import { useState } from 'react'
import SideBar from '../components/SideBar/SideBar'
import Header from '../components/Header/Header'
import Accordion from '../components/Accordion/Accordion'
import AccordContent1 from '../components/Accordion/AccordContent/AccordContent1'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import Chapter1 from './chapters/Chap1'

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<div className='flex'>
			<SideBar />
			<div className='w-full lg:w-4/5'>
				<Header
					burger_btn={isMenuOpen ? 'icons/cross.svg' : 'icons/burger.svg'}
					toggleMenu={toggleMenu}
					isMenuOpen={isMenuOpen}
				/>
				{isMenuOpen && <BurgerMenu />}
				<Chapter1 />
			</div>
		</div>
	)
}

export default MainPage
