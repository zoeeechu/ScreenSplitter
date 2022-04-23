// Modules to control application life and create native browser window
const {app, BrowserWindow, shell} = require('electron')
const WindowPosition = require( 'electron-window-position' );
const path = require('path')
const prompt = require('electron-prompt');
const fs = require('fs')
//import { EMAIL } from "./client.js";

function SetAction (form) {
  const mainWindow = new BrowserWindow({
    
    width: 800,
    height: 600,
    title:"My First App",
    frame:false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  mainWindow.loadFile('index.html')


}




function createWindow () {
  // Create the browser window.

  const position = new WindowPosition();
  var pos = position.getActiveScreenCenter(0,0);
  const mainWindow = new BrowserWindow({
    x: pos.x, 
    y: pos.y,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })


console.log(app.getPath('userData'))
  
mainWindow.loadFile('index.html')
mainWindow.setBackgroundColor("#000F1A")
  // and load the index.html of the app.
  //
  // load html
  //mainWindow.loadFile('index.html')
  //
  // load url
/*  prompt({
    title: 'Prompt example',
    label: 'URL:',
    value: 'http://example.org',
    inputAttrs: {
        type: 'url'
    },
    type: 'input'
})
.then((r) => {
    if(r === null) {
        mainWindow.loadFile('index.html')
        mainWindow.setBackgroundColor("#000F1A")
        console.log('user cancelled');
    } else { 
        mainWindow.loadURL(r)
        console.log('result', r);
    }
})
.catch(console.error);
 */

// mainWindow.setSize('10','10')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
