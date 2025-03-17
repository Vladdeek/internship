import React from 'react'
import { Link } from 'react-router-dom'
import './BurgerMenu.style.css'
import SBChapter from '../SideBar/SBChapter'

const BurgerMenu = ({ activeIndex, setActiveIndex, toggleMenu }) => {
	const handleToggle = index => {
		setActiveIndex(index)
	}
	return (
		<>
			<div className='lg:hidden my-2 px-3'>
				<SBChapter
					title='Основные данные'
					image_path='icons/icon1.svg'
					isOpen={activeIndex === 0}
					onToggle={() => handleToggle(0)}
					onClick={toggleMenu}
				/>
				<SBChapter
					title='Индивидуальные достижения'
					image_path='icons/icon2.svg'
					isOpen={activeIndex === 1}
					onToggle={() => handleToggle(1)}
					onClick={toggleMenu}
				/>
				<SBChapter
					title='Направление поступления'
					image_path='icons/icon3.svg'
					isOpen={activeIndex === 2}
					onToggle={() => handleToggle(2)}
					onClick={toggleMenu}
				/>
				<SBChapter
					title='Дополнительные файлы'
					image_path='icons/icon4.svg'
					isOpen={activeIndex === 3}
					onToggle={() => handleToggle(3)}
					onClick={toggleMenu}
				/>
				<SBChapter
					title='Конкурсные списки'
					image_path='icons/icon5.svg'
					isOpen={activeIndex === 4}
					onToggle={() => handleToggle(4)}
					onClick={toggleMenu}
				/>
				<SBChapter
					title='Обратная связь'
					image_path='icons/icon6.svg'
					isOpen={activeIndex === 5}
					onToggle={() => handleToggle(5)}
					onClick={toggleMenu}
				/>
			</div>
		</>
	)
}

export default BurgerMenu
