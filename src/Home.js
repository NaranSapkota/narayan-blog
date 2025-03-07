import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error,setError]=useState(null);


  const [name, setName] = useState('mario');
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id != id);
    setBlog(newBlogs);
  }


  useEffect(() => {

    setTimeout(() => {

      fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok){
            throw Error('Could not load fetch data for that resources');
          }
          return res.json();
        }).then(data => {
          setBlog(data)
          setIsPending(false);
        }).catch(err=>{
          setError(err.message);
          setIsPending(false);
        })
    }, 1000);

  }, []);


  return (
    <div className="home">
      { error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}

      
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
      {/* {/* <p>{name}</p> */}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author==="Three")} title={'Author Three Blog'}/> */}

    </div>
  );
}

export default Home;