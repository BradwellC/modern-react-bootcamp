class Hello extends React.Component {
  render() {
    // this.props.from = "Blue"; Would not work
    return (
      <p>
        Hi {this.props.to} from {this.props.from}
      </p>
    );
  }
}
