import React, { useState } from "react";
import "./HomePage.css";
import Chat from "./Chat";
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function HomePage(props) {
    const [chats, setChats] = useState([
        {
            from: "vikas3517@gmail.com",
            name: "Vikas Kumar",
            msg: "Hi, How are you?",
        },
        {
            from: "shubham@gmail.com",
            name: "Shubham Sourav",
            msg: "Hi Everyon, I am fine",
        },
    ]);

    return (
        <div>
            <div className="home_page">
                <AppBar position="fixed" sx={{ zIndex: 10 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Chat App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className="chat_drawer"
                    variant="permanent"
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 240,
                            boxSizing: "border-box",
                        },
                        zIndex: 1,
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "auto" }}>
                        <List>
                            {["Group Chat"].map((text, index) => (
                                <div key={index}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar
                                                    sx={{
                                                        width: "28px",
                                                        height: "28px",
                                                        fontSize: "12px",
                                                        bgcolor:
                                                            deepOrange[500],
                                                    }}
                                                >
                                                    GC
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </div>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box
                    className="chat_div"
                    component="main"
                    sx={{ flexGrow: 1, p: 3 }}
                >
                    <Toolbar />
                    <Chat chats={chats} />
                </Box>
            </div>
        </div>
    );
}

export default HomePage;
