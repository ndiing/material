function notNull(value) {
    return value !== undefined && value !== null;
}
function notEmpty(value) {
    return notNull(value) && value !== "";
}

export{
    notNull,
    notEmpty,
}