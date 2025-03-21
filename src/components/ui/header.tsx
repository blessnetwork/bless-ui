import React from 'react'

interface HeaderProps {
	height: string
}

export const Header: React.FC<HeaderProps> = ({ height }) => {
	return (
		<header className={`flex ${height} items-center justify-between p-4 shadow-md`}>
			<h1 className="font-bold text-black">Bless</h1>
			<p className="font-bold text-black">Online</p>
		</header>
	)
}
