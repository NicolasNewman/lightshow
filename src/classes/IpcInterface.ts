import { ipcRenderer } from 'electron';

export default class IpcInterface {
    static resizeWindow(width: number, height: number) {
        ipcRenderer.send('resize', width, height);
    }
}
