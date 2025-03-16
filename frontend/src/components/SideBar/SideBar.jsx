import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.style.css'
import SBChapter from './SBChapter'

const SideBar = ({}) => {
	return (
		<>
			<aside className='hidden lg:flex flex-col w-1/5 h-screen justify-between overflow-y-auto'>
				<div className='sb-top flex flex-col'>
					<img src='logo.svg' alt='' className='sb-logo' />
					<h1 className='sb-title text-white'>Управление</h1>
					<h2 className='sb-subtitle text-white'>Основные</h2>
					<div className='chapter-main my-2'>
						<SBChapter title='Основные данные' image_path='icons/icon1.svg' />
						<SBChapter
							title='Индивидуальные достижения'
							image_path='icons/icon2.svg'
						/>
						<SBChapter
							title='Направление поступления'
							image_path='icons/icon3.svg'
						/>
						<SBChapter
							title='Дополнительные файлы'
							image_path='icons/icon4.svg'
						/>
						<SBChapter title='Конкурсные списки' image_path='icons/icon5.svg' />
					</div>
					<h2 className='sb-subtitle text-white'>Дополнительные</h2>
					<div className='chapter-advance my-2'>
						<SBChapter title='Обратная связь' image_path='icons/icon6.svg' />
					</div>
				</div>
				<div className='sb-bottom flex flex-col'>
					<a className='sb-link' href='#'>
						Помощь
					</a>
					<a className='sb-link' href='#'>
						Контакты
					</a>
					<div className='sb-footer'>
						<p className='sbf-p-t'>
							Мелитопольский Государственный Университет
						</p>
						<p className='sbf-p'>Все права защищены</p>
						<p className='sbf-p-b'>2025</p>
					</div>
				</div>
			</aside>
		</>
	)
}

export default SideBar
