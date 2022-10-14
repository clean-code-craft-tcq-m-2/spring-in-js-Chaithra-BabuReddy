module.exports=function getStatistics(numbers){
    
    if (numbers.length > 0) {
        let max = Math.max(...numbers)
        let min = Math.min(...numbers);
        let sum = 0;
        numbers.forEach((x) => { sum = sum + x; });
        let avg = sum / numbers.length;
        return { "max": max, "min": min, "average":avg };
    } else {
        return {"max":NaN,"min":NaN,"average":NaN}
    }
}

