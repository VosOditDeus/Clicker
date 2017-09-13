import path from 'path';
import webpack from 'webpack';


let phaserModule = path.join(__dirname, '/node_modules/phaser/');
let phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
let pixi = path.join(phaserModule, 'build/custom/pixi.js');
let p2 = path.join(phaserModule, 'build/custom/p2.js');


export default {
    entry: [
        path.join(__dirname, 'client/index.js')
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: '/node_modules/',
                include: path.join(__dirname, 'client'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'client'),
                use: ['style-loader', 'css-loader']
            },
            {test: /pixi\.js/, loader: 'expose-loader?PIXI'},
            {test: /phaser-split\.js$/, loader: 'expose-loader?Phaser'},
            {test: /p2\.js/, loader: 'expose-loader?p2'},
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2,
        }
    }
}