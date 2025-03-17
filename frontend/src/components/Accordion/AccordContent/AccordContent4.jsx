import { useState } from 'react'
import React from 'react'
import './AccordionContent.style.css'
import CheckBox from '../../CheckBox/CheckBox'
import AccordCon4Comp from './AccordCon4Comp/AccordCon4Comp'

const AccordContent3 = ({}) => {
	const education = [
		'Среднее общее образование',
		'Среднее профессиональное образование',
	]
	const certificate = [
		'Аттестат о среднем общее образование',
		'Аттестат о среднем профессиональное образование',
	]
	return (
		<>
			<div className='flex flex-col gap-5 w-full py-5'>
				<AccordCon4Comp
					text1='Якутск'
					text2_1={education[0]}
					text2_2={certificate[0]}
					text3='1232 / 8732132'
					text4='22.5.2010'
				/>
				<AccordCon4Comp
					text1='Свердловск'
					text2_1={education[1]}
					text2_2={certificate[1]}
					text3='1232 / 8732132'
					text4='22.5.2010'
				/>
				<div className='flex justify-end mt-4'>
					<label className=' flex ac-input-file w-46.5 justify-center p-2 mx-5'>
						<input type='file' className='hidden' />
						<span>Добавить</span>
						<img src='icons/inputFile_icon.svg' alt='' className='ml-2' />
					</label>
				</div>
			</div>
		</>
	)
}

export default AccordContent3
