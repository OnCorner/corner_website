import s from 'App/App.scss'
import Navbar from 'Navbar/Navbar.js'
import Footer from 'Footer/Footer.js'
import Api from 'modules/Api.js'

export default class App extends React.Component {
  static propTypes = {
    // dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      subscribeSuccess: false
    }
  }

  saveUserEmail(email) {
    return Api.db.create('splashinfo', {email: email})
    .then((newUser) => {
      this.setState({subscribeSuccess: true});
      return newUser;
    });
  }

  render() {
    var st = this.state;
    var pr = this.props;

    var props = {};
    props.subscribeSuccess = st.subscribeSuccess;

    return (
      <div className="appContainer">
        <Navbar
          saveUserEmail={this.saveUserEmail.bind(this)}
          subscribeSuccess={st.subscribeSuccess}
        />

        {React.Children.map(pr.children, function(child) {
          return React.cloneElement(child, props);
        })}

        {st.subscribeSuccess ?
          null : <Footer/>
        }
      </div>
    )
  }
}
