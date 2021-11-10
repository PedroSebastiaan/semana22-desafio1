$(document).ready(function(){
    $("#searcher").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        const rows = $("#posts tr") 
        for (const row of rows) { 
            const searchables = $(row).find('.searchable').toArray() 
            let found = false;
            for (const searchableItem of searchables) {
                if ($(searchableItem).text().toLowerCase().indexOf(value) > -1) { 
                found = true
                break;
                }
            }
            $(row).toggle(found)
            }
    });
});