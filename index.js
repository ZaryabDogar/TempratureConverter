const cel=document.getElementById("celcius");
const far=document.getElementById("faran");
const kel=document.getElementById("kelvin");

function changed(e)
{
// console.log(e)
// console.log(e.target.value)
// console.log(e.target.name)


const currentv=+e.target.value;
// console.log(currentv)
switch (e.target.name) {
    case "celcius":
        far.value=(currentv*1.8+32).toFixed(3)
        kel.value=(currentv+273.32).toFixed(3)
        
        break;
case "faran":
    cel.value=((currentv-32)/1.8).toFixed(3)
    kel.value=((currentv-32)/1.8+273.32).toFixed(3)

        break;
case "kelvin":
    cel.value=(currentv-273.2).toFixed(3)
    far.value=((currentv-273.2)*1.8+32).toFixed(3)

    default:
        break;
}
}