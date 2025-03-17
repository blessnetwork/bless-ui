import { useEffect } from 'react'
import { useSidenavStore } from '@/state/useSidenavStore'

const useSidenav = () => {
	const { setDevice } = useSidenavStore()

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth

			if (width <= 640) {
				setDevice('mobile')
			} else if (width > 640 && width <= 1024) {
				setDevice('tablet')
			} else {
				setDevice('desktop')
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [setDevice])
}

export default useSidenav
