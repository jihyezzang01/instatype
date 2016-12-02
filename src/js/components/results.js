import React from 'react';
import Result from './result.js';

class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){

    // Always update if we don't have the required props to compare
    if (!this.props || !this.props.resultsId || !nextProps || !nextProps.resultsId){
      return true;
    }

    // Only update if resultsId prop has changed
    return (this.props.resultsId !== nextProps.resultsId);
  }

  render(){

    const { data, handleSelect, thumbStyle } = this.props;

    const resultsClass = 'results thumb-' + thumbStyle;

    return (
      <div className="resultsContainer">

        { data && data.length > 0 &&
          <ul className={resultsClass}>
            
            {data.map((result) => (
              <Result image={result.image} handleSelect={handleSelect} data={result} key={result.id || undefined}>
                {result.name}
              </Result>
            ))}

          </ul>
        }

      </div>
    );
  }
};

export default Results;