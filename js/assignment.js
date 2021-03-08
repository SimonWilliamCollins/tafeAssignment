/*
Simon Collins 000510965 
8/03/21
Assignment Order Form1

choice validation works by calling the function again when a valid choice was not used.

called function onClick()

    prompt with options
    switch on choice
        case 1 
            open new page google.com
        case 2 
            open new page tafesa.com
        case 3
            open new page youtube.com
        default
            call onClick function again to vailidate choice


 */

function onClick(){
    choice = parseInt(prompt("Which website do you want?\n 1: Google\n 2: Youtube\n 3: Tafe SA", "1"));
    if (choice != null && choice != ''){
        switch (choice) {
            case 1:
                    window.open ("https://www.google.com/", "myWindow", 
                    "status = 1, height = 800, width = 800, resizale = 0");
                    break;
            case 2:
                    window.open ("https://www.youtube.com/", "myWindow", 
                    "status = 1, height = 800, width = 800, resizale = 0");
                    break;
            case 3:
                    window.open ("https://www.tafesa.edu.au/", "myWindow", 
                    "status = 1, height = 800, width = 800, resizale = 0");
                    break;
            default:
                    alert("Please choose 1 2 or 3.")
                    onClick()
            }
    }
    return;
}