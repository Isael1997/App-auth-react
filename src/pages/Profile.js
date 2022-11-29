import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import JSONPretty from "react-json-pretty";

const Profile = () => {
    const { user } = useAuth0();
    console.log(user);

    return (
        <div>
            <h1>Profile</h1>
            <p>{JSON.stringify(user)}</p>

            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.nickname}</p>

            <JSONPretty data={user} />;
        </div>
    );
}

export default Profile;