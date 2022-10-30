'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Collada = require('./Collada');

var _Collada2 = _interopRequireDefault(_Collada);

var _glMatrix = require('gl-matrix');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ColladaParser.js

var parseData = function parseData(mData) {
	var materials = mData.materials,
	    meshes = mData.meshes;


	var finalMeshes = [];
	var meshObjs = [];
	var allMeshes = [];

	//	getting all meshes' buffers
	for (var s in meshes) {
		var oMesh = meshes[s];
		var vertices = oMesh.vertices,
		    normals = oMesh.normals,
		    coords = oMesh.coords,
		    triangles = oMesh.triangles;

		var buffers = {
			vertices: vertices, normals: normals, coords: coords, triangles: triangles
		};
		allMeshes.push({
			id: s,
			buffers: buffers
		});
	}

	function getMaterial(id) {
		var mat = void 0;
		for (var _s in materials) {
			if (_s === id) {
				mat = materials[_s];
			}
		}

		var oMaterial = {};
		if (mat.diffuse) {
			oMaterial.diffuseColor = mat.diffuse;
		}

		oMaterial.diffuseColor = mat.diffuse || [0, 0, 0];
		oMaterial.shininess = mat.shininess || 0;
		if (mat.textures) {
			if (mat.textures.diffuse) {
				oMaterial.diffuseMapID = mat.textures.diffuse.map_id;
			}

			if (mat.textures.normal) {
				oMaterial.normalMapID = mat.textures.normal.map_id;
			}
		}

		return oMaterial;
	}

	function walk(node, mtxParent) {
		var m = _glMatrix.mat4.create();
		if (node.model) {
			_glMatrix.mat4.multiply(m, mtxParent, node.model);
		} else {
			_glMatrix.mat4.copy(m, mtxParent);
		}

		if (node.children.length > 0) {
			node.children.forEach(function (child) {
				walk(child, m);
			});
		}

		if (node.mesh) {
			var _oMesh = {};
			_oMesh.modelMatrix = m;
			_oMesh.mesh = meshes[node.mesh];
			_oMesh.id = node.id;
			_oMesh.name = node.name;
			_oMesh.material = getMaterial(node.material);
			meshObjs.push(_oMesh);
		}
	}

	var mtx = _glMatrix.mat4.create();
	walk(mData.root, mtx);

	return meshObjs;
};

var parse = function parse(mFile) {
	var o = _Collada2.default.parse(mFile);
	return parseData(o);
};

var load = function load(mPath, mCallBack) {
	_Collada2.default.load(mPath, function (mData) {
		mCallBack(parseData(mData));
	});
};

var ColladaParser = {
	load: load,
	parse: parse
};

exports.default = ColladaParser;
module.exports = exports['default'];
//# sourceMappingURL=ColladaParser.js.map