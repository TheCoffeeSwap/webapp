import React from 'react';
import GetStarted from './GetStarted'
import Shipping from './Shipping'
import Payment from './Payment'

class Signup extends React.Component {
    constructor() {
        super();
        this.fieldValues = {};
        this.maxFieldsCount = 12;

        this.state = {step: 1, count: 0};

        this.saveValues = (fields) => {
          this.fieldValues = Object.assign({}, this.fieldValues, fields);
          this.setState({count : Object.keys(this.fieldValues).length});
          return this.fieldValues;
        };

        this.nextStep = () => {
          if (this.state.count==3 | this.state.count==12)
          {
            this.setState({
              step : this.state.step + 1
            });
          }
          else {
            return -1;
          }
          window.scroll(0,0);
        };

        this.previousStep = () => {
          this.setState({
            step : this.state.step - 1
          })
          window.scroll(0,0);
        };
    }

    render() {
        switch (this.state.step) {
            case 1:
                return <GetStarted fieldValues={this.fieldValues} 
                                    nextStep={this.nextStep}
                                    saveValues={this.saveValues}
                                    currentFieldCount={this.state.count}
                                    maxFieldsCount={this.maxFieldsCount} />
            case 2:
                return <Shipping fieldValues={this.fieldValues} 
                                 nextStep={this.nextStep}
                                 previousStep={this.previousStep}
                                 saveValues={this.saveValues}
                                 currentFieldCount={this.state.count}
                                 maxFieldsCount={this.maxFieldsCount} />
            case 3:
                return <Payment fieldValues={this.fieldValues}                                  
                                 previousStep={this.previousStep}
                                 saveValues={this.saveValues} />
        }
    }

}

// Signup.propTypes = {
//  headerMessage: React.propTypes.string
// };

// Signup.defaultProps = {
//  headerMessage: 'Hello'
// };

export default Signup;