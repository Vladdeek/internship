import { useState } from 'react'
import React from 'react'
import './Chap6Comp.css'

const Chap6Comp = ({ text1, text2 }) => {
	return (
		<>
			<div className='Chap6Comp grid grid-cols-1 2xl:grid-cols-4 gap-2 w-full p-5 text-sm items-center text-center'>
				<p className='2xl:col-span-1'>{text1}</p>
				<div className='2xl:col-span-3 col-span-1'>{text2}</div>
			</div>
		</>
	)
}

export default Chap6Comp
