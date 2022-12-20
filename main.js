Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});
var camera= document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"' >"
    });
}
console.log(ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1rv1pp4D-/model.json",Model_Loaded);
function Model_Loaded(){
    console.log("Model has been Loaded")
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}