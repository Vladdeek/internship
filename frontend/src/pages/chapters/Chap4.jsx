import { useState } from 'react'
import Chap4Comp from './Chap4Comp/Chap4Comp'

const Chapter4 = ({ setModalActiveIndex, toggleModal }) => {
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
			<div className='flex flex-col items-center px-3'>
				<div className='lg:w-2/3 mt-13'>
					<p className='text-xl m-5'>
						Индивидуальные достижения/Олимпиады/Льготы
					</p>

					<div className=' bg-white flex flex-col gap-5 py-5'>
						<div className='2xl:grid grid-cols-3 lg:grid-cols-6 gap-2 w-full px-5 text-sm items-center text-center hidden'>
							<p className='col-span-1 order-1'>Наименование</p>
							<p className='col-span-1 order-2'>Номер</p>
							<p className='col-span-1 order-3'>Дата выдачи</p>
							<p className='col-span-3 order-4'>Документ</p>
						</div>
						<Chap4Comp
							text1='Якутск'
							text2='2345 / 4321444'
							text3='22.5.2010'
							text4_1={education[1]}
							text4_2={certificate[1]}
						/>
						<div className='flex justify-end mt-4'>
							<label className=' flex input-file-btn w-46.5 justify-center p-2 mx-5'>
								<input
									type='button'
									className='hidden'
									onClick={() => {
										setModalActiveIndex(2)
										toggleModal()
									}}
								/>
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

export default Chapter4
