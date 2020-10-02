# TP04 - JavaScript

Dans cet exercice, vous devez implémenter 4 fonctions JavaScript en suivant scrupuleusement les consignes.

Toutes les fonctions ainsi que le test devront être écrites dans le fichier `script.js`.

## Fonction `minimum`

La fonction `minimum` prend deux paramètres, les nombres `a` et `b`.
De ces deux éléments, elle retourne le plus petit des deux.
En cas d'égalité, elle retourne `a`.

## Fonction `maximum`

La fonction `maximum` prend deux paramètres, les nombres `a` et `b`.
De ces deux éléments, elle retourne le plus grand des deux.
En cas d'égalité, elle retourne `a`.

## Fonction `reduce`

La fonction `reduce` prend deux paramètres.
Le premier, `numbers`, est un tableau de nombres.
Le second, `fn`, est une fonction qui prend deux nombres en paramètres et retourne un nombre.

La fonction `reduce` applique la fonction `fn` sur les deux premiers nombres du tableau `numbers`.
Si `numbers` contient au moins 3 nombres, elle applique `fn` sur le résultat du premier appel et le troisième nombre du tableau.
Si `numbers` contient au moins 4 nombres, elle applique `fn` sur le résultat du second appel et le quatrième nombre.
Et ainsi de suite, jusqu'à ce que tous les nombres de `numbers` aient été utilisés.
Alors, `reduce` retourne le dernier résultat obtenu.

Si le tableau comporte moins de 2 nombres, la fonction retourne `null`.

## Fonction `filter`

La fonction `filter` prend deux paramètres.
Le premier, `numbers`, est un tableau de nombres.
Le second, `fn`, est une fonction qui prend un nombre en paramètre et retourne un booléen.

La fonction `filter` applique la fonction `fn` à chaque élément de `numbers` tout à tour.
Elle retourne une nouvelle liste contenant tous les éléments de `numbers` pour lesquels `fn` retourne `true`.

## Test

Après avoir défini les trois fonctions décrites ci-dessus, définissez un tableau de nombre appelé `myTestNumbers` contenant les nombres : `5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377`.

* Affichez sur la console le résultat de l'appel de `reduce` sur `myTestNumbers` et `minmum`.
  Vérifiez que le résultat affiché est bien `3`.
* Affichez sur la console le résultat de l'appel de `reduce` sur `myTestNumbers` et `maximum`.
  Vérifiez que le résultat affiché est bien `610`.
* Affichez sur la console le résultat de l'appel de `filter` sur `myTestNumbers` et une "arrow function" qui retourne `true` si son unique paramètre est supérieur ou égal à 30.
  Vérifiez que le résultat contient les nombres `34, 610, 55, 89, 144, 233, 377`, dans cet ordre et sans autre nombre.
