import React, { useEffect, useState } from "react";
import { useUserauth } from "../context/Userauthcontext";

const useLoggedinuser = () => {
  const { user } = useUserauth();
  const email = user?.email;
  const [loggedinuser, setloggedinuser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/loggedinuser?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setloggedinuser(data);
      });
  }, [loggedinuser]);
  return [loggedinuser, setloggedinuser];
};

export default useLoggedinuser;
