import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'

function handleTouchTap(){
  console.log("here")
  alert('onTouchTap triggered on the title Component')
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBarExpaleIconButton = () =>{
  return (
  <AppBar
    title={<span style={styles.title}> Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save"/>}
  />
  )
}

export default AppBarExpaleIconButton
