import template from 'src/pages/home-page.html';

function viewModel() {
    return {
        message: 'Testing 123'
    }
}

ko.components.register('home-page', {
    template: template,
    viewModel: viewModel
});

export default viewModel;