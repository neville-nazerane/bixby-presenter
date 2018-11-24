
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/commanding")
    .configureLogging(signalR.LogLevel.Information)
    .build();

connection.on("commanded", function (command, value) {
    console.log("socket sent:", command, value);
    switch (command) {
        case "Color":
            $(".comp.selected").css("background-color", value);
            break;
    }
});
connection.start();

function AddTool(tool) {
    var comp;
    switch (tool) {
        case "text":
            comp = $("<div>").addClass("comp-text").text("sample");
            break;
        case "circle":
            comp = $("<div>").addClass("comp-circle");
            break;
    }
    comp.addClass("comp").draggable({
        start: function () {
            $(".comp.selected").removeClass("selected");
            $(this).addClass("selected");
        }
    });
    $(".draw-content").append(comp);
}