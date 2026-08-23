# IMPLEMENTATION_SERVICES: Αναδιάρθρωση Μενού & Υπηρεσιών

Αυτό το σχέδιο υλοποίησης (implementation plan) περιγράφει τις αλλαγές για την αφαίρεση της σελίδας "Φυσικοθεραπεία", τη διατήρηση μόνο της επιλογής "Υπηρεσίες" στο κεντρικό μενού, και την προσθήκη ενός hover dropdown μενού για τις 4 εξειδικευμένες υπηρεσίες.

---

## 1. Σύνοψη Αλλαγών

1. **Κατάργηση της Σελίδας Φυσικοθεραπείας**: 
   - Αφαίρεση του component `<PhysiotherapyPage />` από το [src/App.tsx](file:///Users/michael/CODING%20LESSONS/ermeion-website/src/App.tsx).
   - Αφαίρεση των σχετικών references στο state (`currentPage === 'physiotherapy'`) και στο hash listener routing (`#physiotherapy`).
2. **Υλοποίηση Hover Dropdown στο Desktop Navigation**:
   - Το μενού "Υπηρεσίες" θα μετατραπεί σε hover dropdown.
   - Κατά το hover, θα εμφανίζεται ένα premium animated πλαίσιο (με σκιές, στρογγυλεμένες γωνίες και fade/slide animation) με τις 4 επιλογές:
     * **Μέθοδος McKenzie** (`#mckenzie`)
     * **Tecar Therapy** (`#tecar`)
     * **Θεραπεία & Πρόληψη Σπονδυλικού Πόνου** (`#spine-pain`)
     * **Θεραπευτική Άσκηση** (`#exercise`)
3. **Υλοποίηση Accordion / Click Menu στο Mobile Navigation**:
   - Επειδή στις κινητές συσκευές δεν υπάρχει η έννοια του hover, η επιλογή "Υπηρεσίες" στο mobile menu θα λειτουργεί ως accordion (με click) που θα ανοίγει τις 4 επιλογές με slide-down εφέ.
4. **Δημιουργία Νέων Σελίδων Υπηρεσιών**:
   - Θα δημιουργηθεί μια δομή για την προβολή των 4 αυτών σελίδων. Μπορούμε να χρησιμοποιήσουμε ένα δυναμικό component `<ServicePage serviceId={...} />` ή ξεχωριστά components με πλούσιο, επιστημονικά τεκμηριωμένο περιβάλλον και εικόνες για την κάθε υπηρεσία.

---

## 2. Λεπτομέρειες Υλοποίησης

### A. Αλλαγές στο State & Routing ([src/App.tsx](file:///Users/michael/CODING%20LESSONS/ermeion-website/src/App.tsx))

Θα ενημερώσουμε το routing state του `App` ώστε να υποστηρίζει τις νέες σελίδες:

```typescript
// Νέο Page Type
type PageType = 'home' | 'mckenzie' | 'tecar' | 'spine-pain' | 'exercise';

// Στο App Component:
const [currentPage, setCurrentPage] = useState<PageType>('home');

useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash === '#mckenzie') {
      setCurrentPage('mckenzie');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (hash === '#tecar') {
      setCurrentPage('tecar');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (hash === '#spine-pain') {
      setCurrentPage('spine-pain');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (hash === '#exercise') {
      setCurrentPage('exercise');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setCurrentPage('home');
    }
  };

  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
  return () => window.removeEventListener('hashchange', handleHashChange);
}, []);
```

### B. Ανασχεδιασμός του `Navbar` Component

1. **Desktop Dropdown**:
   - Χρήση `useState` για tracking του hover state (με timeout για αποφυγή απότομου κλεισίματος - hover intent).
   - Ενσωμάτωση Framer Motion (`AnimatePresence` + `motion.div`) για ομαλή είσοδο του dropdown menu.
   - Σχεδιασμός: Minimal card με `border border-gray-100`, `shadow-xl`, και `backdrop-blur-md` για luxury/premium αίσθηση.
   - Κάθε στοιχείο της λίστας θα έχει hover εφέ (μετάβαση χρώματος, ελαφρύ slide-right).

2. **Mobile Accordion**:
   - Η επιλογή "Υπηρεσίες" θα εμφανίζει ένα Chevron icon δίπλα της.
   - Κάνοντας κλικ, θα επεκτείνεται το μενού προς τα κάτω αποκαλύπτοντας τις 4 υπο-υπηρεσίες.

```typescript
const servicesList = [
  { id: 'mckenzie', label: 'Μέθοδος McKenzie', href: '#mckenzie' },
  { id: 'tecar', label: 'Tecar Therapy', href: '#tecar' },
  { id: 'spine-pain', label: 'Θεραπεία & Πρόληψη Σπονδυλικού Πόνου', href: '#spine-pain' },
  { id: 'exercise', label: 'Θεραπευτική Άσκηση', href: '#exercise' }
];
```

### C. Δημιουργία των Σελίδων των 4 Υπηρεσιών (Προσωρινά Placeholders)

Σε αυτή τη φάση, οι 4 νέες σελίδες υπηρεσιών θα δημιουργηθούν ως απλά placeholders/σκελετοί (basic pages) με έναν απλό τίτλο και κουμπί επιστροφής. Δεν θα περιλαμβάνουν ακόμα αναλυτικό κείμενο, εικόνες ή εξειδικευμένο design.

Θα αντικαταστήσουμε το `<PhysiotherapyPage />` με ένα ευέλικτο component `<ServicePage serviceId={currentPage} />` (ή 4 απλά components) που θα εμφανίζει προσωρινό περιεχόμενο:
* **Μέθοδος McKenzie**
* **Tecar Therapy**
* **Θεραπεία & Πρόληψη Σπονδυλικού Πόνου**
* **Θεραπευτική Άσκηση**

Αφού ολοκληρωθεί η διαγραφή της Φυσικοθεραπείας και η λειτουργία του dropdown μενού, θα συζητήσουμε και θα υλοποιήσουμε το τελικό design, το περιεχόμενο (copy) και τη διάταξη εικόνων για την κάθε υπηρεσία ξεχωριστά.

---

## 3. Σχέδιο Επαλήθευσης (Verification Plan)

### Αυτοματοποιημένοι Έλεγχοι
- Εκτέλεση `npm run build` για την επιβεβαίωση ότι δεν υπάρχουν TypeScript errors ή σφάλματα στο bundling μετά την αφαίρεση/προσθήκη components.

### Χειροκίνητοι Έλεγχοι (Manual Verification)
1. **Έλεγχος Desktop**:
   - Hover πάνω από το "Υπηρεσίες". Επιβεβαίωση της σωστής εμφάνισης του dropdown.
   - Μετακίνηση του κέρσορα εκτός. Επιβεβαίωση ότι το dropdown κλείνει ομαλά.
   - Κλικ σε κάθε υπηρεσία. Επιβεβαίωση ότι η σελίδα αλλάζει σωστά, γίνεται scroll στην κορυφή, και αλλάζει το URL hash.
2. **Έλεγχος Mobile**:
   - Άνοιγμα του burger menu.
   - Κλικ στο "Υπηρεσίες". Επιβεβαίωση του slide down/accordion εφέ.
   - Κλικ σε sub-link. Επιβεβαίωση αλλαγής σελίδας και κλεισίματος του mobile menu.
3. **Έλεγχος Αφαίρεσης**:
   - Προσπάθεια πλοήγησης στο `#physiotherapy`. Επιβεβαίωση ότι ανακατευθύνει στην αρχική σελίδα (ή δεν προκαλεί σφάλμα).
