function solve(obj) {
    const uriRegEx = /^(\.*[a-zA-Z]*[0-9]*\.*\**)+$/g;

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const invalidRequest = 'Invalid request header: Invalid ';
    const msgForbiddenSymbols = [`<`, `>`, `\\`, `&`, `'`, `"`]


    if (!obj.hasOwnProperty('method') || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    };
    if (!obj.hasOwnProperty('uri') || obj.uri == '') {
        throw new Error('Invalid request header: Invalid URI');
    };
    if (obj.uri !== '*' && !obj.uri.match(uriRegEx)) {
        throw new Error('Invalid request header: Invalid URI');
    };

    if (!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    };
    if (!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    };

    msgForbiddenSymbols.forEach(symbol => {
        if (obj.message.includes(symbol)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    });
    return obj;
}

