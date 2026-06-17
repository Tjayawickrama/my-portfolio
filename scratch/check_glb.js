const THREE = require("three");
const { GLTFLoader } = require("three/examples/jsm/loaders/GLTFLoader");
const fs = require("fs");
const { Blob } = require("buffer");

// This is tricky because GLTFLoader expects a browser environment (Blob, URL, etc)
// I might have to use a simpler way to parse the GLB or use the browser to check.

console.log("Checking GLB names...");
