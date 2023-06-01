interface FAQ {
  question: string;
  header?: string;
  answers: string[] | string;
}

const faqData: FAQ[] = [
  {
    question: "What is LOML?",
    answers:
      "LOML is the leader in online marriage—making it possible for any couple around the world to get legally married online, 24/7. From obtaining a marriage license to performing the ceremony, Courtly is bringing the aisle online for couples in the 21st century—regardless of their nationality, sexuality, or physical location.",
  },
  {
    question: " WHo can use LOML",

    answers: [
      "Any consenting adult who is 1) 18 or older, 2) not currently married, and 3) hasn’t been divorced in the last 60 days. All you need is a valid government ID, a webcam, and a stable internet connection.",
    ],
  },

  {
    question: " How much does it cost to get married on  LOML",

    answers: [
      "LOML’s standard marriage package includes a valid marriage license, online ceremony, and legal, US marriage certificate for just $499. Learn more about our add-ons on our Pricing page.",
    ],
  },

  {
    question: "What is your satisfaction guarantee?",
    answers:
      "We offer a full refund up until your marriage license has been registered, which normally happens in 72 hours or less after payment. We offer partial refunds depending on the circumstances of the request for the next 30 days. We do not offer refunds after 30 days of payment. savings help you to build consistency and discipline in your journey to achieve your financial goal",
  },

  {
    question: "Do you offer payment plans?",

    answers: [
      "We offer a number of payment methods including Buy Now Pay Later (BNPL) providers like Afterpay, Klarna, and more. Our goal is to make getting married as affordable as possible and accessible for the majority of couples around the world.",
    ],
  },

  {
    question: "How much does it cost to get married on LOML?",

    answers: [
      "LOML’s standard marriage package includes a valid marriage license, online ceremony, and legal, US marriage certificate for just $499. Learn more about our add-ons on our Pricing page.",
    ],
  },

  {
    question: "Do my partner and I have to be in the same location",
    answers:
      "Nope! We’ve successfully and legally married thousands of couples where one partner is in one country and the other is thousands of miles away!",
  },
];

export default faqData;
