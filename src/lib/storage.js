const storage = {
    set: (key, object) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key) => {
        if(!localStorage) {
            return null;
        }
        
        if(!localStorage[key]) {
            return null;
        }

        try {
            const parsed = JSON.parse(localStorage.getItem(key));
            return parsed;
        } catch(e) {
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