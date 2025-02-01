// Feature list
const features = [
    { id: 'arrays', name: 'Array Methods', func: testArrayMethods },
    { id: 'async', name: 'Async/Await', func: testAsyncAwait },
    { id: 'data', name: 'Data Manipulation', func: testDataManipulation },
    { id: 'strings', name: 'String Methods', func: testStringMethods },
    { id: 'date', name: 'Date Objects', func: testDateObjects },
    { id: 'regex', name: 'Regular Expressions', func: testRegularExpressions },
    { id: 'geo', name: 'Geolocation', func: testGeolocation },
    { id: 'localStorage', name: 'Local Storage', func: testLocalStorage },
    { id: 'sessionStorage', name: 'Session Storage', func: testSessionStorage },
    { id: 'cache', name: 'Cache API', func: testCacheAPI },
    { id: 'file', name: 'File Handling', func: testFileHandling },
    { id: 'setMap', name: 'Set and Map', func: testSetMap },
    { id: 'weakCollections', name: 'WeakMap/WeakSet', func: testWeakCollections },
    { id: 'generators', name: 'Generators', func: testGeneratorsWrapper },
    { id: 'destructuring', name: 'Destructuring', func: testDestructuring },
    { id: 'spread', name: 'Spread Operator', func: testSpreadOperator },
    { id: 'template', name: 'Template Literals', func: testTemplateLiterals },
    { id: 'modules', name: 'Modules', func: testModules },
    { id: 'proxy', name: 'Proxy and Reflect', func: testProxyReflect },
    { id: 'symbols', name: 'Symbols', func: testSymbols },
    { id: 'iterators', name: 'Iterators', func: testIterators },
    { id: 'closures', name: 'Closures', func: testClosures },
    { id: 'promises', name: 'Promises', func: testPromises },
    { id: 'objects', name: 'Object Methods', func: testObjectMethods },
    { id: 'json', name: 'JSON Methods', func: testJSONMethods },
    { id: 'rest', name: 'Rest Operator', func: testRestOperator },
    { id: 'class', name: 'Class Features', func: testClassFeatures },
    { id: 'math', name: 'Math Operations', func: testMathOperations },
    { id: 'fetch', name: 'Fetch API', func: testFetchAPI },
    { id: 'observer', name: 'Observers', func: testObservers },
    { id: 'websocket', name: 'WebSocket', func: testWebSocket },
    { id: 'microphone', name: 'Microphone', func: testMicrophone },
    { id: 'camera', name: 'Camera', func: testCamera },
    { id: 'clipboard', name: 'Clipboard Access', func: testClipboard },
    { id: 'notifications', name: 'Notifications', func: testNotifications },
    { id: 'worker', name: 'Web Workers', func: testWebWorker },
    { id: 'serviceWorker', name: 'Service Workers', func: testServiceWorker },
    { id: 'indexedDB', name: 'IndexedDB', func: testIndexedDB },
    { id: 'canvas', name: 'Canvas API', func: testCanvasAPI },
    { id: 'performance', name: 'Performance API', func: testPerformanceAPI },
    { id: 'deviceOrientation', name: 'Device Orientation', func: testDeviceOrientation },
    { id: 'fullScreen', name: 'Full Screen API', func: testFullScreenAPI },
    { id: 'cookie', name: 'Cookie API', func: testCookieAPI },
{ id: 'fillLocalStorage', name: 'Fill Local Storage', func: testFillLocalStorage }
];

// Function to create feature sections
function createFeatureSections() {
    const container = document.getElementById('feature-sections');
    features.forEach(feature => {
        const section = document.createElement('div');
        section.className = 'section';
        
        const title = document.createElement('h2');
        title.innerText = feature.name;
        section.appendChild(title);
        
        const button = document.createElement('button');
        button.innerText = `Test ${feature.name}`;
        button.onclick = async () => {
            const output = document.createElement('div');
            output.className = 'output';
            output.innerText = await feature.func();
            section.appendChild(output);
        };
        section.appendChild(button);
        
        container.appendChild(section);
    });
}

// Function to test all features
async function testAllFeatures() {
    const container = document.getElementById('feature-sections');
    container.innerHTML = ''; // Clear previous results
    for (const feature of features) {
        const section = document.createElement('div');
        section.className = 'section';
        
        const title = document.createElement('h2');
        title.innerText = feature.name;
        section.appendChild(title);
        
        const output = document.createElement('div');
        output.className = 'output';
        output.innerText = await feature.func();
        section.appendChild(output);
        
        container.appendChild(section);
    }
}

// Array Methods
function testArrayMethods() {
    const arr = [1, 2, 3, 4, 5];
    const doubled = arr.map(x => x * 2);
    return `Original: ${arr.join(', ')} | Doubled: ${doubled.join(', ')}`;
}

// Async/Await
async function testAsyncAwait() {
    const fetchData = async () => {
        return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 1000));
    };
    const result = await fetchData();
    return result;
}

// Data Manipulation
function testDataManipulation() {
    const data = [{ id: 1, value: 'A' }, { id: 2, value: 'B' }, { id: 3, value: 'C' }];
    const values = data.map(item => item.value);
    return `Values: ${values.join(', ')}`;
}

// String Methods
function testStringMethods() {
    const str = 'Hello, World!';
    const upperStr = str.toUpperCase();
    return `Original: ${str} | Uppercase: ${upperStr}`;
}

// Date Objects
function testDateObjects() {
    const now = new Date();
    return `Current Date and Time: ${now.toString()}`;
}

// Regular Expressions
function testRegularExpressions() {
    const regex = /\d+/g;
    const str = 'There are 123 apples and 456 oranges.';
    const matches = str.match(regex);
    return `Matches: ${matches.join(', ')}`;
}

// Geolocation
function testGeolocation() {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            }, error => {
                resolve(`Geolocation error: ${error.message}`);
            });
        } else {
            resolve('Geolocation: Not supported');
        }
    });
}

// Local Storage
function testLocalStorage() {
    localStorage.setItem('test', 'Local Storage Test');
    return `Local Storage: ${localStorage.getItem('test')}`;
}

// Session Storage
function testSessionStorage() {
    sessionStorage.setItem('test', 'Session Storage Test');
    return `Session Storage: ${sessionStorage.getItem('test')}`;
}

// Cache API
async function testCacheAPI() {
    if ('caches' in window) {
        const cache = await caches.open('test-cache');
        await cache.add('/');
        return 'Cache API: Entry added';
    } else {
        return 'Cache API: Not supported';
    }
}

// File Handling
function testFileHandling() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    return new Promise((resolve) => {
        fileInput.onchange = event => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => resolve(`File content: ${e.target.result}`);
            reader.readAsText(file);
        };
        fileInput.click();
    });
}

// Set and Map
function testSetMap() {
    const set = new Set([1, 2, 3]);
    const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
    return `Set has 2: ${set.has(2)} | Map get key1: ${map.get('key1')}`;
}

// WeakMap/WeakSet
function testWeakCollections() {
    const weakMap = new WeakMap();
    const obj = {};
    weakMap.set(obj, 'value');
    return `WeakMap get: ${weakMap.get(obj)}`;
}

// Generators
function* testGenerators() {
    yield 1;
    yield 2;
    yield 3;
}

function testGeneratorsWrapper() {
    const generator = testGenerators();
    const values = [];
    for (const value of generator) {
        values.push(value);
    }
    return `Generator values: ${values.join(', ')}`;
}

// Destructuring
function testDestructuring() {
    const [a, b] = [1, 2];
    return `Destructured values: a = ${a}, b = ${b}`;
}

// Spread Operator
function testSpreadOperator() {
    const arr = [1, 2, 3];
    const newArr = [...arr, 4, 5];
    return `Spread array: ${newArr.join(', ')}`;
}

// Template Literals
function testTemplateLiterals() {
    const name = 'World';
    return `Hello, ${name}!`;
}

// Modules
function testModules() {
    return 'Modules: Not implemented in this context';
}

// Proxy and Reflect
function testProxyReflect() {
    const target = { message: 'Hello, World!' };
    const handler = {
        get: (obj, prop) => (prop in obj ? obj[prop] : 'Not Found')
    };
    const proxy = new Proxy(target, handler);
    return `Proxy message: ${proxy.message} | Proxy missing: ${proxy.missing}`;
}

// Symbols
function testSymbols() {
    const sym = Symbol('test');
    const obj = { [sym]: 'Symbol value' };
    return `Symbol value: ${obj[sym]}`;
}

// Iterators
function testIterators() {
    const iterable = [1, 2, 3];
    const iterator = iterable[Symbol.iterator]();
    const values = [];
    let result = iterator.next();
    while (!result.done) {
        values.push(result.value);
        result = iterator.next();
    }
    return `Iterator values: ${values.join(', ')}`;
}

// Closures
function testClosures() {
    function createCounter() {
        let count = 0;
        return function() {
            return ++count;
        };
    }
    const counter = createCounter();
    return `Closure count: ${counter()}, ${counter()}, ${counter()}`;
}

// Promises
function testPromises() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Promise resolved'), 1000);
    }).then(result => result);
}

// Object Methods
function testObjectMethods() {
    const obj = { a: 1, b: 2 };
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const entries = Object.entries(obj);
    return `Keys: ${keys.join(', ')} | Values: ${values.join(', ')} | Entries: ${entries.join(', ')}`;
}

// JSON Methods
function testJSONMethods() {
    const obj = { a: 1, b: 2 };
    const jsonString = JSON.stringify(obj);
    const parsedObj = JSON.parse(jsonString);
    return `JSON string: ${jsonString} | Parsed object: ${JSON.stringify(parsedObj)}`;
}

// Rest Operator
function testRestOperator(...args) {
    return `Rest operator values: ${args.join(', ')}`;
}

// Class Features
function testClassFeatures() {
    class Person {
        constructor(name) {
            this.name = name;
        }
        greet() {
            return `Hello, ${this.name}`;
        }
    }
    const person = new Person('World');
    return person.greet();
}

// Math Operations
function testMathOperations() {
    Math.sum = (...args) => args.reduce((a, b) => a + b, 0);
    return `Sum: ${Math.sum(1, 2, 3, 4, 5)}`;
}

// Fetch API
async function testFetchAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        return `Fetch API: ${JSON.stringify(data)}`;
    } catch (error) {
        return `Fetch API error: ${error}`;
    }
}

// Observers
function testObservers() {
    return new Promise((resolve) => {
        const div = document.createElement('div');
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                resolve(`Mutation type: ${mutation.type}`);
            });
        });
        observer.observe(div, { attributes: true });
        div.setAttribute('data-test', 'test');
    });
}

// WebSocket
function testWebSocket() {
    return new Promise((resolve) => {
        const socket = new WebSocket('wss://echo.websocket.org');
        socket.onopen = () => socket.send('Hello, World!');
        socket.onmessage = event => resolve(`WebSocket message: ${event.data}`);
    });
}

// Microphone
function testMicrophone() {
    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const audioTracks = stream.getAudioTracks();
                resolve(`Microphone: Access granted with ${audioTracks.length} audio tracks`);
            })
            .catch(error => {
                reject(`Microphone: Access denied - ${error.message}`);
            });
    });
}

// Camera
function testCamera() {
    return new Promise((resolve, reject) => {
        const videoElement = document.createElement('video');
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoElement.srcObject = stream;
                videoElement.play();
                resolve('Camera: Access granted');
                // Append video element to the body or a specific section
                document.body.appendChild(videoElement);
            })
            .catch(error => {
                reject(`Camera: Access denied - ${error.message}`);
            });
    });
}

// Clipboard Access
function testClipboard() {
    return navigator.clipboard.readText()
        .then(text => `Clipboard content: ${text}`)
        .catch(err => `Clipboard error: ${err}`);
}

// Notifications
function testNotifications() {
    if (!("Notification" in window)) {
        return "This browser does not support desktop notifications.";
    }
    if (Notification.permission === "granted") {
        new Notification("Hi there!");
        return "Notification sent.";
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Hi there!");
                return "Notification sent.";
            }
        });
    }
    return "Notification permission denied.";
}

// Web Workers
function testWebWorker() {
    if (window.Worker) {
        const worker = new Worker(URL.createObjectURL(new Blob([`
            self.onmessage = function(e) {
                self.postMessage('Worker received: ' + e.data);
            };
        `], { type: 'application/javascript' })));
        
        worker.onmessage = function(e) {
            alert('Message from Worker: ' + e.data);
        };
        
        worker.postMessage('Hello, Worker!');
        return 'Web Worker: Message sent to worker';
    } else {
        return 'Web Worker: Not supported';
    }
}

// Service Workers
async function testServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            return `Service Worker: Registered with scope ${registration.scope}`;
        } catch (error) {
            return `Service Worker registration failed: ${error}`;
        }
    } else {
        return 'Service Worker: Not supported';
    }
}

// IndexedDB
function testIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('testDB', 1);

        request.onerror = function(event) {
            reject('IndexedDB: Failed to open database');
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(['store'], 'readwrite');
            const objectStore = transaction.objectStore('store');
            objectStore.add({ id: '1', name: 'Test' });

            transaction.oncomplete = function() {
                resolve('IndexedDB: Data added');
            };

            transaction.onerror = function(event) {
                reject('IndexedDB: Failed to add data');
            };
        };

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            db.createObjectStore('store', { keyPath: 'id' });
        };
    });
}

// Canvas API
function testCanvasAPI() {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext('2d');

    // Draw a red rectangle
    context.fillStyle = 'red';
    context.fillRect(10, 10, 100, 100);

    // Append canvas to the body or a specific section
    document.body.appendChild(canvas);

    return 'Canvas API: Red rectangle drawn';
}
// Performance API
function testPerformanceAPI() {
    const measureName = 'testMeasure';
    performance.mark('start');
    for (let i = 0; i < 1000000; i++) {} // Dummy loop for performance measurement
    performance.mark('end');
    performance.measure(measureName, 'start', 'end');
    const measure = performance.getEntriesByName(measureName)[0];
    return `Performance API: Measure duration is ${measure.duration}ms`;
}

// Device Orientation
function testDeviceOrientation() {
    if ('DeviceOrientationEvent' in window) {
        window.addEventListener('deviceorientation', event => {
            const { alpha, beta, gamma } = event;
            alert(`Device Orientation: Alpha=${alpha}, Beta=${beta}, Gamma=${gamma}`);
        });
        return 'Device Orientation: Event listener added';
    } else {
        return 'Device Orientation: Not supported';
    }
}

// Full Screen API
function testFullScreenAPI() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        return 'Full Screen API: Entered full screen mode';
    } else {
        return 'Full Screen API: Not supported';
    }
}
JavaScript
// Cookie API
function testCookieAPI() {
    // Set a cookie
    document.cookie = "testCookie=Hello; max-age=3600"; // Expires in 1 hour
    // Get all cookies
    const cookies = document.cookie;
    return `Cookies: ${cookies}`;
}

// Fill Local Storage
function testFillLocalStorage() {
    try {
        let i = 0;
        const testValue = 'a'.repeat(1024 * 1024); // 1 MB of data
        while (true) {
            localStorage.setItem('test' + i, testValue);
            i++;
        }
    } catch (e) {
        return `Local Storage filled. Total items stored: ${localStorage.length}`;
    }
}

// Initialize feature sections on page load
createFeatureSections();