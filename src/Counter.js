import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="counterContainer">
      <div className="likesDiv">
      <ThumbUpIcon className="likeButton" onClick={() => setLike(like + 1)} />
        <span> {like}</span>
      </div>
      
      {/* <button
        className="likeButton"
        onClick={() => setLike(like + 1)}
      >
        👍 {like}
      </button> */}
      <div className="disLikesDiv">
        <ThumbDownAltIcon className="dislikeButton" onClick={() => setDisLike(disLike + 1)}/>
        <span>{disLike}</span>
      </div>
      {/* <button
        className="dislikeButton"
        onClick={() => setDisLike(disLike + 1)}
      >
        👎 {disLike}
      </button> */}
    </div>
  );
}
