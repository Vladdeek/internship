import { useState } from 'react'
import React from 'react'
import './Chap4Comp.css'

const Chap4Comp = ({ text1, text2, text3, text4_1, text4_2 }) => {
	return (
		<>
			<div className='Chap2Comp grid grid-cols-3 2xl:grid-cols-6 gap-2 w-full p-5 text-sm items-center text-center'>
				<p className='2xl:col-span-1 2xl:order-1'>{text1}</p>
				<p className='2xl:col-span-1 2xl:order-2'>{text2}</p>
				<p className='2xl:col-span-1 2xl:order-3'>{text3}</p>
				<div className='2xl:col-span-3 2xl:order-4 col-span-full '>
					<p>{text4_1}</p>
					<p>{text4_2}</p>
				</div>
			</div>
		</>
	)
}

export default Chap4Comp
