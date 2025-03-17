import React from 'react'

export default function HeaderMobile() {
	return (
		<header className="flex">
			<div className="flex-1">
				<span className="text-white font-bold">Bless</span>
				<span className="text-white font-bold">Online</span>
			</div>
			<div className="flex-shrink-0">
				<button className="text-white font-bold">Menu</button>
			</div>
		</header>
	)
}
