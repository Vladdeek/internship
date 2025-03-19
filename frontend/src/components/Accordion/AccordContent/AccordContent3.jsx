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
			<div className='p-5 w-full'>
				<p className='whitespace-nowrap text-xl mb-4'>Адрес регистрации</p>
				<div className='grid gap-x-3 lg:grid-cols-12 grid-cols-6'>
					<div className='relative lg:col-span-4 col-span-3'>
						<label className='ac-input-labels'>Регион</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожский</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative lg:col-span-4 col-span-3'>
						<label className='ac-input-labels'>Область</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожская</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='lg:col-span-4 col-span-3'>
						<label className='ac-input-labels'>Населенный пункт</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_locality}
						/>
					</div>

					<div className='lg:col-span-3 col-span-3'>
						<label className='ac-input-labels'>Улица</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_street}
						/>
					</div>
					<div className='lg:col-span-3 col-span-2'>
						<label className='ac-input-labels'>Дом</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_house}
						/>
					</div>
					<div className='lg:col-span-3 col-span-2'>
						<label className='ac-input-labels'>Корпус</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_corpus}
						/>
					</div>
					<div className='lg:col-span-3 col-span-2'>
						<label className='ac-input-labels'>Квартира</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_flat}
						/>
					</div>
				</div>
				<div className='flex lg:flex-row flex-col mt-4 gap-x-3'>
					<CheckBox text='Нет улицы ' />
					<CheckBox text='Адрес регистрации совпадает с адресом фактического проживания' />
				</div>
				<p className='whitespace-nowrap text-xl mb-4'>
					Адрес фактического проживания
				</p>
				<div className='grid gap-x-3 lg:grid-cols-12 grid-cols-6'>
					<div className='relative lg:col-span-4 col-span-3'>
						<label className='ac-input-labels'>Регион</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожский</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative lg:col-span-4 col-span-3'>
						<label className='ac-input-labels'>Область</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='Russian'>Запорожская</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='lg:col-span-4 col-span-3'>
						<label className='ac-input-labels'>Населенный пункт</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_locality}
						/>
					</div>

					<div className='lg:col-span-3 col-span-3'>
						<label className='ac-input-labels'>Улица</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_street}
						/>
					</div>
					<div className='lg:col-span-3 col-span-2'>
						<label className='ac-input-labels'>Дом</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_house}
						/>
					</div>
					<div className='lg:col-span-3 col-span-2'>
						<label className='ac-input-labels'>Корпус</label>
						<input
							type='text'
							className='ac-input w-full p-2'
							value={reg_address_corpus}
						/>
					</div>
					<div className='lg:col-span-3 col-span-2'>
						<label className='ac-input-labels'>Квартира</label>
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
