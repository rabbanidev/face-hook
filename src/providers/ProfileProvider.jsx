/* eslint-disable react/prop-types */

import PropTypes from "prop-types";
import { ProfileContext } from "../contexts";
import { useState } from "react";

export default function ProfileProvider({ children }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const onUpdateUser = (payload) => {
    setUser({ ...user, ...payload });
  };

  const onUpdatePosts = (payload) => {
    setPosts([...posts, ...payload]);
  };

  return (
    <ProfileContext.Provider
      value={{ user, onUpdateUser, posts, onUpdatePosts }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

ProfileProvider.prototype = {
  children: PropTypes.node.isRequired,
};
