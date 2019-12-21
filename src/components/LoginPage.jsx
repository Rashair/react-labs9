import React from "react";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="container h-100 text-center">
        <h2>Login</h2>
        <div className="row justify-content-center align-content-center mt-5">
          <form className="w-25">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
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
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
