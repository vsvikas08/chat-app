import { Avatar, Box, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}
function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
}
function Chat(props) {
    return (
        <div style={{ height: "calc(100vh - 160px)" }}>
            <div style={{ height: "calc(100% - 25px)", overflow: "auto" }}>
                {props.chats.map((chat, idx) => {
                    return (
                        <div key={`chat-${idx}`}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        chat.from ==
                                        localStorage.getItem("email")
                                            ? "end"
                                            : "",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        columnGap: "8px",
                                        alignItems: "center",
                                        marginBottom: "8px",
                                        padding: "12px",
                                        // border: "1px solid red",
                                        background:
                                            chat.from ==
                                            localStorage.getItem("email")
                                                ? "#1976d2"
                                                : "#f9f9f9",
                                        borderRadius: "12px",
                                        width: "70%",
                                    }}
                                    key={idx}
                                >
                                    <Avatar
                                        className="user_avatar"
                                        {...stringAvatar(chat.name ?? "")}
                                    />
                                    <p
                                        style={{
                                            color: `${
                                                chat.from ==
                                                localStorage.getItem("email")
                                                    ? "#fff"
                                                    : ""
                                            }`,
                                        }}
                                    >
                                        {chat.msg}
                                    </p>
                                </Box>
                            </Box>
                        </div>
                    );
                })}
            </div>

            <Box
                className="msg_input"
                sx={{
                    position: "absolute",
                    bottom: "24px",
                }}
            >
                <TextField fullWidth label="Write Message" />
                <SendIcon
                    color="primary"
                    sx={{
                        position: "absolute",
                        right: "12px",
                        top: "16px",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        console.log("Send msg");
                    }}
                />
            </Box>
        </div>
    );
}

export default Chat;
