const startDateInput = document.getElementById('reservation-start');
const endDateInput = document.getElementById('reservation-end');
const periodInput = document.getElementById('period');

startDateInput.addEventListener('change', updateReservationDuration);
endDateInput.addEventListener('change', updateReservationDuration);
periodInput.addEventListener('input', updateEndDateFromPeriod);

function updateReservationDuration() {
    let startDate = new Date(startDateInput.value);
    let endDate = new Date(endDateInput.value);
    
    // Check if dates are valid.  Required to wait until both dates are populated
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())){
        // Calculate the difference in milliseconds, then convert ms to days
        let difference = endDate - startDate;
        let durationInDays = difference / (1000 * 60 * 60 * 24);
        
        // Update the periodInput value with the calculated duration (rounded to nearest whole number)
        if(durationInDays>0){
            periodInput.value = Math.round(durationInDays);
        }
            // Clear the value if the duration <=0
        else{
            alert('End Date must be afte Start Date');
            periodInput.value = '';
        } 
    } 
    else {
        //resets things if end and period get out of sync
        periodInput.value = '';
        endDateInput.value = '';
    }
}

//update the End Date based on input from the period field
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