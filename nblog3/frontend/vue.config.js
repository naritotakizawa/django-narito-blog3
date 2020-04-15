if (process.env.NODE_ENV === 'production') {
    module.exports = {
        outputDir: '../static',
        assetsDir: '../static/nblog3',
        indexPath: '../templates/nblog3/index.html',
        publicPath: '/design-note/',
    }
}