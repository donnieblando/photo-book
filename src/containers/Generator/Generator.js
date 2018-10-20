import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class Generator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      isComponent: false
    }

    this.changeInputValue = this.changeInputValue.bind(this);
    this.generateImports = this.generateImports.bind(this);
    this.generateCore = this.generateCore.bind(this);
    this.toggleIsComponent = this.toggleIsComponent.bind(this);
  }

  changeInputValue(e) {
    console.log('changeInputValue', e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleIsComponent() {
    this.setState({
      isComponent: !this.state.isComponent
    });
  }


  generate() {

  }

  generateImports() {
    return `import React, { Component } from 'react';
import PropTypes from 'prop-types';
`;
  }

  generateCore() {
    let core = null;
    if (this.state.name) {
      core = this.state.isComponent ? 
        (
`class ${this.state.name} extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {

    return (

    );
  }

}

${this.state.name}.propTypes = {
};

export default ${this.state.name};`
        ) :
        (
`const ${this.state.name} = (props) => {

  return (

  );
  
}

${this.state.name}.propTypes = {

};

export default ${this.state.name};`          
        );
    }
    return core;
  }

  render() {

    console.log('state', this.state);

    return (
      <div className="p-1">
        <div>
          <input type="text" placeholder="name" name="name" onChange={this.changeInputValue} />
          <input type="checkbox" name="isComponent" onChange={this.toggleIsComponent} />
        </div>
        <div>
          <button title="generate" type="submit" onClick={this.generate}>
            GENERATE!
          </button>
        </div>
        <br />
        <br />
        {this.state.name && 
          <div>
            <span className="generator">
              {this.generateImports()}
              {this.generateCore()}
            </span>
          </div>
        }
      </div>
    )
  }
  
}

Generator.propTypes = {

}

export default Generator;