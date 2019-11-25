import myAxios from '../../myAxios';

export const getInformation = async (): Promise<string> => {
    const response = await myAxios.get('/api')
        .then(res => res.data.results[0]);
    return response;
};

export const getLocationInformation = async (): Promise<string> => {
    const response = await myAxios.get('/api')
        .then(res => res.data.results[0]);
    return response;
};

export const getNameInformation = async (): Promise<string> => {
    const response = await myAxios.get('/api')
        .then(res => res.data.results[0]);
    return response;
};

export const getDobInformation = async (): Promise<string> => {
    const response = await myAxios.get('/api')
        .then(res => res.data.results[0]);
    return response;
};

export const getPicture = async (): Promise<string> => {
    const response = await myAxios.get('/api')
        .then(res => res.data.results[0]);
    return response;
};