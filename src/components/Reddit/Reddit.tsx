import { Reddits } from "../../models/RedditResponse";
import "./Reddit.css";

interface Props {
  reddit: Reddits;
}

const Reddit = (props: Props) => {
  return (
    <div className="Reddit">
      <img src={props.reddit.data.thumbnail} />
      <h4>{props.reddit.data.title}</h4>
    </div>
  );
};

export default Reddit;
