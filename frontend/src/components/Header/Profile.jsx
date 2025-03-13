import { useState } from 'react'
import React from 'react'
import './Profile.style.css'
import PSBtn from './PSBtn'

const Profile = ({ userName, userId, image_path }) => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [borderColor, setBorderColor] = useState('') // Состояние для цвета border

	const toggleSettings = () => {
		setIsSettingsOpen(!isSettingsOpen)
		setBorderColor(isSettingsOpen ? '#696969' : '#820000') // Меняем цвет рамки
	}

	return (
		<>
			<div
				className='profile absolute right-4 top-3'
				style={{
					borderColor: borderColor,
					borderWidth: '1px',
					borderStyle: 'solid',
				}}
			>
				<div className='p-con p-3 flex'>
					<div className='p-info-con flex flex-col items-end'>
						<h1 className='p-user-name'>{userName}</h1>
						<h1 className='p-user-id'>ID: {userId}</h1>
					</div>
					<img
						src={
							image_path.length !== 0
								? image_path
								: 'https://placehold.co/40x40'
						}
						alt=''
						className='p-image mx-4'
					/>
					<img
						src='icons/vector.svg'
						alt=''
						className='p-btn cursor-pointer'
						onClick={toggleSettings}
					/>
				</div>
				{isSettingsOpen && (
					<div className='p-settings flex flex-col'>
						<PSBtn
							title='Сменить электронную почту'
							image_path='icons/icon7.svg'
						/>
						<PSBtn title='Сменить пароль' image_path='icons/icon8.svg' />
						<PSBtn title='Выйти' image_path='icons/icon9.svg' />
					</div>
				)}
			</div>
		</>
	)
}

export default Profile
