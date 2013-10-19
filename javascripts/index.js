var project;
(function(project) {
	var Main = (function() {
		function Main() {
			var _this = this;
			away.Debug.THROW_ERRORS = false;
			away.Debug.LOG_PI_ERRORS = false;
			away.Debug.ENABLE_LOG = false;
			this.view = new away.containers.View3D();
			this.view.backgroundColor = 0x121212;
			this.view.antiAlias = 1;
			this.container = new away.containers.ObjectContainer3D();
			this.view.scene.addChild(this.container);
			var light = new away.lights.PointLight();
			light.ambient = 10;
			light.specular = 10;
			light.color = 0xFFFFFF;
			var geometry = new away.primitives.CubeGeometry(2, 1, 1);
			for (var i = 0; i < 480; i++) {
				var matTx = new away.materials.ColorMaterial(Math.random() * 0xFF00FF);
				matTx.lightPicker = new away.materials.StaticLightPicker([light]);
				var mesh = new away.entities.Mesh(geometry, matTx);
				mesh.x = 1500 * (Math.random() - 0.5);
				mesh.y = 1200 * (Math.random() - 0.5);
				mesh.z = 1200 * (Math.random() - 0.5);
				mesh.rotationX = mesh.rotationY = mesh.rotationZ = i
				this.container.addChild(mesh);
			}
			this.raf = new away.utils.RequestAnimationFrame(this.render, this);
			this.raf.start();
			this.handleResize();
			window.onresize = function() {
				_this.handleResize();
			};
		}
		Main.prototype.render = function(e) {
			this.container.rotationX += 0.4;
			this.container.rotationY += 0.1;
			this.view.render();
		};
		Main.prototype.handleResize = function() {
			this.view.width = window.innerWidth;
			this.view.height = window.innerHeight;
		};
		return Main;
	})();
	project.Main = Main;
})(project || (project = {}));
window.onload = function() {
	new project.Main();
};
