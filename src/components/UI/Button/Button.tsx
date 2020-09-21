import React from "react";

type ButtonType = {
	disabled?: boolean
	onClick?: () => void
	title?: string
	styleButton?: string
}

export const Button: React.FC<ButtonType> = (
	{
		disabled,
		onClick,
		title,
		styleButton
	}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={styleButton}
		>
			{title ? title : null}
		</button>
	)
}