# MW React UI Component Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
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
@import '../node_modules/mw-react-ui/lib/index.scss';
```



## Available Scripts

In the project directory, you can run:
```bash
npm install
```

```bash
npm start
```
The page will reload if you make edits.


 ```bash
 npm run build
 ```

Run this cmd will build the scss files, js files into 2 folders, one is for `es` module and `common JS `module.

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
