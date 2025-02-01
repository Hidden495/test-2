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
    { id: 'generators', name: 'Generators', func: testGenerators },
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
    { id: 'websocket', name: 'WebSocket', func: testWebSocket }
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
        button.onclick = () => {
            const output = document.createElement('div');
            output.className = 'output';
            output.innerText = feature.func();
            section.appendChild(output);
        };
        section.appendChild(button);
        
        container.appendChild(section);
    });
}

// Function to test all features
function testAllFeatures() {
    const container = document.getElementById('feature-sections');
    container.innerHTML = ''; // Clear previous results
    features.forEach(feature => {
        const section = document.createElement('div');
        section.className = 'section';
        
        const title = document.createElement('h2');
        title.innerText = feature.name;
        section.appendChild(title);
        
        const output = document.createElement('div');
        output.className = 'output';
        output.innerText = feature.func();
        section.appendChild(output);
        
        container.appendChild(section);
    });
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
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        });
        return 'Geolocation: Fetching...';
    } else {
        return 'Geolocation: Not supported';
    }
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
function testCacheAPI() {
    if ('caches' in window) {
        caches.open('test-cache').then(cache => {
            cache.add('/');
            return 'Cache API: Entry added';
        });
        return 'Cache API: Entry added';
    } else {
        return 'Cache API: Not supported';
    }
}

// File Handling
function testFileHandling() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => alert(`File content: ${e.target.result}`);
        reader.readAsText(file);
    };
    fileInput.click();
    return 'File Handling: Please select a file';
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
    const sum = Math.sum = (...args) => args.reduce((a, b) => a + b, 0);
    return `Sum: ${sum(1, 2, 3, 4, 5)}`;
}

// Fetch API
function testFetchAPI() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => `Fetch API: ${JSON.stringify(data)}`)
        .catch(error => `Fetch API error: ${error}`);
}

// Observers
function testObservers() {
    const div = document.createElement('div');
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            console.log(`Mutation type: ${mutation.type}`);
        });
    });
    observer.observe(div, { attributes: true });
    div.setAttribute('data-test', 'test');
    return 'Observers: Mutation observed';
}

// WebSocket
function testWebSocket() {
    const socket = new WebSocket('wss://echo.websocket.org');
    socket.onopen = () => socket.send('Hello, World!');
    socket.onmessage = event => alert(`WebSocket message: ${event.data}`);
    return 'WebSocket: Message sent';
}

// Initialize feature sections on page load
createFeatureSections();
