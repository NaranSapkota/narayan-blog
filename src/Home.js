const Home = () => {

    const handleClick=() =>{
        console.log('Hello Krishna')
    }
    const handleClickAgain=(name) =>{

        console.log('Hello,'+ name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() =>handleClickAgain('krishna')}></button>
        </div>
     );
}
 
export default Home;