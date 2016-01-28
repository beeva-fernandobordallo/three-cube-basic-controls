/* Tutorial Youtube - PART 3*/

$(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 500);
	var renderer = new THREE.WebGLRenderer();

	// Set background SPACE color
	renderer.setClearColor(0xdddddd);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;

	// Add Axis to help view the scene
	/* Parameter defines the length of markers*/
	var axis = new THREE.AxisHelper(10);
	scene.add(axis);

	// Scene Grid - 1st param = size, 2nd param = spacing between markers
	var grid = new THREE.GridHelper(50,5);
	var color = new THREE.Color('rgb(255,0,0)');
	grid.setColors(color, 0x000000);

	scene.add(grid);



	// Cube geometry
	var cubeGeom = new THREE.BoxGeometry(5, 5, 5);
	var cubeMaterial = new THREE.MeshLambertMaterial({
		color: 0xff3300
		// wireframe: true
	});
	var cube = new THREE.Mesh(cubeGeom, cubeMaterial);
	cube.castShadow = true;

	// Plane Geometry
	var planeGeom = new THREE.PlaneGeometry(30,30,30);
	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
	var plane = new	THREE.Mesh(planeGeom, planeMaterial);
	plane.receiveShadow = true;

	plane.rotation.x = -0.5*Math.PI;
	
	scene.add(plane);


	/*Edit cubes position*/
	cube.position.x = 2.5;
	cube.position.y = 2.5;
	cube.position.z = 2.5;

	scene.add(cube);

	// Scene Camera positioning
	camera.position.x = 40;
	camera.position.y = 40;
	camera.position.z = 40;

	/*Focus camera*/
	camera.lookAt(scene.position);


	// Spotlight
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.castShadow = true;
	spotLight.position.set(15, 30,50);

	scene.add(spotLight);


	// GUI Controls

	var guiControls = new function(){
		this.rotationX = 0;
		this.rotationY = 0;
		this.rotationZ = 0.01;
	};

	var datGUI = new DAT.GUI();

	datGUI.add(guiControls, 'rotationX', 0, 1);
	datGUI.add(guiControls, 'rotationY', 0, 1);
	datGUI.add(guiControls, 'rotationZ', 0, 1);


	function render(){
		cube.rotation.x += guiControls.rotationX;
		cube.rotation.y += guiControls.rotationY;
		cube.rotation.z += guiControls.rotationZ;

		requestAnimationFrame(render);
		renderer.render(scene,camera);
	};
	render();





	$('#container').append(renderer.domElement);
	renderer.render(scene, camera);

});


// /* Tutorial Youtube - PART 2*/

// $(function(){
// 	var scene = new THREE.Scene();
// 	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 500);
// 	var renderer = new THREE.WebGLRenderer();

// 	// Set background SPACE color
// 	renderer.setClearColor(0xdddddd);
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	renderer.shadowMapEnabled = true;
// 	renderer.shadowMapSoft = true;

// 	// Add Axis to help view the scene
// 	/* Parameter defines the length of markers*/
// 	var axis = new THREE.AxisHelper(10);
// 	scene.add(axis);

// 	// Scene Grid - 1st param = size, 2nd param = spacing between markers
// 	var grid = new THREE.GridHelper(50,5);
// 	var color = new THREE.Color('rgb(255,0,0)');
// 	grid.setColors(color, 0x000000);

// 	scene.add(grid);



// 	// Cube geometry
// 	var cubeGeom = new THREE.BoxGeometry(5, 5, 5);
// 	var cubeMaterial = new THREE.MeshLambertMaterial({
// 		color: 0xff3300
// 		// wireframe: true
// 	});
// 	var cube = new THREE.Mesh(cubeGeom, cubeMaterial);
// 	cube.castShadow = true;

// 	// Plane Geometry
// 	var planeGeom = new THREE.PlaneGeometry(30,30,30);
// 	var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
// 	var plane = new	THREE.Mesh(planeGeom, planeMaterial);
// 	plane.receiveShadow = true;

// 	plane.rotation.x = -0.5*Math.PI;
	
// 	scene.add(plane);


// 	/*Edit cubes position*/
// 	cube.position.x = 2.5;
// 	cube.position.y = 2.5;
// 	cube.position.z = 2.5;

// 	scene.add(cube);

// 	// Scene Camera positioning
// 	camera.position.x = 40;
// 	camera.position.y = 40;
// 	camera.position.z = 40;

// 	/*Focus camera*/
// 	camera.lookAt(scene.position);

// 	var spotLight = new THREE.SpotLight(0xffffff);
// 	spotLight.castShadow = true;
// 	spotLight.position.set(15, 30,50);

// 	scene.add(spotLight);


// 	$('#container').append(renderer.domElement);
// 	renderer.render(scene, camera);

// });

/*  Tutorial Youtube -  PART 1*/

// $(function(){
// 	var scene = new THREE.Scene();
// 	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 500);
// 	var renderer = new THREE.WebGLRenderer();

// 	// Set background SPACE color
// 	renderer.setClearColor(0x000000);
// 	renderer.setSize(window.innerWidth, window.innerHeight);

// 	// Add Axis to help view the scene
// 	/* Parameter defines the length of markers*/
// 	var axis = new THREE.AxisHelper(10);
// 	scene.add(axis);

// 	// Cube geometry
// 	var cubeGeom = new THREE.BoxGeometry(5, 5, 5);
// 	var cubeMaterial = new THREE.MeshBasicMaterial({
// 		color: 0xdddddd,
// 		wireframe: true
// 	});
// 	var cube = new THREE.Mesh(cubeGeom, cubeMaterial);

// 	/*Edit cubes position*/
// 	cube.position.x = 0;
// 	cube.position.y = 0;
// 	cube.position.z = 0;

// 	scene.add(cube);

// 	// Scene Camera positioning
// 	camera.position.x = 40;
// 	camera.position.y = 40;
// 	camera.position.z = 40;

// 	/*Focus camera*/
// 	camera.lookAt(scene.position);

// 	$('#container').append(renderer.domElement);
// 	renderer.render(scene, camera);

// });


/*
	TUTORIAL CUBO ANIMADO MULTI-LIGHT
*/


// var WIDTH = window.innerWidth; // Ancho de pantalla
// var HEIGHT = window.innerHeight; // Alto de pantalla
  
// // Lienzo u objeto encargado del renderizado
// var lienzo = new THREE.WebGLRenderer();
  
// // Establecemos las dimensiones del lienzo
// lienzo.setSize(
//     WIDTH,
//     HEIGHT
// );
  
// // Añadimos el lienzo a la página
// document.body.appendChild(lienzo.domElement);



// // Creamos la escena
// var escena = new THREE.Scene;


// // Creamos un prisma
// var geometriaCubo = new THREE.CubeGeometry(
//     100, // Dimensiones en eje X
//     140, // Dimensiones en eje Y
//     100 // Dimensiones en eje Z
// );
  
// // Creamos una apariencia (de lila claro)
// var aparienciaLila = new THREE.MeshLambertMaterial({
//     color: 0x9999FF // Color hexadecimal
// });
  
// // Generamos el prisma y le aplicamos la apariencia
// var cubo = new THREE.Mesh(geometriaCubo, aparienciaLila);

// // Añadimos el cubo a la escena
// escena.add(cubo);

// // Generamos la cámara
// var camara = new THREE.PerspectiveCamera(
//     45, // Campo de visión
//     (WIDTH / HEIGHT), // Proporcion
//     0.1,
//     10000 // Campo de visión
// );
  
// // Situamos la cámara
// camara.position.y = 160; // Elevamos la cámara
// camara.position.z = 400; // Alejamos la cámara

// // Centramos la vista en el cubo
// camara.lookAt(cubo.position);
  
// // Añadimos la cámara a la escena
// escena.add(camara);



// // Creamos una par de focos de luz
// var luz1 = new THREE.PointLight(0xff0044); // Rojizo
// luz1.position.set(
//     120, // Posición en eje X
//     260, // Posición en eje Y
//     100 // Posición en eje Z
// );
  
// var luz2 = new THREE.PointLight(0x449944); // Azulado
// luz2.position.set(
//     -100, // Posición en eje X
//     100, // Posición en eje Y
//     200 // Posición en eje Z
// );
  
// // Añadimos las luces
// escena.add(luz1);
// escena.add(luz2);

// // Renderizamos la escena
// lienzo.render(escena, camara);


// x=0; // Lo usamos para la oscilación
  
// function renderizar(){
//     // Rotamos el cubo
//     cubo.rotation.y += Math.PI * 0.5 / 180; // Ángulo en radianes
//     cubo.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
//     // Renderizamos la escena
//     lienzo.render(escena, camara);
//     // Volvemos a renderizar
//     requestAnimationFrame(renderizar);
// }
  
// // Empezamos a renderizar
// renderizar();


/*
	AERO TWIST TUTORIAL
*/

// // set the scene size
// var WIDTH = 400,
//   HEIGHT = 300;

// // set some camera attributes
// var VIEW_ANGLE = 45,
//   ASPECT = WIDTH / HEIGHT,
//   NEAR = 0.1,
//   FAR = 10000;

// // get the DOM element to attach to
// // - assume we've got jQuery to hand
// var $container = $('#container');

// // create a WebGL renderer, camera
// // and a scene
// var renderer = new THREE.WebGLRenderer();
// var camera =
//   new THREE.PerspectiveCamera(
//     VIEW_ANGLE,
//     ASPECT,
//     NEAR,
//     FAR);

// var scene = new THREE.Scene();

// // add the camera to the scene
// scene.add(camera);

// // the camera starts at 0,0,0
// // so pull it back
// camera.position.z = 300;

// // start the renderer
// renderer.setSize(WIDTH, HEIGHT);

// // attach the render-supplied DOM element
// $container.append(renderer.domElement);



// // set up the sphere vars
// var radius = 70,
//     segments = 16,
//     rings = 16;

// // create the sphere's material
// var sphereMaterial =
//   new THREE.MeshLambertMaterial(
//     {
//       color: 0xCC0000
//     });

// // create a new mesh with
// // sphere geometry - we will cover
// // the sphereMaterial next!
// var sphere = new THREE.Mesh(

//   new THREE.SphereGeometry(
//     radius,
//     segments,
//     rings),

//   sphereMaterial);

// // add the sphere to the scene
// scene.add(sphere);


// // create a point light
// var pointLight =
//   new THREE.PointLight(0xFFFFFF);

// // set its position
// pointLight.position.x = 10;
// pointLight.position.y = 50;
// pointLight.position.z = 130;

// // add to the scene
// scene.add(pointLight);


// // draw!
// renderer.render(scene, camera);












// FIRST THREE TUTORIAL - Intro

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );


// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 4;

// var angTemp = 0;
// var scaleTemp = 0;

// function render() {
// 	requestAnimationFrame( render );
// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.1;
// 	scaleTemp = Math.sin(angTemp)/10;
// 	angTemp += 0.05;
// 	cube.scale.x += scaleTemp;
// 	renderer.render( scene, camera );
// }
// render();