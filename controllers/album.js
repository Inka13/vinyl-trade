const Album = require('../models/album');
const mongoose = require('mongoose');
const axios = require('axios');

exports.getSearchResults = (req, res, next) => {
	const albumTitle = req.params.albumTitle;
	console.log(albumTitle);
	axios.get("http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + albumTitle + "&api_key=3a80ac76388c6f487ef61a47b162dfec&format=json")
			.then(albums => {
				//console.log(albums.data.results.albummatches.album);
				albums = albums.data.results.albummatches.album;
				albums = albums.filter(album => album.mbid !== "");
				const searchList = albums.map((album) => {
					return album.mbid ? {
					id: album.mbid,
					title: album.name,
					artist: album.artist,
					image: album.image[2]['#text']
					} : '';
				});

				res.status(200).json({
					response: 'Fetched results.',
					albums: searchList
				});	
			})
			.catch(err => {
				console.log(err);
			})
} 
exports.getAlbumInfo = (req, res, next) => {
	const id = req.params.albumId;
	
	console.log(id);
	axios.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=3a80ac76388c6f487ef61a47b162dfec&mbid=' + id + '&format=json')
			.then(info => {
				info = info.data.album;
				//console.log(info);
				
				const album = {
					id,
					title: info.name,
					artist: info.artist,
					image: info.image[3]['#text'],
					tracks: info.tracks.track.map(track => {
						return {
							title: track.name,
							duration: track.duration
						}
					}),
					description: info.wiki.content
				}
				
				res.status(200).json({
					response: 'Fetched album.',
					album
				});	
			})
			.catch(err => {
				console.log(err);
			})
} 
