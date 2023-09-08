import React from "react";
import { DeleteIcon, PlayIcon } from "../../shared/Icons";
import { Link } from "react-router-dom";

const TrackByPlaylistDetail = ({
    track,
    handleDelete,
    showDeletebtn,
    showPlayBtn,
    setCurrentTrack,
}) => {
    const handlePlaySong = () => {
        setCurrentTrack(track.spotifyId);
    };
    return (
        <article
            className="flex items-center gap-2 
        hover:bg-white/30 p-1 rounded-md pr-2 transition-colors"
        >
            <header className="rounded-md overflow-hidden w-[45px] ">
                <img src={track.album.images[2].url} alt="Album" />
            </header>

            <section className="flex-1 text-sm sm:text-base">
                <Link
                    to={`/tracks/${track.id}`}
                    className="font-semibold line-clamp-1"
                >
                    {track.name}
                </Link>
                <Link
                    to={`/artists/${track.artists[0].id}`}
                    className="text-slate-300 text-xs font-light line-clamp-1"
                >
                    {track.artists[0].name}
                </Link>
            </section>
            <section className="flex items-center gap-2">
                {showDeletebtn && (
                    <button onClick={() => handleDelete(track.id)} className="group">
                        <DeleteIcon />
                    </button>
                )}
                {showPlayBtn && (
                    <button onClick={handlePlaySong} className="group">
                        <PlayIcon />
                    </button>
                )}
            </section>
        </article>
    );
};

export default TrackByPlaylistDetail;
