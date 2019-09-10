import React from "react";
import { connect } from "react-redux";
import { login } from "./reducer";

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

const mapStateToProps = state => {
  return {
    isAuthorized: state.isAuthorized
  };
};

const Container = ({ isAuthorized, login }) => {
  return (
    <div>
      <h1>The user is authorized: {JSON.stringify(isAuthorized)}</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
