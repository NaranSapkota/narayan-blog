import {useState} from 'react';
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

    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs"/>
         <BlogList blogs={blogs.filter((blog)=> blog.author==="Three")} title={'Author Three Blog'}/>
          
        </div>
     );
}
 
export default Home;