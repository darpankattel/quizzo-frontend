const getFormattedDateTime = (date: string) => {
    // date comes as 2024-02-11T16:12:40.418794Z
    // we need to convert it to 11th February, 2024
    const dateObj = new Date(date);
    return `${dateObj.getDate()}th ${dateObj.toLocaleString('default', { month: 'long' })}, ${dateObj.getFullYear()}`;
}
export {
    getFormattedDateTime
}