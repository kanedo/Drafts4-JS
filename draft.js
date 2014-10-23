_draft = function(){};

var _clipboard = '';

_draft.prototype.content = "Lorem Ipsum Dolor";
_draft.prototype.createdDate = '';
_draft.prototype.createdLatitude = '';
_draft.prototype.createdLongitude = '';
_draft.prototype.modifiedDate = '';
_draft.prototype.modifiedLatitude = '';
_draft.prototype.modifiedLongitude = '';
_draft.prototype.accessedDate = '';
_draft.prototype.flagged = false;
_draft.prototype.defineTag = function( tagName, tagString ){}

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

var draft = new _draft();
