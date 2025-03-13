import { useState } from 'react'
import SideBar from '../components/SideBar/SideBar'
import Header from '../components/Header/Header'
import Accordion from '../components/Accordion/Accordion'
import AccordContent1 from '../components/Accordion/AccordContent/AccordContent1'

const MainPage = ({}) => {
	const [activeIndex, setActiveIndex] = useState(null)

	const handleToggle = index => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<>
			<div className='flex'>
				<SideBar />
				<div className='w-4/5'>
					<Header />
					<div className=' flex flex-col items-center'>
						<Accordion
							title='Основные данные'
							isOpen={activeIndex === 0}
							onToggle={() => handleToggle(0)}
						>
							<AccordContent1 />
						</Accordion>
						<Accordion
							title='Паспортные данные'
							isOpen={activeIndex === 1}
							onToggle={() => handleToggle(1)}
						>
							<AccordContent1 />
						</Accordion>
						<Accordion
							title='Адрес регистрации фактического проживания'
							isOpen={activeIndex === 2}
							onToggle={() => handleToggle(2)}
						>
							<AccordContent1 />
						</Accordion>
						<Accordion
							title='Сведения об образовании'
							isOpen={activeIndex === 3}
							onToggle={() => handleToggle(3)}
						>
							<AccordContent1 />
						</Accordion>
						<Accordion
							title='Дополнительная информация'
							isOpen={activeIndex === 4}
							onToggle={() => handleToggle(4)}
						>
							<AccordContent1 />
						</Accordion>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainPage
