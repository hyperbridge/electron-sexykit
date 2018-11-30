# Intro

This repository contains examples on UI/UX enhancements for an electron application based on our learning and research through various online articles. 

Our sources include (but are not limited to) the following:

- https://blog.dcpos.ch/how-to-make-your-electron-app-sexy

- https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron-apps-f3ae9c2bffff

- https://anadea.info/blog/building-desktop-app-with-electron


# Structure

This section describes the structure of this repository


## [Examples](examples)

Contains a list of directories each with a proof of concept of an enhancement in the aforementioned articles

### [adjust-zoom-on-resize](examples/adjust-zoom-on-resize)

This example demonstrates the change in the zoom factor of the window based on it being resized. To try it out, do the following:

`cd examples/adjust-zoom-on-resize`<br/> 
`npm install`<br/>
`npm start`<br/>

When the app window loads up, resize it and watch what happens!

### [crash-report](examples/crash-report)

In the event of the application crashing because of uncaught exceptions or otherwise, we would like to let the user know through a modal and send crash reports to our server for analytics. 

To demonstrate the basic functionality, do the following: 

`cd examples/adjust-zoom-on-resize`<br/> 
`npm install`<br/>
`npm start`<br/>

There are a few existing issues at the moment though. The package we are using doesn't seem to be sending the crash report to the server for some reason. In that case, we might need to detect the type of error, and send over the reports using POST requests to our servers. Have a look at the following GitHub issues surrounding the topic:

- https://github.com/electron/electron/issues/2365

- https://github.com/electron/electron/issues/11626
 
### [preserve-window-state](examples/preserve-window-state)

This example demonstrates the preservation of window state (size and position on relaunch):

`cd examples/preserve-window-state`<br/> 
`npm install`<br/>
`npm start`<br/>

When the app window loads up, resize it and move it around. Close the app, and relaunch with `npm start` and see what happens!

### [progress-bar](examples/progress-bar)

This example demonstrates the progress bar on the taskbar icon to reflect progress on some task. For proof of concept, we are using the iteration variable of a for-loop as the progress metric:

`cd examples/progress-bar`<br/> 
`npm install`<br/>
`npm start`<br/>

When the app window loads up, keep a close eye on the task bar and notice what happens!

### [tray](examples/tray)

This example demonstrates the functionality for a tray window. To demonstrate, do the following:

`cd examples/tray`<br/> 
`npm install`<br/>
`npm start`<br/>

When the app window loads up, click on the pikachu icon on the task bar, and wait for a cute surprise!

# [Contributing](CONTRIBUTING.md)

Please review [CONTRIBUTING.md](CONTRIBUTING.md) for more details


# Questions or Comments?

Please stay tuned for more updates to this section