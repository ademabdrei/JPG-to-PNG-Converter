
# JPG to PNG Converter

A simple web-based tool that allows users to convert JPG images to PNG format.

## Demo
You can try the JPG to PNG Converter live at: [https://jpg-to-png-converters.netlify.app](https://jpg-to-png-converters.netlify.app)

## Features
- Upload a JPG image file
- Automatically converts the image to PNG format
- Provides a download link for the converted PNG image

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Click the "Upload JPG" button to open a file selection dialog.
2. Select a JPG image file from your local device.
3. Once the file is selected, the converter will automatically process the image and generate a download link for the PNG version.
4. Click the "Download PNG" link to save the converted image to your device.

## Code Explanation
The code consists of an HTML structure, a CSS stylesheet, and a JavaScript file that handles the image conversion functionality.

### HTML Structure
The HTML file sets up the basic structure of the webpage, including:
- A container div to hold the content
- A button to trigger the file upload
- A hidden file input element to handle the file selection
- A download link for the converted PNG image

### CSS Styling
The CSS file styles the webpage, including:
- Setting the font and background colors
- Centering the content on the page
- Styling the button and download link

### JavaScript Functionality
The JavaScript code handles the image conversion functionality:

1. Event listeners:
   - The "Upload JPG" button click event triggers the file input click event
   - The file input change event calls the `convertToPNG()` function when a file is selected

2. The `convertToPNG()` function:
   - Checks if the selected file is a JPG image
   - Uses the `FileReader` API to read the image data as a data URL
   - Creates a new `Image` object and waits for it to load
   - Creates a canvas element and draws the image onto it
   - Converts the canvas to a PNG blob using the `toBlob()` method
   - Creates a download URL for the PNG blob and updates the download link

The JavaScript code automatically handles the conversion process and provides a download link for the converted PNG image.

## Getting Started
To use the JPG to PNG Converter, simply copy the HTML, CSS, and JavaScript code provided and save them in your project directory. You can then open the HTML file in a web browser to start using the application.

## Contributions
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request on the [GitHub repository](https://github.com/ademabdrei/JPG-to-PNG-Converter).
