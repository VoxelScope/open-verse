module.exports = {
    devServer: {
        https: true,
        compress: true,
        host: "localhost",
        port: 9000,
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options["compilerOptions"] = {
                    isCustomElement: (tag) => { return tag.startsWith('a-'); }
                }
                return options;
            })
    }
}