// ===== NOUN QUESTIONS (120) =====
const nounQuestions = [
                {
                    id: 1,
                    question: "'Chennai' என்பது எவ்வகை Noun?",
                    options: ["Common Noun", "Proper Noun", "Collective Noun", "Abstract Noun"],
                    correct: 1,
                    explanation: "'Chennai' என்பது Proper Noun. ஏனெனில் இது ஒரு குறிப்பிட்ட இடத்தின் பெயர். Proper Nouns எப்போதும் Capital Letter-ல் தொடங்கும்."
                },
                {
                    id: 2,
                    question: "'team' என்பது எவ்வகை Noun?",
                    options: ["Material Noun", "Collective Noun", "Abstract Noun", "Proper Noun"],
                    correct: 1,
                    explanation: "'team' என்பது Collective Noun. ஏனெனில் இது பல நபர்களின் குழுவை ஒரே சொல்லில் குறிக்கிறது."
                },
                {
                    id: 3,
                    question: "பின்வருவனவற்றில் எது Concrete Noun அல்ல?",
                    options: ["book", "happiness", "table", "computer"],
                    correct: 1,
                    explanation: "'happiness' என்பது Abstract Noun. இது காணமுடியாத உணர்வைக் குறிக்கிறது. Concrete Nouns தொட்டு உணரக்கூடிய பொருள்கள்."
                },
                {
                    id: 4,
                    question: "'water' என்பது எவ்வகை Noun?",
                    options: ["Countable Noun", "Uncountable Noun", "Proper Noun", "Collective Noun"],
                    correct: 1,
                    explanation: "'water' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது. 'a water' என்று பயன்படுத்த முடியாது."
                },
                {
                    id: 5,
                    question: "பின்வரும் சொற்களில் எது Compound Noun?",
                    options: ["happiness", "toothbrush", "city", "student"],
                    correct: 1,
                    explanation: "'toothbrush' என்பது Compound Noun. இது tooth + brush என்ற இரண்டு சொற்கள் சேர்ந்து உருவானது."
                },
                {
                    id: 6,
                    question: "'honesty' என்பது எவ்வகை Noun?",
                    options: ["Concrete Noun", "Material Noun", "Abstract Noun", "Proper Noun"],
                    correct: 2,
                    explanation: "'honesty' என்பது Abstract Noun. இது காணமுடியாத குணத்தைக் குறிக்கிறது."
                },
                {
                    id: 7,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["gold", "family", "city", "book"],
                    correct: 0,
                    explanation: "'gold' என்பது Material Noun. இது ஒரு பொருளைக் குறிக்கிறது, எண்ண முடியாதது."
                },
                {
                    id: 8,
                    question: "'children' என்பதன் Singular வடிவம் என்ன?",
                    options: ["childs", "child", "childrens", "child's"],
                    correct: 1,
                    explanation: "'children' என்பதன் Singular வடிவம் 'child'. இது ஒழுங்கற்ற பன்மை Noun."
                },
                {
                    id: 9,
                    question: "பின்வருவனவற்றில் எது Proper Noun ஆக பயன்படுத்தப்படலாம்?",
                    options: ["river", "mountain", "Ganges", "ocean"],
                    correct: 2,
                    explanation: "'Ganges' என்பது Proper Noun. ஏனெனில் இது குறிப்பிட்ட ஆற்றின் பெயர்."
                },
                {
                    id: 10,
                    question: "'information' என்பது எவ்வகை Noun?",
                    options: ["Countable Noun", "Uncountable Noun", "Collective Noun", "Proper Noun"],
                    correct: 1,
                    explanation: "'information' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 11,
                    question: "'flock of birds' இல் 'flock' எவ்வகை Noun?",
                    options: ["Proper Noun", "Collective Noun", "Abstract Noun", "Material Noun"],
                    correct: 1,
                    explanation: "'flock' என்பது Collective Noun. இது விலங்குகள் அல்லது பறவைகளின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 12,
                    question: "'sugar' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'sugar' என்பது Uncountable Noun. இது பொருளைக் குறிக்கும் Material Noun ஆகும்."
                },
                {
                    id: 13,
                    question: "பின்வருவனவற்றில் எது Common Noun?",
                    options: ["India", "Monday", "teacher", "January"],
                    correct: 2,
                    explanation: "'teacher' என்பது Common Noun. இது ஒரு வகுப்பைச் சேர்ந்த அனைவரையும் குறிக்கிறது."
                },
                {
                    id: 14,
                    question: "'love' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Collective"],
                    correct: 1,
                    explanation: "'love' என்பது Abstract Noun. இது காணமுடியாத உணர்வைக் குறிக்கிறது."
                },
                {
                    id: 15,
                    question: "'classroom' என்பது எவ்வகை Compound Noun?",
                    options: ["ஒன்றாக எழுதப்படும்", "இடைவெளியுடன்", "ஹைபன் உடன்", "தனிச்சொல்"],
                    correct: 0,
                    explanation: "'classroom' என்பது ஒன்றாக எழுதப்படும் Compound Noun. இது class + room."
                },
                {
                    id: 16,
                    question: "'Kavi's book' இல் Kavi's எவ்வகை Noun?",
                    options: ["Possessive Noun", "Common Noun", "Proper Noun", "Abstract Noun"],
                    correct: 0,
                    explanation: "'Ravi's' என்பது Possessive Case of Noun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 17,
                    question: "பின்வருவனவற்றில் எது Countable Noun?",
                    options: ["water", "milk", "rice", "apple"],
                    correct: 3,
                    explanation: "'apple' என்பது Countable Noun. இதை எண்ணிக்கையில் சொல்லலாம்: one apple, two apples."
                },
                {
                    id: 18,
                    question: "'wisdom' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'wisdom' என்பது Abstract Noun. இது காணமுடியாத அறிவுத்திறனைக் குறிக்கிறது."
                },
                {
                    id: 19,
                    question: "'bunch of keys' இல் 'bunch' எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'bunch' என்பது Collective Noun. இது பொருள்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 20,
                    question: "'Iron' என்பது எவ்வகை Noun?",
                    options: ["Proper Noun", "Material Noun", "Abstract Noun", "Collective Noun"],
                    correct: 1,
                    explanation: "'Iron' என்பது Material Noun. இது உலோகத்தைக் குறிக்கிறது."
                },
                // Questions 21-30
                {
                    id: 21,
                    question: "'audience' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'audience' என்பது Collective Noun. இது கேட்பவர்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 22,
                    question: "பின்வருவனவற்றில் எது Proper Noun?",
                    options: ["country", "city", "Delhi", "river"],
                    correct: 2,
                    explanation: "'Delhi' என்பது Proper Noun. இது இந்தியாவின் தலைநகரம்."
                },
                {
                    id: 23,
                    question: "'furniture' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'furniture' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 24,
                    question: "'courage' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'courage' என்பது Abstract Noun. இது காணமுடியாத தைரியத்தைக் குறிக்கிறது."
                },
                {
                    id: 25,
                    question: "'mother-in-law' என்பது எவ்வகை Noun?",
                    options: ["Simple Noun", "Compound Noun", "Proper Noun", "Material Noun"],
                    correct: 1,
                    explanation: "'mother-in-law' என்பது Compound Noun. இது ஹைபன் (-) உடன் எழுதப்படுகிறது."
                },
                {
                    id: 26,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["stone", "sand", "herd", "water"],
                    correct: 2,
                    explanation: "'herd' என்பது Collective Noun. இது விலங்குகளின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 27,
                    question: "'knowledge' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'knowledge' என்பது Abstract Noun. இது காணமுடியாத அறிவைக் குறிக்கிறது."
                },
                {
                    id: 28,
                    question: "'police' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'police' என்பது Collective Noun. இது காவல்துறையினரின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 29,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["wood", "crowd", "truth", "child"],
                    correct: 0,
                    explanation: "'wood' என்பது Material Noun. இது மரத்தைக் குறிக்கிறது."
                },
                {
                    id: 30,
                    question: "'committee' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'committee' என்பது Collective Noun. இது குழுவைக் குறிக்கிறது."
                },
                // Questions 31-40
                {
                    id: 31,
                    question: "'beauty' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'beauty' என்பது Abstract Noun. இது காணமுடியாத அழகைக் குறிக்கிறது."
                },
                {
                    id: 32,
                    question: "பின்வருவனவற்றில் எது Countable Noun?",
                    options: ["air", "news", "chair", "advice"],
                    correct: 2,
                    explanation: "'chair' என்பது Countable Noun. இதை எண்ணிக்கையில் சொல்லலாம்."
                },
                {
                    id: 33,
                    question: "'silver' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Material", "Abstract", "Collective"],
                    correct: 1,
                    explanation: "'silver' என்பது Material Noun. இது வெள்ளி உலோகத்தைக் குறிக்கிறது."
                },
                {
                    id: 34,
                    question: "'swimming pool' என்பது எவ்வகை Compound Noun?",
                    options: ["ஒன்றாக", "இடைவெளியுடன்", "ஹைபன் உடன்", "தனிச்சொல்"],
                    correct: 1,
                    explanation: "'swimming pool' என்பது இடைவெளியுடன் எழுதப்படும் Compound Noun."
                },
                {
                    id: 35,
                    question: "'poverty' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'poverty' என்பது Abstract Noun. இது காணமுடியாத வறுமை நிலையைக் குறிக்கிறது."
                },
                {
                    id: 36,
                    question: "பின்வருவனவற்றில் எது Uncountable Noun?",
                    options: ["egg", "bread", "dog", "house"],
                    correct: 1,
                    explanation: "'bread' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 37,
                    question: "'family' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'family' என்பது Collective Noun. இது குடும்ப உறுப்பினர்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 38,
                    question: "'friendship' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'friendship' என்பது Abstract Noun. இது காணமுடியாத நட்புணர்வைக் குறிக்கிறது."
                },
                {
                    id: 39,
                    question: "பின்வருவனவற்றில் எது Compound Noun?",
                    options: ["happiness", "sadness", "blackboard", "anger"],
                    correct: 2,
                    explanation: "'blackboard' என்பது Compound Noun. இது black + board."
                },
                {
                    id: 40,
                    question: "'jury' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'jury' என்பது Collective Noun. இது நீதிமன்றத்தில் உள்ள நிபுணர் குழுவைக் குறிக்கிறது."
                },
                // Questions 41-52
                {
                    id: 41,
                    question: "'childhood' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'childhood' என்பது Abstract Noun. இது காணமுடியாத குழந்தைப் பருவத்தைக் குறிக்கிறது."
                },
                {
                    id: 42,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["cotton", "crowd", "committee", "audience"],
                    correct: 0,
                    explanation: "'cotton' என்பது Material Noun. இது பருத்தி நூலைக் குறிக்கிறது."
                },
                {
                    id: 43,
                    question: "'x-ray' என்பது எவ்வகை Compound Noun?",
                    options: ["ஒன்றாக", "இடைவெளியுடன்", "ஹைபன் உடன்", "தனிச்சொல்"],
                    correct: 2,
                    explanation: "'x-ray' என்பது ஹைபன் (-) உடன் எழுதப்படும் Compound Noun."
                },
                {
                    id: 44,
                    question: "'anger' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'anger' என்பது Abstract Noun. இது காணமுடியாத கோப உணர்வைக் குறிக்கிறது."
                },
                {
                    id: 45,
                    question: "'staff' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'staff' என்பது Collective Noun. இது ஊழியர்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 46,
                    question: "பின்வருவனவற்றில் எது Proper Noun?",
                    options: ["month", "Tuesday", "season", "weather"],
                    correct: 1,
                    explanation: "'Tuesday' என்பது Proper Noun. இது குறிப்பிட்ட ஒரு நாளின் பெயர்."
                },
                {
                    id: 47,
                    question: "'glass' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Material", "Abstract", "Collective"],
                    correct: 1,
                    explanation: "'glass' என்பது Material Noun. இது கண்ணாடி பொருளைக் குறிக்கிறது."
                },
                {
                    id: 48,
                    question: "'laughter' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'laughter' என்பது Abstract Noun. இது காணமுடியாத சிரிப்பு ஒலியைக் குறிக்கிறது."
                },
                {
                    id: 49,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["pack", "stone", "water", "book"],
                    correct: 0,
                    explanation: "'pack' என்பது Collective Noun. இது பொருள்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 50,
                    question: "'truth' என்பது எவ்வகை Noun?",
                    options: ["Concrete", "Abstract", "Material", "Proper"],
                    correct: 1,
                    explanation: "'truth' என்பது Abstract Noun. இது காணமுடியாத உண்மையைக் குறிக்கிறது."
                },
                {
                    id: 51,
                    question: "'post office' என்பது எவ்வகை Compound Noun?",
                    options: ["ஒன்றாக", "இடைவெளியுடன்", "ஹைபன் உடன்", "தனிச்சொல்"],
                    correct: 1,
                    explanation: "'post office' என்பது இடைவெளியுடன் எழுதப்படும் Compound Noun."
                },
                {
                    id: 52,
                    question: "'crew' என்பது எவ்வகை Noun?",
                    options: ["Proper", "Collective", "Abstract", "Material"],
                    correct: 1,
                    explanation: "'crew' என்பது Collective Noun. இது கப்பல் அல்லது விமானத்தில் உள்ள ஊழியர்களின் குழுவைக் குறிக்கிறது."
                },
                // ... (previous 52 questions here - I'll include a few as examples)
                {
                    id: 53,
                    question: "'electricity' என்பது எவ்வகை Noun?",
                    options: ["Concrete Noun", "Abstract Noun", "Material Noun", "Collective Noun"],
                    correct: 1,
                    explanation: "'electricity' என்பது Abstract Noun. இது காணமுடியாத ஆற்றலைக் குறிக்கிறது."
                },
                {
                    id: 54,
                    question: "பின்வருவனவற்றில் எது Countable Noun?",
                    options: ["air", "information", "furniture", "student"],
                    correct: 3,
                    explanation: "'student' என்பது Countable Noun. இதை எண்ணிக்கையில் சொல்லலாம்."
                },
                {
                    id: 55,
                    question: "'news' என்பது எவ்வகை Noun?",
                    options: ["Singular Noun", "Plural Noun", "Uncountable Noun", "Proper Noun"],
                    correct: 2,
                    explanation: "'news' என்பது Uncountable Noun. இது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படுகிறது."
                },
                // Adding more noun questions to reach 120...
                {
                    id: 56,
                    question: "'bread' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'bread' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 57,
                    question: "'scissors' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Always Singular", "Always Plural"],
                    correct: 3,
                    explanation: "'scissors' என்பது எப்போதும் பன்மையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 58,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["table", "computer", "freedom", "building"],
                    correct: 2,
                    explanation: "'freedom' என்பது Abstract Noun. இது காணமுடியாத சுதந்திரத்தைக் குறிக்கிறது."
                },
                {
                    id: 59,
                    question: "'luggage' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'luggage' என்பது Uncountable Noun. இது பொதுவாக ஒருமையிலேயே பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 60,
                    question: "'mathematics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'mathematics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 61,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["paper", "crowd", "family", "committee"],
                    correct: 0,
                    explanation: "'paper' என்பது Material Noun. இது ஒரு பொருளைக் குறிக்கிறது."
                },
                {
                    id: 62,
                    question: "'advice' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    correct: 3,
                    explanation: "'advice' என்பது Abstract noun and Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 63,
                    question: "'spectacles' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Always Singular", "Always Plural"],
                    correct: 3,
                    explanation: "'spectacles' என்பது எப்போதும் பன்மையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 64,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["army", "stone", "water", "book"],
                    correct: 0,
                    explanation: "'army' என்பது Collective Noun. இது சிப்பாய்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 65,
                    question: "'homework' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'homework' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 66,
                    question: "'trousers' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Always Singular", "Always Plural"],
                    correct: 3,
                    explanation: "'trousers' என்பது எப்போதும் பன்மையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 67,
                    question: "பின்வருவனவற்றில் எது Concrete Noun?",
                    options: ["love", "happiness", "anger", "mountain"],
                    correct: 3,
                    explanation: "'mountain' என்பது Concrete Noun. இது தொட்டு உணரக்கூடியது."
                },
                {
                    id: 68,
                    question: "'equipment' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'equipment' என்பது Uncountable Noun. இது பொதுவாக ஒருமையிலேயே பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 69,
                    question: "'physics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'physics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 70,
                    question: "பின்வருவனவற்றில் எது Proper Adjective?",
                    options: ["Indian food", "big house", "red car", "fast train"],
                    correct: 0,
                    explanation: "'Indian' என்பது Proper Adjective. இது Proper Noun-இல் இருந்து உருவானது."
                },
                {
                    id: 71,
                    question: "'research' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'research' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 72,
                    question: "'jeans' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Always Singular", "Always Plural"],
                    correct: 3,
                    explanation: "'jeans' என்பது எப்போதும் பன்மையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 73,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["childhood", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'childhood' என்பது Abstract Noun. இது காணமுடியாத குழந்தைப் பருவத்தைக் குறிக்கிறது."
                },
                {
                    id: 74,
                    question: "'poetry' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'poetry' என்பது Uncountable Noun. இது கவிதைகளின் தொகுப்பைக் குறிக்கிறது."
                },
                {
                    id: 75,
                    question: "'economics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'economics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 76,
                    question: "பின்வருவனவற்றில் எது Compound Noun?",
                    options: ["bedroom", "happiness", "anger", "water"],
                    correct: 0,
                    explanation: "'bedroom' என்பது Compound Noun. இது bed + room."
                },
                {
                    id: 77,
                    question: "'knowledge' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],

                    correct: 3,
                    explanation: "'knowledge' என்பது Abstract Noun and Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 78,
                    question: "'politics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'politics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 79,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["steel", "army", "family", "committee"],
                    correct: 0,
                    explanation: "'steel' என்பது Material Noun. இது உலோகத்தைக் குறிக்கிறது."
                },
                {
                    id: 80,
                    question: "'progress' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'progress' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 81,
                    question: "'measles' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Disease Noun"],
                    correct: 0,
                    explanation: "'measles' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 82,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["library", "stone", "water", "book"],
                    correct: 0,
                    explanation: "'library' என்பது Collective Noun. இது புத்தகங்களின் தொகுப்பைக் குறிக்கிறது."
                },
                {
                    id: 83,
                    question: "'weather' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'weather' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 84,
                    question: "'linguistics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'linguistics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 85,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["poverty", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'poverty' என்பது Abstract Noun. இது காணமுடியாத வறுமை நிலையைக் குறிக்கிறது."
                },
                {
                    id: 86,
                    question: "'furniture' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'furniture' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 87,
                    question: "'athletics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'athletics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 88,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["rubber", "crowd", "family", "committee"],
                    correct: 0,
                    explanation: "'rubber' என்பது Material Noun. இது ஒரு பொருளைக் குறிக்கிறது."
                },
                {
                    id: 89,
                    question: "'evidence' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'evidence' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 90,
                    question: "'news' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'news' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 91,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["wisdom", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'wisdom' என்பது Abstract Noun. இது காணமுடியாத ஞானத்தைக் குறிக்கிறது."
                },
                {
                    id: 92,
                    question: "'machinery' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'machinery' என்பது Uncountable Noun. இது இயந்திரங்களின் தொகுப்பைக் குறிக்கிறது."
                },
                {
                    id: 93,
                    question: "'ethics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'ethics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 94,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["orchestra", "stone", "water", "book"],
                    correct: 0,
                    explanation: "'orchestra' என்பது Collective Noun. இது இசைக்கருவிகள் வாசிப்பவர்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 95,
                    question: "'scenery' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'scenery' என்பது Uncountable Noun. இது காட்சியின் அழகைக் குறிக்கிறது."
                },
                {
                    id: 96,
                    question: "'mathematics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'mathematics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 97,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["justice", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'justice' என்பது Abstract Noun. இது காணமுடியாத நீதியைக் குறிக்கிறது."
                },
                {
                    id: 98,
                    question: "'jewelry' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'jewelry' என்பது Uncountable Noun. இது நகைகளின் தொகுப்பைக் குறிக்கிறது."
                },
                {
                    id: 99,
                    question: "'phonetics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'phonetics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 100,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["cement", "crowd", "family", "committee"],
                    correct: 0,
                    explanation: "'cement' என்பது Material Noun. இது ஒரு கட்டுமானப் பொருளைக் குறிக்கிறது."
                },
                // Continuing to 120...
                {
                    id: 101,
                    question: "'information' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'information' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 102,
                    question: "'physics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'physics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 103,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["patience", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'patience' என்பது Abstract Noun. இது காணமுடியாத பொறுமையைக் குறிக்கிறது."
                },
                {
                    id: 104,
                    question: "'clothing' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'clothing' என்பது Uncountable Noun. இது ஆடைகளின் தொகுப்பைக் குறிக்கிறது."
                },
                {
                    id: 105,
                    question: "'statistics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'statistics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 106,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["fleet", "stone", "water", "book"],
                    correct: 0,
                    explanation: "'fleet' என்பது Collective Noun. இது கப்பல்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 107,
                    question: "'money' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'money' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 108,
                    question: "'economics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'economics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 109,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["courage", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'courage' என்பது Abstract Noun. இது காணமுடியாத தைரியத்தைக் குறிக்கிறது."
                },
                {
                    id: 110,
                    question: "'baggage' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'baggage' என்பது Uncountable Noun. இது பொதுவாக ஒருமையிலேயே பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 111,
                    question: "'acoustics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'acoustics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 112,
                    question: "பின்வருவனவற்றில் எது Material Noun?",
                    options: ["plastic", "crowd", "family", "committee"],
                    correct: 0,
                    explanation: "'plastic' என்பது Material Noun. இது ஒரு பொருளைக் குறிக்கிறது."
                },
                {
                    id: 113,
                    question: "'work' (வேலை) என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'work' (வேலை) என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 114,
                    question: "'politics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'politics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 115,
                    question: "பின்வருவனவற்றில் எது Abstract Noun?",
                    options: ["kindness", "table", "chair", "computer"],
                    correct: 0,
                    explanation: "'kindness' என்பது Abstract Noun. இது காணமுடியாத தயவைக் குறிக்கிறது."
                },
                {
                    id: 116,
                    question: "'traffic' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Collective"],
                    correct: 1,
                    explanation: "'traffic' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 117,
                    question: "'mechanics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Abstract"],
                    correct: 0,
                    explanation: "'mechanics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                },
                {
                    id: 118,
                    question: "பின்வருவனவற்றில் எது Collective Noun?",
                    options: ["choir", "stone", "water", "book"],
                    correct: 0,
                    explanation: "'choir' என்பது Collective Noun. இது பாடகர்களின் குழுவைக் குறிக்கிறது."
                },
                {
                    id: 119,
                    question: "'laughter' என்பது எவ்வகை Noun?",
                    options: ["Countable", "Uncountable", "Proper", "Abstract"],
                    correct: 1,
                    explanation: "'laughter' என்பது Uncountable Noun. இதை எண்ணிக்கையில் சொல்ல முடியாது."
                },
                {
                    id: 120,
                    question: "'genetics' என்பது எவ்வகை Noun?",
                    options: ["Singular", "Plural", "Proper", "Collective"],
                    correct: 0,
                    explanation: "'genetics' என்பது எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும் Noun."
                }
            ];

// ===== PRONOUN QUESTIONS (80) =====
const pronounQuestions = [
                {
                    id: 1,
                    question: "'I, we, you, he, she, it, they' இவை எவ்வகை Pronouns?",
                    options: ["Personal Pronouns", "Possessive Pronouns", "Reflexive Pronouns", "Demonstrative Pronouns"],
                    correct: 0,
                    explanation: "இவை Personal Pronouns. இவை நபர்களைக் குறிக்கும் பிரதிபெயர்கள்."
                },
                {
                    id: 2,
                    question: "'This, that, these, those' இவை எவ்வகை Pronouns?",
                    options: ["Personal", "Possessive", "Reflexive", "Demonstrative"],
                    correct: 3,
                    explanation: "இவை Demonstrative Pronouns. இவை பொருள்களைச் சுட்டிக் காட்டும்."
                },
                {
                    id: 3,
                    question: "'Myself, yourself, himself, herself' இவை எவ்வகை Pronouns?",
                    options: ["Personal", "Possessive", "Reflexive", "Relative"],
                    correct: 2,
                    explanation: "இவை Reflexive Pronouns. இவை செயலைச் செய்பவரே அச்செயலின் பயனாளி என்பதைக் காட்டும்."
                },
                {
                    id: 4,
                    question: "'Who, whom, whose, which, that' இவை எவ்வகை Pronouns?",
                    options: ["Interrogative", "Relative", "Demonstrative", "Indefinite"],
                    correct: 1,
                    explanation: "இவை Relative Pronouns. இவை முக்கிய வாக்கியத்தை துணை வாக்கியத்தோடு இணைக்கும்."
                },
                {
                    id: 5,
                    question: "'Somebody, anybody, nobody, everybody' இவை எவ்வகை Pronouns?",
                    options: ["Personal", "Possessive", "Indefinite", "Demonstrative"],
                    correct: 2,
                    explanation: "இவை Indefinite Pronouns. இவை திட்டவட்டமில்லாத நபர்களையோ பொருள்களையோ குறிக்கும்."
                },
                {
                    id: 6,
                    question: "'Mine, yours, his, hers, ours, theirs' இவை எவ்வகை Pronouns?",
                    options: ["Personal", "Possessive", "Reflexive", "Demonstrative"],
                    correct: 1,
                    explanation: "இவை Possessive Pronouns. இவை உரிமையைக் காட்டும் பிரதிபெயர்கள்."
                },
                {
                    id: 7,
                    question: "'Who, whom, whose, which, what' இவை கேள்வி கேட்கும் போது எவ்வகை Pronouns?",
                    options: ["Relative", "Interrogative", "Demonstrative", "Indefinite"],
                    correct: 1,
                    explanation: "இவை Interrogative Pronouns. இவை கேள்வி கேட்கப் பயன்படும்."
                },
                {
                    id: 8,
                    question: "'Each other, one another' இவை எவ்வகை Pronouns?",
                    options: ["Reciprocal", "Possessive", "Reflexive", "Demonstrative"],
                    correct: 0,
                    explanation: "இவை Reciprocal Pronouns. இவை இருவருக்கிடையே நிகழும் செயலைக் காட்டும்."
                },
                {
                    id: 9,
                    question: "She ___ is responsible for this work.",
                    options: ["she", "herself", "her", "hers"],
                    correct: 1,
                    explanation: "'herself' என்பது Reflexive Pronoun. இங்கு அது emphasis-க்காக பயன்படுத்தப்பட்டுள்ளது."
                },
                {
                    id: 10,
                    question: "This book is ___.",
                    options: ["my", "mine", "me", "I"],
                    correct: 1,
                    explanation: "'mine' என்பது Possessive Pronoun. இது நானுடையது என்பதைக் காட்டுகிறது."
                },
                // Continuing to 80 pronoun questions...
                {
                    id: 11,
                    question: "___ is knocking at the door?",
                    options: ["Who", "Whom", "Whose", "Which"],
                    correct: 0,
                    explanation: "'Who' என்பது Interrogative Pronoun. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 12,
                    question: "The boy ___ won the prize is my brother.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 0,
                    explanation: "'who' என்பது Relative Pronoun. இது முக்கிய வாக்கியத்தை துணை வாக்கியத்தோடு இணைக்கிறது."
                },
                {
                    id: 13,
                    question: "I bought ___ a new dress.",
                    options: ["myself", "me", "my", "mine"],
                    correct: 0,
                    explanation: "'myself' என்பது Reflexive Pronoun. இங்கு செயலைச் செய்பவரே அச்செயலின் பயனாளி."
                },
                {
                    id: 14,
                    question: "These pencils are ___.",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 15,
                    question: "___ do you want to meet?",
                    options: ["Who", "Whom", "Whose", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                // Adding more pronoun questions...
                {
                    id: 16,
                    question: "They enjoyed ___ at the party.",
                    options: ["them", "themselves", "their", "theirs"],
                    correct: 1,
                    explanation: "'themselves' என்பது Reflexive Pronoun. இங்கு அவர்கள் தங்களைத்தாங்கள் மகிழ்வித்துக் கொண்டனர்."
                },
                {
                    id: 17,
                    question: "This house is ___.",
                    options: ["our", "ours", "us", "we"],
                    correct: 1,
                    explanation: "'ours' என்பது Possessive Pronoun. இது எங்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 18,
                    question: "___ book is this?",
                    options: ["Who", "Whom", "Whose", "Which"],
                    correct: 2,
                    explanation: "'Whose' என்பது Interrogative Pronoun. இது உரிமை குறித்த கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 19,
                    question: "The girl ___ I met yesterday is a doctor.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 1,
                    explanation: "'whom' என்பது Relative Pronoun. இது object-ஐ குறிக்கிறது."
                },
                {
                    id: 20,
                    question: "He cut ___ while shaving.",
                    options: ["him", "himself", "his", "he"],
                    correct: 1,
                    explanation: "'himself' என்பது Reflexive Pronoun. இங்கு அவர் தன்னைத்தானே காயப்படுத்திக் கொண்டார்."
                },
                // Continue adding more questions up to 80...
                {
                    id: 21,
                    question: "That car is ___.",
                    options: ["their", "theirs", "them", "they"],
                    correct: 1,
                    explanation: "'theirs' என்பது Possessive Pronoun. இது அவர்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 22,
                    question: "___ did you invite to the party?",
                    options: ["Who", "Whom", "Whose", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 23,
                    question: "The book ___ I read was interesting.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 3,
                    explanation: "'which' என்பது Relative Pronoun. இது பொருள்களைக் குறிக்கப் பயன்படுகிறது."
                },
                {
                    id: 24,
                    question: "She taught ___ how to swim.",
                    options: ["her", "herself", "hers", "she"],
                    correct: 1,
                    explanation: "'herself' என்பது Reflexive Pronoun. இங்கு அவள் தன்னைத்தானே கற்பித்துக் கொண்டாள்."
                },
                {
                    id: 25,
                    question: "Is this pen ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 26,
                    question: "___ is your favorite color?",
                    options: ["Who", "What", "Whose", "Which"],
                    correct: 3,
                    explanation: "'Which' என்பது Interrogative Pronoun. இது விருப்பத்தைக் கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 27,
                    question: "The man ___ car was stolen called the police.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 28,
                    question: "We enjoyed ___ during the vacation.",
                    options: ["us", "ourselves", "our", "ours"],
                    correct: 1,
                    explanation: "'ourselves' என்பது Reflexive Pronoun. இங்கு நாங்கள் தங்களைத்தாங்கள் மகிழ்வித்துக் கொண்டோம்."
                },
                {
                    id: 29,
                    question: "That idea was ___.",
                    options: ["her", "hers", "she", "herself"],
                    correct: 1,
                    explanation: "'hers' என்பது Possessive Pronoun. இது அவளுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 30,
                    question: "___ are you looking for?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 2,
                    explanation: "'What' என்பது Interrogative Pronoun. இது பொருளைக் கேள்வி கேட்கப் பயன்படுகிறது."
                },
                // Add more questions until 80...
                {
                    id: 31,
                    question: "The dog ___ barked all night belongs to my neighbor.",
                    options: ["who", "which", "that", "whom"],
                    correct: 2,
                    explanation: "'that' என்பது Relative Pronoun. இது மனிதர்கள் மற்றும் பொருள்கள் இரண்டிற்கும் பயன்படுத்தலாம்."
                },
                {
                    id: 32,
                    question: "He blamed ___ for the mistake.",
                    options: ["him", "himself", "his", "he"],
                    correct: 1,
                    explanation: "'himself' என்பது Reflexive Pronoun. இங்கு அவர் தன்னைத்தானே குற்றம் சாட்டுகிறார்."
                },
                {
                    id: 33,
                    question: "Is this umbrella ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 34,
                    question: "___ did you say called?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 0,
                    explanation: "'Who' என்பது Interrogative Pronoun. இது subject-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 35,
                    question: "The house in ___ I live is very old.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 3,
                    explanation: "'which' என்பது Relative Pronoun. இது பொருள்களைக் குறிக்கப் பயன்படுகிறது."
                },
                {
                    id: 36,
                    question: "They prepared ___ for the exam.",
                    options: ["them", "themselves", "their", "theirs"],
                    correct: 1,
                    explanation: "'themselves' என்பது Reflexive Pronoun. இங்கு அவர்கள் தங்களைத்தாங்கள் தயார்படுத்திக் கொண்டனர்."
                },
                {
                    id: 37,
                    question: "This victory is ___.",
                    options: ["our", "ours", "us", "we"],
                    correct: 1,
                    explanation: "'ours' என்பது Possessive Pronoun. இது எங்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 38,
                    question: "___ do you prefer, tea or coffee?",
                    options: ["Who", "What", "Which", "Whose"],
                    correct: 2,
                    explanation: "'Which' என்பது Interrogative Pronoun. இது விருப்பத்தைக் கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 39,
                    question: "The student ___ bag was lost is crying.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 40,
                    question: "I made this cake ___.",
                    options: ["me", "myself", "my", "mine"],
                    correct: 1,
                    explanation: "'myself' என்பது Reflexive Pronoun. இங்கு நான் தன்னைத்தானே கேக் செய்தேன்."
                },
                // Continue adding questions...
                {
                    id: 41,
                    question: "That decision was ___.",
                    options: ["their", "theirs", "them", "they"],
                    correct: 1,
                    explanation: "'theirs' என்பது Possessive Pronoun. இது அவர்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 42,
                    question: "___ did you give the letter to?",
                    options: ["Who", "Whom", "Whose", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 43,
                    question: "The movie ___ we saw yesterday was boring.",
                    options: ["who", "whom", "which", "whose"],
                    correct: 2,
                    explanation: "'which' என்பது Relative Pronoun. இது பொருள்களைக் குறிக்கப் பயன்படுகிறது."
                },
                {
                    id: 44,
                    question: "She expressed ___ clearly.",
                    options: ["her", "herself", "hers", "she"],
                    correct: 1,
                    explanation: "'herself' என்பது Reflexive Pronoun. இங்கு அவள் தன்னைத்தானே வெளிப்படுத்திக் கொண்டாள்."
                },
                {
                    id: 45,
                    question: "Is this seat ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 46,
                    question: "___ is the matter with you?",
                    options: ["Who", "What", "Which", "Whose"],
                    correct: 1,
                    explanation: "'What' என்பது Interrogative Pronoun. இது நிலைமையைக் கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 47,
                    question: "The doctor ___ treated me was very kind.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 0,
                    explanation: "'who' என்பது Relative Pronoun. இது subject-ஐ குறிக்கிறது."
                },
                {
                    id: 48,
                    question: "They introduced ___ to the guests.",
                    options: ["them", "themselves", "their", "theirs"],
                    correct: 1,
                    explanation: "'themselves' என்பது Reflexive Pronoun. இங்கு அவர்கள் தங்களைத்தாங்கள் அறிமுகப்படுத்திக் கொண்டனர்."
                },
                {
                    id: 49,
                    question: "This achievement is ___.",
                    options: ["her", "hers", "she", "herself"],
                    correct: 1,
                    explanation: "'hers' என்பது Possessive Pronoun. இது அவளுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 50,
                    question: "___ is your best friend?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 0,
                    explanation: "'Who' என்பது Interrogative Pronoun. இது நபரைக் கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 51,
                    question: "The computer ___ I bought is not working.",
                    options: ["who", "whom", "which", "whose"],
                    correct: 2,
                    explanation: "'which' என்பது Relative Pronoun. இது பொருள்களைக் குறிக்கப் பயன்படுகிறது."
                },
                {
                    id: 52,
                    question: "He prides ___ on his honesty.",
                    options: ["him", "himself", "his", "he"],
                    correct: 1,
                    explanation: "'himself' என்பது Reflexive Pronoun. இங்கு அவர் தன்னைத்தானே நேர்மையில் பெருமைப்படுத்துகிறார்."
                },
                {
                    id: 53,
                    question: "Is this opinion ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 54,
                    question: "___ did you see at the market?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 55,
                    question: "The teacher ___ students won the prize is happy.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 56,
                    question: "We defended ___ against the accusations.",
                    options: ["us", "ourselves", "our", "ours"],
                    correct: 1,
                    explanation: "'ourselves' என்பது Reflexive Pronoun. இங்கு நாங்கள் தங்களைத்தாங்கள் குற்றச்சாட்டுகளுக்கு எதிராக பாதுகாத்துக் கொண்டோம்."
                },
                {
                    id: 57,
                    question: "That suggestion was ___.",
                    options: ["their", "theirs", "them", "they"],
                    correct: 1,
                    explanation: "'theirs' என்பது Possessive Pronoun. இது அவர்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 58,
                    question: "___ are you waiting for?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 59,
                    question: "The book ___ cover is torn is mine.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 60,
                    question: "She adapted ___ to the new environment.",
                    options: ["her", "herself", "hers", "she"],
                    correct: 1,
                    explanation: "'herself' என்பது Reflexive Pronoun. இங்கு அவள் தன்னைத்தானே புதிய சூழலுக்கு ஏற்ப மாற்றிக் கொண்டாள்."
                },
                {
                    id: 61,
                    question: "Is this responsibility ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 62,
                    question: "___ is the captain of the team?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 0,
                    explanation: "'Who' என்பது Interrogative Pronoun. இது நபரைக் கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 63,
                    question: "The artist ___ paintings are famous is coming.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 64,
                    question: "They organized ___ into groups.",
                    options: ["them", "themselves", "their", "theirs"],
                    correct: 1,
                    explanation: "'themselves' என்பது Reflexive Pronoun. இங்கு அவர்கள் தங்களைத்தாங்கள் குழுக்களாக ஒழுங்குபடுத்திக் கொண்டனர்."
                },
                {
                    id: 65,
                    question: "That mistake was ___.",
                    options: ["our", "ours", "us", "we"],
                    correct: 1,
                    explanation: "'ours' என்பது Possessive Pronoun. இது எங்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 66,
                    question: "___ did you choose for the job?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 67,
                    question: "The company ___ products we use is reliable.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 68,
                    question: "He dedicated ___ to his work.",
                    options: ["him", "himself", "his", "he"],
                    correct: 1,
                    explanation: "'himself' என்பது Reflexive Pronoun. இங்கு அவர் தன்னைத்தானே தனது வேலைக்கு அர்ப்பணித்துக் கொண்டார்."
                },
                {
                    id: 69,
                    question: "Is this solution ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 70,
                    question: "___ made this beautiful painting?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 0,
                    explanation: "'Who' என்பது Interrogative Pronoun. இது subject-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 71,
                    question: "The building ___ roof is red is our school.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 72,
                    question: "We enjoyed ___ at the beach.",
                    options: ["us", "ourselves", "our", "ours"],
                    correct: 1,
                    explanation: "'ourselves' என்பது Reflexive Pronoun. இங்கு நாங்கள் தங்களைத்தாங்கள் கடற்கரையில் மகிழ்வித்துக் கொண்டோம்."
                },
                {
                    id: 73,
                    question: "That success is ___.",
                    options: ["their", "theirs", "them", "they"],
                    correct: 1,
                    explanation: "'theirs' என்பது Possessive Pronoun. இது அவர்களுடையது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 74,
                    question: "___ did you consult about this problem?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 1,
                    explanation: "'Whom' என்பது Interrogative Pronoun. இது object-ஐ கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 75,
                    question: "The tree ___ branches are broken needs trimming.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 76,
                    question: "She prepared ___ for the interview.",
                    options: ["her", "herself", "hers", "she"],
                    correct: 1,
                    explanation: "'herself' என்பது Reflexive Pronoun. இங்கு அவள் தன்னைத்தானே நேர்காணலுக்கு தயார்படுத்திக் கொண்டாள்."
                },
                {
                    id: 77,
                    question: "Is this invention ___?",
                    options: ["your", "yours", "you", "yourself"],
                    correct: 1,
                    explanation: "'yours' என்பது Possessive Pronoun. இது உங்களுடையதா என்பதைக் காட்டுகிறது."
                },
                {
                    id: 78,
                    question: "___ is the owner of this house?",
                    options: ["Who", "Whom", "What", "Which"],
                    correct: 0,
                    explanation: "'Who' என்பது Interrogative Pronoun. இது நபரைக் கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 79,
                    question: "The child ___ toy was lost is crying.",
                    options: ["who", "whom", "whose", "which"],
                    correct: 2,
                    explanation: "'whose' என்பது Relative Pronoun. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 80,
                    question: "They congratulated ___ on their success.",
                    options: ["them", "themselves", "their", "theirs"],
                    correct: 1,
                    explanation: "'themselves' என்பது Reflexive Pronoun. இங்கு அவர்கள் தங்களைத்தாங்கள் வெற்றிக்கு வாழ்த்திக் கொண்டனர்."
                }
];

// ===== VERB QUESTIONS (80) =====
const verbQuestions = [
    {
                    id: 1,
                    question: "'Run, eat, sleep, play' இவை எவ்வகை Verbs?",
                    options: ["Action Verbs", "Linking Verbs", "Helping Verbs", "Modal Verbs"],
                    correct: 0,
                    explanation: "இவை Action Verbs. இவை செயல்களைக் குறிக்கும் வினைச்சொற்கள்."
                },
                {
                    id: 2,
                    question: "'Is, am, are, was, were' இவை எவ்வகை Verbs?",
                    options: ["Action", "Linking", "Helping", "Modal"],
                    correct: 1,
                    explanation: "இவை Linking Verbs. இவை subject-ஐ பெயர்ச்சொல் அல்லது பெயரடையோடு இணைக்கும்."
                },
                {
                    id: 3,
                    question: "'Have, has, had' இவை எவ்வகை Verbs?",
                    options: ["Action", "Linking", "Helping", "Main"],
                    correct: 2,
                    explanation: "இவை Helping Verbs. இவை முக்கிய வினைச்சொல்லுக்கு உதவும் துணை வினைச்சொற்கள்."
                },
                {
                    id: 4,
                    question: "'Can, could, may, might, must' இவை எவ்வகை Verbs?",
                    options: ["Action", "Linking", "Modal", "Regular"],
                    correct: 2,
                    explanation: "இவை Modal Verbs. இவை திறன், அனுமதி, கடமை போன்றவற்றைக் காட்டும்."
                },
                {
                    id: 5,
                    question: "'Walk - walked, play - played' இவை எவ்வகை Verbs?",
                    options: ["Regular", "Irregular", "Linking", "Modal"],
                    correct: 0,
                    explanation: "இவை Regular Verbs. இவற்றின் past tense 'd' அல்லது 'ed' சேர்த்து உருவாக்கப்படும்."
                },
                {
                    id: 6,
                    question: "'Go - went, eat - ate, see - saw' இவை எவ்வகை Verbs?",
                    options: ["Regular", "Irregular", "Linking", "Helping"],
                    correct: 1,
                    explanation: "இவை Irregular Verbs. இவற்றின் past tense விதிமுறைப்படி உருவாக்கப்படாது."
                },
                {
                    id: 7,
                    question: "She ___ a song beautifully.",
                    options: ["sing", "sings", "singing", "sang"],
                    correct: 1,
                    explanation: "'sings' என்பது Present Tense Verb. Subject 'she' third person singular என்பதால் 's' சேர்க்கப்படுகிறது."
                },
                {
                    id: 8,
                    question: "They ___ football yesterday.",
                    options: ["play", "plays", "played", "playing"],
                    correct: 2,
                    explanation: "'played' என்பது Past Tense Verb. Yesterday என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 9,
                    question: "I ___ my homework every day.",
                    options: ["do", "does", "did", "done"],
                    correct: 0,
                    explanation: "'do' என்பது Present Tense Verb. Subject 'I' என்பதால் base form பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 10,
                    question: "He ___ to school by bus.",
                    options: ["go", "goes", "went", "gone"],
                    correct: 1,
                    explanation: "'goes' என்பது Present Tense Verb. Subject 'he' third person singular என்பதால் 'es' சேர்க்கப்படுகிறது."
                },
                // Continuing to 80 verb questions...
                {
                    id: 11,
                    question: "We ___ a movie last night.",
                    options: ["watch", "watches", "watched", "watching"],
                    correct: 2,
                    explanation: "'watched' என்பது Past Tense Verb. Last night என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 12,
                    question: "She ___ her teeth twice a day.",
                    options: ["brush", "brushes", "brushed", "brushing"],
                    correct: 1,
                    explanation: "'brushes' என்பது Present Tense Verb. Subject 'she' third person singular என்பதால் 'es' சேர்க்கப்படுகிறது."
                },
                {
                    id: 13,
                    question: "They ___ to the park every evening.",
                    options: ["go", "goes", "went", "gone"],
                    correct: 0,
                    explanation: "'go' என்பது Present Tense Verb. Subject 'they' plural என்பதால் base form பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 14,
                    question: "I ___ a letter to my friend yesterday.",
                    options: ["write", "writes", "wrote", "written"],
                    correct: 2,
                    explanation: "'wrote' என்பது Past Tense Verb. Yesterday என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 15,
                    question: "He ___ television now.",
                    options: ["watch", "watches", "is watching", "watched"],
                    correct: 2,
                    explanation: "'is watching' என்பது Present Continuous Tense. Now என்பதால் present continuous பயன்படுத்த வேண்டும்."
                },
                // Add more verb questions...
                {
                    id: 16,
                    question: "We ___ our breakfast already.",
                    options: ["have", "has", "had", "have had"],
                    correct: 3,
                    explanation: "'have had' என்பது Present Perfect Tense. Already என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 17,
                    question: "She ___ to London next month.",
                    options: ["go", "goes", "will go", "went"],
                    correct: 2,
                    explanation: "'will go' என்பது Future Tense. Next month என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 18,
                    question: "They ___ when I arrived.",
                    options: ["eat", "ate", "were eating", "have eaten"],
                    correct: 2,
                    explanation: "'were eating' என்பது Past Continuous Tense. When I arrived என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 19,
                    question: "I ___ this book many times.",
                    options: ["read", "reads", "have read", "am reading"],
                    correct: 2,
                    explanation: "'have read' என்பது Present Perfect Tense. Many times என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 20,
                    question: "He ___ here since 2010.",
                    options: ["live", "lives", "has lived", "is living"],
                    correct: 2,
                    explanation: "'has lived' என்பது Present Perfect Continuous Tense. Since 2010 என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                // Continue adding more questions...
                {
                    id: 21,
                    question: "She ___ French for three years.",
                    options: ["study", "studies", "has been studying", "studied"],
                    correct: 2,
                    explanation: "'has been studying' என்பது Present Perfect Continuous Tense. For three years என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 22,
                    question: "We ___ the project by tomorrow.",
                    options: ["complete", "will complete", "have completed", "are completing"],
                    correct: 1,
                    explanation: "'will complete' என்பது Future Tense. By tomorrow என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 23,
                    question: "They ___ in this city for ten years.",
                    options: ["live", "lived", "have lived", "are living"],
                    correct: 2,
                    explanation: "'have lived' என்பது Present Perfect Tense. For ten years என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 24,
                    question: "I ___ my keys. Can you help me find them?",
                    options: ["lose", "lost", "have lost", "am losing"],
                    correct: 2,
                    explanation: "'have lost' என்பது Present Perfect Tense. இது தற்போதைய விளைவைக் காட்டுகிறது."
                },
                {
                    id: 25,
                    question: "He ___ to music when I called him.",
                    options: ["listen", "listened", "was listening", "has listened"],
                    correct: 2,
                    explanation: "'was listening' என்பது Past Continuous Tense. When I called him என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 26,
                    question: "She ___ never ___ to America.",
                    options: ["has, been", "have, been", "had, been", "is, been"],
                    correct: 0,
                    explanation: "'has never been' என்பது Present Perfect Tense. Never என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 27,
                    question: "We ___ dinner at 8 PM yesterday.",
                    options: ["have", "had", "were having", "have had"],
                    correct: 1,
                    explanation: "'had' என்பது Past Tense Verb. Yesterday என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 28,
                    question: "They ___ building the house next week.",
                    options: ["start", "will start", "started", "have started"],
                    correct: 1,
                    explanation: "'will start' என்பது Future Tense. Next week என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 29,
                    question: "I ___ already ___ that movie.",
                    options: ["have, seen", "has, seen", "had, seen", "am, seeing"],
                    correct: 0,
                    explanation: "'have already seen' என்பது Present Perfect Tense. Already என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 30,
                    question: "He ___ a teacher for 20 years.",
                    options: ["is", "was", "has been", "will be"],
                    correct: 2,
                    explanation: "'has been' என்பது Present Perfect Continuous Tense. For 20 years என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                // Add more questions until 80...
                {
                    id: 31,
                    question: "She ___ to the market every day.",
                    options: ["go", "goes", "went", "going"],
                    correct: 1,
                    explanation: "'goes' என்பது Present Tense Verb. Every day என்பதால் present tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 32,
                    question: "We ___ our grandparents last Sunday.",
                    options: ["visit", "visited", "have visited", "are visiting"],
                    correct: 1,
                    explanation: "'visited' என்பது Past Tense Verb. Last Sunday என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 33,
                    question: "They ___ football right now.",
                    options: ["play", "plays", "are playing", "played"],
                    correct: 2,
                    explanation: "'are playing' என்பது Present Continuous Tense. Right now என்பதால் present continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 34,
                    question: "I ___ never ___ such a beautiful place.",
                    options: ["have, seen", "has, seen", "had, seen", "am, seeing"],
                    correct: 0,
                    explanation: "'have never seen' என்பது Present Perfect Tense. Never என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 35,
                    question: "He ___ his homework when I saw him.",
                    options: ["do", "did", "was doing", "has done"],
                    correct: 2,
                    explanation: "'was doing' என்பது Past Continuous Tense. When I saw him என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 36,
                    question: "She ___ in this company since 2015.",
                    options: ["work", "works", "has worked", "is working"],
                    correct: 2,
                    explanation: "'has worked' என்பது Present Perfect Tense. Since 2015 என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 37,
                    question: "We ___ to Chennai next month.",
                    options: ["travel", "will travel", "traveled", "have traveled"],
                    correct: 1,
                    explanation: "'will travel' என்பது Future Tense. Next month என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 38,
                    question: "They ___ their lunch an hour ago.",
                    options: ["have", "had", "have had", "are having"],
                    correct: 1,
                    explanation: "'had' என்பது Past Tense Verb. An hour ago என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 39,
                    question: "I ___ this book before.",
                    options: ["read", "have read", "am reading", "was reading"],
                    correct: 1,
                    explanation: "'have read' என்பது Present Perfect Tense. Before என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 40,
                    question: "He ___ for three hours.",
                    options: ["study", "studies", "has been studying", "studied"],
                    correct: 2,
                    explanation: "'has been studying' என்பது Present Perfect Continuous Tense. For three hours என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                // Continue adding questions...
                {
                    id: 41,
                    question: "She ___ to music every morning.",
                    options: ["listen", "listens", "listened", "listening"],
                    correct: 1,
                    explanation: "'listens' என்பது Present Tense Verb. Every morning என்பதால் present tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 42,
                    question: "We ___ a new car last year.",
                    options: ["buy", "bought", "have bought", "are buying"],
                    correct: 1,
                    explanation: "'bought' என்பது Past Tense Verb. Last year என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 43,
                    question: "They ___ dinner at the moment.",
                    options: ["have", "are having", "had", "have had"],
                    correct: 1,
                    explanation: "'are having' என்பது Present Continuous Tense. At the moment என்பதால் present continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 44,
                    question: "I ___ already ___ my work.",
                    options: ["have, finished", "has, finished", "had, finished", "am, finishing"],
                    correct: 0,
                    explanation: "'have already finished' என்பது Present Perfect Tense. Already என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 45,
                    question: "He ___ TV when the phone rang.",
                    options: ["watch", "watched", "was watching", "has watched"],
                    correct: 2,
                    explanation: "'was watching' என்பது Past Continuous Tense. When the phone rang என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 46,
                    question: "She ___ in Delhi for five years.",
                    options: ["live", "lives", "has lived", "is living"],
                    correct: 2,
                    explanation: "'has lived' என்பது Present Perfect Tense. For five years என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 47,
                    question: "We ___ the meeting tomorrow.",
                    options: ["attend", "will attend", "attended", "have attended"],
                    correct: 1,
                    explanation: "'will attend' என்பது Future Tense. Tomorrow என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 48,
                    question: "They ___ their exams last week.",
                    options: ["take", "took", "have taken", "are taking"],
                    correct: 1,
                    explanation: "'took' என்பது Past Tense Verb. Last week என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 49,
                    question: "I ___ this movie several times.",
                    options: ["see", "saw", "have seen", "was seeing"],
                    correct: 2,
                    explanation: "'have seen' என்பது Present Perfect Tense. Several times என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 50,
                    question: "He ___ for two hours.",
                    options: ["work", "works", "has been working", "worked"],
                    correct: 2,
                    explanation: "'has been working' என்பது Present Perfect Continuous Tense. For two hours என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 51,
                    question: "She ___ to the gym every day.",
                    options: ["go", "goes", "went", "going"],
                    correct: 1,
                    explanation: "'goes' என்பது Present Tense Verb. Every day என்பதால் present tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 52,
                    question: "We ___ a party yesterday.",
                    options: ["have", "had", "have had", "are having"],
                    correct: 1,
                    explanation: "'had' என்பது Past Tense Verb. Yesterday என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 53,
                    question: "They ___ a song now.",
                    options: ["sing", "sings", "are singing", "sang"],
                    correct: 2,
                    explanation: "'are singing' என்பது Present Continuous Tense. Now என்பதால் present continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 54,
                    question: "I ___ never ___ to Japan.",
                    options: ["have, been", "has, been", "had, been", "am, being"],
                    correct: 0,
                    explanation: "'have never been' என்பது Present Perfect Tense. Never என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 55,
                    question: "He ___ his car when I met him.",
                    options: ["wash", "washed", "was washing", "has washed"],
                    correct: 2,
                    explanation: "'was washing' என்பது Past Continuous Tense. When I met him என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 56,
                    question: "She ___ English for ten years.",
                    options: ["teach", "teaches", "has taught", "is teaching"],
                    correct: 2,
                    explanation: "'has taught' என்பது Present Perfect Tense. For ten years என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 57,
                    question: "We ___ to Mumbai next week.",
                    options: ["go", "will go", "went", "have gone"],
                    correct: 1,
                    explanation: "'will go' என்பது Future Tense. Next week என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 58,
                    question: "They ___ their breakfast at 8 AM.",
                    options: ["have", "had", "have had", "are having"],
                    correct: 1,
                    explanation: "'had' என்பது Past Tense Verb. குறிப்பிட்ட நேரம் என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 59,
                    question: "I ___ this novel before.",
                    options: ["read", "have read", "am reading", "was reading"],
                    correct: 1,
                    explanation: "'have read' என்பது Present Perfect Tense. Before என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 60,
                    question: "He ___ since morning.",
                    options: ["study", "studies", "has been studying", "studied"],
                    correct: 2,
                    explanation: "'has been studying' என்பது Present Perfect Continuous Tense. Since morning என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 61,
                    question: "She ___ yoga every day.",
                    options: ["practice", "practices", "practiced", "practicing"],
                    correct: 1,
                    explanation: "'practices' என்பது Present Tense Verb. Every day என்பதால் present tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 62,
                    question: "We ___ a new house last month.",
                    options: ["buy", "bought", "have bought", "are buying"],
                    correct: 1,
                    explanation: "'bought' என்பது Past Tense Verb. Last month என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 63,
                    question: "They ___ football now.",
                    options: ["play", "plays", "are playing", "played"],
                    correct: 2,
                    explanation: "'are playing' என்பது Present Continuous Tense. Now என்பதால் present continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 64,
                    question: "I ___ already ___ my assignment.",
                    options: ["have, completed", "has, completed", "had, completed", "am, completing"],
                    correct: 0,
                    explanation: "'have already completed' என்பது Present Perfect Tense. Already என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 65,
                    question: "He ___ his bike when it started raining.",
                    options: ["ride", "rode", "was riding", "has ridden"],
                    correct: 2,
                    explanation: "'was riding' என்பது Past Continuous Tense. When it started raining என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 66,
                    question: "She ___ in Chennai since 2010.",
                    options: ["live", "lives", "has lived", "is living"],
                    correct: 2,
                    explanation: "'has lived' என்பது Present Perfect Tense. Since 2010 என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 67,
                    question: "We ___ the conference next month.",
                    options: ["attend", "will attend", "attended", "have attended"],
                    correct: 1,
                    explanation: "'will attend' என்பது Future Tense. Next month என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 68,
                    question: "They ___ the project last year.",
                    options: ["complete", "completed", "have completed", "are completing"],
                    correct: 1,
                    explanation: "'completed' என்பது Past Tense Verb. Last year என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 69,
                    question: "I ___ this song many times.",
                    options: ["hear", "heard", "have heard", "was hearing"],
                    correct: 2,
                    explanation: "'have heard' என்பது Present Perfect Tense. Many times என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 70,
                    question: "He ___ for three hours.",
                    options: ["run", "runs", "has been running", "ran"],
                    correct: 2,
                    explanation: "'has been running' என்பது Present Perfect Continuous Tense. For three hours என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 71,
                    question: "She ___ the newspaper every morning.",
                    options: ["read", "reads", "readed", "reading"],
                    correct: 1,
                    explanation: "'reads' என்பது Present Tense Verb. Every morning என்பதால் present tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 72,
                    question: "We ___ to the beach last weekend.",
                    options: ["go", "went", "have gone", "are going"],
                    correct: 1,
                    explanation: "'went' என்பது Past Tense Verb. Last weekend என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 73,
                    question: "They ___ a movie at the moment.",
                    options: ["watch", "watches", "are watching", "watched"],
                    correct: 2,
                    explanation: "'are watching' என்பது Present Continuous Tense. At the moment என்பதால் present continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 74,
                    question: "I ___ never ___ a whale.",
                    options: ["have, seen", "has, seen", "had, seen", "am, seeing"],
                    correct: 0,
                    explanation: "'have never seen' என்பது Present Perfect Tense. Never என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 75,
                    question: "He ___ his homework when the lights went out.",
                    options: ["do", "did", "was doing", "has done"],
                    correct: 2,
                    explanation: "'was doing' என்பது Past Continuous Tense. When the lights went out என்பதால் past continuous பயன்படுத்த வேண்டும்."
                },
                {
                    id: 76,
                    question: "She ___ French for seven years.",
                    options: ["study", "studies", "has studied", "is studying"],
                    correct: 2,
                    explanation: "'has studied' என்பது Present Perfect Tense. For seven years என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 77,
                    question: "We ___ to Delhi tomorrow.",
                    options: ["travel", "will travel", "traveled", "have traveled"],
                    correct: 1,
                    explanation: "'will travel' என்பது Future Tense. Tomorrow என்பதால் future tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 78,
                    question: "They ___ lunch at 1 PM yesterday.",
                    options: ["have", "had", "have had", "are having"],
                    correct: 1,
                    explanation: "'had' என்பது Past Tense Verb. Yesterday என்பதால் past tense பயன்படுத்த வேண்டும்."
                },
                {
                    id: 79,
                    question: "I ___ this book already.",
                    options: ["read", "have read", "am reading", "was reading"],
                    correct: 1,
                    explanation: "'have read' என்பது Present Perfect Tense. Already என்பதால் present perfect பயன்படுத்த வேண்டும்."
                },
                {
                    id: 80,
                    question: "He ___ since 9 AM.",
                    options: ["work", "works", "has been working", "worked"],
                    correct: 2,
                    explanation: "'has been working' என்பது Present Perfect Continuous Tense. Since 9 AM என்பதால் present perfect continuous பயன்படுத்த வேண்டும்."
                }
];

// ===== ADJECTIVE QUESTIONS (80) =====
const adjectiveQuestions = [
    {
                    id: 1,
                    question: "பின்வருவனவற்றில் எது Descriptive Adjective?",
                    options: ["red", "this", "my", "which"],
                    correct: 0,
                    explanation: "'red' என்பது Descriptive Adjective. இது பொருளின் நிறத்தை விவரிக்கிறது."
                },
                {
                    id: 2,
                    question: "'this book' என்ற சொற்றொடரில் 'this' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 1,
                    explanation: "'this' என்பது Demonstrative Adjective. இது பொருளைச் சுட்டிக் காட்டுகிறது."
                },
                {
                    id: 3,
                    question: "'my car' என்ற சொற்றொடரில் 'my' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Quantitative"],
                    correct: 2,
                    explanation: "'my' என்பது Possessive Adjective. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 4,
                    question: "பின்வருவனவற்றில் எது Quantitative Adjective?",
                    options: ["beautiful", "three", "Indian", "wooden"],
                    correct: 1,
                    explanation: "'three' என்பது Quantitative Adjective. இது எண்ணிக்கையைக் காட்டுகிறது."
                },
                {
                    id: 5,
                    question: "'which book' என்ற சொற்றொடரில் 'which' எவ்வகை Adjective?",
                    options: ["Interrogative", "Demonstrative", "Possessive", "Descriptive"],
                    correct: 0,
                    explanation: "'which' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 6,
                    question: "பின்வருவனவற்றில் எது Material Adjective?",
                    options: ["big", "wooden", "happy", "fast"],
                    correct: 1,
                    explanation: "'wooden' என்பது Material Adjective. இது பொருளைக் குறிக்கிறது."
                },
                {
                    id: 7,
                    question: "'those students' என்ற சொற்றொடரில் 'those' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 1,
                    explanation: "'those' என்பது Demonstrative Adjective. இது தொலைவில் உள்ள பன்மை பொருளைச் சுட்டிக் காட்டுகிறது."
                },
                {
                    id: 8,
                    question: "பின்வருவனவற்றில் எது Proper Adjective?",
                    options: ["big", "Indian", "red", "happy"],
                    correct: 1,
                    explanation: "'Indian' என்பது Proper Adjective. இது Proper Noun-இல் இருந்து உருவான Adjective."
                },
                {
                    id: 9,
                    question: "'some water' என்ற சொற்றொடரில் 'some' எவ்வகை Adjective?",
                    options: ["Descriptive", "Quantitative", "Demonstrative", "Interrogative"],
                    correct: 1,
                    explanation: "'some' என்பது Quantitative Adjective. இது திட்டவட்டமில்லாத அளவைக் காட்டுகிறது."
                },
                {
                    id: 10,
                    question: "'her dress' என்ற சொற்றொடரில் 'her' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'her' என்பது Possessive Adjective. இது 'she' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 11,
                    question: "பின்வருவனவற்றில் எது Color Adjective?",
                    options: ["round", "blue", "heavy", "young"],
                    correct: 1,
                    explanation: "'blue' என்பது Color Adjective. இது நிறத்தைக் குறிக்கிறது."
                },
                {
                    id: 12,
                    question: "'what time' என்ற சொற்றொடரில் 'what' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'what' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 13,
                    question: "பின்வருவனவற்றில் எது Size Adjective?",
                    options: ["old", "big", "French", "plastic"],
                    correct: 1,
                    explanation: "'big' என்பது Size Adjective. இது அளவைக் குறிக்கிறது."
                },
                {
                    id: 14,
                    question: "'our house' என்ற சொற்றொடரில் 'our' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'our' என்பது Possessive Adjective. இது 'we' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 15,
                    question: "பின்வருவனவற்றில் எது Age Adjective?",
                    options: ["round", "fast", "old", "silk"],
                    correct: 2,
                    explanation: "'old' என்பது Age Adjective. இது வயதைக் குறிக்கிறது."
                },
                // Questions 16-30
                {
                    id: 16,
                    question: "'which pen' என்ற சொற்றொடரில் 'which' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'which' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 17,
                    question: "பின்வருவனவற்றில் எது Shape Adjective?",
                    options: ["square", "happy", "wooden", "many"],
                    correct: 0,
                    explanation: "'square' என்பது Shape Adjective. இது வடிவத்தைக் குறிக்கிறது."
                },
                {
                    id: 18,
                    question: "'his book' என்ற சொற்றொடரில் 'his' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'his' என்பது Possessive Adjective. இது 'he' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 19,
                    question: "பின்வருவனவற்றில் எது Opinion Adjective?",
                    options: ["beautiful", "three", "round", "Indian"],
                    correct: 0,
                    explanation: "'beautiful' என்பது Opinion Adjective. இது கருத்தைக் குறிக்கிறது."
                },
                {
                    id: 20,
                    question: "'that car' என்ற சொற்றொடரில் 'that' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 1,
                    explanation: "'that' என்பது Demonstrative Adjective. இது தொலைவில் உள்ள பொருளைச் சுட்டிக் காட்டுகிறது."
                },
                {
                    id: 21,
                    question: "பின்வருவனவற்றில் எது Origin Adjective?",
                    options: ["big", "Chinese", "red", "fast"],
                    correct: 1,
                    explanation: "'Chinese' என்பது Origin Adjective. இது தொடக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 22,
                    question: "'whose bag' என்ற சொற்றொடரில் 'whose' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'whose' என்பது Interrogative Adjective. இது உரிமை குறித்த கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 23,
                    question: "பின்வருவனவற்றில் எது Purpose Adjective?",
                    options: ["sleeping bag", "big", "red", "wooden"],
                    correct: 0,
                    explanation: "'sleeping' in 'sleeping bag' என்பது Purpose Adjective. இது நோக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 24,
                    question: "'their school' என்ற சொற்றொடரில் 'their' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'their' என்பது Possessive Adjective. இது 'they' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 25,
                    question: "பின்வருவனவற்றில் எது Quality Adjective?",
                    options: ["good", "five", "this", "which"],
                    correct: 0,
                    explanation: "'good' என்பது Quality Adjective. இது தரத்தைக் குறிக்கிறது."
                },
                {
                    id: 26,
                    question: "'these apples' என்ற சொற்றொடரில் 'these' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 1,
                    explanation: "'these' என்பது Demonstrative Adjective. இது அருகில் உள்ள பன்மை பொருளைச் சுட்டிக் காட்டுகிறது."
                },
                {
                    id: 27,
                    question: "பின்வருவனவற்றில் எது Temperature Adjective?",
                    options: ["hot", "round", "French", "plastic"],
                    correct: 0,
                    explanation: "'hot' என்பது Temperature Adjective. இது வெப்பநிலையைக் குறிக்கிறது."
                },
                {
                    id: 28,
                    question: "'your pen' என்ற சொற்றொடரில் 'your' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'your' என்பது Possessive Adjective. இது 'you' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 29,
                    question: "பின்வருவனவற்றில் எது Sound Adjective?",
                    options: ["loud", "big", "silk", "many"],
                    correct: 0,
                    explanation: "'loud' என்பது Sound Adjective. இது ஒலியைக் குறிக்கிறது."
                },
                {
                    id: 30,
                    question: "'what color' என்ற சொற்றொடரில் 'what' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'what' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                // Questions 31-45
                {
                    id: 31,
                    question: "'its tail' என்ற சொற்றொடரில் 'its' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'its' என்பது Possessive Adjective. இது 'it' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 32,
                    question: "பின்வருவனவற்றில் எது Taste Adjective?",
                    options: ["sweet", "round", "wooden", "this"],
                    correct: 0,
                    explanation: "'sweet' என்பது Taste Adjective. இது சுவையைக் குறிக்கிறது."
                },
                {
                    id: 33,
                    question: "'which way' என்ற சொற்றொடரில் 'which' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'which' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 34,
                    question: "பின்வருவனவற்றில் எது Texture Adjective?",
                    options: ["smooth", "three", "Indian", "that"],
                    correct: 0,
                    explanation: "'smooth' என்பது Texture Adjective. இது மேற்பரப்பைக் குறிக்கிறது."
                },
                {
                    id: 35,
                    question: "'my friend' என்ற சொற்றொடரில் 'my' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'my' என்பது Possessive Adjective. இது 'I' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 36,
                    question: "பின்வருவனவற்றில் எது Speed Adjective?",
                    options: ["fast", "red", "silk", "our"],
                    correct: 0,
                    explanation: "'fast' என்பது Speed Adjective. இது வேகத்தைக் குறிக்கிறது."
                },
                {
                    id: 37,
                    question: "'those houses' என்ற சொற்றொடரில் 'those' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 1,
                    explanation: "'those' என்பது Demonstrative Adjective. இது தொலைவில் உள்ள பன்மை பொருளைச் சுட்டிக் காட்டுகிறது."
                },
                {
                    id: 38,
                    question: "பின்வருவனவற்றில் எது Smell Adjective?",
                    options: ["fragrant", "big", "which", "wooden"],
                    correct: 0,
                    explanation: "'fragrant' என்பது Smell Adjective. இது மணத்தைக் குறிக்கிறது."
                },
                {
                    id: 39,
                    question: "'her mother' என்ற சொற்றொடரில் 'her' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'her' என்பது Possessive Adjective. இது 'she' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 40,
                    question: "பின்வருவனவற்றில் எது Weight Adjective?",
                    options: ["heavy", "round", "this", "French"],
                    correct: 0,
                    explanation: "'heavy' என்பது Weight Adjective. இது எடையைக் குறிக்கிறது."
                },
                {
                    id: 41,
                    question: "'what book' என்ற சொற்றொடரில் 'what' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'what' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 42,
                    question: "பின்வருவனவற்றில் எது Distance Adjective?",
                    options: ["far", "sweet", "plastic", "my"],
                    correct: 0,
                    explanation: "'far' என்பது Distance Adjective. இது தொலைவைக் குறிக்கிறது."
                },
                {
                    id: 43,
                    question: "'our teacher' என்ற சொற்றொடரில் 'our' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'our' என்பது Possessive Adjective. இது 'we' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 44,
                    question: "பின்வருவனவற்றில் எது Time Adjective?",
                    options: ["annual", "red", "big", "which"],
                    correct: 0,
                    explanation: "'annual' என்பது Time Adjective. இது காலத்தைக் குறிக்கிறது."
                },
                {
                    id: 45,
                    question: "'this pen' என்ற சொற்றொடரில் 'this' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 1,
                    explanation: "'this' என்பது Demonstrative Adjective. இது அருகில் உள்ள பொருளைச் சுட்டிக் காட்டுகிறது."
                },
                // Questions 46-52
                {
                    id: 46,
                    question: "பின்வருவனவற்றில் எது Emotion Adjective?",
                    options: ["happy", "round", "silk", "three"],
                    correct: 0,
                    explanation: "'happy' என்பது Emotion Adjective. இது உணர்ச்சியைக் குறிக்கிறது."
                },
                {
                    id: 47,
                    question: "'their books' என்ற சொற்றொடரில் 'their' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'their' என்பது Possessive Adjective. இது 'they' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 48,
                    question: "பின்வருவனவற்றில் எது Condition Adjective?",
                    options: ["broken", "blue", "Indian", "what"],
                    correct: 0,
                    explanation: "'broken' என்பது Condition Adjective. இது நிலையைக் குறிக்கிறது."
                },
                {
                    id: 49,
                    question: "'your house' என்ற சொற்றொடரில் 'your' எவ்வகை Adjective?",
                    options: ["Descriptive", "Demonstrative", "Possessive", "Interrogative"],
                    correct: 2,
                    explanation: "'your' என்பது Possessive Adjective. இது 'you' என்பதன் உரிமை வடிவம்."
                },
                {
                    id: 50,
                    question: "பின்வருவனவற்றில் எது Pattern Adjective?",
                    options: ["striped", "fast", "wooden", "this"],
                    correct: 0,
                    explanation: "'striped' என்பது Pattern Adjective. இது வடிவத்தைக் குறிக்கிறது."
                },
                {
                    id: 51,
                    question: "'whose pencil' என்ற சொற்றொடரில் 'whose' எவ்வகை Adjective?",
                    options: ["Demonstrative", "Interrogative", "Possessive", "Descriptive"],
                    correct: 1,
                    explanation: "'whose' என்பது Interrogative Adjective. இது உரிமை குறித்த கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 52,
                    question: "பின்வருவனவற்றில் எது Nationality Adjective?",
                    options: ["American", "big", "red", "fast"],
                    correct: 0,
                    explanation: "'American' என்பது Nationality Adjective. இது தேசியத்தைக் குறிக்கிறது."
                },
                // Include original 52 questions and add 28 more...
                {
                    id: 53,
                    question: "'expensive car' இல் 'expensive' எவ்வகை Adjective?",
                    options: ["Quality", "Size", "Age", "Color"],
                    correct: 0,
                    explanation: "'expensive' என்பது Quality Adjective. இது தரத்தைக் குறிக்கிறது."
                },
                {
                    id: 54,
                    question: "'round table' இல் 'round' எவ்வகை Adjective?",
                    options: ["Shape", "Size", "Color", "Material"],
                    correct: 0,
                    explanation: "'round' என்பது Shape Adjective. இது வடிவத்தைக் குறிக்கிறது."
                },
                {
                    id: 55,
                    question: "'wooden chair' இல் 'wooden' எவ்வகை Adjective?",
                    options: ["Material", "Purpose", "Origin", "Size"],
                    correct: 0,
                    explanation: "'wooden' என்பது Material Adjective. இது பொருளைக் குறிக்கிறது."
                },
                // Add more to reach 80...
                {
                    id: 56,
                    question: "'fast train' இல் 'fast' எவ்வகை Adjective?",
                    options: ["Speed", "Size", "Age", "Color"],
                    correct: 0,
                    explanation: "'fast' என்பது Speed Adjective. இது வேகத்தைக் குறிக்கிறது."
                },
                {
                    id: 57,
                    question: "'cold water' இல் 'cold' எவ்வகை Adjective?",
                    options: ["Temperature", "Size", "Color", "Material"],
                    correct: 0,
                    explanation: "'cold' என்பது Temperature Adjective. இது வெப்பநிலையைக் குறிக்கிறது."
                },
                {
                    id: 58,
                    question: "'Indian food' இல் 'Indian' எவ்வகை Adjective?",
                    options: ["Origin", "Material", "Purpose", "Size"],
                    correct: 0,
                    explanation: "'Indian' என்பது Origin Adjective. இது தொடக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 59,
                    question: "'sleeping bag' இல் 'sleeping' எவ்வகை Adjective?",
                    options: ["Purpose", "Material", "Size", "Color"],
                    correct: 0,
                    explanation: "'sleeping' என்பது Purpose Adjective. இது நோக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 60,
                    question: "'five books' இல் 'five' எவ்வகை Adjective?",
                    options: ["Quantitative", "Descriptive", "Demonstrative", "Possessive"],
                    correct: 0,
                    explanation: "'five' என்பது Quantitative Adjective. இது எண்ணிக்கையைக் காட்டுகிறது."
                },
                // Continue adding...
                {
                    id: 61,
                    question: "'some water' இல் 'some' எவ்வகை Adjective?",
                    options: ["Quantitative", "Descriptive", "Demonstrative", "Possessive"],
                    correct: 0,
                    explanation: "'some' என்பது Quantitative Adjective. இது திட்டவட்டமில்லாத அளவைக் காட்டுகிறது."
                },
                {
                    id: 62,
                    question: "'which book' இல் 'which' எவ்வகை Adjective?",
                    options: ["Interrogative", "Demonstrative", "Possessive", "Descriptive"],
                    correct: 0,
                    explanation: "'which' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 63,
                    question: "'my car' இல் 'my' எவ்வகை Adjective?",
                    options: ["Possessive", "Demonstrative", "Interrogative", "Descriptive"],
                    correct: 0,
                    explanation: "'my' என்பது Possessive Adjective. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 64,
                    question: "'beautiful flower' இல் 'beautiful' எவ்வகை Adjective?",
                    options: ["Opinion", "Size", "Age", "Color"],
                    correct: 0,
                    explanation: "'beautiful' என்பது Opinion Adjective. இது கருத்தைக் குறிக்கிறது."
                },
                {
                    id: 65,
                    question: "'large house' இல் 'large' எவ்வகை Adjective?",
                    options: ["Size", "Color", "Age", "Material"],
                    correct: 0,
                    explanation: "'large' என்பது Size Adjective. இது அளவைக் குறிக்கிறது."
                },
                {
                    id: 66,
                    question: "'old man' இல் 'old' எவ்வகை Adjective?",
                    options: ["Age", "Size", "Color", "Material"],
                    correct: 0,
                    explanation: "'old' என்பது Age Adjective. இது வயதைக் குறிக்கிறது."
                },
                {
                    id: 67,
                    question: "'blue sky' இல் 'blue' எவ்வகை Adjective?",
                    options: ["Color", "Size", "Age", "Material"],
                    correct: 0,
                    explanation: "'blue' என்பது Color Adjective. இது நிறத்தைக் குறிக்கிறது."
                },
                {
                    id: 68,
                    question: "'French wine' இல் 'French' எவ்வகை Adjective?",
                    options: ["Origin", "Material", "Purpose", "Size"],
                    correct: 0,
                    explanation: "'French' என்பது Origin Adjective. இது தொடக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 69,
                    question: "'writing desk' இல் 'writing' எவ்வகை Adjective?",
                    options: ["Purpose", "Material", "Size", "Color"],
                    correct: 0,
                    explanation: "'writing' என்பது Purpose Adjective. இது நோக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 70,
                    question: "'many students' இல் 'many' எவ்வகை Adjective?",
                    options: ["Quantitative", "Descriptive", "Demonstrative", "Possessive"],
                    correct: 0,
                    explanation: "'many' என்பது Quantitative Adjective. இது எண்ணிக்கையைக் காட்டுகிறது."
                },
                // Continue to 80...
                {
                    id: 71,
                    question: "'few people' இல் 'few' எவ்வகை Adjective?",
                    options: ["Quantitative", "Descriptive", "Demonstrative", "Possessive"],
                    correct: 0,
                    explanation: "'few' என்பது Quantitative Adjective. இது சில என்பதைக் காட்டுகிறது."
                },
                {
                    id: 72,
                    question: "'what time' இல் 'what' எவ்வகை Adjective?",
                    options: ["Interrogative", "Demonstrative", "Possessive", "Descriptive"],
                    correct: 0,
                    explanation: "'what' என்பது Interrogative Adjective. இது கேள்வி கேட்கப் பயன்படுகிறது."
                },
                {
                    id: 73,
                    question: "'her dress' இல் 'her' எவ்வகை Adjective?",
                    options: ["Possessive", "Demonstrative", "Interrogative", "Descriptive"],
                    correct: 0,
                    explanation: "'her' என்பது Possessive Adjective. இது உரிமையைக் காட்டுகிறது."
                },
                {
                    id: 74,
                    question: "'interesting story' இல் 'interesting' எவ்வகை Adjective?",
                    options: ["Opinion", "Size", "Age", "Color"],
                    correct: 0,
                    explanation: "'interesting' என்பது Opinion Adjective. இது கருத்தைக் குறிக்கிறது."
                },
                {
                    id: 75,
                    question: "'small box' இல் 'small' எவ்வகை Adjective?",
                    options: ["Size", "Color", "Age", "Material"],
                    correct: 0,
                    explanation: "'small' என்பது Size Adjective. இது அளவைக் குறிக்கிறது."
                },
                {
                    id: 76,
                    question: "'young girl' இல் 'young' எவ்வகை Adjective?",
                    options: ["Age", "Size", "Color", "Material"],
                    correct: 0,
                    explanation: "'young' என்பது Age Adjective. இது வயதைக் குறிக்கிறது."
                },
                {
                    id: 77,
                    question: "'green grass' இல் 'green' எவ்வகை Adjective?",
                    options: ["Color", "Size", "Age", "Material"],
                    correct: 0,
                    explanation: "'green' என்பது Color Adjective. இது நிறத்தைக் குறிக்கிறது."
                },
                {
                    id: 78,
                    question: "'Chinese tea' இல் 'Chinese' எவ்வகை Adjective?",
                    options: ["Origin", "Material", "Purpose", "Size"],
                    correct: 0,
                    explanation: "'Chinese' என்பது Origin Adjective. இது தொடக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 79,
                    question: "'cooking oil' இல் 'cooking' எவ்வகை Adjective?",
                    options: ["Purpose", "Material", "Size", "Color"],
                    correct: 0,
                    explanation: "'cooking' என்பது Purpose Adjective. இது நோக்கத்தைக் குறிக்கிறது."
                },
                {
                    id: 80,
                    question: "'several books' இல் 'several' எவ்வகை Adjective?",
                    options: ["Quantitative", "Descriptive", "Demonstrative", "Possessive"],
                    correct: 0,
                    explanation: "'several' என்பது Quantitative Adjective. இது பல என்பதைக் காட்டுகிறது."
                }
];

// ===== ADVERB QUESTIONS (60) =====
const adverbQuestions = [
    {
                    id: 1,
                    question: "'He runs quickly' இல் 'quickly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'quickly' என்பது Adverb of Manner. இது எப்படி செய்யப்பட்டது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 2,
                    question: "'She will come tomorrow' இல் 'tomorrow' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'tomorrow' என்பது Adverb of Time. இது எப்போது நடக்கும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 3,
                    question: "'He looked everywhere' இல் 'everywhere' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'everywhere' என்பது Adverb of Place. இது எங்கே நடந்தது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 4,
                    question: "'She often visits us' இல் 'often' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'often' என்பது Adverb of Frequency. இது எத்தனை முறை நடக்கும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 5,
                    question: "'He is very tall' இல் 'very' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'very' என்பது Adverb of Degree. இது எவ்வளவு என்பதைக் காட்டுகிறது."
                },
                {
                    id: 6,
                    question: "'She sings beautifully' இல் 'beautifully' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'beautifully' என்பது Adverb of Manner. இது எப்படி செய்யப்பட்டது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 7,
                    question: "'He arrived late' இல் 'late' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 1,
                    explanation: "'late' என்பது Adverb of Time. இது எப்போது நடந்தது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 8,
                    question: "'She went outside' இல் 'outside' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'outside' என்பது Adverb of Place. இது எங்கே நடந்தது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 9,
                    question: "'He always tells the truth' இல் 'always' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'always' என்பது Adverb of Frequency. இது எப்போதும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 10,
                    question: "'She is quite intelligent' இல் 'quite' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'quite' என்பது Adverb of Degree. இது எவ்வளவு என்பதைக் காட்டுகிறது."
                },
                // Continue to 60...
                {
                    id: 11,
                    question: "'He speaks softly' இல் 'softly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'softly' என்பது Adverb of Manner. இது எப்படி பேசுகிறார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 12,
                    question: "'She will leave soon' இல் 'soon' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'soon' என்பது Adverb of Time. இது விரைவில் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 13,
                    question: "'He looked upstairs' இல் 'upstairs' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'upstairs' என்பது Adverb of Place. இது எங்கே பார்த்தார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 14,
                    question: "'She sometimes calls me' இல் 'sometimes' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'sometimes' என்பது Adverb of Frequency. இது சில சமயம் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 15,
                    question: "'He is too tired' இல் 'too' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'too' என்பது Adverb of Degree. இது மிகவும் என்பதைக் காட்டுகிறது."
                },
                // Add more until 60...
                {
                    id: 16,
                    question: "'She danced gracefully' இல் 'gracefully' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'gracefully' என்பது Adverb of Manner. இது எப்படி நடனமாடினாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 17,
                    question: "'He came yesterday' இல் 'yesterday' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 1,
                    explanation: "'yesterday' என்பது Adverb of Time. இது நேற்று என்பதைக் காட்டுகிறது."
                },
                {
                    id: 18,
                    question: "'She walked downstairs' இல் 'downstairs' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'downstairs' என்பது Adverb of Place. இது எங்கே நடந்தாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 19,
                    question: "'He usually gets up early' இல் 'usually' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'usually' என்பது Adverb of Frequency. இது பொதுவாக என்பதைக் காட்டுகிறது."
                },
                {
                    id: 20,
                    question: "'She is fairly rich' இல் 'fairly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'fairly' என்பது Adverb of Degree. இது மிகவும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 21,
                    question: "'He writes neatly' இல் 'neatly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'neatly' என்பது Adverb of Manner. இது எப்படி எழுதுகிறார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 22,
                    question: "'She will return today' இல் 'today' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'today' என்பது Adverb of Time. இது இன்று என்பதைக் காட்டுகிறது."
                },
                {
                    id: 23,
                    question: "'He stood here' இல் 'here' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'here' என்பது Adverb of Place. இது எங்கே நின்றார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 24,
                    question: "'She rarely goes out' இல் 'rarely' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'rarely' என்பது Adverb of Frequency. இது அரிதாக என்பதைக் காட்டுகிறது."
                },
                {
                    id: 25,
                    question: "'He is extremely happy' இல் 'extremely' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'extremely' என்பது Adverb of Degree. இது மிகவும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 26,
                    question: "'She answered correctly' இல் 'correctly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'correctly' என்பது Adverb of Manner. இது எப்படி பதிலளித்தாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 27,
                    question: "'He left early' இல் 'early' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 1,
                    explanation: "'early' என்பது Adverb of Time. இது விரைவில் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 28,
                    question: "'She sat there' இல் 'there' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'there' என்பது Adverb of Place. இது எங்கே அமர்ந்தாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 29,
                    question: "'He never lies' இல் 'never' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'never' என்பது Adverb of Frequency. இது ஒருபோதும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 30,
                    question: "'She is rather busy' இல் 'rather' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'rather' என்பது Adverb of Degree. இது மிகவும் என்பதைக் காட்டுகிறது."
                },
                // Continue to 60...
                {
                    id: 31,
                    question: "'He spoke loudly' இல் 'loudly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'loudly' என்பது Adverb of Manner. இது எப்படி பேசினார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 32,
                    question: "'She will arrive now' இல் 'now' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'now' என்பது Adverb of Time. இது இப்போது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 33,
                    question: "'He went away' இல் 'away' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'away' என்பது Adverb of Place. இது எங்கே சென்றார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 34,
                    question: "'She frequently visits us' இல் 'frequently' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'frequently' என்பது Adverb of Frequency. இது அடிக்கடி என்பதைக் காட்டுகிறது."
                },
                {
                    id: 35,
                    question: "'He is absolutely right' இல் 'absolutely' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'absolutely' என்பது Adverb of Degree. இது முற்றிலும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 36,
                    question: "'She walked slowly' இல் 'slowly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'slowly' என்பது Adverb of Manner. இது எப்படி நடந்தாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 37,
                    question: "'He came recently' இல் 'recently' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 1,
                    explanation: "'recently' என்பது Adverb of Time. இது சமீபத்தில் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 38,
                    question: "'She lives nearby' இல் 'nearby' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'nearby' என்பது Adverb of Place. இது எங்கே வசிக்கிறாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 39,
                    question: "'He occasionally writes to me' இல் 'occasionally' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'occasionally' என்பது Adverb of Frequency. இது எப்போதாவது என்பதைக் காட்டுகிறது."
                },
                {
                    id: 40,
                    question: "'She is completely wrong' இல் 'completely' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'completely' என்பது Adverb of Degree. இது முற்றிலும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 41,
                    question: "'He drove carefully' இல் 'carefully' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'carefully' என்பது Adverb of Manner. இது எப்படி வாகனம் ஓட்டினார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 42,
                    question: "'She will finish later' இல் 'later' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'later' என்பது Adverb of Time. இது பின்னர் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 43,
                    question: "'He looked around' இல் 'around' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'around' என்பது Adverb of Place. இது எங்கே பார்த்தார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 44,
                    question: "'She generally arrives on time' இல் 'generally' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'generally' என்பது Adverb of Frequency. இது பொதுவாக என்பதைக் காட்டுகிறது."
                },
                {
                    id: 45,
                    question: "'He is totally confused' இல் 'totally' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'totally' என்பது Adverb of Degree. இது முற்றிலும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 46,
                    question: "'She sang sweetly' இல் 'sweetly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'sweetly' என்பது Adverb of Manner. இது எப்படி பாடினாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 47,
                    question: "'He will start immediately' இல் 'immediately' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'immediately' என்பது Adverb of Time. இது உடனடியாக என்பதைக் காட்டுகிறது."
                },
                {
                    id: 48,
                    question: "'She went indoors' இல் 'indoors' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'indoors' என்பது Adverb of Place. இது எங்கே சென்றாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 49,
                    question: "'He hardly ever complains' இல் 'hardly ever' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'hardly ever' என்பது Adverb of Frequency. இது ஒருபோதும் இல்லை என்பதைக் காட்டுகிறது."
                },
                {
                    id: 50,
                    question: "'She is nearly ready' இல் 'nearly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'nearly' என்பது Adverb of Degree. இது கிட்டத்தட்ட என்பதைக் காட்டுகிறது."
                },
                {
                    id: 51,
                    question: "'He works hard' இல் 'hard' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'hard' என்பது Adverb of Manner. இது எப்படி வேலை செய்கிறார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 52,
                    question: "'She will return tonight' இல் 'tonight' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 1,
                    explanation: "'tonight' என்பது Adverb of Time. இது இன்று இரவு என்பதைக் காட்டுகிறது."
                },
                {
                    id: 53,
                    question: "'He stood nearby' இல் 'nearby' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 2,
                    explanation: "'nearby' என்பது Adverb of Place. இது எங்கே நின்றார் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 54,
                    question: "'She always helps others' இல் 'always' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'always' என்பது Adverb of Frequency. இது எப்போதும் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 55,
                    question: "'He is almost finished' இல் 'almost' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'almost' என்பது Adverb of Degree. இது கிட்டத்தட்ட என்பதைக் காட்டுகிறது."
                },
                {
                    id: 56,
                    question: "'She spoke politely' இல் 'politely' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 0,
                    explanation: "'politely' என்பது Adverb of Manner. இது எப்படி பேசினாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 57,
                    question: "'He left suddenly' இல் 'suddenly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Frequency"],
                    correct: 1,
                    explanation: "'suddenly' என்பது Adverb of Time. இது திடீரென்று என்பதைக் காட்டுகிறது."
                },
                {
                    id: 58,
                    question: "'She lives abroad' இல் 'abroad' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Place", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'abroad' என்பது Adverb of Place. இது எங்கே வசிக்கிறாள் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 59,
                    question: "'He sometimes works late' இல் 'sometimes' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency", "Adverb of Degree"],
                    correct: 2,
                    explanation: "'sometimes' என்பது Adverb of Frequency. இது சில சமயம் என்பதைக் காட்டுகிறது."
                },
                {
                    id: 60,
                    question: "'She is utterly disappointed' இல் 'utterly' எவ்வகை Adverb?",
                    options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time", "Adverb of Place"],
                    correct: 1,
                    explanation: "'utterly' என்பது Adverb of Degree. இது முற்றிலும் என்பதைக் காட்டுகிறது."
                }
];

// ===== SINGULAR-PLURAL QUESTIONS (50) =====
const singularPluralQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 2,
                    question: "'box' என்பதன் Plural வடிவம் என்ன?",
                    options: ["boxs", "boxes", "boxen", "boxies"],
                    correct: 1,
                    explanation: "'box' என்பதன் Plural வடிவம் 'boxes'. 'x' முடியும் சொற்களுக்கு 'es' சேர்க்க வேண்டும்."
                },
                {
                    id: 3,
                    question: "'knife' என்பதன் Plural வடிவம் என்ன?",
                    options: ["knifes", "knives", "knifees", "kniven"],
                    correct: 1,
                    explanation: "'knife' என்பதன் Plural வடிவம் 'knives'. 'f' அல்லது 'fe' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 4,
                    question: "பின்வருவனவற்றில் எது சரியான Singular-Plural ஜோடி?",
                    options: ["goose - gooses", "mouse - mouses", "tooth - teeth", "foot - foots"],
                    correct: 2,
                    explanation: "'tooth - teeth' சரியான ஜோடி. மற்றவை: goose - geese, mouse - mice, foot - feet."
                },
                {
                    id: 5,
                    question: "'city' என்பதன் Plural வடிவம் என்ன?",
                    options: ["citys", "cites", "cities", "citien"],
                    correct: 2,
                    explanation: "'city' என்பதன் Plural வடிவம் 'cities'. 'y' முடியும் சொற்களில் 'y' நீக்கி 'ies' சேர்க்க வேண்டும்."
                },
                {
                    id: 6,
                    question: "பின்வருவனவற்றில் எது எப்போதும் ஒருமையிலேயே இருக்கும்?",
                    options: ["book", "student", "water", "apple"],
                    correct: 2,
                    explanation: "'water' என்பது Uncountable Noun, எப்போதும் ஒருமையிலேயே பயன்படுத்தப்படும்."
                },
                {
                    id: 7,
                    question: "'sheep' என்பதன் Plural வடிவம் என்ன?",
                    options: ["sheeps", "sheep", "sheepes", "sheepen"],
                    correct: 1,
                    explanation: "'sheep' என்பது Singular மற்றும் Plural இரண்டிலும் ஒரே வடிவம். one sheep, two sheep."
                },
                {
                    id: 8,
                    question: "'potato' என்பதன் Plural வடிவம் என்ன?",
                    options: ["potatos", "potatoes", "potatoss", "potatoen"],
                    correct: 1,
                    explanation: "'potato' என்பதன் Plural வடிவம் 'potatoes'. 'o' முடியும் சொற்களில் பெரும்பாலானவை 'es' சேர்க்கப்படும்."
                },
                {
                    id: 9,
                    question: "'man' என்பதன் Plural வடிவம் என்ன?",
                    options: ["mans", "men", "mens", "manes"],
                    correct: 1,
                    explanation: "'man' என்பதன் Plural வடிவம் 'men'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 10,
                    question: "'baby' என்பதன் Plural வடிவம் என்ன?",
                    options: ["babys", "babies", "babyes", "babien"],
                    correct: 1,
                    explanation: "'baby' என்பதன் Plural வடிவம் 'babies'. 'y' முடியும் சொற்களில் 'y' நீக்கி 'ies' சேர்க்க வேண்டும்."
                },
                {
                    id: 11,
                    question: "'watch' என்பதன் Plural வடிவம் என்ன?",
                    options: ["watchs", "watches", "watchies", "watchen"],
                    correct: 1,
                    explanation: "'watch' என்பதன் Plural வடிவம் 'watches'. 'ch' முடியும் சொற்களுக்கு 'es' சேர்க்க வேண்டும்."
                },
                {
                    id: 12,
                    question: "'leaf' என்பதன் Plural வடிவம் என்ன?",
                    options: ["leafs", "leaves", "leafes", "leafies"],
                    correct: 1,
                    explanation: "'leaf' என்பதன் Plural வடிவம் 'leaves'. 'f' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 13,
                    question: "பின்வருவனவற்றில் எது சரியான Plural?",
                    options: ["photo - photos", "potato - potatos", "tomato - tomatos", "hero - heros"],
                    correct: 0,
                    explanation: "'photo - photos' சரியானது. சில 'o' முடியும் சொற்களுக்கு 's' மட்டும் சேர்க்கப்படும்."
                },
                {
                    id: 14,
                    question: "'woman' என்பதன் Plural வடிவம் என்ன?",
                    options: ["womans", "women", "womens", "womanes"],
                    correct: 1,
                    explanation: "'woman' என்பதன் Plural வடிவம் 'women'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 15,
                    question: "'bus' என்பதன் Plural வடிவம் என்ன?",
                    options: ["buses", "busses", "busies", "bussen"],
                    correct: 0,
                    explanation: "'bus' என்பதன் Plural வடிவம் 'buses'. 's' முடியும் சொற்களுக்கு 'es' சேர்க்க வேண்டும்."
                },
                // Questions 16-30
                {
                    id: 16,
                    question: "'deer' என்பதன் Plural வடிவம் என்ன?",
                    options: ["deers", "deer", "deeres", "deeren"],
                    correct: 1,
                    explanation: "'deer' என்பது Singular மற்றும் Plural இரண்டிலும் ஒரே வடிவம். one deer, two deer."
                },
                {
                    id: 17,
                    question: "'glass' என்பதன் Plural வடிவம் என்ன?",
                    options: ["glass", "glasses", "glassies", "glassen"],
                    correct: 1,
                    explanation: "'glass' என்பதன் Plural வடிவம் 'glasses'. 'ss' முடியும் சொற்களுக்கு 'es' சேர்க்க வேண்டும்."
                },
                {
                    id: 18,
                    question: "'fish' என்பதன் Plural வடிவம் (ஒரே இனம்) என்ன?",
                    options: ["fishes", "fish", "fishen", "fishies"],
                    correct: 1,
                    explanation: "ஒரே இனம் என்றால் 'fish' என்பது Singular மற்றும் Plural இரண்டிலும் ஒரே வடிவம்."
                },
                {
                    id: 19,
                    question: "'boy' என்பதன் Plural வடிவம் என்ன?",
                    options: ["boys", "boies", "boyes", "boyen"],
                    correct: 0,
                    explanation: "'boy' என்பதன் Plural வடிவம் 'boys'. 'y' முன் உயிரெழுத்து இருந்தால் 's' மட்டும் சேர்க்க வேண்டும்."
                },
                {
                    id: 20,
                    question: "'wolf' என்பதன் Plural வடிவம் என்ன?",
                    options: ["wolfs", "wolves", "wolfes", "wolfies"],
                    correct: 1,
                    explanation: "'wolf' என்பதன் Plural வடிவம் 'wolves'. 'f' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 21,
                    question: "'day' என்பதன் Plural வடிவம் என்ன?",
                    options: ["days", "daies", "dayes", "dayen"],
                    correct: 0,
                    explanation: "'day' என்பதன் Plural வடிவம் 'days'. 'y' முன் உயிரெழுத்து இருந்தால் 's' மட்டும் சேர்க்க வேண்டும்."
                },
                {
                    id: 22,
                    question: "'story' என்பதன் Plural வடிவம் என்ன?",
                    options: ["storys", "stories", "storyes", "storyen"],
                    correct: 1,
                    explanation: "'story' என்பதன் Plural வடிவம் 'stories'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                {
                    id: 23,
                    question: "'mouse' என்பதன் Plural வடிவம் என்ன?",
                    options: ["mouses", "mice", "mices", "mousees"],
                    correct: 1,
                    explanation: "'mouse' என்பதன் Plural வடிவம் 'mice'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 24,
                    question: "'party' என்பதன் Plural வடிவம் என்ன?",
                    options: ["partys", "parties", "partyes", "partyen"],
                    correct: 1,
                    explanation: "'party' என்பதன் Plural வடிவம் 'parties'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                {
                    id: 25,
                    question: "'foot' என்பதன் Plural வடிவம் என்ன?",
                    options: ["foots", "feet", "feets", "footes"],
                    correct: 1,
                    explanation: "'foot' என்பதன் Plural வடிவம் 'feet'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 26,
                    question: "'life' என்பதன் Plural வடிவம் என்ன?",
                    options: ["lifes", "lives", "lifees", "lifen"],
                    correct: 1,
                    explanation: "'life' என்பதன் Plural வடிவம் 'lives'. 'fe' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 27,
                    question: "'zoo' என்பதன் Plural வடிவம் என்ன?",
                    options: ["zoos", "zooes", "zooies", "zooen"],
                    correct: 0,
                    explanation: "'zoo' என்பதன் Plural வடிவம் 'zoos'. 'o' முன் உயிரெழுத்து இருந்தால் 's' மட்டும் சேர்க்க வேண்டும்."
                },
                {
                    id: 28,
                    question: "'brush' என்பதன் Plural வடிவம் என்ன?",
                    options: ["brushs", "brushes", "brushies", "brushen"],
                    correct: 1,
                    explanation: "'brush' என்பதன் Plural வடிவம் 'brushes'. 'sh' முடியும் சொற்களுக்கு 'es' சேர்க்க வேண்டும்."
                },
                {
                    id: 29,
                    question: "'tooth' என்பதன் Plural வடிவம் என்ன?",
                    options: ["tooths", "teeth", "teeths", "toothes"],
                    correct: 1,
                    explanation: "'tooth' என்பதன் Plural வடிவம் 'teeth'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 30,
                    question: "'lady' என்பதன் Plural வடிவம் என்ன?",
                    options: ["ladys", "ladies", "ladyes", "ladyen"],
                    correct: 1,
                    explanation: "'lady' என்பதன் Plural வடிவம் 'ladies'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                // Questions 31-45
                {
                    id: 31,
                    question: "'ox' என்பதன் Plural வடிவம் என்ன?",
                    options: ["oxs", "oxen", "oxes", "oxies"],
                    correct: 1,
                    explanation: "'ox' என்பதன் Plural வடிவம் 'oxen'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 32,
                    question: "'key' என்பதன் Plural வடிவம் என்ன?",
                    options: ["keys", "keies", "keyes", "keyen"],
                    correct: 0,
                    explanation: "'key' என்பதன் Plural வடிவம் 'keys'. 'y' முன் உயிரெழுத்து இருந்தால் 's' மட்டும் சேர்க்க வேண்டும்."
                },
                {
                    id: 33,
                    question: "'half' என்பதன் Plural வடிவம் என்ன?",
                    options: ["halfs", "halves", "halfes", "halfies"],
                    correct: 1,
                    explanation: "'half' என்பதன் Plural வடிவம் 'halves'. 'f' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 34,
                    question: "'person' என்பதன் Plural வடிவம் என்ன?",
                    options: ["persons", "people", "peoples", "persones"],
                    correct: 1,
                    explanation: "'person' என்பதன் Plural வடிவம் 'people'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },
                {
                    id: 35,
                    question: "'fly' என்பதன் Plural வடிவம் என்ன?",
                    options: ["flys", "flies", "flyes", "flyen"],
                    correct: 1,
                    explanation: "'fly' என்பதன் Plural வடிவம் 'flies'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                {
                    id: 36,
                    question: "'cactus' என்பதன் Plural வடிவம் என்ன?",
                    options: ["cactuses", "cacti", "cactus", "cacties"],
                    correct: 1,
                    explanation: "'cactus' என்பதன் Plural வடிவம் 'cacti'. இது லத்தீன் சொல்லாகையால் 'i' ஆக மாறும்."
                },
                {
                    id: 37,
                    question: "'cherry' என்பதன் Plural வடிவம் என்ன?",
                    options: ["cherrys", "cherries", "cherryes", "cherryen"],
                    correct: 1,
                    explanation: "'cherry' என்பதன் Plural வடிவம் 'cherries'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                {
                    id: 38,
                    question: "'wife' என்பதன் Plural வடிவம் என்ன?",
                    options: ["wifes", "wives", "wifees", "wifien"],
                    correct: 1,
                    explanation: "'wife' என்பதன் Plural வடிவம் 'wives'. 'fe' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 39,
                    question: "'hero' என்பதன் Plural வடிவம் என்ன?",
                    options: ["heros", "heroes", "heroies", "heroen"],
                    correct: 1,
                    explanation: "'hero' என்பதன் Plural வடிவம் 'heroes'. 'o' முடியும் சொற்களில் பெரும்பாலானவை 'es' சேர்க்கப்படும்."
                },
                {
                    id: 40,
                    question: "'dictionary' என்பதன் Plural வடிவம் என்ன?",
                    options: ["dictionarys", "dictionaries", "dictionaryes", "dictionaryen"],
                    correct: 1,
                    explanation: "'dictionary' என்பதன் Plural வடிவம் 'dictionaries'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                {
                    id: 41,
                    question: "'thief' என்பதன் Plural வடிவம் என்ன?",
                    options: ["thiefs", "thieves", "thiefes", "thiefies"],
                    correct: 1,
                    explanation: "'thief' என்பதன் Plural வடிவம் 'thieves'. 'f' முடியும் சொற்கள் 'ves' ஆக மாறும்."
                },
                {
                    id: 42,
                    question: "'echo' என்பதன் Plural வடிவம் என்ன?",
                    options: ["echos", "echoes", "echoies", "echoen"],
                    correct: 1,
                    explanation: "'echo' என்பதன் Plural வடிவம் 'echoes'. 'o' முடியும் சொற்களில் பெரும்பாலானவை 'es' சேர்க்கப்படும்."
                },
                {
                    id: 43,
                    question: "'baby' என்பதன் Plural வடிவம் என்ன?",
                    options: ["babys", "babies", "babyes", "babyen"],
                    correct: 1,
                    explanation: "'baby' என்பதன் Plural வடிவம் 'babies'. 'y' முன் மெய்யெழுத்து இருந்தால் 'ies' ஆக மாறும்."
                },
                {
                    id: 44,
                    question: "'roof' என்பதன் Plural வடிவம் என்ன?",
                    options: ["roofs", "rooves", "roofes", "roofies"],
                    correct: 0,
                    explanation: "'roof' என்பதன் Plural வடிவம் 'roofs'. இது விதிவிலக்கு; 'f' முடியும் சொற்களில் சிலவற்றுக்கு 's' மட்டும் சேர்க்கப்படும்."
                },
                {
                    id: 45,
                    question: "'crisis' என்பதன் Plural வடிவம் என்ன?",
                    options: ["crisises", "crises", "crisis", "crisies"],
                    correct: 1,
                    explanation: "'crisis' என்பதன் Plural வடிவம் 'crises'. இது கிரேக்க சொல்லாகையால் 'es' ஆக மாறும்."
                },
                // Questions 46-51
                {
                    id: 46,
                    question: "'analysis' என்பதன் Plural வடிவம் என்ன?",
                    options: ["analysises", "analyses", "analysis", "analysies"],
                    correct: 1,
                    explanation: "'analysis' என்பதன் Plural வடிவம் 'analyses'. இது கிரேக்க சொல்லாகையால் 'es' ஆக மாறும்."
                },
                {
                    id: 47,
                    question: "'fungus' என்பதன் Plural வடிவம் என்ன?",
                    options: ["funguses", "fungi", "fungus", "fungies"],
                    correct: 1,
                    explanation: "'fungus' என்பதன் Plural வடிவம் 'fungi'. இது லத்தீன் சொல்லாகையால் 'i' ஆக மாறும்."
                },
                {
                    id: 48,
                    question: "'series' என்பதன் Plural வடிவம் என்ன?",
                    options: ["series", "serieses", "serii", "seriesies"],
                    correct: 0,
                    explanation: "'series' என்பது Singular மற்றும் Plural இரண்டிலும் ஒரே வடிவம். one series, two series."
                },
                {
                    id: 49,
                    question: "'index' என்பதன் Plural வடிவம் என்ன?",
                    options: ["indexs", "indices", "indexes", "indix"],
                    correct: 2,
                    correct: 1,
                    explanation: "'index' என்பதன் Plural வடிவம் 'indexes' அல்லது 'indices'. இரண்டும் சரியானவை."
                },
                {
                    id: 50,
                    question: "'phenomenon' என்பதன் Plural வடிவம் என்ன?",
                    options: ["phenomenons", "phenomena", "phenomenas", "phenomenies"],
                    correct: 1,
                    explanation: "'phenomenon' என்பதன் Plural வடிவம் 'phenomena'. இது கிரேக்க சொல்லாகையால் 'a' ஆக மாறும்."
                },
                {
                    id: 51,
                    question: "'criterion' என்பதன் Plural வடிவம் என்ன?",
                    options: ["criterions", "criteria", "criterias", "criterionies"],
                    correct: 1,
                    explanation: "'criterion' என்பதன் Plural வடிவம் 'criteria'. இது கிரேக்க சொல்லாகையால் 'a' ஆக மாறும்."
                }
];

// ===== ARTICLES QUESTIONS (50) =====
const articlesQuestions = [
    {
                    id: 1,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I saw a elephant", "I saw an elephant", "I saw the elephant", "I saw elephant"],
                    correct: 1,
                    explanation: "'I saw an elephant' சரியானது. 'elephant' உயிரொலியுடன் தொடங்குவதால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 2,
                    question: "'___ university' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 0,
                    explanation: "'a university' சரியானது. 'university' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 3,
                    question: "'___ hour' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an hour' சரியானது. 'hour' இல் 'h' ஒலிக்காததால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 4,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["Sun rises in east", "The sun rises in the east", "A sun rises in an east", "Sun rises in the east"],
                    correct: 1,
                    explanation: "'The sun rises in the east' சரியானது. சூரியன் ஒரே ஒன்று என்பதால் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 5,
                    question: "'___ honest man' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an honest man' சரியானது. 'honest' இல் 'h' ஒலிக்காததால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 6,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I need an water", "I need a water", "I need the water", "I need water"],
                    correct: 3,
                    explanation: "'I need water' சரியானது. 'water' என்பது Uncountable Noun, Article தேவையில்லை."
                },
                {
                    id: 7,
                    question: "'___ European country' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 0,
                    explanation: "'a European country' சரியானது. 'European' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 8,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I play the cricket", "I play a cricket", "I play an cricket", "I play cricket"],
                    correct: 3,
                    explanation: "'I play cricket' சரியானது. விளையாட்டுப் பெயர்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 9,
                    question: "'___ United States' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the United States' சரியானது. 'United' உடன் தொடங்கும் நாடுகளுக்கு 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 10,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She is best student", "She is a best student", "She is the best student", "She is an best student"],
                    correct: 2,
                    explanation: "'She is the best student' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 11,
                    question: "'___ M.A. degree' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an M.A. degree' சரியானது. 'M' ஒலி 'em' என உயிரொலியுடன் தொடங்குவதால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 12,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I saw the movie yesterday", "I saw a movie yesterday", "I saw movie yesterday", "I saw an movie yesterday"],
                    correct: 1,
                    explanation: "'I saw a movie yesterday' சரியானது. குறிப்பிடாத பொருளுக்கு 'a' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 13,
                    question: "'___ one-rupee note' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'a one-rupee note' சரியானது. 'one' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 14,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She is doctor", "She is a doctor", "She is an doctor", "She is the doctor"],
                    correct: 1,
                    explanation: "'She is a doctor' சரியானது. தொழில் குறிப்பிடும் போது 'a' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 15,
                    question: "'___ Ganges' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the Ganges' சரியானது. ஆறுகளுக்கு எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                // Questions 16-30
                {
                    id: 16,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I like the music", "I like music", "I like a music", "I like an music"],
                    correct: 1,
                    explanation: "'I like music' சரியானது. பொருளற்ற பொதுப்பெயர்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 17,
                    question: "'___ X-ray' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an X-ray' சரியானது. 'X' ஒலி 'ex' என உயிரொலியுடன் தொடங்குவதால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 18,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["Moon is bright tonight", "A moon is bright tonight", "An moon is bright tonight", "The moon is bright tonight"],
                    correct: 3,
                    explanation: "'The moon is bright tonight' சரியானது. சந்திரன் ஒரே ஒன்று என்பதால் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 19,
                    question: "'___ useful book' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 0,
                    explanation: "'a useful book' சரியானது. 'useful' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 20,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I am going to school", "I am going to the school", "I am going to a school", "I am going to an school"],
                    correct: 0,
                    explanation: "'I am going to school' சரியானது. பொதுவான நோக்கத்திற்கு Article தேவையில்லை."
                },
                {
                    id: 21,
                    question: "'___ Himalayas' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the Himalayas' சரியானது. மலைத் தொடர்களுக்கு 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 22,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She speaks the English", "She speaks English", "She speaks a English", "She speaks an English"],
                    correct: 1,
                    explanation: "'She speaks English' சரியானது. மொழிப் பெயர்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 23,
                    question: "'___ heir' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an heir' சரியானது. 'heir' இல் 'h' ஒலிக்காததால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 24,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["Earth is planet", "The Earth is a planet", "An Earth is planet", "A Earth is the planet"],
                    correct: 1,
                    explanation: "'The Earth is a planet' சரியானது. பூமி ஒரே ஒன்று என்பதால் 'the', planet என்பது பொதுப்பெயர் என்பதால் 'a'."
                },
                {
                    id: 25,
                    question: "'___ uniform' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 0,
                    explanation: "'a uniform' சரியானது. 'uniform' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 26,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I had the breakfast", "I had a breakfast", "I had an breakfast", "I had breakfast"],
                    correct: 3,
                    explanation: "'I had breakfast' சரியானது. உணவுப் பெயர்களுக்கு பொதுவாக Article தேவையில்லை."
                },
                {
                    id: 27,
                    question: "'___ Pacific Ocean' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the Pacific Ocean' சரியானது. கடல்களுக்கு எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 28,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I study the mathematics", "I study mathematics", "I study a mathematics", "I study an mathematics"],
                    correct: 1,
                    explanation: "'I study mathematics' சரியானது. பாடப் பெயர்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 29,
                    question: "'___ honor' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an honor' சரியானது. 'honor' இல் 'h' ஒலிக்காததால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 30,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I saw man", "I saw a man", "I saw an man", "I saw the man"],
                    correct: 1,
                    explanation: "'I saw a man' சரியானது. குறிப்பிடாத ஒருமை Countable Noun-க்கு 'a' பயன்படுத்த வேண்டும்."
                },
                // Questions 31-45
                {
                    id: 31,
                    question: "'___ Arabian Sea' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the Arabian Sea' சரியானது. கடல்களுக்கு எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 32,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She is the Mrs. Sharma", "She is Mrs. Sharma", "She is a Mrs. Sharma", "She is an Mrs. Sharma"],
                    correct: 1,
                    explanation: "'She is Mrs. Sharma' சரியானது. தனிப்பட்ட பெயர்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 33,
                    question: "'___ umbrella' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an umbrella' சரியானது. 'umbrella' உயிரொலியுடன் தொடங்குவதால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 34,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I love the animals", "I love animals", "I love a animals", "I love an animals"],
                    correct: 1,
                    explanation: "'I love animals' சரியானது. பொதுவான பன்மை பொருள்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 35,
                    question: "'___ one-eyed man' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'a one-eyed man' சரியானது. 'one' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 36,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I went to the bed early", "I went to bed early", "I went to a bed early", "I went to an bed early"],
                    correct: 1,
                    explanation: "'I went to bed early' சரியானது. பொதுவான நோக்கத்திற்கு Article தேவையில்லை."
                },
                {
                    id: 37,
                    question: "'___ USA' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the USA' சரியானது. சுருக்கெழுத்து நாடுகளுக்கு 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 38,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She is the intelligent", "She is intelligent", "She is a intelligent", "She is an intelligent"],
                    correct: 1,
                    explanation: "'She is intelligent' சரியானது. Adjective மட்டும் இருந்தால் Article தேவையில்லை."
                },
                {
                    id: 39,
                    question: "'___ orange' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an orange' சரியானது. 'orange' உயிரொலியுடன் தொடங்குவதால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 40,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["We need the peace", "We need peace", "We need a peace", "We need an peace"],
                    correct: 1,
                    explanation: "'We need peace' சரியானது. பொருளற்ற பொதுப்பெயர்களுக்கு Article தேவையில்லை."
                },
                {
                    id: 41,
                    question: "'___ university student' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 0,
                    explanation: "'a university student' சரியானது. 'university' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 42,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I saw the dog in street", "I saw a dog in the street", "I saw dog in street", "I saw an dog in street"],
                    correct: 1,
                    explanation: "'I saw a dog in the street' சரியானது. குறிப்பிடாத நாய் என்பதால் 'a', தெருவுக்கு 'the'."
                },
                {
                    id: 43,
                    question: "'___ honest opinion' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an honest opinion' சரியானது. 'honest' இல் 'h' ஒலிக்காததால் 'an' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 44,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I like to play the piano", "I like to play piano", "I like to play a piano", "I like to play an piano"],
                    correct: 0,
                    explanation: "'I like to play the piano' சரியானது. இசைக் கருவிகளுக்கு 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 45,
                    question: "'___ apple a day' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'an apple a day' சரியானது. 'apple' உயிரொலியுடன் தொடங்குவதால் 'an' பயன்படுத்த வேண்டும்."
                },
                // Questions 46-51
                {
                    id: 46,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She is the tallest of two", "She is the tallest of the two", "She is tallest of two", "She is a tallest of two"],
                    correct: 1,
                    explanation: "'She is the tallest of the two' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 47,
                    question: "'___ history book' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 0,
                    explanation: "'a history book' சரியானது. 'history' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                },
                {
                    id: 48,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["I went to the hospital to visit friend", "I went to hospital to visit a friend", "I went to the hospital to visit a friend", "I went to hospital to visit friend"],
                    correct: 2,
                    explanation: "'I went to the hospital to visit a friend' சரியானது. குறிப்பிட்ட மருத்துவமனை என்பதால் 'the', குறிப்பிடாத நண்பர் என்பதால் 'a'."
                },
                {
                    id: 49,
                    question: "'___ European Union' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 2,
                    explanation: "'the European Union' சரியானது. 'Union' உடன் தொடங்கும் அமைப்புகளுக்கு 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 50,
                    question: "பின்வரும் வாக்கியங்களில் எது சரியானது?",
                    options: ["She is the teacher I told you about", "She is a teacher I told you about", "She is teacher I told you about", "She is an teacher I told you about"],
                    correct: 0,
                    explanation: "'She is the teacher I told you about' சரியானது. குறிப்பிட்ட ஆசிரியர் என்பதால் 'the'."
                },
                {
                    id: 51,
                    question: "'___ one-day match' இல் பொருத்தமான Article எது?",
                    options: ["a", "an", "the", "No article"],
                    correct: 1,
                    explanation: "'a one-day match' சரியானது. 'one' மெய்யொலியுடன் தொடங்குவதால் 'a' பயன்படுத்த வேண்டும்."
                }
];

const degreesQuestions = [
                {
                    id: 1,
                    question: "'big' என்பதன் Comparative degree என்ன?",
                    options: ["bigger", "biggest", "more big", "most big"],
                    correct: 0,
                    explanation: "'big' என்பதன் Comparative degree 'bigger'. ஒற்றை எழுத்து மெய்யெழுத்தில் முடியும் Adjective-களில் இறுதி எழுத்தை இரட்டித்து 'er' சேர்க்க வேண்டும்."
                },
                {
                    id: 2,
                    question: "'beautiful' என்பதன் Superlative degree என்ன?",
                    options: ["beautifuler", "beautifullest", "more beautiful", "most beautiful"],
                    correct: 3,
                    explanation: "'beautiful' என்பதன் Superlative degree 'most beautiful'. இரண்டு அல்லது அதற்கு மேற்பட்ட சொற்கள் கொண்ட Adjective-களுக்கு 'most' சேர்க்க வேண்டும்."
                },
                {
                    id: 3,
                    question: "பின்வருவனவற்றில் எது சரியான Comparative degree?",
                    options: ["good - gooder", "bad - badder", "far - farther", "little - littler"],
                    correct: 2,
                    explanation: "'far - farther' சரியானது. 'good - better', 'bad - worse', 'little - less' என்பவை ஒழுங்கற்ற வடிவங்கள்."
                },
                {
                    id: 4,
                    question: "'happy' என்பதன் Superlative degree என்ன?",
                    options: ["happyer", "happiest", "more happy", "most happy"],
                    correct: 1,
                    explanation: "'happy' என்பதன் Superlative degree 'happiest'. 'y' முடியும் Adjective-களில் 'y' நீக்கி 'iest' சேர்க்க வேண்டும்."
                },
                {
                    id: 5,
                    question: "Ravi is ___ than Kavi. (tall)",
                    options: ["tall", "taller", "tallest", "more tall"],
                    correct: 1,
                    explanation: "'Ravi is taller than Kavi' சரியானது. இரண்டு பொருள்களை ஒப்பிடும் போது Comparative degree பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 6,
                    question: "This is ___ book in the library. (interesting)",
                    options: ["interesting", "more interesting", "most interesting", "the most interesting"],
                    correct: 3,
                    explanation: "'This is the most interesting book in the library' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 7,
                    question: "'bad' என்பதன் Superlative degree என்ன?",
                    options: ["badder", "baddest", "worse", "worst"],
                    correct: 3,
                    explanation: "'bad' என்பதன் Superlative degree 'worst'. இது ஒழுங்கற்ற வடிவம்: bad - worse - worst."
                },
                {
                    id: 8,
                    question: "She is ___ her sister. (intelligent)",
                    options: ["intelligent as", "as intelligent as", "more intelligent as", "most intelligent than"],
                    correct: 1,
                    explanation: "'She is as intelligent as her sister' சரியானது. Positive degree-இல் இரண்டு பொருள்கள் சமமாக இருந்தால் 'as...as' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 9,
                    question: "'much' என்பதன் Comparative degree என்ன?",
                    options: ["mucher", "muches", "more", "most"],
                    correct: 2,
                    explanation: "'much' என்பதன் Comparative degree 'more'. இது ஒழுங்கற்ற வடிவம்: much/many - more - most."
                },
                {
                    id: 10,
                    question: "This is ___ point in the discussion. (important)",
                    options: ["less important", "least important", "the least important", "lesser important"],
                    correct: 2,
                    explanation: "'This is the least important point in the discussion' சரியானது. எதிர்மறை Superlative degree-இல் 'the least' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 11,
                    question: "'thin' என்பதன் Comparative degree என்ன?",
                    options: ["thiner", "thinner", "thinest", "thinnest"],
                    correct: 1,
                    explanation: "'thin' என்பதன் Comparative degree 'thinner'. ஒற்றை எழுத்து மெய்யெழுத்தில் முடியும் Adjective-களில் இறுதி எழுத்தை இரட்டித்து 'er' சேர்க்க வேண்டும்."
                },
                {
                    id: 12,
                    question: "This is ___ than that. (good)",
                    options: ["good", "better", "best", "more good"],
                    correct: 1,
                    explanation: "'This is better than that' சரியானது. 'good' என்பதன் Comparative degree 'better'."
                },
                {
                    id: 13,
                    question: "'clever' என்பதன் Superlative degree என்ன?",
                    options: ["cleverer", "cleverest", "more clever", "most clever"],
                    correct: 1,
                    explanation: "'clever' என்பதன் Superlative degree 'cleverest'. இரண்டு உயிரெழுத்து மெய்யெழுத்து (syllables) கொண்ட சில Adjective-களுக்கு 'er', 'est' சேர்க்கலாம்."
                },
                {
                    id: 14,
                    question: "He is ___ student in the class. (smart)",
                    options: ["smart", "smarter", "smartest", "the smartest"],
                    correct: 3,
                    explanation: "'He is the smartest student in the class' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 15,
                    question: "'little' (அளவு) என்பதன் Comparative degree என்ன?",
                    options: ["littler", "less", "least", "littlest"],
                    correct: 1,
                    explanation: "'little' (அளவு) என்பதன் Comparative degree 'less'. இது ஒழுங்கற்ற வடிவம்: little - less - least."
                },
                // Questions 16-30
                {
                    id: 16,
                    question: "'expensive' என்பதன் Comparative degree என்ன?",
                    options: ["expensiver", "expensivest", "more expensive", "most expensive"],
                    correct: 2,
                    explanation: "'expensive' என்பதன் Comparative degree 'more expensive'. இரண்டு அல்லது அதற்கு மேற்பட்ட சொற்கள் கொண்ட Adjective-களுக்கு 'more' சேர்க்க வேண்டும்."
                },
                {
                    id: 17,
                    question: "She is ___ than me. (young)",
                    options: ["young", "younger", "youngest", "more young"],
                    correct: 1,
                    explanation: "'She is younger than me' சரியானது. 'young' என்பதன் Comparative degree 'younger'."
                },
                {
                    id: 18,
                    question: "'far' (தொலைவு) என்பதன் Superlative degree என்ன?",
                    options: ["farrer", "farest", "farther", "farthest"],
                    correct: 3,
                    explanation: "'far' என்பதன் Superlative degree 'farthest'. இது ஒழுங்கற்ற வடிவம்: far - farther/further - farthest/furthest."
                },
                {
                    id: 19,
                    question: "This is ___ road to the city. (short)",
                    options: ["short", "shorter", "shortest", "the shortest"],
                    correct: 3,
                    explanation: "'This is the shortest road to the city' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 20,
                    question: "'old' (வயது) என்பதன் Comparative degree என்ன?",
                    options: ["older", "elder", "oldest", "eldest"],
                    correct: 0,
                    explanation: "'old' (வயது) என்பதன் Comparative degree 'older'. 'elder' குடும்ப உறவுகளுக்கு மட்டும் பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 21,
                    question: "Gold is ___ silver. (valuable)",
                    options: ["valuable as", "as valuable as", "more valuable as", "most valuable than"],
                    correct: 1,
                    explanation: "'Gold is as valuable as silver' சரியானது. Positive degree-இல் இரண்டு பொருள்கள் சமமாக இருந்தால் 'as...as' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 22,
                    question: "'simple' என்பதன் Superlative degree என்ன?",
                    options: ["simpler", "simplest", "more simple", "most simple"],
                    correct: 1,
                    explanation: "'simple' என்பதன் Superlative degree 'simplest'. இரண்டு உயிரெழுத்து மெய்யெழுத்து (syllables) கொண்ட சில Adjective-களுக்கு 'er', 'est' சேர்க்கலாம்."
                },
                {
                    id: 23,
                    question: "This is ___ than that. (bad)",
                    options: ["bad", "worse", "worst", "more bad"],
                    correct: 1,
                    explanation: "'This is worse than that' சரியானது. 'bad' என்பதன் Comparative degree 'worse'."
                },
                {
                    id: 24,
                    question: "'hot' என்பதன் Superlative degree என்ன?",
                    options: ["hoter", "hotter", "hottest", "most hot"],
                    correct: 2,
                    explanation: "'hot' என்பதன் Superlative degree 'hottest'. ஒற்றை எழுத்து மெய்யெழுத்தில் முடியும் Adjective-களில் இறுதி எழுத்தை இரட்டித்து 'est' சேர்க்க வேண்டும்."
                },
                {
                    id: 25,
                    question: "He is ___ person I know. (kind)",
                    options: ["kind", "kinder", "kindest", "the kindest"],
                    correct: 3,
                    explanation: "'He is the kindest person I know' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 26,
                    question: "'many' என்பதன் Superlative degree என்ன?",
                    options: ["many", "more", "most", "maniest"],
                    correct: 2,
                    explanation: "'many' என்பதன் Superlative degree 'most'. இது ஒழுங்கற்ற வடிவம்: many - more - most."
                },
                {
                    id: 27,
                    question: "She is ___ her brother. (tall)",
                    options: ["tall as", "as tall as", "taller as", "tallest than"],
                    correct: 1,
                    explanation: "'She is as tall as her brother' சரியானது. Positive degree-இல் இரண்டு பொருள்கள் சமமாக இருந்தால் 'as...as' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 28,
                    question: "'heavy' என்பதன் Comparative degree என்ன?",
                    options: ["heavier", "heavyer", "heaviest", "more heavy"],
                    correct: 0,
                    explanation: "'heavy' என்பதன் Comparative degree 'heavier'. 'y' முடியும் Adjective-களில் 'y' நீக்கி 'ier' சேர்க்க வேண்டும்."
                },
                {
                    id: 29,
                    question: "This is ___ story I have ever read. (interesting)",
                    options: ["interesting", "more interesting", "most interesting", "the most interesting"],
                    correct: 3,
                    explanation: "'This is the most interesting story I have ever read' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 30,
                    question: "'close' (அருகில்) என்பதன் Superlative degree என்ன?",
                    options: ["closer", "closest", "more close", "most close"],
                    correct: 1,
                    explanation: "'close' என்பதன் Superlative degree 'closest'. இரண்டு உயிரெழுத்து மெய்யெழுத்து (syllables) கொண்ட சில Adjective-களுக்கு 'er', 'est' சேர்க்கலாம்."
                },
                // Questions 31-45
                {
                    id: 31,
                    question: "Iron is ___ gold. (strong)",
                    options: ["strong as", "as strong as", "stronger as", "strongest than"],
                    correct: 1,
                    explanation: "'Iron is as strong as gold' சரியானது. Positive degree-இல் இரண்டு பொருள்கள் சமமாக இருந்தால் 'as...as' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 32,
                    question: "'lazy' என்பதன் Comparative degree என்ன?",
                    options: ["lazyer", "lazier", "laziest", "more lazy"],
                    correct: 1,
                    explanation: "'lazy' என்பதன் Comparative degree 'lazier'. 'y' முடியும் Adjective-களில் 'y' நீக்கி 'ier' சேர்க்க வேண்டும்."
                },
                {
                    id: 33,
                    question: "He is ___ boy in the school. (intelligent)",
                    options: ["intelligent", "more intelligent", "most intelligent", "the most intelligent"],
                    correct: 3,
                    explanation: "'He is the most intelligent boy in the school' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 34,
                    question: "'easy' என்பதன் Superlative degree என்ன?",
                    options: ["easyer", "easier", "easiest", "most easy"],
                    correct: 2,
                    explanation: "'easy' என்பதன் Superlative degree 'easiest'. 'y' முடியும் Adjective-களில் 'y' நீக்கி 'iest' சேர்க்க வேண்டும்."
                },
                {
                    id: 35,
                    question: "She is ___ than her sister. (pretty)",
                    options: ["pretty", "prettier", "prettiest", "more pretty"],
                    correct: 1,
                    explanation: "'She is prettier than her sister' சரியானது. 'pretty' என்பதன் Comparative degree 'prettier'."
                },
                {
                    id: 36,
                    question: "'dangerous' என்பதன் Superlative degree என்ன?",
                    options: ["dangerouser", "dangerousest", "more dangerous", "most dangerous"],
                    correct: 3,
                    explanation: "'dangerous' என்பதன் Superlative degree 'most dangerous'. இரண்டு அல்லது அதற்கு மேற்பட்ட சொற்கள் கொண்ட Adjective-களுக்கு 'most' சேர்க்க வேண்டும்."
                },
                {
                    id: 37,
                    question: "This is ___ than that. (far)",
                    options: ["far", "farther", "farthest", "more far"],
                    correct: 1,
                    explanation: "'This is farther than that' சரியானது. 'far' என்பதன் Comparative degree 'farther'."
                },
                {
                    id: 38,
                    question: "'wise' என்பதன் Comparative degree என்ன?",
                    options: ["wise", "wiser", "wisest", "more wise"],
                    correct: 1,
                    explanation: "'wise' என்பதன் Comparative degree 'wiser'. ஒற்றை எழுத்து உயிரெழுத்தில் முடியும் Adjective-களுக்கு 'r' சேர்க்க வேண்டும்."
                },
                {
                    id: 39,
                    question: "He is ___ man in the village. (old)",
                    options: ["old", "older", "oldest", "the oldest"],
                    correct: 3,
                    explanation: "'He is the oldest man in the village' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 40,
                    question: "'narrow' என்பதன் Superlative degree என்ன?",
                    options: ["narrower", "narrowest", "more narrow", "most narrow"],
                    correct: 1,
                    explanation: "'narrow' என்பதன் Superlative degree 'narrowest'. இரண்டு உயிரெழுத்து மெய்யெழுத்து (syllables) கொண்ட சில Adjective-களுக்கு 'er', 'est' சேர்க்கலாம்."
                },
                {
                    id: 41,
                    question: "Silver is ___ gold. (cheap)",
                    options: ["cheap as", "as cheap as", "cheaper as", "cheapest than"],
                    correct: 1,
                    explanation: "'Silver is as cheap as gold' சரியானது. Positive degree-இல் இரண்டு பொருள்கள் சமமாக இருந்தால் 'as...as' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 42,
                    question: "'busy' என்பதன் Comparative degree என்ன?",
                    options: ["busyer", "busier", "busiest", "more busy"],
                    correct: 1,
                    explanation: "'busy' என்பதன் Comparative degree 'busier'. 'y' முடியும் Adjective-களில் 'y' நீக்கி 'ier' சேர்க்க வேண்டும்."
                },
                {
                    id: 43,
                    question: "This is ___ mountain in the world. (high)",
                    options: ["high", "higher", "highest", "the highest"],
                    correct: 3,
                    explanation: "'This is the highest mountain in the world' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 44,
                    question: "'modern' என்பதன் Superlative degree என்ன?",
                    options: ["moderner", "modernest", "more modern", "most modern"],
                    correct: 3,
                    explanation: "'modern' என்பதன் Superlative degree 'most modern'. இரண்டு அல்லது அதற்கு மேற்பட்ட சொற்கள் கொண்ட Adjective-களுக்கு 'most' சேர்க்க வேண்டும்."
                },
                {
                    id: 45,
                    question: "She is ___ than her friend. (rich)",
                    options: ["rich", "richer", "richest", "more rich"],
                    correct: 1,
                    explanation: "'She is richer than her friend' சரியானது. 'rich' என்பதன் Comparative degree 'richer'."
                },
                // Questions 46-50
                {
                    id: 46,
                    question: "'comfortable' என்பதன் Comparative degree என்ன?",
                    options: ["comfortabler", "comfortablest", "more comfortable", "most comfortable"],
                    correct: 2,
                    explanation: "'comfortable' என்பதன் Comparative degree 'more comfortable'. இரண்டு அல்லது அதற்கு மேற்பட்ட சொற்கள் கொண்ட Adjective-களுக்கு 'more' சேர்க்க வேண்டும்."
                },
                {
                    id: 47,
                    question: "This is ___ day of my life. (happy)",
                    options: ["happy", "happier", "happiest", "the happiest"],
                    correct: 3,
                    explanation: "'This is the happiest day of my life' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                },
                {
                    id: 48,
                    question: "'little' (அளவு) என்பதன் Superlative degree என்ன?",
                    options: ["littler", "less", "least", "littlest"],
                    correct: 2,
                    explanation: "'little' (அளவு) என்பதன் Superlative degree 'least'. இது ஒழுங்கற்ற வடிவம்: little - less - least."
                },
                {
                    id: 49,
                    question: "He is ___ than his brother. (clever)",
                    options: ["clever", "cleverer", "cleverest", "more clever"],
                    correct: 1,
                    explanation: "'He is cleverer than his brother' சரியானது. 'clever' என்பதன் Comparative degree 'cleverer'."
                },
                {
                    id: 50,
                    question: "This is ___ building in the city. (tall)",
                    options: ["tall", "taller", "tallest", "the tallest"],
                    correct: 3,
                    explanation: "'This is the tallest building in the city' சரியானது. Superlative degree உடன் எப்போதும் 'the' பயன்படுத்தப்படுகிறது."
                }

];

const prepositionQuestions = [
    
                {
                    id: 1,
                    question: "The cat is sleeping ___ the sofa.",
                    options: ["on", "in", "at", "by"],
                    correct: 0,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். பூனை சோபாவின் மேல் தூங்குகிறது."
                },
                {
                    id: 2,
                    question: "She lives ___ a small apartment.",
                    options: [ "on", "at", "in", "to"],
                    correct: 2,
                    explanation: "'in' என்பது ஒரு மூடிய இடத்தைக் காட்டும். அவள் ஒரு சிறிய அபார்ட்மெண்டில் வசிக்கிறாள்."
                },
                {
                    id: 3,
                    question: "We'll meet ___ 5 o'clock.",
                    options: [ "on", "at", "in", "by"],
                    correct: 1,
                    explanation: "'at' என்பது குறிப்பிட்ட நேரத்தைக் காட்டும். நாங்கள் 5 மணிக்கு சந்திப்போம்."
                },
                {
                    id: 4,
                    question: "He's standing ___ the door.",
                    options: [ "on", "in", "at", "by"],
                    correct: 3,
                    explanation: "'by' என்பது அருகாமையைக் காட்டும். அவன் கதவின் அருகில் நிற்கிறான்."
                },
                {
                    id: 5,
                    question: "The keys are ___ my pocket.",
                    options: ["in", "on", "at", "by"],
                    correct: 0,
                    explanation: "'in' என்பது உள்ளே இருப்பதைக் காட்டும். சாவிகள் என் பாக்கெட்டில் உள்ளன."
                },
                {
                    id: 6,
                    question: "The picture is hanging ___ the wall.",
                    options: [ "in", "at", "on", "to"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். படம் சுவற்றில் தொங்குகிறது."
                },
                {
                    id: 7,
                    question: "I'll be there ___ Monday.",
                    options: [ "in", "on", "at", "by"],
                    correct: 1,
                    explanation: "'on' என்பது குறிப்பிட்ட நாட்களுக்கு பயன்படுத்தப்படும். நான் திங்கட்கிழமை அங்கே இருப்பேன்."
                },
                {
                    id: 8,
                    question: "She was born ___ 1990.",
                    options: ["on", "at", "by", "in" ],
                    correct: 3,
                    explanation: "'in' என்பது வருடம், மாதம் போன்றவற்றுக்கு பயன்படுத்தப்படும். அவள் 1990 இல் பிறந்தாள்."
                },
                {
                    id: 9,
                    question: "Look ___ that beautiful bird!",
                    options: [ "on", "in", "at", "to"],
                    correct: 2,
                    explanation: "'at' என்பது குறிப்பிட்ட இலக்கை நோக்கிப் பார்ப்பதைக் காட்டும். அந்த அழகான பறவையைப் பார்!"
                },
                {
                    id: 10,
                    question: "The ball rolled ___ the table.",
                    options: [ "on", "under", "in", "at"],
                    correct: 1,
                    explanation: "'under' என்பது கீழே இருப்பதைக் காட்டும். பந்து மேசையின் கீழே உருண்டது."
                },
                {
                    id: 11,
                    question: "We walked ___ the park.",
                    options: [ "on", "through", "in", "at"],
                    correct: 1,
                    explanation: "'through' என்பது ஒரு இடத்தின் வழியாகச் செல்வதைக் காட்டும். நாங்கள் பூங்காவின் வழியாக நடந்தோம்."
                },
                {
                    id: 12,
                    question: "She sat ___ me in the classroom.",
                    options: [ "on", "in", "at", "beside"],
                    correct: 3,
                    explanation: "'beside' என்பது அருகில் இருப்பதைக் காட்டும். அவள் வகுப்பறையில் என் அருகில் அமர்ந்தாள்."
                },
                {
                    id: 13,
                    question: "The bank is ___ the post office and the library.",
                    options: [ "on", "in", "between", "at"],
                    correct: 2,
                    explanation: "'between' என்பது இரண்டு விஷயங்களுக்கு இடையே இருப்பதைக் காட்டும். வங்கி தபால் நிலையத்திற்கும் நூலகத்திற்கும் இடையே உள்ளது."
                },
                {
                    id: 14,
                    question: "I'm going ___ the market.",
                    options: ["to", "on", "in", "at"],
                    correct: 0,
                    explanation: "'to' என்பது திசையைக் காட்டும். நான் சந்தைக்குச் செல்கிறேன்."
                },
                {
                    id: 15,
                    question: "The gift is ___ you.",
                    options: ["for", "on", "in", "at"],
                    correct: 0,
                    explanation: "'for' என்பது யாருக்காக என்பதைக் காட்டும். பரிசு உனக்காக உள்ளது."
                },
                {
                    id: 16,
                    question: "He came ___ bus.",
                    options: [ "on", "in", "by", "with"],
                    correct: 2,
                    explanation: "'by' என்பது போக்குவரத்து முறையைக் காட்டும். அவன் பஸ்ஸில் வந்தான்."
                },
                {
                    id: 17,
                    question: "She's interested ___ music.",
                    options: [ "on", "in", "at", "by"],
                    correct: 1,
                    explanation: "'in' என்பது ஆர்வத்தைக் காட்டும். அவள் இசையில் ஆர்வம் காட்டுகிறாள்."
                },
                {
                    id: 18,
                    question: "The book was written ___ a famous author.",
                    options: [ "on", "in", "with", "by"],
                    correct: 3,
                    explanation: "'by' என்பது யாரால் செய்யப்பட்டது என்பதைக் காட்டும். புத்தகம் ஒரு பிரபல எழுத்தாளரால் எழுதப்பட்டது."
                },
                {
                    id: 19,
                    question: "We traveled ___ car.",
                    options: ["by", "on", "in", "with"],
                    correct: 0,
                    explanation: "'by' என்பது போக்குவரத்து முறையைக் காட்டும். நாங்கள் காரில் பயணித்தோம்."
                },
                {
                    id: 20,
                    question: "He's good ___ mathematics.",
                    options: ["on", "in", "at",  "by"],
                    correct: 2,
                    explanation: "'at' என்பது திறமையைக் காட்டும். அவன் கணிதத்தில் நல்லவன்."
                },
                {
                    id: 21,
                    question: "The cat jumped ___ the fence.",
                    options: ["on", "over",  "in", "at"],
                    correct: 1,
                    explanation: "'over' என்பது மேலே குதித்துச் செல்வதைக் காட்டும். பூனை வேலியின் மேல் குதித்தது."
                },
                {
                    id: 22,
                    question: "She's afraid ___ spiders.",
                    options: [ "on", "in", "of", "by"],
                    correct: 2,
                    explanation: "'of' என்பது பயத்தைக் காட்டும். அவள் சிலந்திகளுக்கு பயப்படுகிறாள்."
                },
                {
                    id: 23,
                    question: "We arrived ___ the airport early.",
                    options: ["at", "on", "in", "to"],
                    correct: 0,
                    explanation: "'at' என்பது குறிப்பிட்ட இடத்தைக் காட்டும். நாங்கள் விமான நிலையத்திற்கு விரைவில் வந்து சேர்ந்தோம்."
                },
                {
                    id: 24,
                    question: "The letter was written ___ ink.",
                    options: [ "on", "with", "by", "in"],
                    correct: 3,
                    explanation: "'in' என்பது எழுதும் முறையைக் காட்டும். கடிதம் மையில் எழுதப்பட்டது."
                },
                {
                    id: 25,
                    question: "They're talking ___ the weather.",
                    options: [ "on", "about", "in", "at"],
                    correct: 1,
                    explanation: "'about' என்பது பற்றி பேசுவதைக் காட்டும். அவர்கள் வானிலை பற்றி பேசுகிறார்கள்."
                },
                {
                    id: 26,
                    question: "The shop is ___ the street.",
                    options: [ "on", "in", "across", "at"],
                    correct: 2,
                    explanation: "'across' என்பது எதிர்ப்புறம் இருப்பதைக் காட்டும். கடை தெருவின் எதிர்ப்புறத்தில் உள்ளது."
                },
                {
                    id: 27,
                    question: "I'll be back ___ an hour.",
                    options: ["on", "in", "at", "by"],
                    correct: 1,
                    explanation: "'in' என்பது எதிர்கால காலத்தைக் காட்டும். நான் ஒரு மணி நேரத்தில் திரும்பி வருவேன்."
                },
                {
                    id: 28,
                    question: "She's smiling ___ me.",
                    options: [ "on", "at", "in", "to"],
                    correct: 1,
                    explanation: "'at' என்பது யாரை நோக்கி என்பதைக் காட்டும். அவள் என்னை நோக்கி சிரிக்கிறாள்."
                },
                {
                    id: 29,
                    question: "We're leaving ___ Chennai tomorrow.",
                    options: [ "to", "in", "for", "at"],
                    correct: 2,
                    explanation: "'for' என்பது குறிப்பிட்ட இடத்திற்குச் செல்வதைக் காட்டும். நாங்கள் நாளை சென்னைக்குப் புறப்படுகிறோம்."
                },
                {
                    id: 30,
                    question: "The hotel is ___ the beach.",
                    options: [ "on", "near", "in", "at"],
                    correct: 1,
                    explanation: "'near' என்பது அருகாமையைக் காட்டும். ஹோட்டல் கடற்கரைக்கு அருகில் உள்ளது."
                },
                {
                    id: 31,
                    question: "He's waiting ___ the bus stop.",
                    options: ["at", "on", "in", "by"],
                    correct: 0,
                    explanation: "'at' என்பது குறிப்பிட்ட இடத்தைக் காட்டும். அவன் பஸ் நிறுத்தத்தில் காத்திருக்கிறான்."
                },
                {
                    id: 32,
                    question: "The bird flew ___ the tree.",
                    options: ["into", "on", "in", "at"],
                    correct: 0,
                    explanation: "'into' என்பது உள்ளே நுழைவதைக் காட்டும். பறவை மரத்தினுள் பறந்து சென்றது."
                },
                {
                    id: 33,
                    question: "She's dressed ___ white.",
                    options: [ "on", "with", "by", "in"],
                    correct: 3,
                    explanation: "'in' என்பது உடையின் நிறத்தைக் காட்டும். அவள் வெள்ளை நிற உடையில் உள்ளாள்."
                },
                {
                    id: 34,
                    question: "The meeting starts ___ 10 AM.",
                    options: [ "on", "at", "in", "by"],
                    correct: 1,
                    explanation: "'at' என்பது குறிப்பிட்ட நேரத்தைக் காட்டும். கூட்டம் காலை 10 மணிக்கு தொடங்குகிறது."
                },
                {
                    id: 35,
                    question: "The pen is ___ the paper.",
                    options: [ "in", "at", "by", "on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். பேனா காகிதத்தின் மேல் உள்ளது."
                },
                {
                    id: 36,
                    question: "We're going ___ a trip next week.",
                    options: [ "in", "at", "on", "by"],
                    correct: 2,
                    explanation: "'on' என்பது பயணத்தைக் காட்டும். நாங்கள் அடுத்த வாரம் ஒரு பயணத்திற்குச் செல்கிறோம்."
                },
                {
                    id: 37,
                    question: "The answer is ___ page 45.",
                    options: [ "in", "on", "at", "by"],
                    correct: 1,
                    explanation: "'on' என்பது பக்கத்தில் இருப்பதைக் காட்டும். பதில் 45வது பக்கத்தில் உள்ளது."
                },
                {
                    id: 38,
                    question: "She's laughing ___ the joke.",
                    options: [ "on", "in", "at", "by"],
                    correct: 2,
                    explanation: "'at' என்பது ஏதாவது ஒன்றில் சிரிப்பதைக் காட்டும். அவள் நகைச்சுவையில் சிரிக்கிறாள்."
                },
                {
                    id: 39,
                    question: "The children are playing ___ the garden.",
                    options: [ "on", "at", "by", "in"],
                    correct: 3,
                    explanation: "'in' என்பது ஒரு இடத்திற்குள் இருப்பதைக் காட்டும். குழந்தைகள் தோட்டத்தில் விளையாடுகிறார்கள்."
                },
                {
                    id: 40,
                    question: "He's sitting ___ the chair.",
                    options: [ "in", "at", "by", "on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். அவன் நாற்காலியில் அமர்ந்திருக்கிறான்."
                },
                {
                    id: 41,
                    question: "We'll finish the work ___ Friday.",
                    options: ["by", "on", "in", "at"],
                    correct: 0,
                    explanation: "'by' என்பது குறிப்பிட்ட நேரத்திற்குள் என்பதைக் காட்டும். நாங்கள் வேலையை வெள்ளிக்குள் முடிப்போம்."
                },
                {
                    id: 42,
                    question: "The temperature is ___ zero degrees.",
                    options: [ "on", "below", "in", "at"],
                    correct: 1,
                    explanation: "'below' என்பது கீழே இருப்பதைக் காட்டும். வெப்பநிலை பூஜ்ஜிய டிகிரிக்குக் கீழே உள்ளது."
                },
                {
                    id: 43,
                    question: "She's looking ___ her lost keys.",
                    options: [ "on", "in", "for", "at"],
                    correct: 2,
                    explanation: "'for' என்பது தேடுவதைக் காட்டும். அவள் தன் தொலைந்த சாவிகளைத் தேடுகிறாள்."
                },
                {
                    id: 44,
                    question: "The plane flew ___ the clouds.",
                    options: [ "on", "above", "in", "at"],
                    correct: 1,
                    explanation: "'above' என்பது மேலே இருப்பதைக் காட்டும். விமானம் மேகங்களுக்கு மேலே பறந்தது."
                },
                {
                    id: 45,
                    question: "I'm thinking ___ you.",
                    options: ["about", "on", "in", "at"],
                    correct: 0,
                    explanation: "'about' என்பது பற்றி யோசிப்பதைக் காட்டும். நான் உன்னைப் பற்றி யோசிக்கிறேன்."
                },
                {
                    id: 46,
                    question: "The river flows ___ the bridge.",
                    options: ["under", "on", "in", "at"],
                    correct: 0,
                    explanation: "'under' என்பது கீழே இருப்பதைக் காட்டும். ஆறு பாலத்தின் கீழே பாய்கிறது."
                },
                {
                    id: 47,
                    question: "She's allergic ___ cats.",
                    options: [ "on", "in", "by", "to"],
                    correct: 3,
                    explanation: "'to' என்பது ஒவ்வாமையைக் காட்டும். அவளுக்குப் பூனைகளுக்கு ஒவ்வாமை உள்ளது."
                },
                {
                    id: 48,
                    question: "The book is ___ the shelf.",
                    options: [ "in", "on", "at", "by"],
                    correct: 1,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். புத்தகம் அலமாரியின் மேல் உள்ளது."
                },
                {
                    id: 49,
                    question: "We walked ___ the road.",
                    options: ["along", "on", "in", "at"],
                    correct: 0,
                    explanation: "'along' என்பது ஒரு பாதையின் வழியாக நடப்பதைக் காட்டும். நாங்கள் சாலையின் வழியாக நடந்தோம்."
                },
                {
                    id: 50,
                    question: "He's angry ___ his brother.",
                    options: [ "on", "in", "at", "with"],
                    correct: 3,
                    explanation: "'with' என்பது யாரிடம் கோபம் என்பதைக் காட்டும். அவன் தன் சகோதரனிடம் கோபமாக இருக்கிறான்."
                },
                {
                    id: 51,
                    question: "The cat ran ___ the house.",
                    options: ["into", "on", "in", "at"],
                    correct: 0,
                    explanation: "'into' என்பது உள்ளே நுழைவதைக் காட்டும். பூனை வீட்டினுள் ஓடியது."
                },
                {
                    id: 52,
                    question: "I'm proud ___ my son.",
                    options: ["of", "on", "in", "by"],
                    correct: 0,
                    explanation: "'of' என்பது பெருமையைக் காட்டும். நான் என் மகனைப் பற்றிப் பெருமைப்படுகிறேன்."
                },
                {
                    id: 53,
                    question: "The store is open ___ 9 AM to 6 PM.",
                    options: [ "on", "in", "from", "at"],
                    correct: 2,
                    explanation: "'from' என்பது தொடங்கும் நேரத்தைக் காட்டும். கடை காலை 9 மணி முதல் மாலை 6 மணி வரை திறந்திருக்கும்."
                },
                {
                    id: 54,
                    question: "She's different ___ her sister.",
                    options: [ "on","from", "in", "at"],
                    correct: 1,
                    explanation: "'from' என்பது வேறுபாட்டைக் காட்டும். அவள் தன் சகோதரியை விட வேறுபட்டவள்."
                },
                {
                    id: 55,
                    question: "The mouse ran ___ the hole.",
                    options: [ "on", "into", "in", "at"],
                    correct: 1,
                    explanation: "'into' என்பது உள்ளே நுழைவதைக் காட்டும். சுண்டெலி துளையினுள் ஓடியது."
                },
                {
                    id: 56,
                    question: "We're worried ___ the exam results.",
                    options: [ "on", "in", "about", "at"],
                    correct: 2,
                    explanation: "'about' என்பது கவலைப்படுவதைக் காட்டும். நாங்கள் தேர்வு முடிவுகளைப் பற்றி கவலைப்படுகிறோம்."
                },
                {
                    id: 57,
                    question: "The lamp is ___ the table.",
                    options: [ "in", "at", "by","on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். விளக்கு மேசையின் மேல் உள்ளது."
                },
                {
                    id: 58,
                    question: "He apologized ___ his mistake.",
                    options: ["for", "on", "in", "at"],
                    correct: 0,
                    explanation: "'for' என்பது மன்னிப்புக் கேட்பதைக் காட்டும். அவன் தன் தவறுக்கு மன்னிப்புக் கேட்டான்."
                },
                {
                    id: 59,
                    question: "The sun rises ___ the east.",
                    options: [ "on","in", "at", "from"],
                    correct: 1,
                    explanation: "'in' என்பது திசையைக் காட்டும். சூரியன் கிழக்கில் உதிக்கிறது."
                },
                {
                    id: 60,
                    question: "She's listening ___ music.",
                    options: [ "on", "to", "in", "at"],
                    correct: 1,
                    explanation: "'to' என்பது கேட்பதைக் காட்டும். அவள் இசையைக் கேட்கிறாள்."
                },
                {
                    id: 61,
                    question: "The ball is ___ the box.",
                    options: [ "on", "at", "by", "inside"],
                    correct: 3,
                    explanation: "'inside' என்பது உள்ளே இருப்பதைக் காட்டும். பந்து பெட்டிக்குள் உள்ளது."
                },
                {
                    id: 62,
                    question: "We arrived ___ London yesterday.",
                    options: [ "on", "at", "in", "to"],
                    correct: 2,
                    explanation: "'in' என்பது பெரிய நகரங்களுக்குப் பயன்படுத்தப்படும். நாங்கள் நேற்று லண்டனுக்கு வந்து சேர்ந்தோம்."
                },
                {
                    id: 63,
                    question: "He's famous ___ his paintings.",
                    options: ["for", "on", "in", "by"],
                    correct: 0,
                    explanation: "'for' என்பது பிரபலமான காரணத்தைக் காட்டும். அவன் தன் ஓவியங்களுக்குப் பிரபலமானவன்."
                },
                {
                    id: 64,
                    question: "The school is ___ the hospital.",
                    options: [ "on","near", "in", "at"],
                    correct: 1,
                    explanation: "'near' என்பது அருகாமையைக் காட்டும். பள்ளி மருத்துவமனைக்கு அருகில் உள்ளது."
                },
                {
                    id: 65,
                    question: "She's waiting ___ the train.",
                    options: ["for", "on", "in", "at"],
                    correct: 0,
                    explanation: "'for' என்பது எதற்காகக் காத்திருக்கிறார் என்பதைக் காட்டும். அவள் ரயிலுக்காகக் காத்திருக்கிறாள்."
                },
                {
                    id: 66,
                    question: "The bird is sitting ___ the branch.",
                    options: [ "in", "at", "by", "on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். பறவை கிளையில் அமர்ந்திருக்கிறது."
                },
                {
                    id: 67,
                    question: "I'm tired ___ working all day.",
                    options: ["on", "of", "in", "by"],
                    correct: 1,
                    explanation: "'of' என்பது சோர்வைக் காட்டும். நான் நாள் முழுவதும் வேலை செய்வதால் சோர்வடைந்துவிட்டேன்."
                },
                {
                    id: 68,
                    question: "The cup is ___ the saucer.",
                    options: ["in", "at", "by", "on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். கப் தட்டின் மேல் உள்ளது."
                },
                {
                    id: 69,
                    question: "We're excited ___ the trip.",
                    options: ["on", "in", "about", "at"],
                    correct: 2,
                    explanation: "'about' என்பது உற்சாகத்தைக் காட்டும். நாங்கள் பயணத்தைப் பற்றி உற்சாகமாக இருக்கிறோம்."
                },
                {
                    id: 70,
                    question: "The ship sailed ___ the ocean.",
                    options: ["across", "on", "in", "at"],
                    correct: 0,
                    explanation: "'across' என்பது குறுக்கே செல்வதைக் காட்டும். கப்பல் கடலின் குறுக்கே பயணித்தது."
                },
                {
                    id: 71,
                    question: "He's responsible ___ the project.",
                    options: [ "on", "in", "for", "at"],
                    correct: 2,
                    explanation: "'for' என்பது பொறுப்பைக் காட்டும். அவன் திட்டத்திற்குப் பொறுப்பானவன்."
                },
                {
                    id: 72,
                    question: "The cat is hiding ___ the bed.",
                    options:  ["on", "under", "in", "at"],
                    correct: 1,
                    explanation: "'under' என்பது கீழே இருப்பதைக் காட்டும். பூனை படுக்கையின் கீழே மறைந்திருக்கிறது."
                },
                {
                    id: 73,
                    question: "She's married ___ a doctor.",
                    options: ["to", "on", "in", "with"],
                    correct: 0,
                    explanation: "'to' என்பது திருமணத்தைக் காட்டும். அவள் ஒரு டாக்டரைத் திருமணம் செய்துள்ளாள்."
                },
                {
                    id: 74,
                    question: "The picture is ___ the ceiling.",
                    options: [ "in", "at", "by", "on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். படம் உச்சவரம்பில் உள்ளது."
                },
                {
                    id: 75,
                    question: "I agree ___ your opinion.",
                    options: [ "on", "with", "in", "to"],
                    correct: 1,
                    explanation: "'with' என்பது யாருடன் ஒப்புக்கொள்வது என்பதைக் காட்டும். நான் உன் கருத்துடன் ஒப்புக்கொள்கிறேன்."
                },
                {
                    id: 76,
                    question: "The students are ___ the classroom.",
                    options: [ "on", "at", "in", "by"],
                    correct: 2,
                    explanation: "'in' என்பது ஒரு இடத்திற்குள் இருப்பதைக் காட்டும். மாணவர்கள் வகுப்பறையில் உள்ளனர்."
                },
                {
                    id: 77,
                    question: "He's suffering ___ a cold.",
                    options: [ "on", "from", "in", "with"],
                    correct: 1,
                    explanation: "'from' என்பது நோயால் பாதிப்படைவதைக் காட்டும். அவன் சளியால் பாதிக்கப்படுகிறான்."
                },
                {
                    id: 78,
                    question: "The car is parked ___ the building.",
                    options: [ "on", "in", "at", "beside"],
                    correct: 3,
                    explanation: "'beside' என்பது அருகில் இருப்பதைக் காட்டும். கார் கட்டிடத்தின் அருகில் நிறுத்தப்பட்டுள்ளது."
                },
                {
                    id: 79,
                    question: "She's capable ___ doing hard work.",
                    options: [ "on", "in", "of", "by"],
                    correct: 2,
                    explanation: "'of' என்பது திறனைக் காட்டும். அவள் கடினமான வேலையைச் செய்யும் திறன் கொண்டவள்."
                },
                {
                    id: 80,
                    question: "The fish are swimming ___ the water.",
                    options: [ "on", "at", "in", "by"],
                    correct: 2,
                    explanation: "'in' என்பது திரவத்திற்குள் இருப்பதைக் காட்டும். மீன்கள் நீரில் நீந்துகின்றன."
                },
                {
                    id: 81,
                    question: "He's jealous ___ his friend's success.",
                    options: ["of", "on", "in", "by"],
                    correct: 0,
                    explanation: "'of' என்பது பொறாமையைக் காட்டும். அவன் தன் நண்பரின் வெற்றியைப் பற்றிப் பொறாமைப்படுகிறான்."
                },
                {
                    id: 82,
                    question: "The moon is ___ the earth.",
                    options: [ "on", "in", "at", "around"],
                    correct: 3,
                    explanation: "'around' என்பது சுற்றிலும் இருப்பதைக் காட்டும். நிலா பூமியைச் சுற்றி வருகிறது."
                },
                {
                    id: 83,
                    question: "She's fond ___ chocolate.",
                    options: ["of", "on", "in", "by"],
                    correct: 0,
                    explanation: "'of' என்பது விருப்பத்தைக் காட்டும். அவள் சாக்லேட்டை விரும்புகிறாள்."
                },
                {
                    id: 84,
                    question: "The teacher is writing ___ the board.",
                    options: [ "in", "at", "on", "by"],
                    correct: 2,
                    explanation: "'on' என்பது மேற்பரப்பில் எழுதுவதைக் காட்டும். ஆசிரியர் பலகையில் எழுதுகிறார்."
                },
                {
                    id: 85,
                    question: "We're grateful ___ your help.",
                    options: [ "on", "for", "in", "at"],
                    correct: 1,
                    explanation: "'for' என்பது நன்றியைக் காட்டும். நாங்கள் உங்கள் உதவிக்கு நன்றியுடையவர்கள்."
                },
                {
                    id: 86,
                    question: "The cat climbed ___ the tree.",
                    options: [ "on", "up", "in", "at"],
                    correct: 1,
                    explanation: "'up' என்பது மேலே ஏறுவதைக் காட்டும். பூனை மரத்தின் மேல் ஏறியது."
                },
                {
                    id: 87,
                    question: "He's accused ___ stealing.",
                    options: [ "on", "in", "for", "of"],
                    correct: 3,
                    explanation: "'of' என்பது குற்றச்சாட்டைக் காட்டும். அவன் திருட்டுக் குற்றத்திற்காகக் குற்றம் சாட்டப்படுகிறான்."
                },
                {
                    id: 88,
                    question: "The plane is flying ___ the mountains.",
                    options: [ "on", "in", "over", "at"],
                    correct: 2,
                    explanation: "'over' என்பது மேலே பறப்பதைக் காட்டும். விமானம் மலைகளுக்கு மேலே பறக்கிறது."
                },
                {
                    id: 89,
                    question: "She's satisfied ___ her job.",
                    options: ["on", "in", "with", "at"],
                    correct: 2,
                    explanation: "'with' என்பது திருப்தியைக் காட்டும். அவள் தன் வேலையில் திருப்தியடைகிறாள்."
                },
                {
                    id: 90,
                    question: "The children are running ___ the park.",
                    options: ["around", "on", "in", "at"],
                    correct: 0,
                    explanation: "'around' என்பது சுற்றி ஓடுவதைக் காட்டும். குழந்தைகள் பூங்காவைச் சுற்றி ஓடுகிறார்கள்."
                },
                {
                    id: 91,
                    question: "He's dependent ___ his parents.",
                    options: ["on", "in", "at", "by"],
                    correct: 0,
                    explanation: "'on' என்பது சார்பைக் காட்டும். அவன் தன் பெற்றோரைச் சார்ந்திருக்கிறான்."
                },
                {
                    id: 92,
                    question: "The ball went ___ the window.",
                    options: ["on", "through", "in", "at"],
                    correct: 1,
                    explanation: "'through' என்பது வழியாகச் செல்வதைக் காட்டும். பந்து சன்னல் வழியாகச் சென்றது."
                },
                {
                    id: 93,
                    question: "She's nervous ___ the interview.",
                    options: ["on", "about", "in", "at"],
                    correct: 1,
                    explanation: "'about' என்பது பதட்டத்தைக் காட்டும். அவள் நேர்காணலைப் பற்றி பதட்டமாக இருக்கிறாள்."
                },
                {
                    id: 94,
                    question: "The cat is sleeping ___ the rug.",
                    options: ["in", "at", "by", "on"],
                    correct: 3,
                    explanation: "'on' என்பது மேற்பரப்பில் இருப்பதைக் காட்டும். பூனை கம்பளத்தின் மேல் தூங்குகிறது."
                },
                {
                    id: 95,
                    question: "We're looking forward ___ the holidays.",
                    options: ["to", "on", "in", "at"],
                    correct: 0,
                    explanation: "'to' என்பது எதிர்பார்ப்பைக் காட்டும். நாங்கள் விடுமுறைகளை எதிர்பார்த்துக் கொண்டிருக்கிறோம்."
                },
                {
                    id: 96,
                    question: "The hotel is ___ the city center.",
                    options: [ "on", "in", "at", "by"],
                    correct: 1,
                    explanation: "'in' என்பது ஒரு பெரிய பகுதியில் இருப்பதைக் காட்டும். ஹோட்டல் நகர மையத்தில் உள்ளது."
                },
                {
                    id: 97,
                    question: "He's similar ___ his father.",
                    options: [ "on", "in", "to", "with"],
                    correct: 2,
                    explanation: "'to' என்பது ஒற்றுமையைக் காட்டும். அவன் தன் தந்தையைப் போன்றவன்."
                },
                {
                    id: 98,
                    question: "The book fell ___ the floor.",
                    options: ["onto", "on", "in", "at"],
                    correct: 0,
                    explanation: "'onto' என்பது மேற்பரப்பில் விழுவதைக் காட்டும். புத்தகம் தரையின் மேல் விழுந்தது."
                },
                {
                    id: 99,
                    question: "She's busy ___ her work.",
                    options: [ "on", "in", "at", "with"],
                    correct: 3,
                    explanation: "'with' என்பது பிஸியாக இருப்பதைக் காட்டும். அவள் தன் வேலையில் பிஸியாக இருக்கிறாள்."
                },
                {
                    id: 100,
                    question: "The dog ran ___ the garden.",
                    options: ["across", "on", "in", "at"],
                    correct: 0,
                    explanation: "'across' என்பது குறுக்கே ஓடுவதைக் காட்டும். நாய் தோட்டத்தின் குறுக்கே ஓடியது."
                },
                {
                    id: 101,
                    question: "The results were contrary ___ our expectations.",
                    options: [ "on", "with", "to", "against"],
                    correct: 2,
                    explanation: "'contrary to' என்பது எதிர்மாறாக இருப்பதைக் காட்டும். முடிவுகள் எங்கள் எதிர்பார்ப்புகளுக்கு எதிர்மாறாக இருந்தன."
                },
                {
                    id: 102,
                    question: "She divided the cake ___ the children.",
                    options: [ "between", "among", "in", "with"],
                    correct: 1,
                    explanation: "'among' என்பது மூன்று அல்லது அதற்கு மேற்பட்டவர்களுக்கிடையே பங்கிடுவதைக் காட்டும். அவள் கேக்கை குழந்தைகளுக்கிடையே பிரித்தாள்."
                },
                {
                    id: 103,
                    question: "He stood ___ me during difficult times.",
                    options: [ "on", "in", "at", "by"],
                    correct: 3,
                    explanation: "'stood by' என்பது ஆதரவாக நிற்பதைக் காட்டும். அவன் கடினமான நேரங்களில் என்னுடன் நின்றான்."
                },
                {
                    id: 104,
                    question: "The decision depends ___ your answer.",
                    options: [ "in", "on", "at", "by"],
                    correct: 1,
                    explanation: "'depends on' என்பது சார்ந்திருத்தலைக் காட்டும். முடிவு உங்கள் பதிலைப் பொறுத்தது."
                },
                {
                    id: 105,
                    question: "He was absent ___ class yesterday.",
                    options: ["from", "in", "on", "at"],
                    correct: 0,
                    explanation: "'absent from' என்பது வராதிருத்தலைக் காட்டும். அவன் நேற்று வகுப்பில் வரவில்லை."
                },
                {
                    id: 106,
                    question: "The house is ___ sale.",
                    options: [ "on", "in", "for", "at"],
                    correct: 2,
                    explanation: "'for sale' என்பது விற்பனைக்கு உள்ளதைக் காட்டும். வீடு விற்பனைக்கு உள்ளது."
                },
                {
                    id: 107,
                    question: "She insisted ___ paying the bill.",
                    options: [ "in", "on", "at", "by"],
                    correct: 1,
                    explanation: "'insisted on' என்பது பிடிவாதமாக இருப்பதைக் காட்டும். அவள் பிலைச் செலுத்துவதில் பிடிவாதம் செய்தாள்."
                },
                {
                    id: 108,
                    question: "I prefer tea ___ coffee.",
                    options: [ "than", "to", "over", "from"],
                    correct: 1,
                    explanation: "'prefer to' என்பது விருப்பத்தைக் காட்டும். எனக்கு காபியை விட தேநீர் பிடிக்கும்."
                },
                {
                    id: 109,
                    question: "He succeeded ___ passing the exam.",
                    options: [ "on", "at", "by", "in"],
                    correct: 3,
                    explanation: "'succeeded in' என்பது வெற்றியடைவதைக் காட்டும். அவன் தேர்வில் தேர்ச்சி பெறுவதில் வெற்றியடைந்தான்."
                },
                {
                    id: 110,
                    question: "The teacher complained ___ his behavior.",
                    options: [ "on", "in", "about", "at"],
                    correct: 2,
                    explanation: "'complained about' என்பது புகாரளிப்பதைக் காட்டும். ஆசிரியர் அவனது நடத்தை பற்றி புகார் செய்தார்."
                },
                {
                    id: 111,
                    question: "We arrived just ___ time for the show.",
                    options: ["in", "on", "at", "by"],
                    correct: 0,
                    explanation: "'in time' என்பது சரியான நேரத்தில் வருவதைக் காட்டும். நாங்கள் நிகழ்ச்சிக்கு சரியான நேரத்தில் வந்து சேர்ந்தோம்."
                },
                {
                    id: 112,
                    question: "She's engaged ___ her studies.",
                    options: ["in", "on", "at", "with"],
                    correct: 0,
                    explanation: "'engaged in' என்பது ஈடுபட்டிருப்பதைக் காட்டும். அவள் தன் படிப்பில் ஈடுபட்டிருக்கிறாள்."
                },
                {
                    id: 113,
                    question: "He's qualified ___ the job.",
                    options: [ "on", "in", "at", "for"],
                    correct: 3,
                    explanation: "'qualified for' என்பது தகுதி பெற்றிருப்பதைக் காட்டும். அவன் வேலைக்குத் தகுதி பெற்றவன்."
                },
                {
                    id: 114,
                    question: "The train arrived ___ schedule.",
                    options: [ "in", "on", "at", "by"],
                    correct: 1,
                    explanation: "'on schedule' என்பது நேரத்திற்கு வருவதைக் காட்டும். ரயில் நேரத்திற்கு வந்து சேர்ந்தது."
                },
                {
                    id: 115,
                    question: "I'm not familiar ___ this area.",
                    options: [ "to", "with", "in", "on"],
                    correct: 1,
                    explanation: "'familiar with' என்பது பழக்கமானதைக் காட்டும். எனக்கு இந்த பகுதி பழக்கமில்லை."
                },
                {
                    id: 116,
                    question: "She's obsessed ___ perfection.",
                    options: [ "on", "in", "with", "by"],
                    correct: 0,
                    explanation: "'obsessed with' என்பது ஆசையால் பீடிக்கப்பட்டிருப்பதைக் காட்டும். அவள் முழுமையான தன்மையில் ஆசையால் பீடிக்கப்பட்டிருக்கிறாள்."
                },
                {
                    id: 117,
                    question: "He's innocent ___ the crime.",
                    options: [ "from", "of", "in", "on"],
                    correct: 1,
                    explanation: "'innocent of' என்பது குற்றமற்றதைக் காட்டும். அவன் குற்றத்திலிருந்து குற்றமற்றவன்."
                },
                {
                    id: 118,
                    question: "The company is ___ debt.",
                    options: ["on", "at", "with", "in"],
                    correct: 3,
                    explanation: "'in debt' என்பது கடனில் இருப்பதைக் காட்டும். நிறுவனம் கடனில் உள்ளது."
                },
                {
                    id: 119,
                    question: "She's devoted ___ her family.",
                    options: [ "on", "in", "to", "with"],
                    correct: 2,
                    explanation: "'devoted to' என்பது அர்ப்பணிப்பைக் காட்டும். அவள் தன் குடும்பத்திற்கு அர்ப்பணிக்கப்பட்டவள்."
                },
                {
                    id: 120,
                    question: "The glass is full ___ water.",
                    options: [ "with", "of", "in", "by"],
                    correct: 1,
                    explanation: "'full of' என்பது நிரம்பியிருப்பதைக் காட்டும். கண்ணாடி தண்ணீரால் நிரம்பியுள்ளது."
                },
                {
                    id: 121,
                    question: "He's conscious ___ his mistakes.",
                    options: [ "about", "in", "on", "of"],
                    correct: 3,
                    explanation: "'conscious of' என்பது உணர்வைக் காட்டும். அவன் தன் தவறுகளை உணர்கிறான்."
                },
                {
                    id: 122,
                    question: "We're running short ___ time.",
                    options: ["of", "on", "in", "at"],
                    correct: 0,
                    explanation: "'short of' என்பது குறைவாக இருப்பதைக் காட்டும். நேரம் குறைந்து வருகிறது."
                },
                {
                    id: 123,
                    question: "She's accustomed ___ hard work.",
                    options: [ "with", "in", "to", "on"],
                    correct: 2,
                    explanation: "'accustomed to' என்பது பழக்கமானதைக் காட்டும். அவள் கடினமான வேலைக்குப் பழக்கமானவள்."
                },
                {
                    id: 124,
                    question: "He's disappointed ___ the results.",
                    options: ["with", "in", "at", "by"],
                    correct: 0,
                    explanation: "'disappointed with' என்பது ஏமாற்றத்தைக் காட்டும். அவன் முடிவுகளால் ஏமாற்றமடைந்தான்."
                },
                {
                    id: 125,
                    question: "The room was crowded ___ people.",
                    options: [ "by", "with", "in", "of"],
                    correct: 1,
                    explanation: "'crowded with' என்பது நிரம்பியிருப்பதைக் காட்டும். அறை மக்களால் நிரம்பியிருந்தது."
                },
                {
                    id: 126,
                    question: "She's angry ___ the decision.",
                    options: [ "with", "on", "at", "in"],
                    correct: 2,
                    explanation: "'angry at' என்பது ஒரு விஷயத்தில் கோபப்படுவதைக் காட்டும். அவள் முடிவில் கோபமாக இருக்கிறாள்."
                },
                {
                    id: 127,
                    question: "He's involved ___ the project.",
                    options: ["in", "with", "on", "at"],
                    correct: 0,
                    explanation: "'involved in' என்பது ஈடுபட்டிருப்பதைக் காட்டும். அவன் திட்டத்தில் ஈடுபட்டிருக்கிறான்."
                },
                {
                    id: 128,
                    question: "She's confident ___ her abilities.",
                    options: [ "in", "of", "about", "with"],
                    correct: 1,
                    explanation: "'confident of' என்பது நம்பிக்கையைக் காட்டும். அவள் தன் திறன்களில் நம்பிக்கை கொண்டிருக்கிறாள்."
                },
                {
                    id: 129,
                    question: "The product is made ___ recycled materials.",
                    options: [ "of", "with", "by", "from"],
                    correct: 3,
                    explanation: "'made from' என்பது மூலப்பொருளில் மாற்றம் ஏற்பட்டதைக் காட்டும். தயாரிப்பு மறுசுழற்சி பொருட்களால் செய்யப்பட்டது."
                },
                {
                    id: 130,
                    question: "He's jealous ___ his brother's new car.",
                    options: [ "with", "about", "at", "of"],
                    correct: 3,
                    explanation: "'jealous of' என்பது பொறாமையைக் காட்டும். அவன் தன் சகோதரனின் புதிய காரைப் பற்றிப் பொறாமைப்படுகிறான்."
                },
                {
                    id: 131,
                    question: "The table is made ___ wood.",
                    options: [ "from", "with", "of", "by"],
                    correct: 2,
                    explanation: "'made of' என்பது மூலப்பொருள் தெரிந்திருப்பதைக் காட்டும். மேசை மரத்தால் செய்யப்பட்டது."
                },
                {
                    id: 132,
                    question: "She's keen ___ learning French.",
                    options: ["on", "about", "in", "to"],
                    correct: 0,
                    explanation: "'keen on' என்பது ஆர்வத்தைக் காட்டும். அவள் பிரஞ்சு கற்க ஆர்வமாக உள்ளாள்."
                },
                {
                    id: 133,
                    question: "He's suspicious ___ his neighbor.",
                    options: [ "about", "of", "with", "on"],
                    correct: 1,
                    explanation: "'suspicious of' என்பது சந்தேகத்தைக் காட்டும். அவன் தன் அண்டை வீட்டாரைப் பற்றிச் சந்தேகப்படுகிறான்."
                },
                {
                    id: 134,
                    question: "The country is rich ___ natural resources.",
                    options: ["in", "with", "of", "by"],
                    correct: 0,
                    explanation: "'rich in' என்பது நிறைவாக இருப்பதைக் காட்டும். நாடு இயற்கை வளங்களில் நிறைந்துள்ளது."
                },
                {
                    id: 135,
                    question: "She's certain ___ her success.",
                    options: [ "about", "in", "on", "of"],
                    correct: 3,
                    explanation: "'certain of' என்பது உறுதியைக் காட்டும். அவள் தன் வெற்றியில் உறுதியாக உள்ளாள்."
                },
                {
                    id: 136,
                    question: "He's immune ___ that disease.",
                    options: [ "from", "to", "against", "of"],
                    correct: 1,
                    explanation: "'immune to' என்பது நோய் எதிர்ப்புத் திறனைக் காட்டும். அவனுக்கு அந்த நோய் எதிர்ப்பு உள்ளது."
                },
                {
                    id: 137,
                    question: "She's tired ___ waiting.",
                    options: [ "with", "from", "of", "by"],
                    correct: 2,
                    explanation: "'tired of' என்பது சோர்வைக் காட்டும். அவள் காத்திருப்பதால் சோர்வடைந்தாள்."
                },
                {
                    id: 138,
                    question: "The building is safe ___ earthquakes.",
                    options: [ "against", "from", "of", "with"],
                    correct: 1,
                    explanation: "'safe from' என்பது பாதுகாப்பைக் காட்டும். கட்டிடம் பூகம்பங்களிலிருந்து பாதுகாப்பானது."
                },
                {
                    id: 139,
                    question: "He's grateful ___ your assistance.",
                    options: [ "to", "with", "by", "for"],
                    correct: 3,
                    explanation: "'grateful for' என்பது நன்றியைக் காட்டும். அவன் உங்கள் உதவிக்கு நன்றியுடையவன்."
                },
                {
                    id: 140,
                    question: "She's proud ___ her achievements.",
                    options: [ "about", "in", "with", "of"],
                    correct: 3,
                    explanation: "'proud of' என்பது பெருமையைக் காட்டும். அவள் தன் சாதனைகளைப் பற்றிப் பெருமைப்படுகிறாள்."
                },
                {
                    id: 141,
                    question: "The team consists ___ ten members.",
                    options: [ "with", "in", "of", "by"],
                    correct: 2,
                    explanation: "'consists of' என்பது உள்ளடக்கத்தைக் காட்டும். குழு பத்து உறுப்பினர்களைக் கொண்டுள்ளது."
                },
                {
                    id: 142,
                    question: "He's addicted ___ social media.",
                    options: ["to", "with", "on", "by"],
                    correct: 0,
                    explanation: "'addicted to' என்பது அடிமையாக இருப்பதைக் காட்டும். அவன் சமூக ஊடகங்களுக்கு அடிமையாக இருக்கிறான்."
                },
                {
                    id: 143,
                    question: "She's sensitive ___ criticism.",
                    options: [ "about", "to", "with", "of"],
                    correct: 1,
                    explanation: "'sensitive to' என்பது உணர்ச்சிவசப்பட்டு இருப்பதைக் காட்டும். அவள் விமர்சனத்திற்கு உணர்ச்சிவசப்பட்டவள்."
                },
                {
                    id: 144,
                    question: "The medicine is effective ___ headaches.",
                    options: [ "for", "on", "in", "against"],
                    correct: 3,
                    explanation: "'effective against' என்பது பயனுள்ளதைக் காட்டும். மருந்து தலைவலிக்கு பயனுள்ளது."
                },
                {
                    id: 145,
                    question: "He's famous ___ being punctual.",
                    options: ["for", "as", "in", "by"],
                    correct: 0,
                    explanation: "'famous for' என்பது பிரபலமான காரணத்தைக் காட்டும். அவன் நேரத்திற்குகந்தவனாக இருப்பதால் பிரபலமானவன்."
                },
                {
                    id: 146,
                    question: "She's anxious ___ her exam results.",
                    options: [ "for", "of", "about", "with"],
                    correct: 2,
                    explanation: "'anxious about' என்பது கவலையைக் காட்டும். அவள் தன் தேர்வு முடிவுகளைப் பற்றி கவலைப்படுகிறாள்."
                },
                {
                    id: 147,
                    question: "The house is ___ fire!",
                    options: [ "in", "on", "at", "with"],
                    correct: 1,
                    explanation: "'on fire' என்பது தீப்பிடித்திருப்பதைக் காட்டும். வீட்டில் தீப்பிடித்து விட்டது!"
                },
                {
                    id: 148,
                    question: "He's guilty ___ theft.",
                    options: ["of", "for", "in", "with"],
                    correct: 0,
                    explanation: "'guilty of' என்பது குற்றத்தைக் காட்டும். அவன் திருட்டுக் குற்றத்திற்கு குற்றவாளி."
                },
                {
                    id: 149,
                    question: "She's capable ___ handling pressure.",
                    options: ["in", "with", "to", "of"],
                    correct: 3,
                    explanation: "'capable of' என்பது திறனைக் காட்டும். அவள் அழுத்தத்தைக் கையாளும் திறன் கொண்டவள்."
                },
                {
                    id: 150,
                    question: "The country is independent ___ foreign aid.",
                    options: [ "from", "with", "of", "by"],
                    correct: 2,
                    explanation: "'independent of' என்பது சுதந்திரத்தைக் காட்டும். நாடு வெளிநாட்டு உதவியிலிருந்து சுதந்திரமானது."
                }

];

const beverbQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];

const tensesQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];

const conjunctionQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];

const interjectionQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];

const directIndirectSpeechQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];

const voiceQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];

const sentencesQuestions = [
                {
                    id: 1,
                    question: "'child' என்பதன் Plural வடிவம் என்ன?",
                    options: ["childs", "children", "childes", "childrens"],
                    correct: 1,
                    explanation: "'child' என்பதன் Plural வடிவம் 'children'. இது ஒழுங்கற்ற பன்மை வடிவம்."
                },

];