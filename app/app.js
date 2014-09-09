var itemName;

var shop = {

	

//initializes all the functionalities of the app.

	init: function () {
		shop.addItems();
		shop.deleteItem();
		shop.checkItems();
	},

	getItem: function () {
		itemName = $("#item-name").val();
	},

//method tho validate the entry and append a 

	validate: function () {

		if (!isNaN(itemName) || itemName === "" || typeof itemName === "undefined" ) {
			$("#message").text("Please enter a brief description of the item");
		}

		else if (itemName.length < 3) {
			$("#message").text("Too short a description");
		}

		else if (itemName.length > 50) {
			$("#message").text("Too long a description");
		}


		else {
			var listbuilder = '<li id="list"><input type="checkbox" id="checker">' + itemName + '<span id="right"><button type="button" id="delete">' + "Delete" + '</button></span></li>';
			$("#uncomplete").append(listbuilder);	
			$("#message").text("Item added to Shopping Cart");
		}
		
	},

//method to add and append the item to the unordered list

	addItems: function () {
		$("#add").click(function(){
			shop.getItem();
			shop.validate();
			$("#item-name").val("");
			$("p").hide();
			$("#shopcart h3").show();
		});
	},

//method to check and uncheck the list items

	checkItems: function() {

		//pushes checked item from uncomplete list back to the complete list

		$("#uncomplete").on('change', 'input[type=checkbox]', function() {
 			$("#complete").append($(this).parent());
 			$("#checkout h3").show();
		 });

		//returns checked item from complete list back to the uncomplete list

		$("#complete").on('change', 'input[type=checkbox]', function() {
 			$("#uncomplete").append($(this).parent());
		 });
	},

//method to delete items from the list.

	deleteItem: function () {

		 $(document).on('click','#delete', function(){
			$(this).parent().parent().remove();
		})
	}

}

$(document).ready(shop.init);