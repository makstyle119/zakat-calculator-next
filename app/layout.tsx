import './globals.css';

export const metadata = {
	title: 'Zakat Calculator App || MAK Development House || MAKSTYLE119',
	description: 'Zakat Calculator App to calculate zakat.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<meta
				name='google'
				content='nositelinkssearchbox'
				key='sitelinks'
			/>
			<meta
				name='google'
				content='notranslate'
				key='notranslate'
			/>
			<meta
				name='googlebot'
				content='noindex,nofollow'
			/>
			<meta
				name='description'
				content='Zakat Calculator App to calculate zakat.'
			/>
			<meta
				name='robots'
				content='index, follow'
			/>
			<body>{children}</body>
		</html>
	);
}
