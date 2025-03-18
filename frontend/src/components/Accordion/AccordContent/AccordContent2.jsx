import { useState } from 'react'
import React from 'react'
import './AccordionContent.style.css'

const AccordContent2 = ({
	passport_code,
	passport_date,
	passport_number,
	passport_series,
	passport_issued,
}) => {
	return (
		<div className='grid gap-x-3 grid-cols-4 w-full p-5'>
			<div className='relative col-span-4 max-lg:col-span-4'>
				<label className='text-sm'>Тип документа</label>
				<div className='relative w-full'>
					<select className='ac-input w-full p-2 pr-10 appearance-none'>
						<option value='Russian'>Паспорт РФ</option>
						<option value='other'>другое...</option>
					</select>
					<img
						src='icons/select-arrow.svg'
						alt=''
						className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
					/>
				</div>
			</div>

			<div className='col-span-1 max-lg:col-span-2'>
				<label className='text-sm'>Серия</label>
				<input
					type='text'
					className='ac-input w-full p-2'
					value={passport_series}
				/>
			</div>
			<div className='col-span-1 max-lg:col-span-2'>
				<label className='text-sm'>Номер</label>
				<input
					type='text'
					className='ac-input w-full p-2'
					value={passport_number}
				/>
			</div>
			<div className='col-span-1 max-lg:col-span-2'>
				<label className='text-sm'>Код подразделения</label>
				<input
					type='text'
					className='ac-input w-full p-2'
					value={passport_code}
				/>
			</div>
			<div className='col-span-1 max-lg:col-span-2'>
				<label className='text-sm'>Дата выдачи</label>
				<input
					type='text'
					className='ac-input w-full p-2'
					value={passport_date}
				/>
			</div>

			<div className='col-span-3 max-lg:col-span-2'>
				<label className='text-sm'>Кем выдан</label>
				<input
					type='text'
					className='ac-input w-full p-2'
					value={passport_issued}
				/>
			</div>
			<div className='col-span-1 flex flex-col max-lg:col-span-2'>
				<label className='text-sm'>Копия паспорта</label>
				<label className='input-file-btn text-center p-2 my-1'>
					Загрузить
					<input type='file' className='hidden' />
				</label>
			</div>

			<div className='relative col-span-1 max-lg:col-span-4'>
				<label className='text-sm'>Страна рождения</label>
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
			<div className='relative col-span-3 max-lg:col-span-4'>
				<label className='text-sm'>Место рождения</label>
				<div className='relative w-full'>
					<select className='ac-input w-full p-2 pr-10 appearance-none'>
						<option value='Russian'>Мелитопольский р-н, ...</option>
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
	)
}

export default AccordContent2
