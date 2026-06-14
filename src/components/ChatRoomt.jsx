import { useEffect } from "react";
import { createConnection } from "../utils/chat";

const ChatRoomt = () => {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        return () => connection.disConnect();

    }, []);
    
    return (
       
    <div>
          <h1>Welcome to the chatroom!!</h1>
    </div>
  );
};

export default ChatRoomt;