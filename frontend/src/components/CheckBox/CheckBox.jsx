import { useState } from 'react'
import React from 'react'
import './CheckBox.style.css'
import active from './Active.svg'
import inactive from './Inactive.svg'

const CheckBox = ({ text }) => {
	return (
		<label className='flex items-center cursor-pointer whitespace-normal mb-5'>
			<input type='checkbox' className='hidden peer' />
			<img src={inactive} alt='...' className='peer-checked:hidden' />
			<img src={active} alt='...' className='hidden peer-checked:block' />
			<span className='text-base ml-2'>{text}</span>
		</label>
	)
}

export default CheckBox
