//a program thta prints the rainfall record in millimeters for each of the last 10 days
let rainfallrecord = [5,13,10,14,15,16,17,18,19,20,21];

//arranging the array of records in ascending order
for (let i = 0; i < rainfallrecord.length; i++){
    console.log(`Day ${i + 1}: ${rainfallrecord[i]} mm`);
}
