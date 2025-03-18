import { useState } from 'react'
import React from 'react'

const ModWinCon3 = ({ name_doc, date_doc, number_doc, serial_doc }) => {
	return (
		<>
			<div className='grid grid-cols-2 gap-3 p-5'>
				<div className='col-span-2'>
					<label className='text-sm'>Наименование</label>
					<input type='text' className='ac-input w-full p-2' value={name_doc} />
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

export default ModWinCon3
