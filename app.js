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
    { id: 'fillLocalStorage', name: 'Fill Local Storage', func: testFillLocalStorage },
    { id: 'indexedDB', name: 'IndexedDB', func: testIndexedDB },
    { id: 'battery', name: 'Battery API', func: testBatteryAPI },
    { id: 'vibration', name: 'Vibration API', func: testVibrationAPI },
    { id: 'network', name: 'Network Information API', func: testNetworkAPI },
    { id: 'speechRecognition', name: 'Speech Recognition API', func: testSpeechRecognitionAPI },
    { id: 'speechSynthesis', name: 'Speech Synthesis API', func: testSpeechSynthesisAPI },
    { id: 'gamepad', name: 'Gamepad API', func: testGamepadAPI },
    { id: 'webRTC', name: 'WebRTC API', func: testWebRTCAPI },
    { id: 'webAssembly', name: 'WebAssembly', func: testWebAssembly },
    { id: 'bluetooth', name: 'Web Bluetooth API', func: testWebBluetoothAPI },
    { id: 'usb', name: 'Web USB API', func: testWebUSBAPI },
    { id: 'gyroscope', name: 'Gyroscope API', func: testGyroscopeAPI },
    { id: 'accelerometer', name: 'Accelerometer API', func: testAccelerometerAPI },
    { id: 'ambientLight', name: 'Ambient Light API', func: testAmbientLightAPI },
    { id: 'magnetometer', name: 'Magnetometer API', func: testMagnetometerAPI },
    { id: 'proximity', name: 'Proximity API', func: testProximityAPI },
    { id: 'webShare', name: 'Web Share API', func: testWebShareAPI },
    { id: 'pageVisibility', name: 'Page Visibility API', func: testPageVisibilityAPI },
    { id: 'screenOrientation', name: 'Screen Orientation API', func: testScreenOrientationAPI },
    { id: 'resizeObserver', name: 'Resize Observer API', func: testResizeObserverAPI },
    { id: 'mutationObserver', name: 'Mutation Observer API', func: testMutationObserverAPI },
    { id: 'intersectionObserver', name: 'Intersection Observer API', func: testIntersectionObserverAPI },
    { id: 'performanceObserver', name: 'Performance Observer API', func: testPerformanceObserverAPI },
    { id: 'paymentRequest', name: 'Payment Request API', func: testPaymentRequestAPI },
    { id: 'deviceMemory', name: 'Device Memory API', func: testDeviceMemoryAPI },
    { id: 'pointerLock', name: 'Pointer Lock API', func: testPointerLockAPI },
    { id: 'webAudio', name: 'Web Audio API', func: testWebAudioAPI },
    { id: 'webAnimations', name: 'Web Animations API', func: testWebAnimationsAPI },
    { id: 'dragAndDrop', name: 'Drag and Drop API', func: testDragAndDropAPI },
    { id: 'mediaDevices', name: 'Media Devices API', func: testMediaDevicesAPI },
    { id: 'screenCapture', name: 'Screen Capture API', func: testScreenCaptureAPI },
    { id: 'mediaSession', name: 'Media Session API', func: testMediaSessionAPI },
    { id: 'fullscreenChange', name: 'Fullscreen Change Event', func: testFullscreenChangeEvent },
    { id: 'deviceOrientationAbsolute', name: 'Device Orientation Absolute', func: testDeviceOrientationAbsolute },
    { id: 'deviceMotion', name: 'Device Motion API', func: testDeviceMotionAPI },
    { id: 'onlineOffline', name: 'Online/Offline Events', func: testOnlineOfflineEvents },
    { id: 'pageLoad', name: 'Page Load Event', func: testPageLoadEvent },
    { id: 'beforeUnload', name: 'Before Unload Event', func: testBeforeUnloadEvent },
    { id: 'storage', name: 'Storage Event', func: testStorageEvent },
    { id: 'crypto', name: 'Crypto API', func: testCryptoAPI },
    { id: 'quota', name: 'Quota Management API', func: testQuotaManagementAPI },
    { id: 'contactPicker', name: 'Contact Picker API', func: testContactPickerAPI },
    { id: 'wakeLock', name: 'Wake Lock API', func: testWakeLockAPI },
    { id: 'backgroundSync', name: 'Background Sync API', func: testBackgroundSyncAPI },
    { id: 'periodicSync', name: 'Periodic Sync API', func: testPeriodicSyncAPI },
    { id: 'sensor', name: 'Generic Sensor API', func: testSensorAPI },
    { id: 'credentialManagement', name: 'Credential Management API', func: testCredentialManagementAPI },
    { id: 'visibilityChange', name: 'Visibility Change Event', func: testVisibilityChangeEvent },
    { id: 'scrollRestoration', name: 'Scroll Restoration API', func: testScrollRestorationAPI },
    { id: 'focus', name: 'Focus and Blur Events', func: testFocusBlurEvents },
    { id: 'pointerEvents', name: 'Pointer Events', func: testPointerEvents },
    { id: 'popState', name: 'Pop State Event', func: testPopStateEvent }
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

// Battery API
async function testBatteryAPI() {
    if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        return `Battery API: Level=${battery.level * 100}%, Charging=${battery.charging}`;
    } else {
        return 'Battery API: Not supported';
    }
}

// Vibration API
function testVibrationAPI() {
    if ('vibrate' in navigator) {
        navigator.vibrate(200);
        return 'Vibration API: Device vibrated for 200ms';
    } else {
        return 'Vibration API: Not supported';
    }
}

// Network Information API
function testNetworkAPI() {
    if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return `Network Information API: Type=${connection.effectiveType}, Downlink=${connection.downlink}Mbps`;
    } else {
        return 'Network Information API: Not supported';
    }
}
// Speech Recognition API
function testSpeechRecognitionAPI() {
    return new Promise((resolve, reject) => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.onstart = () => resolve('Speech Recognition API: Listening started');
            recognition.onspeechend = () => resolve('Speech Recognition API: Listening stopped');
            recognition.onerror = (event) => reject(`Speech Recognition API error: ${event.error}`);
            recognition.start();
        } else {
            reject('Speech Recognition API: Not supported');
        }
    });
}

// Speech Synthesis API
function testSpeechSynthesisAPI() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Hello, world!');
        speechSynthesis.speak(utterance);
        return 'Speech Synthesis API: Speaking "Hello, world!"';
    } else {
        return 'Speech Synthesis API: Not supported';
    }
}

// Gamepad API
function testGamepadAPI() {
    if ('getGamepads' in navigator) {
        window.addEventListener('gamepadconnected', event => {
            const gp = navigator.getGamepads()[event.gamepad.index];
            alert(`Gamepad connected: ${gp.id}`);
        });
        window.addEventListener('gamepaddisconnected', event => {
            alert(`Gamepad disconnected: ${event.gamepad.id}`);
        });
        return 'Gamepad API: Event listeners added for gamepad connection and disconnection';
    } else {
        return 'Gamepad API: Not supported';
    }
}

// WebRTC API
function testWebRTCAPI() {
    if ('RTCPeerConnection' in window) {
        const pc = new RTCPeerConnection();
        return 'WebRTC API: RTCPeerConnection created';
    } else {
        return 'WebRTC API: Not supported';
    }
}

// WebAssembly
function testWebAssembly() {
    if ('WebAssembly' in window) {
        return 'WebAssembly: Supported';
    } else {
        return 'WebAssembly: Not supported';
    }
}

// Web Bluetooth API
function testWebBluetoothAPI() {
    if (navigator.bluetooth) {
        return 'Web Bluetooth API: Supported';
    } else {
        return 'Web Bluetooth API: Not supported';
    }
}

// Web USB API
function testWebUSBAPI() {
    if (navigator.usb) {
        return 'Web USB API: Supported';
    } else {
        return 'Web USB API: Not supported';
    }
}

// Gyroscope API
function testGyroscopeAPI() {
    if ('Gyroscope' in window) {
        const gyroscope = new Gyroscope({ frequency: 60 });
        gyroscope.addEventListener('reading', () => {
            console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
            console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
            console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
        });
        gyroscope.start();
        return 'Gyroscope API: Started';
    } else {
        return 'Gyroscope API: Not supported';
    }
}

// Accelerometer API
function testAccelerometerAPI() {
    if ('Accelerometer' in window) {
        const accelerometer = new Accelerometer({ frequency: 60 });
        accelerometer.addEventListener('reading', () => {
            console.log(`Acceleration along the X-axis ${accelerometer.x}`);
            console.log(`Acceleration along the Y-axis ${accelerometer.y}`);
            console.log(`Acceleration along the Z-axis ${accelerometer.z}`);
        });
        accelerometer.start();
        return 'Accelerometer API: Started';
    } else {
        return 'Accelerometer API: Not supported';
    }
}

// Ambient Light API
function testAmbientLightAPI() {
    if ('ondevicelight' in window) {
        window.addEventListener('devicelight', (event) => {
            console.log(`Ambient light level: ${event.value} lux`);
        });
        return 'Ambient Light API: Event listener added';
    } else {
        return 'Ambient Light API: Not supported';
    }
}

// Magnetometer API
function testMagnetometerAPI() {
    if ('Magnetometer' in window) {
        const magnetometer = new Magnetometer({ frequency: 60 });
        magnetometer.addEventListener('reading', () => {
            console.log(`Magnetic field along the X-axis ${magnetometer.x}`);
            console.log(`Magnetic field along the Y-axis ${magnetometer.y}`);
            console.log(`Magnetic field along the Z-axis ${magnetometer.z}`);
        });
        magnetometer.start();
        return 'Magnetometer API: Started';
    } else {
        return 'Magnetometer API: Not supported';
    }
}

// Proximity API
function testProximityAPI() {
    if ('ondeviceproximity' in window) {
        window.addEventListener('deviceproximity', (event) => {
            console.log(`Proximity: ${event.value}`);
        });
        return 'Proximity API: Event listener added';
    } else {
        return 'Proximity API: Not supported';
    }
}

// Web Share API
function testWebShareAPI() {
    if (navigator.share) {
        navigator.share({
            title: 'Web Share API',
            text: 'Hello, World!',
            url: window.location.href
        }).then(() => {
            return 'Web Share API: Shared successfully';
        }).catch((error) => {
            return `Web Share API error: ${error}`;
        });
    } else {
        return 'Web Share API: Not supported';
    }
}

// Page Visibility API
function testPageVisibilityAPI() {
    if ('visibilityState' in document) {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                console.log('Page is visible');
            } else {
                console.log('Page is hidden');
            }
        });
        return 'Page Visibility API: Event listener added';
    } else {
        return 'Page Visibility API: Not supported';
    }
}

// Screen Orientation API
function testScreenOrientationAPI() {
    if ('orientation' in screen) {
        screen.orientation.addEventListener('change', () => {
            console.log(`Screen orientation: ${screen.orientation.type}`);
        });
        return 'Screen Orientation API: Event listener added';
    } else {
        return 'Screen Orientation API: Not supported';
    }
}

// Resize Observer API
function testResizeObserverAPI() {
    if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                console.log(`Resized: ${entry.target}`);
            }
        });
        const box = document.createElement('div');
        box.style.width = '100px';
        box.style.height = '100px';
        document.body.appendChild(box);
        resizeObserver.observe(box);
        box.style.width = '200px'; // Trigger resize observer
        return 'Resize Observer API: Observer added';
    } else {
        return 'Resize Observer API: Not supported';
    }
}

// Mutation Observer API
function testMutationObserverAPI() {
    if ('MutationObserver' in window) {
        const mutationObserver = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                console.log(`Mutation: ${mutation.type}`);
            }
        });
        const targetNode = document.createElement('div');
        document.body.appendChild(targetNode);
        mutationObserver.observe(targetNode, { attributes: true });
        targetNode.setAttribute('data-test', 'test'); // Trigger mutation observer
        return 'Mutation Observer API: Observer added';
    } else {
        return 'Mutation Observer API: Not supported';
    }
}

// Intersection Observer API
function testIntersectionObserverAPI() {
    if ('IntersectionObserver' in window) {
        const intersectionObserver = new IntersectionObserver(entries => {
            for (let entry of entries) {
                console.log(`Intersection: ${entry.isIntersecting}`);
            }
        });
        const targetNode = document.createElement('div');
        targetNode.style.height = '100px';
        targetNode.style.width = '100px';
        targetNode.style.marginTop = '1000px';
        document.body.appendChild(targetNode);
        intersectionObserver.observe(targetNode);
        return 'Intersection Observer API: Observer added';
    } else {
        return 'Intersection Observer API: Not supported';
    }
}

// Performance Observer API
function testPerformanceObserverAPI() {
    if ('PerformanceObserver' in window) {
        const performanceObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`Performance entry: ${entry.name}`);
            }
        });
        performanceObserver.observe({ entryTypes: ['mark', 'measure'] });
        performance.mark('start');
        performance.mark('end');
        performance.measure('measure', 'start', 'end'); // Trigger performance observer
        return 'Performance Observer API: Observer added';
    } else {
        return 'Performance Observer API: Not supported';
    }
}

// Payment Request API
function testPaymentRequestAPI() {
    if ('PaymentRequest' in window) {
        const paymentRequest = new PaymentRequest([
            {
                supportedMethods: 'basic-card',
                data: {
                    supportedNetworks: ['visa', 'mastercard']
                }
            }
        ], {
            total: {
                label: 'Total',
                amount: { currency: 'USD', value: '1.00' }
            }
        });
        paymentRequest.show().then(paymentResponse => {
            paymentResponse.complete('success');
            return 'Payment Request API: Payment successful';
        }).catch(error => {
            return `Payment Request API error: ${error}`;
        });
    } else {
        return 'Payment Request API: Not supported';
    }
}

// Device Memory API
function testDeviceMemoryAPI() {
    if ('deviceMemory' in navigator) {
        return `Device Memory API: ${navigator.deviceMemory} GB`;
    } else {
        return 'Device Memory API: Not supported';
    }
}

// Pointer Lock API
function testPointerLockAPI() {
    const elem = document.documentElement;
    if (elem.requestPointerLock) {
        elem.requestPointerLock();
        return 'Pointer Lock API: Pointer locked';
    } else {
        return 'Pointer Lock API: Not supported';
    }
}

// Web Audio API
function testWebAudioAPI() {
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1); // Play sound for 1 second
        return 'Web Audio API: Sound played';
    } else {
        return 'Web Audio API: Not supported';
    }
}
// Web Animations API
function testWebAnimationsAPI() {
    const element = document.createElement('div');
    document.body.appendChild(element);
    const animation = element.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(100px)' }
    ], {
        duration: 1000,
        iterations: Infinity
    });
    return 'Web Animations API: Animation started';
}

// Drag and Drop API
function testDragAndDropAPI() {
    const draggable = document.createElement('div');
    draggable.setAttribute('draggable', 'true');
    draggable.textContent = 'Drag me';
    document.body.appendChild(draggable);
    draggable.addEventListener('dragstart', () => {
        console.log('Drag started');
    });
    return 'Drag and Drop API: Draggable element added';
}

// Media Devices API
function testMediaDevicesAPI() {
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            devices.forEach(device => {
                console.log(`${device.kind}: ${device.label}`);
            });
        });
        return 'Media Devices API: Enumerating devices';
    } else {
        return 'Media Devices API: Not supported';
    }
}

// Screen Capture API
function testScreenCaptureAPI() {
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({ video: true }).then(stream => {
            console.log('Screen capture started');
        });
        return 'Screen Capture API: Screen capture started';
    } else {
        return 'Screen Capture API: Not supported';
    }
}

// Media Session API
function testMediaSessionAPI() {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Song Title',
            artist: 'Artist Name',
            album: 'Album Name',
            artwork: [
                { src: 'album-art.jpg', sizes: '96x96', type: 'image/jpeg' }
            ]
        });
        return 'Media Session API: Metadata set';
    } else {
        return 'Media Session API: Not supported';
    }
}

// Fullscreen Change Event
function testFullscreenChangeEvent() {
    document.addEventListener('fullscreenchange', () => {
        console.log('Fullscreen change event');
    });
    return 'Fullscreen Change Event: Listener added';
}

// Device Orientation Absolute
function testDeviceOrientationAbsolute() {
    if ('DeviceOrientationEvent' in window) {
        window.addEventListener('deviceorientationabsolute', event => {
            console.log(`Absolute orientation - Alpha: ${event.alpha}, Beta: ${event.beta}, Gamma: ${event.gamma}`);
        });
        return 'Device Orientation Absolute: Event listener added';
    } else {
        return 'Device Orientation Absolute: Not supported';
    }
}

// Device Motion API
function testDeviceMotionAPI() {
    if ('DeviceMotionEvent' in window) {
        window.addEventListener('devicemotion', event => {
            console.log(`Acceleration - X: ${event.acceleration.x}, Y: ${event.acceleration.y}, Z: ${event.acceleration.z}`);
        });
        return 'Device Motion API: Event listener added';
    } else {
        return 'Device Motion API: Not supported';
    }
}

// Online/Offline Events
function testOnlineOfflineEvents() {
    window.addEventListener('online', () => {
        console.log('Online');
    });
    window.addEventListener('offline', () => {
        console.log('Offline');
    });
    return 'Online/Offline Events: Listeners added';
}

// Page Load Event
function testPageLoadEvent() {
    window.addEventListener('load', () => {
        console.log('Page loaded');
    });
    return 'Page Load Event: Listener added';
}

// Before Unload Event
function testBeforeUnloadEvent() {
    window.addEventListener('beforeunload', event => {
        event.returnValue = 'Are you sure you want to leave?';
    });
    return 'Before Unload Event: Listener added';
}

// Storage Event
function testStorageEvent() {
    window.addEventListener('storage', event => {
        console.log(`Storage event - Key: ${event.key}, Old Value: ${event.oldValue}, New Value: ${event.newValue}`);
    });
    return 'Storage Event: Listener added';
}

// Crypto API
function testCryptoAPI() {
    if ('crypto' in window) {
        const array = new Uint32Array(10);
        window.crypto.getRandomValues(array);
        console.log('Crypto API: Random values generated', array);
        return 'Crypto API: Supported';
    } else {
        return 'Crypto API: Not supported';
    }
}

// Quota Management API
function testQuotaManagementAPI() {
    if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(estimate => {
            console.log(`Quota: ${estimate.quota}, Usage: ${estimate.usage}`);
        });
        return 'Quota Management API: Quota estimated';
    } else {
        return 'Quota Management API: Not supported';
    }
}

// Contact Picker API
function testContactPickerAPI() {
    if ('contacts' in navigator && 'select' in navigator.contacts) {
        navigator.contacts.select(['name', 'email'], { multiple: true }).then(contacts => {
            console.log('Contacts selected', contacts);
        });
        return 'Contact Picker API: Contacts selected';
    } else {
        return 'Contact Picker API: Not supported';
    }
}

// Wake Lock API
function testWakeLockAPI() {
    if ('wakeLock' in navigator) {
        navigator.wakeLock.request('screen').then(lock => {
            console.log('Wake Lock: Screen lock acquired');
        });
        return 'Wake Lock API: Screen lock requested';
    } else {
        return 'Wake Lock API: Not supported';
    }
}

// Background Sync API
function testBackgroundSyncAPI() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(registration => {
            return registration.sync.register('sync-tag');
        }).then(() => {
            console.log('Background Sync: Sync registered');
        });
        return 'Background Sync API: Sync registered';
    } else {
        return 'Background Sync API: Not supported';
    }
}

// Periodic Sync API
function testPeriodicSyncAPI() {
    if ('serviceWorker' in navigator && 'periodicSync' in navigator.serviceWorker) {
        navigator.serviceWorker.ready.then(registration => {
            return registration.periodicSync.register('sync-tag', { minInterval: 24 * 60 * 60 * 1000 });
        }).then(() => {
            console.log('Periodic Sync: Sync registered');
        });
        return 'Periodic Sync API: Sync registered';
    } else {
        return 'Periodic Sync API: Not supported';
    }
}

// Generic Sensor API
function testSensorAPI() {
    if ('Sensor' in window) {
        const sensor = new Sensor({ frequency: 60 });
        sensor.addEventListener('reading', () => {
            console.log(`Sensor reading: ${sensor.reading}`);
        });
        sensor.start();
        return 'Generic Sensor API: Sensor started';
    } else {
        return 'Generic Sensor API: Not supported';
    }
}

// Credential Management API
function testCredentialManagementAPI() {
    if ('credentials' in navigator) {
        navigator.credentials.get({ password: true }).then(credential => {
            console.log('Credential Management: Credential retrieved', credential);
        });
        return 'Credential Management API: Credential retrieved';
    } else {
        return 'Credential Management API: Not supported';
    }
}

// Visibility Change Event
function testVisibilityChangeEvent() {
    document.addEventListener('visibilitychange', () => {
        console.log(`Visibility changed: ${document.visibilityState}`);
    });
    return 'Visibility Change Event: Listener added';
}

// Scroll Restoration API
function testScrollRestorationAPI() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
        return 'Scroll Restoration API: Set to manual';
    } else {
        return 'Scroll Restoration API: Not supported';
    }
}

// Focus and Blur Events
function testFocusBlurEvents() {
    window.addEventListener('focus', () => {
        console.log('Window focused');
    });
    window.addEventListener('blur', () => {
        console.log('Window blurred');
    });
    return 'Focus and Blur Events: Listeners added';
}

// Pointer Events
function testPointerEvents() {
    window.addEventListener('pointerdown', () => {
        console.log('Pointer down');
    });
    window.addEventListener('pointerup', () => {
        console.log('Pointer up');
    });
    return 'Pointer Events: Listeners added';
}

// Pop State Event
function testPopStateEvent() {
    window.addEventListener('popstate', event => {
        console.log(`Pop state event: ${event.state}`);
    });
    return 'Pop State Event: Listener added';
}
// Initialize feature sections on page load
createFeatureSections();
