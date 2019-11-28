// Name: Nur Suhaira Bte Badrul Hisham
// UOW ID: 5841549
// Assignment 1 Task 2

function books (author, title, category)
{
	this.bookauthor = author;
	this.booktitle = title;
	this.bookcategory = category;
	this.book = function()
	{
		return "Sorry, your book titled " + this.booktitle + " under the category of "
		+ this.bookcategory + " by " 
		+ this.bookauthor + " has been SOLD OUT!"
	};
}

function search () 
{
	var author = document.forms["searchForm"]["author"].value;
	var title = document.forms["searchForm"]["title"].value;
	var category = document.forms["searchForm"]["category"].value;
	var date = document.forms["searchForm"]["date"].value;
	var publisher = document.forms["searchForm"]["publisher"].value;
	var isbn = document.forms["searchForm"]["isbn"].value;
	var condition = document.forms["searchForm"]["condition"].value;
	
	var ok = true;
	
	var letters = /^[A-Za-z]+$/;
	if (author === "")
	{
		alert ("Please enter the author of the book");
		ok = false;
	}
	else if (!author.match (letters))
	{
		alert ("Please only enter letters in author name");
		ok = false;
	}
	
	if (title === "")
	{
		alert ("Please enter the title of the book");
		ok = false;
	}
	
	if (category === "")
	{
		alert ("Please enter the category of the book");
		ok = false;
	}
	else if (!category.match (""))
	{		
		if ((!category.match ("Magazines")) || (!category.match ("Comics")) || (!category.match ("Non-Fiction")) 
			|| (!category.match ("Fiction")) || (!category.match ("Children")))
		{
			alert ("Please enter the valid book category");
			ok = false;
		}
	}
			
	var varDate = new Date (date); //dd-mm-YYYY
	var today = new Date();
	today.setHours(0,0,0,0);
	if (varDate >= today)
	{
		alert ("Please enter the valid publishing date");
		ok = false;
	}
	
	var digits = /^\d+$/;
	if (isbn != "") // text area use != instead of match func.
	{
		if (!isbn.match (digits))
		{
			alert ("Please only enter digits in ISBN");
			ok = false;
		}
	}
	
	if (ok == true)
	{
		booksrc = new books (author, title, category);
		alert (booksrc.book());
	}
}

function shopcart ()
{
	var booktitle = document.getElementById ("book");
	var qty = document.forms["qtycart"]["qty"].value;
	
	if (qty < 1)
	{
		alert ("Please enter a valid quantity of \"" + booktitle.dataset.book 
		+ "\" you would like to purchase?");
	}
	else
	{
		if (confirm ("Are you a LightBulb Trolley Bookshop member?"))
		{
			var cart = document.getElementById("bookmprice");
		}
		else
		{
			var cart = document.getElementById("bookoprice");
		}
		
		price = cart.dataset.price;
		var sum = total (qty, price);
		alert ("Please proceed to make payment of S$" + sum.toFixed(2) + 
		" for the book titled \"" + booktitle.dataset.book + "\".");
	}
}	

function total (qty, price)
{ 
	var sum = 0;
	var i;
	for (i = 0; i < qty; i++) 
	{	
		sum += parseFloat (price);
	}
	return sum;
}

window.onload = function ()
{
	var what = document.getElementById("what");
	
	if (what)
	{
		what.addEventListener ("click", whatson);
	}
	
	function whatson ()
	{
		var news = ["BRICE, Book 7 of Debra Clopton's Cowboys of Ransom Creek is now at " +
		"all retailers.", "Happy New Year!  Exciting news for me! My new book, " +
		"THE CONSPIRACY, will finally hits the shelves on January 22nd!", "Laura Griffin STONE "
		+ "COLD HEART, the next romantic thriller by NYT bestselling author Laura Griffin, is "
		+ "now available for pre-order on March. 26 in paperback, ebook, and audiobook.",
		"MURDER BETWEEN THE PAGES, Book 1 in my new cozy mystery series, is now available in ebook and print.",
		"How about setting a New Year's resolution you'll actually want to keep this year? Janna MacGregor " +
		"encourages readers to resolve to collect more autographed books from their favorite authors.",
		"Pamela Ann Cleverly is happy to announce the long-awaited book 2 in The Tanner series. " +
		"A BEACON IN THE DARK is the sequel to IN THE SHADOW OF THE LIGHTHOUSE and throws Olivia "
		+ "Bentley into a new challenge.", "Joanne Rock celebrates the release of her new Texas " +
		"Cattleman's Club story, THE RANCHER'S BARGAIN with a special giveaway for readers starting " +
		"January 1 on her Facebook page."];
		
		var randnews = Math.floor(Math.random() * news.length);
		
		alert (news[randnews]);
	}
	
	var like = document.getElementById("like");

	if (like)
	{
		like.addEventListener ("click", displayDate);
	}

	function displayDate() 
	{
		var d = Date();
		alert ("Great! You've liked this page on " + d);
	}
}