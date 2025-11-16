const countrySelect = document.getElementById("countrySelect");
const timeDisplay = document.getElementById("timeDisplay");
const dateDisplay = document.getElementById("dateDisplay");
const countryName = document.getElementById("countryName");
const utcDisplay = document.getElementById("utcDisplay");

// Liste des pays (200+) avec drapeau + fuseau horaire officiel
const countries = [
    {"name": "Sénégal", "tz": "Africa/Dakar", "flag": "🇸🇳"},
    {"name": "France", "tz": "Europe/Paris", "flag": "🇫🇷"},
    {"name": "Belgique", "tz": "Europe/Brussels", "flag": "🇧🇪"},
    {"name": "Suisse", "tz": "Europe/Zurich", "flag": "🇨🇭"},
    {"name": "Canada", "tz": "America/Toronto", "flag": "🇨🇦"},
    {"name": "États-Unis (New York)", "tz": "America/New_York", "flag": "🇺🇸"},
    {"name": "États-Unis (Los Angeles)", "tz": "America/Los_Angeles", "flag": "🇺🇸"},
    {"name": "Brésil", "tz": "America/Sao_Paulo", "flag": "🇧🇷"},
    {"name": "Mexique", "tz": "America/Mexico_City", "flag": "🇲🇽"},
    {"name": "Argentine", "tz": "America/Argentina/Buenos_Aires", "flag": "🇦🇷"},

    {"name": "Nigeria", "tz": "Africa/Lagos", "flag": "🇳🇬"},
    {"name": "Ghana", "tz": "Africa/Accra", "flag": "🇬🇭"},
    {"name": "Côte d’Ivoire", "tz": "Africa/Abidjan", "flag": "🇨🇮"},
    {"name": "Mali", "tz": "Africa/Bamako", "flag": "🇲🇱"},
    {"name": "Guinée", "tz": "Africa/Conakry", "flag": "🇬🇳"},
    {"name": "Togo", "tz": "Africa/Lome", "flag": "🇹🇬"},
    {"name": "Bénin", "tz": "Africa/Porto-Novo", "flag": "🇧🇯"},
    {"name": "Niger", "tz": "Africa/Niamey", "flag": "🇳🇪"},
    {"name": "Afrique du Sud", "tz": "Africa/Johannesburg", "flag": "🇿🇦"},
    {"name": "Kenya", "tz": "Africa/Nairobi", "flag": "🇰🇪"},

    {"name": "Maroc", "tz": "Africa/Casablanca", "flag": "🇲🇦"},
    {"name": "Algérie", "tz": "Africa/Algiers", "flag": "🇩🇿"},
    {"name": "Tunisie", "tz": "Africa/Tunis", "flag": "🇹🇳"},
    {"name": "Égypte", "tz": "Africa/Cairo", "flag": "🇪🇬"},
    {"name": "Turquie", "tz": "Europe/Istanbul", "flag": "🇹🇷"},

    {"name": "Royaume-Uni", "tz": "Europe/London", "flag": "🇬🇧"},
    {"name": "Allemagne", "tz": "Europe/Berlin", "flag": "🇩🇪"},
    {"name": "Italie", "tz": "Europe/Rome", "flag": "🇮🇹"},
    {"name": "Espagne", "tz": "Europe/Madrid", "flag": "🇪🇸"},
    {"name": "Portugal", "tz": "Europe/Lisbon", "flag": "🇵🇹"},
    {"name": "Pays-Bas", "tz": "Europe/Amsterdam", "flag": "🇳🇱"},
    {"name": "Autriche", "tz": "Europe/Vienna", "flag": "🇦🇹"},
    {"name": "Pologne", "tz": "Europe/Warsaw", "flag": "🇵🇱"},
    {"name": "Danemark", "tz": "Europe/Copenhagen", "flag": "🇩🇰"},
    {"name": "Suède", "tz": "Europe/Stockholm", "flag": "🇸🇪"},
    {"name": "Norvège", "tz": "Europe/Oslo", "flag": "🇳🇴"},
    {"name": "Finlande", "tz": "Europe/Helsinki", "flag": "🇫🇮"},
    {"name": "Irlande", "tz": "Europe/Dublin", "flag": "🇮🇪"},
    {"name": "Islande", "tz": "Atlantic/Reykjavik", "flag": "🇮🇸"},
    {"name": "Grèce", "tz": "Europe/Athens", "flag": "🇬🇷"},
    {"name": "Roumanie", "tz": "Europe/Bucharest", "flag": "🇷🇴"},
    {"name": "Bulgarie", "tz": "Europe/Sofia", "flag": "🇧🇬"},
    {"name": "Serbie", "tz": "Europe/Belgrade", "flag": "🇷🇸"},
    {"name": "Croatie", "tz": "Europe/Zagreb", "flag": "🇭🇷"},
    {"name": "Bosnie-Herzégovine", "tz": "Europe/Sarajevo", "flag": "🇧🇦"},
    {"name": "Hongrie", "tz": "Europe/Budapest", "flag": "🇭🇺"},
    {"name": "Slovaquie", "tz": "Europe/Bratislava", "flag": "🇸🇰"},
    {"name": "Slovénie", "tz": "Europe/Ljubljana", "flag": "🇸🇮"},
    {"name": "Tchéquie", "tz": "Europe/Prague", "flag": "🇨🇿"},
    {"name": "Ukraine", "tz": "Europe/Kyiv", "flag": "🇺🇦"},
    {"name": "Biélorussie", "tz": "Europe/Minsk", "flag": "🇧🇾"},
    {"name": "Lituanie", "tz": "Europe/Vilnius", "flag": "🇱🇹"},
    {"name": "Lettonie", "tz": "Europe/Riga", "flag": "🇱🇻"},
    {"name": "Estonie", "tz": "Europe/Tallinn", "flag": "🇪🇪"},

    {"name": "Russie (Moscou)", "tz": "Europe/Moscow", "flag": "🇷🇺"},
    {"name": "Inde", "tz": "Asia/Kolkata", "flag": "🇮🇳"},
    {"name": "Chine", "tz": "Asia/Shanghai", "flag": "🇨🇳"},
    {"name": "Japon", "tz": "Asia/Tokyo", "flag": "🇯🇵"},
    {"name": "Corée du Sud", "tz": "Asia/Seoul", "flag": "🇰🇷"},
    {"name": "Indonésie", "tz": "Asia/Jakarta", "flag": "🇮🇩"},
    {"name": "Philippines", "tz": "Asia/Manila", "flag": "🇵🇭"},
    {"name": "Malaisie", "tz": "Asia/Kuala_Lumpur", "flag": "🇲🇾"},
    {"name": "Singapour", "tz": "Asia/Singapore", "flag": "🇸🇬"},
    {"name": "Thaïlande", "tz": "Asia/Bangkok", "flag": "🇹🇭"},
    {"name": "Vietnam", "tz": "Asia/Ho_Chi_Minh", "flag": "🇻🇳"},
    {"name": "Cambodge", "tz": "Asia/Phnom_Penh", "flag": "🇰🇭"},
    {"name": "Laos", "tz": "Asia/Vientiane", "flag": "🇱🇦"},
    {"name": "Myanmar", "tz": "Asia/Yangon", "flag": "🇲🇲"},
    {"name": "Bangladesh", "tz": "Asia/Dhaka", "flag": "🇧🇩"},
    {"name": "Pakistan", "tz": "Asia/Karachi", "flag": "🇵🇰"},
    {"name": "Sri Lanka", "tz": "Asia/Colombo", "flag": "🇱🇰"},
    {"name": "Népal", "tz": "Asia/Kathmandu", "flag": "🇳🇵"},
    {"name": "Bhoutan", "tz": "Asia/Thimphu", "flag": "🇧🇹"},
    {"name": "Mongolie", "tz": "Asia/Ulaanbaatar", "flag": "🇲🇳"},

    {"name": "Arabie Saoudite", "tz": "Asia/Riyadh", "flag": "🇸🇦"},
    {"name": "Émirats Arabes Unis", "tz": "Asia/Dubai", "flag": "🇦🇪"},
    {"name": "Qatar", "tz": "Asia/Qatar", "flag": "🇶🇦"},
    {"name": "Koweït", "tz": "Asia/Kuwait", "flag": "🇰🇼"},
    {"name": "Bahreïn", "tz": "Asia/Bahrain", "flag": "🇧🇭"},
    {"name": "Oman", "tz": "Asia/Muscat", "flag": "🇴🇲"},
    {"name": "Iran", "tz": "Asia/Tehran", "flag": "🇮🇷"},
    {"name": "Irak", "tz": "Asia/Baghdad", "flag": "🇮🇶"},
    {"name": "Jordanie", "tz": "Asia/Amman", "flag": "🇯🇴"},
    {"name": "Liban", "tz": "Asia/Beirut", "flag": "🇱🇧"},
    {"name": "Israël", "tz": "Asia/Jerusalem", "flag": "🇮🇱"},
    {"name": "Palestine", "tz": "Asia/Hebron", "flag": "🇵🇸"},
    {"name": "Syrie", "tz": "Asia/Damascus", "flag": "🇸🇾"},
    {"name": "Yémen", "tz": "Asia/Aden", "flag": "🇾🇪"},

    {"name": "Kazakhstan", "tz": "Asia/Almaty", "flag": "🇰🇿"},
    {"name": "Ouzbékistan", "tz": "Asia/Tashkent", "flag": "🇺🇿"},
    {"name": "Turkménistan", "tz": "Asia/Ashgabat", "flag": "🇹🇲"},
    {"name": "Tajikistan", "tz": "Asia/Dushanbe", "flag": "🇹🇯"},
    {"name": "Kirghizistan", "tz": "Asia/Bishkek", "flag": "🇰🇬"},

    {"name": "Australie (Sydney)", "tz": "Australia/Sydney", "flag": "🇦🇺"},
    {"name": "Australie (Perth)", "tz": "Australia/Perth", "flag": "🇦🇺"},
    {"name": "Australie (Melbourne)", "tz": "Australia/Melbourne", "flag": "🇦🇺"},
    {"name": "Nouvelle-Zélande", "tz": "Pacific/Auckland", "flag": "🇳🇿"},
    {"name": "Fidji", "tz": "Pacific/Fiji", "flag": "🇫🇯"},
    {"name": "Papouasie-Nouvelle-Guinée", "tz": "Pacific/Port_Moresby", "flag": "🇵🇬"},
    {"name": "Samoa", "tz": "Pacific/Apia", "flag": "🇼🇸"},
    {"name": "Tonga", "tz": "Pacific/Tongatapu", "flag": "🇹🇴"},
    {"name": "Vanuatu", "tz": "Pacific/Efate", "flag": "🇻🇺"},
    {"name": "Micronésie", "tz": "Pacific/Pohnpei", "flag": "🇫🇲"},
    {"name": "Îles Marshall", "tz": "Pacific/Majuro", "flag": "🇲🇭"},
    {"name": "Palaos", "tz": "Pacific/Palau", "flag": "🇵🇼"},
    {"name": "Nauru", "tz": "Pacific/Nauru", "flag": "🇳🇷"},
    {"name": "Kiribati", "tz": "Pacific/Tarawa", "flag": "🇰🇮"},

    {"name": "Maldives", "tz": "Indian/Maldives", "flag": "🇲🇻"},
    {"name": "Seychelles", "tz": "Indian/Mahe", "flag": "🇸🇨"},
    {"name": "Maurice", "tz": "Indian/Mauritius", "flag": "🇲🇺"},
    {"name": "Madagascar", "tz": "Indian/Antananarivo", "flag": "🇲🇬"},
    {"name": "Sri Lanka", "tz": "Asia/Colombo", "flag": "🇱🇰"},

    // --- Amérique du Nord ---
    {"name": "États-Unis (Chicago)", "tz": "America/Chicago", "flag": "🇺🇸"},
    {"name": "États-Unis (Denver)", "tz": "America/Denver", "flag": "🇺🇸"},
    {"name": "États-Unis (Phoenix)", "tz": "America/Phoenix", "flag": "🇺🇸"},
    {"name": "États-Unis (Anchorage)", "tz": "America/Anchorage", "flag": "🇺🇸"},
    {"name": "États-Unis (Honolulu)", "tz": "Pacific/Honolulu", "flag": "🇺🇸"},

    {"name": "Canada (Vancouver)", "tz": "America/Vancouver", "flag": "🇨🇦"},
    {"name": "Canada (Calgary)", "tz": "America/Edmonton", "flag": "🇨🇦"},
    {"name": "Canada (Winnipeg)", "tz": "America/Winnipeg", "flag": "🇨🇦"},
    {"name": "Canada (Halifax)", "tz": "America/Halifax", "flag": "🇨🇦"},
    {"name": "Canada (St John's)", "tz": "America/St_Johns", "flag": "🇨🇦"},

    {"name": "Groenland", "tz": "America/Nuuk", "flag": "🇬🇱"},

    // --- Amérique centrale ---
    {"name": "Guatemala", "tz": "America/Guatemala", "flag": "🇬🇹"},
    {"name": "Honduras", "tz": "America/Tegucigalpa", "flag": "🇭🇳"},
    {"name": "El Salvador", "tz": "America/El_Salvador", "flag": "🇸🇻"},
    {"name": "Nicaragua", "tz": "America/Managua", "flag": "🇳🇮"},
    {"name": "Costa Rica", "tz": "America/Costa_Rica", "flag": "🇨🇷"},
    {"name": "Panama", "tz": "America/Panama", "flag": "🇵🇦"},

    // --- Caraïbes ---
    {"name": "Cuba", "tz": "America/Havana", "flag": "🇨🇺"},
    {"name": "Haïti", "tz": "America/Port-au-Prince", "flag": "🇭🇹"},
    {"name": "République dominicaine", "tz": "America/Santo_Domingo", "flag": "🇩🇴"},
    {"name": "Jamaïque", "tz": "America/Jamaica", "flag": "🇯🇲"},
    {"name": "Trinité-et-Tobago", "tz": "America/Port_of_Spain", "flag": "🇹🇹"},
    {"name": "Bahamas", "tz": "America/Nassau", "flag": "🇧🇸"},
    {"name": "Barbade", "tz": "America/Barbados", "flag": "🇧🇧"},
    {"name": "Grenade", "tz": "America/Grenada", "flag": "🇬🇩"},
    {"name": "Saint-Christophe-et-Niévès", "tz": "America/St_Kitts", "flag": "🇰🇳"},
    {"name": "Sainte-Lucie", "tz": "America/St_Lucia", "flag": "🇱🇨"},
    {"name": "Saint-Vincent-et-les-Grenadines", "tz": "America/St_Vincent", "flag": "🇻🇨"},
    {"name": "Antigua-et-Barbuda", "tz": "America/Antigua", "flag": "🇦🇬"},
    {"name": "Dominique", "tz": "America/Dominica", "flag": "🇩🇲"},

    // --- Amérique du Sud ---
    {"name": "Chili (Santiago)", "tz": "America/Santiago", "flag": "🇨🇱"},
    {"name": "Chili (Île de Pâques)", "tz": "Pacific/Easter", "flag": "🇨🇱"},
    {"name": "Colombie", "tz": "America/Bogota", "flag": "🇨🇴"},
    {"name": "Pérou", "tz": "America/Lima", "flag": "🇵🇪"},
    {"name": "Équateur", "tz": "America/Guayaquil", "flag": "🇪🇨"},
    {"name": "Bolivie", "tz": "America/La_Paz", "flag": "🇧🇴"},
    {"name": "Paraguay", "tz": "America/Asuncion", "flag": "🇵🇾"},
    {"name": "Uruguay", "tz": "America/Montevideo", "flag": "🇺🇾"},
    {"name": "Suriname", "tz": "America/Paramaribo", "flag": "🇸🇷"},
    {"name": "Guyana", "tz": "America/Guyana", "flag": "🇬🇾"},

    // --- Territoires + dépendances utiles ---
    {"name": "Porto Rico", "tz": "America/Puerto_Rico", "flag": "🇵🇷"},
    {"name": "Guadeloupe", "tz": "America/Guadeloupe", "flag": "🇬🇵"},
    {"name": "Martinique", "tz": "America/Martinique", "flag": "🇲🇶"},
    {"name": "Aruba", "tz": "America/Aruba", "flag": "🇦🇼"},
    {"name": "Curaçao", "tz": "America/Curacao", "flag": "🇨🇼"},
    {"name": "Bermudes", "tz": "Atlantic/Bermuda", "flag": "🇧🇲"},
    {"name": "Îles Caïmans", "tz": "America/Cayman", "flag": "🇰🇾"},
    {"name": "Îles Vierges (US)", "tz": "America/St_Thomas", "flag": "🇻🇮"},
    {"name": "Îles Vierges (UK)", "tz": "America/Tortola", "flag": "🇻🇬"},
    
    // --- Europe (petits États + dépendances) ---
    {"name": "Andorre", "tz": "Europe/Andorra", "flag": "🇦🇩"},
    {"name": "Monaco", "tz": "Europe/Monaco", "flag": "🇲🇨"},
    {"name": "Saint-Marin", "tz": "Europe/San_Marino", "flag": "🇸🇲"},
    {"name": "Vatican", "tz": "Europe/Vatican", "flag": "🇻🇦"},
    {"name": "Liechtenstein", "tz": "Europe/Vaduz", "flag": "🇱🇮"},
    {"name": "Islande", "tz": "Atlantic/Reykjavik", "flag": "🇮🇸"},
    {"name": "Malte", "tz": "Europe/Malta", "flag": "🇲🇹"},

    {"name": "Suède", "tz": "Europe/Stockholm", "flag": "🇸🇪"},
    {"name": "Norvège", "tz": "Europe/Oslo", "flag": "🇳🇴"},
    {"name": "Finlande", "tz": "Europe/Helsinki", "flag": "🇫🇮"},
    {"name": "Danemark", "tz": "Europe/Copenhagen", "flag": "🇩🇰"},
    {"name": "Irlande", "tz": "Europe/Dublin", "flag": "🇮🇪"},
    {"name": "Pays-Bas", "tz": "Europe/Amsterdam", "flag": "🇳🇱"},
    {"name": "Pologne", "tz": "Europe/Warsaw", "flag": "🇵🇱"},
    {"name": "Autriche", "tz": "Europe/Vienna", "flag": "🇦🇹"},
    {"name": "Hongrie", "tz": "Europe/Budapest", "flag": "🇭🇺"},
    {"name": "Tchéquie", "tz": "Europe/Prague", "flag": "🇨🇿"},
    {"name": "Slovaquie", "tz": "Europe/Bratislava", "flag": "🇸🇰"},
    {"name": "Slovénie", "tz": "Europe/Ljubljana", "flag": "🇸🇮"},
    {"name": "Croatie", "tz": "Europe/Zagreb", "flag": "🇭🇷"},
    {"name": "Serbie", "tz": "Europe/Belgrade", "flag": "🇷🇸"},
    {"name": "Monténégro", "tz": "Europe/Podgorica", "flag": "🇲🇪"},
    {"name": "Kosovo", "tz": "Europe/Pristina", "flag": "🇽🇰"},
    {"name": "Macédoine du Nord", "tz": "Europe/Skopje", "flag": "🇲🇰"},
    {"name": "Bulgarie", "tz": "Europe/Sofia", "flag": "🇧🇬"},
    {"name": "Roumanie", "tz": "Europe/Bucharest", "flag": "🇷🇴"},

    // --- Afrique (petits + oubliés) ---
    {"name": "Botswana", "tz": "Africa/Gaborone", "flag": "🇧🇼"},
    {"name": "Namibie", "tz": "Africa/Windhoek", "flag": "🇳🇦"},
    {"name": "Zambie", "tz": "Africa/Lusaka", "flag": "🇿🇲"},
    {"name": "Zimbabwe", "tz": "Africa/Harare", "flag": "🇿🇼"},
    {"name": "Eswatini", "tz": "Africa/Mbabane", "flag": "🇸🇿"},
    {"name": "Lesotho", "tz": "Africa/Maseru", "flag": "🇱🇸"},
    {"name": "Soudan", "tz": "Africa/Khartoum", "flag": "🇸🇩"},
    {"name": "Soudan du Sud", "tz": "Africa/Juba", "flag": "🇸🇸"},
    {"name": "Éthiopie", "tz": "Africa/Addis_Ababa", "flag": "🇪🇹"},
    {"name": "Erythrée", "tz": "Africa/Asmara", "flag": "🇪🇷"},
    {"name": "Somalie", "tz": "Africa/Mogadishu", "flag": "🇸🇴"},
    {"name": "Ouganda", "tz": "Africa/Kampala", "flag": "🇺🇬"},
    {"name": "Tanzanie", "tz": "Africa/Dar_es_Salaam", "flag": "🇹🇿"},
    {"name": "Rwanda", "tz": "Africa/Kigali", "flag": "🇷🇼"},
    {"name": "Burundi", "tz": "Africa/Bujumbura", "flag": "🇧🇮"},
    {"name": "République du Congo", "tz": "Africa/Brazzaville", "flag": "🇨🇬"},
    {"name": "République Centrafricaine", "tz": "Africa/Bangui", "flag": "🇨🇫"},
    {"name": "Gabon", "tz": "Africa/Libreville", "flag": "🇬🇦"},
    {"name": "Cameroun", "tz": "Africa/Douala", "flag": "🇨🇲"},
    {"name": "Éthiopie", "tz": "Africa/Addis_Ababa", "flag": "🇪🇹"},
    {"name": "Sierra Leone", "tz": "Africa/Freetown", "flag": "🇸🇱"},
    {"name": "Liberia", "tz": "Africa/Monrovia", "flag": "🇱🇷"},
    {"name": "Burkina Faso", "tz": "Africa/Ouagadougou", "flag": "🇧🇫"},
    {"name": "Tchad", "tz": "Africa/Ndjamena", "flag": "🇹🇩"},

    // --- Asie (restants) ---
    {"name": "Géorgie", "tz": "Asia/Tbilisi", "flag": "🇬🇪"},
    {"name": "Arménie", "tz": "Asia/Yerevan", "flag": "🇦🇲"},
    {"name": "Azerbaïdjan", "tz": "Asia/Baku", "flag": "🇦🇿"},
    {"name": "Afghanistan", "tz": "Asia/Kabul", "flag": "🇦🇫"},

    // --- Océanie (territoires restants) ---
    {"name": "Guam", "tz": "Pacific/Guam", "flag": "🇬🇺"},
    {"name": "Nouvelle-Calédonie", "tz": "Pacific/Noumea", "flag": "🇳🇨"},
    {"name": "Polynésie française", "tz": "Pacific/Tahiti", "flag": "🇵🇫"},
    {"name": "Wallis-et-Futuna", "tz": "Pacific/Wallis", "flag": "🇼🇫"},
    {"name": "Samoa américaines", "tz": "Pacific/Pago_Pago", "flag": "🇦🇸"},
    {"name": "Tuvalu", "tz": "Pacific/Funafuti", "flag": "🇹🇻"},
    {"name": "Îles Salomon", "tz": "Pacific/Guadalcanal", "flag": "🇸🇧"},

    // --- Territoires spéciaux / ISO reconnus ---
    {"name": "Hong Kong", "tz": "Asia/Hong_Kong", "flag": "🇭🇰"},
    {"name": "Macau", "tz": "Asia/Macau", "flag": "🇲🇴"},
    {"name": "Taïwan", "tz": "Asia/Taipei", "flag": "🇹🇼"},
    {"name": "Svalbard", "tz": "Arctic/Longyearbyen", "flag": "🇳🇴"},
    {"name": "Saint-Pierre-et-Miquelon", "tz": "America/Miquelon", "flag": "🇵🇲"}

];


// Remplir le select
countries.forEach(c => {
    let option = document.createElement("option");
    option.value = c.tz;
    option.textContent = `${c.flag}  ${c.name}`;
    countrySelect.appendChild(option);
});

// Mise à jour du nom pays affiché
countrySelect.addEventListener("change", () => {
    const selected = countries[countrySelect.selectedIndex];
    countryName.textContent = `${selected.flag} ${selected.name}`;
});

// Fonction pour afficher l’heure
function updateTime() {
    const timezone = countrySelect.value || "Africa/Dakar";
    const now = new Date();

    timeDisplay.textContent = now.toLocaleTimeString("fr-FR", { timeZone: timezone });
    dateDisplay.textContent = now.toLocaleDateString("fr-FR", { timeZone: timezone });

    const formatter = new Intl.DateTimeFormat("fr-FR", {
        timeZone: timezone,
        timeZoneName: "short"
    });

    utcDisplay.textContent = "Fuseau horaire : " + formatter.formatToParts(now).pop().value;
}

setInterval(updateTime, 1000);
updateTime();
