const selectElement = (selector) => {
    element = document.querySelector(selector);
    if(element)
    return element;
    throw new Error(`Cannot find the element ${selector}`);
}

const Id = selectElement('.id');
const content = selectElement('.content');
const dice = selectElement('.dice');
const url = 'https://api.adviceslip.com/advice';

const responseData = (data) => {
    Id.innerText = `${data.slip.id}`;
    content.innerText = `"${data.slip.advice}"`;
}

const generateAdvice = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        responseData(data);
        console.log(data);
    } catch(err) {
        content.innerHTML = 'Error fetching Advice';
    }
}

dice.addEventListener('click', generateAdvice);