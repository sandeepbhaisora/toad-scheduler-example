const scheduler = require('toad-scheduler');

function logPlease(){
    console.log('yea logging');

}

function promiseFunction(){
    return new Promise(function(resolve ,reject){
        console.log('loggiong from a promise function');
        resolve(true);
    });
}

function schedule(scnd) {
    const toadScheduler  = new scheduler.ToadScheduler();
    
    //async task
    const task = new scheduler.AsyncTask(
        'async task',
        () => {
            return promiseFunction();
        },
        err =>{
            console.log("there is an error " + err);
        }
    );

    //simple task 
    // const task = new scheduler.Task('simple task', () => {
    //     console.log('logging from simple task');
    // })
    const job = new scheduler.SimpleIntervalJob({
        seconds: scnd,
        // runImmediately: true,
    }, task);

    toadScheduler.addSimpleIntervalJob(job);
    console.log('started the scheduler');

    return toadScheduler;
}



schedule(10);