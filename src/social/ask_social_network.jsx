import React from 'react';
import MainScreen from '../lock/main_screen';
import SignedInConfirmation from '../lock/signed_in_confirmation';
import SocialButton from './social_button';
import { close } from './actions';
import * as l from '../lock/index';

export default class AskSocialNetwork extends React.Component {

  componentWillSlideIn(...args) {
    return this.refs.cred.componentWillSlideIn(...args);
  }

  componentDidSlideIn(...args) {
    return this.refs.cred.componentDidSlideIn(...args);
  }

  componentWillSlideOut(...args) {
    return this.refs.cred.componentWillSlideOut(...args);
  }

  t(keyPath, params) {
    return l.ui.t(this.props.lock, ["network"].concat(keyPath), params);
  }

  handleClose() {
    close(l.id(this.props.lock));
  }

  render() {
    const { lock } = this.props;
    const buttons = l.ui.connections(lock).map(x => {
      return <SocialButton key={x} name={x} lockID={l.id(lock)} />;
    });

    const auxiliaryPane = l.signedIn(lock) ?
      <SignedInConfirmation closeHandler={::this.handleClose} key="auxiliarypane" lock={lock} /> :
      null;

    const terms = this.t(["footerText"]);

    return (
      <MainScreen lock={lock} showSubmitButton={false} ref="cred" terms={terms} auxiliaryPane={auxiliaryPane}>
        {buttons}
      </MainScreen>
    );
  }

}
