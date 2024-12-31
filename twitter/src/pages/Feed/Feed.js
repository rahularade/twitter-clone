import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Posts from './Posts/Posts'
import Tweetbox from './Tweetbox/Tweetbox'

const Feed = () => {
  const [post, setpost] = useState([])

  useEffect(()=>{
    fetch('https://twitter-clone-6mhu.onrender.com/post')
    .then(res=>res.json())
    .then(data=>{
      setpost(data)
    })
  }, [post])

  // const data = [
  //   {
  //     "_id": "1",
  //     "name": "Jane Doe",
  //     "username": "@jane_doe",
  //     "profilePhoto": "https://example.com/profiles/jane.jpg",
  //     "post": "Exploring the new features in JavaScript! 🚀 #coding #JavaScript",
  //     "photo": "https://example.com/posts/javascript.png"
  //   },
  //   {
  //     "_id": "2",
  //     "name": "John Smith",
  //     "username": "@john_smith",
  //     "profilePhoto": "https://example.com/profiles/john.jpg",
  //     "post": "Excited about the latest tech trends in 2024! 📱 #technology #innovation",
  //     "photo": "https://example.com/posts/tech2024.png"
  //   },
  //   {
  //     "_id": "3",
  //     "name": "Emily Rose",
  //     "username": "@emily_rose",
  //     "profilePhoto": "https://example.com/profiles/emily.jpg",
  //     "post": "Learning Python has been so much fun! 🐍 #Python #programming",
  //     "photo": "https://example.com/posts/python.png"
  //   },
  //   {
  //     "_id": "4",
  //     "name": "Michael Brown",
  //     "username": "@michael_b",
  //     "profilePhoto": "https://example.com/profiles/michael.jpg",
  //     "post": "Travel diaries from the mountains. 🏞️ #travel #adventure",
  //     "photo": "https://example.com/posts/mountains.png"
  //   },
  //   {
  //     "_id": "3",
  //     "name": "Emily Rose",
  //     "username": "@emily_rose",
  //     "profilePhoto": "https://example.com/profiles/emily.jpg",
  //     "post": "Learning Python has been so much fun! 🐍 #Python #programming",
  //     "photo": "https://example.com/posts/python.png"
  //   },
  //   {
  //     "_id": "4",
  //     "name": "Michael Brown",
  //     "username": "@michael_b",
  //     "profilePhoto": "https://example.com/profiles/michael.jpg",
  //     "post": "Travel diaries from the mountains. 🏞️ #travel #adventure",
  //     "photo": "https://example.com/posts/mountains.png"
  //   },
  //   {
  //     "_id": "3",
  //     "name": "Emily Rose",
  //     "username": "@emily_rose",
  //     "profilePhoto": "https://example.com/profiles/emily.jpg",
  //     "post": "Learning Python has been so much fun! 🐍 #Python #programming",
  //     "photo": "https://example.com/posts/python.png"
  //   },
  //   {
  //     "_id": "4",
  //     "name": "Michael Brown",
  //     "username": "@michael_b",
  //     "profilePhoto": "https://example.com/profiles/michael.jpg",
  //     "post": "Travel diaries from the mountains. 🏞️ #travel #adventure",
  //     "photo": "https://example.com/posts/mountains.png"
  //   },
  //   {
  //     "_id": "5",
  //     "name": "Sophia Lee",
  //     "username": "@sophia_lee",
  //     "profilePhoto": "https://example.com/profiles/sophia.jpg",
  //     "post": "The art of minimalism - a journey to simplicity. 🎨 #art #minimalism",
  //     "photo": "https://example.com/posts/minimalism.png"
  //   }
  // ];

  // setpost(data)
  console.log(post);
  
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <Tweetbox/>
      {
        post.map((p)=>(<Posts key={p._id} p={p} />)
      )}
    </div>
  )
}

export default Feed