import { useState } from 'react'
import Accordion from '../../components/Accordion/Accordion'
import AccordContent1 from '../../components/Accordion/AccordContent/AccordContent1'
import AccordContent2 from '../../components/Accordion/AccordContent/AccordContent2'
import AccordContent3 from '../../components/Accordion/AccordContent/AccordContent3'
import AccordContent4 from '../../components/Accordion/AccordContent/AccordContent4'
import AccordContent5 from '../../components/Accordion/AccordContent/AccordContent5'
import CheckBox from '../../components/CheckBox/CheckBox'

const Chapter1 = ({ handleClick }) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const handleToggle = index => {
		setActiveIndex(activeIndex === index ? null : index)
	}
	return (
		<>
			<div className='flex flex-col items-center px-3'>
				<div className='2xl:w-2/3'>
					<Accordion
						title='Основные данные'
						isOpen={activeIndex === 0}
						onToggle={() => handleToggle(0)}
					>
						<AccordContent1
							user_id=''
							user_email=''
							user_phone=''
							user_name=''
							user_surname=''
							user_patronymic=''
							user_birthday=''
							user_inn=''
							user_snils=''
							user_date_snils=''
						/>
					</Accordion>
					<Accordion
						title='Паспортные данные'
						isOpen={activeIndex === 1}
						onToggle={() => handleToggle(1)}
					>
						<AccordContent2 />
					</Accordion>
					<Accordion
						title='Адрес регистрации фактического проживания'
						isOpen={activeIndex === 2}
						onToggle={() => handleToggle(2)}
					>
						<AccordContent3 />
					</Accordion>
					<Accordion
						title='Сведения об образовании'
						isOpen={activeIndex === 3}
						onToggle={() => handleToggle(3)}
					>
						<AccordContent4 handleClick={handleClick} />
					</Accordion>
					<Accordion
						title='Дополнительная информация'
						isOpen={activeIndex === 4}
						onToggle={() => handleToggle(4)}
					>
						<AccordContent5 />
					</Accordion>
					<div
						className={`flex mt-5 flex-col items-start max-lg:px-3 w-9/10 ${
							activeIndex !== null && 'hidden'
						}`}
					>
						<CheckBox text='Согласен на обработку персональных данных в порядке, установленном Федеральным законом от 27.07.2006г. №152-ФЗ «О персональных данных' />
						<CheckBox text='С копией Лицензии mgu-mlt.ru МелГУ на осуществление образовательной деятельности в сфере высшего образования (серия 90Л01 № 0008862 Рег. № 1818 от 11.12.2015) с приложениями, копией Свидетельства о государственной аккредитации (серия 90А01 № 0003815 Рег. № 3595 от 22.06.2021) с приложениями, Уставом mgu-mlt.ru МелГУ, Правилами приёма, Правилами подачи и рассмотрения апелляции ознакомлен(а)' />
						<CheckBox text='Ознакомлен(а) с информацией о необходимости указания в заявлении о приёме достоверных сведений и предоставления подлинных документов.' />
						<CheckBox text='Высшее образование уровня бакалавриата/специалитета получаю впервые' />
						<CheckBox text='Высшее образование уровня магистратуры получаю впервые' />
						<CheckBox text='Высшее образование уровня асирантуры получаю впервые' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Chapter1
