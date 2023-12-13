//Auto calculate the perio based on dates entered.
//Update end date if beginning date exists 
//zero out period of end date is before start date (negative period) preventing them to submit since it's required field
//also zero out if start date is in past
//need to work on warning messages when they do these...

const startDateInput = document.getElementById('reservation-start');
const endDateInput = document.getElementById('reservation-end');
const periodInput = document.getElementById('period');
const today = new Date();

startDateInput.addEventListener('change', updateReservationDuration);
endDateInput.addEventListener('change', updateReservationDuration);
periodInput.addEventListener('input', updateEndDateFromPeriod);

function updateReservationDuration() {
    let startDate = new Date(startDateInput.value);
    let endDate = new Date(endDateInput.value);
    
    // Check if dates are valid.  Required to wait until both dates are populated
    //console.log(today)
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && (startDate.getTime() > today.getTime())){
        // Calculate the difference in milliseconds, then convert ms to days
        let difference = endDate - startDate;
        let durationInDays = difference / (1000 * 60 * 60 * 24);
        
        // Update the periodInput value with the calculated duration (rounded to nearest whole number)
        if (!isNaN(durationInDays)) {
            if(durationInDays>0){
                periodInput.value = Math.round(durationInDays);
            }
            else{periodInput.value = '';} // Clear the value if the duration is NaN
        } 
        else {
            periodInput.value = '';
            endDateInput.value = '';
        } // Clear the value if the duration is NaN
    } 
    else {
        periodInput.value = '';
        endDateInput.value = '';
    } // Clear the value if dates are invalid
}


function updateEndDateFromPeriod() {
    const startDate = new Date(startDateInput.value);
    const period = parseInt(periodInput.value);

    if (!isNaN(startDate.getTime()) && !isNaN(period) && startDate > today) {
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + period);

        endDateInput.value = endDate.toISOString().split('T')[0];
    }else{
        periodInput.value = ''; // Clear the value if dates are invalid
    }
}