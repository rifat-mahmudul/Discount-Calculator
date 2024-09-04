const findDiscount = () =>{
    const productNumber = document.getElementById('productNumber').value;
    const totalPrice = document.getElementById('totalPrice').value;
    const priceContainer = document.getElementById('priceContainer');
    
    

    if(productNumber > 1 && productNumber < 3){
        
        const discount1 = totalPrice - (totalPrice * 0.02);
        priceContainer.innerHTML = `
            <h3>Your discount is ${discount1}<h3>
        `

        document.getElementById('productNumber').value = "";
        document.getElementById('totalPrice').value = "";
    }

    else if(productNumber < 5 && productNumber > 3){
        
        const discount2 = totalPrice - (totalPrice * 0.05);
        priceContainer.innerHTML = `
            <h3>Your discount is ${discount2}<h3>
        `
        document.getElementById('productNumber').value = "";
        document.getElementById('totalPrice').value = "";
    }

    else{
        alert("No discound available");

        document.getElementById('productNumber').value = "";
        document.getElementById('totalPrice').value = "";
    }

    
}