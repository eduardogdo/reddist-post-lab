import axio from "axios";
import { RedditResponse, Reddits } from "../models/RedditResponse";

export const getReddits = async (query?: string): Promise<Reddits[]> => {
  const response = await axio.get("https://www.reddit.com/r/aww/.json");

  const redditResponse = response.data as RedditResponse;
  let filtered = redditResponse.data.children.filter(
    (item: Reddits) => item.data.thumbnail && item.data.thumbnail != "self"
  );
  if (query) {
    filtered = redditResponse.data.children.filter(
      (item: Reddits) => item.data.title.indexOf(query) !== -1
    );
  }
  return filtered.slice(0, filtered.length > 10 ? 10 : filtered.length);
};
