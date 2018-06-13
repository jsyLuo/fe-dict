*CommonJS的风格*

```
//sub.js

function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world";
  return element;
}

module.exports = generateText;

```

```
index.js

var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);


```

*es6 风格*

```
//sub.js

export default function() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world hahaha";
  return element;
}
```



*es6 风格*
```
//sub.js
var config = require('./config.json');
import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css';//导入

class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
            {config.greetText}
            </div>
        );
    }
}


export default Greeter




//index.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter/>,document.getElementById('root'));
```

