(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var shoppingList = this;
shoppingList.items = ShoppingListCheckOffService.getItems();
shoppingList.addItem = function(itemIndex){
ShoppingListCheckOffService.addItem(itemIndex);
}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var shoppingList = this;
shoppingList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
var service = this;

//List of shopping items
var items = [
{ name: 'Cookie', quantity: '2 bags' },
{ name: 'Milk', quantity: '2 gallons' },
{ name: 'Donuts', quantity: '6' },
{ name: 'chocolate', quantity: '3 bags' },
{ name: 'Coke', quantity: '12 cans' }
];

var itemBought = [];

service.addItem = function(itemIndex) {
itemBought.push(items[itemIndex]);
items.splice(itemIndex, 1);
}

service.getBoughtItems = function(){
return itemBought;
}

service.getItems = function(){
return items;
}
}
})();
