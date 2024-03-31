let cb = function(resolve, reject){
    let x = 0;
    let result = null;
    // time consuming task
    setTimeout(function(){
        console.log("timeout end"); 
        x=6; 
        result="data fetched";
        // if task completed successfully
        if(x == 5){
            resolve(result);
        }
        else{
            reject("error in task")
        }
    }, 5000);

    console.log("task processing .... ")
}

// let promise = new Promise(cb);

// promise.then((result) => {console.log("result is " + result)}, (error) => {console.log("error is " + error)});


// async - await

function longTask(){
    setTimeout(function(){return 5;}, 5000);
    console.log("long running task ...")
}

async function processTask(){
    let data = await longTask();
    console.log(`data is ${data}`);
}

processTask();
console.log("process continue")