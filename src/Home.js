import {useState,useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs,setBlog]=useState(
        [


            {
                title: "First Item",
                body: "This is the body of the first item.",
                author: "One",
                id: 1,
              },
              {
                title: "Second Item",
                body: "This is the body of the second item.",
                author: "Two",
                id: 2,
              },
              {
                title: "Third Item",
                body: "This is the body of the third item.",
                author: "Three",
                id: 3,
              }
        ]
    );


 const [name, setName]=useState('mario');
    const handleDelete=(id)=>{
      const newBlogs=blogs.filter(blog=> blog.id != id);
      setBlog(newBlogs);
    }

useEffect(()=>{
  console.log('use effect ran');
  console.log(name);
},[name]);
    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
         <button onClick={()=> setName('luigi')}>change name</button>
         <p>{name}</p>
      
         {/* <BlogList blogs={blogs.filter((blog)=> blog.author==="Three")} title={'Author Three Blog'}/> */}
          
        </div>
     );
}
 
export default Home;