
export default {
	namespace: 'home',
	state: {
		opacity: 0,
	},
	reducers: {
		showMainScreen(state, { payload }) {
			return { ...state, ...payload, opacity: 1 }
		}
	},
}