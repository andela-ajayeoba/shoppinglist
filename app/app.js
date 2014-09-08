var itemName;

var shop = {
	// add properties and actions.

	addItems: function() {
		itemName = $.trim($("#item-name").val());
	},

	validation: function() {

		if (itemName === null || itemName === "" || itemName.length < 3 || itemName.length > 50 ) {
			alert("enter a valid value")
		}
		else {
			$("#uncomplete").append("<li>" + '<input type="checkbox" id="checker">' + itemName + '<button type="button" id="delete">' + "Delete" + "</button>" + "</li>");
		}
	}

}

$("#add").click(function() {
	shop.addItems();
 	shop.validation();
 	$("#item-name").val("");
 	$("p").hide();
});

$(document).on('click','#delete', function(){
	$(this).parent().remove();
})

$("#uncomplete").on('change', 'input[type=checkbox]', function() {
	$("#complete").append($(this).parent());
});

$("#complete").on('change', 'input[type=checkbox]', function() {
	$("#uncomplete").append($(this).parent());
});