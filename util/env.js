const WIFI = "WIFI";
const EMULATOR = "EMULATOR";
const ENV = EMULATOR;

export function api(path){
    const base = ENV === EMULATOR ?"http://10.0.2.2:5000/api":"http://10.0.2.2:5000/api";
    return `${base}/${path}`;
}