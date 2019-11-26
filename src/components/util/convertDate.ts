export const convertDate = (date: string) => {
    const regExp: any = /\d{4}-\d{2}-\d{2}/;
    return date.match(regExp);
};