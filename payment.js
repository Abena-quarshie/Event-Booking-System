document.addEventListener("DOMContentLoaded", function() {
    const paymentMethodSelect = document.getElementById("paymentMethod");
    const momoDetails = document.getElementById("momoDetails");
    const bankDetails = document.getElementById("bankDetails");

    paymentMethodSelect.addEventListener("change", function() {
        const selectedValue = paymentMethodSelect.value;

        // Hide both details sections initially
        momoDetails.classList.add("hidden");
        bankDetails.classList.add("hidden");

        // Show the relevant section based on selection
        if (selectedValue === "momo") {
            momoDetails.classList.remove("hidden");
        } else if (selectedValue === "bank") {
            bankDetails.classList.remove("hidden");
        }
    });
});
