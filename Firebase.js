import vision, { firebase } from '@react-native-firebase/ml-vision';
 
export async function processImage() {
  // Create a local file location in the documents directory of the device
  const localFile = `./image.jpeg`;
  
  // Save the remote image to the device
  await firebase.storage().ref('london-eye.jpg').writeToFile(localFile);
  
  // Using the local file, process the image on the cloud image processor
  const processed = await vision().imageLabelerProcessImage(localFile);
  
  processed.forEach((response) => {
    console.log('Landmark: ', response.landmark);
    console.log('Confidence: ', response.confidence);
  });
}