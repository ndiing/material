import { parse, parseISO, format, getWeek, setWeek, isValid } from "date-fns";

const dateFormatter = {
    date: {
        parse: (value) => parseISO(value),
        toString: (date) => format(date, "yyyy-MM-dd"),
        pattern: "yyyy-MM-dd",
    },
    week: {
        parse: (value) => {
            const match = value?.match(/^(\d{4})-W(\d{1,2})$/);
            return match ? setWeek(new Date(parseInt(match[1]), 0, 4), parseInt(match[2]), { weekStartsOn: 1 }) : null;
        },
        toString: (date) => {
            if (!date || !isValid(date)) return "";
            return `${date.getFullYear()}-W${String(getWeek(date, { weekStartsOn: 1 })).padStart(2, "0")}`;
        },
        pattern: "yyyy-Www",
    },
    month: {
        parse: (value) => (value ? parseISO(`${value}-01`) : null),
        toString: (date) => (date && isValid(date) ? format(date, "yyyy-MM") : ""),
        pattern: "yyyy-MM",
    },
    time: {
        parse: (value) => (value ? parse(value, "HH:mm", new Date()) : null),
        toString: (date) => (date && isValid(date) ? format(date, "HH:mm") : ""),
        pattern: "HH:mm",
    },
    "datetime-local": {
        parse: (value) => (value ? parseISO(value) : null),
        toString: (date) => (date && isValid(date) ? format(date, "yyyy-MM-dd'T'HH:mm") : ""),
        pattern: "yyyy-MM-dd'T'HH:mm",
    },
};

export { dateFormatter };
