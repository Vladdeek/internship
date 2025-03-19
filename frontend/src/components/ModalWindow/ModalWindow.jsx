import React from 'react'
import './ModalWindow.css'

const ModalWindow = ({ modal_title, children, toggleModal, isModalOpen }) => {
	return (
		<>
			{isModalOpen && (
				<div className='flex blur-screen w-screen h-screen backdrop-blur-xs bg-black/15 z-100 fixed items-center px-3'>
					<div className='bg-white flex flex-col lg:w-1/2 w-full mx-auto z-101'>
						<div className='flex justify-between m-6'>
							<p className='text-xl'>{modal_title}</p>
							<img
								src='icons/cross.svg'
								alt='Close'
								onClick={toggleModal}
								className='cursor-pointer'
							/>
						</div>
						<div className='w-full'>{children}</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ModalWindow
