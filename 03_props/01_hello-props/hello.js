class Hello extends React.Component {
  render() {
    this.props.from = "Blue";
    return (
      <p>
        Hi {this.props.to} from {this.props.from}
      </p>
    );
  }
}
