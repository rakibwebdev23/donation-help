
const getCardData = () =>{
    const storedCard = localStorage.getItem('donation-card');
    if(storedCard){
        return JSON.parse(storedCard);
    }
    return [];
}

const saveCardData = (id) =>{
    const savedCart = getCardData();
    const exits = savedCart.find(cartId => cartId === id);
    if(!exits){
        savedCart.push(id);
        localStorage.setItem('donation-card', JSON.stringify(savedCart));
    }
}

export {saveCardData,getCardData};