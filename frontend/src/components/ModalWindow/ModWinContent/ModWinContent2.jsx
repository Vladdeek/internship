import { useState } from 'react'
import React from 'react'

const ModWinCon2 = ({ date_doc, number_doc, serial_doc }) => {
	return (
		<>
			<div className='grid grid-cols-2 gap-3 p-5'>
				<div className='relative col-span-2'>
					<label className='text-sm'>Признак</label>
					<div className='relative w-full'>
						<select className='ac-input w-full p-2 pr-10 appearance-none'>
							<option value='0'>Не выбрано</option>
							<option value='other'>другое...</option>
						</select>
						<img
							src='icons/select-arrow.svg'
							alt=''
							className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
						/>
					</div>
				</div>
				<div className='relative col-span-2'>
					<label className='text-sm'>Тип признака</label>
					<div className='relative w-full'>
						<select className='ac-input w-full p-2 pr-10 appearance-none'>
							<option value='0'>Не выбрано</option>
							<option value='other'>другое...</option>
						</select>
						<img
							src='icons/select-arrow.svg'
							alt=''
							className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
						/>
					</div>
				</div>
				<div className='relative col-span-2'>
					<label className='text-sm'>Тип документа</label>
					<div className='relative w-full'>
						<select className='ac-input w-full p-2 pr-10 appearance-none'>
							<option value='0'>Не выбрано</option>
							<option value='other'>другое...</option>
						</select>
						<img
							src='icons/select-arrow.svg'
							alt=''
							className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
						/>
					</div>
				</div>
				<div className='col-span-1'>
					<label className='text-sm'>Дата выдачи</label>
					<input type='data' className='ac-input w-full p-2' value={date_doc} />
				</div>
				<div className='col-span-1'>
					<label className='text-sm'>Серия документа</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={serial_doc}
					/>
				</div>
				<div className='col-span-2'>
					<label className='text-sm'>Номер документа</label>
					<input
						type='text'
						className='ac-input w-full p-2'
						value={number_doc}
					/>
				</div>
				<div className='col-span-1 flex flex-col'>
					<label className='text-sm'>Файл</label>
					<label className='input-file-btn text-center p-2 my-1'>
						Загрузить
						<input type='file' className='hidden' />
					</label>
				</div>
				<label className='col-span-2 mt-8 input-file-btn text-center p-2 my-1'>
					Сохранить
					<input type='submit' className='hidden' />
				</label>
			</div>
		</>
	)
}

export default ModWinCon2
