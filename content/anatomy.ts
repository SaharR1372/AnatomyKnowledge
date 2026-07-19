import type { BodyRegionSeed, MovementSeed } from "./types";

// Anatomy seed content for the MVP vertical slice: the SHOULDER region.
// Facts are drawn from standard, uncontroversial descriptions in OpenStax
// Anatomy & Physiology 2e (CC BY-NC-SA). Each muscle/region carries citations
// pointing at the relevant OpenStax chapter. Status is "source_checked" for
// basic facts these chapters plainly support; anything more specific carries a
// reviewWarning. See docs/citations-and-sources.md.

const OPENSTAX = "openstax-anp-2e";

export const shoulderRegion: BodyRegionSeed = {
  slug: "shoulder",
  name: "Shoulder",
  order: 1,
  description:
    "The shoulder connects the arm to the trunk. It is built for a very large range of motion, which makes it mobile but also relatively less stable than joints like the hip. It is really a complex of several joints working together, moved and controlled by many muscles.",
  relationships:
    "The shoulder works closely with the **neck** and **upper back** (which position the shoulder blade), the **chest** (pectoral muscles), and the **arm** and **elbow** below it. Because the shoulder blade glides on the rib cage, posture of the spine and rib cage strongly affects how the shoulder moves.",
  safetyNotes:
    "Shoulder pain, clicking with pain, weakness, numbness, or loss of motion should be assessed by a qualified healthcare professional. A personal trainer teaches movement and exercise; they do not diagnose or treat shoulder injuries.",
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim:
        "The pectoral (shoulder) girdle attaches the upper limb to the axial skeleton and allows a wide range of motion at the expense of stability.",
      locator: "Ch. 8.2 The Pectoral Girdle",
    },
  ],
  bones: [
    {
      slug: "clavicle",
      name: "Clavicle",
      latinName: "Clavicula",
      description:
        "The collarbone. A slightly S-shaped bone at the front of the shoulder that connects the arm skeleton to the breastbone (sternum).",
      landmarks:
        "Sternal end (attaches to the sternum), acromial end (attaches to the acromion of the scapula).",
    },
    {
      slug: "scapula",
      name: "Scapula",
      latinName: "Scapula",
      description:
        "The shoulder blade. A flat, triangular bone on the upper back that provides attachment for many shoulder muscles and forms part of the main shoulder joint.",
      landmarks:
        "Glenoid cavity (socket for the humerus), acromion, coracoid process, spine of the scapula.",
    },
    {
      slug: "humerus",
      name: "Humerus",
      latinName: "Humerus",
      description:
        "The upper arm bone. Its rounded head sits in the shallow socket (glenoid cavity) of the scapula to form the main shoulder joint.",
      landmarks:
        "Head, greater and lesser tubercles (muscle attachment points), intertubercular (bicipital) groove.",
    },
  ],
  joints: [
    {
      slug: "glenohumeral-joint",
      name: "Glenohumeral joint",
      jointType: "ball-and-socket (synovial)",
      description:
        "The main shoulder joint, where the head of the humerus meets the shallow glenoid cavity of the scapula. Its shallow socket allows a very large range of motion but makes it the most mobile — and one of the least stable — joints in the body.",
      articulatingBones: "Humerus (head) and scapula (glenoid cavity)",
      movementsAllowed:
        "Flexion, extension, abduction, adduction, internal rotation, external rotation, and circumduction.",
    },
    {
      slug: "acromioclavicular-joint",
      name: "Acromioclavicular (AC) joint",
      jointType: "plane (gliding) synovial joint",
      description:
        "A small joint between the acromion of the scapula and the acromial end of the clavicle. It allows the scapula to rotate and adjust as the arm moves.",
      articulatingBones: "Acromion of scapula and clavicle",
      movementsAllowed: "Small gliding and rotational adjustments of the scapula.",
    },
    {
      slug: "sternoclavicular-joint",
      name: "Sternoclavicular (SC) joint",
      jointType: "saddle-type synovial joint",
      description:
        "The only bony joint connecting the arm skeleton to the axial skeleton, between the clavicle and the sternum.",
      articulatingBones: "Clavicle and sternum (manubrium)",
      movementsAllowed: "Elevation, depression, protraction, retraction of the shoulder girdle.",
    },
    {
      slug: "scapulothoracic-articulation",
      name: "Scapulothoracic articulation",
      jointType: "functional (not a true synovial joint)",
      description:
        "The gliding of the shoulder blade over the back of the rib cage. It is not a true joint but is essential: smooth scapular movement lets the arm reach overhead.",
      articulatingBones: "Scapula gliding on the thoracic rib cage",
      movementsAllowed: "Elevation, depression, protraction, retraction, upward and downward rotation.",
    },
  ],
  muscles: [
    {
      slug: "deltoid",
      commonName: "Deltoid",
      scientificName: "Deltoideus",
      pronunciation: "DEL-toyd",
      locationSimple: "The rounded cap of muscle on the outside of the shoulder.",
      origin: "Clavicle, acromion, and spine of the scapula.",
      insertion: "Deltoid tuberosity of the humerus.",
      actions:
        "Made of three parts: the front (anterior) fibers flex and internally rotate the shoulder; the middle fibers abduct the arm (lift it out to the side); the rear (posterior) fibers extend and externally rotate the shoulder.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "multiple",
      innervation: "Axillary nerve (C5–C6)",
      functionDaily:
        "Lifts and reaches the arm in every direction — putting on a jacket, reaching a high shelf, carrying bags away from the body.",
      functionExercise:
        "A primary mover in overhead pressing (front/middle fibers) and lateral raises (middle fibers); the rear fibers assist in rowing and reverse-fly movements.",
      beginnerExplanation:
        "The deltoid is the muscle that gives the shoulder its rounded shape. Think of it as three muscles in one 'cap': front, side, and back. Each part points the arm in a different direction, so different exercises emphasize different parts.",
      advancedExplanation:
        "Because its three heads have different lines of pull, the deltoid's action depends on arm position. The middle head is the main abductor once the movement is initiated by the supraspinatus. Anterior and posterior heads have opposing rotational and flexion/extension roles, so they can act as antagonists to each other at the glenohumeral joint.",
      commonlyConfused:
        "Often confused with the trapezius (which sits more toward the neck/upper back) and the rotator cuff muscles (which lie deeper and mainly stabilize rather than lift).",
      misconceptions:
        "A single 'shoulder exercise' does not train the whole deltoid equally — front, side, and rear fibers are emphasized by different movements.",
      safetyInfo:
        "Loading heavy overhead work with poor control can stress the shoulder. Build overhead strength gradually and stop if you feel sharp pain.",
      status: "source_checked",
      assetSlugs: ["shoulder-region"],
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim:
            "The deltoid has anterior, middle (lateral), and posterior fibers; the middle fibers abduct the arm, while anterior and posterior fibers flex/medially rotate and extend/laterally rotate the arm, respectively.",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
    {
      slug: "supraspinatus",
      commonName: "Supraspinatus",
      scientificName: "Supraspinatus",
      pronunciation: "soo-pra-spy-NAY-tus",
      locationSimple: "A deep muscle on top of the shoulder blade, above its spine.",
      origin: "Supraspinous fossa of the scapula.",
      insertion: "Greater tubercle of the humerus.",
      actions: "Initiates abduction of the arm (the first ~15 degrees) and stabilizes the humeral head.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "frontal",
      innervation: "Suprascapular nerve (C5–C6)",
      functionDaily: "Helps start lifting the arm out to the side and keeps the shoulder centered.",
      functionExercise: "Stabilizer in most pressing and lifting; assists the deltoid at the start of abduction.",
      beginnerExplanation:
        "One of the four rotator cuff muscles. It helps begin lifting your arm to the side and holds the ball of the shoulder snugly in its socket.",
      advancedExplanation:
        "Part of the rotator cuff, it compresses the humeral head into the glenoid to resist the upward pull of the deltoid during abduction. Its tendon is a very common site of impingement and tears.",
      commonlyConfused: "Confused with the deltoid (which is superficial) — the supraspinatus lies deep to the trapezius and deltoid.",
      misconceptions: "The rotator cuff is about control and stability, not just producing big movements.",
      safetyInfo:
        "Rotator cuff pain, catching, or weakness overhead warrants professional assessment; do not train through sharp shoulder pain.",
      status: "source_checked",
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim:
            "The supraspinatus is one of four rotator cuff muscles that stabilize the shoulder joint; it assists abduction of the arm.",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
    {
      slug: "infraspinatus",
      commonName: "Infraspinatus",
      scientificName: "Infraspinatus",
      pronunciation: "in-fra-spy-NAY-tus",
      locationSimple: "A deep muscle on the shoulder blade, below its spine.",
      origin: "Infraspinous fossa of the scapula.",
      insertion: "Greater tubercle of the humerus.",
      actions: "Externally (laterally) rotates the arm and stabilizes the humeral head.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "transverse",
      innervation: "Suprascapular nerve (C5–C6)",
      functionDaily: "Rotates the arm outward — like reaching for a seatbelt or opening a door outward.",
      functionExercise: "Prime mover in external-rotation exercises; stabilizer in pulling and pressing.",
      beginnerExplanation:
        "A rotator cuff muscle that turns your arm outward and keeps the shoulder stable during many movements.",
      advancedExplanation:
        "With teres minor, it provides most of the shoulder's external rotation torque and posteriorly stabilizes the glenohumeral joint, resisting anterior translation of the humeral head.",
      commonlyConfused: "Confused with teres minor, which shares its external-rotation role.",
      misconceptions: "External rotators are often under-trained relative to internal rotators used in pressing.",
      safetyInfo: "Progress rotator cuff work with light loads and high control.",
      status: "source_checked",
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim: "The infraspinatus is a rotator cuff muscle that laterally (externally) rotates the arm.",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
    {
      slug: "subscapularis",
      commonName: "Subscapularis",
      scientificName: "Subscapularis",
      pronunciation: "sub-scap-you-LAIR-iss",
      locationSimple: "A deep muscle on the front (rib-cage side) of the shoulder blade.",
      origin: "Subscapular fossa (anterior surface of the scapula).",
      insertion: "Lesser tubercle of the humerus.",
      actions: "Internally (medially) rotates the arm and stabilizes the humeral head.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "transverse",
      innervation: "Upper and lower subscapular nerves (C5–C6)",
      functionDaily: "Rotates the arm inward — like reaching across your body.",
      functionExercise: "Stabilizer during pressing; internal-rotation mover.",
      beginnerExplanation:
        "The rotator cuff muscle that turns the arm inward. It sits between the shoulder blade and the ribs, so you cannot feel it from the surface.",
      advancedExplanation:
        "The only rotator cuff muscle on the anterior scapula, it is the primary internal rotator among the cuff and provides important anterior stability to the glenohumeral joint.",
      commonlyConfused: "Its internal-rotation role overlaps with pectoralis major and latissimus dorsi.",
      misconceptions: "Not all rotator cuff muscles rotate outward — the subscapularis rotates inward.",
      safetyInfo: "Balance internal- and external-rotation training to support shoulder health.",
      status: "source_checked",
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim: "The subscapularis is a rotator cuff muscle that medially (internally) rotates the arm.",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
    {
      slug: "teres-minor",
      commonName: "Teres minor",
      scientificName: "Teres minor",
      pronunciation: "TEH-reez MY-nor",
      locationSimple: "A small deep muscle along the outer edge of the shoulder blade.",
      origin: "Lateral border of the scapula.",
      insertion: "Greater tubercle of the humerus.",
      actions: "Externally (laterally) rotates the arm and stabilizes the humeral head.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "transverse",
      innervation: "Axillary nerve (C5–C6)",
      functionDaily: "Assists outward rotation of the arm.",
      functionExercise: "Works with infraspinatus in external-rotation and pulling movements.",
      beginnerExplanation:
        "The smallest rotator cuff muscle. It teams up with the infraspinatus to rotate the arm outward and steady the shoulder.",
      advancedExplanation:
        "Together with infraspinatus it produces external rotation and, by depressing the humeral head, helps counter superior migration during abduction.",
      commonlyConfused: "Easily confused with teres major, which is a larger internal rotator and is NOT part of the rotator cuff.",
      misconceptions: "Teres minor (cuff, external rotator) and teres major (not cuff, internal rotator) do opposite rotations.",
      safetyInfo: "Include external-rotation work to balance pressing-heavy programs.",
      status: "source_checked",
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim: "The teres minor is a rotator cuff muscle that laterally (externally) rotates the arm.",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
    {
      slug: "pectoralis-major",
      commonName: "Pectoralis major",
      scientificName: "Pectoralis major",
      pronunciation: "pek-tor-AL-iss MAY-jor",
      locationSimple: "The large fan-shaped muscle of the front of the chest.",
      origin: "Clavicle, sternum, and cartilage of the upper ribs.",
      insertion: "Greater tubercle / intertubercular groove of the humerus.",
      actions: "Flexes, adducts, and internally rotates the arm at the shoulder.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "multiple",
      innervation: "Medial and lateral pectoral nerves (C5–T1)",
      functionDaily: "Pushing movements and drawing the arm across the body — pushing a door, a shopping cart.",
      functionExercise: "Prime mover in push-ups, bench press, and chest press; assists in dips.",
      beginnerExplanation:
        "The main chest muscle. It powers pushing movements and pulls the arm toward and across the body.",
      advancedExplanation:
        "Its clavicular and sternocostal heads have different lines of pull, so incline vs. flat pressing emphasizes them differently. It is a strong internal rotator and horizontal adductor of the shoulder.",
      commonlyConfused: "Confused with the deeper pectoralis minor, which moves the scapula rather than the arm.",
      misconceptions: "Pushing exercises are compound: the chest works with the deltoids and triceps, not alone.",
      safetyInfo: "Very heavy pressing with a fully stretched shoulder can strain the pec tendon; control range and load.",
      status: "source_checked",
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim:
            "The pectoralis major flexes, adducts, and medially rotates the humerus and is a primary mover of arm flexion.",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
    {
      slug: "trapezius",
      commonName: "Trapezius",
      scientificName: "Trapezius",
      pronunciation: "truh-PEE-zee-us",
      locationSimple: "The large diamond-shaped muscle of the upper back and neck.",
      origin: "Base of the skull and spinous processes of the cervical and thoracic vertebrae.",
      insertion: "Clavicle, acromion, and spine of the scapula.",
      actions:
        "Moves and stabilizes the scapula: upper fibers elevate, middle fibers retract, lower fibers depress; together they help rotate the scapula upward for overhead reaching.",
      jointsCrossed: "Scapulothoracic and acromioclavicular articulations",
      movementPlane: "multiple",
      innervation: "Accessory nerve (CN XI) and cervical nerves C3–C4",
      functionDaily: "Shrugging, carrying loads, and positioning the shoulder blade for reaching.",
      functionExercise: "Key stabilizer/mover in rows, shrugs, and overhead work; supports good posture under load.",
      beginnerExplanation:
        "A big back-of-the-neck-and-shoulders muscle that moves your shoulder blades up, together, and down, and helps you reach overhead.",
      advancedExplanation:
        "The three functional regions produce a force couple with the serratus anterior to rotate the scapula upward, which is essential for pain-free overhead motion.",
      commonlyConfused: "Its upper fibers are often confused with the deltoid or the levator scapulae.",
      misconceptions: "The trapezius is not just the 'shrug muscle' at the top — its middle and lower fibers are vital for shoulder-blade control.",
      safetyInfo: "Chronic upper-trap tension is common with stress and desk posture; balance with mid/lower-trap strengthening.",
      status: "source_checked",
      citations: [
        {
          sourceSlug: OPENSTAX,
          claim:
            "The trapezius stabilizes and moves the scapula (elevation, retraction, depression, and upward rotation).",
          locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
        },
      ],
    },
  ],
};

export const movements: MovementSeed[] = [
  {
    slug: "shoulder-flexion",
    name: "Shoulder flexion",
    description: "Raising the arm forward and upward in front of the body.",
    plane: "sagittal",
    axis: "frontal (mediolateral)",
    jointAction: "Flexion at the glenohumeral joint",
    oppositeSlug: "shoulder-extension",
  },
  {
    slug: "shoulder-extension",
    name: "Shoulder extension",
    description: "Moving the arm backward, behind the body, from a flexed or neutral position.",
    plane: "sagittal",
    axis: "frontal (mediolateral)",
    jointAction: "Extension at the glenohumeral joint",
    oppositeSlug: "shoulder-flexion",
  },
  {
    slug: "shoulder-abduction",
    name: "Shoulder abduction",
    description: "Raising the arm out to the side, away from the body.",
    plane: "frontal",
    axis: "sagittal (anteroposterior)",
    jointAction: "Abduction at the glenohumeral joint",
    oppositeSlug: "shoulder-adduction",
  },
  {
    slug: "shoulder-adduction",
    name: "Shoulder adduction",
    description: "Bringing the raised arm back down toward the side of the body.",
    plane: "frontal",
    axis: "sagittal (anteroposterior)",
    jointAction: "Adduction at the glenohumeral joint",
    oppositeSlug: "shoulder-abduction",
  },
  {
    slug: "shoulder-internal-rotation",
    name: "Shoulder internal rotation",
    description: "Rotating the upper arm inward, turning the forearm toward the body.",
    plane: "transverse",
    axis: "longitudinal (vertical)",
    jointAction: "Internal (medial) rotation at the glenohumeral joint",
    oppositeSlug: "shoulder-external-rotation",
  },
  {
    slug: "shoulder-external-rotation",
    name: "Shoulder external rotation",
    description: "Rotating the upper arm outward, turning the forearm away from the body.",
    plane: "transverse",
    axis: "longitudinal (vertical)",
    jointAction: "External (lateral) rotation at the glenohumeral joint",
    oppositeSlug: "shoulder-internal-rotation",
  },
];
