import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import withWidth, {MEDIUM} from 'material-ui/utils/withWidth';
import typography from 'material-ui/styles/typography';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import themesText from './themes.md';
import ClearFix from 'material-ui/internal/ClearFix';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CodeExample from '../../CodeExample';
import alignText from './align.md';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500, red500} from 'material-ui/styles/colors';

import {
  AppBar,
  Checkbox,
  DatePicker,
  Dialog,
  DropDownMenu,
  FlatButton,
  FloatingActionButton,
  Drawer,
  MenuItem,
  Paper,
  RadioButton,
  RadioButtonGroup,
  RaisedButton,
  Snackbar,
  Slider,
  Tabs,
  Tab,
  TextField,
  Toggle,
} from 'material-ui';

var prm1col = "#00BCD4";

var stl = "ltr";
const codeWithoutAux =
    '<List dir="rtl"  style={{overflow: \'auto\', maxHeight: 200}}>\n' +
    '  <Subheader>Recent chats</Subheader>\n' +
    '  <ListItem\n' +
    '    primaryText="Brendan Lim"\n' +
    '    leftAvatar={<Avatar src="images/ok-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Eric Hoffman"\n' +
    '    leftAvatar={<Avatar src="images/kolage-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Grace Ng"\n' +
    '    leftAvatar={<Avatar src="images/uxceo-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Kerem Suer"\n' +
    '    leftAvatar={<Avatar src="images/kerem-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Raquel Parrado"\n' +
    '    leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '</List>\n' +
    '<Divider />\n' +
    '<List dir="rtl"  style={{overflow: \'auto\', maxHeight: 200}}>\n' +
    '  <Subheader>Previous chats</Subheader>\n' +
    '  <ListItem\n' +
    '    primaryText="Chelsea Otakan"\n' +
    '    leftAvatar={<Avatar src="images/chexee-128.jpg" />} />\n' +
    '  <ListItem\n' +
    '    primaryText="James Anderson"\n' +
    '    leftAvatar={<Avatar src="images/jsa-128.jpg" />} />\n' +
    '</List>\n';

const codeWithAux =
    '<List  style={{overflow: \'auto\', maxHeight: 200}}>\n' +
    '  <div> dir="rtl"\n' +
    '  <Subheader>Recent chats</Subheader>\n' +
    '  <ListItem\n' +
    '    primaryText="Brendan Lim"\n' +
    '    leftAvatar={<Avatar src="images/ok-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Eric Hoffman"\n' +
    '    leftAvatar={<Avatar src="images/kolage-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Grace Ng"\n' +
    '    leftAvatar={<Avatar src="images/uxceo-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Kerem Suer"\n' +
    '    leftAvatar={<Avatar src="images/kerem-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '  <ListItem\n' +
    '    primaryText="Raquel Parrado"\n' +
    '    leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}\n' +
    '    rightIcon={<CommunicationChatBubble />} />\n' +
    '</List>\n' +
    '<Divider />\n' +
    '<List  style={{overflow: \'auto\', maxHeight: 200}}>\n' +
    '  <div dir="rtl">\n' +
    '  <Subheader>Previous chats</Subheader>\n' +
    '  <ListItem\n' +
    '    primaryText="Chelsea Otakan"\n' +
    '    leftAvatar={<Avatar src="images/chexee-128.jpg" />} />\n' +
    '  <ListItem\n' +
    '    primaryText="James Anderson"\n' +
    '    leftAvatar={<Avatar src="images/jsa-128.jpg" />} />\n' +
    '  </div>\n' +
    '</List>\n';
const codeCheckbox =
      '<Checkbox \n' +
      '  id="checkboxIdX"\n' +
      '  name="checkboxName1"\n' +
      '  value="checkboxValue1"\n' +
      '  label="Material-UI is awesome!"\n' +
      '  iconStyle={{\n' +
      '    fill: \'#FF4081\'\n' +
      '  }} />\n\n' +
      '/**Excerpt for cboxMuiTheme**/\n' + 
      'const cboxMuiTheme = getMuiTheme({isRtl:true});\n\n' +
      '/**Excerpt from CSS**/\n' + 
      '#checkboxIdX {\n' +
      '  direction: rtl;\n' +
      '}';

const markdownText = `
## Themes

### Examples

You can use the tabs to change the theme. The changes will be applied to the whole
documentation.
`;

class ThemesPage extends Component {
  static propTypes = {
    muiTheme: PropTypes.object,
    onChangeMuiTheme: PropTypes.func,
    width: PropTypes.number.isRequired,
  };

  state = {
    dialogOpen: false,
    snackbarOpen: false,
    drawerOpen: false,
  };

  componentWillMount() {
    this.setState({
      valueTabs: this.props.muiTheme.name || 'light',
    });
  }

  getStyles() {
    const canvasColor = this.props.muiTheme.baseTheme.palette.canvasColor;
    const borderColor = this.props.muiTheme.baseTheme.palette.borderColor;
    const styles = {
      group: {
        float: 'left',
        width: '100%',
        marginTop: '16px',
        padding: '0 50px',
        boxSizing: 'border-box',
      },
      groupSlider: {
        marginTop: '0px',
        width: '100%',
      },
      container: {
        marginBottom: '16px',
        minHeight: '24px',
        textAlign: 'left',
      },
      containerCentered: {
        textAlign: 'center',
      },
      paper: {
        height: '100px',
        width: '100px',
        margin: '0 auto',
        marginBottom: '64px',
      },
      textfield: {
        width: '100%',
      },
      slider: {
        marginTop: '0px',
        marginBottom: '0px',
      },
      title: {
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: typography.fontWeightMedium,
        color: typography.textDarkBlack,
      },
      liveExamplePaper: {
        backgroundColor: canvasColor,
        marginBottom: 32,
        overflow: 'hidden',
      },
      bottomBorderWrapper: {
        borderBottom: `1px solid ${borderColor}`,
        paddingBottom: '10px',
      },
      headline: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
        letterSpacing: 0,
        fontWeight: typography.fontWeightNormal,
        color: typography.textDarkBlack,
      },
      dir1: {
        fontFamily: "Consolas",
        color: "#808080",
      },
      dir2: {
        fontFamily: "Consolas",
        color: "#565656",
      },
      dir3: {
        fontFamily: "Consolas",
        color: "#C1C1C1",
      },
      container: {
        marginTop: 10,
      },
      base: {
        border: "1px solid #E5E5E5",
        padding: 20,
        boxShadow: "2px 2px 1px #ECECEC",
      },
      muiOverride: { 
        border: "1px solid #FFFFFF",
        backgroundColor: "#FFFFFF",
      },
    };

    if (this.props.width === MEDIUM) {
      styles.group.width = '33%';
    }

    styles.containerCentered = Object.assign({}, styles.container, styles.containerCentered);
    styles.groupSlider = Object.assign({}, styles.group, styles.groupSlider);

    return styles;
  }

  getAlignmentGroup() {
    const cboxMuiTheme = getMuiTheme({isRtl: true,});
    const styles = this.getStyles();

    return (
      <div>
        <br/>
            <h2 style={styles.headline}>Alignment (RTL)</h2>
            <p>The default alignment of all Material-UI elements is LTR. The following methods can be used to allow RTL scripting.
              <br/>References:
            </p>
          <ul> 
            <li><a href="https://github.com/callemall/material-ui/issues/1926">Material UI Issue #1926</a></li>
            <li><a href="http://www.w3schools.com/tags/att_global_dir.asp">w3schools - Global <span style={styles.dir1}>dir</span> attribute</a></li>
            <li><a href="https://www.w3.org/International/questions/qa-html-dir">w3 - RTL scripting</a></li>
          </ul>
            <Tabs
              value={this.state.valueTabs}
                onChange ={this.handleChangeTabs2}
            >
              <Tab
                label="Left-To-Right ALIGNMENT (DEFAULT)"
                value="ltr" />
              <Tab
                label="Right-To-Left ALIGNMENT"
                value="rtl" />
            </Tabs>
            <ClearFix style={styles.base} dir={stl}> <h3 style={styles.title}>Hello World!</h3>
            <div style={styles.container}>
              <div >
                <FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />
              </div>
              <div >
                <RaisedButton label="Button :)" primary={true} />
              </div>
            </div>
            <div >
              <div style={styles.container}>
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="checkbox" />
              </div>
              <div style={styles.container}>
                <RadioButtonGroup
                  name="shipSpeed"
                  defaultSelected="usd"
                >
                  <RadioButton
                    value="rb"
                    label="RadioButton" />
                  <RadioButton
                    value="arb"
                    label="Another RadioButton" />
                  <RadioButton
                    value="yarb"
                    label="Yet Another RadioButton" />
                </RadioButtonGroup>
              </div>
              <div style={styles.container}>
                <Toggle
                  name="toggleName1"
                  label="toggle" />
                <Toggle
                  name="toggleName2"
                  label="toggled toggle"
                  defaultToggled={true}/>
              </div>
            </div>
            <div style={Object.assign({}, styles.group, {marginTop: 0})}>
              <div style={styles.container}>
                <TextField
                  style={styles.textfield}
                  hintText="TextField" />
              </div>
              <div style={styles.container}>
                <DatePicker
                  hintText="Landscape Dialog"
                  mode="landscape"
                  style={{width: '100%'}}
                />
              </div>
              <div style={styles.container}>
                <DropDownMenu value={3} style={{width: '100%'}}>
                  <MenuItem value={1} primaryText={'Ice Cream Sandwich'} />
                  <MenuItem value={2} primaryText={'Jelly Bean'} />
                  <MenuItem value={3} primaryText={'KitKat'} />
                  <MenuItem value={4} primaryText={'Lollipop'} />
                  <MenuItem value={5} primaryText={'Marshmallow'} />
                </DropDownMenu>
              </div>
            </div>
            <div style={styles.groupSlider}>
              <Slider style={styles.slider} name="slider2" defaultValue={0.2} />
            </div>
          </ClearFix>
          <br/>
          <div>
            <MarkdownElement text={alignText} />
          </div>
          <h3 style={styles.title}>Maintaining Directionality</h3>
          <div>When rendering in RTL some browsers change the directionality of the interface rather than just the alignment of text components. This includes the position of scrolling bars etc. This may not be desirable. The following can be done to safeguard against this issue. 
          </div>
          <br/>
          <h4>Right-To-Left Alignment - With misaligned scroll-bar</h4>
          <CodeExample code={codeWithoutAux} component={false} >
            <List style={{overflow: 'auto', maxHeight: 260}} dir="rtl">
              <Subheader>Recent chats</Subheader>
              <ListItem
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
              <ListItem
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
              <ListItem
                primaryText="Grace Ng"
                leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
              <ListItem
                primaryText="Kerem Suer"
                leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
              <ListItem
                primaryText="Raquel Parrado"
                leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
            </List>
            <Divider />
            <List  style={{overflow: 'auto', maxHeight: 200}} dir="rtl">
              <Subheader>Previous chats</Subheader>
              <ListItem
                primaryText="Chelsea Otakan"
                leftAvatar={<Avatar src="images/chexee-128.jpg" />} />
              <ListItem
                primaryText="James Anderson"
                leftAvatar={<Avatar src="images/jsa-128.jpg" />} />
            </List>
            </CodeExample>
            <br/>
          <h4>Right-To-Left Alignment - With auxiliary <span style={styles.dir1}>&#60;div&#62;</span></h4>
          <div>Rather than setting alignment values for each sub-component an additional component can be used that contains this attribute as follows:</div>
          <CodeExample code={codeWithAux} component={false} >
            <List style={{overflow: 'auto', maxHeight: 260}}>
              <div dir="rtl">
                <Subheader>Recent chats</Subheader>
                <ListItem
                  primaryText="Brendan Lim"
                  leftAvatar={<Avatar src="images/ok-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />} />
                <ListItem
                  primaryText="Eric Hoffman"
                  leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />} />
                <ListItem
                  primaryText="Grace Ng"
                  leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />} />
                <ListItem
                  primaryText="Kerem Suer"
                  leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />} />
                <ListItem
                  primaryText="Raquel Parrado"
                  leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                  rightIcon={<CommunicationChatBubble />} />
             </div>
            </List>
            <Divider />
            <List  style={{overflow: 'auto', maxHeight: 200}}>
              <div dir="rtl">
                <Subheader>Previous chats</Subheader>
                <ListItem
                  primaryText="Chelsea Otakan"
                  leftAvatar={<Avatar src="images/chexee-128.jpg" />} />
                <ListItem
                  primaryText="James Anderson"
                  leftAvatar={<Avatar src="images/jsa-128.jpg" />} />
            </div>
            </List>
            </CodeExample>
            <h3 style={styles.title}>True RTL support in Material-UI - <span style={styles.dir1}>isRtl</span> key (JS <span style={styles.dir1}>muiTheme</span> Object)</h3>
            <div>As mentioned above the isRtl key is the React Native way to set the alignment of React components</div>
            <CodeExample code={codeCheckbox} component={false}>
              <MuiThemeProvider muiTheme={cboxMuiTheme}>
                <Checkbox 
                  style={styles.muiOverride}
                  id="checkboxIdX"
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="Material-UI is awesome!"
                  className="muidocs-checkbox-example"
                  iconStyle={{
                    fill: '#FF4081'
                  }} />
              </MuiThemeProvider>
            </CodeExample>
          </div>
        );
  }

  getComponentGroup() {
    const styles = this.getStyles();

    return (
      <ClearFix>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />
          </div>
          <div style={styles.containerCentered}>
            <RaisedButton label="Secondary" secondary={true} />
          </div>
          <div style={styles.containerCentered}>
            <RaisedButton label="Primary" primary={true} />
          </div>
          <div style={styles.containerCentered}>
            <RaisedButton label="Default" />
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.container}>
            <Checkbox
              name="checkboxName1"
              value="checkboxValue1"
              label="checkbox" />
            <Checkbox
              name="checkboxName2"
              value="checkboxValue2"
              label="disabled checkbox"
              disabled={true} />
          </div>
          <div style={styles.container}>
            <RadioButtonGroup
              name="shipSpeed"
              defaultSelected="usd"
            >
              <RadioButton
                value="usd"
                label="USD" />
              <RadioButton
                value="euro"
                label="Euro" />
              <RadioButton
                value="mxn"
                label="MXN"
                disabled={true} />
            </RadioButtonGroup>
          </div>
          <div style={styles.container}>
            <Toggle
              name="toggleName1"
              label="toggle" />
            <Toggle
              name="toggleName2"
              label="disabled toggle"
              defaultToggled={true}
              disabled={true} />
          </div>
        </div>
        <div style={Object.assign({}, styles.group, {marginTop: 0})}>
          <div style={styles.container}>
            <TextField
              style={styles.textfield}
              hintText="TextField" />
          </div>
          <div style={styles.container}>
            <DatePicker
              hintText="Landscape Dialog"
              mode="landscape"
              style={{width: '100%'}} />
          </div>
          <div style={styles.container}>
            <DropDownMenu value={3} style={{width: '100%'}}>
              <MenuItem value={1} primaryText={'Never'} />
              <MenuItem value={2} primaryText={'Every Night'} />
              <MenuItem value={3} primaryText={'Weeknights'} />
              <MenuItem value={4} primaryText={'Weekends'} />
              <MenuItem value={5} primaryText={'Weekly'} />
            </DropDownMenu>
          </div>
        </div>
        <div style={styles.groupSlider}>
          <Slider style={styles.slider} name="slider2" defaultValue={0.5} />
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton label="View Dialog" onTouchTap={this.handleTouchTapDialog} />
            <Dialog
              open={this.state.dialogOpen}
              title="Dialog With Standard Actions"
              actions={[
                <FlatButton
                  label="Cancel"
                  keyboardFocus={true}
                  onTouchTap={this.handleRequestCloseDialog}
                  primary={true} />,
                <FlatButton
                  label="Submit"
                  onTouchTap={this.handleRequestCloseDialog}
                  primary={true} />,
              ]}
              onRequestClose={this.handleRequestCloseDialog}
            >
              The actions in this window are created from tan array of element&#39;s that&#39;s passed in.
            </Dialog>
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton
              onTouchTap={this.handleTouchTapDrawer}
              label="View Drawer" />
            <Drawer
              open={this.state.drawerOpen} docked={false}
              onRequestChange={this.handleRequestChangeDrawer}
            >
              <MenuItem index={0}>Menu Item</MenuItem>
              <MenuItem index={1}>Menu Item 2</MenuItem>
            </Drawer>
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton
              onTouchTap={this.handleTouchTapSnackbar}
              label="View Snackbar" />
          </div>
          <Snackbar
            open={this.state.snackbarOpen}
            onRequestClose={this.handleRequestCloseSnackbar}
            message="This is a snackbar"
            action="Got It!"
            onActionTouchTap={this.handleRequestCloseSnackbar} />
        </div>
      </ClearFix>
    );
  }

  getComponentGroup2() {
    const styles = this.getStyles();

    return (
      <ClearFix>
      </ClearFix>
    );
  }

  handleChangeTabs = (valueTabs) => {
    let newMuiTheme = null;

    if (valueTabs === 'light') {
      newMuiTheme = getMuiTheme();
    } 
    else if (valueTabs === 'dark') {
      newMuiTheme = getMuiTheme(darkBaseTheme);
    }
    else {
      newMuiTheme = getMuiTheme({
        palette: {
          primary1Color: red500,
        },
      });
    }

    newMuiTheme.name = valueTabs;

    this.setState({
      valueTabs: valueTabs,
    });

    this.props.onChangeMuiTheme(newMuiTheme);
    console.log(newMuiTheme);
  };
/*******************************************************************OVER HERE***************************************************************/
  handleCustomThemes = () => {
    let newMuiTheme = null;
    if(document.getElementById("prim1Col").value != ""){
      prm1col = document.getElementById("prim1Col").value;
    }
    console.log(prm1col);
    //console.log(document.getElementById("prim1Col").value);
    newMuiTheme = getMuiTheme({
      palette: {
        primary1Color: prm1col,
        //primary2Color: document.getElementById("prim2Col").value,
        //primary3Color: document.getElementById("prim3Col").value,
        //accent1Color: document.getElementById("acc1Col").value,
        //accent2Color: document.getElementById("acc2Col").value,
        //accent3Color: document.getElementById("acc3Col").value,
        //textColor: document.getElementById("txtCol").value,
        //alternateTextColor: document.getElementById("altTxtCol").value,
        //canvasColor: document.getElementById("canvCol").value,
        //borderColor: document.getElementById("borCol").value,
        //disabledColor: document.getElementById("disCol").value,
        //pickerHeaderColor: document.getElementById("pickCol").value,
        //clockCircleColor: document.getElementById("clkCircCol").value,
        //shadowColor: document.getElementById("shadCol").value,
      },
    });

    newMuiTheme.name = "custom";

    this.props.onChangeMuiTheme(newMuiTheme);
    console.log(newMuiTheme);
  };

  handleChangeTabs2 = (valueTabs) => {
      let newMuiTheme = null;

      if (valueTabs === 'ltr') {
        //stl = "ltr";
        //document.querySelector("body").style.direction = "rtl";
        newMuiTheme = getMuiTheme({
          isRtl: false,
        });
      } 
      else {
        //stl = "rtl";
        //document.querySelector("body").style.direction = "rtl";
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

  getThemeExamples() {
    return (
      <div>
        <Tabs
          value={this.state.valueTabs}
          onChange={this.handleChangeTabs}
        >
          <Tab
            label="Light Theme (Default)"
            value="light" />
          <Tab
            label="Dark Theme"
            value="dark" />
          <Tab
            label="Custom Theme"
            value="custom" />
        </Tabs>
        {this.getComponentGroup()}
      </div>
    );
  }

  handleTouchTapDrawer = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  handleRequestChangeDrawer = (open) => {
    this.setState({
      drawerOpen: open,
    });
  };

  handleTouchTapDialog = () => {
    this.setState({
      dialogOpen: true,
    });
  };

  handleRequestCloseDialog = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleTouchTapSnackbar = () => {
    this.setState({
      snackbarOpen: true,
    });
  };

  handleRequestCloseSnackbar = () => {
    this.setState({
      snackbarOpen: false,
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <div>
        <Title render={(previousTitle) => `Themes - ${previousTitle}`} />
        <MarkdownElement text={markdownText} />
        <Paper style={styles.liveExamplePaper}>
          <ClearFix style={styles.liveExampleBlock}>{this.getThemeExamples()}</ClearFix>
        </Paper>
        <h2 style={styles.title}>Customized Themes</h2>
        <div>The <span style={styles.dir1}>getMuiTheme</span> function of Material-UI allows the user to customize the theme. This can be done by changing the <span style={styles.dir1}>palette</span> which accordingly change all components with a given styling and/or changing individual components. The following will demonstrate the usage of the <span style={styles.dir1}>palette</span> key. Test it out!</div>
        <div style={styles.bottomBorderWrapper}>
          <div style={styles.dir2}>
            getMuiTheme&#40;&#123; <br/>
            &nbsp; palette: &#123; <br/>
            &nbsp;&nbsp; primary1Color: <TextField hintStyle={styles.dir3} hintText="#XXXXXX" /*defaultValue="#00BCD4"*/ id="prim1Col"></TextField>, <br/>
            &nbsp;&nbsp; primary2Color: <TextField hintStyle={styles.dir3} /*defaultValue="#0097A7"*/ hintText="#XXXXXX" id="prim2Col"></TextField>, <br/>
            &nbsp;&nbsp; primary3Color: <TextField hintStyle={styles.dir3} /*defaultValue="#BDBDBD"*/ hintText="#XXXXXX" id="prim3Col"></TextField>, <br/>
            &nbsp;&nbsp; accent1Color: <TextField hintStyle={styles.dir3} /*defaultValue="#FF4081"*/ hintText="#XXXXXX" id="acc1Col"></TextField>, <br/>
            &nbsp;&nbsp; accent2Color: <TextField hintStyle={styles.dir3} /*defaultValue="#F5F5F5"*/ hintText="#XXXXXX" id="acc2Col"></TextField>, <br/>
            &nbsp;&nbsp; accent3Color: <TextField hintStyle={styles.dir3} /*defaultValue="#9E9E9E"*/ hintText="#XXXXXX" id="acc3Col"></TextField>, <br/>
            &nbsp;&nbsp; textColor: <TextField hintStyle={styles.dir3} /*defaultValue="rgba(0, 0, 0, 0.87)"*/ hintText="#XXXXXX" id="txtCol"></TextField>, <br/>
            &nbsp;&nbsp; alternateTextColor: <TextField hintStyle={styles.dir3} /*defaultValue="rgba(255, 255, 255, 1)"*/ hintText="#XXXXXX" id="altTxtCol"></TextField>, <br/>
            &nbsp;&nbsp; canvasColor: <TextField hintStyle={styles.dir3} /*defaultValue="rgba(255, 255, 255, 1)"*/ hintText="#XXXXXX" id="canvCol"></TextField>, <br/>
            &nbsp;&nbsp; borderColor: <TextField hintStyle={styles.dir3} /*defaultValue="#e0e0e0"*/ hintText="#XXXXXX" id="borCol"></TextField>, <br/>
            &nbsp;&nbsp; disabledColor: <TextField hintStyle={styles.dir3} /*defaultValue="fade(darkBlack, 0.3)"*/ hintText="#XXXXXX" id="disCol"></TextField>, <br/>
            &nbsp;&nbsp; pickerHeaderColor: <TextField hintStyle={styles.dir3} /*defaultValue="#00BCD4"*/ hintText="#XXXXXX" id="pickCol"></TextField>, <br/>
            &nbsp;&nbsp; clockCircleColor: <TextField hintStyle={styles.dir3} /*defaultValue="fade(darkBlack, 0.07)"*/ hintText="#XXXXXX" id="clkCircCol"></TextField>, <br/>
            &nbsp;&nbsp; shadowColor: <TextField hintStyle={styles.dir3} /*defaultValue="rgba(0, 0, 0, 1)"*/ hintText="#XXXXXX" id="shadCol"></TextField>, <br/>
            &nbsp;&#125;, <br/>
            &#125;&#41; <br/>
            <div style={styles.containerCentered}>
              <RaisedButton label="Preview!" primary={true} onClick={this.handleCustomThemes}/>
            </div>
          </div>
        </div>
        <div style={styles.bottomBorderWrapper}>
          <MarkdownElement id="md" text={themesText} />
        </div>
        {this.getAlignmentGroup()}
      </div>
    );
  }
}

export default muiThemeable()(withWidth()(ThemesPage));
