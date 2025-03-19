import { useState } from 'react'
import React from 'react'
import './AccordionContent.style.css'
import CheckBox from '../../CheckBox/CheckBox'

const AccordContent5 = ({
	reg_address_locality,
	reg_address_house,
	reg_address_street,
	reg_address_flat,
	reg_address_corpus,
}) => {
	return (
		<>
			<div className='w-full p-5'>
				<div className='grid gap-3 mb-3 grid-cols-2 max-2xl:grid-cols-1'>
					<div className='relative col-span-1'>
						<label className='text-base'>
							Необходимость в общежитии на время учебы (общежитие
							предоставляется только студентам очной формы обучения):
						</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Нет</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative col-span-1 flex flex-col justify-end'>
						<label className='text-base'>Откуда узнали о нас:</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Друзья</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
					<div className='relative col-span-full'>
						<label className='text-base'>Способ возврата документа:</label>
						<div className='relative w-full'>
							<select className='ac-input w-full p-2 pr-10 appearance-none'>
								<option value='0'>Выбрать</option>
								<option value='other'>другое...</option>
							</select>
							<img
								src='icons/select-arrow.svg'
								alt=''
								className='absolute right-3 top-1/4 lg:top-1/2 transform -translate-y-1/2 h-5 pointer-events-none'
							/>
						</div>
					</div>
				</div>
				<CheckBox text='Лицо, получившее среднее общее образование и успешно прошедшее ГИА на территориях ДНР, ЛНР, Запорожской и Херсонской областей до дня их принятия в Российскую Федерацию, и лица, прошедшее ГИА по образовательным программам среднего общего образования с особенностями, предусмотренными частью 1 статьи 5 Федерального закона № 19-ФЗ' />
				<CheckBox text='Подвергался(-лась) воздействию радиации (ЧАЭС)' />
				<CheckBox text='Окончил(-а) подготовительные курсы в mgu-mlt.ru МелГУ' />
				<CheckBox text='Согласен(-а) получать данные на ЕПГУ (Госуслуги)' />
				<CheckBox text='Нуждаюсь в создании специальных условий для лиц с ОВЗ и инвалидов при проведении вступительных испытаний' />
			</div>
		</>
	)
}

export default AccordContent5
