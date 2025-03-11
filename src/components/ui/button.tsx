import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
	return (
		<button
			className={`rounded-full bg-gray transition ~text-sm/xl ~px-4/8 ~py-2/4 ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
