'use client';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import IndexPage from './IndexPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [income, setIncome] = useState<number>(0);
	const [debt, setDebt] = useState<number>(0);
	const getYear = new Date().getFullYear();
	const [output, setOutput] = useState<number>(0);
	const calculateZakat = (): void => {
		if (income > 0) {
			const zakat: number = (2.5 / 100) * (income - debt);
			setOutput(zakat);
		} else {
			setOutput(0);
		}
	};
	return (
		<>
			<IndexPage />
			<h1>Zakat Calculator App</h1>
			<form>
				<label htmlFor='income'>Total Income:</label>
				<input
					value={income}
					type='number'
					id='income'
					name='income'
					onChange={(e) => setIncome(Number(e?.target?.value))}
					onKeyUpCapture={() => calculateZakat()}
					required
				/>
				<br />
				<label htmlFor='debt'>Total Debt:</label>
				<input
					value={debt}
					type='number'
					id='debt'
					name='debt'
					onChange={(e) => setDebt(Number(e?.target?.value))}
					onKeyUpCapture={() => calculateZakat()}
					required
				/>
			</form>
			<div id='output'>Your Zakat is: {output}</div>
			<footer>
				<p>
					&copy; {getYear} Zakat Calculator App. DEVELOP & MAINTAIN BY MAK
					DEVELOPMENT HOUSE.
				</p>
			</footer>
		</>
	);
}
