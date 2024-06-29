import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 2000;
    this.deleteDelay = 5;
    this.isDeleting = false;
    this.deleteCounter = 0
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = "";
    if (this.isDeleting) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && newText === fullTxt) {
      delta = this.period;
      if (this.deleteCounter > this.deleteDelay) {
        this.isDeleting = true;
        this.deleteCounter = 0
      }
      this.deleteCounter += 1
    } else if (this.isDeleting && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return <span className="typewriter"><h1>- {this.state.text}</h1></span>;
  }
}

export default TypeWriter;
