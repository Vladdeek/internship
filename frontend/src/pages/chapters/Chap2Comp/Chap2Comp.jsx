import { useState } from 'react'
import React from 'react'
import './Chap2Comp.css'

const Chap2Comp = ({ text1, text2_1, text2_2, text3, text4, text5 }) => {
	return (
		<>
			<div className='flex Chap2Comp justify-between items-center mr-5'>
				<p className='text-sm mx-5'>{text1}</p>
				<div className='text-sm w-95 text-center'>
					<p>{text2_1}</p>
					<p>{text2_2}</p>
				</div>
				<p className='text-sm'>{text3}</p>
				<p className='text-sm'>{text4}</p>
				<p className='text-sm'>{text5}</p>
			</div>
		</>
	)
}

export default Chap2Comp
