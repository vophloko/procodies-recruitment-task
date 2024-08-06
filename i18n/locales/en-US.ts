export default {
  meta: {
    title: 'StockX',
    description: 'Top Tech Mystery Box at Unbeatable Prices',
  },
  app: {
    title: 'Chance to win a StockX Mystery Box today!',
    subtitle: 'Unleash the Excitement of Mystery Electronics',
    section0: {
      title: `Top Tech Mystery Box\nat Unbeatable Prices`,
      subtitle:
        'Fast shipping {\'|\'} Easy returns {\'|\'} Special discounts for students',
    },
    section1: {
      title: {
        content: 'Curious about the {highlighted} Mystery Box?',
        highlighted: 'StockX',
      },
      content: {
        p0: 'Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.',
        p1: 'Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.',
      },
    },
    section2: {
      title: 'Why is everyone buzzing about these boxes?',
      content: {
        p0: 'StockX Mystery Boxes are not just about products; they\'re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.',
        p1: 'Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!',
      },
    },
    section3: {
      title: 'We accept the following credit cards',
    },
  },
  priceLabel: {
    originalValue: 'Original value {0}',
  },
  faqSection: {
    0: {
      question: 'How can I win?',
      answer:
        'Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.',
    },
    1: {
      question: 'No hidden fees?',
      answer:
        'We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.',
    },
    2: {
      question: 'Why do we need your billing information?',
      answer:
        'By joining this service, you will receive a 5-day trial of our partner\'s program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner\'s website.',
    },
  },
  detailsForm: {
    title: 'Enter details',
    form: {
      firstName: {
        label: 'First name',
        min: 'First name must be at least 2 characters long',
        max: 'First name must be at most 50 characters long',
      },
      lastName: {
        label: 'Last name',
        min: 'Last name must be at least 2 characters long',
        max: 'Last name must be at most 50 characters long',
      },
      street: {
        label: 'Street',
        min: 'Street must be at least 2 characters long',
        max: 'Street must be at most 100 characters long',
      },
      postalCode: {
        label: 'Postal code',
        regex: 'Invalid postal code format',
      },
      city: {
        label: 'City',
        min: 'City must be at least 2 characters long',
        max: 'City must be at most 50 characters long',
      },
      phoneNumber: {
        label: 'Phone number',
        regex: 'Invalid phone number format',
      },
      email: {
        label: 'E-mail',
        email: 'Invalid email format',
      },
      submit: 'Proceed to payment',
    },
  },
  img: {
    products: {
      0: '0',
      1: '1',
      2: '2',
      3: '3',
    },
    paymentProtection: {
      mcAfee: 'McAfee secure',
      trustE: 'Trust E verified',
      ssl: '256 bit encryption',
    },
    acceptedCards:
      'Visa, Mastercard, Maestro, Discover Network, American Express, Verfied by Visa, MasterCard SecureCode',
  },
}
