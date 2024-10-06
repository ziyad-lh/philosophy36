const password = 'ZIYAD.LH';
const questions = [
    {
        question: "من هو مؤسس الفلسفة اليونانية؟",
        answers: ["A) أفلاطون", "B) سقراط", "C) أرسطو"], 
        correct: 1
    },
    {
        question: "ما هو موضوع الفلسفة؟",
        answers: ["A) الأخلاق", "B) علم الفلك", "C) كل ما سبق"], 
        correct: 2
    },
    {
        question: "ما هي الفلسفة المثالية؟",
        answers: ["A) الاعتقاد بأن الواقع مادي", "B) الاعتقاد بأن الواقع ذهني", "C) الاعتقاد بأن الواقع غير موجود"], 
        correct: 1
    },
    {
        question: "من هو الفيلسوف الذي قال 'أنا أفكر، إذن أنا موجود'؟",
        answers: ["A) ديكارت", "B) هيجل", "C) كانط"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الوجود' عند الفلاسفة؟",
        answers: ["A) كل شيء موجود", "B) وجود الوجود", "C) وجود الشيء في حد ذاته"], 
        correct: 2
    },
    {
        question: "من كتب 'نقد العقل الخالص'؟",
        answers: ["A) هيجل", "B) كانط", "C) نيتشه"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الأخلاق النسبية'؟",
        answers: ["A) الأخلاق ثابتة", "B) الأخلاق تتغير باختلاف الثقافات", "C) الأخلاق لا وجود لها"], 
        correct: 1
    },
    {
        question: "ما هو العكس الفلسفي للكونية؟",
        answers: ["A) المحلية", "B) النسبية", "C) الثنائية"], 
        correct: 0
    },
    {
        question: "من هو مؤلف 'الجمهورية'؟",
        answers: ["A) أرسطو", "B) أفلاطون", "C) هيراقليطس"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الحرية' عند هيجل؟",
        answers: ["A) غياب القيود", "B) تحقيق الذات", "C) التمتع بالسلطة"], 
        correct: 1
    },
    {
        question: "ما هي فلسفة الشك؟",
        answers: ["A) رفض كل شيء", "B) البحث عن الحقيقة", "C) عدم القدرة على المعرفة"], 
        correct: 2
    },
    {
        question: "من هو الفيلسوف الذي اعتبر الفن تعبيرًا عن العواطف؟",
        answers: ["A) كانط", "B) هيجل", "C) شوبنهاور"], 
        correct: 2
    },
    {
        question: "ما هو رأي الفلاسفة في 'الجوهر'؟",
        answers: ["A) هو ما يجعل الشيء شيئًا", "B) هو شكل الشيء", "C) هو وجود الشيء"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي يقول بأن التاريخ يتقدم نحو الكمال؟",
        answers: ["A) ماركس", "B) هيجل", "C) نيتشه"], 
        correct: 1
    },
    {
        question: "ما هو مبدأ 'الفائدة' في الأخلاق؟",
        answers: ["A) العمل من أجل المنفعة العامة", "B) العمل من أجل مصلحة الفرد", "C) العمل من أجل المصلحة الروحية"], 
        correct: 0
    },
    {
        question: "من قال إن 'القوة هي الحق'؟",
        answers: ["A) ميكافيلي", "B) هيجل", "C) ماركس"], 
        correct: 0
    },
    {
        question: "ما هي فلسفة الوجودية؟",
        answers: ["A) التركيز على الفكرة", "B) التركيز على الفرد ووجوده", "C) التركيز على الجماعة"], 
        correct: 1
    },
    {
        question: "من هو الفيلسوف الذي ابتكر 'المنطق الرمزي'؟",
        answers: ["A) أرسطو", "B) لوغيك", "C) بيكون"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الزمن' عند الفلاسفة؟",
        answers: ["A) شيء ثابت", "B) مفهوم متغير", "C) شيء غير موجود"], 
        correct: 1
    },
    {
        question: "ما هو معنى 'التجريبية'؟",
        answers: ["A) المعرفة تأتي من العقل", "B) المعرفة تأتي من التجربة الحسية", "C) المعرفة تأتي من الدين"], 
        correct: 1
    },
    {
        question: "من هو الفيلسوف الذي أطلق عليه لقب 'أب الفلسفة الحديثة'؟",
        answers: ["A) ديكارت", "B) كانط", "C) نيتشه"], 
        correct: 0
    },
    {
        question: "ما هو معنى 'المثالية المطلقة'؟",
        answers: ["A) كل شيء حقيقي", "B) كل شيء غير موجود", "C) كل شيء يعتمد على الوعي"], 
        correct: 2
    },
    {
        question: "ما هي نظرية 'النسبية' في الفلسفة؟",
        answers: ["A) كل شيء نسبي", "B) كل شيء مطلق", "C) كل شيء متناقض"], 
        correct: 0
    },
    {
        question: "من كتب 'أخلاق نيقوماخوس'؟",
        answers: ["A) أفلاطون", "B) أرسطو", "C) سقراط"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الحقيقة المطلقة'؟",
        answers: ["A) حقيقة قائمة بغض النظر عن الفهم", "B) حقيقة تتغير مع الزمن", "C) حقيقة شخصية"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن الوجود يسبق الماهية؟",
        answers: ["A) سارتر", "B) هيدغر", "C) كانط"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'السببية'؟",
        answers: ["A) كل حدث له سبب", "B) كل شيء يحدث صدفة", "C) كل شيء مرتبط ببعضه"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'السلطة' في الفلسفة السياسية؟",
        answers: ["A) القدرة على التحكم", "B) القوة العسكرية", "C) قوة القانون"], 
        correct: 0
    },
    {
        question: "ما هو معنى 'التماثل' في الفلسفة؟",
        answers: ["A) التساوي بين الأشياء", "B) الاختلاف بين الأشياء", "C) الوحدة في التنوع"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الظاهرة' و'الجوهر' عند كانط؟",
        answers: ["A) الظاهرة هي الحقيقة والجوهر هو الشكل", "B) الظاهرة هي ما نراه والجوهر هو ما لا نراه", "C) الظاهرة والجوهر متساويان"], 
        correct: 1
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن 'اللغة تشكل تفكيرنا'؟",
        answers: ["A) ويتغنشتاين", "B) هيجل", "C) فوكو"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'العقل' عند الفلاسفة؟",
        answers: ["A) المصدر الوحيد للمعرفة", "B) شيء غير قابل للقياس", "C) جزء من الوجود"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي أسس نظرية 'الهيمنة'؟",
        answers: ["A) فوكو", "B) غرامشي", "C) ماركس"], 
        correct: 1
    },
    {
        question: "ما هو معنى 'الوجودية السلبية'؟",
        answers: ["A) الوجود ينفي نفسه", "B) الوجود لا يعني شيئًا", "C) الوجود هو كل شيء"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'العدالة' عند أفلاطون؟",
        answers: ["A) التوزيع العادل للموارد", "B) الصواب والخطأ", "C) النظام الاجتماعي المثالي"], 
        correct: 2
    },
    {
        question: "ما هو مفهوم 'الاغتراب' في الفلسفة؟",
        answers: ["A) الانفصال عن المجتمع", "B) الانفصال عن النفس", "C) الانفصال عن الواقع"], 
        correct: 1
    },
    {
        question: "من هو مؤلف 'الكوميديا الإلهية'؟",
        answers: ["A) دانتي", "B) شوبنهاور", "C) بيكون"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الفردية' في الفلسفة؟",
        answers: ["A) التركيز على الفرد ككيان مستقل", "B) التركيز على الجماعة", "C) التركيز على الأيديولوجية"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الهيغلية'؟",
        answers: ["A) التطور المستمر للأفكار", "B) الثبات في الفكر", "C) البحث عن الحقيقة المطلقة"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'اللغة' في الفلسفة؟",
        answers: ["A) وسيلة للتواصل", "B) وسيلة للتفكير", "C) وسيلة للحكم"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الحتمية' في الفلسفة؟",
        answers: ["A) كل شيء يحدث لسبب", "B) كل شيء يحدث بشكل عشوائي", "C) كل شيء تحت سيطرة الفرد"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن الأخلاق غير مرتبطة بالديانة؟",
        answers: ["A) نيتشه", "B) كانت", "C) أفلاطون"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التحليل المنطقي'؟",
        answers: ["A) استخدام المنطق لحل المشكلات", "B) دراسة اللغة", "C) دراسة الظواهر"], 
        correct: 0
    },
    {
        question: "ما هو معنى 'الإنسانية' في الفلسفة؟",
        answers: ["A) التركيز على الإنسان", "B) التركيز على المجتمع", "C) التركيز على البيئة"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الحدود' في الفلسفة؟",
        answers: ["A) حدود الفكر", "B) حدود الواقع", "C) حدود الفهم"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الواقع' في الفلسفة؟",
        answers: ["A) ما نراه", "B) ما لا نستطيع رؤيته", "C) ما نفكر فيه"], 
        correct: 1
    },
    {
        question: "من هو الفيلسوف الذي قال 'الوجود هو الوجود'؟",
        answers: ["A) هيدغر", "B) أرسطو", "C) ديكارت"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الزيف' في الفلسفة؟",
        answers: ["A) عكس الحقيقة", "B) الحقيقة المطلقة", "C) الوهم"], 
        correct: 0
    },
    {
        question: "من كتب 'الخطابة'؟",
        answers: ["A) أفلاطون", "B) أرسطو", "C) سقراط"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الحرية الفردية'؟",
        answers: ["A) حرية الانتماء", "B) حرية الاختيار", "C) حرية التفكير"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الفلسفة التجريبية'؟",
        answers: ["A) المعرفة تأتي من التجربة", "B) المعرفة تأتي من العقل", "C) المعرفة تأتي من الكتب"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي يقول إن 'الوجود شيء متغير'؟",
        answers: ["A) هيراقليطس", "B) أفلاطون", "C) أرسطو"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التحرر' في الفلسفة؟",
        answers: ["A) الابتعاد عن القيود", "B) العيش تحت السيطرة", "C) الانغماس في العادات"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التمييز' في الفلسفة؟",
        answers: ["A) الفرق بين الأشياء", "B) الغموض", "C) التشابه"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن المعرفة مرتبطة بالوقت؟",
        answers: ["A) نيتشه", "B) هيجل", "C) هيدغر"], 
        correct: 2
    },
    {
        question: "ما هو مفهوم 'السلطة السياسية' في الفلسفة؟",
        answers: ["A) قدرة الأفراد", "B) قدرة الحكومات", "C) قدرة المؤسسات"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'المادية' في الفلسفة؟",
        answers: ["A) كل شيء مادي", "B) كل شيء غير مادي", "C) كل شيء روحي"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن 'الإنسان هو مقياس كل شيء'؟",
        answers: ["A) بروتاغوراس", "B) سقراط", "C) أرسطو"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الوجود البشري' في الفلسفة؟",
        answers: ["A) تجربة الفرد", "B) تجربة المجتمع", "C) تجربة الطبيعة"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المنطق' في الفلسفة؟",
        answers: ["A) علم التفكير الصحيح", "B) علم التجريب", "C) علم الأخلاق"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي يقول إن 'الإنسان مشروع'؟",
        answers: ["A) سارتر", "B) كانط", "C) نيتشه"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الاختلاف' في الفلسفة؟",
        answers: ["A) الشيء الذي يجمع", "B) الشيء الذي يفرق", "C) الشيء الذي يعيد"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الزمن النسبي' في الفلسفة؟",
        answers: ["A) الزمن ثابت", "B) الزمن متغير", "C) الزمن وهم"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الحقائق المطلقة' في الفلسفة؟",
        answers: ["A) الحقائق التي لا تتغير", "B) الحقائق التي تتغير", "C) الحقائق النسبية"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي قال إن 'التجربة هي المقياس'؟",
        answers: ["A) بيكون", "B) أفلاطون", "C) أرسطو"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الإنسان الكامل' في الفلسفة؟",
        answers: ["A) إنسان يعيش في الوهم", "B) إنسان يتصف بالكمال", "C) إنسان متناقض"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الزيف' في الفلسفة؟",
        answers: ["A) الحقيقة", "B) الوهم", "C) الواقع"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'العدالة الاجتماعية' في الفلسفة؟",
        answers: ["A) التوزيع العادل للموارد", "B) السيطرة على الأفراد", "C) تقييد الحرية"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التجديد' في الفلسفة؟",
        answers: ["A) التغيير إلى الأفضل", "B) الحفاظ على القديم", "C) التغيير إلى الأسوأ"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن الفن يجب أن يعكس الحياة؟",
        answers: ["A) هيجل", "B) نيتشه", "C) شوبنهاور"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التنمية الذاتية' في الفلسفة؟",
        answers: ["A) النمو الشخصي", "B) النمو الاجتماعي", "C) النمو الاقتصادي"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الحياة الجيدة' في الفلسفة؟",
        answers: ["A) الحياة بدون مشاكل", "B) الحياة مع القيم", "C) الحياة مع المال"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'العدالة' في الفلسفة؟",
        answers: ["A) العدل بين الناس", "B) السيطرة على المجتمعات", "C) تقييد الحريات"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المجتمع المثالي' في الفلسفة؟",
        answers: ["A) مجتمع متجانس", "B) مجتمع متنوع", "C) مجتمع متعصب"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي قال 'كل شيء متغير'؟",
        answers: ["A) هيراقليطس", "B) أرسطو", "C) كانت"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التحليل النفسي' في الفلسفة؟",
        answers: ["A) دراسة العقل الباطن", "B) دراسة الوعي", "C) دراسة السلوك"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الحق' في الفلسفة؟",
        answers: ["A) ما هو قانوني", "B) ما هو أخلاقي", "C) ما هو منطقي"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن 'الوجود هو الوجود'؟",
        answers: ["A) هيدغر", "B) ديكارت", "C) أرسطو"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الأخلاق' في الفلسفة؟",
        answers: ["A) قواعد السلوك", "B) الحقائق المطلقة", "C) القوانين الاجتماعية"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الجهل' في الفلسفة؟",
        answers: ["A) عدم المعرفة", "B) المعرفة الملتوية", "C) المعرفة الوهمية"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الفلسفة الوضعية'؟",
        answers: ["A) المعرفة تأتي من التجربة", "B) المعرفة تأتي من العقل", "C) المعرفة تأتي من المعتقدات"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي قال 'الإنسان هو مقياس كل شيء'؟",
        answers: ["A) بروتاغوراس", "B) أفلاطون", "C) هيراقليطس"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المثالية' في الفلسفة؟",
        answers: ["A) الفهم الروحي", "B) الفهم المادي", "C) الفهم العقلاني"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الفوضى' في الفلسفة؟",
        answers: ["A) عدم النظام", "B) النظام التام", "C) التوازن"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الاستقلالية' في الفلسفة؟",
        answers: ["A) الحرية من القيود", "B) الانتماء للمجتمع", "C) عدم التفكير المستقل"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي قال 'كل شيء له سبب'؟",
        answers: ["A) أرسطو", "B) هيدغر", "C) نيتشه"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'العدالة الاجتماعية'؟",
        answers: ["A) المساواة بين الأفراد", "B) السيطرة على الموارد", "C) عدم الانحياز"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'المكان' في الفلسفة؟",
        answers: ["A) الفضاء المادي", "B) الوجود الروحي", "C) الفهم العقلي"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التحرر' في الفلسفة؟",
        answers: ["A) الحرية من القيود", "B) الابتعاد عن العقلانية", "C) الانغماس في العادات"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الإرادة الحرة' في الفلسفة؟",
        answers: ["A) الاختيار الحر", "B) التقدير المحدود", "C) الافتقار للاختيار"], 
        correct: 0
    },
    {
        question: "من هو الفيلسوف الذي اعتبر أن العقل هو المصدر الوحيد للمعرفة؟",
        answers: ["A) ديكارت", "B) هيجل", "C) نيتشه"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الفكر النقدي' في الفلسفة؟",
        answers: ["A) التفكير غير المشروط", "B) التفكير التحليلي", "C) التفكير العشوائي"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الوجود' في الفلسفة؟",
        answers: ["A) الفهم المادي", "B) الفهم الروحي", "C) الفهم العقلي"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الأنا' في الفلسفة؟",
        answers: ["A) الذات", "B) الآخر", "C) المجتمع"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الزمان' في الفلسفة؟",
        answers: ["A) مفهوم ثابت", "B) مفهوم متغير", "C) مفهوم وهمي"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'المعرفة' في الفلسفة؟",
        answers: ["A) المعلومات المتراكمة", "B) الفهم العميق", "C) المعلومات السطحية"], 
        correct: 1
    },
    {
        question: "ما هو مفهوم 'الحرية' في الفلسفة؟",
        answers: ["A) حرية التفكير", "B) القيود الاجتماعية", "C) القيود النفسية"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الوجود' في الفلسفة؟",
        answers: ["A) معنى الحياة", "B) عدم المعنى", "C) التجربة الذاتية"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'التغيير' في الفلسفة؟",
        answers: ["A) التحول", "B) الثبات", "C) الركود"], 
        correct: 0
    },
    {
        question: "ما هو مفهوم 'الإبداع' في الفلسفة؟",
        answers: ["A) خلق شيء جديد", "B) تكرار شيء قديم", "C) تقليد الآخرين"], 
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
