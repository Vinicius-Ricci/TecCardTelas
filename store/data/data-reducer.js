const inicialState = {
    rm:undefined,
    nome:"",
    email:"",
    foto:"",

};

export const dataReducer =(state=inicialState,action) => {
    if (action.type === "UPDATE_DATA"){
        return {
            ...state,
            "NOME":action.payload.nome,
            "EMAIL":action.payload.email,
            "RM":action.payload.rm,
            "FOTO":action.payload.foto,

        }
    }
    return state;
}