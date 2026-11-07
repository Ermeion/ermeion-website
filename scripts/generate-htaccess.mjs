import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const htaccessPath = path.resolve(__dirname, '../public/.htaccess');

const redirects = [
  // --- Pages & Main Sections ---
  {
    comment: 'Main services page',
    old: ['υπηρεσίες', '%cf%85%cf%80%ce%b7%cf%81%ce%b5%cf%83%ce%af%ce%b5%cf%82'],
    target: 'https://ermeion.gr/ypiresies'
  },
  {
    comment: 'McKenzie service',
    old: ['mckenzie'],
    target: 'https://ermeion.gr/ypiresies/mckenzie'
  },
  {
    comment: 'Tecar service',
    old: ['tecar'],
    target: 'https://ermeion.gr/ypiresies/tecar'
  },
  {
    comment: 'Therapeutic exercise',
    old: ['therapeytiki-askisi'],
    target: 'https://ermeion.gr/ypiresies/exercise'
  },
  {
    comment: 'Spine and pelvic conditions',
    old: ['παθήσεις-σπονδυλικής-στήλης-λεκάνης', '%cf%80%ce%b1%ce%b8%ce%ae%cf%83%ce%b5%ce%b9%cf%82-%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%b9%ce%ba%ce%ae%cf%82-%cf%83%cf%84%ce%ae%ce%bb%ce%b7%cf%82-%ce%bb%ce%b5%ce%ba%ce%ac%ce%bd%ce%b7%cf%82'],
    target: 'https://ermeion.gr/ypiresies/spine-pain'
  },
  {
    comment: 'Process section',
    old: ['διαδικασία', '%ce%b4%ce%b9%ce%b1%ce%b4%ce%b9%ce%ba%ce%b1%cf%83%ce%af%ce%b1'],
    target: 'https://ermeion.gr/#process'
  },
  {
    comment: 'About owner section',
    old: ['γνωρίστε-με', '%ce%b3%ce%bd%cf%89%cf%81%ce%af%cf%83%cf%84%ce%b5-%ce%bc%ce%b5'],
    target: 'https://ermeion.gr/#about-owner'
  },
  {
    comment: 'FAQ section',
    old: ['συχνές-ερωτήσεις', '%cf%83%cf%85%cf%87%ce%bd%ce%ad%cf%82-%ce%b5%cf%81%cf%89%cf%84%ce%ae%cf%83%ce%b5%ce%b9%cf%82'],
    target: 'https://ermeion.gr/#faq'
  },
  {
    comment: 'Contact section',
    old: ['epikoinonia'],
    target: 'https://ermeion.gr/#contact'
  },
  {
    comment: 'Space / facilities section',
    old: ['χώρος', '%cf%87%cf%8e%cf%81%ce%bf%cf%82'],
    target: 'https://ermeion.gr/#why-choose-us-details'
  },
  {
    comment: 'News / Blog index',
    old: ['νέα', '%ce%bd%ce%ad%ce%b1'],
    target: 'https://ermeion.gr/arthra'
  },
  {
    comment: 'Sample page & ermeion-2',
    old: ['sample-page', 'ermeion-2', 'hello-world'],
    target: 'https://ermeion.gr/'
  },
  {
    comment: 'Services mapping',
    old: [
      'nevromyioskeletiki-apokatastasi',
      'athlitiki-apokatastasi',
      'pnf-2',
      'manual-therapy',
      'ergon-iastm',
      'mulligan-concept-manual-therapy',
      'massage-gun',
      '%ce%bcassage-gun',
      'μassage-gun',
      'αθλητική-αποκατάσταση',
      '%ce%b1%ce%b8%ce%bb%ce%b7%cf%84%ce%b9%ce%ba%ce%ae-%ce%b1%cf%80%ce%bf%ce%ba%ce%b1%cf%84%ce%ac%cf%83%cf%84%ce%b1%cf%83%ce%b7',
      'πρεσσοθεραπεία-therabody-reccoveryair-pro',
      '%cf%80%cf%81%ce%b5%cf%83%cf%83%ce%bf%ce%b8%ce%b5%cf%81%ce%b1%cf%80%ce%b5%ce%af%ce%b1-therabody-reccoveryair-pro',
      'prehab-πρόληψη-τραυματισμών',
      'prehab-%cf%80%cf%81%cf%8c%ce%bb%ce%b7%cf%88%ce%b7-%cf%84%cf%81%ce%b1%cf%85%ce%bc%ce%b1%cf%84%ce%b9%cf%83%ce%bc%cf%8e%ce%bd',
      'νευρομυοσκελετική-αποκατάσταση',
      '%ce%bd%ce%b5%cf%85%cf%81%ce%bf%ce%bc%cf%85%ce%bf%cf%83%ce%ba%ce%b5%ce%bb%ce%b5%cf%84%ce%b9%ce%ba%ce%ae-%ce%b1%cf%80%ce%bf%ce%ba%ce%b1%cf%84%ce%ac%cf%83%cf%84%ce%b1%cf%83%ce%b7',
      'μετεγχειρητικη-αποκατασταση-καταγμα',
      '%ce%bc%ce%b5%cf%84%ce%b5%ce%b3%cf%87%ce%b5%ce%b9%cf%81%ce%b7%cf%84%ce%b9%ce%ba%ce%b7-%ce%b1%cf%80%ce%bf%ce%ba%ce%b1%cf%84%ce%b1%cf%83%cf%84%ce%b1%cf%83%ce%b7-%ce%ba%ce%b1%cf%84%ce%b1%ce%b3%ce%bc%ce%b1'
    ],
    target: 'https://ermeion.gr/ypiresies'
  },
  {
    comment: 'Tele-therapy to contact',
    old: ['τηλεθεραπεία-απομακρυσμένη-συνεδρί', '%cf%84%ce%b7%ce%bb%ce%b5%ce%b8%ce%b5%cf%81%ce%b1%cf%80%ce%b5%ce%af%ce%b1-%ce%b1%cf%80%ce%bf%ce%bc%ce%b1%ce%ba%cf%81%cf%85%cf%83%ce%bc%ce%ad%ce%bd%ce%b7-%cf%83%cf%85%ce%bd%ce%b5%ce%b4%cf%81%ce%af'],
    target: 'https://ermeion.gr/#contact'
  },
  {
    comment: 'Old categories & taxonomies',
    old: [
      'παθήσεις-άνω-άκρου',
      '%cf%80%ce%b1%ce%b8%ce%ae%cf%83%ce%b5%ce%b9%cf%82-%ce%ac%ce%bd%cf%89-%ce%ac%ce%ba%cf%81%ce%bf%cf%85',
      'παθήσεις-κάτω-άκρου',
      '%cf%80%ce%b1%ce%b8%ce%ae%cf%83%ce%b5%ce%b9%cf%82-%ce%ba%ce%ac%cf%84%cf%89-%ce%ac%ce%ba%cf%81%ce%bf%cf%85',
      'παθήσεις-κεφαλής',
      '%cf%80%ce%b1%ce%b8%ce%ae%cf%83%ce%b5%ce%b9%cf%82-%ce%ba%ce%b5%cf%86%ce%b1%ce%bb%ce%ae%cf%82'
    ],
    target: 'https://ermeion.gr/arthra'
  },
  {
    comment: 'WordPress category archives',
    old: ['category/.*'],
    target: 'https://ermeion.gr/arthra'
  },

  // --- Articles / Specific Conditions ---
  {
    comment: 'Thoracic outlet syndrome',
    old: ['σύνδρομο-θωρακικής-εξόδου', '%cf%83%cf%8d%ce%bd%ce%b4%cf%81%ce%bf%ce%bc%ce%bf-%ce%b8%cf%89%cf%81%ce%b1%ce%ba%ce%b9%ce%ba%ce%ae%cf%82-%ce%b5%ce%be%cf%8c%ce%b4%ce%bf%cf%85'],
    target: 'https://ermeion.gr/arthra/syndromo-thorakikis-exodou'
  },
  {
    comment: 'Lumbago / Osfyalgia',
    old: ['οσφυαλγία', '%ce%bf%cf%83%cf%86%cf%85%ce%b1%ce%bb%ce%b3%ce%af%ce%b1'],
    target: 'https://ermeion.gr/arthra/osfyalgia'
  },
  {
    comment: 'Lumbar stenosis',
    old: ['σπονδυλική-στένωση-οσφυϊκής-μοίρας-σ', '%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%b9%ce%ba%ce%ae-%cf%83%cf%84%ce%ad%ce%bd%cf%89%cf%83%ce%b7-%ce%bf%cf%83%cf%86%cf%85%cf%8a%ce%ba%ce%ae%cf%82-%ce%bc%ce%bf%ce%af%cf%81%ce%b1%cf%82-%cf%83'],
    target: 'https://ermeion.gr/arthra/spondyliki-stenosi-osfyikis-moiras'
  },
  {
    comment: 'Sacroiliac joint pathologies',
    old: ['παθολογίες-ιερολαγόνιων-αρθρώσεων-κ', '%cf%80%ce%b1%ce%b8%ce%bf%ce%bb%ce%bf%ce%b3%ce%af%ce%b5%cf%82-%ce%b9%ce%b5%cf%81%ce%bf%ce%bb%ce%b1%ce%b3%cf%8c%ce%bd%ce%b9%cf%89%ce%bd-%ce%b1%cf%81%ce%b8%cf%81%cf%8e%cf%83%ce%b5%cf%89%ce%bd-%ce%ba'],
    target: 'https://ermeion.gr/arthra/pathologies-ierolagonion-arthroseon'
  },
  {
    comment: 'Herniated lumbar disc',
    old: [
      'κήλη-μεσοσπονδυλίου-δίσκου-οσφυϊκής',
      'κυλη-μεσοσπονδυλιου-δισκου-οσφυϊκης',
      '%ce%ba%ce%ae%ce%bb%ce%b7-%ce%bc%ce%b5%cf%83%ce%bf%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%af%ce%bf%cf%85-%ce%b4%ce%af%cf%83%ce%ba%ce%bf%cf%85-%ce%bf%cf%83%cf%86%cf%85%cf%8a%ce%ba%ce%ae%cf%82',
      '%ce%ba%cf%85%ce%bb%ce%b7-%ce%bc%ce%b5%cf%83%ce%bf%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%b9%ce%bf%cf%85-%ce%b4%ce%b9%cf%83%ce%ba%ce%bf%cf%85-%ce%bf%cf%83%cf%86%cf%85%cf%8a%ce%ba%ce%b7%cf%82'
    ],
    target: 'https://ermeion.gr/arthra/kili-mesospondyliou-diskou-osfyikis-moiras'
  },
  {
    comment: 'Cervical pain / Neck pain',
    old: ['αυχεναλγία', 'ayxenalgia', '%ce%b1%cf%85%cf%87%ce%b5%ce%bd%ce%b1%ce%bb%ce%b3%ce%af%ce%b1'],
    target: 'https://ermeion.gr/arthra/ayxenalgia'
  },
  {
    comment: 'Osteoporosis',
    old: ['οστεοπόρωση', '%ce%bf%cf%83%cf%84%ce%b5%ce%bf%cf%80%cf%8c%cf%81%cf%89%cf%83%ce%b7'],
    target: 'https://ermeion.gr/arthra/osteoporosi'
  },
  {
    comment: 'Cervical spinal stenosis',
    old: ['σπονδυλική-στένωση-αυχενικής-μοίρας', '%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%b9%ce%ba%ce%ae-%cf%83%cf%84%ce%ad%ce%bd%cf%89%cf%83%ce%b7-%ce%b1%cf%85%cf%87%ce%b5%ce%bd%ce%b9%ce%ba%ce%ae%cf%82-%ce%bc%ce%bf%ce%af%cf%81%ce%b1%cf%82'],
    target: 'https://ermeion.gr/arthra/spondyliki-stenosi-avchenikis-moiras'
  },
  {
    comment: 'Whiplash injury',
    old: ['τραυματισμός-δίκην-μαστιγίου-whiplash', '%cf%84%cf%81%ce%b1%cf%85%ce%bc%ce%b1%cf%84%ce%b9%cf%83%ce%bc%cf%8c%cf%82-%ce%b4%ce%af%ce%ba%ce%b7%ce%bd-%ce%bc%ce%b1%cf%83%cf%84%ce%b9%ce%b3%ce%af%ce%bf%cf%85-whiplash'],
    target: 'https://ermeion.gr/arthra/travmatismos-dikin-mastigiou-whiplash'
  },
  {
    comment: 'Cervical disc herniation',
    old: [
      'κήλη-αυχενικού-μεσοσπονδυλίου-δίσκο',
      '%ce%ba%ce%ae%ce%bb%ce%b7-%ce%b1%cf%85%cf%87%ce%b5%ce%bd%ce%b9%ce%ba%ce%bf%cf%8d-%ce%bc%ce%b5%cf%83%ce%bf%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%af%ce%bf%cf%85-%ce%b4%ce%af%cf%83%ce%ba%ce%bf',
      '%ce%ba%ce%ae%ce%bb%ce%b7-%ce%b1%cf%85%cf%87%ce%b5%ce%bd%ce%b9%ce%ba%ce%bf%cf%83%ce%bc%ce%b5%cf%83%ce%bf%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%af%ce%bf%cf%85-%ce%b4%ce%af%cf%83%ce%ba%ce%bf'
    ],
    target: 'https://ermeion.gr/arthra/kili-avchenikou-mesospondyliou-diskou'
  },
  {
    comment: 'Kyphosis',
    old: ['κύφωση', '%ce%ba%cf%8d%cf%86%cf%89%cf%83%ce%b7'],
    target: 'https://ermeion.gr/arthra/kyfosi'
  },
  {
    comment: 'Rheumatoid arthritis',
    old: ['ρευματοειδής-αρθρίτιδα', '%cf%81%ce%b5%cf%85%ce%bc%ce%b1%cf%84%ce%bf%ce%b5%ce%b9%ce%b4%ce%ae%cf%82-%ce%b1%cf%81%ce%b8%cf%81%ce%af%cf%84%ce%b9%ce%b4%ce%b1'],
    target: 'https://ermeion.gr/arthra/revmatoeidis-arthritida'
  },
  {
    comment: 'Scoliosis',
    old: ['σκολιωση', '%cf%83%ce%ba%ce%bf%ce%bb%ce%b9%cf%89%cf%83%ce%b7'],
    target: 'https://ermeion.gr/arthra/skoliosi'
  },
  {
    comment: 'Nerve compression / entrapment',
    old: [
      'συμπίεση-νεύρου-παγίδευση',
      '%cf%83%cf%85%ce%bc%cf%80%ce%af%ce%b5%cf%83%ce%b7-%ce%bd%ce%b5%cf%8d%cf%81%ce%bf%cf%85-%cf%80%ce%b1%ce%b3%ce%af%ce%b4%ce%b5%cf%85%cf%83%ce%b7',
      'περιφερικη-πολυνευροπαθεια-βλαβη-σ',
      '%cf%80%ce%b5%cf%81%ce%b9%cf%86%ce%b5%cf%81%ce%b9%ce%ba%ce%b7-%cf%80%ce%bf%ce%bb%cf%85%ce%bd%ce%b5%cf%85%cf%81%ce%bf%cf%80%ce%b1%ce%b8%ce%b5%ce%b9%ce%b1-%ce%b2%ce%bb%ce%b1%ce%b2%ce%b7-%cf%83'
    ],
    target: 'https://ermeion.gr/arthra/sympiesi-nevrou-pagidevsi'
  },
  {
    comment: 'Cervical spondylosis',
    old: ['αυχενική-σπονδύλωση', '%ce%b1%cf%85%cf%87%ce%b5%ce%bd%ce%b9%ce%ba%ce%ae-%cf%83%cf%80%ce%bf%ce%bd%ce%b4%cf%8d%ce%bb%cf%89%cf%83%ce%b7'],
    target: 'https://ermeion.gr/arthra/avcheniki-spondylosi'
  },
  {
    comment: 'Ankle sprain',
    old: ['διαστρεμμα-ποδοκνημικης-αρθρωσης-ασ', '%ce%b4%ce%b9%ce%b1%cf%83%cf%84%cf%81%ce%b5%ce%bc%ce%bc%ce%b1-%cf%80%ce%bf%ce%b4%ce%bf%ce%ba%ce%bd%ce%b7%ce%bc%ce%b9%ce%ba%ce%b7%cf%82-%ce%b1%cf%81%ce%b8%cf%81%cf%89%cf%83%ce%b7%cf%82-%ce%b1%cf%83'],
    target: 'https://ermeion.gr/arthra/diastremma-podoknimikis-arthrosis-astragalou'
  },
  {
    comment: 'Patellofemoral pain syndrome',
    old: ['συνδρομο-επιγονατιδομηριαιου-πονου', '%cf%83%cf%85%ce%bd%ce%b4%cf%81%ce%bf%ce%bc%ce%bf-%ce%b5%cf%80%ce%b9%ce%b3%ce%bf%ce%bd%ce%b1%cf%84%ce%b9%ce%b4%ce%bf%ce%bc%ce%b7%cf%81%ce%b9%ce%b1%ce%b9%ce%bf%cf%85-%cf%80%ce%bf%ce%bd%ce%bf%cf%85'],
    target: 'https://ermeion.gr/arthra/syndromo-epigonatidomiriaiou-ponou'
  },
  {
    comment: 'Bursitis',
    old: ['ορογονοθυλακιτιδα-bursitis', '%ce%bf%cf%81%ce%bf%ce%b3%ce%bf%ce%bd%ce%bf%ce%b8%cf%85%ce%bb%ce%b1%ce%ba%ce%b9%cf%84%ce%b9%ce%b4%ce%b1-bursitis'],
    target: 'https://ermeion.gr/arthra/orogonothylakitida-bursitis'
  },
  {
    comment: 'Plantar fasciitis',
    old: ['παθολογια-της-πελματιαιας-απονευρωσ', '%cf%80%ce%b1%ce%b8%ce%bf%ce%bb%ce%bf%ce%b3%ce%b9%ce%b1-%cf%84%ce%b7%cf%82-%cf%80%ce%b5%ce%bb%ce%bc%ce%b1%cf%84%ce%b9%ce%b1%ce%b9%ce%b1%cf%82-%ce%b1%cf%80%ce%bf%ce%bd%ce%b5%cf%85%cf%81%cf%89%cf%83'],
    target: 'https://ermeion.gr/arthra/pathologia-tis-pelmatias-aponevrosis'
  },
  {
    comment: 'Achilles tendinopathy',
    old: ['τενοντοπαθεια-αχιλλειου-τενοντα', '%cf%84%ce%b5%ce%bd%ce%bf%ce%bd%cf%84%ce%bf%cf%80%ce%b1%ce%b8%ce%b5%ce%b9%ce%b1-%ce%b1%cf%87%ce%b9%ce%bb%ce%bb%ce%b5%ce%b9%ce%bf%cf%85-%cf%84%ce%b5%ce%bd%ce%bf%ce%bd%cf%84%ce%b1'],
    target: 'https://ermeion.gr/arthra/tenontopatheia-achilleiou-tenonta'
  },
  {
    comment: 'Achilles tendon rupture',
    old: ['ρηξη-αχιλλειου-τενοντα', '%cf%81%ce%b7%ce%be%ce%b7-%ce%b1%cf%87%ce%b9%ce%bb%ce%bb%ce%b5%ce%b9%ce%bf%cf%85-%cf%84%ce%b5%ce%bd%ce%bf%ce%bd%cf%84%ce%b1'],
    target: 'https://ermeion.gr/arthra/rixi-achilleiou-tenonta'
  },
  {
    comment: 'Patellar tendinopathy (Jumper knee)',
    old: ['τενοντοπαθεια-επιγονατιδικου-jumpers-knee', '%cf%84%ce%b5%ce%bd%ce%bf%ce%bd%cf%84%ce%bf%cf%80%ce%b1%ce%b8%ce%b5%ce%b9%ce%b1-%ce%b5%cf%80%ce%b9%ce%b3%ce%bf%ce%bd%ce%b1%cf%84%ce%b9%ce%b4%ce%b9%ce%ba%ce%bf%cf%85-jumpers-knee'],
    target: 'https://ermeion.gr/arthra/tenontopatheia-epigonatidikou-jumpers-knee'
  },
  {
    comment: 'Hip pain',
    old: ['πονος-στο-ισχιο', '%cf%80%ce%bf%ce%bd%ce%bf%cf%82-%cf%83%cf%84%ce%bf-%ce%b9%cf%83%cf%87%ce%b9%ce%bf'],
    target: 'https://ermeion.gr/arthra/ponos-sto-ischio'
  },
  {
    comment: 'Knee osteoarthritis',
    old: ['οστεοαρθριτιδα-γονατος', '%ce%bf%cf%83%cf%84%ce%b5%ce%bf%ce%b1%cf%81%ce%b8%cf%81%ce%b9%cf%84%ce%b9%ce%b4%ce%b1-%ce%b3%ce%bf%ce%bd%ce%b1%cf%84%ce%bf%cf%82'],
    target: 'https://ermeion.gr/arthra/osteoarthritida-gonatos'
  },
  {
    comment: 'Brachial plexus injury',
    old: ['βλαβη-βραχιονιου-πλεγματος', '%ce%b2%ce%bb%ce%b1%ce%b2%ce%b7-%ce%b2%cf%81%ce%b1%cf%87%ce%b9%ce%bf%ce%bd%ce%b9%ce%bf%cf%85-%cf%80%ce%bb%ce%b5%ce%b3%ce%bc%ce%b1%cf%84%ce%bf%cf%82'],
    target: 'https://ermeion.gr/arthra/vlavi-vrachioniou-plegmatos'
  },
  {
    comment: 'Elbow pain',
    old: [
      'πονος-στον-αγκωνα',
      '%cf%80%ce%bf%ce%bd%ce%bf%cf%82-%cf%83%cf%84%ce%bf%ce%bd-%ce%b1%ce%b3%ce%ba%cf%89%ce%bd%ce%b1',
      'εκτασεισ-επιφορτισμενου-αγκωνα-με-υπ',
      '%ce%b5%ce%ba%cf%84%ce%b1%cf%83%ce%b5%ce%b9%cf%83-%ce%b5%cf%80%ce%b9%cf%86%ce%bf%cf%81%cf%84%ce%b9%cf%83%ce%bc%ce%b5%ce%bd%ce%bf%cf%85-%ce%b1%ce%b3%ce%ba%cf%89%ce%bd%ce%b1-%ce%bc%ce%b5-%cf%85%cf%80'
    ],
    target: 'https://ermeion.gr/arthra/ponos-ston-agkona'
  },
  {
    comment: 'Rotator cuff tendinopathy',
    old: ['πεταλο-στροφεων-του-ωμου-τεντοπαθεια', '%cf%80%ce%b5%cf%84%ce%b1%ce%bb%ce%bf-%cf%83%cf%84%cf%81%ce%bf%cf%86%ce%b5%cf%89%ce%bd-%cf%84%ce%bf%cf%85-%cf%89%ce%bc%ce%bf%cf%85-%cf%84%ce%b5%ce%bd%cf%84%ce%bf%cf%80%ce%b1%ce%b8%ce%b5%ce%b9%ce%b1'],
    target: 'https://ermeion.gr/arthra/petalo-strofeon-tou-omou-tentopatheia-rixi'
  },
  {
    comment: 'Shoulder pain & instability',
    old: [
      'πονος-στον-ωμο',
      '%cf%80%ce%bf%ce%bd%ce%bf%cf%82-%cf%83%cf%84%ce%bf%ce%bd-%cf%89%ce%bc%ce%bf',
      'ασταθεια-διαταραχη-ωμου-σε-χρονια-φασ',
      '%ce%b1%cf%83%cf%84%ce%b1%ce%b8%ce%b5%ce%b9%ce%b1-%ce%b4%ce%b9%ce%b1%cf%84%ce%b1%cf%81%ce%b1%cf%87%ce%b7-%cf%89%ce%bc%ce%bf%cf%85-%cf%83%ce%b5-%cf%87%cf%81%ce%bf%ce%bd%ce%b9%ce%b1-%cf%86%ce%b1%cf%83'
    ],
    target: 'https://ermeion.gr/arthra/ponos-ston-omo'
  },
  {
    comment: 'Carpal tunnel syndrome',
    old: ['συνδρομο-καρπιαιου-σωληνα', '%cf%83%cf%85%ce%bd%ce%b4%cf%81%ce%bf%ce%bc%ce%bf-%ce%ba%ce%b1%cf%81%cf%80%ce%b9%ce%b1%ce%b9%ce%bf%cf%85-%cf%83%cf%89%ce%bb%ce%b7%ce%bd%ce%b1'],
    target: 'https://ermeion.gr/arthra/syndromo-karpiaiou-solina'
  },
  {
    comment: 'Wrist pain',
    old: ['πονος-στον-καρπο', '%cf%80%ce%bf%ce%bd%ce%bf%cf%82-%cf%83%cf%84%ce%bf%ce%bd-%ce%ba%ce%b1%cf%81%cf%80%ce%bf'],
    target: 'https://ermeion.gr/arthra/ponos-ston-karpo'
  },
  {
    comment: 'De Quervain syndrome',
    old: ['συνδρομο-de-quervain-τενοντοελυτριτιδα-αντιχ', '%cf%83%cf%85%ce%bd%ce%b4%cf%81%ce%bf%ce%bc%ce%bf-de-quervain-%cf%84%ce%b5%ce%bd%ce%bf%ce%bd%cf%84%ce%bf%ce%b5%ce%bb%cf%85%cf%84%cf%81%ce%b9%cf%84%ce%b9%ce%b4%ce%b1-%ce%b1%ce%bd%cf%84%ce%b9%cf%87'],
    target: 'https://ermeion.gr/arthra/syndromo-de-quervain-tenontoelytritida-anticheira'
  },
  {
    comment: 'Golfers elbow',
    old: ['εξω-επικονδυλαλγια-golfer-s-elbow', '%ce%b5%ce%be%cf%89-%ce%b5%cf%80%ce%b9%ce%ba%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%b1%ce%bb%ce%b3%ce%b9%ce%b1-golfer-s-elbow'],
    target: 'https://ermeion.gr/arthra/exo-epikondylalgia-golfers-elbow'
  },
  {
    comment: 'Tennis elbow',
    old: ['εξω-επικονδυλαλγια-tennis-elbow', '%ce%b5%ce%be%cf%89-%ce%b5%cf%80%ce%b9%ce%ba%ce%bf%ce%bd%ce%b4%cf%85%ce%bb%ce%b1%ce%bb%ce%b3%ce%b9%ce%b1-tennis-elbow'],
    target: 'https://ermeion.gr/arthra/exo-epikondylalgia-tennis-elbow'
  },
  {
    comment: 'Frozen shoulder',
    old: [
      'παγωμενος-ωμος-συμφυτικη-θυλακιτιδα',
      '%cf%80%ce%b1%ce%b3%cf%89%ce%bc%ce%b5%ce%bd%ce%bf%cf%82-%cf%89%ce%bc%ce%bf%cf%82-%cf%83%cf%85%ce%bc%cf%86%cf%85%cf%84%ce%b9%ce%ba%ce%b7-%ce%b8%cf%85%ce%bb%ce%b1%ce%ba%ce%b9%cf%84%ce%b9%ce%b4%ce%b1',
      'ασκησεισ-αποκαταστασησ-παγωμενου-ω',
      '%ce%b1%cf%83%ce%ba%ce%b7%cf%83%ce%b5%ce%b9%cf%83-%ce%b1%cf%80%ce%bf%ce%ba%ce%b1%cf%84%ce%b1%cf%83%cf%84%ce%b1%cf%83%ce%b7%cf%83-%cf%80%ce%b1%ce%b3%cf%89%ce%bc%ce%b5%ce%bd%ce%bf%cf%85-%cf%89'
    ],
    target: 'https://ermeion.gr/arthra/pagomenos-omos-symfytiki-thylakitida'
  },
  {
    comment: 'Cervicogenic headache',
    old: ['αυχενογενης-πονοκεφαλος-κεφαλαλγια', '%ce%b1%cf%85%cf%87%ce%b5%ce%bd%ce%bf%ce%b3%ce%b5%ce%bd%ce%b7%cf%82-%cf%80%ce%bf%ce%bd%ce%bf%ce%ba%ce%b5%cf%86%ce%b1%ce%bb%ce%bf%cf%82-%ce%ba%ce%b5%cf%86%ce%b1%ce%bb%ce%b1%ce%bb%ce%b3%ce%b9%ce%b1'],
    target: 'https://ermeion.gr/arthra/avchenogenis-ponokefalos-kefalalgia'
  },
  {
    comment: 'Headache',
    old: ['πονοκεφαλος-κεφαλαλγια', '%cf%80%ce%bf%ce%bd%ce%bf%ce%ba%ce%b5%cf%86%ce%b1%ce%bb%ce%bf%cf%82-%ce%ba%ce%b5%cf%86%ce%b1%ce%bb%ce%b1%ce%bb%ce%b3%ce%b9%ce%b1'],
    target: 'https://ermeion.gr/arthra/ponokefalos-kefalalgia'
  },
  {
    comment: 'Temporomandibular joint pathologies',
    old: ['παθολογια-κρατοφαγναθικων-αρθρωσεων', '%cf%80%ce%b1%ce%b8%ce%bf%ce%bb%ce%bf%ce%b3%ce%b9%ce%b1-%ce%ba%cf%81%ce%b1%cf%84%ce%bf%cf%86%ce%b1%ce%b3%ce%bd%ce%b1%ce%b8%ce%b9%ce%ba%cf%89%ce%bd-%ce%b1%cf%81%ce%b8%cf%81%cf%89%cf%83%ce%b5%cf%89%ce%bd'],
    target: 'https://ermeion.gr/arthra/pathologia-krofatognathikon-arthroseon'
  },
  {
    comment: 'Biceps tendon repairs',
    old: [
      'συρραφη-του-τενοντα-του-δικεφαλου-βρα',
      '%cf%83%cf%85%cf%81%cf%81%ce%b1%cf%86%ce%b7-%cf%84%ce%bf%cf%85-%cf%84%ce%b5%ce%bd%ce%bf%ce%bd%cf%84%ce%b1-%cf%84%ce%bf%cf%85-%ce%b4%ce%b9%ce%ba%ce%b5%cf%86%ce%b1%ce%bb%ce%bf%cf%85-%ce%b2%cf%81%ce%b1',
      'συρραφή-δικεφάλου-βραχιονίου',
      '%cf%83%cf%85%cf%81%cf%81%ce%b1%cf%86%ce%ae-%ce%b4%ce%b9%ce%ba%ce%b5%cf%86%ce%ac%ce%bb%ce%bf%cf%85-%ce%b2%cf%81%ce%b1%cf%87%ce%b9%ce%bf%ce%bd%ce%af%ce%bf%cf%85'
    ],
    target: 'https://ermeion.gr/arthra'
  },
  {
    comment: 'Rehab exercise posts',
    old: [
      'οπισθια-ελξη-και-εκταση-με-στροφη-στην',
      '%ce%bf%cf%80%ce%b9%cf%83%ce%b8%ce%b9%ce%b1-%ce%b5%ce%bb%ce%be%ce%b7-%ce%ba%ce%b1%ce%b9-%ce%b5%ce%ba%cf%84%ce%b1%cf%83%ce%b7-%ce%bc%ce%b5-%cf%83%cf%84%cf%81%ce%bf%cf%86%ce%b7-%cf%83%cf%84%ce%b7%ce%bd',
      'αποκατασταση-τησ-εσω-στροφησ-σε-διατα',
      '%ce%b1%cf%80%ce%bf%ce%ba%ce%b1%cf%84%ce%b1%cf%83%cf%84%ce%b1%cf%83%ce%b7-%cf%84%ce%b7%cf%83-%ce%b5%cf%83%cf%89-%cf%83%cf%84%cf%81%ce%bf%cf%86%ce%b7%cf%83-%cf%83%ce%b5-%ce%b4%ce%b9%ce%b1%cf%84%ce%b1'
    ],
    target: 'https://ermeion.gr/ypiresies/exercise'
  },
  {
    comment: 'Ermeion general old post',
    old: ['ερμείον-φυσικοθεραπεία-θεσσαλονίκη', '%ce%b5%cf%81%ce%bc%ce%b5%ce%af%ce%bf%ce%bd-%cf%86%cf%85%cf%83%ce%b9%ce%ba%ce%bf%ce%b8%ce%b5%cf%81%ce%b1%cf%80%ce%b5%ce%af%ce%b1-%ce%b8%ce%b5%cf%83%cf%83%ce%b1%ce%bb%ce%bf%ce%bd%ce%af%ce%ba%ce%b7'],
    target: 'https://ermeion.gr/'
  }
];

let rules = `# ==============================================================================
# .htaccess for Ermeion Physiotherapy (Vite + React SPA on Plesk / Apache)
# Automatically generated with full 301 SEO redirects and SPA routing fallback.
# ==============================================================================

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Force HTTPS and non-www canonical domain
  RewriteCond %{HTTPS} off [OR]
  RewriteCond %{HTTP_HOST} ^www\\.ermeion\\.gr$ [NC]
  RewriteRule ^(.*)$ https://ermeion.gr/$1 [L,R=301]

  # 2. Permanent 301 Redirects for Old WordPress URLs
`;

redirects.forEach((r) => {
  const pattern = r.old.join('|');
  const isCategory = pattern.includes('.*');
  const condPattern = isCategory ? `^/(${pattern})` : `^/(${pattern})/?$`;
  rules += `  # ${r.comment}\n`;
  rules += `  RewriteCond %{REQUEST_URI} ${condPattern} [NC]\n`;
  rules += `  RewriteRule ^ ${r.target} [R=301,NE,L]\n\n`;
});

rules += `  # 3. SPA Fallback: serve index.html for all client-side React routes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# ==============================================================================
# Security & MIME types
# ==============================================================================
<IfModule mod_mime.c>
  AddType application/javascript .js .mjs
  AddType text/css .css
  AddType image/svg+xml .svg
  AddType application/font-woff2 .woff2
  AddType application/font-woff .woff
  AddType application/manifest+json .webmanifest
  AddType application/xml .xml
</IfModule>

# Prevent directory browsing
Options -Indexes
`;

fs.writeFileSync(htaccessPath, rules);
console.log(`[htaccess] Created public/.htaccess with ${redirects.length} redirection rules.`);

