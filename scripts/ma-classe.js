/**
 * Si on veut pouvoir importer un élément depuis un fichier, il faut
 * spécifier avec le mot clef export qu'on le rend accessible. Cela 
 * permet de "cacher" certains éléments d'un fichier et de n'exposer
 * que ceux qu'on veut pouvoir rendre utilisable depuis l'extérieur
 */
export class MaClasse {
    methode() {
        console.log('depuis ma classe')
    }
}