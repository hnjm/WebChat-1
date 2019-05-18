const getDateInfoForThread = (jsonTimeformat) => {
    const dateNow = new Date().getDate();
    const messageTime = new Date(jsonTimeformat).getDate();
    if(dateNow - messageTime === 0){
        return new Date(jsonTimeformat).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'});
    }
    if(dateNow - messageTime === 1){
        return 'Yesterday';
    }
    if(dateNow - messageTime > 1){
        return new Date(jsonTimeformat).toLocaleDateString('en-BG', {month: 'short', day: 'numeric'});
    }
};

const getDateInfoForMessage = (jsonTimeFormat) =>{
    const dateNow = new Date().getDate();
    const messageDate = new Date(jsonTimeFormat).getDate();
    const numberOfDays = dateNow - messageDate;
    const time = new Date(jsonTimeFormat).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'});
    const date = new Date(jsonTimeFormat).toLocaleDateString('en-BG', {month: 'short', day: 'numeric'});
    console.log(date);
    switch(numberOfDays){
        case 0:
            return `Today At | ${time}`;
        case 1:
            return `Yesterday At | ${time}`;
        case numberOfDays > 1 && numberOfDays < 7:
            return `${numberOfDays} days ago At | ${time}`;     
        case 7:
            return `Week ago At | ${time}`;   
        default:
            return `${date} at | ${time}`; 
    };
};

export { getDateInfoForThread, getDateInfoForMessage }