import React, {Component, PropTypes} from 'react';
import keycode from 'keycode';
import {fade, emphasize} from '../utils/colorManipulator';
import EnhancedButton from '../internal/EnhancedButton';
import DeleteIcon from '../svg-icons/navigation/cancel';
import Popover from 'material-ui/Popover/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

function getStyles(props, context, state) {
  const {chip} = context.muiTheme;

  const backgroundColor = props.backgroundColor || chip.backgroundColor;
  const focusColor = emphasize(backgroundColor, 0.08);
  const pressedColor = emphasize(backgroundColor, 0.12);

  return {
    avatar: {
      marginRight: -4,
    },
    deleteIcon: {
      color: (state.deleteHovered) ? fade(chip.deleteIconColor, 0.4) : chip.deleteIconColor,
      cursor: 'pointer',
      margin: '4px 4px 0px -8px',
    },
    label: {
      color: props.labelColor || chip.textColor,
      fontSize: chip.fontSize,
      fontWeight: chip.fontWeight,
      lineHeight: '32px',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    root: {
      backgroundColor: state.clicked ? pressedColor : (state.focused || state.hovered) ? focusColor : backgroundColor,
      borderRadius: 16,
      boxShadow: state.clicked ? chip.shadow : null,
      cursor: props.onTouchTap ? 'pointer' : 'default',
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'fit-content',
    },
  };
}

class ContactChip extends Component {

  static propTypes = {
    /**
     * Override the background color of the ContactChip.
     */
    backgroundColor: PropTypes.string,
    /**
     * Used to render elements inside the ContactChip.
     */
    children: PropTypes.node,
    /**
     * CSS `className` of the root element.
     */
    className: PropTypes.node,
    /**
     * Override the label color.
     */
    emailprim: PropTypes.string, /*Recent addition*/
    emailsec: PropTypes.string, /*Recent addition*/
    emailter: PropTypes.string, /*Recent addition*/
    labelColor: PropTypes.string, /*Recent addition*/
    /**
     * Override the inline-styles of the label.
     */
    labelStyle: PropTypes.object,
    /** @ignore */
    onBlur: PropTypes.func,
    /** @ignore */
    onFocus: PropTypes.func,
    /** @ignore */
    onKeyDown: PropTypes.func,
    /** @ignore */
    onKeyboardFocus: PropTypes.func,
    /** @ignore */
    onMouseDown: PropTypes.func,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /** @ignore */
    onMouseUp: PropTypes.func,
    /**
     * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
     * @param {object} event `touchTap` event targeting the element.
     */
    onRequestDelete: PropTypes.func,
    /** @ignore */
    onTouchEnd: PropTypes.func,
    /** @ignore */
    onTouchStart: PropTypes.func,
    /**
     * Callback function fired when the `ContactChip` element is touch-tapped.
     *
     * @param {object} event TouchTap event targeting the element.
     */
    onTouchTap: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyboardFocus: () => {},
    onMouseDown: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onMouseUp: () => {},
    onTouchEnd: () => {},
    onTouchStart: () => {},
  };

  static contextTypes = {muiTheme: PropTypes.object.isRequired};

  state = {
    clicked: false,
    deleteHovered: false,
    focused: false,
    hovered: false,
    open: false,
  };

  handleBlur = (event) => {
    this.setState({clicked: false, focused: false, open: false,});
    this.props.onBlur(event);
  };

  handleFocus = (event) => {
    if (this.props.onTouchTap || this.props.onRequestDelete) {
      this.setState({focused: true,});
    }
    this.props.onFocus(event);
  };

  handleKeyboardFocus = (event, keyboardFocused) => {
    if (keyboardFocused) {
      this.handleFocus();
      this.props.onFocus(event);
    } else {
      this.handleBlur();
    }

    this.props.onKeyboardFocus(event, keyboardFocused);
  };

  handleKeyDown = (event) => {
    if (keycode(event) === 'backspace') {
      event.preventDefault();
      if (this.props.onRequestDelete) {
        this.props.onRequestDelete(event);
      }
    }
    this.props.onKeyDown(event);
  };

  handleMouseDown = (event) => { /*Recent Addition*/
    // Only listen to left clicks
    if (event.button === 0) {
      event.stopPropagation();
      if (this.props.onTouchTap) {
        this.setState({clicked: true,
                       open: true,
                       anchorEl: event.currentTarget,});
      }
    this.props.onMouseDown(event);
  };

  handleMouseEnter = (event) => {
    if (this.props.onTouchTap) {
      this.setState({hovered: true,});
    }
    this.props.onMouseEnter(event);
  };

  handleMouseEnterDeleteIcon = () => {
    this.setState({deleteHovered: true,});
  };

  handleMouseLeave = (event) => {
    this.setState({
      clicked: false,
      hovered: false,
      open: false,
    });
    this.props.onMouseLeave(event);
  };

  handleRequestClose = () => { /*Recent addition*/
    this.setState({
      open: false,
    });
  };

  handleMouseLeaveDeleteIcon = () => {
    this.setState({deleteHovered: false,});
  };

  handleMouseUp = (event) => {
    this.setState({clicked: false,});
    this.props.onMouseUp(event);
  };

  handleTouchTapDeleteIcon = (event) => {
    // Stop the event from bubbling up to the `ContactChip`
    event.stopPropagation();
    this.props.onRequestDelete(event);
  };

  handleTouchEnd = (event) => {
    this.setState({clicked: false,});
    this.props.onTouchEnd(event);
  };

  handleTouchStart = (event) => {
    event.stopPropagation();
    if (this.props.onTouchTap) {
      this.setState({clicked: true, 
                     open: true,
                     anchorEl: event.currentTarget,});
    }
    this.props.onTouchStart(event);
  };

  render() {
    const buttonEventHandlers = {
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseUp: this.handleMouseUp,
      onTouchEnd: this.handleTouchEnd,
      onTouchStart: this.handleTouchStart,
      onKeyboardFocus: this.handleKeyboardFocus,
    };

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    let {children, style, className, labelStyle, ...other} = this.props;
    const deletable = this.props.onRequestDelete;
    let avatar = null;

    style = Object.assign(styles.root, style);
    labelStyle = prepareStyles(Object.assign(styles.label, labelStyle));

    const deleteIcon = deletable ?
      <DeleteIcon
        color={styles.deleteIcon.color}
        style={styles.deleteIcon}
        onTouchTap={this.handleTouchTapDeleteIcon}
        onMouseEnter={this.handleMouseEnterDeleteIcon}
        onMouseLeave={this.handleMouseLeaveDeleteIcon}
      /> :
      null;

    const childCount = React.Children.count(children);

    // If the first child is an avatar, extract it and style it
    var child = null;
    if (childCount > 1) {
      children = React.Children.toArray(children);
      for (child in children) {
        if (React.isValidElement(child)){
          console.log(child.type.muiName);
        }
      }
      if (React.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
        avatar = children.shift();

        avatar = React.cloneElement(avatar, {
          style: Object.assign(styles.avatar, avatar.props.style),
          size: 32,
        });
      }
    }

    return (
      <EnhancedButton
        {...other}
        {...buttonEventHandlers}
        className={className}
        containerElement="div" // Firefox doesn't support nested buttons
        disableTouchRipple={true}
        disableFocusRipple={true}
        style={style}
      >
        {avatar}
        <span style={labelStyle}>{children}</span>
        {deleteIcon}
      </EnhancedButton>

      /*Recent addition*/
      const details = <Popover>
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{"horizontal":"left","vertical":"top"}}
          targetOrigin={{"horizontal":"left","vertical":"top"}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText={props.emailprim} />
            <MenuItem primaryText={props.emailsec} />
            <MenuItem primaryText={props.emailter} />
          </Menu>
      </Popover>;
    }
    );
  }
}

export default ContactChip;
