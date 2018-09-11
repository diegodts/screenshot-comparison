# screenshot-comparison

Tool to take screenshots of pages and compare them with the previous version

## Requirements

### img-diff-js

`npm install img-diff-js`

### puppeteer

`npm install puppeteer puppeteer-pool puppeteer-cluster`

## Usage

1. Create a folder named `old_images`
2. Create a folder named `images` and another folder named `differences`. All in the root folder.
3. Edit the file `screenshot-comparator.js` to write each slug you want to screenshot
4. Run the `screenshot-comparator.js` to take the screenshots
5. Alter the files from `images` to the `old_images` folder
6. After you switch a page to use Niche Builder, run the steps (3) and (4)
7. Run the script `image_comparator.js`
8. If there were differences, they will be saved on the `differences` folder.

## Intended goal

A web based application where users can choose the _slugs_ they want to capture and compare. Please see the wirframe below:

![Wireframe](slugs-comparator.png?raw=true "Wireframe")
