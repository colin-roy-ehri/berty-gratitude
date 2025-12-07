# UNSPSC Reference Guide - Quick Start
## How to Use These Files Together

You now have **3 complementary versions** of the UNSPSC reference:

1. **unspsc-types.ts** - TypeScript types for your IDE
2. **unspsc-mutual-aid-reference.json** - Machine-readable data
3. **unspsc-for-llms.md** - LLM context for Claude integration

---

## Which File Should I Use?

### For TypeScript Development (IDE Autocomplete)
**File**: `unspsc-types.ts`

```typescript
import { UNSPSCCode, UNSPSC_CODES, COMMON_CODES, searchCodes } from './unspsc-types'

// Autocomplete: COMMON_CODES.FRESH_VEGETABLES → 50201506
const offerCode: UNSPSCCode = COMMON_CODES.FRESH_VEGETABLES

// Get description
const desc = UNSPSC_CODES[offerCode]  // "Fresh vegetables"

// Validate before sending message
if (validateCodeForMessageType(offerCode, 'REQUEST')) {
  // Safe to include in REQUEST message
}

// Search for codes
const results = searchCodes('wheelchair')
// [{code: '72101620', description: 'Wheelchairs (powered)'}, ...]
```

**Use this when**:
- Writing TypeScript/JavaScript code
- Need IDE autocomplete
- Want type-safe code validation
- Building the message creation UI

---

### For Backend Data Processing
**File**: `unspsc-mutual-aid-reference.json`

```javascript
const unspsc = require('./unspsc-mutual-aid-reference.json')

// Look up a code
const commodity = unspsc.segments['50'].families['5020'].classes['502015'].commodities['50201506']
// → "Fresh vegetables"

// Iterate through all codes
for (const [segment, data] of Object.entries(unspsc.segments)) {
  console.log(`Segment ${segment}: ${data.name}`)
}

// Check for validation rules
if (unspsc.utilities.restricted_segments.includes('82')) {
  // Reject legal service codes in OFFER messages
}
```

**Use this when**:
- Processing messages on backend
- Need to serialize/deserialize codes
- Building API responses
- Validating message integrity

---

### For LLM Integration (Claude)
**File**: `unspsc-for-llms.md`

**Copy this entire file into your Claude prompt when**:
- Using Claude to interpret user descriptions
- Need help suggesting appropriate codes
- Validating that codes match user intent
- Teaching the LLM about mutual aid categorization

**Example prompt**:

```markdown
You are helping classify mutual aid needs/offers. 
Use this UNSPSC reference to suggest the most appropriate code:

[PASTE ENTIRE unspsc-for-llms.md CONTENTS HERE]

User said: "I have extra tomatoes from my garden to share"

Based on the UNSPSC reference above:
1. Identify the most specific code
2. Show the hierarchy (segment → family → class → commodity)
3. Explain why this code matches
4. Offer alternatives if applicable
```

---

## Integration Examples

### Example 1: User Creates an Offer (Full Flow)

```typescript
// 1. User describes their offer in natural language
const userInput = "I have 100 pounds of fresh vegetables from my garden"

// 2. Call Claude with LLM context (use unspsc-for-llms.md in prompt)
const response = await claude.messages.create({
  model: "claude-3-5-sonnet-20241022",
  messages: [{
    role: "user",
    content: `${UNSPSC_REFERENCE_MARKDOWN}\n\nUser said: "${userInput}"`
  }]
})
// Claude responds: "50201506 - Fresh vegetables"

// 3. Validate with TypeScript types
const suggestedCode = '50201506' as UNSPSCCode
if (validateCodeForMessageType(suggestedCode, 'REQUEST')) {
  // Code is valid for an offer (REQUEST message)
}

// 4. Store in database using JSON schema
const offer = {
  type: 'REQUEST',  // We're requesting community to take vegetables
  unspsc: suggestedCode,
  quantity: 100,
  unitOfMeasure: 'LB',
  timestamp: Date.now(),
  publicKey: userPublicKey
}

// 5. Serialize to binary for BLE transmission
const serialized = MutualAidMessageCodec.serialize(offer)
```

---

### Example 2: Receiving & Decoding a Message

```typescript
// 1. Receive binary data from BLE
const receivedBuffer = ble.onCharacteristicDiscovered(...)

// 2. Deserialize using codec
const message = MutualAidMessageCodec.deserialize(receivedBuffer)
const code: UNSPSCCode = message.unspsc

// 3. Look up description using TypeScript
const description = UNSPSC_CODES[code]
// → "Fresh vegetables"

// 4. Get hierarchy context using utility functions
const segment = getSegment(code)  // '50'
const family = getFamily(code)    // '5020'
const class_ = getClass(code)     // '502015'

// 5. Display to user in context
console.log(`
Someone is offering: ${description}
  Category: Food, Beverage & Tobacco Products
  Type: Fresh Fruits & Vegetables
  Specific Item: Fresh vegetables
`)

// 6. Check if restricted (professional services)
if (isRestrictedCode(code)) {
  console.warn('This appears to be a professional service')
}
```

---

### Example 3: Building a Code Selector UI

```typescript
import { getCodesForSegment, searchCodes } from './unspsc-types'

// User types "wheel" in search box
function handleSearch(query: string) {
  const results = searchCodes(query)
  
  // Display results
  return results.map(({code, description}) => (
    <CodeOption key={code} value={code} label={description} />
  ))
}

// Results:
// [ 
//   {code: '72101503', description: 'Wheelchairs (manual)'},
//   {code: '72101620', description: 'Wheelchairs (powered)'},
//   {code: '72101504', description: 'Wheelchair ramps & accessibility items'}
// ]

// User selects a category (segment)
function handleSegmentSelect(segment: string) {
  const codes = getCodesForSegment(segment)
  
  // Display all codes in that segment
  return codes.map(code => (
    <CodeOption key={code} value={code} label={UNSPSC_CODES[code]} />
  ))
}
```

---

### Example 4: Validation in Message Codec

```typescript
// In your mutual-aid-message.ts codec

function validateMessage(msg: MutualAidMessage): ValidationResult {
  // Use TypeScript types to ensure code is valid
  const code: UNSPSCCode = msg.unspsc
  
  // Check if code exists in our reference
  if (!UNSPSC_CODES.hasOwnProperty(code)) {
    return { 
      valid: false, 
      error: `Unknown UNSPSC code: ${code}`
    }
  }
  
  // Check if code is appropriate for message type
  if (!validateCodeForMessageType(code, msg.messageType)) {
    return {
      valid: false,
      error: `Cannot offer professional services (${code}). Use peer support codes instead.`
    }
  }
  
  return { valid: true }
}
```

---

## File Organization in Your Project

**Recommended structure**:

```
src/
├── codec/
│   ├── mutual-aid-message.ts         (existing)
│   ├── unspsc-types.ts               (import this)
│   └── validation.ts                 (use types here)
├── data/
│   └── unspsc-reference.json         (import this)
├── ui/
│   ├── CodeSelector.tsx              (use types + search)
│   └── OfferDisplay.tsx              (use descriptions)
├── llm/
│   └── claude-config.ts              (include markdown in prompts)
└── constants/
    └── UNSPSC_REFERENCE.md           (copy of unspsc-for-llms.md)
```

---

## Quick Reference: Most Used Codes

Copy these into `COMMON_CODES` in your app:

```typescript
const QUICK_ACCESS = {
  // Food (Most Common)
  'Fresh Vegetables': '50201506',
  'Fresh Fruits': '50201507',
  'Prepared Meals': '50201710',
  'Beverages': '50203506',
  
  // Accessibility
  'Powered Wheelchair': '72101620',
  'Manual Wheelchair': '72101503',
  'Canes & Walkers': '72101501',
  
  // Peer Support
  'Emotional Support': '93150101',
  'Skills Teaching': '93150305',
  'Rides & Transport': '93150205',
  
  // Essentials
  'First Aid': '72100106',
  'School Supplies': '60100101',
  'Diapers': '49100101',
}
```

---

## Testing the Integration

```typescript
// Quick integration test
import { UNSPSC_CODES, validateCodeForMessageType } from './unspsc-types'
import unspscJSON from './unspsc-reference.json'

function testUNSPSCIntegration() {
  // Test 1: TypeScript types
  const code: UNSPSCCode = '50201506'
  console.log('✓ TypeScript types work')
  
  // Test 2: Validation
  if (validateCodeForMessageType(code, 'REQUEST')) {
    console.log('✓ Validation works')
  }
  
  // Test 3: JSON reference
  if (unspscJSON.segments['50']) {
    console.log('✓ JSON reference loads')
  }
  
  // Test 4: All codes in TS match JSON
  const tsCount = Object.keys(UNSPSC_CODES).length
  console.log(`✓ ${tsCount} codes available`)
  
  console.log('All tests passed!')
}
```

---

## When to Update the Reference

These files track UNSPSC as it relates to mutual aid. Update when:

- ✅ Adding new mutual aid categories (peer support types, harm reduction)
- ✅ Including new material goods (emerging tech, climate adaptations)
- ❌ NOT when UNSPSC itself updates (only use stable, peer-appropriate codes)

To update:

1. Edit `unspsc-types.ts` (add new code to UNSPSCCode union type)
2. Edit `unspsc-mutual-aid-reference.json` (add to appropriate segment)
3. Edit `unspsc-for-llms.md` (add explanation)
4. Bump version in metadata
5. Commit with message: `docs: Add code XXXXX - [description]`

---

## Support & Questions

- **Need a code for something not listed?** 
  - Check full UNSPSC at https://www.unspsc.org/
  - If peer-appropriate, add it to all three files
  - If professional service, create peer alternative instead

- **LLM not suggesting right code?**
  - Add more context to `unspsc-for-llms.md`
  - Show Claude successful examples in your prompt

- **TypeScript types missing a code?**
  - Run TypeScript compiler to catch mismatches
  - Add to `COMMON_CODES` if it's frequently used

---

## Attribution

UNSPSC codes maintained by: https://www.unspsc.org/  
Mutual aid classification: Developed for peer-to-peer community support  
Created for: Privacy-first mutual aid apps

---

**These three files work together. Keep them in sync!**

- `.ts` = IDE autocomplete + type safety
- `.json` = Backend data + API responses  
- `.md` = LLM context + documentation

*Version 1.0 | Last updated December 2025*
