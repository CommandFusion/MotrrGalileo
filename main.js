var myMotrr = new AirBeamMotrr();

CF.userMain = function() {
	// Start looking for published AirBeam bonjour services
	CF.startLookup("_airbeam._tcp.", "", function(addedServices, removedServices, error) {
		//CF.logObject(addedServices);
		// If we have found any new services, use the first one...
		if (addedServices.length > 0) {
			for (var i = 0; i < addedServices.length; i++) {
				if (addedServices[i].addresses.length) {
					CF.setJoin("title", addedServices[i].name);
					myMotrr.ipAddress = addedServices[i].addresses[0];
					myMotrr.discovered();
					break;
				}
			}
		}
	});
};