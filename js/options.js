import { removeElement, insertElement } from "./common.js";
//save webhookURL to localStorage
const URLID =  'save-url';
const WEBHOOKURLID = 'webhook-url';

document.getElementById(URLID).onclick = () => {
    localStorage.setItem('webhookURL',document.getElementById(WEBHOOKURLID).value);
    removeElement(URLID);
    removeElement(WEBHOOKURLID);
    insertElement("input-url-wrapper",'afterbegin','<p>URLを設定しました</p>')
};