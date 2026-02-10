const SPEED = 2.9978*10**8;

function calculateRelativisticKineticEnergy(){
    let mass = parseFloat(document.getElementById("input-mass").value);
    let velocity = parseFloat(document.getElementById("input-velocity").value);
    let result = (mass*SPEED**2) / Math.sqrt(1 / (1 - (velocity**2/SPEED**2)));
    
    let output = `The relativistic kinetic energy is ${result}`;
    document.getElementById("result-energy").innerText = output;

}