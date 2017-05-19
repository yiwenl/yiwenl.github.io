// Assets.js

import assetsToLoad from './asset-list';
import alfrid, { GLTexture, GLCubeTexture, Mesh, ObjLoader, Scheduler } from 'alfrid';

const Assets = {};
let _assets = [];
let callback;

const getAsset = function(id) {
	return assets.find( (a) => a.id === id).file;
}

const getExtension = function(mFile) {
	const ary = mFile.split('.');
	return ary[ary.length - 1];
}

Assets.init = function(mCallback) {
	// _assets = assetsToLoad.map( o => generateAsset(o));
	callback = mCallback;
	
	generateAssets();
}

const generateAssets = () => {
	const o = assetsToLoad.pop();
	console.log('Generate texture:', o);
	const asset = toGenerateAsset(o);
	_assets.push(asset);

	if(assetsToLoad.length == 0 && callback) {
		callback();
	} else {
		Scheduler.next(()=>{
			generateAssets();
		});
	}
}

const toGenerateAsset = (o)=> {
	const ext = getExtension(o.url);
	const file = getAsset(o.id);
	let texture;

	switch(ext) {
		case 'jpg':
		case 'png':
			texture = new GLTexture(file);
			return {
				id:o.id,
				file:texture
			};
			break;

		case 'hdr':
			let cubemapName = o.id.split('_')[0];
			texture = alfrid.HDRLoader.parse(file);

			const oAsset = {
				id:o.id,
				file:texture
			};

			if(!hdrCubemaps[cubemapName]) {
				hdrCubemaps[cubemapName] = [];
			}

			hdrCubemaps[cubemapName].push(oAsset);
			return oAsset;

			break;
		case 'dds':
			texture = GLCubeTexture.parseDDS(file);
			return {
				id:o.id,
				file:texture
			};
			break;

		case 'obj':
			const mesh = ObjLoader.parse(file);
			return {
				id:o.id,
				file:mesh
			}
			break;
	}

}

Assets.get = function(mId) {
	return _assets.find((a) => {
		return a.id === mId;
	}).file;
}

export default Assets;