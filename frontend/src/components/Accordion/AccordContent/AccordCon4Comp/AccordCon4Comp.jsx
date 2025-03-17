import { useState } from 'react'
import React from 'react'
import './AccordCon4Comp.style.css'

const AccordCon4Comp = ({ text1, text2_1, text2_2, text3, text4 }) => {
	return (
		<>
			<div className='flex AccordCon4Comp justify-between items-center'>
				<p className='text-sm mx-5'>{text1}</p>
				<div className='text-sm w-95 text-center'>
					<p>{text2_1}</p>
					<p>{text2_2}</p>
				</div>
				<p className='text-sm'>{text3}</p>
				<p className='text-sm text-end'>{text4}</p>
				<div className='flex mx-5'>
					<img src='icons/edit-btn.svg' alt='' className='edit-btn w-6 mx-3' />
					<img src='icons/del-btn.svg' alt='' className='del-btn w-6' />
				</div>
			</div>
		</>
	)
}

export default AccordCon4Comp
