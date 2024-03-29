import { removeElement, insertElement } from "./common.js";
const COMMENTID = 'comment';
const SENDSLACKID = 'send-slack';
const SENDWRAPPERID = 'send-comment-wrapper';
//call when onclick of #sendSlack
document.getElementById(SENDSLACKID).onclick = () => {
    //get comment to document
    const comment = document.getElementById(COMMENTID).value;
    //send sendSlack-function and comment
    getCurrentTabUrlandTitle(comment)
};

//function of get current open tab url and title
const getCurrentTabUrlandTitle = (comment) => {
    //setting of getting infomation by current tab
    const queryInfo = {
        active: true,
        currentWindow: true
    };

    //function that send message to slack
    const sendSlack = async (message) => {
        //read webhookUrl from localStorage
        const slack_url = localStorage.getItem('webhookURL');
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

    //get tab info
    chrome.tabs.query(queryInfo, async (tab) => {
        const Url = String(tab[0].url);
        const Title = String(tab[0].title);
        const message = comment+'\n\n'+Title+'\n'+Url;
        //set message to sendSlack
        sendSlack(message);

        removeElement(SENDSLACKID);
        removeElement(COMMENTID);
        insertElement(SENDWRAPPERID,'afterbegin','<p>文章を送信しました</p>');
    })
}
