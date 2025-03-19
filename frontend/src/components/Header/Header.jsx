import { useState } from 'react'
import React from 'react'
import './Header.style.css'
import Profile from './Profile'

const Header = ({ burger_btn, toggleMenu, isMenuOpen }) => {
	return (
		<header className='flex m-0 lg:ml-4 h-23 px-8 w-full justify-between'>
			<img
				className='lg:hidden h-8 self-center cursor-pointer'
				src={isMenuOpen ? 'icons/cross.svg' : burger_btn}
				alt='menu'
				onClick={toggleMenu}
			/>
			<h1 className='hidden lg:block h-title self-center'>
				Личный кабинет абитуриента МелГУ
			</h1>
			<img src='Russia.svg' alt='' className='h-5 self-center mr-60 lg:mr-65' />
			<Profile userName='Владислав Рязанов' userId='9438513402' image_path='' />
		</header>
	)
}

export default Header
