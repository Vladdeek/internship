import { useState } from 'react'
import React from 'react'
import './Header.style.css'
import Profile from './Profile'

const Header = ({}) => {
	return (
		<>
			<header className='flex ml-4 h-23 px-8 w-full justify-between'>
				<h1 className='h-title self-center'>
					Личный кабинет абитуриента МелГУ
				</h1>
				<Profile
					userName='Владислав Рязанов'
					userId='9438513402'
					image_path=''
				/>
			</header>
		</>
	)
}

export default Header
