import React, { useEffect, useState } from "react";
import { useUserauth } from "../context/Userauthcontext";

const useLoggedinuser = () => {
  const { user } = useUserauth();
  const email = user?.email;
  const [loggedinuser, setloggedinuser] = useState({});

  useEffect(() => {
    fetch(`https://twitter-clone-6mhu.onrender.com/loggedinuser?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setloggedinuser(data);
      });
  }, [loggedinuser]);
  return [loggedinuser, setloggedinuser];
};

export default useLoggedinuser;
