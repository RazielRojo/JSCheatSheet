getdata = async ()=>{
    const cat = { name:'Kotik'}
    const response = await fetch('https://httpbin.org/post',
    {method:'post',body: JSON.stringify(cat)});
    const jsonData = await response.json();
  
    console.log(jsonData.data);
}

window.onload = getdata();