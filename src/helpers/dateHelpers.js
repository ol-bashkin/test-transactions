const convertDate = date => {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const monthNumber = date.getMonth() + 1;
    const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber;
    return `${day}.${month}.${date.getFullYear()}`;
};

export const getIsoDate = date => `${date.substring(0, 23)}Z`;

export const getPrettyDate = date => {
    const today = new Date();
    const prettyToday = convertDate(new Date());
    const yesterday = today.setDate(today.getDate() - 1);
    const prettyrYesterday = convertDate(new Date(yesterday));
    switch (date) {
        case prettyToday:
            return "Сегодня";
        case prettyrYesterday:
            return "Вчера";
        default:
            return convertDate(date);
    }
};
