import { useState } from 'react'
import Chap6Comp from './Chap6Comp/Chap6Comp'
import './Styles/Chap3.style.css'

const Chapter6 = () => {
	return (
		<>
			<div className='flex flex-col items-center max-lg:px-3'>
				<div className='lg:w-2/3 mt-13'>
					<p className='text-xl m-5'>
						Индивидуальные достижения/Олимпиады/Льготы
					</p>

					<div className=' bg-white flex flex-col gap-5 py-5'>
						<div className='flex justify-between items-center'>
							<p className='text-sm w-1/4 mx-5'>Дата комментария</p>
							<p className='text-sm w-3/4'>Текст</p>
						</div>
						<Chap6Comp
							text1='24.11.2020 14:24:55'
							text2='Это тестировочный текст, сгенерированный ChatGPT для проверки работы системы. Он не несёт смысловой нагрузки и предназначен исключительно для тестирования отображения, форматирования и других технических аспектов.'
						/>
						<div className='flex flex-col mt-4 w-full'>
							<p className='text-xs mx-5 my-1'>Напишите комментарий</p>
							<div className='flex items-start  gap-5 mx-5'>
								<input type='text' name='' className='c6-input w-4/5 h-18' />
								<button className='c6-btn p-2 w-1/5'>Отправить</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Chapter6
