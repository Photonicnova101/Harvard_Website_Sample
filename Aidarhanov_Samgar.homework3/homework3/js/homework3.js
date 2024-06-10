/* homework3.js */
"use strict";

// First we do a self-invoking function that contains everything - there will be nothing
//  exposed to the global scope.
(function () {
    
    window.onload = searchLocalStorage();

    function Entry(name, which, favCard) {
        this.name = name;
        this.which = which;
        this.favCard = favCard;
    }

    var button = document.getElementById("doit");
    button.onclick = function(){
        /*  This function will run when the user clicks on the
         *  Save button.  We're going to do several things when this function
         *  runs:
         *  1) Get the values from the form. We have done this part for you
         *  2) Create a new data object that contains the information from the form. This could be
         *     a constructor funtion or class constructor that takes each of the values as its arguments, or a simple
         *     JSON object (an object literal, more or less).
         *  3) Write this data object to the page. You'll do this by calling writeRowToPage() and
         *     passing your data object as a parameter.  We have provided a sample of this
         *     function for you, though you may have to modify/complete it so that it works
         *     with your data structure.
         *  4) Add this new data object to an array that's keeping the entire list of entries so far
         *  5) Store your list (array) to localStorage.  Remember that localStorage stores only
         *     strings, so you'll need to stringify your object. Remember, too, that when you
         *     write to localStorage, you can't add to or modify what's already there - you can only
         *     replace it completely, so you'll need to save the whole array to localStorage each time
         *     you update it.
         *
         *     */

        //Step #1 - we get values from the form
        var name = document.getElementById("name").value;
        var which = document.getElementById("which").value;
        var favCard = document.getElementById("favorite Card").value;

        // Step #2 - you will create a new data object
        
        var data = { name, which, favCard };
        
        // Step #3 - call on writeRowtoPage() to write your new data object to the page

        writeRowToPage(data,output);
        // Step#4 - add your new object to an array that keeps them all

        Storage = [];
        Storage.push(data);
        // Step #5 Store your array in localStorage (preserving data
        //          that's already in there from prior submissions!)
        //    Remember that localStorage only stores strings, so you'll want to
        //      make your array a property of a JSON object, and call JSON.stringify() on
        //      that object before you push it to localStorage.
        window.localStorage.setItem("Storage", JSON.stringify(Storage));

    }

    /* This function accepts two arguments -
     *    @dataObject: your data object representing a single
     *                 submission of the data form, which corresponds
     *                 to one row in the table
     *    @element:   the element on the page to which to write the output
     *
     *    The function assembles a string of HTML, using the data from
     *    dataObject.  Once the string is complete, it is appended to the
     *    page using innerHTML.
     *
     *    This has been coded to work with a sample data object that contains
     *    properties for name, addr, and email. Your data object may be different,
     *    in which case you will need to change this function accordingly.
     *
     * */
    function writeRowToPage(dataObject, element) {
        var s = "<div class=\"info\">";

        s+='<div class="nameDiv">';
        if (dataObject.name !== 'undefined') {
            s+=dataObject.name;
        }
        s+= '</div><div class="whichDiv">';
        if (dataObject.which !== 'undefined') {
            s+=dataObject.which;
        }
        s+= '</div><div class="favCardDiv">';
        if (dataObject.favCard !== 'undefined') {
            s+=dataObject.favCard;
        }
        s+= '</div></div>';

        element.innerHTML += s;
    }


    /* Step #5, Finally, write a function or other code that will, upon page load,
     * look in localStorage for any existing data, recreate the array of data objects from it, and
     * write those data objects to the page using writeRowToPage().  This way
     * any time the user revisits this page, they'll see what was previously entered (provided
     * that they use the same browser on the same computer!)
     *
     * Generally, you'll pull the array from localStorage, then iterate over it, calling 
     * writeRowToPage on each element (each data object) in the array.
     * */
    
    function searchLocalStorage() {
        var localMemory = window.localStorage.getItem("Storage");
        var parsedLocalMemory = JSON.parse(localMemory);

        if (parsedLocalMemory != null) {
            for (let i = 0; i <= parsedLocalMemory.length; i++) {
                var previousEntries = new Entry(parsedLocalMemory[i].name, parsedLocalMemory[i].which, parsedLocalMemory[i].favCard);
                writeRowToPage(previousEntries, output);
            }
        }
    }

})();
