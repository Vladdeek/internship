import { useState } from 'react'
import SideBar from '../components/SideBar/SideBar'
import Header from '../components/Header/Header'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import Chapter1 from './chapters/Chap1'
import Chapter2 from './chapters/Chap2'
import Chapter3 from './chapters/Chap3'
import Chapter4 from './chapters/Chap4'
import Chapter5 from './chapters/Chap5'
import Chapter6 from './chapters/Chap6'

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)

	const chapters = [
		<Chapter1 />,
		<Chapter2 />,
		<Chapter3 />,
		<Chapter4 />,
		<Chapter5 />,
		<Chapter6 />,
	]
	const content = chapters[activeIndex]

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<div className='flex'>
			<SideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
			<div className='lg:w-1/5 max-lg:hidden'></div>
			<div className='w-full lg:w-4/5'>
				<Header
					burger_btn={isMenuOpen ? 'icons/cross.svg' : 'icons/burger.svg'}
					toggleMenu={toggleMenu}
					isMenuOpen={isMenuOpen}
				/>
				{isMenuOpen ? (
					<BurgerMenu
						activeIndex={activeIndex}
						setActiveIndex={index => {
							setActiveIndex(index)
							setIsMenuOpen(false)
						}}
					/>
				) : (
					content
				)}
			</div>
		</div>
	)
}

export default MainPage
