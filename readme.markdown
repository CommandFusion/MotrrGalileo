# Motrr Galileo and CommandFusion

This repo contains a sample [CommandFusion guiDesigner](http://www.commandfusion.com/software/guidesigner) project that allows control of the [Motrr Galileo](http://motrr.com), a motorized camera mount for iOS devices.

It is using the [AirBeam](http://appologics.com/airbeam) app from Appologics to translate WiFi commands into commands to move the Motrr Galileo unit.

Gestures are used to pan and tilt the Motrr Galileo with simple one and two finger swipes. Tap to stop the motion.

The example project also includes the ability to turn on and off the torch light (LED) on the back of the iOS device. Use a two finger single and double tap to turn the LED on and off.

The AirBeam app services are discovered using Bonjour using the [CommandFusion JavaScript API](http://commandfusion.com/docs/scripting/index.html). This means the example will work without manually entering any IP Address information into the project.

## Known Issues

MJPEG stream from the AirBeam app seems to be faulty, so for now the live stream is performed by manually updating a static JPEG every 100ms (10 frames per second).

Sometimes the pan or tilt will stop working - this is a bug in the AirBeam software also. Restarting the AirBeam app on the iOS device mounted in the Motrr Galileo unit will fix the issue.

Make sure you add your license details to the guiDesigner project before you can use this example. The project uses HTTP Requests via the CF JavaScript library which requires a license.

## More Information

* AirBeam - [appologics.com](http://appologics.com/airbeam)
* Motrr Galileo - [motrr.com](http://motrr.com)
* CommandFusion Software - [commandfusion.com](http://www.commandfusion.com/software)