const updateDataAction = ({ rm,nome,email,foto }) => ({
    type:"UPDATE_DATA",
    payload:{rm,nome,email,foto}
});

const getUserNome = (state) => state.data['NOME'];
const getUserEmail = (state) => state.data['EMAIL'];
const getUserRm = (state) => state.data['RM'];
const getUserFoto= (state) => state.data['FOTO'];

export {updateDataAction,getUserEmail,getUserRm,getUserNome,getUserFoto}