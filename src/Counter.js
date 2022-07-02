import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      <button
        className="button"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {" "}
        <span>👍 </span>Like {like}
      </button>
      <button
        className="button"
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        {" "}
        <span>👎 </span>Dislike {disLike}
      </button>
    </div>
  );
}
