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

const loginScreen =
    document.getElementById("loginScreen");

const dashboard =
    document.getElementById("dashboard");

const loginForm =
    document.getElementById("loginForm");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginButton =
    document.getElementById("loginButton");

const loginError =
    document.getElementById("loginError");

const signOutButton =
    document.getElementById("signOutButton");


const addGuestButton =
    document.getElementById("addGuestButton");

const guestSearch =
    document.getElementById("guestSearch");

const guestTableBody =
    document.getElementById("guestTableBody");

const emptyState =
    document.getElementById("emptyState");


const totalGuests =
    document.getElementById("totalGuests");

const nikkahCount =
    document.getElementById("nikkahCount");

const mehndiCount =
    document.getElementById("mehndiCount");

const baratCount =
    document.getElementById("baratCount");

const walimaCount =
    document.getElementById("walimaCount");


const guestModal =
    document.getElementById("guestModal");

const modalTitle =
    document.getElementById("modalTitle");

const closeModalButton =
    document.getElementById("closeModalButton");

const cancelGuestButton =
    document.getElementById("cancelGuestButton");

const guestForm =
    document.getElementById("guestForm");

const guestNameInput =
    document.getElementById("guestNameInput");

const eventNikkah =
    document.getElementById("eventNikkah");

const eventMehndi =
    document.getElementById("eventMehndi");

const eventBarat =
    document.getElementById("eventBarat");

const eventWalima =
    document.getElementById("eventWalima");

const codePreview =
    document.getElementById("codePreview");

const guestFormError =
    document.getElementById("guestFormError");

const saveGuestButton =
    document.getElementById("saveGuestButton");


const deleteModal =
    document.getElementById("deleteModal");

const deleteGuestName =
    document.getElementById("deleteGuestName");

const cancelDeleteButton =
    document.getElementById("cancelDeleteButton");

const confirmDeleteButton =
    document.getElementById("confirmDeleteButton");


const toast =
    document.getElementById("toast");



/* =========================================================
   STATE
========================================================= */

let guests = [];

let editingGuestId = null;

let editingInviteCode = null;

let deletingGuestId = null;

let toastTimer = null;



/* =========================================================
   AUTHENTICATION
========================================================= */

async function checkSession() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getSession();


    if (error) {

        console.error(
            "Session check failed:",
            error
        );

        showLogin();

        return;
    }


    if (data.session) {

        showDashboard();

        await loadGuests();

    }

    else {

        showLogin();

    }

}



loginForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        loginError.textContent = "";

        loginButton.disabled = true;

        loginButton.textContent =
            "Signing In...";


        const email =
            loginEmail.value.trim();

        const password =
            loginPassword.value;


        const {
            data,
            error
        } =
            await supabaseClient.auth
                .signInWithPassword({
                    email,
                    password
                });


        if (error) {

            loginError.textContent =
                "Unable to sign in. Please check your email and password.";

            loginButton.disabled = false;

            loginButton.textContent =
                "Sign In";

            return;
        }


        /*
           A valid login is not enough by itself.
           RLS still determines whether this account
           can access the guests table.
        */

        loginPassword.value = "";

        showDashboard();

        await loadGuests();


        loginButton.disabled = false;

        loginButton.textContent =
            "Sign In";

    }
);



signOutButton.addEventListener(
    "click",
    async function () {

        signOutButton.disabled = true;


        await supabaseClient.auth.signOut();


        guests = [];

        guestTableBody.innerHTML = "";

        loginPassword.value = "";

        showLogin();


        signOutButton.disabled = false;

    }
);



function showLogin() {

    dashboard.classList.add("hidden");

    loginScreen.classList.remove("hidden");

}



function showDashboard() {

    loginScreen.classList.add("hidden");

    dashboard.classList.remove("hidden");

}



/* =========================================================
   LOAD GUESTS
========================================================= */

async function loadGuests() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("guests")
            .select(
                "id, created_at, invite_code, guest_name, nikkah, mehndi, barat, walima"
            )
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            "Guest loading failed:",
            error
        );


        /*
           This is also what will happen if someone
           authenticates successfully but does not have
           our admin RLS permissions.
        */

        showToast(
            "You do not have permission to access the guest list.",
            true
        );

        return;
    }


    guests = data || [];


    updateStatistics();

    renderGuests();

}



/* =========================================================
   STATISTICS
========================================================= */

function updateStatistics() {

    totalGuests.textContent =
        guests.length;


    nikkahCount.textContent =
        guests.filter(
            guest => guest.nikkah
        ).length;


    mehndiCount.textContent =
        guests.filter(
            guest => guest.mehndi
        ).length;


    baratCount.textContent =
        guests.filter(
            guest => guest.barat
        ).length;


    walimaCount.textContent =
        guests.filter(
            guest => guest.walima
        ).length;

}



/* =========================================================
   RENDER GUESTS
========================================================= */

function renderGuests() {

    const searchValue =
        guestSearch.value
            .trim()
            .toLowerCase();


    const filteredGuests =
        guests.filter(
            guest => {

                const name =
                    guest.guest_name
                        .toLowerCase();

                const code =
                    guest.invite_code
                        .toLowerCase();


                return (
                    name.includes(searchValue) ||
                    code.includes(searchValue)
                );

            }
        );


    guestTableBody.innerHTML = "";


    if (filteredGuests.length === 0) {

        emptyState.classList.remove(
            "hidden"
        );

        return;

    }


    emptyState.classList.add(
        "hidden"
    );


    filteredGuests.forEach(
        guest => {

            const row =
                document.createElement("tr");


            const nameCell =
                document.createElement("td");

            const name =
                document.createElement("span");

            name.className =
                "guest-name";

            name.textContent =
                guest.guest_name;

            nameCell.appendChild(name);



            const codeCell =
                document.createElement("td");

            const code =
                document.createElement("span");

            code.className =
                "invitation-code";

            code.textContent =
                guest.invite_code;

            codeCell.appendChild(code);



            const eventCell =
                document.createElement("td");

            eventCell.appendChild(
                buildEventTags(guest)
            );



            const actionsCell =
                document.createElement("td");

            const actionWrapper =
                document.createElement("div");

            actionWrapper.className =
                "action-buttons";


            actionWrapper.appendChild(
                createActionButton(
                    "Copy Link",
                    () => copyInvitationLink(guest)
                )
            );


            actionWrapper.appendChild(
                createActionButton(
                    "Edit",
                    () => openEditGuest(guest)
                )
            );


            actionWrapper.appendChild(
                createActionButton(
                    "Delete",
                    () => openDeleteGuest(guest),
                    true
                )
            );


            actionsCell.appendChild(
                actionWrapper
            );


            row.appendChild(nameCell);
            row.appendChild(codeCell);
            row.appendChild(eventCell);
            row.appendChild(actionsCell);


            guestTableBody.appendChild(row);

        }
    );

}



function buildEventTags(guest) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "event-tags";


    const events = [
        ["Nikkah", guest.nikkah],
        ["Mehndi", guest.mehndi],
        ["Barat", guest.barat],
        ["Walima", guest.walima]
    ];


    const invitedEvents =
        events.filter(
            event => event[1]
        );


    if (invitedEvents.length === 0) {

        const none =
            document.createElement("span");

        none.className =
            "no-events";

        none.textContent =
            "No events";

        wrapper.appendChild(none);

        return wrapper;

    }


    invitedEvents.forEach(
        event => {

            const tag =
                document.createElement("span");

            tag.className =
                "event-tag";

            tag.textContent =
                event[0];

            wrapper.appendChild(tag);

        }
    );


    return wrapper;

}



function createActionButton(
    label,
    handler,
    isDelete = false
) {

    const button =
        document.createElement("button");


    button.type =
        "button";

    button.className =
        "table-action";


    if (isDelete) {

        button.classList.add(
            "delete"
        );

    }


    button.textContent =
        label;


    button.addEventListener(
        "click",
        handler
    );


    return button;

}



/* =========================================================
   SEARCH
========================================================= */

guestSearch.addEventListener(
    "input",
    renderGuests
);



/* =========================================================
   SECURE INVITATION CODE
========================================================= */

function generateInvitationCode() {

    /*
       crypto.getRandomValues() gives us
       cryptographically strong randomness.

       Ambiguous characters such as:
       O, 0, I and 1
       are intentionally excluded.
    */

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    const codeLength =
        16;


    const randomValues =
        new Uint32Array(codeLength);


    crypto.getRandomValues(
        randomValues
    );


    let code = "";


    for (
        let i = 0;
        i < codeLength;
        i++
    ) {

        code +=
            characters[
                randomValues[i] %
                characters.length
            ];

    }


    return code;

}



/* =========================================================
   OPEN ADD GUEST
========================================================= */

addGuestButton.addEventListener(
    "click",
    openAddGuest
);


function openAddGuest() {

    editingGuestId = null;

    editingInviteCode =
        generateInvitationCode();


    modalTitle.textContent =
        "Add Guest";


    guestNameInput.value = "";

    eventNikkah.checked = false;
    eventMehndi.checked = false;
    eventBarat.checked = false;
    eventWalima.checked = false;


    codePreview.textContent =
        editingInviteCode;


    guestFormError.textContent = "";


    guestModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";


    setTimeout(
        () => guestNameInput.focus(),
        50
    );

}



/* =========================================================
   OPEN EDIT GUEST
========================================================= */

function openEditGuest(guest) {

    editingGuestId =
        guest.id;

    editingInviteCode =
        guest.invite_code;


    modalTitle.textContent =
        "Edit Guest";


    guestNameInput.value =
        guest.guest_name;


    eventNikkah.checked =
        guest.nikkah;

    eventMehndi.checked =
        guest.mehndi;

    eventBarat.checked =
        guest.barat;

    eventWalima.checked =
        guest.walima;


    codePreview.textContent =
        guest.invite_code;


    guestFormError.textContent = "";


    guestModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";


    setTimeout(
        () => guestNameInput.focus(),
        50
    );

}



/* =========================================================
   CLOSE GUEST MODAL
========================================================= */

function closeGuestModal() {

    guestModal.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "";


    guestFormError.textContent = "";

}


closeModalButton.addEventListener(
    "click",
    closeGuestModal
);


cancelGuestButton.addEventListener(
    "click",
    closeGuestModal
);


guestModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === guestModal
        ) {

            closeGuestModal();

        }

    }
);



/* =========================================================
   SAVE GUEST
========================================================= */

guestForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        guestFormError.textContent = "";


        const guestName =
            guestNameInput.value.trim();


        if (!guestName) {

            guestFormError.textContent =
                "Please enter the guest or family name.";

            return;

        }


        const guestData = {

            guest_name:
                guestName,

            nikkah:
                eventNikkah.checked,

            mehndi:
                eventMehndi.checked,

            barat:
                eventBarat.checked,

            walima:
                eventWalima.checked

        };


        saveGuestButton.disabled = true;

        saveGuestButton.textContent =
            "Saving...";


        let result;


        /*
           ADD NEW GUEST
        */

        if (editingGuestId === null) {

            guestData.invite_code =
                editingInviteCode;


            result =
                await supabaseClient
                    .from("guests")
                    .insert(
                        guestData
                    )
                    .select()
                    .single();

        }


        /*
           EDIT EXISTING GUEST
        */

        else {

            result =
                await supabaseClient
                    .from("guests")
                    .update(
                        guestData
                    )
                    .eq(
                        "id",
                        editingGuestId
                    )
                    .select()
                    .single();

        }


        saveGuestButton.disabled = false;

        saveGuestButton.textContent =
            "Save Guest";


        if (result.error) {

            console.error(
                "Guest save failed:",
                result.error
            );


            if (
                result.error.code ===
                "23505"
            ) {

                guestFormError.textContent =
                    "That invitation code already exists. Please close and add the guest again.";

            }

            else {

                guestFormError.textContent =
                    "Unable to save this guest. Please try again.";

            }


            return;

        }


        const wasEditing =
            editingGuestId !== null;


        closeGuestModal();


        await loadGuests();


        showToast(
            wasEditing
                ? "Guest updated successfully."
                : "Guest added successfully."
        );

    }
);



/* =========================================================
   DELETE GUEST
========================================================= */

function openDeleteGuest(guest) {

    deletingGuestId =
        guest.id;


    deleteGuestName.textContent =
        guest.guest_name;


    deleteModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";

}



function closeDeleteModal() {

    deleteModal.classList.add(
        "hidden"
    );


    deletingGuestId = null;


    document.body.style.overflow =
        "";

}


cancelDeleteButton.addEventListener(
    "click",
    closeDeleteModal
);


deleteModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === deleteModal
        ) {

            closeDeleteModal();

        }

    }
);



confirmDeleteButton.addEventListener(
    "click",
    async function () {

        if (
            deletingGuestId === null
        ) {

            return;

        }


        confirmDeleteButton.disabled =
            true;

        confirmDeleteButton.textContent =
            "Deleting...";


        const {
            error
        } =
            await supabaseClient
                .from("guests")
                .delete()
                .eq(
                    "id",
                    deletingGuestId
                );


        confirmDeleteButton.disabled =
            false;

        confirmDeleteButton.textContent =
            "Delete Guest";


        if (error) {

            console.error(
                "Delete failed:",
                error
            );


            showToast(
                "Unable to delete this guest.",
                true
            );


            return;

        }


        closeDeleteModal();


        await loadGuests();


        showToast(
            "Guest deleted successfully."
        );

    }
);



/* =========================================================
   COPY INVITATION LINK
========================================================= */

async function copyInvitationLink(guest) {

    /*
       Works locally now.

       After GitHub Pages deployment,
       window.location will automatically use
       the real live website address.
    */

    const currentURL =
        new URL(window.location.href);


    /*
       admin.html -> index.html
    */

    const invitationURL =
        new URL(
            "index.html",
            currentURL
        );


    invitationURL.searchParams.set(
        "invite",
        guest.invite_code
    );


    try {

        await navigator.clipboard.writeText(
            invitationURL.href
        );


        showToast(
            "Invitation link copied."
        );

    }

    catch (error) {

        console.error(
            "Clipboard failed:",
            error
        );


        /*
           Fallback for browsers/environments
           where clipboard access is restricted.
        */

        window.prompt(
            "Copy this invitation link:",
            invitationURL.href
        );

    }

}



/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    isError = false
) {

    clearTimeout(
        toastTimer
    );


    toast.textContent =
        message;


    toast.classList.toggle(
        "error",
        isError
    );


    toast.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}



/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        if (
            !guestModal.classList.contains(
                "hidden"
            )
        ) {

            closeGuestModal();

        }


        if (
            !deleteModal.classList.contains(
                "hidden"
            )
        ) {

            closeDeleteModal();

        }

    }
);



/* =========================================================
   INITIALISE
========================================================= */

checkSession();