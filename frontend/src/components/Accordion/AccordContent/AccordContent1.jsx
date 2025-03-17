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
		<div className='p-5'>
			<div className='row flex'>
				<img
					src={
						img_path.length === 0
							? 'https://placehold.co/120x120'
							: user_img_path
					}
					alt='...'
					className='ac-profile-image p-1 mr-4'
				/>
				<div className='flex flex-col gap-1 w-full'>
					<div className='flex gap-3'>
						<div className='flex flex-col w-2/9'>
							<label className='ac-input-labels'>Ваш ID:</label>
							<input
								type='text'
								className='ac-input w-full p-2'
								value={user_id}
							/>
						</div>
						<div className='flex flex-col w-3/9'>
							<label className='ac-input-labels'>Электронная почта</label>
							<input
								type='text'
								className='ac-input w-full p-2'
								value={user_email}
							/>
						</div>
						<div className='flex flex-col w-4/9'>
							<label className='ac-input-labels'>Номер телефона</label>
							<input
								type='text'
								className='ac-input w-full p-2'
								value={user_phone}
							/>
						</div>
					</div>

					<div className='flex gap-3'>
						<div className='flex flex-col w-3/9'>
							<label className='ac-input-labels'>Фамилия</label>
							<input
								type='text'
								className='ac-input w-full p-2'
								value={user_surname}
							/>
						</div>
						<div className='flex flex-col w-2/9'>
							<label className='ac-input-labels'>Имя</label>
							<input
								type='text'
								className='ac-input w-full p-2'
								value={user_name}
							/>
						</div>
						<div className='flex flex-col w-4/9'>
							<label className='ac-input-labels'>Отчество</label>
							<input
								type='text'
								className='ac-input w-full p-2'
								value={user_patronymic}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='row flex gap-3'>
				<div className='flex flex-col w-1/3'>
					<label className='ac-input-labels'>Дата рождения</label>
					<input
						type='date'
						className='ac-input w-full p-2'
						value={user_birthday}
					/>
				</div>
				<div className='flex flex-col w-1/3'>
					<label className='ac-input-labels'>ИНН</label>
					<input
						type='password'
						className='ac-input w-full p-2'
						value={user_inn}
					/>
				</div>
				<div className='relative flex flex-col w-1/3'>
					<label className='ac-input-labels'>Форма подачи заявления</label>
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
			</div>
			<div className='row flex gap-3'>
				<div className='flex flex-col w-1/3'>
					<label className='ac-input-labels'>СНИЛС</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={user_snils}
					/>
				</div>
				<div className='flex flex-col w-1/3'>
					<label className='ac-input-labels'>Дата СНИЛС</label>
					<input
						type='date'
						className='ac-input w-full p-2'
						value={user_date_snils}
					/>
				</div>
				<div className='flex flex-col w-1/3'>
					<label className='ac-input-labels'>Копия СНИЛС</label>
					<label className='ac-input-file w-55 text-center p-2'>
						Загрузить
						<input type='file' className='hidden' />
					</label>
				</div>
			</div>
			<div className='row flex gap-3'>
				<div className='relative flex flex-col w-2/3'>
					<label className='ac-input-labels'>Гражданство</label>
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
		</div>
	)
}

export default AccordContent1
