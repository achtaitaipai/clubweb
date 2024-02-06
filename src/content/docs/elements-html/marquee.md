---
title: Les bandeaux défilants
description: Comment faire défiler du texte ?
---

En **html** pour insérer une zone de texte défilant on utilise l'élément `<marquee>`.

```html
<marquee>Je défile de droite à gauche</marquee>
```

## Direction

Pour définir la direction de défilement on utilise l'attribut `direction`. Les valeurs possibles sont `left`, `right`, `up` et `down`.

```html
<marquee>Je défile de droite à gauche</marquee>
<marquee direction="left">Je défile de droite à gauche</marquee>
<marquee direction="right">Je défile de gauche à droite</marquee>
<marquee direction="up">Je défile de bas en haut</marquee>
<marquee direction="down">Je défile de haut en bas</marquee>
```

<marquee>Je défile de droite à gauche</marquee>
<marquee direction="left">Je défile de droite à gauche</marquee>
<marquee direction="right">Je défile de gauche à droite</marquee>
<marquee direction="up">Je défile de bas en haut</marquee>
<marquee direction="down">Je défile de haut en bas</marquee>

## Comportement du défilement

Pour définir le comportement du défilement, on utilise l'attribut `behavior`. Les valeurs possibles sont `scroll`, `slide` et `alternate`.

La valeur `scroll` indique que le texte défilera dans la direction indiquée, puis recommencera une fois arrivé au bout.

La valeur `slide` indique que le texte défilera dans la direction indiquée, puis s'arrêtera une fois arrivé au bout.

La valeur `alternate` indique que le texte défilera dans la direction indiquée, puis rebondira une fois arrivé au bout.

```html
<marquee behavior="scroll"> Coucou </marquee>
<marquee behavior="slide"> Coucou </marquee>
<marquee behavior="alternate"> Coucou </marquee>
```

<marquee behavior="scroll"> Coucou </marquee>
<marquee behavior="slide"> Coucou </marquee>
<marquee behavior="alternate"> Coucou </marquee>

:::caution
Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.
:::
