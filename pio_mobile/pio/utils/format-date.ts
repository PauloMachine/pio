export const formatDate = (date: Date, type?: string): string => {
    let dateFormatted = ''

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    dateFormatted = `${day}/${month}/${year}`

    if (type === 'datetime') {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        dateFormatted = `${hours}:${minutes}:${seconds} ${dateFormatted}`;
    }

    return dateFormatted;
}