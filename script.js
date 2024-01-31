// Add this JavaScript to your script.js file

function showHospitalInfo() {
    var selectElement = document.getElementById("hospital");
    var selectedHospital = selectElement.value;
    
    // Redirect to the corresponding hospital page
    switch(selectedHospital) {
        case "hospital1":
            window.location.href = "hospital1.html";
            break;
        case "hospital2":
            window.location.href = "hospital2.html";
            break;
        case "hospital3":
            window.location.href = "hospital3.html";
            break;
        default:
            // Default redirection or error handling
            break;
    }
}
