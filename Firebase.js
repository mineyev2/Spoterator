import vision, { firebase } from '@react-native-firebase/ml-vision';
import {Platform, StyleSheet} from 'react-native';
 
export async function processImage(source) {
  console.log("Source: " + source);
  // Create a local file location in the documents directory of the device
  const path = '/Users/romanmineyev/Spoterator/images/car.jpg';
  // Using the local file, process the image on the cloud image processor
  console.log("about to run vision detection");
  console.log("Path: " + source.uri);
  var processed = await vision().imageLabelerProcessImage((Platform.OS === 'ios' ? source.uri : source.path), {
    confidenceThreshold: 0.5,
  });
  
  console.log("ran the vision detection");
  console.log(processed);
}
