import React from 'react';

export default function About() {
	return (
		<section id='about'>
			<div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
						Olá, eu sou o Marcos.
					</h1>
					<br />
					<p className='mb-8 leading-relaxed'>
						Formado em Ciência da Computação na Única de Ipatinga.
						Especialização em Desenvolvimento Web Fullstack na PUC Minas em BH.
						<br />
						Em busca de um lugar no desenvolvimento.
					</p>
					<div className='flex justify-center'>
						<a
							href='#contact'
							className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
						>
							Entre em contato
						</a>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src='/assets/profile-img.jpg'
					/>
				</div>
			</div>
		</section>
	);
}
