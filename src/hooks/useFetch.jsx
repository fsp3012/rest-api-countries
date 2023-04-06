import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch(url);
      let finalData = await response.json();
      console.log(finalData);
      setData(finalData);
      setLoading(false);
    };
    
    setTimeout(()=>{
        getData();
    }, 2000)
  }, [url]);

  return { data, loading };
};

// export default useFetch
