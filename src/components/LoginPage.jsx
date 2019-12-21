import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../redux/thunk-functions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.user === null) {
      return;
    }

    this.props.history.push("/list");
  }

  usernameChange(e) {
    this.setState({ username: e.target.value });
  }

  loginHandler(e) {
    e.preventDefault();

    this.props.login(this.state.username);
  }

  render() {
    const { user } = this.props;

    if (user !== null) {
      return <h2>Hi {user.full_name}!</h2>;
    }

    return (
      <div className="container h-100 text-center">
        <h2>Login </h2>
        <div className="row justify-content-center align-content-center mt-5">
          <form className="w-25" onSubmit={e => this.loginHandler(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
                onChange={this.usernameChange}
              />
              <small id="usernameHelp" className="form-text text-muted">
                Enter username, or you shall not pass!
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state /* , ownProps */) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  login: name => dispatch(login(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
