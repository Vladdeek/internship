import { useState } from 'react'
import React from 'react'
import './Chap6Comp.css'

const Chap6Comp = ({ text1, text2 }) => {
	return (
		<>
			<div className='flex Chap6Comp justify-between items-center mr-5'>
				<p className='text-sm w-1/4 mx-5'>{text1}</p>
				<div className='text-sm w-3/4'>{text2}</div>
			</div>
		</>
	)
}

export default Chap6Comp
