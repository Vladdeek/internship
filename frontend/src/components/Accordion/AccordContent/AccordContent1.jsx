import { useState } from 'react'
import React from 'react'
import './AccordionContent.style.css'

const AccordContent1 = ({
	user_img_path,
	user_id,
	user_email,
	user_phone,
	user_surname,
	user_name,
	user_patronymic,
	user_birthday,
	user_inn,
	user_fpz,
	user_snils,
	user_date_snils,
}) => {
	const img_path = ''
	return (
		<>
			<div className='grid grid-cols-12 lg:grid-rows-5 gap-x-3 max-lg:grid-cols-2 p-5'>
				<img
					src={
						img_path.length === 0
							? 'https://placehold.co/120x120'
							: user_img_path
					}
					alt='...'
					className='ac-profile-image row-span-2 col-span-2 max-lg:col-span-2'
				/>

				<div className='row-span-1 col-span-2  max-lg:col-span-1 max-lg:order-1'>
					<label className='text-sm'>Ваш ID:</label>
					<input type='text' className='ac-input w-full p-2' value={user_id} />
				</div>
				<div className='row-span-1 col-span-3  max-lg:col-span-2 max-lg:order-7'>
					<label className='text-sm'>Электронная почта</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_email}
					/>
				</div>
				<div className='row-span-1 col-span-5  max-lg:col-span-1 max-lg:order-6'>
					<label className='text-sm'>Номер телефона</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_phone}
					/>
				</div>

				<div className='row-span-1 col-span-3  max-lg:col-span-1 max-lg:order-3'>
					<label className='text-sm'>Фамилия</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_surname}
					/>
				</div>
				<div className='row-span-1 col-span-2  max-lg:col-span-1 max-lg:order-2'>
					<label className='text-sm'>Имя</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_name}
					/>
				</div>
				<div className='row-span-1 col-span-5  max-lg:col-span-1 max-lg:order-4'>
					<label className='text-sm'>Отчество</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_patronymic}
					/>
				</div>

				<div className='row-span-1 col-span-4  max-lg:col-span-1 max-lg:order-5'>
					<label className='text-sm'>Дата рождения</label>
					<input
						type='date'
						className='ac-input w-full p-2'
						value={user_birthday}
					/>
				</div>
				<div className='row-span-1 col-span-4  max-lg:col-span-1 max-lg:order-10'>
					<label className='text-sm'>ИНН</label>
					<input
						type='password'
						className='ac-input w-full p-2'
						value={user_inn}
					/>
				</div>

				<div className='relative row-span-1 col-span-4  max-lg:col-span-2 max-lg:order-8'>
					<label className='text-sm'>Форма подачи заявления</label>
					<div className='relative w-full'>
						<select className='ac-input w-full p-2 pr-10 appearance-none'>
							<option value='online'>Онлайн</option>
							<option value='offline'>Очно</option>
						</select>
						<img
							src='icons/select-arrow.svg'
							alt=''
							className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
						/>
					</div>
				</div>

				<div className='row-span-1 col-span-4  max-lg:col-span-1 max-lg:order-11'>
					<label className='text-sm'>СНИЛС</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_snils}
					/>
				</div>
				<div className='row-span-1 col-span-4  max-lg:col-span-1 max-lg:order-12'>
					<label className='text-sm'>Дата СНИЛС</label>
					<input
						type='date'
						className='ac-input w-full p-2'
						value={user_date_snils}
					/>
				</div>
				<div className='row-span-1 col-span-3 flex flex-col  max-lg:col-span-1 max-lg:order-13'>
					<label className='text-sm'>Копия СНИЛС</label>
					<label className='input-file-btn text-center p-2 my-1'>
						Загрузить
						<input type='file' className='hidden' />
					</label>
				</div>

				<div className='relative row-span-1 col-span-8  max-lg:col-span-2 max-lg:order-14'>
					<label className='text-sm'>Гражданство</label>
					<div className='relative w-full'>
						<select className='ac-input w-full p-2 pr-10 appearance-none'>
							<option value='Russian'>Россия</option>
							<option value='other'>другое...</option>
						</select>
						<img
							src='icons/select-arrow.svg'
							alt=''
							className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default AccordContent1
