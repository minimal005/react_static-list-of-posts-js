import { PostInfo } from '../PostInfo';
// users
export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(oneUser => post.userId === oneUser.id);
      const commentsUser = comments.filter(
        oneComment => post.id === oneComment.postId,
      );

      return (
        <PostInfo
          key={post.id}
          user={user}
          post={post}
          comments={commentsUser.length > 0 ? commentsUser : null}
        />
      );
    })}
  </div>
);
