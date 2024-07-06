const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

async function open(dir){
    for(let dirent of fs.readdirSync(dir,{withFileTypes:true})){
        let curr=dir+'/'+dirent.name
        if(dirent.isDirectory()){
            open(curr)
        }else{
            let {ext,name} = path.parse(curr)
            if(ext=='.js'){
                console.log('generate docs for '+name)
                execSync(`jsdoc2md --no-cache ${curr} > ${'./docs/'+name+'.md'}`)
            }
        }
    }
}
open('./src/material')