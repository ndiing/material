function toPascalCase(string){
    return string
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g,($,$1,$2)=>$2.toUpperCase())
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
}
function toCamelCase(string){
    return string
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g,($,$1,$2,$i)=>$i===0?$2.toLowerCase():$2.toUpperCase())
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
}
function toSnakeCase(string){
    return string
    .replace(/([a-z])([A-Z])/g,($,$1,$2)=>$1+'_'+$2)
    .replace(/[^a-zA-Z0-9]/g,() => '_')
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
    .toLowerCase()
}
function toKebabCase(string){
    return string
    .replace(/([a-z])([A-Z])/g,($,$1,$2)=>$1+'-'+$2)
    .replace(/[^a-zA-Z0-9]/g,() => '-')
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
    .toLowerCase()
}
function toTitleCase(string){
    return string
    .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g,($,$1,$2)=>$2.toUpperCase())
    .replace(/([a-z])([A-Z])/g,($,$1,$2)=>$1+' '+$2.toUpperCase())
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g,'')
}

// // Usage example
// var data=[
//     'PascalCasePascalCase',
//     'camelCaseCamelCase',
//     'snake_case_snake_case',
//     'kebab-case-kebab-case',
//     'Title Case Title Case',
//     '__PascalCasePascalCase__',
//     '-_camelCaseCamelCase_-',
//     ' _snake_case_snake_case_ ',
//     '  kebab-case-kebab-case  ',
//     '__Title Case Title Case__',
// ]

// // data=data.map(toPascalCase)
// // data=data.map(toCamelCase)
// // data=data.map(toSnakeCase)
// // data=data.map(toKebabCase)
// data=data.map(toTitleCase)
// console.table(data)

export{
    toPascalCase,
    toCamelCase,
    toSnakeCase,
    toKebabCase,
    toTitleCase,
}