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
  }

  componentDidMount() {
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
      buttonAppear: true,
      invalidEmail: false
    })
  }

  pigeonClick() {
    var email = this.state.email;
    if(!Utility.isEmail(email)) {
      console.log("invalid email");
      this.setState({invalidEmail: true});
      return;
    }

    this.props.saveUserEmail(email)
    .then((user) => {
      console.log("new user", user);
      this.setState({email: ''});
    });
  }

  renderEmailError() {
    return (
      null
    );
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    var st = this.state;
    var pr = this.props;

    return (
      <div className="navbarContainer">
        <h1 className="logo">Corner</h1>
        <input
          className="inputNormal"
          placeholder='Enter Email'
          onChange={this.emailChange.bind(this)}
          value={st.email}
        />
        {st.invalidEmail ? this.renderEmailError() : null}
        {st.buttonAppear && st.email != '' ?
          <img
            className="pigeonEmoji"
            src="/assets/img/pigeon.png"
            onClick={this.pigeonClick.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}
