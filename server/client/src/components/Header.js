import React, { Component } from 'react';
import { connect } from 'react-redux';
import authReducer from '../reducers/authReducer';
class Header extends Component {
  renderContent = () => {
    if (this.props.auth === false) {
      return <li><a href="/auth/google">Logga in</a></li>
    } else if (this.props.auth === null) {
      return <li>Laddar</li>
    } else {
      return (
      <div>
        <li>Du är inloggad!</li>
        <li><a href="/auth/logout">Logga ut</a></li>
      </div>);
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="left brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }

}
export default connect(mapStateToProps)(Header);
