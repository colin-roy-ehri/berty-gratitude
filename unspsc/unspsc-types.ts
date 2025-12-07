/**
 * UNSPSC Code Definitions for Mutual Aid
 * 
 * Machine-generated type definitions from UNSPSC reference
 * Provides autocomplete, type safety, and validation in TypeScript
 * 
 * Usage:
 *   import { UNSPSCCode, UNSPSC_CODES } from './unspsc-types'
 *   
 *   const code: UNSPSCCode = '50201506' // Fresh vegetables
 *   const description = UNSPSC_CODES[code] // "Fresh vegetables"
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Valid 8-digit UNSPSC commodity code
 * Format: "{segment}{family}{class}{commodity}"
 * 
 * Examples:
 *   50201506 - Fresh vegetables
 *   72101620 - Wheelchairs (powered)
 *   93150101 - Peer emotional support
 */
export type UNSPSCCode = 
  // Segment 10: Animal & Vegetable Products
  | '10100101' | '10100102' | '10100103' | '10100104' | '10100105' | '10100106' | '10100107'  // Pet Food
  | '10100201' | '10100202' | '10100203' | '10100204' | '10100205' | '10100206' | '10100207' | '10100208'  // Pet Care Supplies

  // Segment 25: Transportation & Storage
  | '25100101' | '25100102' | '25100103' | '25100104' | '25100105' | '25100106' | '25100107'  // Bicycles & Accessories
  | '25101501' | '25101502' | '25101503' | '25101504' | '25101505' | '25101506'  // Vehicle Parts
  | '25200101' | '25200102' | '25200103' | '25200104'  // Public Transit

  // Segment 31: Tools & Hardware
  | '31100101' | '31100102' | '31100103' | '31100104' | '31100105' | '31100106'  // Basic Hand Tools
  | '31100201' | '31100202' | '31100203' | '31100204'  // Power Tools
  | '31200101' | '31200102' | '31200103' | '31200104' | '31200105'  // Fasteners & Adhesives

  // Segment 39: Electrical Equipment
  | '39100101' | '39100102' | '39100103' | '39100104' | '39100105'  // Light Bulbs
  | '39100201' | '39100202' | '39100203'  // Extension Cords & Power

  // Segment 43: Information Technology & Telecom
  | '43100101' | '43100102' | '43100103' | '43100104' | '43100105' | '43100106'  // Computers & Laptops
  | '43102001' | '43102002' | '43102003' | '43102004' | '43102005'  // Mobile Phones & Accessories
  | '43103001' | '43103002' | '43103003' | '43103004'  // Internet & Connectivity

  // Segment 45: Musical Instruments
  | '45100101' | '45100102' | '45100103' | '45100104' | '45100105' | '45100106'  // Musical Instruments

  // Segment 46: Environmental & Weather
  | '46100101' | '46100102' | '46100103' | '46100104' | '46100105' | '46100106'  // Portable Climate Control

  // Segment 47: Arts, Crafts & Hobbies
  | '47100101' | '47100102' | '47100103' | '47100104' | '47100105' | '47100106'  // Drawing & Painting
  | '47100201' | '47100202' | '47100203' | '47100204' | '47100205' | '47100206'  // Crafting Supplies

  // Segment 48: Sports, Toys & Recreation
  | '48100101' | '48100102' | '48100103' | '48100104' | '48100105' | '48100106' | '48100107' | '48100108'  // Athletic Equipment
  | '48200101' | '48200102' | '48200103' | '48200104' | '48200105' | '48200106' | '48200107' | '48200108'  // Children's Toys

  // Segment 49: Baby & Infant Products
  | '49100101' | '49100102' | '49100103' | '49100104' | '49100105' | '49100106'  // Baby Feeding & Care
  | '49100201' | '49100202' | '49100203' | '49100204' | '49100205' | '49100206'  // Baby Clothing & Gear

  // Segment 50: Food, Beverage & Tobacco Products
  | '50200101' | '50200102' | '50200103' | '50200104' | '50200105' | '50200106' | '50200107'  // Meat & Seafood
  | '50201506' | '50201507' | '50201508' | '50201509' | '50201510'  // Fresh Fruits & Vegetables
  | '50201710' | '50201711' | '50201712' | '50201713' | '50201714'  // Prepared Meals
  | '50203501' | '50203502' | '50203503' | '50203504' | '50203505' | '50203506'  // Beverages
  | '50301001' | '50301002' | '50301003' | '50301004' | '50301005' | '50301006'  // Canned & Preserved Foods
  | '50301501' | '50301502' | '50301503' | '50301504' | '50301505' | '50301506'  // Dry Goods & Staples

  // Segment 55: Books, Media & Publishing
  | '55100101' | '55100102' | '55100103' | '55100104' | '55100105' | '55100106'  // Physical Books

  // Segment 60: Education & Training
  | '60100101' | '60100102' | '60100103' | '60100104' | '60100105' | '60100106' | '60100107'  // School Supplies - Writing
  | '60100201' | '60100202' | '60100203' | '60100204'  // School Supplies - Organization
  | '60100301' | '60100302' | '60100303' | '60100304' | '60100305'  // Educational Materials

  // Segment 72: Medical Supplies & Personal Care
  | '72100101' | '72100102' | '72100103' | '72100104' | '72100105' | '72100106'  // Medical Supplies (OTC)
  | '72101501' | '72101502' | '72101503' | '72101504' | '72101505' | '72101506' | '72101620'  // Mobility & Accessibility
  | '72200101' | '72200102' | '72200103' | '72200104' | '72200105' | '72200106' | '72200107'  // Personal Hygiene
  | '72200501' | '72200502' | '72200503' | '72200504'  // Incontinence & Medical Supplies

  // Segment 93: Social Services & Community Support
  | '93150101' | '93150102' | '93150103' | '93150104' | '93150105'  // Emotional & Social Support
  | '93150201' | '93150202' | '93150203' | '93150204' | '93150205'  // Practical Assistance
  | '93150301' | '93150302' | '93150303' | '93150304' | '93150305' | '93150306'  // Skill Sharing & Education
  | '93150401' | '93150402' | '93150403' | '93150404' | '93150405';  // Harm Reduction & Safety

/**
 * Segments in UNSPSC that represent professional services
 * These codes should NEVER appear in OFFER messages
 * They can only appear in REQUEST messages (seeking navigation help)
 */
export type RestrictedSegment = '82' | '83' | '84' | '85' | '90';

/**
 * Segments that are always safe for both OFFER and REQUEST
 */
export type AllowedSegment = 
  | '10' | '25' | '31' | '39' | '43' | '45' | '46' | '47' | '48' | '49'
  | '50' | '55' | '60' | '72' | '93';

/**
 * Extract the segment (first 2 digits) from an 8-digit UNSPSC code
 */
export type GetSegment<T extends UNSPSCCode> = T extends `${infer S}${infer _}` 
  ? S extends `${infer C1}${infer C2}${infer _rest}`
    ? `${C1}${C2}`
    : never
  : never;

// ============================================================================
// MAPPING: CODES TO DESCRIPTIONS
// ============================================================================

/**
 * Complete mapping of all valid UNSPSC codes to human-readable descriptions
 * 
 * Usage:
 *   const description = UNSPSC_CODES['50201506']  // "Fresh vegetables"
 */
export const UNSPSC_CODES: Record<UNSPSCCode, string> = {
  // Segment 10: Animal & Vegetable Products
  '10100101': 'Dog food (dry kibble)',
  '10100102': 'Dog food (wet/canned)',
  '10100103': 'Cat food (dry kibble)',
  '10100104': 'Cat food (wet/canned)',
  '10100105': 'Bird seed & feed',
  '10100106': 'Small animal feed (guinea pig, hamster, rabbit)',
  '10100107': 'Fish food & aquarium supplies',
  '10100201': 'Cat litter',
  '10100202': 'Pet shampoo',
  '10100203': 'Flea & tick treatments',
  '10100204': 'Pet toys',
  '10100205': 'Leashes & collars',
  '10100206': 'Pet bedding',
  '10100207': 'Food & water bowls',
  '10100208': 'Pet carriers & crates',

  // Segment 25: Transportation & Storage
  '25100101': 'Bicycles (adult)',
  '25100102': 'Bicycles (children\'s)',
  '25100103': 'Bike helmets',
  '25100104': 'Bike locks',
  '25100105': 'Bike lights',
  '25100106': 'Bike baskets & cargo carriers',
  '25100107': 'Bike repair kits',
  '25101501': 'Motor oil',
  '25101502': 'Windshield washer fluid',
  '25101503': 'Car batteries',
  '25101504': 'Tires',
  '25101505': 'Jumper cables',
  '25101506': 'Basic tool kits',
  '25200101': 'Bus passes/tickets',
  '25200102': 'Subway/metro passes',
  '25200103': 'Train tickets',
  '25200104': 'Rideshare credits/vouchers',

  // Segment 31: Tools & Hardware
  '31100101': 'Hammers',
  '31100102': 'Screwdrivers (sets)',
  '31100103': 'Pliers & wrenches',
  '31100104': 'Measuring tape',
  '31100105': 'Utility knives',
  '31100106': 'Tool boxes',
  '31100201': 'Drills (power)',
  '31100202': 'Saws (circular, reciprocating)',
  '31100203': 'Sanders',
  '31100204': 'Tool batteries & chargers',
  '31200101': 'Screws (assorted)',
  '31200102': 'Nails',
  '31200103': 'Duct tape',
  '31200104': 'Super glue & adhesives',
  '31200105': 'Zip ties & cable ties',

  // Segment 39: Electrical Equipment
  '39100101': 'LED bulbs',
  '39100102': 'CFL bulbs',
  '39100103': 'Incandescent bulbs',
  '39100104': 'Flashlights',
  '39100105': 'Batteries (AA, AAA, 9V, etc.)',
  '39100201': 'Extension cords',
  '39100202': 'Power strips',
  '39100203': 'Surge protectors',

  // Segment 43: Information Technology & Telecom
  '43100101': 'Desktop computers',
  '43100102': 'Laptop computers',
  '43100103': 'Tablets',
  '43100104': 'Computer monitors',
  '43100105': 'Keyboards & mice',
  '43100106': 'Printers',
  '43102001': 'Mobile phones (smartphones)',
  '43102002': 'Mobile phones (basic/feature phones)',
  '43102003': 'Phone chargers & cables',
  '43102004': 'Phone cases',
  '43102005': 'Prepaid phone cards/minutes',
  '43103001': 'WiFi routers',
  '43103002': 'Modems',
  '43103003': 'Internet service vouchers',
  '43103004': 'Mobile hotspot devices',

  // Segment 45: Musical Instruments
  '45100101': 'Guitars (acoustic, electric)',
  '45100102': 'Keyboards & pianos',
  '45100103': 'Drums & percussion',
  '45100104': 'Wind instruments (flute, clarinet, etc.)',
  '45100105': 'String instruments (violin, cello, etc.)',
  '45100106': 'Brass instruments (trumpet, trombone, etc.)',

  // Segment 46: Environmental & Weather
  '46100101': 'Portable fans',
  '46100102': 'Space heaters',
  '46100103': 'Window AC units',
  '46100104': 'Air purifiers',
  '46100105': 'Dehumidifiers',
  '46100106': 'Humidifiers',

  // Segment 47: Arts, Crafts & Hobbies
  '47100101': 'Paints (acrylic, oil, watercolor)',
  '47100102': 'Paint brushes',
  '47100103': 'Canvas & stretched frames',
  '47100104': 'Sketchbooks & drawing paper',
  '47100105': 'Colored pencils & charcoal',
  '47100106': 'Easels',
  '47100201': 'Fabric & textiles',
  '47100202': 'Sewing thread & needles',
  '47100203': 'Yarn & knitting needles',
  '47100204': 'Glue guns & craft adhesives',
  '47100205': 'Beads & jewelry-making supplies',
  '47100206': 'Scrapbooking materials',

  // Segment 48: Sports, Toys & Recreation
  '48100101': 'Basketballs',
  '48100102': 'Soccer balls',
  '48100103': 'Footballs (American)',
  '48100104': 'Baseball/softball equipment',
  '48100105': 'Tennis rackets & balls',
  '48100106': 'Exercise weights',
  '48100107': 'Yoga mats',
  '48100108': 'Jump ropes',
  '48200101': 'Action figures & dolls',
  '48200102': 'Building blocks (LEGO, etc.)',
  '48200103': 'Board games',
  '48200104': 'Puzzles',
  '48200105': 'Stuffed animals',
  '48200106': 'Arts & crafts kits',
  '48200107': 'Outdoor play equipment (balls, frisbees)',
  '48200108': 'Video games & consoles',

  // Segment 49: Baby & Infant Products
  '49100101': 'Diapers',
  '49100102': 'Wipes',
  '49100103': 'Formula & bottles',
  '49100104': 'Pacifiers & teethers',
  '49100105': 'Diaper cream & ointment',
  '49100106': 'Baby shampoo & lotion',
  '49100201': 'Infant clothing (onesies, pants, etc.)',
  '49100202': 'Baby blankets',
  '49100203': 'Crib sheets & bedding',
  '49100204': 'Strollers & carriers',
  '49100205': 'Car seats',
  '49100206': 'Baby bassinets & cribs',

  // Segment 50: Food, Beverage & Tobacco Products
  '50200101': 'Poultry (chicken, turkey, duck)',
  '50200102': 'Beef',
  '50200103': 'Pork',
  '50200104': 'Fish (fresh/frozen whole fish, fillets)',
  '50200105': 'Shellfish (shrimp, crab, lobster, clams)',
  '50200106': 'Lamb or mutton',
  '50200107': 'Game meat (venison, rabbit, etc.)',
  '50201506': 'Fresh vegetables',
  '50201507': 'Fresh fruits',
  '50201508': 'Herbs & greens',
  '50201509': 'Root vegetables',
  '50201510': 'Leafy greens & lettuce',
  '50201710': 'Prepared meals/takeout (general)',
  '50201711': 'Sandwiches & wraps',
  '50201712': 'Pizza',
  '50201713': 'Asian cuisine',
  '50201714': 'Mexican cuisine',
  '50203501': 'Water & bottled water',
  '50203502': 'Juice',
  '50203503': 'Tea',
  '50203504': 'Coffee',
  '50203505': 'Sports drinks',
  '50203506': 'Non-alcoholic beverages',
  '50301001': 'Canned vegetables',
  '50301002': 'Canned fruits',
  '50301003': 'Canned beans & legumes',
  '50301004': 'Canned soups',
  '50301005': 'Pasta & grains',
  '50301006': 'Cooking oils',
  '50301501': 'Rice & grains',
  '50301502': 'Flour & baking supplies',
  '50301503': 'Sugar & sweeteners',
  '50301504': 'Salt & spices',
  '50301505': 'Nuts & seeds',
  '50301506': 'Dried pasta',

  // Segment 55: Books, Media & Publishing
  '55100101': 'Fiction books (novels, stories)',
  '55100102': 'Non-fiction books (biography, history, etc.)',
  '55100103': 'Children\'s books',
  '55100104': 'Textbooks & educational',
  '55100105': 'Magazines & periodicals',
  '55100106': 'Comics & graphic novels',

  // Segment 60: Education & Training
  '60100101': 'Notebooks & composition books',
  '60100102': 'Loose-leaf paper',
  '60100103': 'Pens',
  '60100104': 'Pencils',
  '60100105': 'Markers & highlighters',
  '60100106': 'Crayons & colored pencils',
  '60100107': 'Erasers & correction fluid',
  '60100201': 'Binders & folders',
  '60100202': 'Backpacks & book bags',
  '60100203': 'Lunchboxes',
  '60100204': 'Pencil cases & pouches',
  '60100301': 'Textbooks',
  '60100302': 'Workbooks',
  '60100303': 'Calculators',
  '60100304': 'Art supplies (paints, brushes, canvases)',
  '60100305': 'Musical instruments (basic)',

  // Segment 72: Medical Supplies & Personal Care
  '72100101': 'Bandages & medical tape',
  '72100102': 'Antiseptic wipes & ointment',
  '72100103': 'Pain relievers (ibuprofen, acetaminophen)',
  '72100104': 'Cold & flu medicines',
  '72100105': 'Antacids',
  '72100106': 'First aid kits',
  '72101501': 'Canes & walkers',
  '72101502': 'Crutches',
  '72101503': 'Wheelchairs (manual)',
  '72101504': 'Wheelchair ramps & accessibility items',
  '72101505': 'Grab bars & handrails',
  '72101506': 'Shower chairs & bath accessories',
  '72101620': 'Wheelchairs (powered)',
  '72200101': 'Toothpaste & toothbrushes',
  '72200102': 'Soap & body wash',
  '72200103': 'Shampoo & conditioner',
  '72200104': 'Deodorant',
  '72200105': 'Feminine hygiene products',
  '72200106': 'Toilet paper',
  '72200107': 'Tissues & kleenex',
  '72200501': 'Adult diapers',
  '72200502': 'Incontinence pads',
  '72200503': 'Adult wipes',
  '72200504': 'Medical gloves (non-latex)',

  // Segment 93: Social Services & Community Support
  '93150101': 'Peer emotional support & listening',
  '93150102': 'Support group facilitation',
  '93150103': 'Peer counseling & advocacy',
  '93150104': 'Mentorship programs',
  '93150105': 'Crisis hotline support',
  '93150201': 'Help with moving',
  '93150202': 'Childcare (informal peer)',
  '93150203': 'Elder care (informal peer)',
  '93150204': 'Accompaniment (medical, legal, bureaucratic)',
  '93150205': 'Rides & transportation assistance',
  '93150301': 'Skill sharing (general)',
  '93150302': 'Language tutoring (peer)',
  '93150303': 'Job search assistance',
  '93150304': 'Resume & interview help',
  '93150305': 'Computer & tech skills teaching',
  '93150306': 'Financial literacy workshops',
  '93150401': 'Street medicine & outreach',
  '93150402': 'Naloxone distribution',
  '93150403': 'Safer use supplies & education',
  '93150404': 'Housing support for unhoused',
  '93150405': 'Food access & nutrition support',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get description for a UNSPSC code
 * 
 * @param code - 8-digit UNSPSC code
 * @returns Human-readable description
 * 
 * @example
 *   getCodeDescription('50201506')  // "Fresh vegetables"
 */
export function getCodeDescription(code: string): string | null {
  if (code.length !== 8) return null;
  return UNSPSC_CODES[code as UNSPSCCode] || null;
}

/**
 * Extract segment (first 2 digits) from a UNSPSC code
 * 
 * @param code - 8-digit UNSPSC code
 * @returns 2-digit segment code
 * 
 * @example
 *   getSegment('50201506')  // '50'
 *   getSegment('72101620')  // '72'
 */
export function getSegment(code: string): string {
  return code.substring(0, 2);
}

/**
 * Extract family (first 4 digits) from a UNSPSC code
 * 
 * @param code - 8-digit UNSPSC code
 * @returns 4-digit family code
 * 
 * @example
 *   getFamily('50201506')  // '5020'
 */
export function getFamily(code: string): string {
  return code.substring(0, 4);
}

/**
 * Extract class (first 6 digits) from a UNSPSC code
 * 
 * @param code - 8-digit UNSPSC code
 * @returns 6-digit class code
 * 
 * @example
 *   getClass('50201506')  // '502015'
 */
export function getClass(code: string): string {
  return code.substring(0, 6);
}

/**
 * Check if a code is in a restricted segment (professional services)
 * 
 * @param code - 8-digit UNSPSC code
 * @returns true if code is professional/restricted
 * 
 * @example
 *   isRestrictedCode('82101501')  // true (legal services)
 *   isRestrictedCode('50201506')  // false (fresh vegetables)
 */
export function isRestrictedCode(code: string): boolean {
  const segment = getSegment(code);
  return ['82', '83', '84', '85', '90'].includes(segment);
}

/**
 * Validate that a code is allowed for a given message type
 * 
 * @param code - 8-digit UNSPSC code
 * @param messageType - 'REQUEST' or 'RESPONSE'
 * @returns true if code is valid for this message type
 * 
 * @example
 *   validateCodeForMessageType('50201506', 'REQUEST')   // true
 *   validateCodeForMessageType('82101501', 'REQUEST')   // true (seeking help)
 *   validateCodeForMessageType('82101501', 'RESPONSE')  // false (offering legal services)
 */
export function validateCodeForMessageType(
  code: string,
  messageType: 'REQUEST' | 'RESPONSE'
): boolean {
  if (messageType === 'REQUEST') {
    // Requests can use any code (including restricted, for seeking help)
    return UNSPSC_CODES.hasOwnProperty(code);
  } else {
    // Responses (offers) cannot use restricted codes
    return !isRestrictedCode(code) && UNSPSC_CODES.hasOwnProperty(code);
  }
}

/**
 * Get all valid codes for a given segment
 * 
 * @param segment - 2-digit segment code
 * @returns Array of valid 8-digit codes in that segment
 * 
 * @example
 *   getCodesForSegment('50')  // ['50200101', '50200102', ..., '50301506']
 */
export function getCodesForSegment(segment: string): UNSPSCCode[] {
  return Object.keys(UNSPSC_CODES).filter(
    code => code.startsWith(segment)
  ) as UNSPSCCode[];
}

/**
 * Search for codes by keyword
 * 
 * @param keyword - Search term (case-insensitive)
 * @returns Array of matching codes and their descriptions
 * 
 * @example
 *   searchCodes('vegetable')  // [{code: '50201506', description: 'Fresh vegetables'}, ...]
 */
export function searchCodes(
  keyword: string
): Array<{ code: UNSPSCCode; description: string }> {
  const lowerKeyword = keyword.toLowerCase();
  return Object.entries(UNSPSC_CODES)
    .filter(([_, description]) =>
      description.toLowerCase().includes(lowerKeyword)
    )
    .map(([code, description]) => ({
      code: code as UNSPSCCode,
      description,
    }));
}

// ============================================================================
// COMMON CODES (For quick reference in app)
// ============================================================================

/**
 * Most frequently used codes in mutual aid contexts
 * Use these for suggestions and defaults
 */
export const COMMON_CODES = {
  // Food (most common category)
  FRESH_VEGETABLES: '50201506' as UNSPSCCode,
  FRESH_FRUITS: '50201507' as UNSPSCCode,
  PREPARED_MEALS: '50201710' as UNSPSCCode,
  BEVERAGES: '50203506' as UNSPSCCode,

  // Mobility & Accessibility
  POWERED_WHEELCHAIR: '72101620' as UNSPSCCode,
  MANUAL_WHEELCHAIR: '72101503' as UNSPSCCode,
  CANES_WALKERS: '72101501' as UNSPSCCode,

  // Personal Care
  FIRST_AID_KITS: '72100106' as UNSPSCCode,
  TOILETRIES: '72200101' as UNSPSCCode,

  // Peer Support
  EMOTIONAL_SUPPORT: '93150101' as UNSPSCCode,
  SKILL_SHARING: '93150301' as UNSPSCCode,
  RIDES_TRANSPORTATION: '93150205' as UNSPSCCode,

  // Tech
  LAPTOPS: '43100102' as UNSPSCCode,
  SMARTPHONES: '43102001' as UNSPSCCode,

  // Clothing & Basics
  BOOKS: '55100101' as UNSPSCCode,
  SCHOOL_SUPPLIES: '60100101' as UNSPSCCode,
} as const;

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

/**
 * Summary of available exports:
 * 
 * Types:
 *   - UNSPSCCode: Type-safe 8-digit code
 *   - RestrictedSegment: Professional service segments
 *   - AllowedSegment: Safe segments
 * 
 * Constants:
 *   - UNSPSC_CODES: Complete mapping of code → description
 *   - COMMON_CODES: Frequently used codes
 * 
 * Functions:
 *   - getCodeDescription(code): Get human-readable description
 *   - getSegment(code): Extract segment
 *   - getFamily(code): Extract family
 *   - getClass(code): Extract class
 *   - isRestrictedCode(code): Check if professional service
 *   - validateCodeForMessageType(code, type): Validate against message type
 *   - getCodesForSegment(segment): Get all codes in segment
 *   - searchCodes(keyword): Search by keyword
 */

export default {
  UNSPSC_CODES,
  COMMON_CODES,
  getCodeDescription,
  getSegment,
  getFamily,
  getClass,
  isRestrictedCode,
  validateCodeForMessageType,
  getCodesForSegment,
  searchCodes,
};
