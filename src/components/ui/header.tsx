import React from 'react'

interface HeaderProps {
	sidebarOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen }) => {
	return (
		<header
			className={`fixed top-0 left-0 h-14 bg-[#F0F0F0] px-6 flex items-center justify-between shadow-md transition-all duration-300 
				${sidebarOpen ? 'ml-[260px] w-[calc(100%-260px)]' : 'ml-[72px] w-[calc(100%-72px)]'}`}
		>
			<span className="text-black text-lg font-semibold">Bless</span>
			<span className="text-black text-lg font-semibold">Online</span>
		</header>
	)
}

export default Header
