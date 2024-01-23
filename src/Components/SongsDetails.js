import React from 'react'

function SongsDetails({ track }) {
  return (
    <div>
      <div className="list">
        <div className="header-row">
          <div className="col">
            <span>#</span>
          </div>
          <div className="col">
            <span>TITLE</span>
          </div>
          <div className="col">
            <span>ALBUM</span>
          </div>
          <div className="col">
            <span>
              <AiFillClockCircle />
            </span>
          </div>
        </div>
        <div className="tracks">
          {track.map((
            {
              id,
              name,
              artists,
              image,
              duration,
              album,
              context_uri,
              track_number,
            },
            index
          ) => {
            return (
              <div
                className="row"
                key={id}
                onClick={() =>
                  playTrack(
                    id,
                    name,
                    artists,
                    image,
                    context_uri,
                    track_number
                  )
                }
              >
                <div className="col">
                  <span>{index + 1}</span>
                </div>
                <div className="col detail">
                  <div className="image">
                    <img src={image} alt="track" />
                  </div>
                  <div className="info">
                    <span className="name">{name}</span>
                    <span>{artists}</span>
                  </div>
                </div>
                <div className="col">
                  <span>{album}</span>
                </div>
                <div className="col">
                  <span>{msToMinutesAndSeconds(duration)}</span>
                </div>
              </div>
            );
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default SongsDetails
