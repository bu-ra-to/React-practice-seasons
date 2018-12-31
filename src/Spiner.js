import React from 'react';

const Spiner = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};
Spiner.defaultProps = {
  message: 'Default message'
};
export default Spiner;
