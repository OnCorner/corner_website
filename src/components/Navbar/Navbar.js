import s from 'Navbar/Navbar.scss'
import Api from 'modules/Api.js'
import Utility from 'modules/Utility.js'

export default class Navbar extends React.Component {
  static propTypes = {
    // dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      buttonAppear: false,
      email: '',
      invalidEmail: false
    }

    this.emailChange = this.emailChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
      buttonAppear: true,
      invalidEmail: false
    })
  }

  enterSubmit(event) {
    var code = event.keyCode || event.which;
    if(code === 13 || event.target.id === "pigeon-button") {
      var email = this.state.email;
      if(!Utility.isEmail(email)) {
        this.setState({invalidEmail: true});
        return;
      }

      this.props.saveUserEmail(email)
      .then((user) => {
        this.setState({email: ''});
      });
    }
  }

  renderEmailError() {
    return (
      null
    );
  }

  // renderAlert() {
  //   if(this.props.errorMessage) {
  //     return (
  //       <div>
  //         <span><strong>Error!</strong> {this.props.errorMessage}</span>
  //       </div>
  //     );
  //   }
  // }

  render() {
    var st = this.state;
    var pr = this.props;

    return (
      <div
        className="navbarContainer"
        id={this.props.subscribeSuccess ? "success-navbar": "normal-navbar"}
      >
        <h1
          className="logo"
          id={this.props.subscribeSuccess ? "success-logo" : "normal-logo"
          }
        >
          Corner
        </h1>

        {this.props.subscribeSuccess ? null :
          <div>
            <input
              className="inputNormal"
              placeholder='Enter Email'
              onChange={this.emailChange}
              value={st.email}
              onKeyUp={this.enterSubmit}
            />
            {/*{st.invalidEmail ? this.renderEmailError() : null}*/}
            {st.buttonAppear && st.email != '' ?
              <img
                className="pigeonEmoji"
                src="/assets/img/pigeon.png"
                onClick={this.enterSubmit}
                id="pigeon-button"
              />
              : null
            }
          </div>
        }
      </div>
    )
  }
}
