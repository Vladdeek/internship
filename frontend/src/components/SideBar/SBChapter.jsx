import { useState } from 'react'
import React from 'react'
import './SBChapter.style.css'

const SBChapter = ({ image_path, title }) => {
	return (
		<>
			<div
				tabIndex={0}
				className='sb-chapter flex h-12 items-center px-4 select-none cursor-default'
			>
				<img src={image_path} alt='' className='sbc-icon' />
				<p className='sbc-title text-white text-start mx-6'>{title}</p>
				<img src='icons/sbc-btn.svg' alt='' className='sbc-btn' />
			</div>
		</>
	)
}

export default SBChapter
