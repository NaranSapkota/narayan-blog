import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs,setBlog]=useState(
        [


            {
                title: "First Item",
                body: "This is the body of the first item.",
                author: "Author One",
                id: 1,
              },
              {
                title: "Second Item",
                body: "This is the body of the second item.",
                author: "Author Two",
                id: 2,
              },
              {
                title: "Third Item",
                body: "This is the body of the third item.",
                author: "Author Three",
                id: 3,
              }
        ]
    );

    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs"/>
          
        </div>
     );
}
 
export default Home;