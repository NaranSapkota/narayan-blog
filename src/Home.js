import {useState} from 'react';

const Home = () => {

    const[name,setName]=useState('Krishna');
    const[age,setAge]=useState(28);

    const handleClick=() =>{
       setName("Radha");
       setAge("30");
    }
    

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} Years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;