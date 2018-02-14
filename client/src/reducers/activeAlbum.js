function activeAlbum(state={}, action) {
	switch(action.type) {
		case 'GOT_ALBUM_INFO':
			return action.place;
		case 'GOT_ALBUMS':
			return {};
		default:
		 	return state;	
	}
}
export default activeAlbum;