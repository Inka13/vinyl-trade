function albums(state=[], action) {
	switch(action.type) {
		case 'GOT_ALBUMS':
			return action.albums;
		 default:
		 	return state;
		}
}
export default albums;