import { Lang } from '../i18n/translations';

export type BlogSection =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; code: string; language?: string };

export interface BlogPostFull {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  sections: BlogSection[];
}

const YFINANCE_CODE = `function YFinance(quote, datatype) {
  try {
    const baseUrl = 'https://query2.finance.yahoo.com/v8/finance/chart/';
    let url = baseUrl + quote;
    const response = UrlFetchApp.fetch(url);
    const responseCode = response.getResponseCode();
    if (responseCode != 200) {
      return "No data found for " + quote;
    }
    const json = JSON.parse(response.getContentText());
    const data = json['chart']['result'][0]['meta'];
    if (datatype === 'price') {
      return data['regularMarketPrice'];
    } else if (datatype === 'currency') {
      return data['currency'];
    }
    return "No datatype provided";
  } catch (error) {
    return \`Error: \${error.message}\`;
  }
}`;

export const BLOG_POSTS: Record<Lang, BlogPostFull[]> = {
  da: [
    {
      slug: 'yahoo-finance-google-sheets',
      title: 'Yahoo Finance aktiepriser i Google Sheets',
      date: '8. mar 2025',
      category: 'Automatisering',
      excerpt:
        'At integrere aktiepriser i Google Sheets er en fantastisk måde at automatisere finansiel dataindsamling på, og Yahoo Finance API er et populært valg, da det tilbyder let adgang til aktiekurser...',
      sections: [
        {
          type: 'paragraph',
          text: 'Google Apps Script er et JavaScript-baseret scriptsprog til at automatisere og tilpasse Google Workspace-programmer som Google Sheets. Med det kan du bygge dine egne funktioner, tilgå eksterne API\'er og automatisere dataflows. I dette indlæg viser jeg, hvordan du bruger Apps Script til at hente aktiekurser fra Yahoo Finance API direkte ind i et regneark.',
        },
        { type: 'heading', text: 'Trin-for-trin' },
        {
          type: 'list',
          items: [
            'Opret et nyt Google Sheet, hvor aktiekurserne skal vises.',
            'Klik på "Udvidelser" i menuen og vælg "Apps Script" for at åbne editoren.',
            'Indsæt YFinance-funktionen (se koden nedenfor) i editoren.',
            'Gem projektet — f.eks. under navnet "Aktieimporter".',
          ],
        },
        { type: 'code', code: YFINANCE_CODE, language: 'javascript' },
        {
          type: 'paragraph',
          text: 'Funktionen tager to parametre: quote er aktiens ticker-symbol (f.eks. "AAPL" for Apple), og datatype er enten \'price\' for aktiekursen eller \'currency\' for valutaen den handles i.',
        },
        { type: 'heading', text: 'Sådan bruger du funktionen' },
        {
          type: 'paragraph',
          text: 'Tilbage i dit regneark kan du nu kalde funktionen direkte i en celle:',
        },
        { type: 'code', code: '=YFinance("AAPL", "price")\n=YFinance("AAPL", "currency")', language: 'text' },
        { type: 'heading', text: 'Begrænsninger' },
        {
          type: 'paragraph',
          text: 'Yahoo Finance API\'et er offentligt tilgængeligt, men har rate-begrænsninger pr. time. Hvis dit regneark opdaterer mange aktier samtidig eller meget ofte, kan du ramme disse grænser.',
        },
        { type: 'heading', text: 'Konklusion' },
        {
          type: 'paragraph',
          text: 'Google Apps Script kombineret med Yahoo Finance API gør det nemt at trække finansielle data direkte ind i Google Sheets — det sparer tid og gør det enkelt at holde øje med aktiemarkedet uden manuelle opslag.',
        },
      ],
    },
    {
      slug: 'vies-eu-vat-validering',
      title:
        'Automatisk validering af EU momsnumre via VIES: En case med ERP-integration og sign-up optimering',
      date: '17. jan 2025',
      category: 'Automatisering, Optimering',
      excerpt:
        'Når det handler om at optimere arbejdsprocesser og sikre compliance i virksomheder, kan automatisering spille en afgørende rolle. For nylig hjalp jeg en kunde med at udvikle og implementere et...',
      sections: [
        {
          type: 'paragraph',
          text: 'Når det handler om at optimere arbejdsprocesser og sikre compliance i virksomheder, kan automatisering spille en afgørende rolle. For nylig hjalp jeg en kunde med at udvikle og implementere et system, der automatisk validerer deres kunders EU momsnumre via VIES (VAT Information Exchange System). Systemet er fuldt integreret med deres ERP-løsning e-conomic og deres sign-up-formular på hjemmesiden.',
        },
        { type: 'heading', text: 'Kundens udfordring' },
        {
          type: 'paragraph',
          text: 'Auto-Mow ApS stod over for flere udfordringer i deres eksisterende arbejdsgang:',
        },
        {
          type: 'list',
          items: [
            'Tidskrævende validering: momsnumre blev tjekket manuelt, hvilket tog tid og åbnede for fejl.',
            'Compliance-risici: ugyldige momsnumre kunne give problemer med EU-momsrapportering.',
            'Brugeroplevelse: nye kunder oplevede unødvendige forsinkelser, fordi momsnumre skulle kontrolleres manuelt.',
          ],
        },
        { type: 'heading', text: 'Løsningen: Automatisk momsvalidering' },
        {
          type: 'list',
          items: [
            'Integration med VIES API: VIES er en EU-platform, der validerer momsnumre på tværs af alle medlemslande (Schweiz har et tilsvarende system, UID).',
            'ERP-integration med e-conomic: validerede momsnumre opdateres straks i virksomhedens ERP-system, så nye kunder og deres momsoplysninger automatisk registreres og synkroniseres.',
            'Real-time validering i sign-up-formularen: momsnummeret valideres med det samme, og kunden får øjeblikkelig feedback, hvis noget er forkert.',
          ],
        },
        { type: 'heading', text: 'Teknisk implementering' },
        {
          type: 'list',
          items: [
            'Backend: en mikroservice bygget i C# med REST API-endepunkter; kommunikationen med VIES foregår via SOAP.',
            'e-conomic-integration: e-conomics REST API bruges til at oprette og opdatere kundeprofiler og momsoplysninger.',
            'Frontend: en AJAX-baseret valideringsmekanisme i sign-up-formularen sender momsnummeret til backend og viser resultatet med det samme.',
            'Fejlhåndtering: hvis VIES-tjenesten er utilgængelig, får kunden besked om, at valideringen ikke kunne gennemføres, og data gemmes midlertidigt til manuel opfølgning.',
          ],
        },
        { type: 'heading', text: 'Resultater' },
        {
          type: 'list',
          items: [
            'Tidsbesparelser: automatisk validering fjernede behovet for manuelle tjek.',
            'Forbedret compliance: kun gyldige momsnumre bliver registreret.',
            'Bedre brugeroplevelse: nye kunder kommer hurtigt og problemfrit gennem oprettelsen.',
            'Effektiv datasynkronisering: kundedata opdateres automatisk via e-conomic-integrationen.',
          ],
        },
        { type: 'heading', text: 'Læringer og fremtidige muligheder' },
        {
          type: 'paragraph',
          text: 'Casen viser, hvordan automatisering og integration kan forenkle komplekse processer og skabe værdi på flere niveauer. Fremadrettet kunne løsningen udvides med batch-validering af eksisterende kunder, automatiske notifikationer hvis et momsnummer bliver ugyldigt, og flersproget support til internationale kunder.',
        },
        {
          type: 'paragraph',
          text: 'Projektet er implementeret for Auto-Mow ApS, der med en stor international kundebase brugte mange ressourcer på at sikre, at EU-momsnumre var i orden. Efter implementeringen kører dette nu problemfrit. Har du lignende udfordringer i din virksomhed? Tøv ikke med at kontakte mig — sammen kan vi skabe en løsning, der matcher dine behov.',
        },
      ],
    },
    {
      slug: 'wordpress-caching-seo',
      title: 'Optimér WordPress hastighed og SEO med caching',
      date: '14. jan 2025',
      category: 'WooCommerce, SEO',
      excerpt:
        'Hvis du driver en WooCommerce-webshop, har du sandsynligvis allerede bemærket, hvor vigtigt det er, at din webshop loader hurtigt og fungerer problemfrit. Hastighed er ikke kun afgørende for en god...',
      sections: [
        {
          type: 'paragraph',
          text: 'Hvis du driver en WooCommerce-webshop, har du sandsynligvis allerede bemærket, hvor vigtigt det er, at din webshop loader hurtigt og fungerer problemfrit. Hastighed er ikke kun afgørende for en god brugeroplevelse — det påvirker også din placering i Googles søgeresultater. En af de mest effektive måder at forbedre hastigheden på er caching.',
        },
        { type: 'heading', text: 'Hvad er caching?' },
        {
          type: 'paragraph',
          text: 'Caching er en teknik, der gemmer en midlertidig kopi af din webshops data, så den kan leveres hurtigere til brugerne. Uden caching skal serveren køre PHP-scripts og hente data fra databasen, hver gang en side åbnes — det tager tid og bruger ressourcer. Med caching gemmer serveren i stedet en statisk HTML-version af dine sider, som kan leveres direkte næste gang en bruger besøger samme side.',
        },
        { type: 'heading', text: 'Hvorfor er caching vigtigt for hastighed og SEO?' },
        {
          type: 'list',
          items: [
            'Bedre hastighed og brugeroplevelse: hurtige webshops holder på brugerne og reducerer bounce rate — og øger sandsynligheden for, at kunder gennemfører deres køb.',
            'Godt for SEO: Google og andre søgemaskiner rangerer hurtige hjemmesider højere, da hastighed er en vigtig rankingfaktor.',
            'Mindre serverbelastning: færre PHP-processer og databaseopslag aflaster din server — særligt nyttigt ved trafikspidser.',
          ],
        },
        { type: 'heading', text: 'Typer af caching' },
        {
          type: 'list',
          items: [
            'Browser-caching: gemmer statiske ressourcer som billeder, CSS og JavaScript i brugerens browser.',
            'Server-side caching: gemmer statiske HTML-versioner af dine sider på serveren.',
            'CDN-caching: bruger et globalt servernetværk til at levere cachet indhold fra en server tæt på brugeren.',
          ],
        },
        { type: 'heading', text: 'Tre anbefalede caching-plugins til WooCommerce' },
        {
          type: 'list',
          items: [
            'WP Rocket: en betalt løsning kendt for brugervenlighed og avancerede funktioner som side-caching og databaseoptimering, kompatibel med WooCommerce.',
            'W3 Super Cache: et gratis plugin med omfattende caching på flere niveauer, inklusive side, database og objekt-håndtering, samt CDN-integration.',
            'LiteSpeed Cache: et kraftfuldt gratis plugin, der er optimalt til webshops hostet på LiteSpeed-servere, med avanceret caching og WooCommerce-specifikke indstillinger.',
          ],
        },
        { type: 'heading', text: 'Opsummering' },
        {
          type: 'paragraph',
          text: 'Caching forbedrer effektivt hastigheden på din WooCommerce-webshop, reducerer serverbelastningen og styrker din SEO. Ved at gemme statiske HTML-kopier af dine sider undgår du gentagne PHP-processer og databaseopslag, hvilket giver hurtigere og mere responsive oplevelser for dine brugere. Implementér caching med et af de anbefalede plugins for at se en mærkbar forbedring i både performance og placering i søgeresultaterne.',
        },
      ],
    },
  ],
  en: [
    {
      slug: 'yahoo-finance-google-sheets',
      title: 'Yahoo Finance stock prices in Google Sheets',
      date: 'Mar 8, 2025',
      category: 'Automation',
      excerpt:
        'Pulling stock prices into Google Sheets is a great way to automate financial data collection, and the Yahoo Finance API is a popular choice since it offers easy access to stock quotes...',
      sections: [
        {
          type: 'paragraph',
          text: "Google Apps Script is a JavaScript-based scripting language for automating and customizing Google Workspace apps like Google Sheets. With it, you can build custom functions, call external APIs, and automate data workflows. In this post I'll show how to use Apps Script to pull stock prices from the Yahoo Finance API straight into a spreadsheet.",
        },
        { type: 'heading', text: 'Step by step' },
        {
          type: 'list',
          items: [
            'Create a new Google Sheet where the stock prices should appear.',
            'Click "Extensions" in the menu and select "Apps Script" to open the editor.',
            'Paste in the YFinance function (see the code below).',
            'Save the project — for example under the name "StockImporter".',
          ],
        },
        { type: 'code', code: YFINANCE_CODE, language: 'javascript' },
        {
          type: 'paragraph',
          text: "The function takes two parameters: quote is the stock's ticker symbol (e.g. \"AAPL\" for Apple), and datatype is either 'price' for the stock price or 'currency' for the currency it trades in.",
        },
        { type: 'heading', text: 'Using the function' },
        {
          type: 'paragraph',
          text: 'Back in your spreadsheet, you can now call the function directly in a cell:',
        },
        { type: 'code', code: '=YFinance("AAPL", "price")\n=YFinance("AAPL", "currency")', language: 'text' },
        { type: 'heading', text: 'Rate limits' },
        {
          type: 'paragraph',
          text: "The Yahoo Finance API is publicly available but has hourly rate limits. If your spreadsheet updates many stocks at once or very frequently, you can hit those limits.",
        },
        { type: 'heading', text: 'Conclusion' },
        {
          type: 'paragraph',
          text: 'Google Apps Script combined with the Yahoo Finance API makes it easy to pull financial data straight into Google Sheets — saving time and making it simple to track the market without manual lookups.',
        },
      ],
    },
    {
      slug: 'vies-eu-vat-validering',
      title:
        'Automatic validation of EU VAT numbers via VIES: A case with ERP integration and sign-up optimization',
      date: 'Jan 17, 2025',
      category: 'Automation, Optimization',
      excerpt:
        'When it comes to optimizing workflows and ensuring compliance in businesses, automation can play a decisive role. I recently helped a client develop and implement a...',
      sections: [
        {
          type: 'paragraph',
          text: "When it comes to optimizing workflows and ensuring compliance in businesses, automation can play a decisive role. I recently helped a client develop and implement a system that automatically validates their customers' EU VAT numbers via VIES (the VAT Information Exchange System). The system is fully integrated with their e-conomic ERP solution and their website's sign-up form.",
        },
        { type: 'heading', text: "The client's challenge" },
        {
          type: 'paragraph',
          text: 'Auto-Mow ApS faced several challenges in their existing workflow:',
        },
        {
          type: 'list',
          items: [
            'Time-consuming validation: VAT numbers were checked manually, which took time and left room for errors.',
            'Compliance risk: invalid VAT numbers could cause issues with EU VAT reporting.',
            'User experience: new customers faced unnecessary delays during sign-up while VAT numbers were checked manually.',
          ],
        },
        { type: 'heading', text: 'The solution: automatic VAT validation' },
        {
          type: 'list',
          items: [
            'VIES API integration: VIES is an EU platform that validates VAT numbers across all member states (Switzerland has an equivalent system, UID).',
            "ERP integration with e-conomic: validated VAT numbers are updated in the company's ERP system immediately, so new customers and their VAT details are automatically registered and synced.",
            "Real-time validation in the sign-up form: the VAT number is validated instantly, and the customer gets immediate feedback if something's wrong.",
          ],
        },
        { type: 'heading', text: 'Technical implementation' },
        {
          type: 'list',
          items: [
            'Backend: a microservice built in C# with REST API endpoints; communication with VIES happens via SOAP.',
            "e-conomic integration: e-conomic's REST API is used to create and update customer profiles and VAT details.",
            'Frontend: an AJAX-based validation flow in the sign-up form sends the VAT number to the backend and shows the result instantly.',
            "Error handling: if the VIES service is unavailable, the customer is told validation couldn't complete, and the data is stored temporarily for manual follow-up.",
          ],
        },
        { type: 'heading', text: 'Results' },
        {
          type: 'list',
          items: [
            'Time savings: automatic validation removed the need for manual checks.',
            'Improved compliance: only valid VAT numbers get registered.',
            'Better user experience: new customers breeze through sign-up.',
            'Efficient data sync: customer data updates automatically via the e-conomic integration.',
          ],
        },
        { type: 'heading', text: 'Learnings and future possibilities' },
        {
          type: 'paragraph',
          text: 'This case shows how automation and integration can simplify complex processes and add value at multiple levels. Going forward, the solution could be extended with batch validation of existing customers, automatic notifications if a VAT number becomes invalid, and multi-language support for international customers.',
        },
        {
          type: 'paragraph',
          text: 'This project was built for Auto-Mow ApS, which — with a large international customer base — spent significant resources ensuring EU VAT numbers were in order. Since implementation, it now runs smoothly. Facing similar challenges in your business? Feel free to reach out — together we can build a solution that fits your needs.',
        },
      ],
    },
    {
      slug: 'wordpress-caching-seo',
      title: 'Optimizing WordPress speed and SEO with caching',
      date: 'Jan 14, 2025',
      category: 'WooCommerce, SEO',
      excerpt:
        "If you run a WooCommerce store, you've probably already noticed how important it is for your shop to load fast and run smoothly. Speed isn't just critical for a good...",
      sections: [
        {
          type: 'paragraph',
          text: "If you run a WooCommerce store, you've probably already noticed how important it is for your shop to load fast and run smoothly. Speed isn't just critical for a good user experience — it also affects your ranking in Google's search results. One of the most effective ways to improve speed is caching.",
        },
        { type: 'heading', text: 'What is caching?' },
        {
          type: 'paragraph',
          text: "Caching is a technique that stores a temporary copy of your store's data so it can be delivered faster to visitors. Without caching, the server has to run PHP scripts and query the database every time a page loads — which takes time and resources. With caching, the server instead stores a static HTML version of your pages, which can be delivered directly the next time a visitor loads the same page.",
        },
        { type: 'heading', text: 'Why does caching matter for speed and SEO?' },
        {
          type: 'list',
          items: [
            'Better speed and user experience: fast stores keep visitors engaged and reduce bounce rate — increasing the odds they complete a purchase.',
            'Good for SEO: Google and other search engines rank faster sites higher, since speed is an important ranking factor.',
            'Less server load: fewer PHP processes and database queries relieve your server — especially useful during traffic spikes.',
          ],
        },
        { type: 'heading', text: 'Types of caching' },
        {
          type: 'list',
          items: [
            "Browser caching: stores static assets like images, CSS, and JavaScript in the visitor's browser.",
            'Server-side caching: stores static HTML versions of your pages on the server.',
            "CDN caching: uses a global server network to deliver cached content from a server close to the visitor.",
          ],
        },
        { type: 'heading', text: 'Three recommended caching plugins for WooCommerce' },
        {
          type: 'list',
          items: [
            'WP Rocket: a premium solution known for ease of use and advanced features like page caching and database optimization, compatible with WooCommerce.',
            'W3 Super Cache: a free plugin with extensive caching options at multiple levels, including page, database, and object caching, plus CDN integration.',
            'LiteSpeed Cache: a powerful free plugin ideal for stores hosted on LiteSpeed servers, with advanced caching and WooCommerce-specific settings.',
          ],
        },
        { type: 'heading', text: 'Summary' },
        {
          type: 'paragraph',
          text: "Caching effectively improves your WooCommerce store's speed, reduces server load, and strengthens your SEO. By storing static HTML copies of your pages, you avoid repeated PHP processes and database queries, delivering faster, more responsive experiences for visitors. Implement caching with one of the recommended plugins to see a noticeable improvement in both performance and search rankings.",
        },
      ],
    },
  ],
};
