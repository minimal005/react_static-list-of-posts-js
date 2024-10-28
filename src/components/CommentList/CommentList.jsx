import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => {
      // console.log(comment);

      return <CommentInfo key={comment.id} comment={comment} />;
    })}
  </div>
);
