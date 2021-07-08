import React from "react";
import YouTube from "react-youtube";

const Movie = () => {
  return (
    <div>
      <h4 className="movieDescription">
        Ryder and the pups are called to Adventure City to stop Mayor Humdinger
        from turning the bustling metropolis into a state of chaos.
      </h4>
      <YouTube
        className="d-flex justify-content-center"
        videoId={"LRMTr2VZcr8"} // defaults -> null
        style={{ display: "flex" }}
        // id={string} // defaults -> null
        // className={string} // defaults -> null
        // containerClassName={string} // defaults -> ''
        // opts={obj} // defaults -> {}
        // onReady={func} // defaults -> noop
        // onPlay={func} // defaults -> noop
        // onPause={func} // defaults -> noop
        // onEnd={func} // defaults -> noop
        // onError={func} // defaults -> noop
        // onStateChange={func} // defaults -> noop
        // onPlaybackRateChange={func} // defaults -> noop
        // onPlaybackQualityChange={func} // defaults -> noop
      />
    </div>
  );
};

export default Movie;
