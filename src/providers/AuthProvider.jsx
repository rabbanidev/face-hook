/* eslint-disable react/prop-types */

import { AuthContext } from "../contexts";
import PropTypes from "prop-types";

export default function AuthProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

AuthProvider.prototype = {
  children: PropTypes.node.isRequired,
};
