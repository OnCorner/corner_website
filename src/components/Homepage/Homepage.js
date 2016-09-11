import s from 'Homepage/Homepage.scss'

export default class Homepage extends React.Component {
  static propTypes = {
    subscribeSuccess: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
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

    // console.log("This is subscribeSuccess ", pr.subscribeSuccess);

    console.log("pr.subscribeSuccess", pr.subscribeSuccess)

    return (
      <div className="homepageContainer">
      {/*{ pr.subscribeSuccess ?
          <video id="cmn-video-demo4__video" autoPlay loop>
            <source src="/assets/media/soho-vid.mp4" type="video/mp4"/>
            <source src="/assets/media/soho-vid.ogv" type="video/ogg"/>
            <source src="/assets/media/soho-vid.webm" type="video/webm"/> Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
          </video>
          :
          <video id="cmn-video-demo4__video" autoPlay muted loop>
            <source src="/assets/media/tv-test.mp4" type="video/mp4"/>
            <source src="/assets/media/tv-test.ogv" type="video/ogg"/>
            <source src="/assets/media/tv-test.webm" type="video/webm"/> Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
          </video>
        }*/}
        {
          pr.subscribeSuccess ?
          <div>Show video 2! pr.subscribeSuccess: {pr.subscribeSuccess.toString()}</div>
          :
          <div>Show video 1! pr.subscribeSuccess: {pr.subscribeSuccess.toString()}</div>
        }
        <video id="cmn-video-demo4__video" autoPlay muted loop>
          <source src="/assets/media/soho-vid.mp4" type="video/mp4"/>
          <source src="/assets/media/soho-vid.ogv" type="video/ogg"/>
          <source src="/assets/media/soho-vid.webm" type="video/webm"/> Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
        </video>
      </div>
    )
  }
}
