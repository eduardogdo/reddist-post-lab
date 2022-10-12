import { Reddits } from "../../models/RedditResponse";
import Reddit from "../Reddit/Reddit";
import "./RedditList.css";

interface Props {
  reddits: Reddits[];
  onSearch: (search: string) => void;
}

const RedditList = (props: Props) => {
  return (
    <div className="RedditList">
      {props.reddits && props.reddits.length > 0 ? (
        <div className="row">
          {props.reddits.map((item) => (
            <div className="col" key={item.data.name}>
              <Reddit reddit={item} key={item.data.name} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Not results found</p>
        </div>
      )}
    </div>
  );
};

export default RedditList;
