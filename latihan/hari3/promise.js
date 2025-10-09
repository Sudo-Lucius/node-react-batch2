var isImHappy = false;

var willGetJob = new Promise(
    function(resolve, reject) {
        if(isImHappy) {
            var happy = {
                GetAjob : 'Yes'
            }
            resolve(happy);
        } else {
            var reason = new Error('Im not happy')
            reject(reason);
        }
    }
)

function askMyself() {
    willGetJob.then(function (fulfilled) {
            console.log(fulfilled)
        })
        .catch(function (error){
            console.log(error.message)
        })
}

askMyself()