import { useEffect, useState } from 'react';
import { fetchComments } from '../utils/fetchCommnets';

const Comments = ({ commentId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let ignore = false;

        const startFetching = async () => {
            const json = await fetchComments(commentId);
            console.log('ignore:', ignore);
            if (!ignore) {
                console.log(ignore);
                setComments(json);
            }
        };
        startFetching();

        //clean up
        return () => (ignore = true);
    }, [commentId]);

    return (
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
