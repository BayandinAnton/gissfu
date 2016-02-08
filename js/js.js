var sphere, render,camera,scene,controls;
var path=0;

animate();

function init(){
    
        scene = new THREE.Scene();
 
        camera = new THREE.PerspectiveCamera(45, 
        window.innerWidth / window.innerHeight, 1, 5000);
 
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColorHex(0xEEEEEE, 1.0);
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        
        window.addEventListener( 'resize', onWindowResize, false );
    
        var axes = new THREE.AxisHelper( 20 );
        scene.add(axes);
 
        var planeGeometry = new THREE.PlaneGeometry(50,50);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
        var plane = new THREE.Mesh(planeGeometry,planeMaterial);
        
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=15;
        plane.position.y=0;
        plane.position.z=0;
        plane.receiveShadow = true;
        
        scene.add(plane);
       
    
        controls = new THREE.OrbitControls( camera );
        controls.addEventListener( 'change', render );
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
		controls.enableZoom = false;
       
        
        var cubeGeometry = new THREE.BoxGeometry(4,4,4);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
 
        cube.position.x=-4;
        cube.position.y=3;
        cube.position.z=0;
        cube.castShadow = true;
        cube.name = "cub";
        scene.add(cube);
 
        var sphereGeometry = new THREE.SphereGeometry(4,20,20);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
        sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
 
        sphere.position.x=20;
        sphere.position.y=4;
        sphere.position.z=2;
        sphere.castShadow = true;
        sphere.name = "sph";
        scene.add(sphere);
        
        // Источники света
        
        var spotLight  = new THREE.DirectionalLight(0xffffff);
        spotLight.position.set(-40,60,-20);
        spotLight.castShadow = true;
        scene.add(spotLight);


        // Загрузка OBJ на сцену
        /*
        
        var loader = new THREE.OBJLoader();
        loader.load('models/model.obj', function (loadedMesh) {
            var material = new THREE.MeshLambertMaterial({color: 0xffffff});

            loadedMesh.children.forEach(function (child) {
                child.material = material;
                child.geometry.computeFaceNormals();
                child.geometry.computeVertexNormals();
            });

            mesh = loadedMesh;
            loadedMesh.scale.set(1, 1, 1);
            scene.add(loadedMesh);
        });



        var loader2 = new THREE.OBJLoader();
        loader2.load('models/2312.obj', function (loadedMesh) {
            var material = new THREE.MeshLambertMaterial({color: 0xffffff  ,   map: THREE.ImageUtils.loadTexture("models/2312.mtl")        });

            loadedMesh.children.forEach(function (child) {
                child.material = material;
                child.geometry.computeFaceNormals();
                child.geometry.computeVertexNormals();
            });

            mesh = loadedMesh;
            loadedMesh.scale.set(1, 1, 1);
            scene.add(loadedMesh);
        });

        */


       
        
 
       
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(plane.position);

       document.body.appendChild( renderer.domElement );  
    
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        document.body.appendChild( stats.domElement );
       
    
    
    
    requestAnimationFrame(function anim()
    {
      sphere.position.x = Math.sin(path += 0.005)*50;
      sphere.position.z = Math.cos(path)*50;

      
      cube.rotation.y +=  0.01;  
      render();
      requestAnimationFrame(anim);
      
  });   
    
    
    
    
        render();
        
       



    
    

// Animation 

   
    /*
    function render()
    {
        sphere.position.z = Math.sin(path += 0.01)*10 ;
        sphere.position.x = Math.cos(path += 0.01)*10 + 5;

        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }*/

    

    
    
    
    
    

    // Выбор одного объектов кликом из массива и сцены
    
    /*
    var selectedObject;
    var offset = new THREE.Vector3();
    var objects =[];
    
    objects.push(sphere);
    
    
    for(var f = 0 ; f < 5 ; f++){
        
        var object = new THREE.Mesh( cubeGeometry, 
        new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
        object.position.x = Math.random() * 10 - 10;
        object.position.y = 30;
        object.position.z = Math.random() * 10 + 10;
        
        object.name = "ios_" + f;
        objects.push(object);  
        
        scene.add(object);
    }

   */
    /*
    document.onmousedown = function (event){
        var mouse_x = ( event.clientX / window.innerWidth ) * 2 - 1;
        var mouse_y = -( event.clientY / window.innerHeight ) * 2 + 1;
 
        var vector = new THREE.Vector3(mouse_x, mouse_y, 0.5);
        vector.unproject(camera);
        
        var raycaster = new THREE.Raycaster(camera.position, 
        vector.sub(camera.position).normalize());
 
        var intersects = raycaster.intersectObjects(objects);
    
        if (intersects.length > 0) 
        {
            selectedObject = intersects[0].object;
            
            doSomething(selectedObject);
        
        }
        };
    
    document.onmouseup = function (event) 
    {
        selectedObject = null;
    }    
  
    
    
    
    // Правая клавиша мыши
    document.oncontextmenu = function (event)
    {

    }
     */
       
};


  


function doSomething(e){
    e.position.y += 5;
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
}

function render() {
    renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();
}