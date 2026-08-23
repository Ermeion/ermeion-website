# IMPLEMENTATION_SPINE_PAIN: Θεραπεία & Πρόληψη Σπονδυλικού Πόνου Layout Mapping

This implementation plan details how the exact, unmodified Greek copy provided for the **Θεραπεία & Πρόληψη Σπονδυλικού Πόνου** (Spine Pain Treatment & Prevention) page maps into the approved design system and layout template. No copy will be shortened, translated, or rephrased (including the duplicate word "αντιμετωπίζουμε αντιμετωπίζουμε").

---

## 1. Page Component Mapping

Since copy is provided for specific sections, we will implement only the active content blocks that map directly into our visual template.

### A. Hero Section (Anatomy & Restoration)
*   **Visual Elements**: 
    *   Left side: Breadcrumb (`Υπηρεσίες / Θεραπεία & Πρόληψη Σπονδυλικού Πόνου`), main page title "Θεραπεία & Πρόληψη Σπονδυλικού Πόνου", and copy.
    *   Right side: Close-up professional photography representing vertebral column assessment, paired with a custom anatomical SVG model showing postural lines and load-bearing curves.
*   **Active Greek Copy**:
    > "Στο ΕΡΜΕΙΟΝ, αντιμετωπίζουμε αντιμετωπίζουμε τον σπονδυλικό πόνο με τρόπο σύγχρονο, εξατομικευμένο και βασισμένο σε επιστημονικά τεκμηριωμένες πρακτικές."

### B. Indications & Focus Areas (Who it is for - Card Grid)
*   **Visual Elements**:
    *   An introductory text line followed by 5 interactive symptom cards representing clinical targets.
    *   Each card features diagnostic outlines of the spine highlighting specific regions (cervical, thoracic, lumbar).
*   **Active Greek Copy (Intro)**:
    > "Η φυσικοθεραπεία ενδείκνυται σε άτομα με:"
*   **Active Greek Copy (Indication Cards)**:
    *   **Card 1**: "Οσφυαλγία (πόνος στη μέση) — με ή χωρίς ισχιαλγία και νευρολογικό έλλειμμα"
    *   **Card 2**: "Πόνο στη μέση ή τον αυχένα κατά την διάρκεια ασκήσεων ή παλιών τραυματισμών στο γυμναστήριο."
    *   **Card 3**: "Αυχεναλγία (πόνος στον αυχένα) — με ή χωρίς πόνο στον ώμο/χέρι και νευρολογικό έλλειμμα"
    *   **Card 4**: "Θωρακικό πόνο"
    *   **Card 5**: "Επώδυνες κήλες μεσοσπονδυλίου δίσκου ή άλλες εκφυλιστικές αλλοιώσεις"

### C. Core Philosophy & Mechanical Concept (Evidence-Based Practices)
*   **Visual Elements**:
    *   Splitting the practice items into descriptive blocks. Left side shows manual/progressive loading therapies, right side shows technological complements.
*   **Active Greek Copy (Intro)**:
    > "Εφαρμόζουμε επιστημονικά τεκμηριωμένες πρακτικές όπως:"
*   **Active Greek Copy (Practice Bullets/Blocks)**:
    *   **Block 1**: "Mέθοδος McKenzie - Μηχανική διάγνωση και θεραπεία"
    *   **Block 2**: "Σταδιακή έκθεση στα φορτία και τις δραστηριότητες"
    *   **Block 3**: "Νευρομυϊκή επανεκπαίδευση"
    *   **Block 4**: "Στρατηγικές αυτοδιαχείρισης και πρόληψης υποτροπών"
    *   **Block 5 (Tech Complement)**: "Και όταν ενδείκνυται, συνήθως στην οξεία φάση, χρησιμοποιούμε θεραπευτικά φυσικά μέσα ηλεκτροθεραπείας όπως TECAR - στοχευμένες ραδιοσυχνότητες."

### D. Related Services Cross-Links
*   **Visual Elements**: 3 small-format navigation blocks.
*   **Links**:
    *   Μέθοδος McKenzie (`#mckenzie`)
    *   TECAR Therapy (`#tecar`)
    *   Θεραπευτική Άσκηση (`#exercise`)

### E. End-of-Page Call to Action
*   **Visual Elements**: Dynamic callout banner.
*   **Service-Specific Copy**:
    *   Header: "Απαλλαγείτε από τον Σπονδυλικό Πόνο"
    *   Subtext: "Σχεδιάστε το δικό σας εξατομικευμένο πλάνο αποκατάστασης σήμερα."
    *   Buttons: "Κλείστε Ραντεβού Online" and "Επικοινωνήστε Τηλεφωνικώς"

---

## 2. Implementation Steps

1.  **Create Section Components**: Build the individual layout sections inside a newly generated component `SpinePainPage.tsx`.
2.  **Asset Sourcing & Styling**: Setup SVG spine graphs displaying targeted loads on lumbar/cervical areas.
3.  **App Routing Integration**: Replace the temporary Spine Pain page placeholder in `src/App.tsx` with the completed page layout.
