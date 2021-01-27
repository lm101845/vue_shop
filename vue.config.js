module.exports = {
    // 在这里我们配置别名
    configureWebpack: {
        resolve: {
            // resolve用于配置和路径相关的
            // extensions:[]
            // 这个可以省略.vue,.js等配置文件，我们这里不用配置，公共配置文件就已经配置好了
            alias: {
                // alias配置别名的
                // '@':'src'
                // 它的内部已经配置了@等于src这个别名了
                // 'assets': '@/assets',
                // 'components': '@/components',
                // 'network': '@/network',
                // 'views':'@/views',
            }
        }
    }
}