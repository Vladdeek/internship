import { useState } from 'react'
import React from 'react'
import './Chap4Comp.css'

const Chap4Comp = ({ text1, text2, text3, text4_1, text4_2 }) => {
	return (
		<>
			<div className='Chap2Comp grid grid-cols-3 lg:grid-cols-6 gap-2 w-full p-5 text-sm items-center text-center'>
				<p className='col-span-1 order-1'>{text1}</p>
				<p className='col-span-1 order-2'>{text2}</p>
				<p className='col-span-1 order-3'>{text3}</p>
				<div className='col-span-3 order-4 max-lg:col-span-full '>
					<p>{text4_1}</p>
					<p>{text4_2}</p>
				</div>
			</div>
		</>
	)
}

export default Chap4Comp
