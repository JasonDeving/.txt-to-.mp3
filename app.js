const fs = require('fs');
const { exec } = require('child_process');
const say = require('say');

// Read the text file
const text = fs.readFileSync('input.txt', 'utf8');

// Convert the text to speech using the 'say' package
say.export(text, 'Microsoft Zira Desktop', 1, 'output.wav', (err) => {
    if (err) {
        console.log('Error converting text to speech:', err);
    } else {
        console.log('Text converted to speech successfully.');

        // Convert the WAV file to MP3 using the 'ffmpeg' package
        exec('ffmpeg -i output.wav output.mp3', (err) => {
            if (err) {
                console.log('Error converting WAV to MP3:', err);
            } else {
                console.log('WAV converted to MP3 successfully.');
            }
        });
    }
});