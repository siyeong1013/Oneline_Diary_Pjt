let days = ['SUN','MON','TUE','WED','THU','FRI','SAT']

const getCurrentDataTime = () => {
    console.log('getCurrentDataTime() called!');

    let today = new Date();
    
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let day = today.getDay(); //0 : 일요일

    return `[${year}/${month}/${date}/${days[day]}] `;
}

const consoleFlag = false;
if(!consoleFlag) {
    console = {};
    console.log = function(){};
    console.warn = function(){};
    console.error = function(){};
}