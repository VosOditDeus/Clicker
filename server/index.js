import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';
import bodyParser from 'body-parser'
import path from "path";
//import api from './routes/api';

let app = express();



app.use(bodyParser.json());

const compiler = webpack(webpackConfig);


app.set('view engine', 'html');

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
}));

// app.use('/api', api);
app.use( express.static('assets'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));

