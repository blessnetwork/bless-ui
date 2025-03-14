import React from 'react'

interface HeaderProps {
	sidebarOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen }) => {
	return (
		<header
			className={`fixed left-0 top-0 flex h-14 items-center justify-between bg-[#F0F0F0] px-6 shadow-md transition-all duration-300 ${sidebarOpen ? 'ml-[260px] w-[calc(100%-260px)]' : 'ml-[72px] w-[calc(100%-72px)]'}`}
		>
			<span className="text-lg font-semibold text-black">Bless</span>
			<span className="text-lg font-semibold text-black">Online</span>
		</header>
	)
}

export default Header
