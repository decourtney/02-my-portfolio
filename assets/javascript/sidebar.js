var mini = true;

function toggleSidebar(){
    if (mini) {
        console.log("opening sidebar");
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("content").style.marginLeft = "250px";
        this.mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("sidebar").style.width = "65px";
        document.getElementById("content").style.marginLeft = "65px";
        this.mini = true;
    }
}