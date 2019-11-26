import myAxios from '../../myAxios';

export const getInformation = async (): Promise<string> => {
    const response = await myAxios.get('/api')
        .then(res => res.data.results[0]);
    return response;
};
