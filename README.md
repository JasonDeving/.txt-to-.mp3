https://www.youtube.com/watch?v=1wkTnrfCNoE

# Text to Speech Converter
This is a simple Node.js application that converts text in a specified text file to speech and saves the output as an MP3 file. It uses the fs, child_process, and say packages for file reading, executing shell commands, and text-to-speech conversion, respectively.

Getting Started
Clone this repository to your local machine.

bash
```
git clone https://github.com/yourusername/text-to-speech-converter.git
```
Navigate to the project directory.

bash
```
cd text-to-speech-converter
```
Install dependencies.

bash
```
npm install
```
Create a text file named input.txt in the project directory and add the text you want to convert to speech.

Run the application.

bash
```
node app.js
```
Once the conversion is complete, you should see two log messages in the console indicating whether the text was successfully converted to speech and whether the WAV file was successfully converted to MP3.

## Text converted to speech successfully.
```
WAV converted to MP3 successfully.
You can find the output MP3 file in the project directory with the name output.mp3.
```

## Configuration
By default, the application uses the Microsoft Zira Desktop voice for speech synthesis. You can change the voice and other settings by modifying the parameters in the say.export() function. You can find more information on the available options in the official say package documentation.


Usage
To customize the voice and speed of the speech, you can modify the say.export() function parameters in the index.js file:

javascript
```js
say.export(text, 'Microsoft Zira Desktop', 1, 'output.wav', (err) => {
```

- text - The text to be converted to speech.
- 'Microsoft Zira Desktop' - The name of the voice to use for the speech. You can find a list of available voices by running the command say.getInstalledVoices().
- 1 - The speed of the speech. 1 is the normal speed.
- 'output.wav' - The name of the WAV file that will be generated.
- (err) => { ... } - The callback function that will be called after the speech has been generated.

Dependencies
- fs - Node.js file system module for reading the input file.
- exec - Node.js child process module for running the 'ffmpeg' command.
- say - Node.js text-to-speech package for generating speech from text.

## Troubleshooting
If you encounter any issues or errors, please feel free to submit an issue on GitHub.
