module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-preset-env')({
            stage: 1,
            features: {
                'custom-properties': true
            }
        }),
        ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : [])
    ],
};
