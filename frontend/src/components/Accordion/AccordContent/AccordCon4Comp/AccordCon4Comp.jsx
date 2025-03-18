import { useState } from 'react'
import React from 'react'
import './AccordCon4Comp.style.css'

const AccordCon4Comp = ({ text1, text2_1, text2_2, text3, text4 }) => {
	return (
		<>
			<div className='AccordCon4Comp grid grid-cols-12 text-center text-sm'>
				<div className='grid col-span-11 max-lg:col-span-10 grid-cols-6 max-lg:grid-cols-3 items-center'>
					<p className='col-span-1 max-lg:col-span-1 max-lg:order-1'>{text1}</p>
					<div className='col-span-3 max-lg:col-span-4 max-lg:order-4'>
						<p>{text2_1}</p>
						<p>{text2_2}</p>
					</div>
					<p className='col-span-1 max-lg:col-span-1 max-lg:order-2'>{text3}</p>
					<p className='col-span-1 max-lg:col-span-1 max-lg:order-3'>{text4}</p>
				</div>
				<div className='col-span-1 max-lg:col-span-2 flex items-center'>
					<img src='icons/edit-btn.svg' alt='' className='edit-btn' />
					<img src='icons/del-btn.svg' alt='' className='del-btn' />
				</div>
			</div>
		</>
	)
}

export default AccordCon4Comp
