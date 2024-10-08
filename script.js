const password = 'ZIYAD.LH';
const questions = [
    {
        question: "1. من هو الفيلسوف الذي كتب 'الجمهورية'؟",
        answers: ["A) أفلاطون", "B) سقراط", "C) أرسطو", "D) ديمقريطس"],
        correct: 0
    },
    {
        question: "2. ما هو السؤال الرئيسي الذي تهتم به الفلسفة؟",
        answers: ["A) ما هو الوجود؟", "B) ما هو الجميل؟", "C) ما هو الخير؟", "D) جميع ما سبق"],
        correct: 3
    },
    {
        question: "3. ما هو المفهوم الأساسي في فلسفة أفلاطون؟",
        answers: ["A) المثل", "B) الذات", "C) الوجود", "D) الخير"],
        correct: 0
    },
    {
        question: "4. من هو الفيلسوف الذي قال 'أنا أفكر إذن أنا موجود'؟",
        answers: ["A) أفلاطون", "B) ديكارت", "C) هيوم", "D) كانط"],
        correct: 1
    },
    {
        question: "5. ما هو مفهوم 'المدينة الفاضلة'؟",
        answers: ["A) دولة يحكمها الفلاسفة", "B) دولة ديمقراطية", "C) دولة ملكية", "D) دولة ديكتاتورية"],
        correct: 0
    },
    {
        question: "6. من هو الفيلسوف الذي قدم نظرية 'الأخلاق الكانطية'؟",
        answers: ["A) هيجل", "B) كانط", "C) نيتشه", "D) أفلاطون"],
        correct: 1
    },
    {
        question: "7. ما هو الهدف الأساسي للأخلاق النفعية؟",
        answers: ["A) تحقيق أكبر قدر من السعادة لأكبر عدد من الناس", "B) تحقيق العدالة", "C) تحقيق الواجب", "D) تحقيق الفضيلة"],
        correct: 0
    },
    {
        question: "8. ما هي الفكرة الأساسية لفلسفة الوجودية؟",
        answers: ["A) الحرية والمسؤولية الفردية", "B) السعادة الجماعية", "C) الالتزام الأخلاقي", "D) الجمال"],
        correct: 0
    },
    {
        question: "9. من هو الفيلسوف الذي قدم فكرة 'إرادة القوة'؟",
        answers: ["A) نيتشه", "B) كانط", "C) هيجل", "D) سارتر"],
        correct: 0
    },
    {
        question: "10. ما هو التحدي الرئيسي الذي تواجهه فلسفة اللغة؟",
        answers: ["A) تحديد معنى الكلمات", "B) تحليل بنية الجمل", "C) تفسير العلاقات الاجتماعية", "D) فهم الطبيعة البشرية"],
        correct: 0
    },
    {
        question: "11. من هو الفيلسوف الذي طور مفهوم 'نظرية العدالة'؟",
        answers: ["A) جون راولز", "B) أفلاطون", "C) هيجل", "D) أرسطو"],
        correct: 0
    },
    {
        question: "12. ما هو مفهوم 'الواجب' في الأخلاق الكانطية؟",
        answers: ["A) القيام بما هو صحيح بدون النظر إلى النتائج", "B) السعي لتحقيق السعادة", "C) العمل لتحقيق العدالة", "D) الالتزام بالفضيلة"],
        correct: 0
    },
    {
        question: "13. من هو الفيلسوف الذي كتب 'هكذا تكلم زرادشت'؟",
        answers: ["A) نيتشه", "B) أفلاطون", "C) ديكارت", "D) كانط"],
        correct: 0
    },
    {
        question: "14. ما هو الغرض من الفلسفة السياسية؟",
        answers: ["A) فهم كيف ينبغي أن تكون المجتمعات منظمة", "B) تحديد معنى الكلمات", "C) دراسة الطبيعة البشرية", "D) دراسة المنطق"],
        correct: 0
    },
    {
        question: "15. من هو الفيلسوف الذي طور نظرية 'العقد الاجتماعي'؟",
        answers: ["A) جان جاك روسو", "B) أفلاطون", "C) توماس هوبز", "D) أرسطو"],
        correct: 0
    },
    {
        question: "16. ما هو السؤال الأساسي في فلسفة الجمال؟",
        answers: ["A) ما هو الجميل؟", "B) ما هو الوجود؟", "C) ما هو الخير؟", "D) ما هي اللغة؟"],
        correct: 0
    },
    {
        question: "17. ما هو الفرق بين 'العدالة التوزيعية' و'العدالة الإجرائية'؟",
        answers: ["A) العدالة التوزيعية تتعلق بتوزيع الموارد، بينما العدالة الإجرائية تتعلق بالإجراءات التي تؤدي إلى اتخاذ القرارات", "B) العدالة التوزيعية تتعلق بالفضيلة، بينما العدالة الإجرائية تتعلق بالنتائج", "C) العدالة التوزيعية تتعلق بالواجب، بينما العدالة الإجرائية تتعلق بالسعادة", "D) العدالة التوزيعية تتعلق بالحياة الاجتماعية، بينما العدالة الإجرائية تتعلق بالحقائق الفردية"],
        correct: 0
    },
    {
        question: "18. من هو الفيلسوف الذي طور مفهوم 'إرادة القوة'؟",
        answers: ["A) نيتشه", "B) ديكارت", "C) أفلاطون", "D) كانط"],
        correct: 0
    },
    {
        question: "19. ما هو الهدف الأساسي لفلسفة الأخلاق؟",
        answers: ["A) تحديد ما هو الخير والصواب", "B) فهم معنى الجمال", "C) تحليل المعاني العميقة للغة", "D) فهم الطبيعة البشرية"],
        correct: 0
    },
    {
        question: "20. من هو الفيلسوف الذي كتب 'نقد العقل الخالص'؟",
        answers: ["A) كانط", "B) أفلاطون", "C) ديكارت", "D) هيجل"],
        correct: 0
    },
    {
        question: "21. ما هو المفهوم الأساسي لفلسفة اللغة عند فتجنشتاين؟",
        answers: ["A) البيئة التي تستخدم فيها الكلمات", "B) التفكير المجرد", "C) المعنى الحرفي للكلمات", "D) التحليل المنطقي للجمل"],
        correct: 0
    },
    {
        question: "22. ما هو الهدف الأساسي للفلسفة السياسية عند أفلاطون؟",
        answers: ["A) بناء مدينة فاضلة", "B) تحقيق العدالة الاجتماعية", "C) تحقيق السعادة الفردية", "D) الحفاظ على النظام"],
        correct: 0
    },
    {
        question: "23. من هو الفيلسوف الذي كتب 'العقد الاجتماعي'؟",
        answers: ["A) جان جاك روسو", "B) أفلاطون", "C) توماس هوبز", "D) أرسطو"],
        correct: 0
    },
    {
        question: "24. ما هو التحدي الرئيسي الذي تواجهه فلسفة العقل؟",
        answers: ["A) تفسير العلاقة بين العقل والجسد", "B) فهم معنى اللغة", "C) تحليل القضايا الأخلاقية", "D) تحديد معنى الجمال"],
        correct: 0
    },
    {
        question: "25. من هو الفيلسوف الذي قال إن العقل هو علامة الوجود؟",
        answers: ["A) ديكارت", "B) أفلاطون", "C) هيوم", "D) كانط"],
        correct: 0
    },
    {
        question: "26. ما هو الفرق بين 'الواجب' و'الفضيلة' في الفلسفة الأخلاقية؟",
        answers: ["A) الواجب هو ما يجب فعله بغض النظر عن النتائج، بينما الفضيلة هي تطوير الصفات الجيدة في النفس", "B) الواجب هو القيام بما هو مفيد للآخرين، بينما الفضيلة تتعلق بالتفكير في الذات", "C) الواجب هو اتباع القوانين، بينما الفضيلة هي تحقيق السعادة", "D) الواجب يتعلق بالدين، بينما الفضيلة تتعلق بالفلسفة"],
        correct: 0
    },
    {
        question: "27. من هو الفيلسوف الذي طرح مفهوم 'الوجود والعدم'؟",
        answers: ["A) جان بول سارتر", "B) ديكارت", "C) أفلاطون", "D) نيتشه"],
        correct: 0
    },
    {
        question: "28. ما هي الفكرة الرئيسية لفلسفة كانط؟",
        answers: ["A) العقلانية الأخلاقية", "B) القوة والهيمنة", "C) التجربة الحسية", "D) الجمال والمعرفة"],
        correct: 0
    },
    {
    question: "29. ما هو مفهوم 'الإرادة الحرة' في الفلسفة؟",
    answers: ["A) القدرة على اتخاذ القرارات دون قيود خارجية", "B) الاعتماد على الغريزة فقط", "C) الاختيار دون عواقب", "D) عدم القدرة على الاختيار"],
    correct: 0
    },
    {
    question: "30. ما هو الفرق بين 'العقلانية' و'التجريبية'؟",
    answers: ["A) العقلانية تعتمد على العقل والتفكير، بينما التجريبية تعتمد على التجربة الحسية", "B) العقلانية تعتمد على المشاعر، بينما التجريبية تعتمد على العلم", "C) العقلانية ترفض الواقع، بينما التجريبية تقبله", "D) العقلانية تعتمد على التجربة فقط"],
    correct: 0
    },
    {
    question: "31. من هو الفيلسوف الذي كتب 'المدينة الفاضلة'؟",
    answers: ["A) أفلاطون", "B) سقراط", "C) أرسطو", "D) كانط"],
    correct: 0
    },
    {
    question: "32. ما هو مفهوم 'العدالة الاجتماعية' في الفلسفة؟",
    answers: ["A) تحقيق المساواة وتوزيع الفرص بشكل عادل بين الأفراد", "B) تفضيل فئة معينة من المجتمع", "C) تركيز السلطة في يد الأقوياء", "D) تجاهل القضايا الاجتماعية"],
    correct: 0
    },
    {
    question: "33. من هو الفيلسوف الذي قال إن الحياة هي 'معاناة مستمرة'؟",
    answers: ["A) شوبنهاور", "B) نيتشه", "C) هيجل", "D) سقراط"],
    correct: 0
    },
    {
    question: "34. ما هو تعريف 'الماورائيات' في الفلسفة؟",
    answers: ["A) دراسة ما وراء الطبيعة والواقع", "B) دراسة الظواهر الحسية فقط", "C) دراسة العلوم الفيزيائية", "D) دراسة العقل البشري فقط"],
    correct: 0
    },
    {
    question: "35. ما هو مفهوم 'الأخلاق التطبيقية'؟",
    answers: ["A) تطبيق المبادئ الأخلاقية في الحياة اليومية والقرارات العملية", "B) دراسة الأخلاق النظرية فقط", "C) تطبيق القوانين فقط", "D) تجاهل القيم الأخلاقية"],
    correct: 0
    },
    {
    question: "36. من هو الفيلسوف الذي كتب 'أسس ميتافيزيقا الأخلاق'؟",
    answers: ["A) كانط", "B) نيتشه", "C) ديكارت", "D) هيوم"],
    correct: 0
    },
    {
    question: "37. ما هو الفرق بين 'الأخلاق النسبية' و'الأخلاق المطلقة'؟",
    answers: ["A) الأخلاق النسبية تعتمد على الظروف الثقافية والاجتماعية، بينما الأخلاق المطلقة ثابتة ولا تتغير", "B) الأخلاق النسبية تعتمد على العقل، بينما الأخلاق المطلقة تعتمد على الدين", "C) الأخلاق النسبية تعتمد على الغريزة، بينما الأخلاق المطلقة تعتمد على التفكير", "D) الأخلاق النسبية هي أخلاق فردية فقط"],
    correct: 0
    },
    {
    question: "38. ما هو مفهوم 'النفعية' في الفلسفة؟",
    answers: ["A) الفعل الصحيح هو الذي يؤدي إلى أكبر منفعة لأكبر عدد من الناس", "B) الفعل الصحيح يعتمد على نوايا الشخص فقط", "C) الفعل الصحيح هو الذي يتبع القوانين الدينية", "D) الفعل الصحيح يعتمد على المشاعر"],
    correct: 0
    },
    {
    question: "39. ما هو مفهوم 'الألُوهية' في الفلسفة؟",
    answers: ["A) الإيمان بوجود إله أو آلهة", "B) الإيمان بالعلوم الطبيعية فقط", "C) الإيمان بأن الكون غير قابل للتفسير", "D) عدم الإيمان بأي قوة عليا"],
    correct: 0
    },
    {
    question: "40. من هو الفيلسوف الذي قال 'الإنسان ذئب لأخيه الإنسان'؟",
    answers: ["A) توماس هوبز", "B) جون لوك", "C) ديكارت", "D) كانط"],
    correct: 0
    },
    {
    question: "41. ما هو تعريف 'الدين الطبيعي' في الفلسفة؟",
    answers: ["A) الإيمان بالله من خلال العقل والطبيعة دون اللجوء إلى الوحي", "B) الإيمان بالمعجزات فقط", "C) الاعتماد على الكتب الدينية فقط", "D) الإيمان بالخرافات"],
    correct: 0
    },
    {
    question: "42. ما هو مفهوم 'العقد الاجتماعي' في الفلسفة؟",
    answers: ["A) اتفاق بين الأفراد لتشكيل حكومة وتنظيم المجتمع", "B) رفض التعاون الاجتماعي", "C) تعزيز الفوضى", "D) التركيز على القيم الفردية"],
    correct: 0
    },
    {
    question: "43. من هو الفيلسوف الذي كتب 'الأمير'؟",
    answers: ["A) نيكولو ميكافيلي", "B) جون لوك", "C) هيجل", "D) أفلاطون"],
    correct: 0
    },
    {
    question: "44. ما هو الفرق بين 'المادية' و'المثالية' في الفلسفة؟",
    answers: ["A) المادية تركز على العالم المادي والحقائق الحسية، بينما المثالية تركز على العقل والأفكار", "B) المادية تعتمد على الدين، بينما المثالية تعتمد على العقل", "C) المادية ترفض الواقع، بينما المثالية تقبله", "D) المادية تعتمد على التجربة فقط"],
    correct: 0
    },
    {
    question: "45. ما هو تعريف 'الإنسانوية' في الفلسفة؟",
    answers: ["A) الاعتقاد بأهمية الإنسان وقدرته على تحقيق السعادة والمعرفة بدون الاعتماد على الدين", "B) الاعتماد على الغرائز فقط", "C) التركيز على الطبيعة فقط", "D) رفض القيم الإنسانية"],
    correct: 0
    },
    {
    question: "46. من هو الفيلسوف الذي كتب 'في الحرية'؟",
    answers: ["A) جون ستيوارت ميل", "B) جون لوك", "C) كانط", "D) هيوم"],
    correct: 0
    },
    {
    question: "47. ما هو مفهوم 'العدمية' في الفلسفة؟",
    answers: ["A) رفض القيم والمعاني التقليدية والاعتقاد بأن الحياة ليس لها معنى موضوعي", "B) قبول كل القيم والمعاني", "C) التركيز على القيم الدينية فقط", "D) الاعتماد على الحواس فقط"],
    correct: 0
    },
    {
    question: "48. من هو الفيلسوف الذي قال 'الوجود يسبق الماهية'؟",
    answers: ["A) جان بول سارتر", "B) نيتشه", "C) هيجل", "D) أفلاطون"],
    correct: 0
    },
    {
    question: "49. ما هو مفهوم 'الفضيلة' في الفلسفة الأخلاقية؟",
    answers: ["A) السلوك الجيد الذي يتوافق مع القيم الأخلاقية العالية", "B) التصرف بطريقة تتعارض مع الأخلاق", "C) النجاح المادي فقط", "D) التصرف بناءً على الغرائز"],
    correct: 0
    },
    {
    question: "50. من هو الفيلسوف الذي قال إن 'التاريخ هو صراع الطبقات'؟",
    answers: ["A) كارل ماركس", "B) هيجل", "C) جون لوك", "D) توماس هوبز"],
    correct: 0
    },
    {
    question: "51. ما هو مفهوم 'الحرية السلبية'؟",
    answers: ["A) غياب القيود الخارجية", "B) القدرة على تحقيق الذات", "C) الحرية الاقتصادية فقط", "D) الحرية من القوانين"],
    correct: 0
    },
    {
    question: "52. من هو الفيلسوف الذي كتب 'أسطورة الكهف'؟",
    answers: ["A) أفلاطون", "B) سقراط", "C) أرسطو", "D) هيجل"],
    correct: 0
    },
    {
    question: "53. ما هو مفهوم 'اللاعقلانية' في الفلسفة؟",
    answers: ["A) الاعتقاد بأن العالم لا يمكن تفسيره بالكامل من خلال العقل", "B) الاعتماد على العقل في كل شيء", "C) الاعتماد على التجربة فقط", "D) التركيز على العلوم الطبيعية"],
    correct: 0
    },
    {
    question: "54. من هو الفيلسوف الذي كتب 'هكذا تكلم زرادشت'؟",
    answers: ["A) نيتشه", "B) شوبنهاور", "C) كانط", "D) ديكارت"],
    correct: 0
    },
    {
    question: "55. ما هو الفرق بين 'الأخلاق الغائية' و'الأخلاق الفعلية'؟",
    answers: ["A) الأخلاق الغائية تركز على نتائج الفعل، بينما الأخلاق الفعلية تركز على طبيعة الفعل نفسه", "B) الأخلاق الغائية تركز على النوايا، بينما الأخلاق الفعلية تركز على النتائج فقط", "C) الأخلاق الغائية تعتمد على القيم الدينية، بينما الأخلاق الفعلية تعتمد على المشاعر", "D) الأخلاق الغائية تتجاهل العواقب"],
    correct: 0
    },
    {
    question: "56. من هو الفيلسوف الذي قال إن 'العقل هو ما يجعل الإنسان إنسانًا'؟",
    answers: ["A) أرسطو", "B) أفلاطون", "C) ديكارت", "D) كانط"],
    correct: 0
    },
    {
    question: "57. ما هو مفهوم 'الوجودية' في الفلسفة؟",
    answers: ["A) الفلسفة التي تركز على وجود الإنسان وحريته الفردية ومعناه الشخصي في الحياة", "B) الاعتماد على القيم التقليدية فقط", "C) التركيز على العالم المادي فقط", "D) رفض الحرية الفردية"],
    correct: 0
    },
    {
    question: "58. من هو الفيلسوف الذي قال 'كل ما أعرفه هو أني لا أعرف شيئًا'؟",
    answers: ["A) سقراط", "B) أفلاطون", "C) أرسطو", "D) هيوم"],
    correct: 0
    },
    {
    question: "59. ما هو الفرق بين 'الحتمية' و'الإرادة الحرة'؟",
    answers: ["A) الحتمية تؤكد أن كل الأحداث محددة سلفًا، بينما الإرادة الحرة تسمح باتخاذ قرارات مستقلة", "B) الحتمية تعتمد على الغرائز، بينما الإرادة الحرة تعتمد على العقل", "C) الحتمية تعتمد على القيم التقليدية، بينما الإرادة الحرة ترفضها", "D) الحتمية تعتمد على الفلسفة الدينية فقط"],
    correct: 0
    },
    {
    question: "60. من هو الفيلسوف الذي كتب 'جمهورية'؟",
    answers: ["A) أفلاطون", "B) سقراط", "C) أرسطو", "D) نيتشه"],
    correct: 0
    },
    {
    question: "61. ما هو مفهوم 'العقل الجمعي'؟",
    answers: ["A) التفكير الذي يتشارك فيه الأفراد داخل مجموعة ويؤثر في قراراتهم", "B) التفكير الفردي المستقل", "C) التفكير الذي يعتمد على الغرائز فقط", "D) التفكير الذي يعتمد على القيم الدينية فقط"],
    correct: 0
    },
    {
    question: "62. من هو الفيلسوف الذي كتب 'نقد العقل الخالص'؟",
    answers: ["A) كانط", "B) نيتشه", "C) ديكارت", "D) أفلاطون"],
    correct: 0
    },
    {
    question: "63. ما هو الفرق بين 'الجدلية' و'البراغماتية'؟",
    answers: ["A) الجدلية تعتمد على الحوار والتناقض، بينما البراغماتية تعتمد على النتائج العملية", "B) الجدلية تعتمد على التجربة فقط، بينما البراغماتية تعتمد على العقل", "C) الجدلية ترفض الفكر العقلاني، بينما البراغماتية تقبله", "D) الجدلية تعتمد على الفلسفة الأخلاقية فقط"],
    correct: 0
    },
    {
    question: "64. من هو الفيلسوف الذي قال إن 'الإنسان لا يمكن أن يكون حرًا إذا لم يكن المجتمع حرًا'؟",
    answers: ["A) جان جاك روسو", "B) جون لوك", "C) هيجل", "D) كانط"],
    correct: 0
    },
    {
        question: "65. من هو الفيلسوف الذي اقترح مفهوم 'الوجودية' كحركة فلسفية؟",
        answers: ["A) جان بول سارتر", "B) أرسطو", "C) هيجل", "D) أفلاطون"],
        correct: 0
    },
    {
        question: "66. ما هو مفهوم 'المسؤولية الفردية' في الفلسفة الوجودية؟",
        answers: ["A) الفرد مسؤول عن أفعاله وقراراته", "B) المجتمع مسؤول عن الفرد", "C) الدين مسؤول عن الأفعال", "D) الثقافة تحدد المسؤولية"],
        correct: 0
    },
    {
        question: "67. ما هو مفهوم 'الحقائق المطلقة' في الفلسفة؟",
        answers: ["A) الحقائق التي لا تتغير عبر الزمن", "B) الحقائق التي تعتمد على التجربة الشخصية", "C) الحقائق التي تأتي من الدين فقط", "D) الحقائق التي تتعلق بالعواطف"],
        correct: 0
    },
    {
        question: "68. من هو الفيلسوف الذي أطلق عليه لقب 'أب الفلسفة الحديثة'؟",
        answers: ["A) ديكارت", "B) أفلاطون", "C) هيجل", "D) نيتشه"],
        correct: 0
    },
    {
        question: "69. ما هو مفهوم 'الحرية السياسية'؟",
        answers: ["A) القدرة على التعبير عن الرأي والمشاركة في الحكم", "B) الحرية من القيود الاجتماعية", "C) الحرية في التفكير فقط", "D) عدم الانتماء لأي مجتمع"],
        correct: 0
    },
    {
        question: "70. ما هو دور الفلسفة في الحياة اليومية؟",
        answers: ["A) توجيه الأفراد نحو التفكير النقدي واتخاذ قرارات واعية", "B) تقديم معلومات فقط", "C) تعزيز العواطف", "D) دراسة الظواهر الطبيعية"],
        correct: 0
    },
    {
        question: "71. ما هو مفهوم 'الطبيعة الإنسانية' في الفلسفة؟",
        answers: ["A) السمات الفطرية والسلوكيات التي تميز البشر", "B) العادات الاجتماعية", "C) القيم الثقافية", "D) الدين"],
        correct: 0
    },
    {
        question: "72. من هو الفيلسوف الذي كتب 'نقد العقل الخالص'؟",
        answers: ["A) كانط", "B) هيوم", "C) أفلاطون", "D) ديكارت"],
        correct: 0
    },
    {
        question: "73. ما هو مفهوم 'الأخلاق العامة'؟",
        answers: ["A) القيم التي تحكم سلوك الأفراد في المجتمع", "B) القيم الفردية", "C) القيم الدينية فقط", "D) القيم التي تتعلق بالمال"],
        correct: 0
    },
    {
        question: "74. ما هو مفهوم 'الحقيقة المطلقة'؟",
        answers: ["A) الحقيقة التي لا يمكن إنكارها", "B) الحقيقة التي تتغير مع الزمن", "C) الحقيقة التي تعتمد على الآراء", "D) الحقيقة التي تأتي من التجربة"],
        correct: 0
    },
    {
        question: "75. من هو الفيلسوف الذي اعتبر 'الحرية' محور الفلسفة السياسية؟",
        answers: ["A) جون لوك", "B) هيجل", "C) نيتشه", "D) كانط"],
        correct: 0
    },
    {
        question: "76. ما هو مفهوم 'الواجب الأخلاقي'؟",
        answers: ["A) الالتزام بفعل الصواب", "B) القيام بالأفعال التي تعود بالنفع الشخصي", "C) اتباع القوانين فقط", "D) تنفيذ رغبات الآخرين"],
        correct: 0
    },
    {
        question: "77. ما هو الفرق بين 'الفلسفة' و'العلم'؟",
        answers: ["A) الفلسفة تهتم بالأسئلة الوجودية، بينما العلم يركز على الحقائق التجريبية", "B) الفلسفة تعتمد على التجربة، بينما العلم يعتمد على العقل", "C) الفلسفة تتعلق بالمشاعر، بينما العلم يتعلق بالمنطق", "D) الفلسفة تبحث في الظواهر الطبيعية، بينما العلم يبحث في الأفكار"],
        correct: 0
    },
    {
        question: "78. من هو الفيلسوف الذي كتب 'فلسفة اللغة'؟",
        answers: ["A) ويتغنشتاين", "B) ديكارت", "C) أفلاطون", "D) هيوم"],
        correct: 0
    },
    {
        question: "79. ما هو مفهوم 'الأخلاق البيئية'؟",
        answers: ["A) القيم الأخلاقية المتعلقة بالبيئة والحفاظ عليها", "B) القيم التي تأتي من الدين", "C) القيم الثقافية", "D) القيم المتعلقة بالأفراد فقط"],
        correct: 0
    },
    {
        question: "80. ما هو مفهوم 'العقلانية' في الفلسفة؟",
        answers: ["A) استخدام العقل كوسيلة لفهم العالم", "B) الاعتماد على المشاعر فقط", "C) قبول المعلومات دون تحليل", "D) رفض الآراء المخالفة"],
        correct: 0
    },
    {
        question: "81. ما هو دور الفلسفة في تطوير الفكر البشري؟",
        answers: ["A) تعزيز التفكير النقدي والإبداع", "B) توفير الحقائق فقط", "C) تعزيز التقليد", "D) تقديم المعلومات الجامدة"],
        correct: 0
    },
    {
        question: "82. من هو الفيلسوف الذي طوّر نظرية 'التفاعل الاجتماعي'؟",
        answers: ["A) جورج هربرت ميد", "B) هيجل", "C) نيتشه", "D) كانط"],
        correct: 0
    },
    {
        question: "83. ما هو مفهوم 'الحرية الفردية' في الفلسفة الليبرالية؟",
        answers: ["A) قدرة الأفراد على اتخاذ قراراتهم الخاصة دون قيود", "B) الحرية من القانون", "C) الحرية التي تتطلب الالتزام بالمجتمع", "D) الحرية الاقتصادية فقط"],
        correct: 0
    },
    {
        question: "84. ما هو الفرق بين 'السلطة' و'الشرعية' في الفلسفة السياسية؟",
        answers: ["A) السلطة هي القوة، بينما الشرعية هي القبول من المجتمع", "B) السلطة تتعلق بالقانون، بينما الشرعية تتعلق بالقيم", "C) السلطة تعتمد على القوة العسكرية، بينما الشرعية تعتمد على القانون", "D) السلطة تأتي من الدين، بينما الشرعية تأتي من السياسة"],
        correct: 0
    },
    {
        question: "85. من هو الفيلسوف الذي كتب 'الأخلاق'؟",
        answers: ["A) سبينوزا", "B) كانط", "C) أفلاطون", "D) نيتشه"],
        correct: 0
    },
    {
        question: "86. ما هو مفهوم 'الهوية' في الفلسفة؟",
        answers: ["A) مجموع الصفات والخصائص التي تحدد الفرد", "B) الانتماء الثقافي فقط", "C) القيم الدينية", "D) الآراء الشخصية"],
        correct: 0
    },
    {
        question: "87. ما هو مفهوم 'الاستقلالية' في الفلسفة الأخلاقية؟",
        answers: ["A) القدرة على اتخاذ قرارات أخلاقية بمفردك", "B) اتباع القوانين فقط", "C) قبول قرارات الآخرين", "D) تحقيق المصلحة الشخصية"],
        correct: 0
    },
    {
        question: "88. ما هو مفهوم 'الأخلاق الإنسانية'؟",
        answers: ["A) القيم الأخلاقية التي تنطبق على جميع البشر", "B) القيم التي تعتمد على الثقافة", "C) القيم التي تأتي من الدين", "D) القيم التي تتعلق بالمصلحة الشخصية"],
        correct: 0
    },
    {
        question: "89. من هو الفيلسوف الذي طوّر نظرية 'التغير الاجتماعي'؟",
        answers: ["A) كونت", "B) هيجل", "C) نيتشه", "D) ماركس"],
        correct: 0
    },
    {
        question: "90. ما هو مفهوم 'التوازن الاجتماعي' في الفلسفة السياسية؟",
        answers: ["A) تحقيق العدالة والمساواة بين الأفراد", "B) تعزيز الفروق بين الأفراد", "C) التركيز على الاقتصاد فقط", "D) عدم التدخل في شؤون المجتمع"],
        correct: 0
    },
    {
        question: "91. ما هو مفهوم 'المواطنة' في الفلسفة السياسية؟",
        answers: ["A) الانتماء إلى دولة معينة والتمتع بحقوقها", "B) عدم الانتماء لأي دولة", "C) التركيز على الهوية الثقافية فقط", "D) الحقوق الفردية فقط"],
        correct: 0
    },
    {
        question: "92. من هو الفيلسوف الذي اقترح مفهوم 'العدالة' كقاعدة أساسية في المجتمع؟",
        answers: ["A) أفلاطون", "B) أرسطو", "C) هيجل", "D) نيتشه"],
        correct: 0
    },
    {
        question: "93. ما هو مفهوم 'التفاعل الثقافي'؟",
        answers: ["A) التأثير المتبادل بين الثقافات المختلفة", "B) عدم التأثير بين الثقافات", "C) الثقافة الفردية فقط", "D) الثقافة الدينية فقط"],
        correct: 0
    },
    {
        question: "94. ما هو دور الفلسفة في تحقيق السلام الاجتماعي؟",
        answers: ["A) تعزيز الحوار والتفاهم بين الأفراد والمجتمعات", "B) تعزيز الصراع", "C) تقديم المعلومات فقط", "D) التأكيد على الاختلافات"],
        correct: 0
    },
    {
        question: "95. ما هو مفهوم 'العدالة الانتقالية'؟",
        answers: ["A) عملية تحقيق العدالة بعد النزاعات أو الانتهاكات", "B) العدالة الاقتصادية فقط", "C) عدم الاعتراف بالجرائم السابقة", "D) العدالة الثقافية"],
        correct: 0
    },
    {
        question: "96. من هو الفيلسوف الذي كتب 'نقد العقل العملي'؟",
        answers: ["A) كانط", "B) ديكارت", "C) نيتشه", "D) هيوم"],
        correct: 0
    },
    {
        question: "97. ما هو مفهوم 'التساؤل الفلسفي'؟",
        answers: ["A) البحث عن إجابات للأسئلة العميقة والمفاهيم الأساسية", "B) قبول المعلومات كما هي", "C) التركيز على الظواهر السطحية", "D) تجاهل الأسئلة الصعبة"],
        correct: 0
    },
    {
        question: "98. ما هو مفهوم 'الحياة الجيدة' في الفلسفة؟",
        answers: ["A) حياة تتضمن السعادة والرضا والنجاح", "B) حياة خالية من المشاكل", "C) حياة تركز على المال فقط", "D) حياة تتجنب التحديات"],
        correct: 0
    },
    {
        question: "99. ما هو الفرق بين 'الفردية' و'الجماعية' في الفلسفة؟",
        answers: ["A) الفردية تركز على الفرد، بينما الجماعية تركز على المجموعة", "B) الفردية تتعلق بالتقاليد، بينما الجماعية تتعلق بالحرية", "C) الفردية تعتمد على التجربة، بينما الجماعية تعتمد على الآراء", "D) الفردية تركز على المسؤولية، بينما الجماعية تركز على السلطة"],
        correct: 0
    },
    {
        question: "100. ما هو مفهوم 'الحرية الإيجابية' في الفلسفة؟",
        answers: ["A) القدرة على تحقيق الأهداف وتحقيق الذات", "B) عدم وجود قيود فقط", "C) الحرية الاقتصادية فقط", "D) الحرية من القوانين"],
        correct: 0
    }
];

const welcomeMessages = [
    "!مرحباً بك في اختبار الفلسفة",
    "!أهلاً وسهلاً، نأمل أن تستمتع بالاختبار",
    "!نتمنى لك حظاً موفقاً في الاختبار",
    "!ابدأ مغامرتك في الفلسفة الآن",
    "!مرحباً بك، هيا نبدأ تحدي فلسفة"
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

function startQuiz() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === password) {
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("name-screen").style.display = "block"; // عرض شاشة الاسم
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}

function showWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    const welcomeMessage = welcomeMessages[randomIndex];
    document.getElementById("welcome-message").innerText = welcomeMessage;
    document.getElementById("name-screen").style.display = "none"; // إخفاء شاشة الاسم
    document.getElementById("message-screen").style.display = "block"; // عرض شاشة الرسالة الترحيبية
}

function startQuizWithName() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    showWelcomeMessage();
}

function startQuizAfterWelcome() {
    document.getElementById("message-screen").style.display = "none"; // إخفاء شاشة الرسالة الترحيبية
    document.getElementById("quiz-screen").style.display = "block"; // إظهار شاشة الاختبار
    showQuestion(); // عرض السؤال الأول
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result-message").innerText = `لقد أجبت بشكل صحيح على ${score} من ${questions.length} أسئلة.`;
    document.getElementById("back-btn").addEventListener("click", () => {
        window.location.href = "https://sites.google.com/view/takadom"; // استبدل برابط الصفحة الخارجية
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("password").value = "";
}
