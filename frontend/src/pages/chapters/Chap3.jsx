import { useState } from 'react'
import './Styles/Chap3.style.css'

const Chapter3 = () => {
	return (
		<>
			<div className='flex flex-col items-center px-3'>
				<div className='2xl:w-2/3 w-full mt-13'>
					<p className='text-xl m-5'>Выберите основание поступления</p>
					<div className='bg-white h-103 p-5 flex flex-col justify-between'>
						<div className='flex w-full gap-2'>
							<label className='w-1/2'>
								<input type='radio' name='entrance' className='hidden peer' />
								<span className='radio-btn block py-2 border text-center cursor-pointer transition-all'>
									Федеральный бюджет
								</span>
							</label>
							<label className='w-1/2'>
								<input type='radio' name='entrance' className='hidden peer' />
								<span className='radio-btn block py-2 border text-center cursor-pointer h-full transition-all'>
									Платное обучение
								</span>
							</label>
						</div>
						<div className='flex justify-end mt-4'>
							<label className=' flex input-file-btn w-full lg:w-4/9 justify-center p-2'>
								<input type='file' className='hidden' />
								<span>Выбрать документ об образовании</span>
								<img src='icons/inputFile_icon.svg' alt='' className='ml-2' />
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Chapter3
