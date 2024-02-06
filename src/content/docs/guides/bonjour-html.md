---
title: 👋 Bonjour <HTML> !
description: Un guide sur comment commencer une nouvelle page web
---

Le HTML est un langage de programmation utilisé pour créer des pages web. Il permet d’organiser et de mettre en forme le contenu d’une page, comme le texte, les images et les liens.

Le HTML utilise un système de **balises** pour marquer les différents éléments d’une page web.

## Mais c'est quoi une balise ?

Les éléments html sont un peu comme des boîtes dans lesquels on met du contenu. Le code ressemble à ceci :

```html
<typedeboite>Contenu de ma boîte</typedeboite>
```

:::warning
Le code précédent ne fonctionne pas bien sûr!
:::

Voici comment coder un vrai paragraphe :

```html
<p>Bonjour internet!</p>
```

- `<p>` C'est la balise ouvrante.
- `</p>` C'est la balise fermante.
- `Bonjour internet!` C'est le contenu.

L'ensemble forme un élément **Html**

:::note
Chaque balise HTML commence par un nom entre des crochets angulaires, comme `<p>` ou `<h1>`, et se termine par la même balise avec une barre oblique avant les crochets, comme `</p>` ou `</h1>`.
:::

## Imbriquer les éléments HTML

De la même manière qu'on peut mettre des boîtes dans des boîtes, on peut imbriquer des élément html, les un dans les autres.

Par exemple l'élément pour faire ressortir du texte s'appelle b. Pour faire ressortir un morceau de texte dans un paragraphe on écrira :

```html
<p>J'aime les <b>éléphants</b></p>
```

## Les attributs

L'élément pour créer un lien s'appelle `a`.

```html
Voici un super <a>lien</a>
```

🧐 Mais comment le navigateur saura ou doit renvoyer le lien?

On a besoin d'un **attribut**!

Les attributs servent à ajouter des précisions au navigateur sur comment un élément doit fonctionner.

L'attribut pour l'url d'un lien s'appelle `href`. Pour créer un lien vers google :

```html
Voici un super <a href="https://google.com">lien</a>
```

Pour une image l'élément s'appelle `ìmg` et l'attribut pour préciser le lien vers l'image s'appelle `src` ce qui nous donne :

```html
<img
  src="https://upload.wikimedia.org/wikipedia/commons/6/64/Collage_of_Six_Cats-02.jpg"
/>
```

## En résumé

Pour ajouter du contenu en html il faut :

- Choisir le type de contenu (paragraphe, image titre, lien...)
- Mettre une balise ouvrante par exemple : `<h1>` pour un titre.
- Insérer son contenu.
- Et enfin fermer avec une balise fermante. Dans notre exemple ce serait : `</h1>` .
