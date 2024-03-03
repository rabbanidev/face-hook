/* eslint-disable react/prop-types */

import { useState } from "react";
import { AuthContext } from "../contexts";
import PropTypes from "prop-types";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    authToken: "",
    refreshToken: "",
  });

  const onAuth = (updatedAuth) => {
    setAuth({ ...auth, ...updatedAuth });
  };

  return (
    <AuthContext.Provider value={{ auth, onAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.prototype = {
  children: PropTypes.node.isRequired,
};
