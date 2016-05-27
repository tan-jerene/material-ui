import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../CodeExample';
import MarkdownElement from '../../MarkdownElement';
import alignText from './align.md';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import typography from 'material-ui/styles/typography';
import ClearFix from 'material-ui/internal/ClearFix';
import {
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

var stl = "ltr";
const codeMixStyles =
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

const codeMixStyles2 =
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

class Alignment extends React.Component {

  	state = {
	    dialogOpen: false,
	    snackbarOpen: false,
	    drawerOpen: false,
	};

	getStyles() {
		return {
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
		    title: {
		        fontSize: 20,
		        lineHeight: '28px',
		        paddingTop: 19,
		        marginBottom: 13,
		        letterSpacing: 0,
		        fontWeight: typography.fontWeightMedium,
		        color: typography.textDarkBlack,
		    },
		    container: {
		    	marginTop: 10,
		    },
		    base: {
		    	border: "1px solid #E5E5E5",
		    	padding: 20,
		    	boxShadow: "2px 2px 1px #ECECEC",
		    },
	  	};
	}

	handleChangeTabs2 = (valueTabs) => {
	    let newMuiTheme = null;

	    if (valueTabs === 'ltr') {
	    	stl = "ltr";
	    } 
	    else {
	    	stl = "rtl";
	    }

	    this.setState({
	      valueTabs: valueTabs,
	    });
  	};

	render() {
		const styles = this.getStyles();
		return (
			<div>
				<Title render={(previousTitle) => `Alignment (RTL) - ${previousTitle}`} />
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
		              hintText="TextField"
		            />
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
		      <CodeExample code={codeMixStyles} component={false} >
				    <List style={{overflow: 'auto', maxHeight: 300}} dir="rtl">
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
		      <CodeExample code={codeMixStyles2} component={false} >
				    <List style={{overflow: 'auto', maxHeight: 300}}>
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
			</div>
		);
	}
}

export default Alignment;