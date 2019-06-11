import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from '../../../src/data/exampleVideoData.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(function (value, index) {
      // return <div><h5><em><VideoListEntry video={value} key={index} /></em> view goes here</h5></div>;
      return <VideoListEntry video={value} key={index} />;
    })};
  </div>
);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
