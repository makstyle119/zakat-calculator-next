import Head from 'next/head';

function IndexPage() {
	return (
		<div>
			<Head>
				<title>Zakat Calculator App</title>
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
					name='og:title'
					property='og:title'
					content='Zakat Calculator App'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
			</Head>
		</div>
	);
}

export default IndexPage;
