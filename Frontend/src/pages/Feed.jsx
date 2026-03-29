import React ,{useState, useEffect} from 'react' // Wwe use use effect so that the api should call once if not use -> useeffect will call multiple times

import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJlfGVufDB8fDB8fHww&w=1000&q=80',
            caption: 'Beautiful sunset!',
            
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => {
            setPosts(res.data.posts)
        })
    },[])//Pass empty array

  return (
    <section className='feed-section'>
        
        {
            posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id} className='post'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
            </section>
        )
        }

export default Feed