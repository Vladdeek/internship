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
		<div className='flex flex-col gap-1 w-full p-5'>
			<div className='flex gap-3'>
				<div className='relative flex flex-col w-full'>
					<label className='ac-input-labels'>Тип документа</label>
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
			</div>
			<div className='flex gap-3'>
				<div className='flex flex-col w-1/4'>
					<label className='ac-input-labels'>Серия</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={passport_series}
					/>
				</div>
				<div className='flex flex-col w-1/4'>
					<label className='ac-input-labels'>Номер</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={passport_number}
					/>
				</div>
				<div className='flex flex-col w-1/4'>
					<label className='ac-input-labels'>Код подразделения</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={passport_code}
					/>
				</div>
				<div className='flex flex-col w-1/4'>
					<label className='ac-input-labels'>Дата выдачи</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={passport_date}
					/>
				</div>
			</div>
			<div className='flex gap-3'>
				<div className='flex flex-col w-3/4'>
					<label className='ac-input-labels'>Кем выдан</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={passport_issued}
					/>
				</div>
				<div className='flex flex-col w-1/4'>
					<label className='ac-input-labels'>Копия паспорта</label>
					<label className='ac-input-file text-center p-2'>
						Загрузить
						<input type='file' className='hidden' />
					</label>
				</div>
			</div>
			<div className='flex gap-3'>
				<div className='relative flex flex-col w-1/4'>
					<label className='ac-input-labels'>Страна рождения</label>
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
				<div className='relative flex flex-col w-3/4'>
					<label className='ac-input-labels'>Место рождения</label>
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
		</div>
	)
}

export default AccordContent2
