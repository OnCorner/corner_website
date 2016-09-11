import s from 'App/App.scss'
import Navbar from 'Navbar/Navbar.js'
import Api from 'modules/Api.js'

export default class App extends React.Component {
  static propTypes = {
    // dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    var st = this.state;
    var pr = this.props;

    var props = {};

    return (
      <div className="appContainer">
        <Navbar />
        {React.Children.map(pr.children, function(child) {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}
