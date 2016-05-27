### How This Works

The above was achieved by injecting a simple HTML attribute into the regular React Script:

```js
import React from 'react';
import AppBar from 'material-ui/AppBar';

class Main extends React.Component {
  render() {
    return (
      //The dir HTML attribute can be used to achieve RTL scripting on both regular HTML components and React Components
      <AppBar dir="rtl" title="React Component" /> 
      <div dir="ltr">Regular HTML Component</div> //Default left-to-right alignment
    );
  }
}
```