module.exports = {
    entry: {
        index: "../front/scripts/index.js",
        about: "../front/scripts/about.js"
    
    }, 
    
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js",
    },
};