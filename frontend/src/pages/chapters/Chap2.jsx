import { useState } from 'react'
import Chap2Comp from './Chap2Comp/Chap2Comp'

const Chapter2 = () => {
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
			<div className='flex flex-col items-center max-lg:px-3'>
				<div className='lg:w-2/3 mt-13'>
					<p className='text-xl m-5'>
						Индивидуальные достижения/Олимпиады/Льготы
					</p>

					<div className=' bg-white flex flex-col gap-5 py-5'>
						<div className='flex justify-between items-center mr-5'>
							<p className='text-sm mx-5'>Признак</p>
							<p className='text-sm w-95 text-center'>Тип признака</p>
							<p className='text-sm'>Тип документа</p>
							<p className='text-sm'>Реквизиты</p>
							<p className='text-sm'>Документ</p>
						</div>
						<Chap2Comp
							text1='Якутск'
							text2_1={education[0]}
							text2_2={certificate[0]}
							text3='1232 / 8732132'
							text4='22.5.2010'
							text5='22.5.2010'
						/>
						<Chap2Comp
							text1='Свердловск'
							text2_1={education[1]}
							text2_2={certificate[1]}
							text3='1232 / 8732132'
							text4='22.5.2010'
							text5='22.5.2010'
						/>
						<div className='flex justify-end mt-4'>
							<label className=' flex ac-input-file w-46.5 justify-center p-2 mx-5'>
								<input type='file' className='hidden' />
								<span>Добавить</span>
								<img src='icons/inputFile_icon.svg' alt='' className='ml-2' />
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Chapter2
