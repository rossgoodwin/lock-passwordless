import React from 'react';
import { hideLock } from '../lock/action_creators';

export default class CloseButton extends React.Component {
  render() {
    const svgTag = '<svg enable-background="new 0 0 128 128" height="128px" class="auth0-lock-close" id="Слой_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#373737" points="123.5429688,11.59375 116.4765625,4.5185547 64.0019531,56.9306641 11.5595703,4.4882813     4.4882813,11.5595703 56.9272461,63.9970703 4.4570313,116.4052734 11.5244141,123.4814453 63.9985352,71.0683594     116.4423828,123.5117188 123.5126953,116.4414063 71.0732422,64.0019531   "/></g></svg>';
    return <span dangerouslySetInnerHTML={{__html: svgTag}} onClick={this.handleClick.bind(this)}/>;
  }

  handleClick(e) {
    event.preventDefault();
    hideLock(this.props.lockID);
  }
}

CloseButton.propTypes = {
  lockID: React.PropTypes.string
};