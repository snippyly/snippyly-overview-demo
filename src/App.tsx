import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import PagePreview from "./views/PagePreview";
import EditSideBar from "./views/EditSideBar";
import NavSideBar from "./views/NavSideBar";
import "./App.css";
import loadSnippyly from "./loadSnippyly";
import { SnippylyContext } from "./context/SnippylyContext";
import { Snippyly as SnippylyClient } from "@snippyly/types";

declare var Snippyly: any;

export default function App() {
  const [client, setClient] = useState<SnippylyClient>(null as any);

  useEffect(() => {
    // Note: We will define init in the next section of the documentation.
    loadSnippyly(init);
  }, []);

  const init = async () => {
    const c = await Snippyly.init("9MpMA2sf8N0imiqsqPCk");

    setClient(c);

    const commentElement = c.getCommentElement();
    console.log(commentElement)
    commentElement.enableTextCommentButton(true);
  };


  type User = {
    userId: string;
    name: string;
  };
  const john: User = {
    userId: "1",
    name: "John Smith",
  };
  const maria: User = {
    userId: "2",
    name: "Maria Doe",
  };
  const users: User[] = [john, maria];

  const [selectedUser, setSelectedUser] = useState<any>(null);

  const signIn = (user: any): void => {
    setSelectedUser(user);
  };

  const signOut = () => {
    setSelectedUser(null)
  };

  // To set user in Snippyly
  const identifySnippyly = async () => {
    if (client) {
          client.identify(selectedUser)
    }
  };

  useEffect(() => {
    // To call identifySnippyly once Snippyly is loaded and user is available
    if (selectedUser && client) {
      identifySnippyly();
    }
  }, [selectedUser, client]);


  return (
    <SnippylyContext.Provider value={{ client }}>
      <snippyly-cursor></snippyly-cursor>
      <snippyly-comments></snippyly-comments>
      <Box>
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              Website Builder
            </Typography>
            <snippyly-comment-tool></snippyly-comment-tool>
            <div>
              {selectedUser ? (
                <div>
                  <span className = "navLbl">Hi, {selectedUser.name}</span>
                  <Button variant = "outlined" color = "inherit" sx = {{mr: '20px'}} onClick={() => signOut()}>Sign Out</Button>
                </div>
              ) : (
                <div>
                   <span className = "navLbl">Sign In with:</span>
                  {users.map((user) => {
                    return (
                      <Button
                        key={user.userId}
                        className="custom-btn"
                        variant = "outlined"
                        color = "inherit"
                        onClick={() => signIn(user)}
                        sx = {{mr: "20px"}}
                      >
                        {user.name}
                      </Button>
                    );
                  })}
                </div>
              )}
              

            </div>
            
            <Button variant="contained" color="success" sx = {{mr: 5, ml: 5}}>
              Publish
            </Button>
            <snippyly-presence></snippyly-presence>
          </Toolbar>
        </AppBar>
        <EditSideBar />
        <Box sx={{ flexGrow: 1, mr: "250px", ml: "175px", mt: -1}}>
          <PagePreview />
        </Box>
        <NavSideBar />
      </Box>
    </SnippylyContext.Provider>
  );
}