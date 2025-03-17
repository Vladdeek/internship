import React from 'react'
import './Accordion.style.css'

const Accordion = ({ title, children, isOpen, onToggle }) => {
	return (
		<div className='bg-white w-full mt-4'>
			<div
				className='accordion w-full flex p-4 cursor-pointer'
				onClick={onToggle} // Меняем состояние при клике
				style={{
					backgroundColor: isOpen ? '#c10f1a' : '#ffffff',
					color: isOpen ? '#fff' : '#000',
					transition: '0.3s',
				}}
			>
				<p className='accord-title w-full select-none'>{title}</p>
				<img
					src='icons/plus.svg'
					alt=''
					style={{
						transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
						filter: isOpen ? 'invert(1)' : 'invert(0)',
						transition: '0.3s',
					}}
				/>
			</div>
			{isOpen && <div className='w-full'>{children}</div>}
		</div>
	)
}

export default Accordion
