import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error. <Link to="/">Go back</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
