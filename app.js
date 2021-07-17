//define a function that will create metadata for given sample
function buildMetadata(selection) {

    // Read the json data
    d3.json("Aviation.json").then((sampleData) => {
        
    //filter & parse data to return sample data
    var parsedData=sampleData;
    var sample = parsedData.filter(accident => accident.ACCIDENT_NUMBER == selection);
    
    //update metadata location
    var metadata = d3.select("#sample-metadata").html("");
    
    var exceptions = ["LATITUDE", "LONGITUDE", "ACCIDENT_NUMBER", "MODEL"];

    Object.entries(sample[0]).forEach(([key,value]) => {
       // if(key !== "LATITUDE")
       if(!exceptions.includes(key))
        {
             metadata.append("p").text(`${key}: ${value}`);
        }
    });

    console.log(metadata)
    });
}

//Build charts
function buildCharts(selection) 
{

    //read json file
    d3.json("Aviation.json").then((sampleData) => {
        console.log("sampleData");
        console.log(sampleData);

        //parse and filter data to get sample's OTU data
        var  parsedData = sampleData.samples;
        console.log(parsedData);

        var sampleDict = parsedData.filter(item => item.id == selection)[0];
        console.log("sampleDict");
        console.log(sampleDict);
    });
}
    

//page load function
function init() {

    //read json data
    d3.json("Aviation.json").then((sampleData) => {

        //filter and parse for sample names
        var parsedData = sampleData;
        //console.log(parsedData);

        //add dropdown menu
        var dropdownMenu= d3.select("#selDataset");

        parsedData.forEach( (accident)=> {

            dropdownMenu.append("option").property("value", accident.ACCIDENT_NUMBER).text(accident.ACCIDENT_NUMBER);
       })

    

       //build data and charts
       buildCharts(parsedData[0]);
       buildMetadata(parsedData[0]);
       

    });
}

function optionChanged(newSelection) {
    buildMetadata(newSelection);
    buildCharts(newSelection);
}

init();
