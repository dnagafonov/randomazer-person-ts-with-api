const getRandom = (list: Array<any>) => {
    const randId: any = Math.floor(Math.random() * Math.floor(list.length));
    return list[randId];
};

export default getRandom;