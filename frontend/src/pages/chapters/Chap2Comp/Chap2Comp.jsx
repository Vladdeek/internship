import { useState } from 'react'
import React from 'react'
import './Chap2Comp.css'

const Chap2Comp = ({ text1, text2_1, text2_2, text3, text4, text5 }) => {
	return (
		<>
			<div className='Chap2Comp grid grid-cols-4 lg:grid-cols-7 gap-2 w-full p-5 text-sm items-center text-center'>
				<p className='col-span-1 order-1'>{text1}</p>
				<p className='col-span-1 order-3'>{text3}</p>
				<p className='col-span-1 order-4'>{text4}</p>
				<p className='col-span-1 order-5'>{text5}</p>
				<div className='col-span-3 order-2 max-lg:col-span-full max-lg:order-5'>
					<p>{text2_1}</p>
					<p>{text2_2}</p>
				</div>
			</div>
		</>
	)
}

export default Chap2Comp
