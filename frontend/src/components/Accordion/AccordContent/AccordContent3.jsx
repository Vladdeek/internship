import { useState } from 'react'
import React from 'react'
import './AccordionContent.style.css'
import CheckBox from '../../CheckBox/CheckBox'

const AccordContent3 = ({
	reg_address_locality,
	reg_address_house,
	reg_address_street,
	reg_address_flat,
	reg_address_corpus,
}) => {
	return (
		<>
			<div className='flex flex-col gap-1 w-full p-5'>
				<p className='whitespace-nowrap ac-title mb-4'>Адрес регистрации</p>
				<div className='flex gap-3'>
					<div className='relative flex flex-col w-1/3'>
						<label className='ac-input-labels'>Регион</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожский</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative flex flex-col w-1/3'>
						<label className='ac-input-labels'>Область</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожская</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='flex flex-col w-1/3'>
						<label className='ac-input-labels'>Населенный пункт</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_locality}
						/>
					</div>
				</div>
				<div className='flex gap-3'>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Серия</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_street}
						/>
					</div>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Номер</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_house}
						/>
					</div>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Код подразделения</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_corpus}
						/>
					</div>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Дата выдачи</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_flat}
						/>
					</div>
				</div>
				<div className='flex gap-4'>
					<CheckBox text='Нет улицы ' />
					<CheckBox text='Адрес регистрации совпадает с адресом фактического проживания' />
				</div>
				<p className='whitespace-nowrap ac-title mb-4'>Адрес регистрации</p>
				<div className='flex gap-3'>
					<div className='relative flex flex-col w-1/3'>
						<label className='ac-input-labels'>Регион</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожский</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative flex flex-col w-1/3'>
						<label className='ac-input-labels'>Область</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожская</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='flex flex-col w-1/3'>
						<label className='ac-input-labels'>Населенный пункт</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_locality}
						/>
					</div>
				</div>
				<div className='flex gap-3'>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Серия</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_street}
						/>
					</div>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Номер</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_house}
						/>
					</div>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Код подразделения</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_corpus}
						/>
					</div>
					<div className='flex flex-col w-1/4'>
						<label className='ac-input-labels'>Дата выдачи</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_flat}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default AccordContent3
