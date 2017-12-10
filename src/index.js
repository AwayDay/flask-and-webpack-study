var $ = require("jquery")

$("#member").on("change", function(e) {
    console.log($(e.currentTarget).val());
});