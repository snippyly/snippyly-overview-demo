import React, { useEffect, useState } from 'react';
import { useSnippylyClient } from '../context/SnippylyContext';

function SignInBar() {

    type User = {
        userId: string,
        name: string,
    }
    const john: User = {
        userId: '1',
        name: 'John Smith'
    }
    const maria: User = {
        userId: '2',
        name: 'Maria Doe'
    }
    const users: User[] = [john, maria]

    const [selectedUser, setSelectedUser] = useState<any>(null);


    const { client } = useSnippylyClient();

    useEffect(() => {
        // To call identifySnippyly once Snippyly is loaded and user is available
        if (selectedUser && client) {
            identifySnippyly();
        }
    }, [selectedUser, client])

    // To set user in Snippyly
    const identifySnippyly = async () => {
        console.log("attempting login")
        if (client) {
            client.identify(selectedUser).then(() => {
                // User login successful
                console.log("Successful login")
            }).catch(() => {
                // User login failure
                console.log("Failed login")
            });
        }
    }

    const signIn = (user: any): void => {
        // Add custom logic here to login user
        // Once user is available call identifySnippyly
        localStorage.setItem('user', JSON.stringify(user));
        setSelectedUser(user);
        console.log("signed in as:")
        console.log(user)
    }

    const signOut = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

   

    return <div className='signinBar'>
            

        </div>
    
}

export default SignInBar;