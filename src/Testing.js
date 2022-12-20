function Testing() {
   async  function eventHandler() {
        // fetch can be awaited here since `event.respondWith()` waits for the Promise it receives to settle
        // const resp =  fetch("https://b4175640.cloudflaredemo-cpp.pages.dev/helloworld");
        // console.log(resp);
        // return resp;

        try {
            const response = await fetch('https://b4175640.cloudflaredemo-cpp.pages.dev/helloworld', {
              method: 'GET',
              headers: {
                accept: 'application/json',
              },
            });
        
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
        
            const result = await response.json();
            console.log(result);
            return result;
          } catch (err) {
            console.log(err);
          }
      }

    return (
      <div >
        <h1 onClick={()=>eventHandler()}>Testing Purpose only</h1>

      </div>
    );
  }
  
  export default Testing;
  