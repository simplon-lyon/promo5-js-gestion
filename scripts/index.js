/**
 * Si je veux utiliser une variable, une fonction, une classe ou autre
 * venant d'un autre fichier de celui où je suis, il faut que j'utilise
 * un import qui attend en premier le ou les éléments spécifiques qu'on
 * souhaite importer puis le fichier duquel on veut importer ces éléments.
 * Pour importer des choses de nos propres fichier, ils faut commencer le
 * nom du fichier par ./ ou ../ 
 * Si on ne met pas ça, il va aller chercher dans les node_modules.
 */
import {MaClasse} from './ma-classe';
import '../node_modules/bootstrap/scss/bootstrap.scss';
/**
 * Grâce aux loaders qu'on a mis dans la configuration de webpack,
 * on peut lui dire d'importer directement un fichier scss, webpack
 * se chargera de compiler le scss en css, puis de convertir le css
 * en une chaîne de caractère js, puis d'injecter cette chaîne de 
 * caractère dans la balise style de la page où l'on chargera
 * le bundle obtenu via webpack.
 */
import '../scss/index.scss';

new MaClasse().methode();
console.log('blip');