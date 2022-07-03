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
import SignInBar from "./views/SignInBar";
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

  useEffect(() => {
    // To call identifySnippyly once Snippyly is loaded and user is available
    if (selectedUser && client) {
      identifySnippyly();
    }
  }, [selectedUser, client]);

  // To set user in Snippyly
  const identifySnippyly = async () => {
    console.log("attempting login");
    if (client) {
      client
        .identify(selectedUser)
        .then(() => {
          // User login successful
          console.log("Successful login");
        })
        .catch(() => {
          // User login failure
          console.log("Failed login");
        });
    }
  };

  const signIn = (user: any): void => {
    // Add custom logic here to login user
    // Once user is available call identifySnippyly
    localStorage.setItem("user", JSON.stringify(user));
    setSelectedUser(user);
    console.log("signed in as:");
    console.log(user);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <SnippylyContext.Provider value={{ client }}>
      <snippyly-cursor></snippyly-cursor>
      <snippyly-presence></snippyly-presence>
      <Box>
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              Website Builder
            </Typography>
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

            <Button variant="contained" color="success">
              Publish
            </Button>
          </Toolbar>
        </AppBar>
        <EditSideBar />
        <Box sx={{ flexGrow: 1, mr: "250px", ml: "175px", mt: -1}}>
          <PagePreview />
        </Box>
        <NavSideBar />
      </Box>
      <SignInBar />
    </SnippylyContext.Provider>
  );
}
