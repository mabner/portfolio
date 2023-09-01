import React from 'react';

export default function Contact() {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
			)
			.join('&');
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name, email, message }),
		})
			.then(() => alert('Message sent!'))
			.catch((error) => alert(error));
	}

	return (
		<section id='contact' className='relative'>
			<div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
				<form
					name='contact'
					netlify-honeypot='bot-field'
					data-netlify-recaptcha='true'
					data-netlify='true'
					onSubmit={handleSubmit}
				>
					<h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
						Contato
					</h2>
					<p className='hidden'>
						<label>
							Don’t fill this out if you’re human: <input name='bot-field' />
						</label>
					</p>
					<div
						class='g-recaptcha'
						data-sitekey='6Ldbse4nAAAAAO-Ij6R5KKxz0KTVnsHOzUO8TGvk'
						data-theme='dark'
					></div>
					<p className='leading-relaxed mb-5'>
						Caso deseje entrar em contato basta preencher o formulário abaixo.
					</p>
					<div className='relative mb-4'>
						<label htmlFor='name' className='leading-7 text-sm text-gray-400'>
							Nome
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='email' className='leading-7 text-sm text-gray-400'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-400'
						>
							Mensagem
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-40 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg'
					>
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
}
