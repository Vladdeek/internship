import { useState } from 'react'
import React from 'react'
import './AccordCon4Comp.style.css'

const AccordCon4Comp = ({ text1, text2_1, text2_2, text3, text4 }) => {
	return (
		<>
			<div className='AccordCon4Comp grid grid-cols-12 text-center text-sm w-full'>
				<div className='grid xl:col-span-11 col-span-10 xl:grid-cols-6 grid-cols-3 items-center'>
					<p className='xl:col-span-1 col-span-1 order-1'>{text1}</p>
					<div className='xl:col-span-3 col-span-4 order-4'>
						<p>{text2_1}</p>
						<p>{text2_2}</p>
					</div>
					<p className='xl:col-span-1 col-span-1 order-2'>{text3}</p>
					<p className='xl:col-span-1 col-span-1 order-3'>{text4}</p>
				</div>
				<div className='xl:col-span-1 col-span-2 flex items-center'>
					<img src='icons/edit-btn.svg' alt='' className='edit-btn' />
					<img src='icons/del-btn.svg' alt='' className='del-btn' />
				</div>
			</div>
		</>
	)
}

export default AccordCon4Comp
