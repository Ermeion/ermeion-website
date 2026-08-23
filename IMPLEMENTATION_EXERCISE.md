# IMPLEMENTATION_EXERCISE: Θεραπευτική Άσκηση Layout Mapping

This implementation plan details how the exact, unmodified Greek copy provided for the **Θεραπευτική Άσκηση** (Therapeutic Exercise) page maps into the approved design system and layout template. No copy will be shortened, translated, or rephrased.

---

## 1. Page Component Mapping

Since copy is provided for specific sections, we will implement only the active content blocks that map directly into our visual template.

### A. Hero Section (Anatomy & Motion)
*   **Visual Elements**: 
    *   Left side: Breadcrumb (`Υπηρεσίες / Θεραπευτική Άσκηση`), main page title "Θεραπευτική Άσκηση", and copy.
    *   Right side: Close-up professional photography of load-based training (e.g. resistance band pull, gym ball stabilization) combined with dynamic outline SVG range-of-motion (ROM) degree arcs showing functional loading vectors.
*   **Active Greek Copy**:
    > "Είναι ένα από τα πιο ισχυρά θεραπευτικά εργαλεία για την αποκατάσταση, την πρόληψη και τη διατήρηση της λειτουργικότητας. Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων."

### B. Core Philosophy & Mechanical Concept (Objectives & Planning)
*   **Visual Elements**:
    *   Dual columns highlighting "Target Areas" vs. "Planning Foundations".
    *   Left Column: Focuses on exercise objectives (pain reduction, strength, endurance).
    *   Right Column: Focuses on design principles (clinical history, limitations, day-to-day needs, goals).
*   **Active Greek Copy (Objectives)**:
    > "Η θεραπευτική άσκηση στοχεύει: στη μείωση του πόνου, τη βελτίωση της αντοχής και της λειτουργικότητας, μέσω της στοχευμένης ενδυνάμωσης και στην πρόληψη υποτροπών."
*   **Active Greek Copy (Foundations)**:
    > "Σχεδιάζεται πάντα με βάση: την κλινική εικόνα του κάθε ατόμου ξεχωριστά, τις δυνατότητες και τους περιορισμούς του, τις ανάγκες της καθημερινότητάς του και τους προσωπικούς του στόχους."

### C. Focus Areas & Indications (Indication Grid)
*   **Visual Elements**:
    *   Introduction text line followed by an structured 11-card grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with multi-line layout on mobile).
    *   Each card features a tailored movement-based outline icon.
*   **Active Greek Copy (Intro)**:
    > "Ενδείκνυται για:"
*   **Active Greek Copy (Indication Cards)**:
    *   **Card 1**: "Μυοσκελετικές παθήσεις όπως οσφυαλγία, αυχενικό σύνδρομο, τενοντοπάθειες κλπ"
    *   **Card 2**: "Μετεγχειρητική αποκατάσταση"
    *   **Card 3**: "Αποκατάσταση μετά από τραυματισμούς"
    *   **Card 4**: "Οστεοαρθρίτιδα, ρευματοειδής αρθρίτιδα και εκφυλιστικές παθήσεις"
    *   **Card 5**: "Αυτοάνοσα νοσήματα που επηρεάζουν το μυοσκελετικό"
    *   **Card 6**: "Ενίσχυση σωματικής ικανότητας σε χρόνιο πόνο ή καθιστικό τρόπο ζωής"
    *   **Card 7**: "Πρόληψη πτώσεων σε ηλικιωμένους"
    *   **Card 8**: "Αθλητική αποκατάσταση και επανένταξη στη δραστηριότητα"
    *   **Card 9**: "Σακχαρώδης διαβήτης"
    *   **Card 10**: "Οστεοπόρωση"
    *   **Card 11**: "Παχυσαρκία"

### D. Related Services Cross-Links
*   **Visual Elements**: 3 small-format navigation blocks.
*   **Links**:
    *   Μέθοδος McKenzie (`#mckenzie`)
    *   TECAR Therapy (`#tecar`)
    *   Θεραπεία & Πρόληψη Σπονδυλικού Πόνου (`#spine-pain`)

### E. End-of-Page Call to Action
*   **Visual Elements**: Dynamic callout banner.
*   **Service-Specific Copy**:
    *   Header: "Ξεκινήστε το Θεραπευτικό σας Πρόγραμμα"
    *   Subtext: "Επαναφέρετε τη λειτουργικότητα του σώματός σας με επιστημονική καθοδήγηση."
    *   Buttons: "Κλείστε Ραντεβού Online" and "Επικοινωνήστε Τηλεφωνικώς"

---

## 2. Implementation Steps

1.  **Create Section Components**: Build the individual layout sections inside a newly generated component `ExercisePage.tsx`.
2.  **Asset Sourcing & Styling**: Setup SVG movement path/ROM curves.
3.  **App Routing Integration**: Replace the temporary Therapeutic Exercise page placeholder in `src/App.tsx` with the completed page layout.
