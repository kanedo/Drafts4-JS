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

function commit( draft ){
  console.log( draft );
}

function getClipboard(){
  return _clipboard;
}

function setClipboard( message ){
  _clipboard = message;
}

function stopAction(){
  return 0;
}

function markdown(string, useXHTML){
  return string;
}
