document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            //  كود إرسال البيانات للخادم
            console.log('تم إرسال النموذج:', formData);
            
            // عرض رسالة نجاح
            showToast('تم إرسال رسالتك بنجاح، سنتواصل معك قريباً');
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}