# Kid's Space Weather

## Project setup

### First, you need to install NodeJS and vue-cli:

1. Install Latest Node.js LTS version: [Link](https://nodejs.org/en/)
2. After install, check npm is working by running:  
    `npm -v`
3. Install vue-cli 3 for running and building the files:  
    `npm i -g @vue/cli`

### After install, install the necessary packages by running:
```
npm i
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
The outputs are located at `dist` folder.

### Lints and fixes files
```
npm run lint
```

### Notes

**You don't need to modify any source code files (ends in either `.vue` or `.js`).**

If you want to change and update the content, all the document files are placed in the `/src/data` folder which ends in `.md`. `en` is in English and `zh` is in Chinese. 

If you want to add a new topic in either sections, modify the `.json` file (e.g. `/src/data/phenomena/phenomena.json`) and add a new object. The pictures is located at `src/assets/images`.

If you want to add image inside the `.md` file, place the image at `public/static` and link them using markdown syntax: `![<tag>](<link to the file>)`

I recommend you to use a [markdown editor](https://markdownedit.com/) to modify the `.md` file. To learn markdown, see [Markdown Cheatsheet](https://gist.github.com/billy3321/1001749662c370887c63bb30f26c9e6e).
