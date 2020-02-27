This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# MW React UI Component Library
```
npm install mw-react-ui
```

```jsx
import React from 'react';
import {Button} from 'mw-react-ui';

function App() {
  return (
    <div className="App">
      <Button text={'button'}/>
    </div>
  );
}
export default App;
```

If you want to customize your project theme. You need to import your theme variables theme before to override the exsiting default variables.
```scss
// Put your variables.scss here `
// e.g $height: 100px;`
@import '{your-variables}.scss';`
@import '../node_modules/mw-react-ui/esm/index.scss';
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

### `npm run build`

Run this cmd will build the scss files, js files into 2 folders, one is for es module, another is lib, for common JS module.
you can import sass files and es6 react class components as well.

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
