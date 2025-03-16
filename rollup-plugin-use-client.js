export default function useClientPlugin() {
	return {
		name: 'use-client',
		transform(code, id) {
			if (code.includes("'use client'") || code.includes('"use client"')) {
				return {
					code: code.replace(/(['"])use client\1;?\s*/, ''),
					map: null
				}
			}
		}
	}
}
