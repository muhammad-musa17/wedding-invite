/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://qhynedugambltvjygnte.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_QWuNqytiamgh0flV3UloWg_SGDhgyep";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage =
    localStorage.getItem("weddingLanguage") || "en";


const translations = {

    en: {

        introInvitationLabel:
            "A WEDDING INVITATION",

        bismillahTranslation:
            "In the name of Allah, the Most Gracious, the Most Merciful",

        introGrandparents:
            `Late Ch. Riaz Saleem
             <span class="host-ampersand">&amp;</span>
             Mrs. Tanveer Riaz`,

        introTogether:
            "together with",

        introParents:
            "Mr. & Mrs. Ch. Nabeel Riaz",

        introFormalCopy:
            `request the pleasure of your company
             <span>at the wedding celebration of their beloved son</span>`,

        with:
            "WITH",

        daughterOf:
            "Daughter of",

        brideParents:
            "Mr. & Mrs. Muhammad Asif",

        openInvitation:
    "Open Invitation",

/* Main invitation section */

mainBlessings:
    "WITH THE BLESSINGS OF ALLAH",

verseTranslation:
    `“And among His signs is that He created for you
     spouses from among yourselves so that you may
     find comfort in them. And He has placed between
     you affection and mercy.”`,

verseReference:
    "— Qur'an · Ar-Rum 30:21",

twoFamilies:
    `TWO FAMILIES
     <span>•</span>
     ONE CELEBRATION`,

storyContinues:
    "Our story continues...",

    /* Personalised guest invitation */

guestEyebrow:
    "A CELEBRATION PREPARED ESPECIALLY FOR YOU",

guestDear:
    "Dear",

guestMessage:
    `It would bring us great joy to have you
     join our families in celebrating these
     special moments with us.`,

guestEventsLabel:
    "YOUR INVITATION INCLUDES",

discoverCelebrations:
    "Discover Your Celebrations",

invitationLabel:
    "INVITATION",

baratLimit:
    "2 PERSONS ONLY",

eventNames: {
    nikkah: "Nikkah",
    mehndi: "Mehndi",
    barat: "Barat",
    walima: "Walima"
},

/* Nikkah */

nikkahKicker:
    "WITH THE BLESSINGS OF ALLAH",

nikkahSmallTitle:
    "THE",

nikkahTitle:
    "Nikkah",

nikkahSubtitle:
    "A sacred beginning",

nikkahInvitation:
    `With gratitude to Allah,
     we invite you to witness and celebrate
     the Nikkah of`,

nikkahDay:
    "THURSDAY",

nikkahDate:
    "07 JANUARY 2027",

nikkahTime:
    "09:00 AM",

nikkahVenueLabel:
    "NIKKAH VENUE",

viewLocation:
    "View Location",

addCalendar:
    "Add to Calendar",

nikkahDua:
    "May Allah bless this union with love, mercy and barakah.",

/* Mehndi */

mehndiKicker:
    "AN EVENING OF COLOUR, JOY & CELEBRATION",

mehndiCelebrate:
    "CELEBRATE THE",

mehndiTitle:
    "Mehndi",

mehndiWithUs:
    "with us",

mehndiCopy:
    `Join us for an evening filled with
     colour, laughter and cherished moments
     as our families celebrate together.`,

mehndiDay:
    "THURSDAY",

mehndiDate:
    "07 JANUARY 2027",

mehndiJourney:
    "THE EVENING JOURNEY",

mehndiEveningBegins:
    "THE EVENING BEGINS",

mehndiEveningNote:
    "Welcome & celebration",

mehndiRasam:
    "MEHNDI RASAM",

mehndiRasamNote:
    "Colours, traditions & blessings",

mehndiDinner:
    "DINNER",

mehndiDinnerNote:
    "Dinner is served",

mehndiQawwali:
    "QAWWALI",

mehndiQawwaliNote:
    "An evening of music & celebration",

mehndiVenueLabel:
    "CELEBRATING AT",

mehndiViewLocation:
    "View Location",

mehndiAddCalendar:
    "Add to Calendar",

mehndiClosing:
    "Come with your smiles, leave with beautiful memories.",

    /* Barat */

baratKicker:
    "TOGETHER WITH OUR FAMILIES",

baratSmallTitle:
    "THE",

baratTitle:
    "Barat",

baratSubtitle:
    "a night to remember",

baratCopy:
    `With joyful hearts, we invite you to
     celebrate an evening of love, family
     and unforgettable moments with us.`,

baratDay:
    "FRIDAY",

baratDate:
    "08 JANUARY 2027",

baratInvitation:
    "BARAT INVITATION",

baratPersons:
    "2 PERSONS ONLY",

baratProgramme:
    "THE BARAT PROGRAMME",

baratSehra:
    "SEHRA BANDI",

baratSehraNote:
    "The celebrations begin",

baratDeparture:
    "DEPARTURE",

baratDepartureNote:
    "The Barat departs",

baratRukhsati:
    "RUKHSATI",

baratRukhsatiNote:
    "With prayers & blessings",

baratVenueLabel:
    "THE CELEBRATION TAKES PLACE AT",

baratViewLocation:
    "View Location",

baratAddCalendar:
    "Add to Calendar",

baratClosing:
    "Your presence will make our celebration even more special.",

    /* Walima */

walimaEyebrow:
    "THE FINAL CELEBRATION",

walimaReception:
    "WALIMA RECEPTION",

walimaTitle:
    "Walima",

walimaSubtitle:
    "an evening together",

walimaCopy:
    `With gratitude and happiness,
     we invite you to join us as we
     celebrate the beginning of our
     new journey together.`,

walimaWhen:
    "WHEN",

walimaDay:
    "SATURDAY",

walimaDate:
    "09 JANUARY 2027",

walimaSchedule:
    "EVENING SCHEDULE",

walimaReceptionLabel:
    "RECEPTION",

walimaDinnerLabel:
    "DINNER",

walimaVenueLabel:
    "RECEPTION AT",

walimaViewLocation:
    "View Location",

walimaAddCalendar:
    "Add to Calendar",

walimaClosing:
    "We look forward to sharing this beautiful evening with you.",

    /* Family / Closing */

familyEyebrow:
    "WITH LOVE, FROM OUR FAMILIES",

familyNote:
    "A NOTE FROM THOSE CLOSEST TO US",

familyTitle:
    "Our Families",

familySubtitle:
    "Sharing our happiness with you",

familyRsvp:
    "RSVP",

familyLookingForward:
    "Looking Forward",

familyGroup:
    "Sisters, Cousins & Bhabhis",

familyContact:
    "CONTACT",

familyClosing:
    "With love, we look forward to celebrating with you.",
},


    ur: {

        introInvitationLabel:
            "دعوتِ شادی",

        bismillahTranslation:
            "اللہ کے نام سے شروع جو نہایت مہربان، بے حد رحم فرمانے والا ہے",

        introGrandparents:
            `مرحوم چوہدری ریاض سلیم
             <span class="host-ampersand">&amp;</span>
             محترمہ تنویر ریاض`,

        introTogether:
            "بمعہ",

        introParents:
            "جناب و بیگم چوہدری نبیل ریاض",

        introFormalCopy:
            `آپ کی شرکت ہمارے لیے باعثِ مسرت ہوگی
             <span>اپنے پیارے بیٹے کی شادی کی خوشیوں میں</span>`,

        with:
            "کے ساتھ",

        daughterOf:
            "دخترِ",

        brideParents:
            "جناب و بیگم محمد آصف",

        openInvitation:
    "دعوت نامہ کھولیں",

/* Main invitation section */

mainBlessings:
    "اللہ تعالیٰ کی رحمتوں اور برکتوں کے سائے میں",

verseTranslation:
    `“اور اُس کی نشانیوں میں سے یہ ہے کہ اُس نے تمہارے لیے
     تم ہی میں سے جوڑے بنائے تاکہ تم اُن سے سکون پاؤ،
     اور اُس نے تمہارے درمیان محبت اور رحمت پیدا فرمائی۔”`,

verseReference:
    "— القرآن · سورۃ الروم 30:21",

twoFamilies:
    `دو خاندان
     <span>•</span>
     ایک خوشی`,

storyContinues:
    "ہماری نئی زندگی کا آغاز...",
    
    /* Personalised guest invitation */

guestEyebrow:
    "یہ خوشی خاص طور پر آپ کے ساتھ بانٹنے کے لیے ہے",

guestDear:
    "محترم",

guestMessage:
    `ہمیں بے حد خوشی ہوگی اگر آپ ہمارے ساتھ
     ان خوبصورت اور یادگار لمحات کی خوشیوں
     میں شریک ہوں۔`,

guestEventsLabel:
    "آپ کو ان تقریبات میں شرکت کی دعوت ہے",

discoverCelebrations:
    "تقریبات کی تفصیل دیکھیں",

invitationLabel:
    "دعوت نامہ",

baratLimit:
    "صرف 2 افراد",

eventNames: {
    nikkah: "نکاح",
    mehndi: "مہندی",
    barat: "بارات",
    walima: "ولیمہ"
},

/* Nikkah */

nikkahKicker:
    "اللہ تعالیٰ کی رحمتوں اور برکتوں کے سائے میں",

nikkahSmallTitle:
    "تقریبِ",

nikkahTitle:
    "نکاح",

nikkahSubtitle:
    "ایک مقدس رشتے کا آغاز",

nikkahInvitation:
    `اللہ تعالیٰ کے فضل و کرم سے،
     آپ کو ہماری تقریبِ نکاح میں شرکت
     کی پُرخلوص دعوت ہے`,

nikkahDay:
    "جمعرات",

nikkahDate:
    "07 جنوری 2027",

nikkahTime:
    "صبح 09:00 بجے",

nikkahVenueLabel:
    "مقامِ نکاح",

viewLocation:
    "مقام دیکھیں",

addCalendar:
    "کیلنڈر میں شامل کریں",

nikkahDua:
    "اللہ تعالیٰ اس مقدس رشتے کو محبت، رحمت اور برکتوں سے نوازے۔",

/* Mehndi */

mehndiKicker:
    "رنگوں، خوشیوں اور محبتوں سے سجی ایک حسین شام",

mehndiCelebrate:
    "آئیے منائیں",

mehndiTitle:
    "مہندی",

mehndiWithUs:
    "کی خوشیاں ہمارے ساتھ",

mehndiCopy:
    `آئیے ہمارے ساتھ رنگوں، مسکراہٹوں
     اور خوشیوں سے بھری اس خوبصورت شام
     کو یادگار بنائیں۔`,

mehndiDay:
    "جمعرات",

mehndiDate:
    "07 جنوری 2027",

mehndiJourney:
    "شام کی تقریبات",

mehndiEveningBegins:
    "تقریب کا آغاز",

mehndiEveningNote:
    "استقبال اور خوشیوں کا آغاز",

mehndiRasam:
    "رسمِ مہندی",

mehndiRasamNote:
    "رنگ، روایات اور دعائیں",

mehndiDinner:
    "عشائیہ",

mehndiDinnerNote:
    "کھانا پیش کیا جائے گا",

mehndiQawwali:
    "قوالی",

mehndiQawwaliNote:
    "موسیقی اور خوشیوں بھری محفل",

mehndiVenueLabel:
    "مقامِ تقریب",

mehndiViewLocation:
    "مقام دیکھیں",

mehndiAddCalendar:
    "کیلنڈر میں شامل کریں",

mehndiClosing:
    "مسکراہٹوں کے ساتھ آئیے، خوبصورت یادیں ساتھ لے جائیے۔",

    /* Barat */

baratKicker:
    "اپنے خاندانوں کے ہمراہ",

baratSmallTitle:
    "تقریبِ",

baratTitle:
    "بارات",

baratSubtitle:
    "ایک یادگار شام",

baratCopy:
    `خوشیوں بھرے دل کے ساتھ،
     آپ کو محبت، اپنائیت اور یادگار لمحات سے
     سجی اس خوبصورت شام میں شرکت کی دعوت ہے۔`,

baratDay:
    "جمعہ",

baratDate:
    "08 جنوری 2027",

baratInvitation:
    "دعوتِ بارات",

baratPersons:
    "صرف 2 افراد",

baratProgramme:
    "تقریبِ بارات کا پروگرام",

baratSehra:
    "سہرا بندی",

baratSehraNote:
    "خوشیوں کا آغاز",

baratDeparture:
    "روانگیِ بارات",

baratDepartureNote:
    "بارات کی روانگی",

baratRukhsati:
    "رخصتی",

baratRukhsatiNote:
    "دعاؤں اور نیک تمناؤں کے ساتھ",

baratVenueLabel:
    "مقامِ تقریب",

baratViewLocation:
    "مقام دیکھیں",

baratAddCalendar:
    "کیلنڈر میں شامل کریں",

baratClosing:
    "آپ کی شرکت ہماری خوشیوں کو مزید یادگار بنا دے گی۔",

    /* Walima */

walimaEyebrow:
    "خوشیوں کی آخری حسین محفل",

walimaReception:
    "دعوتِ ولیمہ",

walimaTitle:
    "ولیمہ",

walimaSubtitle:
    "ایک خوبصورت شام، اپنوں کے نام",

walimaCopy:
    `اللہ تعالیٰ کا شکر ادا کرتے ہوئے،
     ہم آپ کو اپنی نئی زندگی کے آغاز کی
     خوشیاں ہمارے ساتھ منانے کے لیے
     پُرخلوص دعوت دیتے ہیں۔`,

walimaWhen:
    "تاریخ",

walimaDay:
    "ہفتہ",

walimaDate:
    "09 جنوری 2027",

walimaSchedule:
    "شام کا پروگرام",

walimaReceptionLabel:
    "استقبال",

walimaDinnerLabel:
    "عشائیہ",

walimaVenueLabel:
    "مقامِ ولیمہ",

walimaViewLocation:
    "مقام دیکھیں",

walimaAddCalendar:
    "کیلنڈر میں شامل کریں",

walimaClosing:
    "ہمیں خوشی ہوگی کہ اس خوبصورت شام کی خوشیاں آپ کے ساتھ بانٹیں۔",

    /* Family / Closing */

familyEyebrow:
    "ہمارے خاندانوں کی جانب سے، محبت کے ساتھ",

familyNote:
    "ہمارے اپنوں کی جانب سے",

familyTitle:
    "ہمارے خاندان",

familySubtitle:
    "اپنی خوشیاں آپ کے ساتھ بانٹتے ہوئے",

familyRsvp:
    "رابطہ برائے شرکت",

familyLookingForward:
    "آپ کے منتظر",

familyGroup:
    "بہنیں، کزنز اور بھابھیاں",

familyContact:
    "رابطہ",

familyClosing:
    "ہم محبت اور خوشی کے ساتھ آپ کے ساتھ اس خوبصورت جشن کے منتظر ہیں۔"

    }
};


function applyLanguage(language) {

    const text =
        translations[language];

    if (!text) {
        return;
    }


    currentLanguage = language;

    localStorage.setItem(
        "weddingLanguage",
        language
    );


    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ur"
            ? "rtl"
            : "ltr";


    /* Intro */

    document.querySelector(
        ".invitation-label"
    ).textContent =
        text.introInvitationLabel;


    document.querySelector(
        ".bismillah-translation"
    ).textContent =
        text.bismillahTranslation;


    document.querySelector(
        ".intro-grandparents"
    ).innerHTML =
        text.introGrandparents;


    document.querySelector(
        ".intro-together"
    ).textContent =
        text.introTogether;


    document.querySelector(
        ".intro-parents"
    ).textContent =
        text.introParents;


    document.querySelector(
        ".intro-formal-copy"
    ).innerHTML =
        text.introFormalCopy;


    document.querySelector(
        ".intro-with"
    ).textContent =
        text.with;


    document.querySelector(
        ".daughter-of"
    ).textContent =
        text.daughterOf;


    document.querySelector(
        ".bride-parents"
    ).textContent =
        text.brideParents;


    document.querySelector(
        "#openInvitation > span:first-child"
    ).textContent =
        text.openInvitation;

        /* =====================================================
   MAIN INVITATION SECTION
===================================================== */

document.querySelector(
    ".invitation .section-eyebrow"
).textContent =
    text.mainBlessings;


document.querySelector(
    ".invitation .verse-translation"
).textContent =
    text.verseTranslation;


document.querySelector(
    ".invitation .verse-reference"
).textContent =
    text.verseReference;


document.querySelector(
    ".invitation .coming-next > p"
).innerHTML =
    text.twoFamilies;


document.querySelector(
    ".invitation .coming-next h2"
).textContent =
    text.storyContinues;

    /* =====================================================
   PERSONALISED GUEST INVITATION
===================================================== */

document.querySelector(
    ".guest-eyebrow"
).textContent =
    text.guestEyebrow;


document.querySelector(
    ".guest-prefix"
).textContent =
    text.guestDear;


document.querySelector(
    ".guest-message"
).textContent =
    text.guestMessage;


document.querySelector(
    ".events-label"
).textContent =
    text.guestEventsLabel;


document.querySelector(
    "#continueInvitation > span:first-child"
).textContent =
    text.discoverCelebrations;

    /* =====================================================
   NIKKAH SECTION
===================================================== */

document.querySelector(
    ".nikkah-kicker"
).textContent =
    text.nikkahKicker;


document.querySelector(
    ".nikkah-small-title"
).textContent =
    text.nikkahSmallTitle;


document.querySelector(
    ".nikkah-title-wrap h2"
).textContent =
    text.nikkahTitle;


document.querySelector(
    ".nikkah-subtitle"
).textContent =
    text.nikkahSubtitle;


document.querySelector(
    ".nikkah-invitation-copy"
).textContent =
    text.nikkahInvitation;


document.querySelector(
    "#nikkahDay"
).textContent =
    text.nikkahDay;


document.querySelector(
    "#nikkahDate"
).textContent =
    text.nikkahDate;


document.querySelector(
    "#nikkahTime"
).textContent =
    text.nikkahTime;


document.querySelector(
    ".nikkah-venue .venue-label"
).textContent =
    text.nikkahVenueLabel;


document.querySelector(
    "#nikkahMap > span:last-child"
).textContent =
    text.viewLocation;


document.querySelector(
    "#nikkahCalendar > span:last-child"
).textContent =
    text.addCalendar;


document.querySelector(
    ".nikkah-dua p"
).textContent =
    text.nikkahDua;

    /* =====================================================
   MEHNDI SECTION
===================================================== */

document.querySelector(
    ".mehndi-kicker"
).textContent =
    text.mehndiKicker;


document.querySelector(
    ".mehndi-title-wrap > p"
).textContent =
    text.mehndiCelebrate;


document.querySelector(
    ".mehndi-title-wrap > h2"
).textContent =
    text.mehndiTitle;


document.querySelector(
    ".mehndi-title-wrap > span"
).textContent =
    text.mehndiWithUs;


document.querySelector(
    ".mehndi-copy"
).textContent =
    text.mehndiCopy;


document.querySelector(
    "#mehndiDay"
).textContent =
    text.mehndiDay;


document.querySelector(
    "#mehndiDate"
).textContent =
    text.mehndiDate;


document.querySelector(
    ".mehndi-journey-heading p"
).textContent =
    text.mehndiJourney;


/* Programme stop 1 */

document.querySelector(
    ".mehndi-stop-one .mehndi-stop-copy > p"
).textContent =
    text.mehndiEveningBegins;

document.querySelector(
    ".mehndi-stop-one .mehndi-stop-note"
).textContent =
    text.mehndiEveningNote;


/* Programme stop 2 */

document.querySelector(
    ".mehndi-stop-two .mehndi-stop-copy > p"
).textContent =
    text.mehndiRasam;

document.querySelector(
    ".mehndi-stop-two .mehndi-stop-note"
).textContent =
    text.mehndiRasamNote;

    /* =====================================================
   BARAT SECTION
===================================================== */

document.querySelector(
    ".barat-kicker"
).textContent =
    text.baratKicker;


document.querySelector(
    ".barat-title > p"
).textContent =
    text.baratSmallTitle;


document.querySelector(
    ".barat-title > h2"
).textContent =
    text.baratTitle;


document.querySelector(
    ".barat-title > span"
).textContent =
    text.baratSubtitle;


document.querySelector(
    ".barat-copy"
).textContent =
    text.baratCopy;


/* Date */

document.querySelector(
    "#baratDay"
).textContent =
    text.baratDay;


document.querySelector(
    "#baratDate"
).textContent =
    text.baratDate;


/* Attendance restriction */

document.querySelector(
    ".barat-notice-small"
).textContent =
    text.baratInvitation;


document.querySelector(
    ".barat-notice-content strong"
).textContent =
    text.baratPersons;


/* Programme heading */

document.querySelector(
    ".barat-programme-heading p"
).textContent =
    text.baratProgramme;


/* Programme items */

const baratProgrammeItems =
    document.querySelectorAll(
        ".barat-programme-item"
    );


if (baratProgrammeItems.length >= 3) {

    /* Sehra Bandi */

    baratProgrammeItems[0]
        .querySelector("h4")
        .textContent =
        text.baratSehra;

    baratProgrammeItems[0]
        .querySelector(".barat-programme-note")
        .textContent =
        text.baratSehraNote;


    /* Departure */

    baratProgrammeItems[1]
        .querySelector("h4")
        .textContent =
        text.baratDeparture;

    baratProgrammeItems[1]
        .querySelector(".barat-programme-note")
        .textContent =
        text.baratDepartureNote;


    /* Rukhsati */

    baratProgrammeItems[2]
        .querySelector("h4")
        .textContent =
        text.baratRukhsati;

    baratProgrammeItems[2]
        .querySelector(".barat-programme-note")
        .textContent =
        text.baratRukhsatiNote;
}


/* Venue */

document.querySelector(
    ".barat-venue-label"
).textContent =
    text.baratVenueLabel;


/* Buttons */

const baratMapButton =
    document.getElementById("baratMap");

const baratCalendarButton =
    document.getElementById("baratCalendar");


if (baratMapButton) {

    baratMapButton.lastChild.textContent =
        ` ${text.baratViewLocation} `;
}


if (baratCalendarButton) {

    baratCalendarButton.lastChild.textContent =
        ` ${text.baratAddCalendar} `;
}


/* Closing */

document.querySelector(
    ".barat-closing p"
).textContent =
    text.baratClosing;


/* Programme stop 3 */

document.querySelector(
    ".mehndi-stop-three .mehndi-stop-copy > p"
).textContent =
    text.mehndiDinner;

document.querySelector(
    ".mehndi-stop-three .mehndi-stop-note"
).textContent =
    text.mehndiDinnerNote;


/* Programme stop 4 */

document.querySelector(
    ".mehndi-stop-four .mehndi-stop-copy > p"
).textContent =
    text.mehndiQawwali;

document.querySelector(
    ".mehndi-stop-four .mehndi-stop-note"
).textContent =
    text.mehndiQawwaliNote;


/* Venue */

document.querySelector(
    ".mehndi-venue > p"
).textContent =
    text.mehndiVenueLabel;


/* Buttons
   First span is the decorative symbol, so update text nodes.
*/

const mehndiMapButton =
    document.getElementById("mehndiMap");

const mehndiCalendarButton =
    document.getElementById("mehndiCalendar");


if (mehndiMapButton) {

    mehndiMapButton.lastChild.textContent =
        ` ${text.mehndiViewLocation} `;
}


if (mehndiCalendarButton) {

    mehndiCalendarButton.lastChild.textContent =
        ` ${text.mehndiAddCalendar} `;
}


/* Closing */

document.querySelector(
    ".mehndi-closing p"
).textContent =
    text.mehndiClosing;

    /* =====================================================
   WALIMA SECTION
===================================================== */

document.querySelector(
    ".walima-eyebrow"
).textContent =
    text.walimaEyebrow;


/* Heading */

document.querySelector(
    ".walima-heading > p"
).textContent =
    text.walimaReception;


document.querySelector(
    ".walima-heading > h2"
).textContent =
    text.walimaTitle;


document.querySelector(
    ".walima-heading > span"
).textContent =
    text.walimaSubtitle;


/* Invitation wording */

document.querySelector(
    ".walima-copy"
).textContent =
    text.walimaCopy;


/* Date */

document.querySelector(
    ".walima-date-detail .walima-detail-label"
).textContent =
    text.walimaWhen;


document.querySelector(
    "#walimaDate"
).textContent =
    text.walimaDate;


document.querySelector(
    "#walimaDay"
).textContent =
    text.walimaDay;


/* Evening schedule */

document.querySelector(
    ".walima-schedule-detail > .walima-detail-label"
).textContent =
    text.walimaSchedule;


const walimaScheduleItems =
    document.querySelectorAll(
        ".walima-schedule-item"
    );


if (walimaScheduleItems.length >= 2) {

    walimaScheduleItems[0]
        .querySelector("span")
        .textContent =
        text.walimaReceptionLabel;


    walimaScheduleItems[1]
        .querySelector("span")
        .textContent =
        text.walimaDinnerLabel;
}


/* Venue */

document.querySelector(
    ".walima-venue-label"
).textContent =
    text.walimaVenueLabel;


/* Buttons */

const walimaMapButton =
    document.getElementById("walimaMap");

const walimaCalendarButton =
    document.getElementById("walimaCalendar");


if (walimaMapButton) {

    walimaMapButton.lastChild.textContent =
        ` ${text.walimaViewLocation} `;
}


if (walimaCalendarButton) {

    walimaCalendarButton.lastChild.textContent =
        ` ${text.walimaAddCalendar} `;
}


/* Closing */

document.querySelector(
    ".walima-message p"
).textContent =
    text.walimaClosing;

    /* =====================================================
   FAMILY / CLOSING SECTION
===================================================== */

document.querySelector(
    ".family-eyebrow"
).textContent =
    text.familyEyebrow;


/* Main heading */

document.querySelector(
    ".family-heading > p"
).textContent =
    text.familyNote;


document.querySelector(
    ".family-heading > h2"
).textContent =
    text.familyTitle;


document.querySelector(
    ".family-heading > span"
).textContent =
    text.familySubtitle;


/* Family columns */

const familyLists =
    document.querySelectorAll(
        ".family-list"
    );


if (familyLists.length >= 2) {

    /* RSVP */

    familyLists[0]
        .querySelector("h3")
        .textContent =
        text.familyRsvp;


    /* Looking Forward */

    familyLists[1]
        .querySelector("h3")
        .textContent =
        text.familyLookingForward;


    /*
       Last entry:
       Sisters, Cousins & Bhabhis
    */

    const lookingForwardNames =
        familyLists[1]
            .querySelectorAll("p");


    if (lookingForwardNames.length) {

        lookingForwardNames[
            lookingForwardNames.length - 1
        ].textContent =
            text.familyGroup;
    }
}


/* Contact */

document.querySelector(
    ".family-contact > p"
).textContent =
    text.familyContact;


/* Final message */

document.querySelector(
    ".family-closing > p"
).textContent =
    text.familyClosing;


/*
   Invitation code label.

   Keep the actual Supabase invite code unchanged.
*/
if (
    currentGuest &&
    invitationCode
) {

    invitationCode.textContent =
        `${text.invitationLabel} • ${inviteCode}`;
}


/*
   Re-render dynamically generated event cards
   whenever the language changes.
*/
if (
    currentGuest &&
    Array.isArray(currentGuest.events)
) {

    renderGuestEvents(
        currentGuest.events
    );
}


    /* Toggle active state */

    document
        .querySelectorAll(
            ".language-option"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language === language
            );

        });
}

document
    .querySelectorAll(".language-option")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                applyLanguage(
                    button.dataset.language
                );

            }
        );

    });


// applyLanguage(currentLanguage);

/* =========================================================
   ELEMENTS
========================================================= */

const openInvitationButton =
    document.getElementById("openInvitation");

const invitation =
    document.getElementById("invitation");

const guestInvitation =
    document.getElementById("guestInvitation");

const guestName =
    document.getElementById("guestName");

const guestEvents =
    document.getElementById("guestEvents");

const invitationCode =
    document.getElementById("invitationCode");

const continueInvitation =
    document.getElementById("continueInvitation");

const invalidInvitation =
    document.getElementById(
        "invalidInvitation"
    );

const invalidTitle =
    document.getElementById(
        "invalidTitle"
    );

const invalidMessage =
    document.getElementById(
        "invalidMessage"
    );


/* =========================================================
   OPEN INVITATION
========================================================= */

openInvitationButton.addEventListener(
    "click",
    () => {

        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


/* =========================================================
   READ INVITATION CODE FROM URL
========================================================= */

const urlParameters =
    new URLSearchParams(
        window.location.search
    );

const inviteCode =
    urlParameters
        .get("invite")
        ?.toUpperCase();


/* =========================================================
   GET GUEST FROM SUPABASE
========================================================= */

let currentGuest = null;


async function getGuestFromSupabase() {

    if (!inviteCode) {
        return null;
    }


    const {
        data,
        error
    } = await supabaseClient.rpc(
        "get_wedding_invitation",
        {
            p_invite_code: inviteCode
        }
    );


    if (error) {

        console.error(
            "Invitation lookup failed:",
            error
        );

        return null;
    }


    if (
        !data ||
        data.length === 0
    ) {

        return null;
    }


    const guest =
        data[0];


    const allowedEvents = [];


    if (guest.nikkah) {
        allowedEvents.push("nikkah");
    }

    if (guest.mehndi) {
        allowedEvents.push("mehndi");
    }

    if (guest.barat) {
        allowedEvents.push("barat");
    }

    if (guest.walima) {
        allowedEvents.push("walima");
    }


    return {
        name: guest.guest_name,
        events: allowedEvents
    };

}

/* =========================================================
   INVALID / PRIVATE INVITATION
========================================================= */

function showInvalidInvitation(type) {

    if (!invalidInvitation) {
        return;
    }


    if (type === "missing") {

        invalidTitle.textContent =
            "A Private Celebration";

        invalidMessage.textContent =
            "This wedding invitation is accessible through your personal invitation link.";

    }

    else {

        invalidTitle.textContent =
            "Invitation Not Found";

        invalidMessage.textContent =
            "This private invitation link could not be verified.";

    }


    invalidInvitation
        .classList
        .add("is-visible");


    /*
       Prevent the invitation underneath
       from being scrolled into view.
    */

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   DISPLAY GUEST
========================================================= */

function loadGuestInvitation() {

    if (!currentGuest) {
        return;
    }


    guestName.textContent =
        currentGuest.name;


    const languageText =
    translations[currentLanguage] ||
    translations.en;


invitationCode.textContent =
    `${languageText.invitationLabel} • ${inviteCode}`;


    renderGuestEvents(
        currentGuest.events
    );

}


/* =========================================================
   RENDER EVENT CARDS
========================================================= */

function renderGuestEvents(events) {

    guestEvents.innerHTML = "";

    events.forEach(eventKey => {

        const event =
            weddingEvents[eventKey];

        if (!event) {
            return;
        }

        const languageText =
    translations[currentLanguage] ||
    translations.en;


const eventDisplayName =
    languageText.eventNames?.[eventKey] ||
    event.title;

        const eventElement =
            document.createElement("div");

        eventElement.className =
            "guest-event";

            if (eventKey === "barat") {
    eventElement.classList.add("guest-event-restricted");
}


        eventElement.innerHTML = `
    <span class="guest-event-symbol">
        ${event.symbol || "✦"}
    </span>

    <span class="guest-event-name">
    ${eventDisplayName}
</span>

    ${
        eventKey === "barat"
            ? `
                <span class="guest-event-limit">
    ${languageText.baratLimit}
</span>
              `
            : ""
    }
`;


        guestEvents.appendChild(
            eventElement
        );

    });

}


/* =========================================================
   GUEST SECTION SCROLL REVEAL
========================================================= */

const guestRevealElements =
    document.querySelectorAll(
        ".guest-reveal"
    );


const guestObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                (entry, index) => {

                    if (
                        entry.isIntersecting
                    ) {

                        setTimeout(
                            () => {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                            },
                            index * 110
                        );

                        guestObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.18
        }

    );


guestRevealElements.forEach(
    element => {

        guestObserver.observe(
            element
        );

    }
);


/* =========================================================
   EVENT EXPERIENCES
========================================================= */

const nikkahExperience =
    document.getElementById(
        "nikkahExperience"
    );

const mehndiExperience =
    document.getElementById(
        "mehndiExperience"
    );

const baratExperience =
    document.getElementById(
        "baratExperience"
    );

const walimaExperience =
    document.getElementById(
        "walimaExperience"
    );

const familyClosing =
    document.getElementById(
        "familyClosing"
    );


/* =========================================================
   LOAD NIKKAH DATA
========================================================= */

function loadNikkahData() {

    const event =
        weddingEvents.nikkah;


    const languageText =
    translations[currentLanguage] ||
    translations.en;


document.getElementById(
    "nikkahDay"
).textContent =
    currentLanguage === "ur"
        ? languageText.nikkahDay
        : event.day;


document.getElementById(
    "nikkahDate"
).textContent =
    currentLanguage === "ur"
        ? languageText.nikkahDate
        : event.date;


document.getElementById(
    "nikkahTime"
).textContent =
    currentLanguage === "ur"
        ? languageText.nikkahTime
        : event.time;


    document.getElementById(
        "nikkahVenue"
    ).textContent =
        event.venue;


    document.getElementById(
        "nikkahAddress"
    ).textContent =
        event.address;


    const mapButton =
        document.getElementById(
            "nikkahMap"
        );


    mapButton.href =
        event.mapUrl;

}


/* =========================================================
   LOAD MEHNDI DATA
========================================================= */

function loadMehndiData() {

    const event =
        weddingEvents.mehndi;


    const languageText =
    translations[currentLanguage] ||
    translations.en;


document.getElementById(
    "mehndiDay"
).textContent =
    currentLanguage === "ur"
        ? languageText.mehndiDay
        : event.day;


document.getElementById(
    "mehndiDate"
).textContent =
    currentLanguage === "ur"
        ? languageText.mehndiDate
        : event.date;


    // document.getElementById(
    //     "mehndiTime"
    // ).textContent =
    //     event.time;


    document.getElementById(
        "mehndiVenue"
    ).textContent =
        event.venue;


    document.getElementById(
        "mehndiAddress"
    ).textContent =
        event.address;


    document.getElementById(
        "mehndiMap"
    ).href =
        event.mapUrl;

}


/* =========================================================
   LOAD BARAT DATA
========================================================= */

function loadBaratData() {

    const event =
        weddingEvents.barat;

    const languageText =
        translations[currentLanguage] ||
        translations.en;


    document.getElementById(
    "baratDay"
).textContent =
    currentLanguage === "ur"
        ? languageText.baratDay
        : event.day;


document.getElementById(
    "baratDate"
).textContent =
    currentLanguage === "ur"
        ? languageText.baratDate
        : event.date;


    document.getElementById(
        "baratVenue"
    ).textContent =
        event.venue;


    document.getElementById(
        "baratAddress"
    ).textContent =
        event.address;


    document.getElementById(
        "baratMap"
    ).href =
        event.mapUrl;

}


/* =========================================================
   LOAD WALIMA DATA
========================================================= */

function loadWalimaData() {

    const event =
        weddingEvents.walima;

    const languageText =
        translations[currentLanguage] ||
        translations.en;


    document.getElementById(
    "walimaDay"
).textContent =
    currentLanguage === "ur"
        ? languageText.walimaDay
        : event.day;


document.getElementById(
    "walimaDate"
).textContent =
    currentLanguage === "ur"
        ? languageText.walimaDate
        : event.date;

    document.getElementById(
        "walimaVenue"
    ).textContent =
        event.venue;


    document.getElementById(
        "walimaAddress"
    ).textContent =
        event.address;


    document.getElementById(
        "walimaMap"
    ).href =
        event.mapUrl;

}


/* =========================================================
   EVENT PERMISSIONS
========================================================= */

function applyEventPermissions() {

    /*
       No verified guest = no event access.
    */

    if (!currentGuest) {

        nikkahExperience
            ?.classList
            .add("event-hidden");

        mehndiExperience
            ?.classList
            .add("event-hidden");

        baratExperience
            ?.classList
            .add("event-hidden");

        walimaExperience
            ?.classList
            .add("event-hidden");

        return;
    }


    const allowedEvents =
        currentGuest.events;


    if (
        !allowedEvents.includes("nikkah")
    ) {

        nikkahExperience
            ?.classList
            .add("event-hidden");

    }


    if (
        !allowedEvents.includes("mehndi")
    ) {

        mehndiExperience
            ?.classList
            .add("event-hidden");

    }


    if (
        !allowedEvents.includes("barat")
    ) {

        baratExperience
            ?.classList
            .add("event-hidden");

    }


    if (
        !allowedEvents.includes("walima")
    ) {

        walimaExperience
            ?.classList
            .add("event-hidden");

    }

}


/* =========================================================
   DISCOVER CELEBRATIONS
========================================================= */

continueInvitation.addEventListener(
    "click",
    () => {

        const allowedEvents =
            currentGuest
                ? currentGuest.events
                : [
                    "nikkah",
                    "mehndi",
                    "barat",
                    "walima"
                ];


        if (
            allowedEvents.includes("nikkah")
        ) {

            nikkahExperience
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            return;
        }


        if (
            allowedEvents.includes("mehndi")
        ) {

            mehndiExperience
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            return;
        }


        if (
            allowedEvents.includes("barat")
        ) {

            baratExperience
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            return;
        }


        if (
            allowedEvents.includes("walima")
        ) {

            walimaExperience
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            return;
        }

    }
);


/* =========================================================
   NIKKAH SCROLL ANIMATION
========================================================= */

const nikkahObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        nikkahExperience
                            .classList
                            .add(
                                "nikkah-active"
                            );


                        const elements =
                            nikkahExperience
                                .querySelectorAll(
                                    ".event-reveal"
                                );


                        elements.forEach(
                            (
                                element,
                                index
                            ) => {

                                setTimeout(
                                    () => {

                                        element
                                            .classList
                                            .add(
                                                "event-visible"
                                            );

                                    },

                                    index * 100
                                );

                            }
                        );


                        nikkahObserver
                            .unobserve(
                                nikkahExperience
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


if (nikkahExperience) {

    nikkahObserver.observe(
        nikkahExperience
    );

}


/* =========================================================
   MEHNDI SCROLL ANIMATION
========================================================= */

const mehndiObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                mehndiExperience
                    .classList
                    .add(
                        "mehndi-active"
                    );


                const elements =
                    mehndiExperience
                        .querySelectorAll(
                            ".event-reveal"
                        );


                elements.forEach(
                    (element, index) => {

                        setTimeout(
                            () => {

                                element
                                    .classList
                                    .add(
                                        "event-visible"
                                    );

                            },

                            index * 95
                        );

                    }
                );


                mehndiObserver
                    .unobserve(
                        mehndiExperience
                    );

            });

        },

        {
            threshold: 0.12
        }

    );


if (mehndiExperience) {

    mehndiObserver.observe(
        mehndiExperience
    );

}


/* =========================================================
   BARAT SCROLL ANIMATION
========================================================= */

const baratObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                baratExperience
                    .classList
                    .add(
                        "barat-active"
                    );


                const elements =
                    baratExperience
                        .querySelectorAll(
                            ".event-reveal"
                        );


                elements.forEach(
                    (element, index) => {

                        setTimeout(
                            () => {

                                element
                                    .classList
                                    .add(
                                        "event-visible"
                                    );

                            },

                            index * 95
                        );

                    }
                );


                baratObserver
                    .unobserve(
                        baratExperience
                    );

            });

        },

        {
            threshold: 0.12
        }

    );


if (baratExperience) {

    baratObserver.observe(
        baratExperience
    );

}


/* =========================================================
   WALIMA SCROLL ANIMATION
========================================================= */

const walimaObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                walimaExperience
                    .classList
                    .add(
                        "walima-active"
                    );


                const elements =
                    walimaExperience
                        .querySelectorAll(
                            ".event-reveal"
                        );


                elements.forEach(
                    (element, index) => {

                        setTimeout(
                            () => {

                                element
                                    .classList
                                    .add(
                                        "event-visible"
                                    );

                            },

                            index * 95
                        );

                    }
                );


                walimaObserver
                    .unobserve(
                        walimaExperience
                    );

            });

        },

        {
            threshold: 0.12
        }

    );


if (walimaExperience) {

    walimaObserver.observe(
        walimaExperience
    );

}


/* =========================================================
   FAMILY SECTION SCROLL ANIMATION
========================================================= */

const familySection =
    document.getElementById("familySection");


if (familySection) {

    const familyObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    /* Activate background arch + corners */

                    familySection
                        .classList
                        .add("family-active");


                    /* Reveal content in sequence */

                    const familyRevealElements =
                        familySection
                            .querySelectorAll(
                                ".family-reveal"
                            );


                    familyRevealElements
                        .forEach(
                            (element, index) => {

                                setTimeout(
                                    () => {

                                        element
                                            .classList
                                            .add(
                                                "family-visible"
                                            );

                                    },

                                    index * 130
                                );

                            }
                        );


                    /* Run only once */

                    familyObserver
                        .unobserve(
                            familySection
                        );

                });

            },

            {
                threshold: 0.12
            }

        );


    familyObserver.observe(
        familySection
    );

}

/* =========================================================
   ADD TO CALENDAR
========================================================= */

/*
   Converts a JavaScript Date into the date/time format
   required by an ICS calendar file.

   We intentionally build the event in Pakistan local time
   using TZID=Asia/Karachi.
*/

function formatICSLocalDate(date) {

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    const hours =
        String(
            date.getHours()
        ).padStart(2, "0");

    const minutes =
        String(
            date.getMinutes()
        ).padStart(2, "0");

    const seconds =
        String(
            date.getSeconds()
        ).padStart(2, "0");


    return (
        `${year}${month}${day}` +
        `T${hours}${minutes}${seconds}`
    );

}


/*
   Escape characters that have special meaning
   inside an ICS calendar file.
*/

function escapeICSText(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");

}


/*
   Create and download the calendar event.
*/

function downloadWeddingCalendar(
    eventKey
) {

    const event =
        weddingEvents[eventKey];


    if (
        !event ||
        !event.calendar
    ) {

        console.error(
            "Calendar information is missing:",
            eventKey
        );

        return;
    }


    const {
        date,
        startTime,
        durationHours
    } = event.calendar;


    /*
       Split the stored date and time.
    */

    const [
        year,
        month,
        day
    ] = date
        .split("-")
        .map(Number);


    const [
        hour,
        minute
    ] = startTime
        .split(":")
        .map(Number);


    /*
       Construct start time.

       Month uses zero-based numbering in JS,
       hence month - 1.
    */

    const startDate =
        new Date(
            year,
            month - 1,
            day,
            hour,
            minute,
            0
        );


    /*
       Automatically calculate the end time.

       This also handles Mehndi crossing midnight.
    */

    const endDate =
        new Date(
            startDate.getTime() +
            durationHours *
            60 *
            60 *
            1000
        );


    const startICS =
        formatICSLocalDate(
            startDate
        );


    const endICS =
        formatICSLocalDate(
            endDate
        );


    /*
       Calendar event content.
    */

    const title =
        `Muhammad Musa & Laiba — ${event.title}`;


    const location =
        `${event.venue}, ${event.address}`;


    const description =
    `You are warmly invited to celebrate the ${event.title} of Muhammad Musa & Laiba.\n\nVenue: ${event.venue}\n${event.address}\n\nLocation: ${event.mapUrl}`;

    /*
       Unique identifier for calendar apps.
    */

    const uid =
        `musa-laiba-${eventKey}-2027@wedding-invitation`;


    /*
       ICS file.

       Asia/Karachi ensures the invitation remains
       scheduled according to Pakistan time.
    */

    const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Muhammad Musa and Laiba//Wedding Invitation//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",

        "BEGIN:VEVENT",

        `UID:${uid}`,

        `DTSTART;TZID=Asia/Karachi:${startICS}`,

        `DTEND;TZID=Asia/Karachi:${endICS}`,

        `SUMMARY:${escapeICSText(title)}`,

        `LOCATION:${escapeICSText(location)}`,

        `DESCRIPTION:${escapeICSText(description)}`,

        "STATUS:CONFIRMED",

        "END:VEVENT",

        "END:VCALENDAR"

    ].join("\r\n");


    /*
       Turn the calendar text into a downloadable file.
    */

    const calendarBlob =
        new Blob(
            [icsContent],
            {
                type:
                    "text/calendar;charset=utf-8"
            }
        );


    const calendarUrl =
        URL.createObjectURL(
            calendarBlob
        );


    const downloadLink =
        document.createElement("a");


    downloadLink.href =
        calendarUrl;


    downloadLink.download =
        `Musa-Laiba-${event.title}.ics`;


    document.body.appendChild(
        downloadLink
    );


    downloadLink.click();


    document.body.removeChild(
        downloadLink
    );


    /*
       Clean temporary browser memory.
    */

    setTimeout(
        () => {

            URL.revokeObjectURL(
                calendarUrl
            );

        },

        1000
    );

}


/* =========================================================
   CONNECT CALENDAR BUTTONS
========================================================= */

const calendarButtons = {

    nikkah:
        document.getElementById(
            "nikkahCalendar"
        ),

    mehndi:
        document.getElementById(
            "mehndiCalendar"
        ),

    barat:
        document.getElementById(
            "baratCalendar"
        ),

    walima:
        document.getElementById(
            "walimaCalendar"
        )

};


Object.entries(
    calendarButtons
).forEach(
    ([eventKey, button]) => {

        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                downloadWeddingCalendar(
                    eventKey
                );

            }
        );

    }
);


/* =========================================================
   INITIALISE
========================================================= */

async function initialiseWeddingInvitation() {

    /* =========================================================
   TEMP LOCAL DEVELOPMENT BYPASS
   REMOVE BEFORE PUSHING TO GITHUB
========================================================= */

if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
) {

    currentGuest = {
        name: "Local Test Guest",
        events: [
            "nikkah",
            "mehndi",
            "barat",
            "walima"
        ]
    };

    loadNikkahData();
    loadMehndiData();
    loadBaratData();
    loadWalimaData();

    loadGuestInvitation();
    applyEventPermissions();

    return;
}
    /*
       No invitation code at all.
    */

       
    if (!inviteCode) {

        applyEventPermissions();

        showInvalidInvitation(
            "missing"
        );

        return;
    }


    /*
       Ask Supabase to verify the code.
    */

    currentGuest =
        await getGuestFromSupabase();


    /*
       Code exists in the URL,
       but Supabase found no invitation.
    */

    if (!currentGuest) {

        applyEventPermissions();

        showInvalidInvitation(
            "invalid"
        );

        return;
    }


    /*
       Valid invitation.
    */

    loadNikkahData();
    loadMehndiData();
    loadBaratData();
    loadWalimaData();


    loadGuestInvitation();

    applyEventPermissions();

}


initialiseWeddingInvitation();