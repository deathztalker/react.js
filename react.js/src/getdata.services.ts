const getdata = {
  getMyData: (setMyArray:any,cargar:any,setCargar:any) => {
    /*  const response = await fetch('https://beacon.nist.gov/beacon/2.0/chain/last/pulse/last')
        console.log(response)
        const data = await response.json()
        const outputValues = data.results.map((r: { outputValue: any; }) => r.outputValue) // 
        
        setMyArray(outputValues) */
    fetch("https://beacon.nist.gov/beacon/2.0/chain/last/pulse/last")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data.pulse.outputValue);
        if(cargar===1) {
            setMyArray(data.pulse.outputValue); 
            setCargar(2);

        } 
         else{
        setMyArray(data.pulse.outputValue);
         setCargar(1);
         }
      });
  },
};
export default getdata;
