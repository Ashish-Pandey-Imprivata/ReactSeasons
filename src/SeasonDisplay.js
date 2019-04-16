import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Brr, it is chilly!!',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  console.log('lat in get season function: ' + lat);
  console.log(month);
  if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
  else return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  console.log(props.lat);
  console.log(season);

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <div className={`largeFont`}>{text}</div>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
