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


    invitationCode.textContent =
        `INVITATION • ${inviteCode}`;


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
        ${event.title}
    </span>

    ${
        eventKey === "barat"
            ? `
                <span class="guest-event-limit">
                    2 PERSONS ONLY
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


    document.getElementById(
        "nikkahDay"
    ).textContent =
        event.day;


    document.getElementById(
        "nikkahDate"
    ).textContent =
        event.date;


    document.getElementById(
        "nikkahTime"
    ).textContent =
        event.time;


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


    document.getElementById(
        "mehndiDay"
    ).textContent =
        event.day;


    document.getElementById(
        "mehndiDate"
    ).textContent =
        event.date;


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


    document.getElementById(
        "baratDay"
    ).textContent =
        event.day;


    document.getElementById(
        "baratDate"
    ).textContent =
        event.date;


    document.getElementById(
        "baratTime"
    ).textContent =
        event.time;


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


    document.getElementById(
        "walimaDay"
    ).textContent =
        event.day;


    document.getElementById(
        "walimaDate"
    ).textContent =
        event.date;


    document.getElementById(
        "walimaTime"
    ).textContent =
        event.time;


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