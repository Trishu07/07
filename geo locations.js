function getloc(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showpos,showerr)
    }else{
        console.log("not supported");
    }
}
function showpos(position){
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    console.log("latitude= "+lat+"longitude ="+lon);
}
function showerr(error){
    console.log(error);
}
