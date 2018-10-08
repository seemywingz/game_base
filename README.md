3Base
-------------
###### THREE.js CANNON.js 3d Application Boilerplate

### Install
`yarn add 3base`

Example webpack.config.js
---
#### sets a webpack alias for 3base
```js
const path = require('path');
console.log(path.join( __dirname + "/srv"));

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.join( __dirname + "/srv"),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
    alias: {
      '3base': path.join(__dirname,'/node_modules/3base/src'),
    },
    extensions: ['*', '.js', '.jsx']
  },
  
  devServer: {
    port: 10001
  }
};
```

Usage  
----
index.js
```js
'use-strict';

import Loaders from '3base/Loaders';
import Scene1 from './Scene1';

let loaders = new Loaders();
loaders.loadScene(Scene1);
```  
Scene1.js
```js
'use-strict';

import Sky from '../node_modules/3base/src/Sky';
import Scene from '../node_modules/3base/src/Scene';
import Ground from '../node_modules/3base/src/Ground';
import GLTFModel from '../node_modules/3base/src/GLTFModel';

export default class Scene1 extends Scene {

  constructor(loader) {
    super(loader);
  }
  
  createScene(){
    new Sky(this, this.loadTexture('assets/images/sky.jpg')).addToScene();
    new Ground(this, this.loadTexture( 'assets/images/ground.jpg')).addToScene();
  }

  click(){
    // do clicky things
  }
}

```