<p align="center">
  <img src="https://raw.githubusercontent.com/nickolasrm/FathersDay2021/main/public/logo512.png" width="200px" />
</p>

<div align="center">
  <img src="https://github.com/nickolasrm/FathersDay2021/actions/workflows/build.yml/badge.svg" />
  <a href='https://coveralls.io/github/nickolasrm/FathersDay2021?branch=main'><img src='https://coveralls.io/repos/github/nickolasrm/FathersDay2021/badge.svg?branch=main'     alt='Coverage Status' /></a>
</div>

## Happy Fathers Day 2021! 🎉🎉

We are all passing through bad times recently. Covid-19 pandemic made life hard for everyone. For some, it may have made your relationship with your father closer, for others, the opposite or even impossible. However, it doesn't mean you cannot tell your father you love him, even if he's not here anymore. 

**This is my way of doing it, what is yours?**

## GIFs

_Desktop visualization_

<img src="https://github.com/nickolasrm/FathersDay2021/blob/main/screenshots/overview.gif" />

_Mobile visualization_

<img height="600px" src="https://github.com/nickolasrm/FathersDay2021/blob/main/screenshots/mobile.gif" />

## What is this?

This is a website I made using Typescript and React for fooling my father making him to think it is a car announcement website, but it is actually a tribute to him.

You can check the project out [here](https://nickolasrm.github.io/FathersDay2021/)

## I liked the idea, how do I do the same?

Follow these steps:

1. For replicating this website, you should first fork this repository. 

2. Make sure you have `node` and `npm` installed.

3. Clone your fork into your computer, open the terminal into the app root folder, run `npm install` and `npm run`.

4. Go to `src/public/locales`, duplicate the `example` folder if your target language is not english or portuguese, otherwise duplicate it and rename it for the target language code. You can find your language code [here](http://www.lingoes.net/en/translator/langcode.htm).

5. Explore the website sections to see what texts should be changed.

6. Make sure your browser is configured to be in the same language as the target language, otherwise it will turn back to english.

7. Open the file `translation.json` located at the folder you just duplicated and replace the values with the proper translation or messages you want into your page.
> NOTE: Every image field is related to an image into `public/images`

8. Replace all images to the ones related to your father. (And write beautiful messages for him into the `translation.json`)

9. _+OPTIONAL_. Each of these keys into `translation.json` are related to the references into `src/pages/Home/index.tsx` and `src/templates/HomeTemplate/index.tsx`. Analyse the file structure in order to customize the sections.
Example of customization:
```tsx
// I want to add another image

// src/pages/Home/index.tsx
<HomeTemplate 
	...
	images={[
		...
		{
			image: t('images.x.image'), 
			comment: t('images.x.comment')
		}
	]} />
```
```json
// public/locales/target_lang/translation.json
...
"images": {
	...
	"x": {
		"image": "x.png",
		"comment": "X comment"
	}
}
```

After that, deploy it to a GitHub Pages environment or build it and host it on a static website hosting service.

## Credits

Made with lots of love by nickolasrm ❤️

## References

- [Figma draft](https://www.figma.com/community/file/1005919725129949371)
