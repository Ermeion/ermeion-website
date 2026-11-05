# Σχέδιο Υλοποίησης: Πλήρης Αναβάθμιση Metadata & Social Share Preview (Ermeion Website)

> **Ημερομηνία:** Νοέμβριος 2026  
> **Στόχος:** Αντικατάσταση των προεπιλεγμένων bolt.new previews με επίσημο, υψηλής αισθητικής snapshot/social card του Ερμείον, καθώς και δημιουργία ολοκληρωμένων, σύγχρονων metadata (Open Graph, Twitter Cards, Schema.org JSON-LD, Favicons, Dynamic SPA SEO).

---

## 1. Ανάλυση Υφιστάμενης Κατάστασης (Audit)

Στο αρχείο `index.html` υπάρχουν αυτή τη στιγμή:
* **Bolt Placeholder Image:**  
  `<meta property="og:image" content="https://bolt.new/static/og_default.png">` και `<meta name="twitter:image" content="https://bolt.new/static/og_default.png">`  
  *Συνέπεια:* Όταν κοινοποιείται ο σύνδεσμος στο Viber, WhatsApp, Facebook, LinkedIn ή Twitter, εμφανίζεται το λογότυπο/banner του Bolt αντί για το φυσικοθεραπευτήριο Ερμείον.
* **Vite Default Favicon:**  
  `<link rel="icon" type="image/svg+xml" href="/vite.svg" />`  
  *Συνέπεια:* Στον browser tab εμφανίζεται το default εικονίδιο του Vite και όχι το επίσημο σύμβολο του Ερμείον.
* **Ελλιπή Social & SEO Tags:**  
  Απουσιάζουν βασικά tags όπως: `og:url`, `og:type`, `og:site_name`, `og:locale`, διαστάσεις εικόνας (`og:image:width`, `og:image:height`), `twitter:title`, `twitter:description`, καθώς και canonical URL.
* **Απουσία Schema.org Structured Data (JSON-LD):**  
  Δεν υπάρχει δομημένη πληροφορία για τη Google (Local Business / Physiotherapist) σχετικά με διεύθυνση (Παπάφη 92), τηλέφωνα επικοινωνίας, ωράριο λειτουργίας και υπηρεσίες.
* **Στατικότητα SPA (Single Page Application):**  
  Οι επιμέρους σελίδες υπηρεσιών (`/ypiresies/McKenzie`, `/ypiresies/tecar`, κ.λπ.) μοιράζονται τον ίδιο τίτλο και περιγραφή με την αρχική σελίδα.

---

## 2. Στρατηγική Snapshot & Social Share Image (1200x630)

Για να εμφανίζεται άρτια η προεπισκόπηση σε όλες τις πλατφόρμες (Viber, WhatsApp, Facebook, iMessage, LinkedIn, X):

1. **Διαστάσεις & Format:**
   * Ανάλυση: **1200 × 630 px** (αναλογία 1.91:1, το χρυσό πρότυπο Open Graph).
   * Format: Υψηλής ποιότητας WebP / PNG / JPG βελτιστοποιημένο (< 300 KB) για άμεση φόρτωση από bots (π.χ. Viber crawlers).
2. **Σύνθεση του Card:**
   * Snapshot του Hero Section / Ιατρείου του Ερμείον με διακριτικό dark/navy gradient overlay στα χρώματα του brand (`#004aad`, `#0d0d1a`).
   * Το επίσημο λευκό λογότυπο **ΕΡΜΕΙΟΝ**.
   * Υπότιτλος & Tagline: *"Σύγχρονο Φυσικοθεραπεία • Χωρίς παραπεμπτικό • Χωρίς αναμονή • Θεσσαλονίκη (Παπάφη 92)"*.
   * Πιστοποιήσεις / Highlights (McKenzie MDT, Tecar, κ.ά.).
3. **Διαδικασία Δημιουργίας Snapshot:**
   * Λήψη ακριβούς screenshot / σύνθεσης από τα assets του project (ή εκτέλεση τοπικού build/script snapshot) και εξαγωγή του τελικού αρχείου στο `public/og-image.jpg` (και `public/og-image.png`).

---

## 3. Αναλυτικός Σχεδιασμός Υλοποίησης (Βήμα-προς-Βήμα)

### Βήμα 1: Favicons & Brand Identity
* Δημιουργία / διασύνδεση του favicon με το λογότυπο του Ερμείον (`/ermeion-main-logo.svg` ή ειδικό favicon).
* Προσθήκη `apple-touch-icon` για οθόνες αφής iOS / Safari shortcuts.
* Ορισμός `theme-color` (`#004aad`) για τη γραμμή εργαλείων σε κινητά (Safari iOS, Chrome Android).

### Βήμα 2: Πλήρης Εμπλουτισμός `index.html` με Open Graph & Twitter Cards
* **Core SEO:**
  * Title: `Ερμείον — Σύγχρονη Φυσικοθεραπεία στη Θεσσαλονίκη`
  * Description: `Ιδιωτικό φυσικοθεραπευτήριο στη Θεσσαλονίκη (Παπάφη 92). Εξειδικευμένη αποκατάσταση, Μέθοδος McKenzie, Tecar Therapy & Θεραπευτική Άσκηση. Χωρίς αναμονή.`
  * Canonical Link: `<link rel="canonical" href="https://ermeion.gr" />`
  * Robots meta: `index, follow`
* **Open Graph (Viber, WhatsApp, Facebook, LinkedIn):**
  * `og:type` = `website`
  * `og:site_name` = `Ερμείον Φυσικοθεραπεία`
  * `og:title` = `Ερμείον — Σύγχρονη Φυσικοθεραπεία στη Θεσσαλονίκη`
  * `og:description` = `Εξειδικευμένη αποκατάσταση, Μέθοδος McKenzie, Tecar Therapy & Θεραπευτική Άσκηση. Χωρίς παραπεμπτικό, χωρίς αναμονή.`
  * `og:url` = `https://ermeion.gr/` (ή το τελικό domain)
  * `og:locale` = `el_GR`
  * `og:image` = `https://ermeion.gr/og-image.jpg`
  * `og:image:secure_url` = `https://ermeion.gr/og-image.jpg`
  * `og:image:type` = `image/jpeg`
  * `og:image:width` = `1200`
  * `og:image:height` = `630`
  * `og:image:alt` = `Ερμείον — Φυσικοθεραπευτήριο Θεσσαλονίκη`
* **Twitter / X Card:**
  * `twitter:card` = `summary_large_image`
  * `twitter:title`, `twitter:description`, `twitter:image`

### Βήμα 3: Schema.org JSON-LD (Τοπική Επιχείρηση & Υγεία)
Ενσωμάτωση δομημένων δεδομένων τύπου `Physiotherapy` / `MedicalBusiness` / `LocalBusiness`:
* **Όνομα:** ΕΡΜΕΙΟΝ Φυσικοθεραπευτήριο
* **Διεύθυνση:** Οδός Παπάφη 92, Θεσσαλονίκη, Τ.Κ. 544 53
* **Τηλέφωνα:** `+30 2310 940100`, `+30 698 840 4234`
* **Email:** `ermeion@outlook.com`
* **Ωράριο λειτουργίας:** Δευτέρα – Παρασκευή (09:00 - 14:00, 16:00 - 21:00)
* **Social links (sameAs):** Instagram & Facebook προφίλ
* **Γεωγραφικές συντεταγμένες (GeoCoordinates):** Θεσσαλονίκη (περιοχή Παπάφη / Κάτω Τούμπα)
* **Ιατρικές Υπηρεσίες:** Μέθοδος McKenzie, Tecar Therapy, Θεραπευτική Άσκηση, Σπονδυλικός Πόνος.

### Βήμα 4: Δυναμικά Metadata ανά Σελίδα (SPA Route SEO)
Δημιουργία ελαφρού μηχανισμού (π.χ. component `<SEO title="..." description="..." path="..." />`):
* Όταν ο χρήστης πηγαίνει στο `/ypiresies/McKenzie`:
  * Title: `Μέθοδος McKenzie | Ερμείον Φυσικοθεραπεία`
  * Description: `Μηχανική Διάγνωση και Θεραπεία (MDT) McKenzie για οσφυαλγία, αυχεναλγία και μυοσκελετικά προβλήματα στο Ερμείον.`
* Αντίστοιχα για `/ypiresies/tecar`, `/ypiresies/spine-pain`, `/ypiresies/exercise`.

### Βήμα 5: Παράμετρος Base Domain (`.env`)
* Προσθήκη μεταβλητής `VITE_SITE_URL` στο `.env` (π.χ. `https://ermeion.gr`) ώστε όλα τα absolute URLs των Open Graph images και canonical tags να ρυθμίζονται δυναμικά χωρίς hardcoding.

---

## 4. Επαλήθευση & Έλεγχοι Ποιότητας (QA Checklist)

1. [ ] **Build Validation:** Έλεγχος με `npm run typecheck` & `npm run build` για μηδενικά σφάλματα.
2. [ ] **Asset Check:** Βεβαίωση ότι το αρχείο `og-image.jpg` υπάρχει στο `public/` και φορτώνει σωστά σε ανάλυση 1200x630.
3. [ ] **Social Debuggers Readiness:**
   * Facebook Sharing Debugger
   * Twitter Card Validator
   * LinkedIn Post Inspector
   * Viber & WhatsApp Link Preview testing
4. [ ] **Google Rich Results Test:** Έγκυρο JSON-LD Schema χωρίς syntax errors ή missing required fields.

---

## 5. Επόμενο Βήμα (Next Steps)
Μόλις επιβεβαιώσετε το παραπάνω πλάνο και μου αναφέρετε το επίσημο domain σας (π.χ. `https://ermeion.gr` ή άλλο), προχωράμε άμεσα στην πλήρη υλοποίηση και παραγωγή του snapshot/banner.

