async function main(){
    const countContainer = document.querySelector('#count-container');
    const refreshButton = document.querySelector("#refresh-button")
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let response = await fetch("http://localhost:9001/counter")
    let jsonData = await response.json()

    let countValue = jsonData.value;

    function refresh(){
        countContainer.textContent = jsonData.value
    }

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    refreshButton.addEventListener('click', refresh)
    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()