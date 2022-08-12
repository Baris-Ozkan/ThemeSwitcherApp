# Angular Dynamic Theme Switching

## Steps To Implement the Theme Service:
1. Put your scss styling themes in a directory inside the project
2. Add each of your individual theme from the directory as a bundle into the styles array in angular.json
- Example: `"styles": [
  {
  "input": "src/assets/themes/theme-default-journal/style.scss",
  "bundleName": "journal",
  "inject": false
  },
  {
  "input": "src/assets/themes/theme-lux/style.scss",
  "bundleName": "lux",
  "inject": false
  }
]`
3. Create an html `<link>` element at index.html. This element will be used to refer to the current active theme style. You can also set a default theme here by entering a value into `href`
- Example: `<link id= "theme-app" rel="stylesheet" type="text/css" href="journal.css">`
4. Generate an Angular service to implement the Theme Service. We're going to import and inject a variable type `DOCUMENT` in the constructor to access the current active theme style value
- `import {DOCUMENT} from "@angular/common";`
- `constructor(@Inject(DOCUMENT) private document: Document) { }`
5. Implement the function to access the current active theme and change it if the directory is found. To make the theme choice persistent, add the current selected theme to localStorage
- `switchTheme(theme: string) {
  let themeLink = this.document.getElementById('theme-app') as HTMLLinkElement;
  if (themeLink) {
  themeLink.href = theme + '.css';
  localStorage.setItem('theme', theme);
  }
}`
6. Import and inject the service in a component. Then, implement a function to call the service on demand. Also, in the `ngOnInit()` function, do a quick check if localStorage has a theme value stored so that the theme persists browser and tab sessions
- `ngOnInit() {
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme != null) {
  this.themeService.switchTheme(savedTheme);
  }
  }
  changeTheme(theme: string) {
  this.themeService.switchTheme(theme);
  }`
7. Finally, add an element to the html file to trigger the function call in the component.ts file. I used buttons in my implementation to keep things simple but you could also use a drop-down, hover menu, etc.
- Example: `<button type="button" (click)="changeTheme('journal')">Journal</button>`
  `<button type="button" (click)="changeTheme('lux')">Lux</button>`
