/**
	Div manager stops selectors from being scattered all over your code, making it more readable, cleaner and easier to work with.
	Another problem DivManager solves is selecting a div that isn't there by testing for it's existance before returning a reference to it. 
	It centralizes all the jQuery/AppFramework... whatever selectors in one place.	
*/
function DivManager()
{
	this.divs;
	this.domDivs;
	this.init();
}

/**
	Initialize the DivManager	
*/
DivManager.prototype.init = function()
{
	this.divs = [];
	this.domDivs = {};
}

/**
	get a div by it's nickname
	@param divName:String - The name of the div
	@return Object - a reference to the div	or null if the object does not exist
*/
DivManager.prototype.div = function(divName)
{
	//This update is necessary otherwise when items are added and removed from the dom the reference will be lost
	this.update(divName);
	if(this.divs[divName] == null)
	{
		this.divs[divName] = eval(this.domDivs[divName]);
		if(this.divs[divName])
		{
			//AppFramework / jQuery return an object with length == 0 when the object referenced does not exist
			if(this.divs[divName].length == 0)
			{
				this.divs[divName] = null;
				return null;
			}
		}
	}
	return this.divs[divName];
}


/**
	Add a selector to the collection.
	@param selector:String - the selector string to execute EX: '$("#myDiv").children(".subdiv")' this should be a STRING not the selector itself
	@param divNickname:String - The nickname of the div.  This will be the string you use to get a reference to the div.
*/
DivManager.prototype.addSelector = function(divNickname, selector)
{
	this.domDivs[divNickname] = selector;
}

/**
	Remove a selector.
	@param divNickname:String - The nickname of the div you want to remove.	
*/
DivManager.prototype.removeSelector = function(divNickname)
{
	this.domDivs[divNickname] = null;
}

/**
	Remove a selector by it's selector string
	@param selector:String - The selector of the div you want to remove.	
*/
DivManager.prototype.removeSelectorBySelector = function(selector)
{
	for(var xx in this.domDivs)
	{
		if(this.domDivs[xx] == selector)
		{
			this.domDivs[xx] = null;
			return;
		}
	}
}




/**
	Referesh all div references by re-executing the selectors	
*/
DivManager.prototype.refresh = function()
{
	for(var xx in this.domDivs)
	{
		this.divs[xx] = eval(this.domDivs[xx]);
	}
}

/**
	Update a reference to a div by re-executing it's selector.
	@param divName:String - The nickname of the div to update	
*/
DivManager.prototype.update = function(divName)
{
	this.divs[divName] = eval(this.domDivs[divName]);
}

/**
	Nullify all the references for the divs.  This is useful for memory management.	
*/
DivManager.prototype.nullify = function(divName)
{
	this.divs = [];
}

/*******************************************************************************************/
/*******************************************************************************************/
/*
  /$$$$$$  /$$$$$$ /$$   /$$  /$$$$$$  /$$       /$$$$$$$$ /$$$$$$$$ /$$$$$$  /$$   /$$
 /$$__  $$|_  $$_/| $$$ | $$ /$$__  $$| $$      | $$_____/|__  $$__//$$__  $$| $$$ | $$
| $$  \__/  | $$  | $$$$| $$| $$  \__/| $$      | $$         | $$  | $$  \ $$| $$$$| $$
|  $$$$$$   | $$  | $$ $$ $$| $$ /$$$$| $$      | $$$$$      | $$  | $$  | $$| $$ $$ $$
 \____  $$  | $$  | $$  $$$$| $$|_  $$| $$      | $$__/      | $$  | $$  | $$| $$  $$$$
 /$$  \ $$  | $$  | $$\  $$$| $$  \ $$| $$      | $$         | $$  | $$  | $$| $$\  $$$
|  $$$$$$/ /$$$$$$| $$ \  $$|  $$$$$$/| $$$$$$$$| $$$$$$$$   | $$  |  $$$$$$/| $$ \  $$
 \______/ |______/|__/  \__/ \______/ |________/|________/   |__/   \______/ |__/  \__/
 */
/*******************************************************************************************/
/*******************************************************************************************/

/**
	SINGLETONN METHOD - getInstance
	USAGE: DivManager.getInstance();
**/
DivManager.getInstance = function ()
{
    	if (!DivManager._instance) 
        {
        	DivManager._instance = new DivManager();	        	
        }		
		
        return DivManager._instance;
};



