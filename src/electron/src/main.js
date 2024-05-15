const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 2000,
        height: 1500
    })

    win.loadFile(path.join(__dirname, '..', '..', 'view', 'build', 'index.html'));

    // if (process.env.mode === 'dev') {
    //     win.loadURL('http://localhost:3000');
    // } else {
    //     win.loadFile(path.join(__dirname, '..', '..', 'view', 'build', 'index.html'));
    // }
}

app.whenReady().then(() => {
    createWindow();
})