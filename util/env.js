const WIFI = "WIFI";
const EMULATOR = "EMULATOR";
const ENV = WIFI;

export function api(path){
    const base = ENV === EMULATOR ?"http://10.0.2.2:5000/api":" https://7c6ba462f24f.ngrok.io/api";
    return `${base}/${path}`;
}