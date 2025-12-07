# UNSPSC Reference for Mutual Aid Apps
## LLM-Optimized Context Document

**Version**: 1.0  
**Last Updated**: 2025-12-06  
**Purpose**: Provide Claude and other LLMs with complete UNSPSC classification context for mutual aid message interpretation and generation

---

## Quick Reference for LLMs

When processing mutual aid messages, you'll encounter 8-digit UNSPSC codes. Use this document to:
1. Decode what a code means in mutual aid context
2. Help users select appropriate codes
3. Validate that codes match the offer/request type
4. Flag inappropriate professional service codes

### The Hierarchy (Remember this!)

```
Segment (2 digits)  → Broadest category
  Family (4 digits)   → Product family
    Class (6 digits)    → Specific class
      Commodity (8 digits) → Most specific item
```

Example: `50201506`
- `50` = Food, Beverage & Tobacco Products
- `5020` = Food Products
- `502015` = Fresh Fruits & Vegetables
- `50201506` = Fresh Vegetables (the actual item)

---

## All UNSPSC Codes by Segment

### SEGMENT 10: Animal & Vegetable Products
**Context**: Pet supplies and materials derived from animals

**Family 1010: Pet Supplies**
- **Class 101001: Pet Food**
  - 10100101 = Dog food (dry kibble)
  - 10100102 = Dog food (wet/canned)
  - 10100103 = Cat food (dry kibble)
  - 10100104 = Cat food (wet/canned)
  - 10100105 = Bird seed & feed
  - 10100106 = Small animal feed (guinea pig, hamster, rabbit)
  - 10100107 = Fish food & aquarium supplies

- **Class 101002: Pet Care Supplies**
  - 10100201 = Cat litter
  - 10100202 = Pet shampoo
  - 10100203 = Flea & tick treatments
  - 10100204 = Pet toys
  - 10100205 = Leashes & collars
  - 10100206 = Pet bedding
  - 10100207 = Food & water bowls
  - 10100208 = Pet carriers & crates

---

### SEGMENT 25: Transportation & Storage
**Context**: Bikes, cars, transit access

**Family 2510: Vehicles & Parts**

- **Class 251001: Bicycles & Accessories**
  - 25100101 = Bicycles (adult)
  - 25100102 = Bicycles (children's)
  - 25100103 = Bike helmets
  - 25100104 = Bike locks
  - 25100105 = Bike lights
  - 25100106 = Bike baskets & cargo carriers
  - 25100107 = Bike repair kits

- **Class 251015: Vehicle Parts & Maintenance**
  - 25101501 = Motor oil
  - 25101502 = Windshield washer fluid
  - 25101503 = Car batteries
  - 25101504 = Tires
  - 25101505 = Jumper cables
  - 25101506 = Basic tool kits

**Family 2520: Public Transit**

- **Class 252001: Transit Access**
  - 25200101 = Bus passes/tickets
  - 25200102 = Subway/metro passes
  - 25200103 = Train tickets
  - 25200104 = Rideshare credits/vouchers

---

### SEGMENT 31: Tools & Hardware
**Context**: Hand tools, power tools, fasteners

**Family 3110: Hand Tools**

- **Class 311001: Basic Hand Tools**
  - 31100101 = Hammers
  - 31100102 = Screwdrivers (sets)
  - 31100103 = Pliers & wrenches
  - 31100104 = Measuring tape
  - 31100105 = Utility knives
  - 31100106 = Tool boxes

- **Class 311002: Power Tools**
  - 31100201 = Drills (power)
  - 31100202 = Saws (circular, reciprocating)
  - 31100203 = Sanders
  - 31100204 = Tool batteries & chargers

**Family 3120: Hardware & Fasteners**

- **Class 312001: Fasteners & Adhesives**
  - 31200101 = Screws (assorted)
  - 31200102 = Nails
  - 31200103 = Duct tape
  - 31200104 = Super glue & adhesives
  - 31200105 = Zip ties & cable ties

---

### SEGMENT 39: Electrical Equipment
**Context**: Lighting, power distribution, batteries

**Family 3910: Light Bulbs & Fixtures**

- **Class 391001: Light Bulbs**
  - 39100101 = LED bulbs
  - 39100102 = CFL bulbs
  - 39100103 = Incandescent bulbs
  - 39100104 = Flashlights
  - 39100105 = Batteries (AA, AAA, 9V, etc.)

- **Class 391002: Extension Cords & Power**
  - 39100201 = Extension cords
  - 39100202 = Power strips
  - 39100203 = Surge protectors

---

### SEGMENT 43: Information Technology & Telecom
**Context**: Computers, phones, internet

**Family 4310: Computers & Electronics**

- **Class 431001: Computers & Laptops**
  - 43100101 = Desktop computers
  - 43100102 = Laptop computers
  - 43100103 = Tablets
  - 43100104 = Computer monitors
  - 43100105 = Keyboards & mice
  - 43100106 = Printers

- **Class 431020: Mobile Phones & Accessories**
  - 43102001 = Mobile phones (smartphones)
  - 43102002 = Mobile phones (basic/feature phones)
  - 43102003 = Phone chargers & cables
  - 43102004 = Phone cases
  - 43102005 = Prepaid phone cards/minutes

- **Class 431030: Internet & Connectivity**
  - 43103001 = WiFi routers
  - 43103002 = Modems
  - 43103003 = Internet service vouchers
  - 43103004 = Mobile hotspot devices

---

### SEGMENT 45: Musical Instruments
**Context**: Instruments for music-making

**Family 4510: Instruments**

- **Class 451001: Musical Instruments**
  - 45100101 = Guitars (acoustic, electric)
  - 45100102 = Keyboards & pianos
  - 45100103 = Drums & percussion
  - 45100104 = Wind instruments (flute, clarinet, etc.)
  - 45100105 = String instruments (violin, cello, etc.)
  - 45100106 = Brass instruments (trumpet, trombone, etc.)

---

### SEGMENT 46: Environmental & Weather
**Context**: Climate control equipment

**Family 4610: Heating & Cooling**

- **Class 461001: Portable Climate Control**
  - 46100101 = Portable fans
  - 46100102 = Space heaters
  - 46100103 = Window AC units
  - 46100104 = Air purifiers
  - 46100105 = Dehumidifiers
  - 46100106 = Humidifiers

---

### SEGMENT 47: Arts, Crafts & Hobbies
**Context**: Creative supplies

**Family 4710: Art Supplies**

- **Class 471001: Drawing & Painting**
  - 47100101 = Paints (acrylic, oil, watercolor)
  - 47100102 = Paint brushes
  - 47100103 = Canvas & stretched frames
  - 47100104 = Sketchbooks & drawing paper
  - 47100105 = Colored pencils & charcoal
  - 47100106 = Easels

- **Class 471002: Crafting Supplies**
  - 47100201 = Fabric & textiles
  - 47100202 = Sewing thread & needles
  - 47100203 = Yarn & knitting needles
  - 47100204 = Glue guns & craft adhesives
  - 47100205 = Beads & jewelry-making supplies
  - 47100206 = Scrapbooking materials

---

### SEGMENT 48: Sports, Toys & Recreation
**Context**: Sports equipment and toys

**Family 4810: Sports Equipment**

- **Class 481001: Athletic Equipment**
  - 48100101 = Basketballs
  - 48100102 = Soccer balls
  - 48100103 = Footballs (American)
  - 48100104 = Baseball/softball equipment
  - 48100105 = Tennis rackets & balls
  - 48100106 = Exercise weights
  - 48100107 = Yoga mats
  - 48100108 = Jump ropes

**Family 4820: Toys & Games**

- **Class 482001: Children's Toys**
  - 48200101 = Action figures & dolls
  - 48200102 = Building blocks (LEGO, etc.)
  - 48200103 = Board games
  - 48200104 = Puzzles
  - 48200105 = Stuffed animals
  - 48200106 = Arts & crafts kits
  - 48200107 = Outdoor play equipment (balls, frisbees)
  - 48200108 = Video games & consoles

---

### SEGMENT 49: Baby & Infant Products
**Context**: Baby care and clothing

**Family 4910: Baby Care**

- **Class 491001: Baby Feeding & Care**
  - 49100101 = Diapers
  - 49100102 = Wipes
  - 49100103 = Formula & bottles
  - 49100104 = Pacifiers & teethers
  - 49100105 = Diaper cream & ointment
  - 49100106 = Baby shampoo & lotion

- **Class 491002: Baby Clothing & Gear**
  - 49100201 = Infant clothing (onesies, pants, etc.)
  - 49100202 = Baby blankets
  - 49100203 = Crib sheets & bedding
  - 49100204 = Strollers & carriers
  - 49100205 = Car seats
  - 49100206 = Baby bassinets & cribs

---

### SEGMENT 50: Food, Beverage & Tobacco Products
**Context**: The most commonly used segment in mutual aid

**Family 5020: Food Products**

- **Class 502001: Meat & Seafood**
  - 50200101 = Poultry (chicken, turkey, duck)
  - 50200102 = Beef
  - 50200103 = Pork
  - 50200104 = Fish (fresh/frozen whole fish, fillets)
  - 50200105 = Shellfish (shrimp, crab, lobster, clams)
  - 50200106 = Lamb or mutton
  - 50200107 = Game meat (venison, rabbit, etc.)

- **Class 502015: Fresh Fruits & Vegetables** ⭐ *Very common*
  - 50201506 = Fresh vegetables (most common code)
  - 50201507 = Fresh fruits
  - 50201508 = Herbs & greens
  - 50201509 = Root vegetables
  - 50201510 = Leafy greens & lettuce

- **Class 502017: Prepared Meals & Takeout**
  - 50201710 = Prepared meals/takeout (general)
  - 50201711 = Sandwiches & wraps
  - 50201712 = Pizza
  - 50201713 = Asian cuisine
  - 50201714 = Mexican cuisine

- **Class 502035: Beverages**
  - 50203501 = Water & bottled water
  - 50203502 = Juice
  - 50203503 = Tea
  - 50203504 = Coffee
  - 50203505 = Sports drinks
  - 50203506 = Non-alcoholic beverages

**Family 5030: Snacks & Pantry Staples**

- **Class 503010: Canned & Preserved Foods**
  - 50301001 = Canned vegetables
  - 50301002 = Canned fruits
  - 50301003 = Canned beans & legumes
  - 50301004 = Canned soups
  - 50301005 = Pasta & grains
  - 50301006 = Cooking oils

- **Class 503015: Dry Goods & Staples**
  - 50301501 = Rice & grains
  - 50301502 = Flour & baking supplies
  - 50301503 = Sugar & sweeteners
  - 50301504 = Salt & spices
  - 50301505 = Nuts & seeds
  - 50301506 = Dried pasta

---

### SEGMENT 55: Books, Media & Publishing
**Context**: Physical media

**Family 5510: Books**

- **Class 551001: Physical Books**
  - 55100101 = Fiction books (novels, stories)
  - 55100102 = Non-fiction books (biography, history, etc.)
  - 55100103 = Children's books
  - 55100104 = Textbooks & educational
  - 55100105 = Magazines & periodicals
  - 55100106 = Comics & graphic novels

---

### SEGMENT 60: Education & Training
**Context**: School and educational supplies

**Family 6010: Educational Supplies**

- **Class 601001: School Supplies - Writing**
  - 60100101 = Notebooks & composition books
  - 60100102 = Loose-leaf paper
  - 60100103 = Pens
  - 60100104 = Pencils
  - 60100105 = Markers & highlighters
  - 60100106 = Crayons & colored pencils
  - 60100107 = Erasers & correction fluid

- **Class 601002: School Supplies - Organization**
  - 60100201 = Binders & folders
  - 60100202 = Backpacks & book bags
  - 60100203 = Lunchboxes
  - 60100204 = Pencil cases & pouches

- **Class 601003: Educational Materials**
  - 60100301 = Textbooks
  - 60100302 = Workbooks
  - 60100303 = Calculators
  - 60100304 = Art supplies (paints, brushes, canvases)
  - 60100305 = Musical instruments (basic)

---

### SEGMENT 72: Medical Supplies & Personal Care
**Context**: Health, hygiene, mobility

**Family 7210: Medical Equipment & Supplies**

- **Class 721001: Medical Supplies (OTC)** ⭐ *Important for mutual aid*
  - 72100101 = Bandages & medical tape
  - 72100102 = Antiseptic wipes & ointment
  - 72100103 = Pain relievers (ibuprofen, acetaminophen)
  - 72100104 = Cold & flu medicines
  - 72100105 = Antacids
  - 72100106 = First aid kits

- **Class 721015: Mobility & Accessibility** ⭐ *Critical for accessibility*
  - 72101501 = Canes & walkers
  - 72101502 = Crutches
  - 72101503 = Wheelchairs (manual)
  - 72101504 = Wheelchair ramps & accessibility items
  - 72101505 = Grab bars & handrails
  - 72101506 = Shower chairs & bath accessories
  - 72101620 = Wheelchairs (powered)

**Family 7220: Hygiene & Personal Care**

- **Class 722001: Personal Hygiene**
  - 72200101 = Toothpaste & toothbrushes
  - 72200102 = Soap & body wash
  - 72200103 = Shampoo & conditioner
  - 72200104 = Deodorant
  - 72200105 = Feminine hygiene products
  - 72200106 = Toilet paper
  - 72200107 = Tissues & kleenex

- **Class 722005: Incontinence & Medical Supplies**
  - 72200501 = Adult diapers
  - 72200502 = Incontinence pads
  - 72200503 = Adult wipes
  - 72200504 = Medical gloves (non-latex)

---

### SEGMENT 93: Social Services & Community Support
**Context**: Peer-based mutual aid ONLY (no professional services)

**Family 9315: Peer Support Services**

- **Class 931501: Emotional & Social Support**
  - 93150101 = Peer emotional support & listening
  - 93150102 = Support group facilitation
  - 93150103 = Peer counseling & advocacy
  - 93150104 = Mentorship programs
  - 93150105 = Crisis hotline support

- **Class 931502: Practical Assistance**
  - 93150201 = Help with moving
  - 93150202 = Childcare (informal peer)
  - 93150203 = Elder care (informal peer)
  - 93150204 = Accompaniment (medical, legal, bureaucratic)
  - 93150205 = Rides & transportation assistance

- **Class 931503: Skill Sharing & Education**
  - 93150301 = Skill sharing (general)
  - 93150302 = Language tutoring (peer)
  - 93150303 = Job search assistance
  - 93150304 = Resume & interview help
  - 93150305 = Computer & tech skills teaching
  - 93150306 = Financial literacy workshops

- **Class 931504: Harm Reduction & Safety**
  - 93150401 = Street medicine & outreach
  - 93150402 = Naloxone distribution
  - 93150403 = Safer use supplies & education
  - 93150404 = Housing support for unhoused
  - 93150405 = Food access & nutrition support

---

## Critical Rules for LLMs

### ❌ RESTRICTED SEGMENTS (Never in OFFER messages)

These professional service segments can ONLY appear in REQUEST messages (seeking navigation help):

- **Segment 82** - Legal Services (entirely)
- **Segment 83** - Professional Education (entirely)
- **Segment 84** - Financial Services (entirely)
- **Segment 85** - Healthcare Services (entirely)
- **90xxxxx** - Commercial Childcare services

**Example of correct usage:**
- ❌ OFFER: "I'm a lawyer offering free legal services" (code 82101501)
- ✅ REQUEST: "I need help finding a lawyer for eviction defense" (code 82101501 acceptable with context)

### ✅ ALLOWED PEER ALTERNATIVES

When a professional code is mentioned, suggest these peer alternatives:

| Professional Service | Peer Alternative | Code |
|---------------------|------------------|------|
| Therapy/Counseling | Peer emotional support | 93150101 |
| Legal representation | Court accompaniment | 93150204 |
| Medical services | Health navigation help | 93150301 |
| Professional childcare | Informal childcare exchange | 93150202 |
| Financial planning | Financial literacy workshops | 93150306 |

---

## For LLM Integration

### When Processing User Input

**Task**: Help user describe their need/offer in their own words, then suggest UNSPSC code

**Process**:
1. Listen to user's description
2. Identify the core item/service
3. Match against Segment → Family → Class → Commodity hierarchy
4. Suggest 2-3 most likely codes
5. Show user what each code means
6. Validate against restricted codes

**Example prompt for Claude to use internally**:

```
User said: "I have extra tomatoes from my garden"
→ Segment 50 (Food, Beverage)
→ Family 5020 (Food Products)
→ Class 502015 (Fresh Fruits & Vegetables)
→ Commodity 50201506 (Fresh vegetables)

Suggestion: "50201506 - Fresh vegetables"
Alternative: "50201507 - Fresh fruits" (if user meant different produce)
```

### When Interpreting Incoming Messages

**Task**: Decode a message with code and show user what it means

**Example**:
```
Received code: 72101620
↓
Segment 72: Medical Supplies & Personal Care
↓
Family 7210: Medical Equipment & Supplies
↓
Class 721015: Mobility & Accessibility
↓
Commodity 72101620: Wheelchairs (powered)

Display to user: "Someone is offering a powered wheelchair"
```

### When Validating Message Integrity

**Rules**:
1. If code has 8 digits AND is in restricted segment (82-85, 90x):
   - If messageType = "OFFER" → FLAG ERROR
   - If messageType = "REQUEST" → Allow (assume seeking help)

2. If code is incomplete or malformed → Suggest closest match

3. If code doesn't exist in reference → Flag and suggest similar codes

---

## Common Mutual Aid Scenarios

### Food Distribution Network
- Most common code: **50201506** (Fresh vegetables)
- Also: 50201507 (fruits), 50201710 (prepared meals), 50203506 (beverages)
- Message type: REQUEST (offering) or RESPONSE (requesting)

### Medical Equipment Lending Library
- Most common code: **72101620** (Powered wheelchairs)
- Also: 72101503 (manual wheelchairs), 72101501 (canes & walkers)
- Message type: REQUEST (offering) or RESPONSE (requesting)

### Skill Sharing Circle
- Most common code: **93150305** (Computer & tech skills teaching)
- Also: 93150302 (language tutoring), 93150303 (job search assistance)
- Message type: REQUEST (offering to teach) or RESPONSE (requesting to learn)

### Disaster Relief & Mutual Support
- Multiple codes: batteries (39100105), water (50203501), first aid (72100106)
- Message type: REQUEST (offering supplies) or RESPONSE (requesting help)

---

## Notes for Future Extension

This reference covers v1.0 of the UNSPSC classification for mutual aid. Future versions may add:

- Custom codes for services not well-represented (housing, childcare, emotional support)
- Seasonal variations (winter gear, summer items)
- Regional variations (culturally appropriate foods, transportation)
- Federated learning codes for documenting successful matches

For now, this set of codes provides comprehensive coverage of material goods and foundational peer support categories.

---

**Created for mutual aid developers and LLM systems**  
*Keep it peer. Keep it free. Keep it mutual.*
