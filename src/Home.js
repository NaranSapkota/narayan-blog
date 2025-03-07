import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  // const [name, setName] = useState('mario');
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id != id);
  //   setBlog(newBlogs);
  // }



  const {data :blogs,isPending,error}=useFetch('http://localhost:8000/blogs');



  return (
    <div className="home">
      { error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"  />}

      
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
      {/* {/* <p>{name}</p> */}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author==="Three")} title={'Author Three Blog'}/> */}

    </div>
  );
}

export default Home;