barking = 0;
meowing = 0;
trumpeting = 0;
roar = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1NO3Z7FyW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}



function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255);
        random_number_g = Math.floor(Math.random() * 255);
        random_number_b = Math.floor(Math.random() * 255);

        
        document.getElementById("result_label").innerHTML = 'Detected voice is of - '+results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected dog - '+barking+ " Detected cat - "+meowing+ " Detected lion - "+roar+ " Detected elephant - "+trumpeting;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById('image');

        if(results[0].label == "Barking") 
        {
            img.src = 'dog.gif';
            barking = barking + 1;
        }

        else if(results[0].label == "Cat") 
        {
            img.src = 'meow.gif';
            meowing = meowing + 1;
        }

        else if(results[0].label == "Roar") 
        {
            img.src = 'lion.gif';
            roar = roar + 1;
        }

        else if(results[0].label == "Trumpeting") 
        {
            img.src = 'elephant.gif';
            trumpeting = trumpeting + 1;
        }

        else 
        {
            img.src = 'listen.gif';
        }
    }
}