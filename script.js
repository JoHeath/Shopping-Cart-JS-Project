let Cart = []; //empty array

function AddItems(_name, _price){
    let newItem = {
        Item: _name,
        Price: _price
    };
    Cart.push(newItem);
    console.log(Cart);

let totalPrice = 0;

    Cart.forEach((i) => {
     totalPrice += i.Price  
        console.log(i);
    });
    
    console.log(Cart);
    console.log(totalPrice)
    
    
    
   // let list =
   // document.getElementById("myList");
    
   // Cart.forEach((item) => {
   //     let li =
   //     document.createElement("li");
   //     li.innerText = item;
    //    list.appendChild(li);
   // });
    
}