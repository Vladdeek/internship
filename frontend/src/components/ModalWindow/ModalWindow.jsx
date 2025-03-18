import { useState } from 'react'
import React from 'react'
import './ModalWindow.css'

const ModalWindow = ({ isModalOpen, children, toggleModal, modal_title }) => {
	return (
		<>
			{isModalOpen && (
				<div className='flex blur-screen w-screen h-screen backdrop-blur-xs z-100 fixed items-center'>
					<div className='bg-white flex flex-col w-1/2 mx-auto z-101 h-100'>
						<div className='flex justify-between m-6'>
							<p className='text-xl'>{modal_title}</p>
							<img
								src='icons/cross.svg'
								alt=''
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
