// ColladaParser.js

import Collada from './Collada';
import { mat4 } from 'gl-matrix';


const parseData = function (mData) {
	const { materials, meshes } = mData;

	const finalMeshes = [];
	const meshObjs    = [];
	const allMeshes  = [];

	//	getting all meshes' buffers
	for(const s in meshes) {
		const oMesh = meshes[s];
		const { vertices, normals, coords, triangles } = oMesh;
		const buffers = {
			vertices, normals, coords, triangles
		};
		allMeshes.push({
			id:s,
			buffers
		});
	}

	function getMaterial(id) {
		let mat;
		for(const s in materials) {
			if(s === id) {
				mat = materials[s];
			}
		}


		const oMaterial = {};
		if(mat.diffuse) {
			oMaterial.diffuseColor = mat.diffuse;
		}

		oMaterial.diffuseColor = mat.diffuse || [0, 0, 0];
		oMaterial.shininess = mat.shininess || 0;
		if(mat.textures) {
			if(mat.textures.diffuse) {
				oMaterial.diffuseMapID = mat.textures.diffuse.map_id;
			}

			if(mat.textures.normal) {
				oMaterial.normalMapID = mat.textures.normal.map_id;
			}
		}

		return oMaterial;
	}

	function walk(node, mtxParent) {
		const m = mat4.create();
		if(node.model) {
			mat4.multiply(m, mtxParent, node.model);
		} else {
			mat4.copy(m, mtxParent);
		}

		if(node.children.length > 0) {
			node.children.forEach((child)=> {
				walk(child, m);
			});
		}

		if(node.mesh) {
			const oMesh       = {};
			oMesh.modelMatrix = m;
			oMesh.mesh        = meshes[node.mesh];
			oMesh.id          = node.id;
			oMesh.name        = node.name;
			oMesh.material    = getMaterial(node.material);
			meshObjs.push(oMesh);
		}
	}

	const mtx = mat4.create();
	walk(mData.root, mtx);

	return meshObjs;
};

const parse = function (mFile) {
	const o = Collada.parse(mFile);
	return parseData(o);
};

const load = function (mPath, mCallBack) {
	Collada.load(mPath, (mData)=> {
		mCallBack(parseData(mData));
	});
};

const ColladaParser = {
	load,
	parse
};

export default ColladaParser;