---
title: Les iframes
descriptions: Une page web dans une page web !
---

Les iframe permettent d'intégrer une page web à l'intérieur de votre page web!

Par exemple, imaginons que je souhaite intégrer une vidéo youtube sur mon site internet. Je peux utiliser le code suivant :

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/BVyQimshRJI?si=DBTzwROYoImOmlQo"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

Ce qui donnera :

<iframe width="560" height="315" src="https://www.youtube.com/embed/BVyQimshRJI?si=DBTzwROYoImOmlQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Le code des iframe varient en fonction du site. Beaucoup de sites proposent un code à copier-coller dans notre page html.

Pour le cas de youtube par exemple il faut :

1. aller sur la page de la vidéo
1. Cliquer sur le bouton `partager` sous la vidéo
1. Cliquer sur le bounton `intégrer`
1. Copier coller le code qui s'affiche 🙃
