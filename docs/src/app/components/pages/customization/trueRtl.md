```js
handleChangeTabs2 = (valueTabs) => {
      let newMuiTheme = null;

      if (valueTabs === 'ltr') {
        newMuiTheme = getMuiTheme({
          isRtl: false,
        });
      } 
      else {
        newMuiTheme = getMuiTheme({
          isRtl: true,
        });
      }

      newMuiTheme.name = valueTabs;

      this.setState({
        valueTabs: valueTabs,
      });

      this.props.onChangeMuiTheme(newMuiTheme);
    };
```