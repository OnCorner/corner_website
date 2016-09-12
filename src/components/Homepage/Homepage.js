import s from 'Homepage/Homepage.scss'

// function resizeIframe(obj) {
//     obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
//   }

export default class Homepage extends React.Component {
  static propTypes = {
    subscribeSuccess: React.PropTypes.bool,
  }

  render() {
    var st = this.state;
    var pr = this.props;

    // console.log("This is subscribeSuccess ", pr.subscribeSuccess);

    return (
      <div className="homepageContainer">
        { pr.subscribeSuccess ?
          <video id="fullscreen-video" autoPlay loop>
            <source src="/assets/media/soho-vid.mp4" type="video/mp4"/>
            <source src="/assets/media/soho-vid.ogv" type="video/ogg"/>
            <source src="/assets/media/soho-vid.webm" type="video/webm"/> Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
          </video>
          :
          <img
            src="/assets/media/test-screen6.gif"
            style={{
              minHeight: '100%',
              minWidth: '100%',
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
            }}
          />
        }
      </div>
    )
  }
}
