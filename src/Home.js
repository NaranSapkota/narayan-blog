import {useState,useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs,setBlog]=useState(null);


 const [name, setName]=useState('mario');
    const handleDelete=(id)=>{
      const newBlogs=blogs.filter(blog=> blog.id != id);
      setBlog(newBlogs);
    }


useEffect(()=>{

  fetch('http://localhost:8000/blogs')
  .then(res=>{
    return res.json();
  }).then(data=>setBlog(data));

  // console.log('use effect ran');
  // console.log(name);
},[]);


    return ( 
        <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> }
         <button onClick={()=> setName('luigi')}>change name</button>
         {/* {/* <p>{name}</p> */}
      
         {/* <BlogList blogs={blogs.filter((blog)=> blog.author==="Three")} title={'Author Three Blog'}/> */}
          
        </div>
     );
}
 
export default Home;