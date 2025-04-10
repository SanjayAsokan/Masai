
function createInventoryItem (name, category, price){
    let obj={}
    obj.name = name;
    obj.category =category;
    obj.price = price;
    obj.describeItem = function(){
        console.log(`Item: ${name}, Category: ${category}, Price: ${price}`)
    }
    return obj
}
function addItemDiscount(inventoryItem , discount){
    inventoryItem.discountprice = inventoryItem.price - (inventoryItem.price * discount / 100)

    inventoryItem.applyDiscount = function(){
        console.log(`Discounted Price for ${this.name}: ${this.discountprice}`)
    }

    return inventoryItem

}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
