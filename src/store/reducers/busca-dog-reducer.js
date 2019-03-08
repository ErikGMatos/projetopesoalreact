const INITIAL_STATE = {
    dogs: [],
    carregando: false,
    erro: false
};

export default function busca_dog_reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "BUSCA_DOG_INICIO":
            return {
                dogs: [],
                carregando: true,
                erro: false
            };
        case "BUSCA_DOG_SUCESSO":
            return {
                dogs: action.dogs,
                carregando: false,
                erro: false
            };
        case "BUSCA_DOG_ERRO":
            return {
                dogs: [],
                carregando: false,
                erro: true
            };
        default:
            return state;
    }
}
