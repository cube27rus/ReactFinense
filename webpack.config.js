module.exports = {
    entry: './src/app.jsx',//основной фаил приложения
    output:{//куда поместить фаил сборки
        filename: 'bundle.js',
        path: __dirname + "/public"//

    } ,
    //настройка сервера
    devServer: {
        inline:true, //не выводить строку сверху страницы
        contentBase: './public', //корневая директория
        port: 3000 //порт
    },
    module: {//загрузчики
        loaders: [
            {
                test: /\.jsx?$/,//расширения фаилов пропускаемые через загрузчик
                exclude: /node_modules/,//не трогаем эту папку
                loader: 'react-hot-loader!babel-loader'//загрузчик
            },
            {
                test: /\.sass/,//расширения фаилов пропускаемые через загрузчик
                loader: 'style-loader!css-loader!sass-loader'//загрузчик
            }
        ]
    },
    //показывает дебаг в нужном месте
    devtool: 'eval-source-map',
    //расширения для загрузки компонентов
    resolve: {
        extensions: [" ",".js",".jsx"]
    }
};