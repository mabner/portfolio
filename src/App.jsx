import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import './App.css';

export default function App() {
	return (
		<main>
			<div className='flex justify-center'>
				<h1 className='font-bold text-2xl text-blue-900'>
					React and Tailwind with Vitejs!
				</h1>
			</div>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Testimonials />
			<Contact />
		</main>
	);
}
