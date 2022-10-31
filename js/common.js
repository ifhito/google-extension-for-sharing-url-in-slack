export const removeElement = (id) => {
    const element = document.getElementById(id);
    element.remove();
}

export const insertElement = (id, type, text) => {
    var contentBlock = document.getElementById(id);
    contentBlock.insertAdjacentHTML(type, text);
}