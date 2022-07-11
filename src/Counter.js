import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import CardActions from "@mui/material/CardActions";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      <CardActions>
        <IconButton
          color="primary"
          aria-label="like"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>

        <IconButton
          color="primary"
          aria-label="like"
          onClick={() => {
            setDisLike(disLike + 1);
          }}
        >
          <Badge badgeContent={disLike} color="error">
            👎
          </Badge>
        </IconButton>
      </CardActions>
    </div>
  );
}
