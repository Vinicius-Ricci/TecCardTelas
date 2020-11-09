const WIFI = "WIFI";
const EMULATOR = "EMULATOR";
const ENV = EMULATOR;

export function api(path){
    const base = ENV === EMULATOR ?"http://10.0.2.2:5000/api":" https://c7b3cc962954.ngrok.io/api";
    return `${base}/${path}`;
}