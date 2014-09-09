// var itemName;

// var shop = {
// 	// add properties and actions.

// 	addItems: function() {
// 		itemName = $.trim($("#item-name").val());
// 	},

// 	validation: function() {

// 		if (itemName === null || itemName === "" || itemName.length < 3 || itemName.length > 50 ) {
// 			alert("<p>Enter a valid value</p>");
// 		}
// 		else {
// 			$("#uncomplete").slideDown().append('<li id="list">' + '<input type="checkbox" id="checker">' + itemName + '<button type="button" id="delete">' + "Delete" + "</button>" + "</li>");
// 			$("#uncomplete #list").slideDown("slow");
// 		}
// 	}

// }

// $("#add").click(function() {
// 	shop.addItems();
//  	shop.validation();
//  	$("#item-name").val("");
//  	$("p").hide();
// });

// $(document).on('click','#delete', function(){
// 	$(this).parent().remove();
// })

// $("#uncomplete").on('change', 'input[type=checkbox]', function() {
// 	$("#complete").append($(this).parent());
// });

// $("#complete").on('change', 'input[type=checkbox]', function() {
// 	$("#uncomplete").append($(this).parent());
// });
var itemName;

var shop = {

	

//initializes all the functionalities of the app.

	init: function () {
		shop.addItems();
		shop.deleteItem();
		shop.checkItems();
	},


//method tho validate the entry

	validate: function () {

		var entry = $.trim($("#item-name").val());

		if (!isNaN(entry) || entry === "" || entry === "undefined" ) {
			alert("Please enter a brief description of the item");
		}

		else if (entry.length < 3) {
			alert("Too short a description");
		}

		else if (entry.length > 50) {
			alert("Too long a description");
		}

		else {
			alert("item added successfully");
		}
		return entry;
	},

//method to add and append the item to the unordered list

	addItems: function () {
		$("#add").click(function(){
			itemName = shop.validate();
			$("#item-name").val("");
			if (itemName !== "") {
				var listbuilder = '<li id="list"><input type="checkbox" id="checker">' + itemName + '<span id="right"><button type="button" id="delete">' + "Delete" + '</button></span></li>';
				$("#uncomplete").append(listbuilder);

			}

			// else {
			// 	alert("alert");
			// }
		});
	},

//method to check and uncheck the list items

	checkItems: function() {

		//pushes checked item from uncomplete list back to the complete list

		$("#uncomplete").on('change', 'input[type=checkbox]', function() {
 			$("#complete").append($(this).parent());
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