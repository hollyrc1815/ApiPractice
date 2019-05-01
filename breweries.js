$(document).on("click", "#button01", () => {
	$.ajax({
		url: 'https://api.openbrewerydb.org/breweries/6770',
		method: "GET",
	}).then((breweries) => {
		console.log(breweries);
		var brewery_type = $("<h6>").text("This is a " + breweries.brewery_type + " brewery");
		var city = $("<h6>").text("located in " + breweries.city + ",");
		var state = $("<h6>").text(breweries.state);
		$(".area01").append(brewery_type, city, state);
	})
})


$(document).on("click", "#button02", () => {
	$.ajax({
		url: 'https://api.openbrewerydb.org/breweries/6617',
		method: "GET",
	}).then((breweries) => {
		console.log(breweries);
		var brewery_type = $("<h6>").text("This is a " + breweries.brewery_type + " brewery");
		var city = $("<h6>").text("located in " + breweries.city + ",");
		var state = $("<h6>").text(breweries.state);
		$(".area02").append(brewery_type, city, state);
	})
})


$(document).on("click", "#button03", () => {
	$.ajax({
		url: 'https://api.openbrewerydb.org/breweries/6617',
		method: "GET",
	}).then((breweries) => {
		console.log(breweries);
		var brewery_type = $("<h6>").text("This is a " + breweries.brewery_type + " brewery");
		var city = $("<h6>").text("located in " + breweries.city + ",");
		var state = $("<h6>").text(breweries.state);
		$(".area03").append(brewery_type, city, state);
	})
})


$(document).on("click", "#button04", () => {
	$.ajax({
		url: 'https://api.openbrewerydb.org/breweries/6692',
		method: "GET",
	}).then((breweries) => {
		console.log(breweries);
		var brewery_type = $("<h6>").text("This is a " + breweries.brewery_type + " brewery");
		var city = $("<h6>").text("located in " + breweries.city + ",");
		var state = $("<h6>").text(breweries.state);
		$(".area04").append(brewery_type, city, state);
	})
})

$(document).on("click", "#button05", () => {
	$.ajax({
		url: 'https://api.openbrewerydb.org/breweries/6813',
		method: "GET",
	}).then((breweries) => {
		console.log(breweries);
		var brewery_type = $("<h6>").text("This is a " + breweries.brewery_type + " brewery");
		var city = $("<h6>").text("located in " + breweries.city + ",");
		var state = $("<h6>").text(breweries.state);
		$(".area05").append(brewery_type, city, state);
	})
})


$(document).on("click", "#button06", () => {
	$.ajax({
		url: 'https://api.openbrewerydb.org/breweries/6869',
		method: "GET",
	}).then((breweries) => {
		console.log(breweries);
		var brewery_type = $("<h6>").text("This is a " + breweries.brewery_type + " brewery");
		var city = $("<h6>").text("located in " + breweries.city + ",");
		var state = $("<h6>").text(breweries.state);
		$(".area06").append(brewery_type, city, state);
	})
})