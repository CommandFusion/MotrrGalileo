var AirBeamMotrr = function () {
	var self = {
		ipAddress: "",
		port: 80,
		torch: false,
		videoInterval: null
	};

	self.discovered = function() {
		// Flash the LED of the iPhone when detected...
		self.torchOff();
		self.torchToggle();
		setTimeout(function() {
			self.torchToggle();
		}, 100);
		setTimeout(function() {
			self.torchToggle();
		}, 200);
		setTimeout(function() {
			self.torchToggle();
		}, 300);
		setTimeout(function() {
			self.torchToggle();
		}, 400);
		setTimeout(function() {
			self.torchToggle();
		}, 500);

		// Start the video playback
		self.startVideo();
	}

	self.panBy = function (amount) {
		amount = (amount === null) ? 0 : amount;
		self.request("setPosition?pan=" + amount);
	};

	self.tiltBy = function (amount) {
		amount = (amount === null) ? 0 : amount;
		self.request("setPosition?tilt=" + amount);
	};

	self.startPan = function (velocity) {
		velocity = (velocity === null) ? 0 : velocity;
		self.request("setVelocity?pan=" + velocity);
	};

	self.adjustPan = function (velocity) {
		velocity = (velocity === null) ? 0 : velocity;
		self.request("incrementVelocity?pan=" + velocity);
	};

	self.startTilt = function (velocity) {
		velocity = (velocity === null) ? 0 : velocity;
		self.request("setVelocity?tilt=" + velocity);
	};

	self.adjustTilt = function (velocity) {
		velocity = (velocity === null) ? 0 : velocity;
		self.request("incrementVelocity?tilt=" + velocity);
	};

	self.stop = function () {
		self.request("setVelocity?pan=0&tilt=0");
	};

	self.torchOn = function () {
		self.torch = true;
		self.request("torchon");
		// Update button tagged 'torch' to active state
		CF.setJoin("torch", 1);
	};

	self.torchOff = function () {
		self.torch = false;
		self.request("torchoff");
		// Update button tagged 'torch' to inactive state
		CF.setJoin("torch", 0);
	};

	self.torchToggle = function () {
		if (self.torch) {
			self.torchOff();
		} else {
			self.torchOn();
		}
	};

	self.spin = function () {
		// Pan and Tilt at a high speed for fun...
		self.request("setVelocity?pan=40&tilt=40");
	};

	self.startVideo = function() {
		// Start showing video on the image object tagged 'video' in the GUI.
		self.videoInterval = setInterval(function() {
			CF.setJoin("video", "http://" + self.ipAddress + ":" + self.port + "/image.jpg?" + new Date().getTime());
		}, 100);
	}

	self.stopVideo = function() {
		clearInterval(self.videoInterval);
	}

	self.request = function (url) {
		if (self.ipAddress == "") {
			CF.log("This AirBeamMotrr instance has not been given an IP Address yet...");
			return;
		}
		CF.log("AirBeam Motrr Request: " + "http://" + self.ipAddress + ":" + self.port + "/" + url);
		CF.request("http://" + self.ipAddress + ":" + self.port + "/" + url, function(){});
	}

	return self;
};