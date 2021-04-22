const slack_url = localStorage.getItem('webhookUrl');
const channel_name = '';
const user_name = '';
const unfurl_links = true;

document.getElementById('sendSlack').onclick = () => {
    const sendSlack = async (message) => {
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
    const comment = document.getElementById('comment').value;
    getCurrentTabUrlandTitleandComment(sendSlack,comment)
};

const getCurrentTabUrlandTitleandComment = (sendSlack,comment) => {
    const queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, async (tab) => {
        const Url = String(tab[0].url);
        const Title = String(tab[0].title);
        let message = comment+'\n\n'+Title+'\n'+Url;
        sendSlack(message);
    })
}
