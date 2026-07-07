export const translations = {
  ru: {
    nav: {
      home: "Главная", services: "Услуги и Проекты", about: "О компании", faq: "Вопросы", contacts: "Контакты", backToHome: "На главную"
    },
    hero: {
      badge: "Гарантия результата", title1: "Точность, создающая", title2: "уверенность",
      subtitle: "Кадастровые и геодезические работы любой сложности.",
      btn1: "Наши услуги", btn2: "О компании",
      loc: "Ташкент, Узбекистан", time: "Пн - Пт · 9:00 – 18:00", exp: "Опыт работы более 10 лет"
    },
    companyInfo: {
      title1: "О", title2: "Компании",
      p1: "NEW WORLD CADASTRE — это экспертная компания в сфере геодезии и кадастра. Мы обеспечиваем застройщиков, бизнес и частных клиентов миллиметрово точными данными и безупречной юридической документацией.",
      p2: "Используя передовые лазерные сканеры, промышленные дроны и высокоточное GPS-оборудование, наши сертифицированные инженеры исключают любые погрешности. Мы берем на себя полное сопровождение проекта: от первых полевых замеров на пустом участке до успешной постановки готового объекта на государственный учет.",
      p3: "Наш главный принцип — прозрачность процессов, строжайшее соблюдение сроков и абсолютная юридическая защита каждого выданного нами документа. Мы не просто меряем землю, мы гарантируем ваше спокойствие.",
      readMore: "Читать историю полностью", collapse: "Свернуть"
    },
    team: {
      title1: "Команда", title2: "экспертов",
      desc: "Надежность компании измеряется профессионализмом ее сотрудников. Люди, которые гарантируют миллиметровую точность.",
      members: [
        { name: "Азиз Рахимов", role: "Главный инженер-геодезист", bio: "Опыт работы 12 лет. Руководит полевыми работами, специализируется на высокоточной топографической съемке сложных промышленных объектов." },
        { name: "Тимур Исмаилов", role: "Старший кадастровый инженер", bio: "Опыт работы 8 лет. Эксперт по оформлению технической документации и успешному решению юридических споров по границам участков." },
        { name: "Сардор Алиев", role: "Специалист по аэрофотосъемке", bio: "Опыт работы 6 лет. Профессиональный пилот промышленных дронов, создает высокоточные 3D-модели и ортофотопланы огромных территорий." }
      ]
    },
    stats: {
      title1: "Цифры и", title2: "Факты", desc: "Надежность, подтвержденная годами работы и сотнями успешно завершенных кадастровых проектов.",
      y10: { val: "10+", label: "Лет на рынке", text: "Глубокая экспертиза в геодезии и кадастровых работах любой сложности." },
      y850: { val: "850+", label: "Успешных проектов", text: "От частных земельных участков до крупных промышленных объектов." },
      y50: { val: "50+", label: "Клиентов в месяц", text: "Доверяют нам оформление своих документов на регулярной основе." },
      y100: { val: "100%", label: "Гарантия результата", text: "Мы доводим каждое дело до конца. Полное юридическое сопровождение вплоть до получения документов на руки." }
    },
    process: {
      title1: "Как мы", title2: "работаем", desc: "Прозрачный и понятный процесс от первого звонка до получения готовых документов.",
      steps: [
        { id: "01", title: "Заявка и аудит", desc: "Вы оставляете заявку, а наш инженер бесплатно изучает имеющиеся у вас документы, чтобы сразу озвучить точный план действий, сроки и стоимость." },
        { id: "02", title: "Точные замеры", desc: "Специалист выезжает на объект в удобное для вас время. Проводим геодезическую съемку участка или здания с помощью сертифицированного высокоточного оборудования." },
        { id: "03", title: "Подготовка документов", desc: "Наши кадастровые инженеры обрабатывают данные и формируют межевой или технический план. Мы многократно проверяем расчеты, чтобы исключить любые ошибки." },
        { id: "04", title: "Готовый результат", desc: "Вы получаете на руки документы, имеющие полную юридическую силу и гарантированно готовые для постановки на государственный кадастровый учет." }
      ]
    },
    portfolio: {
      title1: "Завершенные", title2: "Проекты", desc: "Практический опыт и реальные кейсы. Мы гордимся объектами, в которых принимали участие.",
      projects: [
        { title: "Кадастровое сопровождение ЖК", desc: "Полный цикл работ: от первичной топографической съемки участка до успешной постановки всех корпусов на учет.", tag: "Жилая недвижимость" },
        { title: "Исполнительная съемка здания", desc: "Точный контроль геометрии монолитного каркаса и геодезическое сопровождение на всех этапах строительства.", tag: "Коммерческая застройка" }
      ]
    },
    gallery: {
      title1: "Наш процесс", title2: "в деле", desc: "Посмотрите короткий ролик о том, как мы работаем. Только современное оборудование и профессиональный подход."
    },
    faq: {
      title1: "Частые", title2: "вопросы", desc: "Мы ценим ваше время, поэтому собрали ответы на самые популярные вопросы о нашей работе, гарантиях и сроках.",
      showAll: "Показать все вопросы", hideAll: "Скрыть вопросы",
      items: [
        { q: "Как быстро я получаю готовые документы?", a: "Сроки зависят от сложности объекта, но в среднем подготовка плана занимает 3-5 рабочих дней. Мы озвучиваем точные сроки на этапе аудита и фиксируем их в договоре." },
        { q: "Что делать, если государственный реестр приостановит учет?", a: "Мы несем полную юридическую ответственность. Если реестр выносит приостановку, наши инженеры бесплатно вносят корректировки вплоть до успешной постановки на учет." },
        { q: "Может ли измениться стоимость работ в процессе?", a: "Нет. Смета рассчитывается заранее, фиксируется в договоре и не меняется. У нас нет скрытых платежей." },
        { q: "Обязательно ли мое личное присутствие при замерах?", a: "Желательно, но не обязательно. Главное — обеспечить доступ на территорию. Согласования проводим онлайн, документы доставим курьером." },
        { q: "Какое оборудование вы используете?", a: "Высокоточные роботизированные тахеометры, GNSS-приемники и промышленные дроны. Всё оборудование проходит госповерку." },
        { q: "Работаете ли вы с застройщиками?", a: "Да, B2B-проекты — значительная часть нашей работы. От геодезической разбивки до исполнительной съемки." },
        { q: "Можно ли исправить кадастровую ошибку другого инженера?", a: "Да. Проводим контрольную съемку и готовим юридическое обоснование для исправления реестровой ошибки." },
        { q: "Зачем нужна съемка перед покупкой участка?", a: "Она выявляет скрытые проблемы: наложение границ соседей или охранные зоны. Это защищает инвестиции." },
        { q: "Как происходит оплата?", a: "Работаем официально. Оплата делится на аванс и окончательный расчет после получения вами готовых документов." },
        { q: "С чего начать?", a: "Оставьте заявку. Инженер бесплатно проконсультирует вас и составит пошаговый план действий." }
      ]
    },
    certificates: {
      title1: "Лицензии и", title2: "сертификаты", desc: "Юридическая безупречность каждого замера. Мы работаем исключительно в правовом поле.",
      items: [
        { title: "Лицензия", desc: "Официальное разрешение на осуществление геодезических и картографических работ." },
        { title: "Допуск СРО", desc: "Свидетельство о допуске к работам по инженерным изысканиям." },
        { title: "Аттестат инженера", desc: "Действующий квалификационный аттестат главного кадастрового инженера." }
      ]
    },
    contacts: {
      socialTitle: "Мы в социальных сетях", way: "Как добраться", map: "Открыть в Google Картах",
      title: "Контакты", pages: "Страницы",
      desc: "Ведущая кадастровая компания — где исключительная точность встречается с безупречным сервисом.",
      addr: "Ферганская область, <br/> Алтыарыкский район", time: "Пн-Пт · 9:00 – 18:00",
      join: "Присоединяйтесь к нам для безупречного решения любых кадастровых задач в Узбекистане.",
      rights: "© 2024 New World Cadastre. Все права защищены.", expert: "Ведущие кадастровые инженеры Узбекистана"
    }
  },
  uz: {
    nav: {
      home: "Bosh sahifa", services: "Xizmatlar va Loyihalar", about: "Kompaniya haqida", faq: "Savollar", contacts: "Kontaktlar", backToHome: "Asosiy sahifaga"
    },
    hero: {
      badge: "Natija kafolati", title1: "Ishonch bag'ishlovchi", title2: "aniqlik",
      subtitle: "Har qanday murakkablikdagi kadastr va geodeziya ishlari.",
      btn1: "Bizning xizmatlar", btn2: "Kompaniya haqida",
      loc: "Toshkent, O'zbekiston", time: "Dush - Jum · 9:00 – 18:00", exp: "10 yildan ortiq ish tajribasi"
    },
    companyInfo: {
      title1: "Kompaniya", title2: "Haqida",
      p1: "NEW WORLD CADASTRE — geodeziya va kadastr sohasidagi ekspert kompaniya. Biz quruvchilar, biznes va xususiy mijozlarni millimetrgacha aniq ma'lumotlar va benuqson yuridik hujjatlar bilan ta'minlaymiz.",
      p2: "Ilg'or lazer skanerlari, sanoat dronlari va yuqori aniqlikdagi GPS-uskunalaridan foydalangan holda, bizning sertifikatlangan muhandislarimiz har qanday xatoliklarni bartaraf etadilar. Biz loyihani to'liq kuzatib borishni o'z zimmamizga olamiz: bo'sh yer maydonidagi dastlabki dala o'lchovlaridan tortib, tayyor obyektni davlat ro'yxatidan o'tkazishgacha.",
      p3: "Bizning asosiy tamoyilimiz — jarayonlarning shaffofligi, muddatlarga qat'iy rioya qilish va biz tomonimizdan berilgan har bir hujjatning mutlaq yuridik himoyasi. Biz shunchaki yerni o'lchamaymiz, biz sizning xotirjamligingizni kafolatlaymiz.",
      readMore: "Tarixni to'liq o'qish", collapse: "Yopish"
    },
    team: {
      title1: "Ekspertlar", title2: "jamoasi",
      desc: "Kompaniyaning ishonchliligi uning xodimlarining professionalligi bilan o'lchanadi. Millimetrgacha aniqlikni kafolatlaydigan insonlar.",
      members: [
        { name: "Aziz Rahimov", role: "Bosh muhandis-geodezist", bio: "Ish tajribasi 12 yil. Dala ishlariga rahbarlik qiladi, murakkab sanoat obyektlarini yuqori aniqlikdagi topografik tasvirga olishga ixtisoslashgan." },
        { name: "Temur Ismoilov", role: "Katta kadastr muhandisi", bio: "Ish tajribasi 8 yil. Texnik hujjatlarni rasmiylashtirish va yer uchastkalari chegaralari bo'yicha yuridik nizolarni muvaffaqiyatli hal qilish bo'yicha ekspert." },
        { name: "Sardor Aliyev", role: "Aerofotosyomka bo'yicha mutaxassis", bio: "Ish tajribasi 6 yil. Sanoat dronlarining professional uchuvchisi, ulkan hududlarning yuqori aniqlikdagi 3D-modellari va ortofotoplanlarini yaratadi." }
      ]
    },
    stats: {
      title1: "Raqamlar va", title2: "Dalillar", desc: "Yillar davomida olib borilgan ishlar va yuzlab muvaffaqiyatli yakunlangan kadastr loyihalari bilan tasdiqlangan ishonchlilik.",
      y10: { val: "10+", label: "Bozordagi tajriba", text: "Har qanday murakkablikdagi geodeziya va kadastr ishlarida chuqur ekspertiza." },
      y850: { val: "850+", label: "Muvaffaqiyatli loyihalar", text: "Xususiy yer uchastkalaridan tortib yirik sanoat obyektlarigacha." },
      y50: { val: "50+", label: "Oydagi mijozlar", text: "Hujjatlarni rasmiylashtirishni doimiy ravishda bizga ishonib topshiradilar." },
      y100: { val: "100%", label: "Natija kafolati", text: "Biz har bir ishni oxiriga yetkazamiz. Hujjatlarni qo'lga olguncha to'liq yuridik kuzatuv." }
    },
    process: {
      title1: "Biz qanday", title2: "ishlaymiz", desc: "Birinchi qo'ng'iroqdan tortib tayyor hujjatlarni olishgacha bo'lgan shaffof va tushunarli jarayon.",
      steps: [
        { id: "01", title: "Ariza va audit", desc: "Siz ariza qoldirasiz, muhandisimiz aniq harakatlar rejasini, muddatlarni va narxni darhol aytish uchun mavjud hujjatlaringizni bepul o'rganib chiqadi." },
        { id: "02", title: "Aniq o'lchovlar", desc: "Mutaxassis siz uchun qulay vaqtda obyektga boradi. Biz sertifikatlangan yuqori aniqlikdagi uskunalar yordamida obyektni geodezik syomkadan o'tkazamiz." },
        { id: "03", title: "Hujjatlarni tayyorlash", desc: "Bizning kadastr muhandislarimiz ma'lumotlarni qayta ishlaydi va texnik rejani tuzadilar. Xatolarni bartaraf etish uchun hisob-kitoblarni qayta tekshiramiz." },
        { id: "04", title: "Tayyor natija", desc: "Siz to'liq yuridik kuchga ega va davlat kadastr ro'yxatiga kiritish uchun kafolatlangan tayyor hujjatlarni olasiz." }
      ]
    },
    portfolio: {
      title1: "Tugallangan", title2: "Loyihalar", desc: "Amaliy tajriba va haqiqiy keyslar. Biz ishtirok etgan obyektlarimiz bilan faxrlanamiz.",
      projects: [
        { title: "TJM kadastr kuzatuvi", desc: "To'liq ish sikli: dastlabki topografik syomkadan tortib barcha binolarni davlat ro'yxatidan muvaffaqiyatli o'tkazishgacha.", tag: "Turar-joy mulki" },
        { title: "Binoning ijro syomkasi", desc: "Monolit karkas geometriyasini aniq nazorat qilish va qurilishning barcha bosqichlarida geodezik kuzatuv.", tag: "Tijorat qurilishi" }
      ]
    },
    gallery: {
      title1: "Bizning jarayon", title2: "amalda", desc: "Qanday ishlashimiz haqida qisqacha rolikni tomosha qiling. Faqat zamonaviy uskunalar va professional yondashuv."
    },
    faq: {
      title1: "Ko'p so'raladigan", title2: "savollar", desc: "Biz sizning vaqtingizni qadrlaymiz, shuning uchun ishimiz, kafolatlarimiz va muddatlarimiz haqidagi eng mashhur savollarga javoblarni to'pladik.",
      showAll: "Barcha savollarni ko'rsatish", hideAll: "Savollarni yashirish",
      items: [
        { q: "Tayyor hujjatlarni qanchalik tez olaman?", a: "Muddatlar obyektning murakkabligiga bog'liq, o'rtacha reja tayyorlash 3-5 ish kunini tashkil qiladi. Biz aniq muddatlarni shartnomada belgilaymiz." },
        { q: "Agar davlat reestri hisobni to'xtatib qo'ysa nima qilish kerak?", a: "Biz to'liq yuridik javobgarlikni o'z zimmamizga olamiz. Agar ro'yxatdan o'tish to'xtatilsa, muhandislarimiz barcha tuzatishlarni bepul kiritadilar." },
        { q: "Jarayon davomida ish narxi o'zgarishi mumkinmi?", a: "Yo'q. Smeta oldindan hisoblanadi, shartnomada belgilanadi va o'zgarmaydi. Bizda yashirin to'lovlar yo'q." },
        { q: "O'lchov paytida mening shaxsan ishtirok etishim shartmi?", a: "Ma'qul, lekin shart emas. Asosiysi hududga kirishni ta'minlash. Kelishuvlar onlayn, hujjatlar kuryer orqali." },
        { q: "Suratga olish uchun qanday uskunadan foydalanasiz?", a: "Yuqori aniqlikdagi robotlashtirilgan taxemetrlar, GNSS qabul qiluvchilar va dronlar. Barcha uskunalar davlat tekshiruvidan o'tgan." },
        { q: "Quruvchilar bilan ishlaysizmi?", a: "Ha, B2B loyihalari ishimizning muhim qismidir. Geodezik belgilashdan tortib bino ijro syomkasigacha." },
        { q: "Boshqa muhandisning xatosini tuzatish mumkinmi?", a: "Ha. Nazorat syomkasini o'tkazamiz va xatoni tuzatish uchun yuridik asos tayyorlaymiz." },
        { q: "Nima uchun sotib olishdan oldin syomka kerak?", a: "Bu yashirin muammolarni aniqlaydi: chegaralar ustma-ust tushishi yoki muhofaza zonalari. Bu investitsiyalarni himoya qiladi." },
        { q: "To'lov qanday amalga oshiriladi?", a: "Biz rasmiy ishlaymiz. To'lov avansga va hujjatlarni olganingizdan keyingi yakuniy hisob-kitobga bo'linadi." },
        { q: "Nimadan boshlashim kerak?", a: "Ariza qoldiring. Muhandisimiz bepul maslahat beradi va harakatlar rejasini tuzadi." }
      ]
    },
    certificates: {
      title1: "Litsenziyalar va", title2: "sertifikatlar", desc: "Har bir o'lchovning yuridik benuqsonligi. Biz qonun doirasida ishlaymiz.",
      items: [
        { title: "Litsenziya", desc: "Geodeziya va kartografiya ishlarini amalga oshirish uchun rasmiy ruxsatnoma." },
        { title: "SRO ruxsatnomasi", desc: "Muhandislik qidiruv ishlari bo'yicha ruxsatnoma guvohnomasi." },
        { title: "Muhandis attestati", desc: "Bosh kadastr muhandisining amaldagi malaka attestati." }
      ]
    },
    contacts: {
      socialTitle: "Biz ijtimoiy tarmoqlarda", way: "Qanday borish mumkin", map: "Google Xaritada ochish",
      title: "Kontaktlar", pages: "Sahifalar",
      desc: "Yetakchi kadastr kompaniyasi — mutlaq aniqlik va benuqson xizmat uyg'unligi.",
      addr: "Farg'ona viloyati, <br/> Oltiariq tumani", time: "Dush-Jum · 9:00 – 18:00",
      join: "O'zbekistonda har qanday kadastr masalalarini benuqson hal qilish uchun bizga qo'shiling.",
      rights: "© 2024 New World Cadastre. Barcha huquqlar himoyalangan.", expert: "O'zbekistonning yetakchi kadastr muhandislari"
    }
  }
};

export type Language = 'ru' | 'uz';