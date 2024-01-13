const fs = require('fs')
const path = require('path')
const {Readable} = require('stream')

// download_fonts()
async function download_fonts(params) {
    const links=[
        "https://fonts.gstatic.com/s/materialsymbolsoutlined/v156/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.0.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.1.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.2.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.3.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.4.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.5.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.6.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.7.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.8.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.9.woff2",
        "https://fonts.gstatic.com/s/notocoloremoji/v30/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.10.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9X6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9e6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9b6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9W6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9Z6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9V6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9U6VLKzA.woff2",
        "https://fonts.gstatic.com/s/notosans/v35/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9a6VI.woff2",
    ]
    
    function write(file,data){
        const dir=path.dirname(file)
        try {
            fs.readdirSync(dir)
        } catch (error) {
            fs.mkdirSync(dir,{recursive:true})
        }
        fs.writeFileSync(file,data)
    }
    
    for(const link of links){
        const [,,,,ff,v,name]=(link.split('/'))
        const filePath=(path.join(process.cwd(),'src','material','foundation','font',ff,v,name))
        write(filePath,'')
        const stream = fs.createWriteStream(filePath)
        await fetch(link).then(response=>Readable.fromWeb(response.body)
        .pipe(stream))
        .then(()=>console.log('done',ff,v,name))
        // break
    }
}