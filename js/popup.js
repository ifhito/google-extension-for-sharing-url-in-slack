//call when onclick of #sendSlack
document.getElementById('sendSlack').onclick = () => {
    //function that send message to slack
    const sendSlack = async (message) => {
        //read webhookUrl from localStorage
        const slack_url = localStorage.getItem('webhookUrl');
        const data = {"text":message};
        const method = 'POST';
        const body = JSON.stringify(data);
        console.log(message);
        await fetch(slack_url, {
            method: method,
            body: body
        }).then(response => {
            console.log(response.status);
        });
    };
    //get comment to document
    const comment = document.getElementById('comment').value;
    //send sendSlack-function and comment
    getCurrentTabUrlandTitle(sendSlack,comment)
};
//function of get current open tab url and title
const getCurrentTabUrlandTitle = (sendSlack,comment) => {
    //setting of getting infomation by current tab
    const queryInfo = {
        active: true,
        currentWindow: true
    };
    //get tab info
    chrome.tabs.query(queryInfo, async (tab) => {
        const Url = String(tab[0].url);
        const Title = String(tab[0].title);
        const message = comment+'\n\n'+Title+'\n'+Url;
        //set message to sendSlack
        sendSlack(message);
    })
}
