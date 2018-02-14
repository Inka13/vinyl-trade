import {combineReducers} from 'redux';
import UserReducer from './users';
import AlbumsReducer from './albums';
import ActiveAlbumReducer from './activeAlbum'
import FormReducer from './form';
import TokenReducer from './token';


const reducers = combineReducers({
	user: UserReducer,
	albums: AlbumsReducer,
	activeAlbum: ActiveAlbumReducer,
	form: FormReducer,
	token: TokenReducer
});

export default reducers;