import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: { text: "It' Wildwood time", iconName: 'sun' },
  winter: { text: 'Breath MotherF*er!', iconName: 'snowflake' }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`item-left massive ${iconName} icon`} />
      <h1>Season Display for Latitude of is {text}</h1>
      <i className={`item-right massive ${iconName} icon`} />
    </div>
  );
};
export default SeasonDisplay;
