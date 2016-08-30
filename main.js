const {app, BrowserWindow} = require('electron');

let mainWindow;


function createWindow() {
	mainWindow = new BrowserWindow({width: 800, height: 600});

	// mainWindow.loadURL("file://index.html");

	// mainWindow.webContents.openDevTools();

	mainWindow.on("closed", function() {
		mainWindow = null;
	});
}

app.on("ready", createWindow);


app.on("window-all-closed", () => {
	if (process.platform != "darwin") {
		app.quit();
	}
});
