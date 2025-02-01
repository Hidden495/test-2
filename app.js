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

// Dummy test functions
function testArrayMethods() {
    const arr = [1, 2, 3, 4, 5];
    return arr.map(x => x * 2).join(', ');
}

function testAsyncAwait() {
    return 'Async/Await: Not implemented yet';
}

function testDataManipulation() {
    return 'Data Manipulation: Not implemented yet';
}

function testStringMethods() {
    return 'String Methods: Not implemented yet';
}

function testDateObjects() {
    return `Current Date: ${new Date().toLocaleString()}`;
}

function testRegularExpressions() {
    return 'Regular Expressions: Not implemented yet';
}

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

function testLocalStorage() {
    localStorage.setItem('test', 'Local Storage Test');
    return localStorage.getItem('test');
}

function testSessionStorage() {
    sessionStorage.setItem('test', 'Session Storage Test');
    return sessionStorage.getItem('test');
}

function testCacheAPI() {
    if ('caches' in window) {
        caches.open('test-cache').then(cache => {
            cache.add('/');
            return 'Cache API: Entry added';
        });
    } else {
        return 'Cache API: Not supported';
    }
}

function testFileHandling() {
    return 'File Handling: Not implemented yet';
}

function testSetMap() {
    const set = new Set([1, 2, 3]);
    return `Set has 2: ${set.has(2)}`;
}

function testWeakCollections() {
    return 'WeakMap/WeakSet: Not implemented yet';
}

function testGenerators() {
    return 'Generators: Not implemented yet';
}

function testDestructuring() {
    return 'Destructuring: Not implemented yet';
}

function testSpreadOperator() {
    return 'Spread Operator: Not implemented yet';
}

function testTemplateLiterals() {
    return 'Template Literals: Not implemented yet';
}

function testModules() {
    return 'Modules: Not implemented yet';
}

function testProxyReflect() {
    return 'Proxy and Reflect: Not implemented yet';
}

function testSymbols() {
    return 'Symbols: Not implemented yet';
}

function testIterators() {
    return 'Iterators: Not implemented yet';
}

function testClosures() {
    return 'Closures: Not implemented yet';
}

function testPromises() {
    return 'Promises: Not implemented yet';
}

function testObjectMethods() {
    return 'Object Methods: Not implemented yet';
}

function testJSONMethods() {
    return 'JSON Methods: Not implemented yet';
}

function testRestOperator() {
    return 'Rest Operator: Not implemented yet';
}

function testClassFeatures() {
    return 'Class Features: Not implemented yet';
}

function testMathOperations() {
    return 'Math Operations: Not implemented yet';
}

function testFetchAPI() {
    return 'Fetch API: Not implemented yet';
}

function testObservers() {
    return 'Observers: Not implemented yet';
}

function testWebSocket() {
    return 'WebSocket: Not implemented yet';
}

// Initialize feature sections on page load
createFeatureSections();
