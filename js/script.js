/* ==========================================================================
   CreativeXpressions — Site behaviour
   Language toggle, mobile nav, schedule tabs, calendar, forms, share links.
   No build step, no external dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var translations = {
    nl: {
      nav_home: "Home",
      nav_about: "Over mij",
      nav_styles: "Dansstijlen",
      nav_schedule: "Rooster",
      nav_calendar: "Kalender",
      nav_videos: "Video's",
      nav_signup: "Aanmelden",
      nav_contact: "Contact",

      hero_eyebrow: "Christelijke dansschool",
      hero_title_pre: "Soul",
      hero_title_amp: "&",
      hero_title_post: "Body",
      hero_lead: "Professionele danstechniek en oprechte aanbidding, samen op de vloer. CreativeXpressions biedt christelijke danslessen voor kinderen, jongeren, volwassenen en senioren.",
      hero_cta_signup: "Meld je aan voor een les",
      hero_cta_schedule: "Bekijk het rooster",
      hero_quote: "Ik wil mensen zien dansen en genieten op muziek die opbouwt en hoop geeft.",
      hero_quote_cite: "— Nadia Conner, CreativeXpressions",

      about_eyebrow: "Mijn verhaal",
      about_title: "Waarom CreativeXpressions bestaat",
      about_p1: "Als klein meisje wilde ik heel graag turnen. Op St. Maarten, waar ik opgroeide, waren er op de Nederlandse kant van het eiland geen turnscholen. Daarom heeft mijn moeder mij op dansles gezet en vanaf dat moment was ik niet te stoppen. Ik begon al heel vroeg met assisteren tijdens de lessen en gaf vanaf mijn zestiende les. Tot de dag van vandaag is dit wat ik wil doen.",
      about_p2: "Ik ben in de kerk opgegroeid en daar was niet veel sprake van dans, niet op het niveau dat ik gewend was. Het is iets dat ik zelf altijd miste, en al vanaf kinds af aan was dit een droom. Ik wil dat mensen de ruimte hebben om met dans en geloof samen bezig te zijn.",
      about_quote: "Ik heb bijna mijn hele leven last gehad van zware astma en had mijn droom om mijn eigen dansschool te hebben opgegeven. Maar de afgelopen twee jaar gaat het ontzettend goed met mijn gezondheid, dus met veel steun en geloof pak ik het weer op.",
      about_p3: "CreativeXpressions is ontstaan vanuit mijn passie voor dans, geloof en het verlangen om mensen een veilige plek te bieden waar zij zichzelf mogen uiten. Ik leer dansers om bewust, veilig en met respect met hun lichaam om te gaan &mdash; als een geschenk, een tempel. Geen prestatiedruk, geen uiterlijk, geen competitie: wel techniek, gezondheid, persoonlijke expressie en geloofsbeleving.",

      balance_title: "De Soul &amp; Body-balans",
      balance_1_title: "Techniek & gezondheid",
      balance_1_text: "Elke les start met een warming-up gericht op techniek, mobiliteit en blessurepreventie.",
      balance_2_title: "Geloofsbeleving",
      balance_2_text: "Na de warming-up werken we aan Bijbelse dansinterpretatie en choreografie. Fysieke training gaat hand in hand met geloof en expressie.",
      balance_3_title: "Een veilige plek",
      balance_3_text: "Geen oordeel, geen prestatie-angst. Leerlingen dansen vanuit hun hart, niet voor het oog van anderen.",

      styles_eyebrow: "Het aanbod",
      styles_title: "Twee avonden, twee werelden",
      styles_lead: "Er wordt uitsluitend gedanst op christelijke muziek &mdash; van worship en gospel tot Christian hip-hop en Afrobeats.",
      tue_day: "Dinsdag",
      tue_title: "Modern, Jazz & Lyrical Fusion",
      tue_music: "Muziek: worship, gospel, jazz",
      thu_day: "Donderdag",
      thu_title: "Urban, Afro & Streetdance Fusion",
      thu_music: "Muziek: Christian hip-hop, R&amp;B, Afrobeats",

      schedule_eyebrow: "Rooster & tarieven",
      schedule_title: "Lestijden per leeftijdsgroep",
      schedule_lead: "Vaste lessen op dinsdag en donderdag. Kies je leeftijdsgroep en meld je hieronder aan.",
      tab_tue: "Dinsdag",
      tab_thu: "Donderdag",
      th_time: "Tijd",
      th_class: "Les",
      th_age: "Leeftijd",
      price_title: "Tarieven per maand",

      cal_eyebrow: "Plan je les in",
      cal_title: "Kalender",
      cal_lead: "Onze vaste lesdagen zijn dinsdag en donderdag. Kijk in de kalender welke dag voor jouw leeftijdsgroep past.",
      cal_legend_tue: "Dinsdag &mdash; Modern/Jazz",
      cal_legend_thu: "Donderdag &mdash; Fusion",
      cal_prev: "Vorige maand",
      cal_next: "Volgende maand",

      videos_eyebrow: "Bekijk & beleef",
      videos_title: "Video's",
      videos_lead: "Een impressie van onze lessen, choreografieën en optredens op YouTube.",
      video_watch: "Bekijk op YouTube",

      signup_eyebrow: "Doe mee",
      signup_title: "Meld je aan voor een proefles",
      signup_lead: "Vul het formulier in en we nemen binnen twee werkdagen contact met je op om je in te delen in de juiste groep.",
      signup_step1_t: "Vul je gegevens in",
      signup_step1_d: "Naam, contactgegevens en de leeftijd van de danser.",
      signup_step2_t: "Kies je dag en les",
      signup_step2_d: "Dinsdag (Modern/Jazz) of donderdag (Fusion), passend bij de leeftijdsgroep.",
      signup_step3_t: "Wij nemen contact op",
      signup_step3_d: "We bevestigen je plek en de eerstvolgende startdatum.",

      form_name: "Volledige naam",
      form_email: "E-mailadres",
      form_phone: "Telefoonnummer",
      form_age: "Leeftijd danser",
      form_day: "Voorkeursdag",
      form_day_tue: "Dinsdag &mdash; Modern/Jazz Fusion",
      form_day_thu: "Donderdag &mdash; Urban/Afro Fusion",
      form_message: "Bericht (optioneel)",
      form_message_ph: "Vertel ons iets over de danser of stel een vraag...",
      form_consent: "Ik geef toestemming om benaderd te worden over de lessen en het aanmeldproces.",
      form_submit_signup: "Verstuur aanmelding",
      form_required: "* Verplicht veld",
      form_success_signup: "Bedankt voor je aanmelding! We nemen binnen twee werkdagen contact met je op.",
      form_error_generic: "Controleer de gemarkeerde velden en probeer het opnieuw.",

      contact_eyebrow: "Contact",
      contact_title: "Neem contact op",
      contact_lead: "Vragen over de lessen, workshops of samenwerkingen? Stuur een bericht.",
      contact_loc_title: "Locatie",
      contact_loc_text: "Operetteweg 41",
      contact_hours_title: "Lesdagen",
      contact_hours_text: "Dinsdag & donderdag, 10:00 &ndash; 22:00",
      contact_email_title: "E-mail",
      form_subject: "Onderwerp",
      form_contact_message: "Bericht",
      form_contact_message_ph: "Waar kunnen we je mee helpen?",
      form_submit_contact: "Verstuur bericht",
      form_success_contact: "Bedankt voor je bericht! We reageren zo snel mogelijk.",
      share_label: "Deel deze pagina",

      footer_tagline: "Christelijke danslessen waar techniek, expressie en geloof samenkomen.",
      footer_menu: "Menu",
      footer_classes: "Lessen",
      footer_follow: "Volg ons",
      footer_rights: "Alle rechten voorbehouden.",
      footer_credit: "Gemaakt met liefde voor dans en geloof."
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_styles: "Dance styles",
      nav_schedule: "Schedule",
      nav_calendar: "Calendar",
      nav_videos: "Videos",
      nav_signup: "Sign up",
      nav_contact: "Contact",

      hero_eyebrow: "Christian dance school",
      hero_title_pre: "Soul",
      hero_title_amp: "&",
      hero_title_post: "Body",
      hero_lead: "Professional dance technique and heartfelt worship, together on the floor. CreativeXpressions offers Christian dance classes for children, teens, adults and seniors.",
      hero_cta_signup: "Sign up for a class",
      hero_cta_schedule: "View the schedule",
      hero_quote: "I want to see people dance and enjoy music that builds up and gives hope.",
      hero_quote_cite: "— Nadia Conner, CreativeXpressions",

      about_eyebrow: "My story",
      about_title: "Why CreativeXpressions exists",
      about_p1: "As a little girl I really wanted to do gymnastics. On St. Maarten, where I grew up, there were no gymnastics schools on the Dutch side of the island at the time. So my mother enrolled me in dance class instead, and from that moment I couldn't be stopped. I started assisting in classes very early on and began teaching at sixteen. To this day, this is what I want to do.",
      about_p2: "I grew up in church, and there wasn't much room for dance there &mdash; not at the level I was used to. It's something I always missed, and it had been a dream of mine since childhood. I want people to have the space to bring dance and faith together.",
      about_quote: "I struggled with severe asthma for almost my whole life and had given up my dream of running my own dance school. But over the past two years my health has improved enormously, so with a lot of support and faith, I'm picking it back up.",
      about_p3: "CreativeXpressions grew out of my passion for dance and faith, and my desire to offer people a safe place to express themselves. I teach dancers to treat their bodies with awareness, safety and respect &mdash; as a gift, a temple. No pressure to perform, no focus on appearance, no competition: instead, technique, health, personal expression and faith.",

      balance_title: "The Soul &amp; Body balance",
      balance_1_title: "Technique & health",
      balance_1_text: "Every class opens with a warm-up focused on technique, mobility and injury prevention.",
      balance_2_title: "Faith in motion",
      balance_2_text: "After the warm-up we work on biblical dance interpretation and choreography. Physical training goes hand in hand with faith and expression.",
      balance_3_title: "A safe place",
      balance_3_text: "No judgement, no performance anxiety. Dancers move from the heart, not for the eyes of others.",

      styles_eyebrow: "What we offer",
      styles_title: "Two evenings, two worlds",
      styles_lead: "We dance exclusively to Christian music &mdash; from worship and gospel to Christian hip-hop and Afrobeats.",
      tue_day: "Tuesday",
      tue_title: "Modern, Jazz & Lyrical Fusion",
      tue_music: "Music: worship, gospel, jazz",
      thu_day: "Thursday",
      thu_title: "Urban, Afro & Streetdance Fusion",
      thu_music: "Music: Christian hip-hop, R&amp;B, Afrobeats",

      schedule_eyebrow: "Schedule & rates",
      schedule_title: "Class times by age group",
      schedule_lead: "Regular classes on Tuesday and Thursday. Pick your age group and sign up below.",
      tab_tue: "Tuesday",
      tab_thu: "Thursday",
      th_time: "Time",
      th_class: "Class",
      th_age: "Age",
      price_title: "Monthly rates",

      cal_eyebrow: "Plan your class",
      cal_title: "Calendar",
      cal_lead: "Our regular class days are Tuesday and Thursday. Check the calendar to see which day fits your age group.",
      cal_legend_tue: "Tuesday &mdash; Modern/Jazz",
      cal_legend_thu: "Thursday &mdash; Fusion",
      cal_prev: "Previous month",
      cal_next: "Next month",

      videos_eyebrow: "Watch & experience",
      videos_title: "Videos",
      videos_lead: "A glimpse of our classes, choreography and performances on YouTube.",
      video_watch: "Watch on YouTube",

      signup_eyebrow: "Join us",
      signup_title: "Sign up for a trial class",
      signup_lead: "Fill in the form and we'll get back to you within two working days to place you in the right group.",
      signup_step1_t: "Share your details",
      signup_step1_d: "Name, contact details and the dancer's age.",
      signup_step2_t: "Choose your day and class",
      signup_step2_d: "Tuesday (Modern/Jazz) or Thursday (Fusion), matched to the age group.",
      signup_step3_t: "We'll be in touch",
      signup_step3_d: "We'll confirm your spot and the next start date.",

      form_name: "Full name",
      form_email: "Email address",
      form_phone: "Phone number",
      form_age: "Dancer's age",
      form_day: "Preferred day",
      form_day_tue: "Tuesday &mdash; Modern/Jazz Fusion",
      form_day_thu: "Thursday &mdash; Urban/Afro Fusion",
      form_message: "Message (optional)",
      form_message_ph: "Tell us about the dancer, or ask a question...",
      form_consent: "I agree to be contacted about classes and the sign-up process.",
      form_submit_signup: "Send sign-up",
      form_required: "* Required field",
      form_success_signup: "Thanks for signing up! We'll get back to you within two working days.",
      form_error_generic: "Please check the highlighted fields and try again.",

      contact_eyebrow: "Contact",
      contact_title: "Get in touch",
      contact_lead: "Questions about classes, workshops or collaborations? Send us a message.",
      contact_loc_title: "Location",
      contact_loc_text: "Operetteweg 41",
      contact_hours_title: "Class days",
      contact_hours_text: "Tuesday & Thursday, 10:00 &ndash; 22:00",
      contact_email_title: "Email",
      form_subject: "Subject",
      form_contact_message: "Message",
      form_contact_message_ph: "How can we help?",
      form_submit_contact: "Send message",
      form_success_contact: "Thanks for your message! We'll respond as soon as we can.",
      share_label: "Share this page",

      footer_tagline: "Christian dance classes where technique, expression and faith meet.",
      footer_menu: "Menu",
      footer_classes: "Classes",
      footer_follow: "Follow us",
      footer_rights: "All rights reserved.",
      footer_credit: "Made with love for dance and faith."
    }
  };

  var currentLang = "nl";

  function applyTranslations(lang) {
    currentLang = lang;
    var dict = translations[lang];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (dict[key] !== undefined) {
        el.setAttribute("title", dict[key]);
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    renderCalendar();
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyTranslations(btn.getAttribute("data-lang"));
    });
  });

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Schedule tabs ---------------- */
  var tabButtons = document.querySelectorAll(".schedule-tabs button");
  var dayPanels = document.querySelectorAll(".day-panel");
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabButtons.forEach(function (b) { b.setAttribute("aria-selected", "false"); });
      btn.setAttribute("aria-selected", "true");
      var target = btn.getAttribute("data-target");
      dayPanels.forEach(function (panel) {
        panel.hidden = panel.id !== target;
      });
    });
  });

  /* ---------------- Calendar ---------------- */
  var calState = { date: new Date() };
  var monthFormatterNl = new Intl.DateTimeFormat("nl-NL", { month: "long", year: "numeric" });
  var monthFormatterEn = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });

  function renderCalendar() {
    var grid = document.querySelector(".calendar-grid");
    var heading = document.querySelector(".calendar-head h3");
    if (!grid || !heading) return;

    var year = calState.date.getFullYear();
    var month = calState.date.getMonth();
    heading.textContent = (currentLang === "nl" ? monthFormatterNl : monthFormatterEn).format(calState.date);

    var dowLabels = currentLang === "nl"
      ? ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"]
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    grid.innerHTML = "";
    dowLabels.forEach(function (label) {
      var el = document.createElement("div");
      el.className = "dow";
      el.textContent = label;
      grid.appendChild(el);
    });

    var firstDay = new Date(year, month, 1);
    var startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var today = new Date();

    for (var i = 0; i < startOffset; i++) {
      var empty = document.createElement("div");
      empty.className = "day-cell empty";
      grid.appendChild(empty);
    }

    for (var d = 1; d <= daysInMonth; d++) {
      var cell = document.createElement("div");
      var cellDate = new Date(year, month, d);
      var weekday = cellDate.getDay(); // 0 Sun ... 2 Tue, 4 Thu
      var classes = ["day-cell"];
      if (weekday === 2) classes.push("class-day", "tue");
      if (weekday === 4) classes.push("class-day", "thu");
      if (cellDate.toDateString() === today.toDateString()) classes.push("today");
      cell.className = classes.join(" ");
      cell.textContent = String(d);
      grid.appendChild(cell);
    }
  }

  var prevBtn = document.querySelector(".calendar-nav .prev");
  var nextBtn = document.querySelector(".calendar-nav .next");
  if (prevBtn) prevBtn.addEventListener("click", function () {
    calState.date = new Date(calState.date.getFullYear(), calState.date.getMonth() - 1, 1);
    renderCalendar();
  });
  if (nextBtn) nextBtn.addEventListener("click", function () {
    calState.date = new Date(calState.date.getFullYear(), calState.date.getMonth() + 1, 1);
    renderCalendar();
  });

  /* ---------------- Forms ---------------- */
  function validateField(field) {
    var input = field.querySelector("input, select, textarea");
    if (!input) return true;
    var errorEl = field.querySelector(".error-msg");
    var valid = input.checkValidity();
    field.classList.toggle("has-error", !valid);
    if (errorEl) {
      errorEl.textContent = valid ? "" : (input.validationMessage || "");
    }
    return valid;
  }

  function wireForm(formId, statusId, successKey, formType) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form) return;

    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input, select, textarea");
      if (!input) return;
      input.addEventListener("blur", function () { validateField(field); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll(".field");
      var allValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) allValid = false;
      });

      status.classList.remove("show", "success", "error");
      if (!allValid) {
        status.textContent = translations[currentLang].form_error_generic;
        status.classList.add("show", "error");
        return;
      }

      var submitBtn = form.querySelector("button[type=submit]");
      if (submitBtn) submitBtn.disabled = true;

      var data = Object.fromEntries(new FormData(form).entries());
      data.formType = formType;

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          status.textContent = translations[currentLang][successKey];
          status.classList.add("show", "success");
          form.reset();
        })
        .catch(function () {
          status.textContent = translations[currentLang].form_error_generic;
          status.classList.add("show", "error");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  wireForm("signup-form", "signup-status", "form_success_signup", "signup");
  wireForm("contact-form", "contact-status", "form_success_contact", "contact");

  /* ---------------- Share buttons ---------------- */
  function initShareButtons() {
    var pageUrl = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(document.title);
    var shareLinks = {
      facebook: "https://www.facebook.com/sharer/sharer.php?u=" + pageUrl,
      whatsapp: "https://wa.me/?text=" + pageTitle + "%20" + pageUrl,
      linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" + pageUrl,
      email: "mailto:?subject=" + pageTitle + "&body=" + pageUrl
    };
    document.querySelectorAll("[data-share]").forEach(function (link) {
      var key = link.getAttribute("data-share");
      if (shareLinks[key]) link.setAttribute("href", shareLinks[key]);
    });
  }
  initShareButtons();

  /* ---------------- Header shadow on scroll ---------------- */
  var header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 8) header.style.boxShadow = "0 4px 20px rgba(69,40,95,0.08)";
    else header.style.boxShadow = "none";
  });

  /* ---------------- Init ---------------- */
  applyTranslations("nl");
})();
