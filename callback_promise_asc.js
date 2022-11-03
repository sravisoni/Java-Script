const datas = [{name:"Rahul", city:"indore"},
             {name:"Anshul", city:"Sarangpur"}];

function getdata(){
    setTimeout(()=>{
        var output = " ";
        datas.forEach((item)=>{
            output += item.name+" ";
        });
        console.log(output);
    },2000);
}

function createdata(newdata){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(datas.push(newdata));
        
        },3000);
    });
}
createdata({name:"Ganesh", city:"Kasrawad"}).then(getdata);

/*async function start(){
    await createdata({name:"Ganesh", city:"Khandwa"});
    getdata();
}
start();*/

