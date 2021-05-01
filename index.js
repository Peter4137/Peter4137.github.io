import * as ko from './node_modules/knockout';

const ViewModel = function() {
    return {
        hello: 'Hello World123'
    }
}

ko.applyBindings(new ViewModel());