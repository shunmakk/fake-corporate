
 //送信したらメールをリセットする
    document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.user_name.value = '';
    e.target.elements.contact_number.value = '';
    e.target.elements.user_email.value = '';
    e.target.elements.message.value = '';
  });
