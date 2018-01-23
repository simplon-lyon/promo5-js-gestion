const webpack = require('webpack');
/**
 * Webpack est un utilitaire permettant de build les projets
 * javascripts de manière automatique.
 * Il a plusieurs fonctionnalités intéressantes :
 * 1) Il permet de faire du javascript modulaire côté client de manière
 * plus propre, cela signifie que chaque fichier js ne connait 
 * que les variables déclarées à l'intérieur et les variables d'autres
 * fichier qu'on lui aura explicitement importées
 * 2) Il permet également de compiler et packager nos fichier html,
 * js, css, scss et autre via des loaders et des plugins. C'est à dire
 * qu'on n'aura plus forcément besoin de faire des link et des script 
 * dans le html, cas ceux ci seront soit ajouter automatiquement par
 * webpack, soit seront chargés par le javascript (ou les deux)
 * 
 * Par défaut, webpack est optimisé pour les Single Page Application,
 * les application avec un seul point d'entrée (genre index.html, et la
 * navigation entre les pages est en fait "simulée" par le javascript)
 * On peut ceci dit lui fournir plusieurs points d'entrée pour qu'il
 * génère plusieurs bundle.
 */

module.exports = {
    //Le ou les points de départ de notre/nos script(s)
    entry: {
        index:'./scripts/index.js',
        bootstrap:'./scripts/bootstrap.js',
        vendor: ['bootstrap']
    },
    //Le(s) fichier(s) généré(s) par webpack
    output: {
        filename: 'dist/[name].bundle.js'
    },
    //Paramètre pour avoir les sources maps (faire correspondre les
    //lignes du bundle aux lignes de nos fichiers sources)
    devtool: 'source-map',
    /**
     * On définit dans la propriété module les loaders que webpack
     * utilisera
     */
    module: {
        rules: [{
            //On lui donne une regex à tester, pour lui dire que dès
            //qu'il rencontrera ça dans le nom d'un fichier...
            test: /\.scss$/,
            //il devra utiliser les différents loaders qu'on liste ici
            //chaque loader doit être installé via npm en save-dev
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    sourceMap: true
                }
            }]
        }]
    },
    plugins: [
        /**
         * Le CommonsChunkPlugin permet de généré un bundle supplémentaire
         * qui contiendra tous les composant et librairies communes à tous
         * les bundles.
         * On lui indique ici le nom de l'entry point dans lequel on
         * a mis les composants/librairies à bundler.
         * Si on utilise ce plugin, il faudra forcément charger dans
         * le html le vendor.bundle.js avant de charger le bundle propre
         * à la page en question
         */
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        })
    ]
}