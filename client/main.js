const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

if (module.hot) {
    module.hot.accept();
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
    })
    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})