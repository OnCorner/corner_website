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
      <div id="homepageContainer">
        { pr.subscribeSuccess ?
          <video id="fullscreen-video" autoPlay loop>
            <source src="/assets/media/soho-vid.mp4" type="video/mp4"/>
            <source src="/assets/media/soho-vid.ogv" type="video/ogg"/>
            <source src="/assets/media/soho-vid.webm" type="video/webm"/> Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
          </video>
          :
          <img
            className="test-screen-gif"
            src="/assets/media/test-screen6.gif"
          />
        }
        {/*<video id="cmn-video-demo4__video" autoPlay muted loop>
          <source src="/assets/media/tv-test.mp4" type="video/mp4"/>
          <source src="/assets/media/tv-test.ogv" type="video/ogg"/>
          <source src="/assets/media/tv-test.webm" type="video/webm"/> Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to download the video.
        </video>*/}
      </div>
    )
  }
}
