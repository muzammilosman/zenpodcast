import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  console.log(process.env.NEXT_PUBLIC_AUTH0_DOMAIN);

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;
