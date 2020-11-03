const WIFI = "WIFI";
const EMULATOR = "EMULATOR";
const ENV = EMULATOR;

export function api(path){
    const base = ENV === EMULATOR ?"http://10.0.2.2:5000/api":"https://7c9348e271e9.ngrok.io/api";
    return `${base}/${path}`;
}