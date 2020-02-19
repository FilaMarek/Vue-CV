module.exports={
    pages:{
        'hobbies':{
            entry: './src/Pages/Hobbies/main.js',
            template: 'public/index.html',
            title: 'My hobbies',
            chunks: ['chunk-vendors','chunk-common', 'hobbies']
        }
    }
}