$( document ).ready(function() {
  
  var cardList = document.getElementById('card-content');
  var cardContent = [
    {
      title: 'Charge',
      content: 'Give members multiple easy ways to pay for event registration, membership dues, donations, and more! Let members pay online at their convenience, or accept payments onsite with the AffiniPay mobile app and swiper. Whichever option you choose, getting paid is simple and secure.',
      link: '#',
      image: './assets/charge-icon.png'
    },
    {
      title: 'Quick Bill',
      content: 'Help members pay quickly and easily, with just a click. Quick Bill lets you send a link to a customized payment portal, where members can view and pay multiple Quick Bills at once. View, manage, and track all of your Quick Bills right from your AffiniPay account.',
      link: '#',
      image: './assets/quick-bill-icon.png'
    },
    {
      title: 'Schedule Payments',
      content: 'Schedule payments in advance for sponsorships, member dues, donations, and more. With our free Scheduled Payments feature, collecting payment is simple and convenient for both you and your members.',
      link: '#',
      image: './assets/schedule-payments-icon.png'
    },
    {
      title: 'Website Payments Integration',
      content: 'We provide a secure link so you can easily add payments to your website and let clients pay at their convenience. No development or technical skills are needed to create a professional payment experience.',
      link: '#',
      image: './assets/pay-cpa-icon.png'
    },
    {
      title: 'Client Signatures',
      content: 'Protect your association against potential payment disputes by adding signatures to credit card receipts. No matter how transactions are run, you can easily collect a member’s signature to verify payment.',
      link: '#',
      image: './assets/client-sig.png'
    },
    {
      title: 'Refunds',
      content: 'AffiniPay provides two easy ways for you to return a payment to a member. For same day returns, void a payment entirely. If more than a day has passed, the refund function lets you reverse payment with just a click.',
      link: '#',
      image: './assets/refund-icon.png'
    }
  ]

  cardContent.forEach(element => {
    const {
      title = '',
      content = '',
      link = '#',
      image = ''
    } = element
    const cardTemplate = document.getElementById('content-card-template').content.cloneNode(true);

    cardTemplate.querySelector('.card-title').innerText = title
    cardTemplate.querySelector('.card-text').innerText = content
    cardTemplate.querySelector('.card-img-top').src = image
    cardList.appendChild(cardTemplate);
  })
  
});