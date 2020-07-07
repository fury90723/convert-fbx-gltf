const convert = require('fbx2gltf');
convert('aaa.fbx', 'target.glb', ['--khr-materials-unlit']).then(
  destPath => {
  	console.log("Conversion completed successfully");
  },
  error => {
  	console.log("Conversion failed.");
  }
);
