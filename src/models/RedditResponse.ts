export interface RedditResponse {
  data: RedditData;
  kind: string;
}

export interface RedditData {
  children: Reddits[];
}

export interface Reddits {
  data: RedditPost;
}

export interface RedditPost {
  title: string;
  thumbnail: string;
  name: string;
}
