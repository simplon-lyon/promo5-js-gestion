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
import '../scss/index.scss';

new MaClasse().methode();
console.log('blip');