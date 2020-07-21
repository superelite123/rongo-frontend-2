const storage = {
    set: (key, object) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key) => {
        if(!localStorage) {
            console.log('Cannot find localstorage')
            return null;
        }
        
        if(!localStorage[key]) {
            console.log('Cannot find key' + key)
            return null;
        }
        
        console.log(localStorage.getItem(key))

        try {
            const parsed = JSON.parse(localStorage.getItem(key));
            console.log('Parse Object from localstorage')
            return parsed;
        } catch(e) {
            console.log('Parse Object With Key')
            return localStorage.getItem(key);
        }
    },
    remove: (key) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

export default storage;
/*
Usage
storage.set('foo', 'bar');
storage.set('foobar', { foo: 'bar' });
let foo = storage.get('foo'); // bar
storage.remove('foo');
*/