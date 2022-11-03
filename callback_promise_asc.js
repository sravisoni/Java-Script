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
        datas.push(newdata);
        let error = false;
        if(!error){
            resolve();
        }
        else{
            reject("Promise not work ,Error!!");
        }
        },3000);
    });
}
createdata({name:"Ganesh", city:"Kasrawad"}).then(getdata).catch((err)=>{console.log(err)});

/*async function start(){
    await createdata({name:"Ganesh", city:"Khandwa"});
    getdata();
}
start();*/

