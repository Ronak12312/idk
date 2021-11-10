p1="";
p2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function ts(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='ci'>"
    });
}
console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json",ml);
function ml(){
    console.log("ml");
}
function speak(){
    synth=window.speechSynthesis;
    s1="The first prediction is"+p1;
    s2="The second prediction is"+p2;
    ut=new SpeechSynthesisUtterance(s1+s2);
    synth.speak(ut);
}
function c(){
    img=document.getElementById("ci");
    classifier.classify(img,gi)    
}
function gi(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        p1=results[0].label;
        p2=results[1].label;
        speak();
        if(results[0].label=="happy"){
            document.getElementById("update_emoji1").innerHTML="&#128522;";
        }
        if(results[0].label=="sad"){
            document.getElementById("update_emoji1").innerHTML="&#128532;";
        }
        if(results[0].label=="angry"){
            document.getElementById("update_emoji1").innerHTML="&#128548;";
        }
        if(results[1].label=="happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522;";
        }
        if(results[1].label=="sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532;";
        }
        if(results[1].label=="angry"){
            document.getElementById("update_emoji2").innerHTML="&#1285248;";
        }
    }
}