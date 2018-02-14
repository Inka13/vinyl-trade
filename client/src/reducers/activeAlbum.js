function activeAlbum(state={}, action) {
	switch(action.type) {
		case 'GOT_ALBUM_INFO':
			return action.album;
		case 'GOT_ALBUMS':
			return {};
		default:
		 	return state;	
	}
}
export default activeAlbum;