"use client";
import React, { useState } from "react";
// import {
//   CognitoUserPool,
//   CognitoUserAttribute
// } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "YOUR_USER_POOL_ID", // あなたのCognitoユーザープールID
  ClientId: "YOUR_CLIENT_ID", // あなたのクライアントID
};

// const userPool = new CognitoUserPool(poolData);

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // const attributeList = [
    //   new CognitoUserAttribute({
    //     Name: 'email',
    //     Value: email
    //   })
    // ];

    // userPool.signUp(email, password, attributeList, null, (err, result) => {
    //   if (err) {
    //     alert(err.message || JSON.stringify(err));
    //     return;
    //   }
    //   const cognitoUser = result.user;
    //   console.log("user name is " + cognitoUser.getUsername());
    // });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Signup</button>
    </form>
  );
}

export default SignupForm;
