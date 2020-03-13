import vision, { firebase } from '@react-native-firebase/ml-vision';
import {Platform, StyleSheet} from 'react-native';
 
export async function processImage(source) {
  // Create a local file location in the documents directory of the device
  const path = '/Users/romanmineyev/Spoterator/images/car.jpg';
  // Using the local file, process the image on the cloud image processor
  //console.log("about to run vision detection");
  //console.log("Path: " + Platform.OS === 'ios' ? source.uri : source.path);
  var wantedThreshold = 0.5;
  var processed = await vision().imageLabelerProcessImage((Platform.OS === 'ios' ? source.uri : source.path), {
    confidenceThreshold: wantedThreshold,
  });

  //android displays everything regardless of confidenceThreshold so I'm gonna fix that here
  //maybe there will be a fix sometime soon
  var newProcessed = [];
  if(Platform.OS === 'android') {
    console.log('android device detected');
    for(i = 0; i < processed.length; i++) {
      if(processed[i].confidence >= wantedThreshold) {
        console.log("guess: " + processed[i].confidence);
        newProcessed.push(processed[i]);
      }
    }
  }
  console.log(Platform.OS === 'ios' ? processed : newProcessed);
  return(Platform.OS === 'ios' ? processed : newProcessed);
}
