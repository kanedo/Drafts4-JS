var draft = new Object();

var _clipboard = '';

draft.prototype.content = "Lorem Ipsum Dolor";
draft.prototype.createdDate = '';
draft.prototype.createdLatitude = '';
draft.prototype.createdLongitude = '';
draft.prototype.modifiedDate = '';
draft.prototype.modifiedLatitude = '';
draft.prototype.modifiedLongitude = '';
draft.prototype.accessedDate = '';
draft.prototype.flagged = false;
draft.prototype.defineTag = function( tagName, tagString ){}

/**
 * usually persists the changes to the drafts object
 * the mock function only logs the given object
 **/
function commit( draft ){
  console.log( draft );
}

/**
 * returns an arbitrary string functioning as clipboard
 * @return string
 **/
function getClipboard(){
  return _clipboard;
}
/**
 * set the mock clipboard content
 * note: it's not the real clipboard
 * @param string message
 **/
function setClipboard( message ){
  _clipboard = message;
}

/**
 * just a mock function so no error will occur
 **/
function stopAction(){
  return 0;
}

/**
 * should convert the string to markdown
 * @todo find a lib to convert it to markdown
 * @param string message
 * @param bool useXHTML
 * @return string
 **/
function markdown(message, useXHTML){
  return message;
}
