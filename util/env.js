const WIFI = "WIFI";
const EMULATOR = EMULATOR;
const ENV = EMULATOR;

export function api(path){
    const base = ENV === EMULATOR ?"http://10.0.2.2:5000/api":"https://16aa7c6ec8ce.ngrok.io/api";
    return `${base}/${path}`;
}