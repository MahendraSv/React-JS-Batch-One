import React from 'react';

class Sample extends React.Component {
  render() {
    let x = [
      <p>Sample Element 1</p>, <p>Sample Element 2</p>, <p>Sample Element 3</p>
    ];
    return (
      <>
        {
          x.map(y => y)
        }
      </>
    );
  }
}

export default Sample;