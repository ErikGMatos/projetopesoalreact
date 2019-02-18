export const buscaDogInicio = () => {
    return {
        type: "BUSCA_DOG_INICIO",
        carregando: true,
        erro: false
    };
};

export const buscaDogSucesso = dogs => {
    return {
        type: "BUSCA_DOG_SUCESSO",
        carregando: false,
        erro: false,
        dogs
    };
};

export const buscaDogErro = () => {
    return {
        type: "BUSCA_DOG_ERRO",
        carregando: false,
        erro: true
    };
};

export const buscaDog = racaQtd => {
    return dispatch => {
        dispatch(buscaDogInicio());
        fetch(`https://dog.ceo/api/breeds/image/random/${racaQtd}`)
            .then(response => response.json())
            .then(data => dispatch(buscaDogSucesso(data.message)))
            .catch(() => dispatch(buscaDogErro()));
    };
};
