export const chatbotKb = [
  {
    keywords: ["birth certificate", "birth registration", "janm praman", "जन्म प्रमाण"],
    intent: "birth_certificate",
    question: "How to get a Birth Certificate?",
    questionHi: "जन्म प्रमाण पत्र कैसे प्राप्त करें?",
    answer: "To get a birth certificate in India:\n1. **Register the Birth**: The birth must be registered with the local municipal authority (municipal corporation or gram panchayat) within 21 days of occurrence.\n2. **Documents Needed**: You will need the proof of birth from the hospital (discharge summary), identity proof of parents (Aadhaar Card, Voter ID), and an affidavit if registering after 21 days.\n3. **Application**: Apply online through your state's Civil Registration System (CRS) portal or visit the local municipal office/panchayat office.\n4. **Fee**: Free of cost within 21 days. A nominal late fee applies if registered after 21 days.",
    answerHi: "भारत में जन्म प्रमाण पत्र प्राप्त करने के लिए:\n1. **जन्म का पंजीकरण**: जन्म होने के 21 दिनों के भीतर स्थानीय नगर निकाय (नगर निगम या ग्राम पंचायत) में पंजीकरण कराया जाना चाहिए।\n2. **आवश्यक दस्तावेज**: आपको अस्पताल से जन्म का प्रमाण (डिस्चार्ज समरी), माता-पिता का पहचान प्रमाण (आधार कार्ड, मतदाता पहचान पत्र), और यदि 21 दिनों के बाद पंजीकरण कर रहे हैं तो एक हलफनामा की आवश्यकता होगी।\n3. **आवेदन**: अपने राज्य के सिविल रजिस्ट्रेशन सिस्टम (CRS) पोर्टल के माध्यम से ऑनलाइन आवेदन करें या स्थानीय नगर पालिका कार्यालय/पंचायत कार्यालय में जाएं।\n4. **शुल्क**: 21 दिनों के भीतर निःशुल्क। 21 दिनों के बाद पंजीकृत होने पर मामूली विलंब शुल्क लागू होता है।"
  },
  {
    keywords: ["awas yojana", "pmay", "documents awas", "house scheme", "आवास योजना"],
    intent: "pmay_docs",
    question: "Documents required for PM Awas Yojana (PMAY)?",
    questionHi: "पीएम आवास योजना (PMAY) के लिए कौन से दस्तावेज आवश्यक हैं?",
    answer: "To apply for Pradhan Mantri Awas Yojana (PMAY), you need the following documents:\n1. **Identity Proof**: Aadhaar Card (mandatory), Voter ID, PAN Card, or Passport.\n2. **Address Proof**: Driving License, Utility Bills (Electricity, Water), or Voter ID.\n3. **Income Proof**: Salary slips, Form 16, or Income Tax Returns (ITR) for salaried. For self-employed, an affidavit of income and bank statement.\n4. **Property Details**: Affidavit stating that you or your family members do not own a pucca house anywhere in India, and land/property valuation certificates.",
    answerHi: "प्रधानमंत्री आवास योजना (PMAY) के लिए आवेदन करने के लिए, आपको निम्नलिखित दस्तावेजों की आवश्यकता है:\n1. **पहचान का प्रमाण**: आधार कार्ड (अनिवार्य), मतदाता पहचान पत्र, पैन कार्ड, या पासपोर्ट।\n2. **पते का प्रमाण**: ड्राइविंग लाइसेंस, उपयोगिता बिल (बिजली, पानी), या मतदाता पहचान पत्र।\n3. **आय का प्रमाण**: वेतनभोगी के लिए वेतन पर्ची, फॉर्म 16, या आयकर रिटर्न (ITR)। स्वरोजगार के लिए, आय का एक हलफनामा और बैंक स्टेटमेंट।\n4. **संपत्ति विवरण**: हलफनामा जिसमें यह कहा गया हो कि आपके या आपके परिवार के सदस्यों के पास भारत में कहीं भी पक्का घर नहीं है, और भूमि/संपत्ति मूल्यांकन प्रमाण पत्र।"
  },
  {
    keywords: ["street light", "broken light", "streetlight", "बिजली", "सड़क की लाइट"],
    intent: "broken_streetlight",
    question: "How to report a broken street light?",
    questionHi: "सड़क की टूटी हुई लाइट की रिपोर्ट कैसे करें?",
    answer: "If a street light is broken in your area, you can report it via:\n1. **Civic Companion App**: Go to our 'Report Issue' tab in this app, select 'Streetlight Failure', fill in the details, upload a photo, and generate the complaint letter.\n2. **Municipal Portal**: Visit your local city municipal corporation website (e.g., MCD, BMC, BBMP) and file a complaint in the grievance cell.\n3. **Toll-Free Helpline**: Most municipalities have a 24/7 helpline number (like 1913 or custom local numbers) where you can lodge complaints.\n4. **Ward Councillor**: You can also contact your local ward member or corporator to expedite the repair.",
    answerHi: "यदि आपके क्षेत्र में सड़क की लाइट खराब है, तो आप इसकी रिपोर्ट इस प्रकार कर सकते हैं:\n1. **सिविक कंपैनियन ऐप**: इस ऐप में हमारे 'Report Issue' टैब पर जाएं, 'Streetlight Failure' चुनें, विवरण भरें, एक फोटो अपलोड करें और शिकायत पत्र तैयार करें।\n2. **नगर पालिका पोर्टल**: अपने स्थानीय शहर नगर निगम की वेबसाइट पर जाएं और शिकायत सेल में शिकायत दर्ज करें।\n3. **टोल-फ्री हेल्पलाइन**: अधिकांश नगर पालिकाओं में 24/7 हेल्पलाइन नंबर (जैसे 1913) होता है जहां आप शिकायत दर्ज कर सकते हैं।\n4. **वार्ड पार्षद**: मरम्मत में तेजी लाने के लिए आप अपने स्थानीय वार्ड सदस्य या पार्षद से भी संपर्क कर सकते हैं।"
  },
  {
    keywords: ["aadhaar", "uidai", "aadhar card", "आधार कार्ड"],
    intent: "aadhaar_card",
    question: "How to apply for an Aadhaar Card?",
    questionHi: "आधार कार्ड के लिए आवेदन कैसे करें?",
    answer: "To apply for a new Aadhaar Card:\n1. **Locate Center**: Find an authorized Aadhaar Enrollment Center near you via the UIDAI official website.\n2. **Appointment**: Book an appointment online (optional) or walk directly into the center.\n3. **Documents**: Take Proof of Identity (POI) (like PAN, Voter ID) and Proof of Address (POA) (like electricity bill, bank passbook).\n4. **Biometrics**: Submit your fingerprints, iris scans, and a photograph at the enrollment center.\n5. **Tracking**: You will receive an Acknowledgement Slip with a 14-digit Enrollment ID to track your status on uidai.gov.in.",
    answerHi: "नए आधार कार्ड के लिए आवेदन करने के लिए:\n1. **केंद्र का पता लगाएं**: यूआईडीएआई (UIDAI) की आधिकारिक वेबसाइट के माध्यम से अपने पास एक अधिकृत आधार नामांकन केंद्र खोजें।\n2. **अपॉइंटमेंट**: ऑनलाइन अपॉइंटमेंट बुक करें (वैकल्पिक) या सीधे केंद्र पर जाएं।\n3. **दस्तावेज**: पहचान का प्रमाण (POI) (जैसे पैन, वोटर आईडी) और पते का प्रमाण (POA) (जैसे बिजली बिल, बैंक पासबुक) अपने साथ ले जाएं।\n4. **बायोमेट्रिक्स**: नामांकन केंद्र पर अपनी उंगलियों के निशान, आईरिस स्कैन और एक तस्वीर जमा करें।\n5. **ट्रैकिंग**: आपको uidai.gov.in पर अपनी स्थिति को ट्रैक करने के लिए 14-अंकों की नामांकन आईडी के साथ एक पावती पर्ची प्राप्त होगी।"
  },
  {
    keywords: ["kisan", "pm-kisan", "farmer scheme", "किसान", "पीएम किसान"],
    intent: "pm_kisan_info",
    question: "What is PM-KISAN and who is eligible?",
    questionHi: "PM-KISAN क्या है और इसके लिए कौन पात्र है?",
    answer: "PM-KISAN is a central government scheme providing income support to farmer families.\n1. **Benefits**: ₹6,000 per year, paid in three installments of ₹2,000 each every four months directly to bank accounts.\n2. **Eligibility**: All landholding farmer families who own cultivable land are eligible.\n3. **Exclusions**: Institutional landowners, families with members holding constitutional posts, serving/retired government employees, income tax payers, and professionals (doctors, engineers, CAs) are excluded.",
    answerHi: "पीएम-किसान किसान परिवारों को आय सहायता प्रदान करने वाली एक केंद्र सरकार की योजना है।\n1. **लाभ**: प्रति वर्ष ₹6,000, जो हर चार महीने में ₹2,000 की तीन किश्तों में सीधे बैंक खातों में भुगतान किया जाता है।\n2. **पात्रता**: सभी भूमिधारक किसान परिवार जिनके पास खेती योग्य भूमि है, पात्र हैं।\n3. **अपवर्जन**: संस्थागत भूमि मालिक, संवैधानिक पदों पर रहने वाले सदस्यों वाले परिवार, सेवारत/सेवानिवृत्त सरकारी कर्मचारी, आयकर दाता और पेशेवर (डॉक्टर, इंजीनियर, सीए) इसमें शामिल नहीं हैं।"
  },
  {
    keywords: ["sanitation", "garbage", "waste", "cleanliness", "safai", "कचरा", "सफाई"],
    intent: "sanitation_complaint",
    question: "How can I register a complaint about local sanitation?",
    questionHi: "मैं स्थानीय स्वच्छता के बारे में शिकायत कैसे दर्ज कर सकता हूँ?",
    answer: "To report poor sanitation, uncollected garbage, or drainage issues:\n1. **Swachhata App**: Download the official Swachhata App by the Ministry of Housing and Urban Affairs, take a photo of the garbage site, and upload it. The local municipal team is mandated to resolve it within 24-48 hours.\n2. **Local Municipal Helpline**: Call your city's municipal sanitation wing helpline.\n3. **Civic Companion**: Use our 'Report Issue' section in this web app, select 'Sanitation and Waste', fill the form, and send the generated draft to your ward office.",
    answerHi: "खराब स्वच्छता, बिना इकट्ठा किए गए कचरे या जल निकासी की समस्याओं की रिपोर्ट करने के लिए:\n1. **स्वच्छता ऐप**: आवास और शहरी मामलों के मंत्रालय द्वारा आधिकारिक स्वच्छता ऐप डाउनलोड करें, कचरे की जगह की फोटो लें और अपलोड करें। स्थानीय नगर पालिका टीम को 24-48 घंटों के भीतर इसका समाधान करना अनिवार्य है।\n2. **स्थानीय नगर पालिका हेल्पलाइन**: अपने शहर के नगर निगम स्वच्छता विभाग की हेल्पलाइन पर कॉल करें।\n3. **सिविक कंपैनियन**: इस वेब ऐप में हमारे 'Report Issue' अनुभाग का उपयोग करें, 'Sanitation and Waste' चुनें, फॉर्म भरें और तैयार ड्राफ्ट को अपने वार्ड कार्यालय में भेजें।"
  },
  {
    keywords: ["ayushman card", "golden card", "ayushman bharat", "आयुष्मान कार्ड"],
    intent: "ayushman_card",
    question: "What is Ayushman Bharat card and how to get it?",
    questionHi: "आयुष्मान भारत कार्ड क्या है और इसे कैसे प्राप्त करें?",
    answer: "The Ayushman Card (Golden Card) is a card issued under AB-PMJAY to get cashless healthcare treatment.\n1. **Check Eligibility**: Check if your name is in the SECC-2011 list via Mera PMJAY portal (mera.pmjay.gov.in) or call 14555.\n2. **Visit Center**: Go to the nearest Common Service Centre (CSC) or an empaneled government/private hospital.\n3. **Verification**: Present your Aadhaar Card, Ration Card, and Family Identity Document.\n4. **Card Download**: Once verified, the operator will print the Ayushman Card for you, or you can download it via the Ayushman App.",
    answerHi: "आयुष्मान कार्ड (गोल्डन कार्ड) कैशलेस स्वास्थ्य उपचार प्राप्त करने के लिए AB-PMJAY के तहत जारी किया जाने वाला एक कार्ड है।\n1. **पात्रता की जांच करें**: मेरा पीएमजेएवाई पोर्टल (mera.pmjay.gov.in) के माध्यम से जांचें कि क्या आपका नाम SECC-2011 सूची में है या 14555 पर कॉल करें।\n2. **केंद्र पर जाएं**: निकटतम कॉमन सर्विस सेंटर (CSC) या किसी सूचीबद्ध सरकारी/निजी अस्पताल में जाएं।\n3. **सत्यापन**: अपना आधार कार्ड, राशन कार्ड और पारिवारिक पहचान दस्तावेज प्रस्तुत करें।\n4. **कार्ड डाउनलोड**: सत्यापित होने के बाद, ऑपरेटर आपके लिए आयुष्मान कार्ड प्रिंट करेगा, या आप आयुष्मान ऐप के माध्यम से इसे डाउनलोड कर सकते हैं।"
  },
  {
    keywords: ["pan card", "pan online", "permanent account number", "पैन कार्ड"],
    intent: "pan_card_apply",
    question: "How to apply for a PAN Card online?",
    questionHi: "पैन कार्ड के लिए ऑनलाइन आवेदन कैसे करें?",
    answer: "Applying for a PAN Card online is simple and fast:\n1. **Portal**: Visit the NSDL (TIN-NSDL) or UTITSL official portal for PAN applications.\n2. **Form 49A**: Select 'New PAN - Indian Citizen (Form 49A)' and fill in your details.\n3. **e-KYC**: You can use Aadhaar-based e-KYC for paperless application. This requires your Aadhaar to be linked to your mobile number for OTP.\n4. **Fee**: Pay the fee online (around ₹107 for physical card, ₹66 for e-PAN).\n5. **Submission**: If e-KYC is not used, print the completed form, sign it, attach photos, and courier it to the NSDL office. E-PAN is emailed within a few hours if e-KYC is used.",
    answerHi: "पैन कार्ड के लिए ऑनलाइन आवेदन करना सरल और तेज़ है:\n1. **पोर्टल**: पैन आवेदनों के लिए NSDL (TIN-NSDL) या UTITSL आधिकारिक पोर्टल पर जाएं।\n2. **फॉर्म 49A**: 'न्यू पैन - भारतीय नागरिक (फॉर्म 49A)' चुनें और अपना विवरण भरें।\n3. **ई-केवाईसी**: आप पेपरलेस आवेदन के लिए आधार आधारित ई-केवाईसी का उपयोग कर सकते हैं। इसके लिए ओटीपी के लिए आपके आधार को मोबाइल नंबर से लिंक करना होगा।\n4. **शुल्क**: ऑनलाइन शुल्क का भुगतान करें (भौतिक कार्ड के लिए लगभग ₹107, ई-पैन के लिए ₹66)।\n5. **जमा करना**: यदि ई-केवाईसी का उपयोग नहीं किया जाता है, तो पूरा फॉर्म प्रिंट करें, उस पर हस्ताक्षर करें, फोटो लगाएं और उसे एनएसडीएल कार्यालय में कूरियर करें। ई-केवाईसी का उपयोग करने पर कुछ ही घंटों में ई-पैन ईमेल कर दिया जाता है।"
  }
];

export function getChatResponse(message, isHindi = false) {
  const cleanMsg = message.toLowerCase().trim();
  
  // Look for keyword matches
  for (const item of chatbotKb) {
    for (const kw of item.keywords) {
      if (cleanMsg.includes(kw)) {
        return {
          question: isHindi ? item.questionHi : item.question,
          answer: isHindi ? item.answerHi : item.answer
        };
      }
    }
  }
  
  // Default responses
  if (isHindi) {
    return {
      question: "मदद",
      answer: "नमस्ते! मैं आपका भारत एआई सिविक साथी हूँ। मैं आपके प्रश्नों को पूरी तरह से समझ नहीं पाया। आप सरकारी योजनाओं, जन्म प्रमाण पत्र, पीएम आवास योजना, सड़क की लाइट खराब होने, या आधार कार्ड के बारे में पूछ सकते हैं।"
    };
  } else {
    return {
      question: "Help",
      answer: "Hello! I am your Bharat AI Civic Companion. I didn't quite catch that. You can ask about government schemes (like PM-KISAN, PMAY), birth certificates, reporting broken street lights, obtaining Aadhaar, PAN cards, or sanitation problems."
    };
  }
}
