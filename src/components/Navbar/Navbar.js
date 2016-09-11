import s from 'Navbar/Navbar.scss'
import Api from 'modules/Api.js'

export default class Navbar extends React.Component {
  static propTypes = {
    // dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      buttonAppear: false,
      email: ''
    }
  }

  componentDidMount() {
  }

  showButton(event) {
    this.setState({
      email: event.target.value,
      buttonAppear: true
    })
  }

  pigeonClick() {
    Api.db.create('splashinfo', {email: this.state.email})
    .then((user) => {
      console.log("new user", user);
    });
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
          onChange={this.showButton.bind(this)}
          value={st.email}
        />
        {st.buttonAppear && st.email != '' ?
          <button
            className="pigeonEmoji"
            onClick={this.pigeonClick.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}
