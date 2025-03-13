import { useState } from 'react'
import React from 'react'
import './PSBtn.style.css'

const PSBtn = ({ title, image_path }) => {
	return (
		<>
			<div className='ps-btn flex h-14 p-3 cursor-default select-none items-center'>
				<img src={image_path} alt='' className='psb-img mx-3' />
				<p className='psb-title text-wrap w-42'>{title}</p>
			</div>
		</>
	)
}

export default PSBtn
