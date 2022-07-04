import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Button from "@mui/material/Button";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      <Button
        className="button"
        variant="contained"
        startIcon={<ThumbUpIcon />}
        size="small"
        sx={{ ml: 2, mr: 2 }}
        color="primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like {like}
      </Button>

      <Button
        className="button"
        variant="contained"
        startIcon={<ThumbDownIcon />}
        size="small"
        sx={{ ml: 2, mr: 2 }}
        color="secondary"
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        Dislike {disLike}
      </Button>
    </div>
  );
}
