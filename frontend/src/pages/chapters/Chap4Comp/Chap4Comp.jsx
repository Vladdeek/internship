import { useState } from 'react'
import React from 'react'
import './Chap4Comp.css'

const Chap4Comp = ({ text1, text2, text3, text4_1, text4_2 }) => {
	return (
		<>
			<div className='flex Chap2Comp justify-between items-center mr-5'>
				<p className='text-sm w-1/5 mx-5 text-center'>{text1}</p>
				<p className='text-sm w-1/5 text-center'>{text2}</p>
				<p className='text-sm w-1/5 text-center'>{text3}</p>
				<div className='text-sm w-2/5 text-center'>
					<p>{text4_1}</p>
					<p>{text4_2}</p>
				</div>
			</div>
		</>
	)
}

export default Chap4Comp
