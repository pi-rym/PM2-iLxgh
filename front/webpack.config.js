module.exports = {
    entry: {
        index: "../front/scripts/index.js",
        about: "../front/scripts/about.js",
        form: "../front/scripts/form.js"
    }, 
    
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js",
    },
};



