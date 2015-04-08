# DivManager
	Div manager stops selectors from being scattered all over your code, making it more readable, cleaner and easier to work with.
	Another problem DivManager solves is selecting a div that isn't there by testing for it's existance before returning a reference to it. 
	jQuery and AppFramework return an object with length 0 when they cannot select it.  DivManager will return null, making it easier to 
	deal with.  Also, It centralizes all the jQuery/AppFramework... whatever selectors in one place.
	
	USAGE:
	var divMan = DivManager.getInstance();
	divMan.addSelector('myDivSelector1', '$("#div1").children(".divChild1").children(".divChild2")');
	divMan.addSelector('myDivSelector2', '$("#div2").children(".divChild1").children(".divChild2")');
	divMan.addSelector('myDivSelector3', '$("#div3").children(".divChild1").children(".divChild2")');
	
	var myDivReference = divMan.div("myDivSelector1");