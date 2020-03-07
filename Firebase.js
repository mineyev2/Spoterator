import vision, { firebase } from '@react-native-firebase/ml-vision';
 
export async function processImage(source) {
  // Create a local file location in the documents directory of the device
  const path = '/Users/romanmineyev/Spoterator/images/car.jpg';
  // Using the local file, process the image on the cloud image processor
  console.log("about to run vision detection");
  var processed = await vision().imageLabelerProcessImage(source);
  console.log("ran the vision detection");
  console.log(processed);
}
