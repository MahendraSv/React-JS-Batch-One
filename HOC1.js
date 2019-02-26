import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    method(){
      //axios
    }
    render() {
      return <WrappedComponent data="axios data" />;
    }
  }
    
  return HOC;
  // return <WrappedComponent data="hello" />;
};

export default higherOrderComponent;

<Button />

higherOrderComponent(<Button />);