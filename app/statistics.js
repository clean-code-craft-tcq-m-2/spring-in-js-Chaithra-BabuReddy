module.exports=function getStatistics(numbers){
    let min_1, max_1,average_1;
    if (numbers.length > 0) {
        max_1 = Math.max(...numbers)
         min_1 = Math.min(...numbers);
        let sum = 0;
        numbers.forEach((x) => { sum = sum + x; });
        average_1 = sum / numbers.length;
        return { min:min_1,max:max_1,average:average_1};
    } else {
        min_1=NaN;max_1=NaN;average_1=NaN;
        return {min:min_1,max:max_1,average:average_1}
    }
}

module.exports=function EmailAlert() {
  this.emailSent = false;
};
 module.exports=function LEDAlert() {
  this.ledGlows = false;
};

module.exports = function StatsAlerter(maxT,alerters) {
function checkAndAlert(number){
    [emailAlert,ledAlert]=alerters;
    let max= Math.max(...number);
    if(max>maxT){
        emailAlert.emailSent=true; 
        ledAlert.ledGlows=true;
    }
};
