import { useState } from 'react'
import Chap6Comp from './Chap6Comp/Chap6Comp'
import './Styles/Chap3.style.css'

const Chapter6 = () => {
	return (
		<>
			<div className='flex flex-col items-center px-3'>
				<div className='lg:w-2/3 mt-13'>
					<p className='text-xl m-5'>
						Индивидуальные достижения/Олимпиады/Льготы
					</p>

					<div className=' bg-white flex flex-col gap-5 py-5'>
						<div className='lg:grid grid-cols-1 lg:grid-cols-4 gap-2 w-full px-5 text-sm items-center text-center hidden'>
							<p className='col-span-1'>Дата комментария</p>
							<p className='col-span-3'>Текст</p>
						</div>
						<Chap6Comp
							text1='24.11.2020 14:24:55'
							text2='Это тестировочный текст, сгенерированный ChatGPT для проверки работы системы. Он не несёт смысловой нагрузки и предназначен исключительно для тестирования отображения, форматирования и других технических аспектов.'
						/>
						<div className='flex flex-col mt-4 w-full'>
							<p className='text-xs mx-5 my-1'>Напишите комментарий</p>
							<div className='grid grid-cols-1 lg:grid-cols-5 gap-5 w-full px-5 items-start'>
								<input
									type='text'
									name=''
									className='c6-input lg:col-span-4 h-18 col-span-1'
								/>
								<button className='c6-btn p-2 col-span-1'>Отправить</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Chapter6
