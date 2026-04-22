const prButtons = document.querySelectorAll('.pr-btn');
const closePrModalBtns = document.querySelectorAll('.close-pr-modal');
const allPrModals = document.querySelectorAll('.pr-modal');
const modalWrapper = document.querySelector('.modals-wrapper');
const documentBody = document.querySelector('body');

prButtons.forEach(button => {
    button.addEventListener('click', e => {
        const termsModal = document.querySelector('.terms-modal');
        const privacyModal = document.querySelector('.privacy-modal');
        const returnsModal = document.querySelector('.returns-modal');
        const contactsModal = document.querySelector('.contacts-modal');

        modalWrapper.classList.add('active');
        documentBody.classList.add('modal-active');

        if (e.target.classList.contains('terms-btn') || e.target.closest('.terms-btn')) {
            termsModal.classList.add('active');
        } else if (e.target.classList.contains('privacy-btn') || e.target.closest('.privacy-btn')) {
            privacyModal.classList.add('active');
        } else if (e.target.classList.contains('returns-btn') || e.target.closest('.returns-btn')) {
            returnsModal.classList.add('active');
        } else if (e.target.classList.contains('contacts-btn') || e.target.closest('.contacts-btn')) {
            contactsModal.classList.add('active');
        }
    });
});

closePrModalBtns.forEach(button => {
    button.addEventListener('click', e => {
        allPrModals.forEach(modal => {
            modal.classList.remove('active');
        });
        modalWrapper.classList.remove('active');
        documentBody.classList.remove('modal-active');
    });
});

// Close modal when clicking outside
modalWrapper.addEventListener('click', e => {
    if (e.target === modalWrapper) {
        allPrModals.forEach(modal => {
            modal.classList.remove('active');
        });
        modalWrapper.classList.remove('active');
        documentBody.classList.remove('modal-active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalWrapper.classList.contains('active')) {
        allPrModals.forEach(modal => {
            modal.classList.remove('active');
        });
        modalWrapper.classList.remove('active');
        documentBody.classList.remove('modal-active');
    }
});
