import { useState,useEffect } from "react";

const useFetch=(url)=>{

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error,setError]=useState(null);

    useEffect(() => {

        setTimeout(() => {
    
          fetch(url)
            .then(res => {
              if(!res.ok){
                throw Error('Could not load fetch data for that resources');
              }
              return res.json();
            }).then(responseData => {
              setData(responseData)
              setIsPending(false);
            }).catch(err=>{
              setError(err.message);
              setIsPending(false);
            })
        }, 1000);
    
      }, []);

      return {data,isPending,error}
}

export default useFetch;