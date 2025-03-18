import { useState } from 'react'
import React from 'react'
import './SBChapter.style.css'

const SBChapter = ({ image_path, title, isOpen, onToggle }) => {
	return (
		<>
			<div
				onClick={onToggle} // Меняем состояние при клике
				style={{
					backgroundColor: isOpen && '#c10f1a',
					color: isOpen && '#fff',
					transition: '0.3s',
				}}
				className='sb-chapter flex h-12 items-center px-4 select-none cursor-default max-lg:bg-white max-lg:mt-2'
			>
				<img
					src={image_path}
					alt=''
					className={`sbc-icon max-lg:invert-${isOpen ? '0' : '100'}`}
				/>
				<p
					className={`sbc-title text-white max-lg:text-${
						isOpen ? 'white' : 'black'
					} text-start mx-6`}
				>
					{title}
				</p>
				<img
					src='icons/vector.svg'
					alt=''
					className={`sbc-btn max-lg:invert-${isOpen ? '0' : '100'}`}
				/>
			</div>
		</>
	)
}

export default SBChapter
