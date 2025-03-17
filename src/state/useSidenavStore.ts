import { create } from 'zustand'

interface SidenavState {
	device: 'mobile' | 'tablet' | 'desktop'
	isExpanded: boolean
	width: number
	setDevice: (device: 'mobile' | 'tablet' | 'desktop') => void
	toggleSidenav: () => void
}

export const useSidenavStore = create<SidenavState>((set) => ({
	device: 'desktop',
	isExpanded: true,
	width: 260,

	setDevice: (device) => {
		const newState = {
			device,
			isExpanded: device === 'desktop',
			width: device === 'mobile' ? 0 : device === 'tablet' ? 72 : 260
		}
		console.log('📢 Updated Sidenav State:', newState)
		set(newState)
	},

	toggleSidenav: () => {
		set((state) => {
			const newState = {
				...state,
				isExpanded: !state.isExpanded,
				width: state.isExpanded ? (state.device === 'mobile' ? 0 : 72) : 260
			}
			console.log('📢 Toggled Sidenav State:', newState)
			return newState
		})
	}
}))
