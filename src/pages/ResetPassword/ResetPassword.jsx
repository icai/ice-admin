import React, { Component } from 'react';
import ForgetPasswordForm from './components/ForgetPasswordForm';

export default class ResetPassword extends Component {
  static displayName = 'ResetPassword';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="reset-password-page">
        <ForgetPasswordForm />
      </div>
    );
  }
}
