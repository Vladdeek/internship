import { useState } from 'react'
import React from 'react'
import CheckBox from '../../CheckBox/CheckBox'

const ModWinCon1 = ({
	date_doc,
	number_doc,
	serial_doc,
	name_educational_institutions,
}) => {
	return (
		<>
			<div className='p-5'>
				<div className='grid grid-cols-3 gap-3 mb-5'>
					<div className='relative col-span-3'>
						<label className='text-sm'>Уровень образования</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Не выбрано</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative col-span-3'>
						<label className='text-sm'>Тип документа</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Не выбрано</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>

					<div className='col-span-1'>
						<label className='text-sm'>Серия</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={serial_doc}
						/>
					</div>
					<div className='col-span-1'>
						<label className='text-sm'>Номер</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={number_doc}
						/>
					</div>
					<div className='col-span-1'>
						<label className='text-sm'>Дата</label>
						<input
							type='data'
							className='ac-input w-full p-2'
							value={date_doc}
						/>
					</div>
				</div>
				<CheckBox text='Окончил МелГУ' />
				<div className='grid grid-cols-2 gap-3 mb-5'>
					<div className='relative col-span-1'>
						<label className='text-sm'>Изучаемый иностранный язык</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Не выбрано</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>

					<div className='relative col-span-1'>
						<label className='text-sm'>Страна получения образования</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Не выбрано</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='col-span-2'>
						<label className='text-sm'>
							Наименование образовательного учреждения
						</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={name_educational_institutions}
						/>
					</div>
				</div>
				<CheckBox text='Документ образования с отличием' />
				<div className='grid grid-cols-3 gap-3'>
					<div className='col-span-1 flex flex-col'>
						<label className='text-sm'>Файл</label>
						<label className='input-file-btn text-center p-2 my-1'>
							Загрузить
							<input type='file' className='hidden' />
						</label>
					</div>
					<label className='col-span-3 mt-8 input-file-btn text-center p-2 my-1'>
						Сохранить
						<input type='submit' className='hidden' />
					</label>
				</div>
			</div>
		</>
	)
}

export default ModWinCon1
