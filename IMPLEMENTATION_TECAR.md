# IMPLEMENTATION_TECAR: TECAR Therapy Page Layout Mapping

This implementation plan details how the exact, unmodified Greek copy provided for the **TECAR Therapy** page maps into the approved design system and layout template. No copy will be shortened, translated, or rephrased.

---

## 1. Page Component Mapping

Since copy is provided for specific sections, we will implement only the active content blocks that map directly into our visual template.

### A. Hero Section (Technology & Energy)
*   **Visual Elements**: 
    *   Left side: Breadcrumb (`Υπηρεσίες / TECAR Therapy`), main page title "TECAR Therapy", and copy tag.
    *   Right side: Close-up professional photography representing TECAR electrode application to muscle tissue, highlighted by soft radial orange-to-blue glow backdrops representing cellular warmth energy transfer.
*   **Active Greek Copy**:
    > "Στοχευμένες Ραδιοσυχνότητες."

### B. Core Philosophy & Mechanical Concept (Introductory Definition)
*   **Visual Elements**:
    *   Large narrative style card layout utilizing a light grey background with a strong blue vertical highlight accent bar.
*   **Active Greek Copy**:
    > "Η θεραπεία TECAR είναι ουσιαστικά ο συνδυασμός της ικανότητας του θεραπευτή στους χειρισμούς και της επιλεκτικής στόχευσης ιστού με ραδιοσυχνότητες."

### C. Mechanism of Action (Thermic/Athermic Visualization)
*   **Visual Elements**:
    *   Split-column container. Left column contains narrative text. Right column displays a dynamic CSS radial thermal gradient block symbolizing tissue penetration depth.
*   **Active Greek Copy**:
    > "**Μηχανισμός Δράσης**
    > To TECAR παράγει ένα υψηλής συχνότητας ηλεκτρομαγνητικό πεδίο που διεισδύει στο ανθρώπινο σώμα και προκαλεί εν τω βάθη υπερθερμία ώστε να ανακουφίσει το μυϊκό πόνο και τα σημεία πυροδότησής του αλλά και να βοηθήσει στην ταχύτερη αναγέννηση και επούλωση των μυών. Οι στοχευμένες ραδιοσυχνότητες χρησιμοποιούνται και για θεραπείες χωρίς θερμότητα για την αντιμετώπιση οιδημάτων σε οξεία φάση."

### D. Focus Areas & Indications (Acute Phases Card Grid)
*   **Visual Elements**:
    *   Introduction text block followed by a 4-card interactive grid representing clinical indications. 
    *   Each card features a specific outline icon and border transition triggers on hover.
*   **Active Greek Copy (Intro)**:
    > "Στο ΕΡΜΕΙΟΝ, διαθέτουμε εξοπλισμό τελευταίας τεχνολογίας από την BTL, ο όποιος είναι ο σύμμαχός μας, σε οξείες φάσεις όπως:"
*   **Active Greek Copy (Indication Cards)**:
    *   **Card 1**: "Μετά από χειρουργεία μηνίσκου, πρόσθιου χιαστού, μερικής δισκεκτομής κλπ"
    *   **Card 2**: "Οξεία οσφυαλγία"
    *   **Card 3**: "Αυχεναλγία"
    *   **Card 4**: "Μυϊκές θλάσεις"

### E. Related Services Cross-Links
*   **Visual Elements**: 3 small-format navigation blocks.
*   **Links**:
    *   Μέθοδος McKenzie (`#mckenzie`)
    *   Θεραπεία & Πρόληψη Σπονδυλικού Πόνου (`#spine-pain`)
    *   Θεραπευτική Άσκηση (`#exercise`)

### F. End-of-Page Call to Action
*   **Visual Elements**: Dynamic callout banner.
*   **Service-Specific Copy**:
    *   Header: "Ξεκινήστε τη θεραπεία TECAR σήμερα"
    *   Subtext: "Επιταχύνετε την αποκατάσταση των ιστών σας με την τεχνολογία BTL."
    *   Buttons: "Κλείστε Ραντεβού Online" and "Επικοινωνήστε Τηλεφωνικώς"

---

## 2. Implementation Steps

1.  **Create Section Components**: Build the individual layout sections inside a newly generated component `TecarPage.tsx`.
2.  **Asset Sourcing & Styling**: Configure CSS radial animations symbolizing high-frequency electromagnetic fields and deep tissue hyperthermia.
3.  **App Routing Integration**: Replace the temporary Tecar page placeholder in `src/App.tsx` with the completed page layout.
