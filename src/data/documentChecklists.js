export const documentChecklists = [
  // --- IDENTITY DOCUMENTS ---
  {
    id: "aadhaar",
    category: "Identity Documents",
    categoryHi: "पहचान दस्तावेज",
    title: "Aadhaar Card Enrollment/Correction",
    titleHi: "आधार कार्ड नामांकन/सुधार",
    requiredDocs: [
      "Proof of Identity (POI) (e.g. Passport, PAN Card, Voter ID)",
      "Proof of Address (POA) (e.g. Bank Statement, Electricity Bill, Ration Card)",
      "Proof of Date of Birth (DoB) (e.g. Birth Certificate, SSLC Book/Certificate)",
      "Mobile number for OTP authentication"
    ],
    requiredDocsHi: [
      "पहचान का प्रमाण (POI) (जैसे पासपोर्ट, पैन कार्ड, वोटर आईडी)",
      "पते का प्रमाण (POA) (जैसे बैंक स्टेटमेंट, बिजली बिल, राशन कार्ड)",
      "जन्म तिथि का प्रमाण (DoB) (जैसे जन्म प्रमाण पत्र, एसएसएलसी बुक)",
      "ओटीपी प्रमाणीकरण के लिए मोबाइल नंबर"
    ],
    steps: [
      "Locate the nearest Aadhaar Enrollment Center on uidai.gov.in.",
      "Fill out the Aadhaar Enrollment Form.",
      "Submit the form along with POI, POA, and DoB documents.",
      "Provide biometrics (fingerprints, iris scan, and photograph).",
      "Collect the acknowledgement slip with 14-digit Enrollment ID."
    ],
    stepsHi: [
      "uidai.gov.in पर अपने नजदीकी आधार नामांकन केंद्र का पता लगाएं।",
      "आधार नामांकन फॉर्म भरें।",
      "पहचान, पते और जन्म तिथि के प्रमाण के साथ फॉर्म जमा करें।",
      "बायोमेट्रिक्स (उंगलियों के निशान, आईरिस स्कैन और फोटो) प्रदान करें।",
      "14-अंकों की नामांकन आईडी वाली पावती पर्ची प्राप्त करें।"
    ]
  },
  {
    id: "pan",
    category: "Identity Documents",
    categoryHi: "पहचान दस्तावेज",
    title: "PAN Card (Permanent Account Number)",
    titleHi: "पैन कार्ड (स्थायी खाता संख्या)",
    requiredDocs: [
      "Proof of Identity (POI) (Aadhaar Card, Voter ID, or Passport)",
      "Proof of Address (POA) (Aadhaar, Electricity Bill, or Driving License)",
      "Proof of Date of Birth (DoB) (Aadhaar, Birth Certificate, or Matriculation Certificate)",
      "Recent passport-sized photographs (2 copies) for physical submissions"
    ],
    requiredDocsHi: [
      "पहचान का प्रमाण (POI) (आधार कार्ड, वोटर आईडी, या पासपोर्ट)",
      "पते का प्रमाण (POA) (आधार, बिजली बिल, या ड्राइविंग लाइसेंस)",
      "जन्म तिथि का प्रमाण (DoB) (आधार, जन्म प्रमाण पत्र, या मैट्रिक प्रमाण पत्र)",
      "भौतिक रूप से जमा करने के लिए हाल की पासपोर्ट आकार की तस्वीरें (2 प्रतियां)"
    ],
    steps: [
      "Visit the official TIN-NSDL or UTITSL website.",
      "Fill out Form 49A online.",
      "Complete Aadhaar-based e-KYC using mobile OTP.",
      "Pay the application fee (approx. ₹107 for physical card).",
      "Download the e-PAN or wait for the physical card to be couriered to your address."
    ],
    stepsHi: [
      "आधिकारिक TIN-NSDL या UTITSL वेबसाइट पर जाएं।",
      "ऑनलाइन फॉर्म 49A भरें।",
      "मोबाइल ओटीपी का उपयोग करके आधार-आधारित ई-केवाईसी पूरा करें।",
      "आवेदन शुल्क का भुगतान करें (भौतिक कार्ड के लिए लगभग ₹107)।",
      "ई-पैन डाउनलोड करें या अपने पते पर भौतिक कार्ड के आने की प्रतीक्षा करें।"
    ]
  },
  {
    id: "voter_id",
    category: "Identity Documents",
    categoryHi: "पहचान दस्तावेज",
    title: "Voter ID Card (EPIC)",
    titleHi: "मतदाता पहचान पत्र (EPIC)",
    requiredDocs: [
      "Passport-sized photograph",
      "Age Proof (Birth Certificate, PAN Card, Passport, or 10th marksheet)",
      "Address Proof (Electricity Bill, Water Bill, Aadhaar Card, or Bank Passbook)"
    ],
    requiredDocsHi: [
      "पासपोर्ट आकार की तस्वीर",
      "आयु का प्रमाण (जन्म प्रमाण पत्र, पैन कार्ड, पासपोर्ट, या 10वीं की मार्कशीट)",
      "पते का प्रमाण (बिजली बिल, पानी बिल, आधार कार्ड, या बैंक पासबुक)"
    ],
    steps: [
      "Go to the National Voters Service Portal (voters.eci.gov.in).",
      "Fill out Form 6 for registration of new voter.",
      "Upload your photo, age proof, and address proof documents.",
      "Submit the application online.",
      "Booth Level Officer (BLO) will visit for verification, and Voter Card will be delivered by post."
    ],
    stepsHi: [
      "राष्ट्रीय मतदाता सेवा पोर्टल (voters.eci.gov.in) पर जाएं।",
      "नए मतदाता के रूप में पंजीकरण के लिए फॉर्म 6 भरें।",
      "अपनी फोटो, आयु प्रमाण और पता प्रमाण दस्तावेज अपलोड करें।",
      "ऑनलाइन आवेदन जमा करें।",
      "सत्यापन के लिए बूथ स्तर के अधिकारी (BLO) का दौरा होगा, और मतदाता कार्ड डाक द्वारा भेजा जाएगा।"
    ]
  },
  {
    id: "passport",
    category: "Identity Documents",
    categoryHi: "पहचान दस्तावेज",
    title: "Indian Passport Application",
    titleHi: "भारतीय पासपोर्ट आवेदन",
    requiredDocs: [
      "Proof of Address (Aadhaar Card, Water Bill, Electricity Bill, Rent Agreement)",
      "Proof of Date of Birth (Birth Certificate, PAN Card, Aadhaar Card, Transfer Certificate)",
      "Non-ECR Category proof (Matriculation/10th Pass Certificate or higher degree)"
    ],
    requiredDocsHi: [
      "पते का प्रमाण (आधार कार्ड, पानी का बिल, बिजली का बिल, किराया समझौता)",
      "जन्म तिथि का प्रमाण (जन्म प्रमाण पत्र, पैन कार्ड, आधार कार्ड, स्थानांतरण प्रमाण पत्र)",
      "गैर-ईसीआर श्रेणी प्रमाण (मैट्रिक/10वीं पास प्रमाणपत्र या उच्च डिग्री)"
    ],
    steps: [
      "Register on the Passport Seva Online Portal (passportindia.gov.in).",
      "Fill out the Passport Application Form.",
      "Pay the passport fee online and book an appointment at the nearest PSK/POPSK.",
      "Visit the Passport Seva Kendra on the scheduled date with original documents.",
      "Police verification will be initiated, followed by passport printing and dispatch."
    ],
    stepsHi: [
      "पासपोर्ट सेवा ऑनलाइन पोर्टल (passportindia.gov.in) पर पंजीकरण करें।",
      "पासपोर्ट आवेदन फॉर्म भरें।",
      "पासपोर्ट शुल्क का ऑनलाइन भुगतान करें और निकटतम PSK/POPSK पर अपॉइंटमेंट बुक करें।",
      "मूल दस्तावेजों के साथ निर्धारित तिथि पर पासपोर्ट सेवा केंद्र पर जाएं।",
      "पुलिस सत्यापन शुरू किया जाएगा, जिसके बाद पासपोर्ट प्रिंट कर भेजा जाएगा।"
    ]
  },
  {
    id: "driving_license",
    category: "Identity Documents",
    categoryHi: "पहचान दस्तावेज",
    title: "Driving License (Permanent)",
    titleHi: "स्थायी ड्राइविंग लाइसेंस",
    requiredDocs: [
      "Learner's License (issued at least 30 days prior)",
      "Proof of Identity (Aadhaar, Voter ID, PAN, Passport)",
      "Proof of Address (Aadhaar, Voter ID, Rent Agreement, Electricity Bill)",
      "Form 1 (Self-declaration of Physical Fitness) or Form 1A (Medical Certificate if age >40)"
    ],
    requiredDocsHi: [
      "लर्नर लाइसेंस (कम से कम 30 दिन पहले जारी किया गया)",
      "पहचान का प्रमाण (आधार, वोटर आईडी, पैन, पासपोर्ट)",
      "पते का प्रमाण (आधार, वोटर आईडी, किराया समझौता, बिजली बिल)",
      "फॉर्म 1 (शारीरिक फिटनेस का स्व-घोषणा पत्र) या फॉर्म 1A (यदि आयु 40 वर्ष से अधिक हो तो चिकित्सा प्रमाण पत्र)"
    ],
    steps: [
      "Visit the Sarathi Parivahan portal (sarathi.parivahan.gov.in) and select your state.",
      "Click on 'Apply for Driving License' and fill out details.",
      "Upload documents, upload photos/signature if required.",
      "Book a slot for the DL driving test.",
      "Visit the RTO for the driving test, clear the test, and receive your License."
    ],
    stepsHi: [
      "सारथी परिवहन पोर्टल (sarathi.parivahan.gov.in) पर जाएं और अपना राज्य चुनें।",
      "'ड्राइविंग लाइसेंस के लिए आवेदन करें' पर क्लिक करें और विवरण भरें।",
      "दस्तावेज अपलोड करें, यदि आवश्यक हो तो फोटो/हस्ताक्षर अपलोड करें।",
      "डीएल ड्राइविंग टेस्ट के लिए स्लॉट बुक करें।",
      "ड्राइविंग टेस्ट के लिए आरटीओ जाएं, टेस्ट पास करें और अपना लाइसेंस प्राप्त करें।"
    ]
  },

  // --- CERTIFICATES ---
  {
    id: "birth_cert",
    category: "Certificates",
    categoryHi: "प्रमाण पत्र",
    title: "Birth Certificate",
    titleHi: "जन्म प्रमाण पत्र",
    requiredDocs: [
      "Hospital Discharge Summary / Birth Record",
      "Aadhaar / ID cards of parents",
      "Marriage certificate of parents (optional)",
      "Affidavit from notary if registering after 21 days"
    ],
    requiredDocsHi: [
      "अस्पताल डिस्चार्ज सारांश / जन्म रिकॉर्ड",
      "माता-पिता के आधार / पहचान पत्र",
      "माता-पिता का विवाह प्रमाण पत्र (वैकल्पिक)",
      "21 दिनों के बाद पंजीकरण करने पर नोटरी से हलफनामा"
    ],
    steps: [
      "Register the birth at the hospital (most hospitals register directly).",
      "For delayed births, fill the birth registration application form at your local municipal corporation or gram panchayat.",
      "Submit ID proofs of parents and hospital certificate.",
      "Pay late fees if applying after 21 days.",
      "Collect the birth certificate once issued."
    ],
    stepsHi: [
      "अस्पताल में जन्म का पंजीकरण कराएं (अधिकांश अस्पताल सीधे पंजीकरण करते हैं)।",
      "देरी से जन्म के मामलों के लिए, अपने स्थानीय नगर निगम या ग्राम पंचायत में जन्म पंजीकरण आवेदन फॉर्म भरें।",
      "माता-पिता के आईडी प्रूफ और अस्पताल का प्रमाणपत्र जमा करें।",
      "21 दिनों के बाद आवेदन करने पर विलंब शुल्क का भुगतान करें।",
      "जारी होने के बाद जन्म प्रमाण पत्र प्राप्त करें।"
    ]
  },
  {
    id: "caste_cert",
    category: "Certificates",
    categoryHi: "प्रमाण पत्र",
    title: "Caste Certificate (SC/ST/OBC)",
    titleHi: "जाति प्रमाण पत्र (SC/ST/OBC)",
    requiredDocs: [
      "Aadhaar Card of Applicant",
      "Caste Certificate of Father or close paternal relative (crucial proof)",
      "Proof of residence in the state (Domicile certificate or 10-year address record)",
      "Affidavit declaring caste lineage",
      "Income certificate (OBC creamy/non-creamy layer validation)"
    ],
    requiredDocsHi: [
      "आवेदक का आधार कार्ड",
      "पिता या करीबी पैतृक रिश्तेदार का जाति प्रमाण पत्र (महत्वपूर्ण प्रमाण)",
      "राज्य में निवास का प्रमाण (निवास प्रमाण पत्र या 10 साल का पता रिकॉर्ड)",
      "जाति वंश घोषित करने वाला हलफनामा",
      "आय प्रमाण पत्र (ओबीसी क्रीमी/नॉन-क्रीमी लेयर सत्यापन)"
    ],
    steps: [
      "Apply online on your state's e-District portal or visit the local Tahsildar/SDM office.",
      "Fill out the Caste Certificate application form.",
      "Upload ID proof, address proof, and father's caste certificate.",
      "Local revenue officer/patwari will conduct physical verification of caste records.",
      "The certificate is issued by the competent revenue authority within 15-30 days."
    ],
    stepsHi: [
      "अपने राज्य के ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन आवेदन करें या स्थानीय तहसीलदार/एसडीएम कार्यालय में जाएं।",
      "जाति प्रमाण पत्र आवेदन फॉर्म भरें।",
      "पहचान प्रमाण, पता प्रमाण और पिता का जाति प्रमाण पत्र अपलोड करें।",
      "स्थानीय राजस्व अधिकारी/पटवारी जाति रिकॉर्ड का भौतिक सत्यापन करेंगे।",
      "सक्षम राजस्व प्राधिकरण द्वारा 15-30 दिनों के भीतर प्रमाण पत्र जारी किया जाता है।"
    ]
  },

  // --- GOVERNMENT SCHEMES ---
  {
    id: "ration_card",
    category: "Government Schemes",
    categoryHi: "सरकारी योजनाएं",
    title: "Ration Card (National Food Security Act)",
    titleHi: "राशन कार्ड (राष्ट्रीय खाद्य सुरक्षा अधिनियम)",
    requiredDocs: [
      "Aadhaar card of all family members",
      "Passport size photo of the head of the family (preferably female head)",
      "Income certificate of the family",
      "Electricity Bill or Rent Agreement as address proof"
    ],
    requiredDocsHi: [
      "परिवार के सभी सदस्यों का आधार कार्ड",
      "परिवार के मुखिया की पासपोर्ट आकार की फोटो (अधिमानतः महिला मुखिया)",
      "परिवार का आय प्रमाण पत्र",
      "पते के प्रमाण के रूप में बिजली बिल या किराया समझौता"
    ],
    steps: [
      "Visit your state's Food and Civil Supplies official portal.",
      "Fill out the new Ration Card application form.",
      "Link Aadhaar details for all family members.",
      "Submit the application online or at the nearest Ration Office/CSC center.",
      "Following verification of family size and income limits, the card is printed and issued."
    ],
    stepsHi: [
      "अपने राज्य के खाद्य और नागरिक आपूर्ति विभाग के आधिकारिक पोर्टल पर जाएं।",
      "नया राशन कार्ड आवेदन फॉर्म भरें।",
      "परिवार के सभी सदस्यों के आधार विवरण को लिंक करें।",
      "आवेदन ऑनलाइन या नजदीकी राशन कार्यालय/सीएससी केंद्र पर जमा करें।",
      "परिवार के आकार और आय सीमाओं के सत्यापन के बाद, कार्ड प्रिंट करके जारी किया जाता है।"
    ]
  },

  // --- OTHER SERVICES ---
  {
    id: "marriage_reg",
    category: "Other Services",
    categoryHi: "अन्य सेवाएं",
    title: "Marriage Registration",
    titleHi: "विवाह पंजीकरण",
    requiredDocs: [
      "Proof of Marriage (Wedding Invitation Card, Marriage Hall receipt, or temple certificate)",
      "Age proof of Husband and Wife (Birth Certificate or Passport)",
      "Address proof of Husband and Wife (Aadhaar Card, Passport, or Voter ID)",
      "Passport size photos (3 copies each) and joint wedding photo",
      "Affidavit from both parties stating date and place of marriage",
      "Witness ID (Identity cards of 2-3 witnesses who attended the wedding)"
    ],
    requiredDocsHi: [
      "विवाह का प्रमाण (शादी का निमंत्रण कार्ड, मैरिज हॉल की रसीद, या मंदिर का प्रमाण पत्र)",
      "पति और पत्नी का आयु प्रमाण (जन्म प्रमाण पत्र या पासपोर्ट)",
      "पति और पत्नी का पता प्रमाण (आधार कार्ड, पासपोर्ट, या वोटर आईडी)",
      "पासपोर्ट आकार की फोटो (प्रत्येक की 3 प्रतियां) और संयुक्त शादी की फोटो",
      "दोनों पक्षों की ओर से विवाह की तिथि और स्थान घोषित करने वाला हलफनामा",
      "गवाहों की आईडी (शादी में शामिल होने वाले 2-3 गवाहों के पहचान पत्र)"
    ],
    steps: [
      "Apply online on your state's revenue department or e-District portal.",
      "Fill out the Marriage Registration Form and select the Act (Hindu Marriage Act or Special Marriage Act).",
      "Upload documents, photographs, and witness ID details.",
      "Pay the registration fee online and schedule an appointment at the Sub-Registrar's Office (SRO).",
      "Visit the SRO on the scheduled date along with the spouse and witnesses (bearing original IDs).",
      "Sign the register, and marriage certificate is printed and handed over on the same day."
    ],
    stepsHi: [
      "अपने राज्य के राजस्व विभाग या ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन आवेदन करें।",
      "विवाह पंजीकरण फॉर्म भरें और अधिनियम (हिंदू विवाह अधिनियम या विशेष विवाह अधिनियम) चुनें।",
      "दस्तावेज, फोटो और गवाहों के आईडी विवरण अपलोड करें।",
      "पंजीकरण शुल्क का ऑनलाइन भुगतान करें और उप-पंजीयक कार्यालय (SRO) में अपॉइंटमेंट निर्धारित करें।",
      "पति/पत्नी और गवाहों (मूल आईडी लेकर) के साथ निर्धारित तिथि पर उप-पंजीयक कार्यालय जाएं।",
      "रजिस्टर पर हस्ताक्षर करें, और विवाह प्रमाण पत्र उसी दिन प्रिंट करके सौंप दिया जाता है।"
    ]
  }
];
