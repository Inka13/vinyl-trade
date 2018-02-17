import axios from 'axios';

export const getSearchResults = (album, path) => {
	return(dispatch) => {
		return axios.get("/albums/" + path + "/" + album)
			.then((response) => {
				console.log(response.data.albums);
				dispatch(gotAlbums(response.data.albums))
			})
			.catch(function (error) {
    		console.log(error);
  		});
	}
};
export const getAllTrades = () => {
	return(dispatch) => {
		return axios.get("/albums/db/")
			.then((response) => {
				console.log(response.data.albums);
				dispatch(gotAlbums(response.data.albums))
			})
			.catch(function (error) {
    		console.log(error);
  		});
	}
};
export const gotAlbums = (albums) => {
	return {
		type: "GOT_ALBUMS",
		albums
	};
};

export const showSignupForm = () => {
	return {
		type: "SHOW_FORM",
		form: 'signup'
	};
};
export const showLoginForm = () => {
	return {
		type: "SHOW_FORM",
		form: 'login'
	};
};
export const hideForm = () => {
	return {
		type: "HIDE_FORM"
	};
};

export const submitSignup = (name, email, password) => {
	return(dispatch) => {
		return axios.post("/users/signup", {
        		name,
        		email,
        		password
      		})
			.then((response) => {
				if(response.data.createdUser){
					dispatch(submitLogin(name, password));
				}
			})
			.catch(function (error) {
    		console.log(error);
  		});
	}
};
export const submitLogin = (name, password) => {
	//console.log(name, password);
	return(dispatch) => {
		return axios.post("/users/login", {
    				name: name,
        			password: password
        		}
        )
		.then((response) => {
			if(response.data.token) dispatch(userLogin(response.data));
		}).catch(function (error) {
    		console.log(error);
  		});
	}
};

export const getAlbumInfo = (id) => {
	return(dispatch) => {
		return axios.get("/albums/" + id)
			.then((response) => {
				dispatch(gotAlbumInfo(response.data.album))
			}).catch(err => {
				console.log(err);
			})
	}
};

export const gotAlbumInfo = (album) => {
	//console.log(album);
	return {
		type: "GOT_ALBUM_INFO",
		album,
		form: ''
	};
};


export const userLogin = (data) => {
	return {
		type: "USER_LOGGED_IN",
		user: data.user,
		token: data.token,
		form: ''
	};
};



export const userLogout = () => {
	return {
		type: "USER_LOGGED_OUT"
	};
};