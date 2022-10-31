function calculateResult() {
    var operators = ["+", "-", "*", "/"]
    var currentInput = document.getElementById("result").value
    document.getElementById("query").value += currentInput;
    var query = document.getElementById("query").value;

    if (operators.includes(query[query.length - 1])) {
        query = query.slice(0, -1);
    }

    query = query.replace("π","3.14159265359")

    try {
        answer = eval(query);
        document.getElementById("query").value+= "=";
        document.getElementById("result").value = answer
    } catch(err) {
        document.getElementById("result").value = "Invalid Expression!"
    }
    setTimeout(function(){ performAnother();}, 500);

}

function performAnother() {
    if (confirm("Would you like to perform another calculation? Press OK to do so.")) {
        fullClear()
    } else {
        window.close();
    }
}

function storeQuery(query) {
    window.sessionStorage.setItem("lastQuery", query);
}

function fetchQuery() {
    return window.sessionStorage.getItem("lastQuery");
}

function updateQueryOld(queryUpdate) {
    var currentQuery = document.getElementById("query").value;
    var updatedQuery = currentQuery + queryUpdate;

    document.getElementById("query").value = updatedQuery
}

function updateQuery(queryChange) {
    var operators = ["+", "-", "*", "/"]
    var currentQuery = document.getElementById("query").value;
    var fetchedInput = document.getElementById("result").value;

    if (fetchedInput == "" && operators.includes(queryChange)) {
        currentQuery = currentQuery.slice(0, -1);
    } 
    
    var updatedQuery = currentQuery + fetchedInput + queryChange;

    document.getElementById("query").value = updatedQuery

    document.getElementById("result").value = ""
}


function conversions(convertType) {

    if (convertType == "c>f") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput * ((9/5) + 32) 
    
    } else if (convertType == "f>c") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = (currentInput - 32) * (5/9)

    } else if (convertType == "x^2") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput * currentInput

    } else if (convertType == "x^3") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput * currentInput * currentInput

    } else if (convertType == "√") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = Math.sqrt(currentInput)

    } else if (convertType == "3√") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = Math.cbrt(currentInput)

    } else if (convertType == "sin") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = Math.sin(currentInput)

    } else if (convertType == "tan") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = Math.tan(currentInput)

    } else if (convertType == "cos") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = Math.cos(currentInput)

    } else if (convertType == "b>d") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = parseInt(currentInput, 2)

    } else if (convertType == "d>b") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = (parseInt(currentInput)).toString(2)

    } else if (convertType == "g>o") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput/28.35

    } else if (convertType == "o>g") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput*28.35

    } else if (convertType == "k>p") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput*2.205

    } else if (convertType == "p>k") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput/2.205

    } else if (convertType == "cm>inc") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput/2.54

    } else if (convertType == "inc>cm") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = currentInput*2.54

    } else if (convertType == "d>h") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = parseInt(currentInput).toString(16).toUpperCase();

    } else if (convertType == "h>d") {
        var currentInput = document.getElementById("result").value
        document.getElementById("result").value = parseInt(currentInput, 16);

    }

}

function updateInput(inputUpdate) {

    var currentInput = document.getElementById("result").value;
    var updatedInput = currentInput + inputUpdate;
 
    document.getElementById("result").value = updatedInput
}

function clearInput() {
    document.getElementById("result").value=document.getElementById("result").value.slice(0,-1);
}

function fullClear() {
    document.getElementById("query").value = ''
    document.getElementById("result").value = ''
}