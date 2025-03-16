import React from 'react'
import { Link } from 'react-router-dom'
import './BurgerMenu.style.css'
import SBChapter from '../SideBar/SBChapter'

const BurgerMenu = ({}) => {
	return (
		<>
			<div className='lg:hidden my-2 px-3'>
				<SBChapter title='Основные данные' image_path='icons/icon1.svg' />
				<SBChapter
					title='Индивидуальные достижения'
					image_path='icons/icon2.svg'
				/>
				<SBChapter
					title='Направление поступления'
					image_path='icons/icon3.svg'
				/>
				<SBChapter title='Дополнительные файлы' image_path='icons/icon4.svg' />
				<SBChapter title='Конкурсные списки' image_path='icons/icon5.svg' />
				<SBChapter title='Обратная связь' image_path='icons/icon6.svg' />
			</div>
		</>
	)
}

export default BurgerMenu
