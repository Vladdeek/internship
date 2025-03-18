import React, { Children } from 'react'
import './ModalWindow.css'

const ModalWindow = ({ modal_title, Children, toggleModal, isModalOpen }) => {
	return (
		<>
			{isModalOpen && (
				<div className='flex blur-screen w-screen h-screen backdrop-blur-xs bg-black/15 z-100 fixed items-center max-lg:px-3'>
					<div className='bg-white flex flex-col w-1/2 max-lg:w-full mx-auto z-101'>
						<div className='flex justify-between m-6'>
							<p className='text-xl'>{modal_title}</p>
							<img
								src='icons/cross.svg'
								alt='Close'
								onClick={toggleModal}
								className='cursor-pointer'
							/>
						</div>
						<div className='w-full'>{Children}</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ModalWindow
