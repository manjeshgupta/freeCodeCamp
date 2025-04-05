let inventory = [];
function findProductIndex(productName){
  const name = productName.toLowerCase();
  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name==name){
      return i;
    }
  }
  return -1;
}

function addProduct(product){
  const name = product.name.toLowerCase();
  const quantity = product.quantity;
  const index = findProductIndex(name);

  if(index !== -1){
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`)
  } else{
    inventory.push({ name: name , quantity: quantity });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(productName, quantityToRemove){
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if(index == -1){
    console.log(`${name} not found`);
  } else{
    const product = inventory[index];

    if(product.quantity < quantityToRemove){
      console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
    } else if(product.quantity == quantityToRemove){
      inventory.splice(index, 1);
      console.log("Remaining " + name + " pieces: 0");
    } else{
      product.quantity -= quantityToRemove;
      console.log("Remaining " + name + " pieces: " + product.quantity);
    }
  }
}
addProduct({ name: "apple", quantity: 10});
addProduct({ name: "apple", quantity: 5 });
removeProduct("apple", 10);
removeProduct("apple", 5);
