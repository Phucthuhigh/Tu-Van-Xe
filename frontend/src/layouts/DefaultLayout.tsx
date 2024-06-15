const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<header>HEADER</header>
			{children}
			<div>FOOTER</div>
		</div>
	)
}

export default DefaultLayout
