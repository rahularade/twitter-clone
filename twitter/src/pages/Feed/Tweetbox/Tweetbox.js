import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import axios from "axios";
import { useUserauth } from "../../../context/Userauthcontext";
import useLoggedinuser from "../../../hooks/useLoggedinuser";

const Tweetbox = () => {
  const [post, setpost] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [isloading, setisloading] = useState(false);
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const { user } = useUserauth();
  const [loggedinuser] = useLoggedinuser();
  const email = user?.email;
  const userprofilepic = loggedinuser[0]?.profileImage
    ? loggedinuser[0].profileImage
    : user && user.photoURL;
  const handleUploadImage = (e) => {
    setisloading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=e3709d914aa7cc919b6753c5b00b52ce",
        formData
      )
      .then((res) => {
        setimageurl(res.data.data.display_url);
        // console.log(res.data.data.display_url);
        setisloading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handletweeet = (e) => {
    e.preventDefault();
    if (user?.providerData[0]?.providerId === "password") {
      fetch(`https://twitter-clone-6mhu.onrender.com/loggedinuser?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setname(data[0]?.name);
          setusername(data[0]?.username);
        });
    }
    else {
      setname(user?.displayName)
      setusername(email?.split("@")[0])
    }
    if(name){
      const userpost={
        profilephoto:userprofilepic,
        post:post,
        photo:imageurl,
        username:username,
        name:name,
        email:email,
      }
      setpost('')
      setimageurl('')
      fetch('https://twitter-clone-6mhu.onrender.com/post',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userpost)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        
      })
    }
  };

  return (
    <div className="tweetbox">
      <form onSubmit={handletweeet}>
        <div className="tweetbox-input">
          <Avatar src={
                loggedinuser[0]?.profileImage
                  ? loggedinuser[0].profileImage
                  : user && user.photoURL
              } />
          <input
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setpost(e.target.value)}
            value={post}
            required
          />
        </div>
        <div className="imageIcon-tweetButton">
          <label htmlFor="image" className="imageIcon">
            {isloading ? (
              <p>Uploading Image</p>
            ) : (
              <p>{imageurl ? "Image Uploaded" : <AddAPhotoOutlinedIcon />}</p>
            )}
          </label>
          <input
            type="file"
            id="image"
            className="imageInput"
            onChange={handleUploadImage}
          />
          <Button
            variant="outlined"
            className="tweetbox-tweetButton"
            type="submit"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetbox;
