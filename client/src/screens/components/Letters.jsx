import { ChatState } from "../../context/ChatProvider.jsx";
import CreateIcon from "@mui/icons-material/Create";
import { isAuth } from "../../helpers/auth.js";

const Letters = () => {
  const {
    setSelectedMessage,
    setComponent,
    message_id,
    setMessage_id,
    messages,
  } = ChatState();

  const renderLetter = (msg_id) => {
    setMessage_id(msg_id);
    setSelectedMessage(message_id);
    setComponent("Letter");
  };

  return (
    <>
      {messages.length !== 0 ? (
        <div className="letters">
          {messages.map((msg) => (
            <>
              {msg.sender._id === isAuth()._id ? (
                <div
                  onClick={() => renderLetter(msg._id)}
                  key={msg._id}
                  className={"letter accentBorder"}>
                  <div className="letter-content">
                    <p>{msg.content}</p>
                  </div>
                  <div className="user-name ">
                    <h2>{msg.sender.username}</h2>
                  </div>
                </div>
              ) : null}
              {msg.sender._id !== isAuth()._id ? (
                <div
                  onClick={() => renderLetter(msg._id)}
                  key={msg._id}
                  className={"letter defaultBorder"}>
                  <div className="letter-content">
                    <p>{msg.content}</p>
                  </div>
                  <div className="user-name">
                    <h2>{msg.sender.username}</h2>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        </div>
      ) : (
        <div className={"defaultView letters"}>
          <h1 className="default-view-text" style={{ textAlign: "center" }}>
            No Letters Available, <br /> Click on the
            <CreateIcon
              fontSize="small"
              sx={{
                color: "#eeeeeeab",
                fontSize: "18px",
                margin: "0 5px",
              }}
            />
            to Send Letters.
          </h1>
        </div>
      )}
    </>
  );
};

export default Letters;
