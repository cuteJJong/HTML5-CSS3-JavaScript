import React from 'react';
import PropTypes from 'pop-types';

function myComponent(props) {
  const {
    StringValue,
    booleanValue,
    numberValue,
    arrayValue,
    nodeValue,
    functionValue,
    objectValue
  } = props;
  return (
    <div>
      <li>String Value : {StringValue}</li>
      <li>Number Value : {numberValue}</li>
      <li>Boolean Value : {String(booleanValue)}</li>
      <li>Array Value : {arrayValue}</li>
      <li>Node Value : {nodeValue}</li>
      <li>Function Value : {functionValue}</li>
      <li>Object Value : {JSON.stringify(objectValue)}</li>
    </div>
  );
}

//다양한 타입 사용해보기
myComponent.PropTypes = {
  StringValue : PropTypes.String,
  numberValue: PropTypes.number,
  booleanValue : PropTypes.bool,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  functionValue: PropTypes.func,
  objectValue: PropTypes.object
}
export default myComponent;