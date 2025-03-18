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
import ModalWindow from '../components/ModalWindow/ModalWindow'
import ModWinCon1 from '../components/ModalWindow/ModWinContent/ModWinContent1'
import ModWinCon2 from '../components/ModalWindow/ModWinContent/ModWinContent2'
import ModWinCon3 from '../components/ModalWindow/ModWinContent/ModWinContent3'

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)
	const [modalActiveIndex, setModalActiveIndex] = useState(0)

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}
	const toggleModal = () => {
		setIsModalOpen(prevState => !prevState)
	}

	const chapters = [
		<Chapter1
			setModalActiveIndex={setModalActiveIndex}
			toggleModal={toggleModal}
		/>,
		<Chapter2
			setModalActiveIndex={setModalActiveIndex}
			toggleModal={toggleModal}
		/>,
		<Chapter3 />,
		<Chapter4
			setModalActiveIndex={setModalActiveIndex}
			toggleModal={toggleModal}
		/>,
		<Chapter5 />,
		<Chapter6 />,
	]

	const ModalContent = [<ModWinCon1 />, <ModWinCon2 />, <ModWinCon3 />]

	return (
		<>
			<ModalWindow
				modal_title='Выберите документ'
				toggleModal={toggleModal}
				isModalOpen={isModalOpen}
			>
				{ModalContent[modalActiveIndex]}
			</ModalWindow>
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
						chapters[activeIndex]
					)}
				</div>
			</div>
		</>
	)
}

export default MainPage
