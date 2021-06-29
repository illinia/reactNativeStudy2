import React, { createContext, useState } from "react";

const UserContext = createContext({
  user: { name: '' },
  dispatch: () => { },
});

const UserProvider = ({ children }) => {
  const [name, setName] = useState('Beomjun Kim');

  const value = { user: { name }, dispatch: setName };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumber = UserContext.Consumer;

export { UserProvider, UserConsumber };
export default UserContext;