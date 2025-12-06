# Mutual Aid Community Network - Development Plan
## Berty-based Implementation for Privacy-First Peer-to-Peer Mutual Aid

**Project**: Gratitude - A Berty fork implementing privacy-first mutual aid messaging with semantic matching  
**Status**: Initial planning phase  
**Last Updated**: December 2025  
**Lead Developer**: Colin Roy  

---

## Project Vision

Build a privacy-first, peer-to-peer mutual aid platform that enables community members to broadcast needs and offers without central servers, surveillance, or hierarchical gatekeeping. The app operates entirely offline-first with optional internet/Tor connectivity, using a custom binary message codec optimized for low-bandwidth mesh networks.

**Core Principles**:
- ✅ No servers, no surveillance, no central authority
- ✅ Horizontal relationships (no reputation/trust scoring)
- ✅ Dignity-preserving (categorical offers/needs, not hierarchical)
- ✅ Accessible to vulnerable populations
- ✅ Extensible for community-specific AI/matching

---

## Phase Overview

| Phase | Timeline | Status | Focus |
|-------|----------|--------|-------|
| **Phase 1** | Weeks 1-4 | Current | Setup + Berty baseline integration |
| **Phase 2** | Weeks 5-8 | Planned | Custom codec + message format |
| **Phase 3** | Weeks 9-12 | Planned | UI/UX for offers/needs |
| **Phase 4** | Weeks 13-16 | Planned | Local semantic matching |
| **Phase 5** | Weeks 17-20 | Planned | Community testing + iteration |
| **Phase 6** | Week 21+ | Future | Hardware expansion, open source |

---

## PHASE 1: Foundation & Setup (Weeks 1-4)

### 1.1 Repository & Development Environment

**Objective**: Establish clean fork and development workflow

**Tasks**:
- [ ] Fork Berty repository (`berty/berty`)
- [ ] Name: `colin-roy-ehri/gratitude` (or similar)
- [ ] Set up development branches:
  - `main` → stable releases
  - `develop` → active development
  - `feature/*` → feature branches
  - `wip/*` → work-in-progress
- [ ] Clone locally and verify builds
  - Go backend (`./go`)
  - React Native app (`./js`)
  - Both platforms (Android + iOS if possible)
- [ ] Set up CI/CD (GitHub Actions or similar)
  - Lint checks
  - Test runs
  - Build verification

**Acceptance Criteria**:
- ✅ Clean fork with clear history
- ✅ Both backend and frontend build successfully
- ✅ Can run on physical Android device or emulator
- ✅ Git workflow documented

**Documentation to Create**:
- `DEVELOPMENT.md` - Setup instructions
- `.github/CONTRIBUTING.md` - Contribution guidelines
- `ARCHITECTURE.md` - System overview (for this document)

---

### 1.2 Understand Berty Architecture

**Objective**: Deep understanding of Berty's codebase before modification

**Study Areas**:

**Backend (Go)**:
- [ ] Study `./go/pkg/bertyprotocol` - Core P2P protocol
  - Group creation/management
  - Message signing + encryption
  - Contact discovery
- [ ] Study `./go/pkg/bertybridge` - gomobile bindings for React Native
- [ ] Understand Wesh Protocol concepts:
  - OrbitDB for group state
  - IPFS for peer discovery
  - Device/account identity system
- [ ] Study message routing and sync

**Frontend (React Native)**:
- [ ] Study `./js` structure
  - Redux store architecture
  - Navigation patterns
  - BLE integration (if any)
  - UI component library
- [ ] Understand existing message types
- [ ] Study contact/group screens

**Relevant Files to Review**:
```
go/
  pkg/bertyprotocol/
    - protocol.proto (message definitions)
    - service.go (main service)
    - events.go (event handling)
  
js/
  src/screens/
  src/navigation/
  src/redux/
  src/components/
```

**Acceptance Criteria**:
- ✅ Can explain Wesh Protocol flow
- ✅ Can identify where messages are serialized/deserialized
- ✅ Understand current message format + limitations
- ✅ Know how to add new message types

**Documentation to Create**:
- `ARCHITECTURE.md` - Complete system diagram + flow
- `MESSAGE_FORMAT.md` - Current Berty message structure

---

### 1.3 Baseline Functionality Verification

**Objective**: Confirm Berty works as-is before modifications

**Tasks**:
- [ ] Deploy to Android device/emulator
- [ ] Create local group
- [ ] Send text messages
- [ ] Verify offline messaging works
- [ ] Verify Tor/internet sync (if configured)
- [ ] Test with 2+ devices (emulator + real device)
- [ ] Document any issues

**Acceptance Criteria**:
- ✅ All core Berty features work
- ✅ No crashes in basic workflow
- ✅ Documented baseline behavior

---

### 1.4 Planning & Design

**Objective**: Detailed plan for codec + UI integration

**Tasks**:
- [ ] Review existing mutual aid codec spec
  - Binary format (64-75 bytes)
  - Ed25519 keys
  - UNSPSC codes
  - Time windows
  - Optional fields (qty, UOM, floor, room, diet)
- [ ] Design integration points:
  - Where to add new message type in Berty
  - How to extend protocol.proto
  - Where codec ser/deser happens
  - UI screens for offers/needs
- [ ] Plan data models:
  - Offer/Need structures in Go
  - Redux store extensions
  - SQLite schema (if needed)
- [ ] Create API design document
  - How UI calls mutual aid features
  - How codec plugs into message pipeline
  - Error handling + validation

**Acceptance Criteria**:
- ✅ Clear design doc with diagrams
- ✅ Integration points identified
- ✅ Timeline estimate for Phase 2
- ✅ Team alignment on approach

**Documentation to Create**:
- `DESIGN.md` - Integration architecture
- `API.md` - Service API spec
- `ROADMAP.md` - Timeline + milestones

---

## PHASE 2: Custom Codec Integration (Weeks 5-8)

### 2.1 Add Codec to Backend

**Objective**: Implement binary codec in Go, integrate with Berty message pipeline

**Tasks**:

**Codec Implementation** (`go/pkg/bertyprotocol/codec/`):
- [ ] Port TypeScript codec to Go (or FFI wrapper)
- [ ] Create `mutual_aid_message.go`:
  - Serialization function
  - Deserialization function  
  - Validation logic
  - Test suite
- [ ] Add message types:
  - `MessageType.OFFER` (0)
  - `MessageType.NEED` (1)
  - `MessageType.MATCH` (2)

**Integration Points**:
- [ ] Extend `protocol.proto`:
  - Add `MutualAidMessage` as new message type
  - Add UNSPSC code field
  - Add time windows field
  - Add optional fields struct
- [ ] Hook into message serialization:
  - Where Berty currently serializes messages
  - Add codec check (is this a mutual aid message?)
  - Route through codec ser/deser
- [ ] Add to event system:
  - New event type: `MutualAidMessageSent`
  - New event type: `MutualAidMessageReceived`

**Testing**:
- [ ] Unit tests for codec (round-trip ser/deser)
- [ ] Integration tests with Berty message pipeline
- [ ] Test with multiple UNSPSC codes
- [ ] Test with/without optional fields
- [ ] Performance benchmarks (< 1ms ser/deser)

**Acceptance Criteria**:
- ✅ Messages serialize/deserialize correctly
- ✅ All tests pass
- ✅ No regressions in existing Berty functionality
- ✅ Performance acceptable

**Documentation to Create**:
- `CODEC.md` - Binary format reference
- `TESTING.md` - Test strategy + how to run

---

### 2.2 Add Codec to Frontend (React Native)

**Objective**: Import codec in JS, add TypeScript types, prepare for UI

**Tasks**:

**JavaScript Integration** (`js/src/services/`):
- [ ] Create `codec.ts` service:
  - Import/reuse existing TypeScript codec
  - Export serialize/deserialize functions
  - Add TypeScript interfaces:
    ```typescript
    interface MutualAidMessage {
      version: number
      messageType: MessageType
      unspsc: number
      startTime: number
      endTime: number
      latitude: number
      longitude: number
      windows: TimeWindow[]
      publicKey: Uint8Array
      optional?: OptionalFields
    }
    ```
- [ ] Create `validation.ts`:
  - Validate UNSPSC codes (exist + are mutual aid related)
  - Validate coordinates (within bounds)
  - Validate time windows
  - Validate optional fields

**Redux Integration** (`js/src/redux/`):
- [ ] Create `slices/mutualAid.ts`:
  - State for offers (received + broadcast)
  - State for needs (received + broadcast)
  - State for matches
  - Thunks for create/fetch/update operations
- [ ] Create actions:
  - `createOffer(message: MutualAidMessage)`
  - `createNeed(message: MutualAidMessage)`
  - `receiveOffer(message: MutualAidMessage)`
  - `receiveNeed(message: MutualAidMessage)`
  - `markMatch(offerId, needId)`

**Testing**:
- [ ] Unit tests for codec
- [ ] Unit tests for validation
- [ ] Redux integration tests
- [ ] Mock message generation

**Acceptance Criteria**:
- ✅ Codec works in React Native environment
- ✅ Redux state management functional
- ✅ Validation catches invalid messages
- ✅ No native module issues

**Documentation to Create**:
- `REDUX.md` - State management guide
- Code comments for complex logic

---

### 2.3 Message Pipeline Integration

**Objective**: Messages flow through codec + validation in both directions

**Tasks**:
- [ ] **Sending (App → Network)**:
  - User creates offer/need in UI
  - Redux action dispatched
  - Codec serializes
  - Passed to Berty message send
  - Broadcast to group
- [ ] **Receiving (Network → App)**:
  - Berty receives message
  - Check if mutual aid type
  - Route through codec deserialize
  - Validate
  - Dispatch Redux action
  - Update UI
- [ ] **Error handling**:
  - Invalid codec? Log + skip
  - Validation fail? Log + skip
  - Serialize error? Show user error
  - Network error? Queue for retry

**Testing**:
- [ ] End-to-end message flow tests
- [ ] Error handling tests
- [ ] Multiple message types mixed
- [ ] Edge cases (invalid data, corruption)

**Acceptance Criteria**:
- ✅ Messages send + receive correctly
- ✅ Mixed Berty + mutual aid messages work
- ✅ Errors handled gracefully
- ✅ No message loss

---

## PHASE 3: User Interface for Offers/Needs (Weeks 9-12)

### 3.1 Screens & Navigation

**Objective**: Create UI for browsing/creating offers and needs

**New Screens**:

**1. Mutual Aid Hub (Tab 1)**
- [ ] Bottom tab navigation: "Offers", "Needs", "Matches"
- [ ] Simple list view for offers
- [ ] Simple list view for needs
- [ ] Could be modal or separate tabs

**2. Create Offer Screen**
- [ ] Form with:
  - UNSPSC code selector (dropdown/search)
  - Quantity + Unit of Measure
  - Location (map picker or address)
  - Availability (time windows)
  - Optional fields (floor, room, diet if relevant)
  - Submit button
- [ ] Validation inline
- [ ] Preview binary size before send

**3. Create Need Screen**
- [ ] Same form as offer (reuse components)
- [ ] Same validation + preview

**4. Offer/Need Detail Screen**
- [ ] Show full message details
- [ ] Display location on map
- [ ] Show availability (formatted)
- [ ] Contact button (open 1:1 chat)
- [ ] Mark as matched/fulfilled

**5. Matches Screen**
- [ ] List of offers + needs that align
- [ ] Could be simple list or grouped
- [ ] Contact button for each

**Tasks**:
- [ ] Create new screen components
- [ ] Add navigation routes
- [ ] Connect to Redux state
- [ ] Add form validation
- [ ] Style consistently with Berty

**Acceptance Criteria**:
- ✅ All screens accessible
- ✅ Forms work + validate
- ✅ Redux state updates correctly
- ✅ No crashes
- ✅ Consistent with Berty design

**Documentation to Create**:
- `UI.md` - Screen flow diagrams
- Code comments for complex components

---

### 3.2 Offer/Need List Views

**Objective**: Display mutual aid offers/needs in organized, accessible way

**Features**:
- [ ] List showing:
  - UNSPSC category (icon + name)
  - Quantity (if present)
  - Location (city/neighborhood)
  - Distance from user
  - Time availability (next window)
  - Sender name (anonymous by default, or chosen identifier)
- [ ] Sorting options:
  - By relevance (distance + category)
  - By recency
  - By availability
- [ ] Filtering:
  - By UNSPSC category
  - By distance
  - By time window
- [ ] Search (full-text on category names)

**Implementation**:
- [ ] Create `OfferList.tsx` component
- [ ] Create `NeedList.tsx` component
- [ ] Add filtering + sorting logic
- [ ] Add location distance calculation
- [ ] Pagination (load more as scroll)

**Testing**:
- [ ] List renders correctly
- [ ] Filtering works
- [ ] Sorting works
- [ ] Performance with 100+ messages

**Acceptance Criteria**:
- ✅ Easy to browse offers/needs
- ✅ Can find relevant items
- ✅ Performant
- ✅ Accessible (screen reader compatible)

---

### 3.3 Location & Time Display

**Objective**: Make location/time information user-friendly

**Features**:
- [ ] **Location**:
  - Map display (OpenStreetMap, privacy-friendly)
  - Distance in km/miles
  - Neighborhood/city name (from coordinates)
  - Privacy: show as "5km away" not exact address
- [ ] **Time Windows**:
  - Human-readable: "Monday-Friday 9am-5pm"
  - "Available next at: tomorrow 2pm"
  - Show in user's timezone
- [ ] **Categories**:
  - Display UNSPSC code as human-friendly name
  - Show icon (if available)
  - Example: "50201506" → "Fresh Produce" 🥕

**Implementation**:
- [ ] Create utility functions for formatting
- [ ] Add optional OSM map library
- [ ] Timezone handling (detect user's timezone)

**Testing**:
- [ ] Formatting works for all UNSPSC codes
- [ ] Time windows display correctly
- [ ] Maps work on Android + iOS
- [ ] Timezone conversions correct

**Acceptance Criteria**:
- ✅ Information is clear + accessible
- ✅ No accidental privacy leaks
- ✅ Works in all contexts

---

## PHASE 4: Local Semantic Matching (Weeks 13-16)

### 4.1 Basic Matching Algorithm

**Objective**: Identify offers + needs that could help each other

**Algorithm v1 (Simple)**:
- [ ] Match by UNSPSC code (exact match)
- [ ] Filter by distance (< 10km by default, configurable)
- [ ] Filter by time overlap (windows overlap)
- [ ] Score by distance (closer = higher score)
- [ ] Display as "potential matches"

**Implementation**:
- [ ] Create `matching.service.ts`:
  ```typescript
  function findMatches(
    offers: MutualAidMessage[],
    needs: MutualAidMessage[]
  ): Match[] {
    // For each need, find compatible offers
    // Return sorted by score
  }
  ```
- [ ] Add to Redux store
- [ ] Compute on app startup + new messages

**Testing**:
- [ ] Basic matching logic
- [ ] Distance calculations correct
- [ ] Time window overlap correct
- [ ] Performance with many messages

**Acceptance Criteria**:
- ✅ Basic matching works
- ✅ Performance acceptable
- ✅ Accurate matching

**Documentation to Create**:
- `MATCHING.md` - Algorithm explanation

---

### 4.2 LLM-Assisted Matching (Optional, Phase 4B)

**Objective**: Use local LLM to suggest matches beyond exact category

**Approach**:
- [ ] Option A: Use on-device Ollama (Mistral or similar)
  - Requires ~4GB model
  - Full privacy
  - Slower on older phones
- [ ] Option B: Use Claude via Anthropic API (MCP pattern)
  - Requires connectivity (can queue locally)
  - Better matching quality
  - Some data sharing (though minimal)

**If implementing Option A (Ollama)**:
- [ ] Integrate `ollama.ai` library
- [ ] Create prompt:
  ```
  Two mutual aid messages:
  
  OFFER: [serialized offer]
  NEED: [serialized need]
  
  Could these match? (yes/no/maybe)
  Why?
  Confidence (1-10):
  
  Focus on practical compatibility, not just category.
  ```
- [ ] Run on startup for unmatched pairs
- [ ] Cache results locally
- [ ] Allow user to run manually

**If implementing Option B (Claude API)**:
- [ ] Create MCP-like interface for messages
- [ ] Send offer/need context to Claude
- [ ] Get back match score + reasoning
- [ ] Cache locally
- [ ] Only when user clicks "Get suggestions"

**For v1 (Phase 4), skip this**. Focus on basic matching. Can add in Phase 5 if needed.

**Decision**: Skip for now, add in Phase 5 if community requests it.

---

### 4.3 User Controls for Matching

**Objective**: Let users control how matching works

**UI**:
- [ ] Settings screen for mutual aid:
  - Distance preference (km slider)
  - Auto-match enabled/disabled
  - Show all offers/only available now
  - Notification preferences
- [ ] Manual "Find Matches" button
- [ ] Mark as matched/fulfilled (remove from lists)

**Implementation**:
- [ ] Add Redux state for preferences
- [ ] Add settings UI
- [ ] Persist preferences locally
- [ ] Apply preferences when matching

**Acceptance Criteria**:
- ✅ Users can customize
- ✅ Preferences persist
- ✅ Matching respects preferences

---

## PHASE 5: Community Testing & Iteration (Weeks 17-20)

### 5.1 Alpha Testing with Free Store Community

**Objective**: Real-world testing with target users

**Approach**:
- [ ] Deploy to 10-20 Free Store community members
- [ ] Provide Android APK (easier than iOS)
- [ ] Create local group for testing
- [ ] Document feedback process
- [ ] Weekly sync calls to gather feedback

**Feedback Areas**:
- [ ] Usability: Is it easy to find offers/needs?
- [ ] Functionality: Does matching work?
- [ ] Privacy: Do people feel safe?
- [ ] Accessibility: Any barriers?
- [ ] Performance: Any crashes/slowness?

**Tasks**:
- [ ] Build APK for Android
- [ ] Create installation instructions
- [ ] Create user guide document
- [ ] Set up feedback channels (Signal group, Discord, etc.)
- [ ] Schedule weekly feedback calls
- [ ] Document all issues + requests

**Acceptance Criteria**:
- ✅ 10+ community members actively using
- ✅ No critical bugs discovered
- ✅ Positive feedback on core experience
- ✅ Actionable improvement requests collected

**Documentation to Create**:
- `TESTING.md` - Alpha testing guide
- `USER_GUIDE.md` - How to use app

---

### 5.2 Iteration Based on Feedback

**Objective**: Fix issues + improve based on community input

**Process**:
- [ ] Prioritize feedback (critical > nice-to-have)
- [ ] Create GitHub issues for each
- [ ] Estimate effort
- [ ] Implement fixes + improvements
- [ ] Deploy new builds
- [ ] Gather follow-up feedback
- [ ] Repeat weekly

**Common Issues to Address**:
- [ ] UI clarity (labels, help text)
- [ ] Performance (slow list scrolling, etc.)
- [ ] Matching accuracy
- [ ] Location privacy concerns
- [ ] Time window display issues

**Acceptance Criteria**:
- ✅ Most critical issues fixed
- ✅ Community feedback positive
- ✅ App stable + performant

---

### 5.3 Documentation & Release Prep

**Objective**: Prepare for v1 release + open source

**Tasks**:
- [ ] Complete all in-code documentation
- [ ] Create comprehensive README
- [ ] Create setup/build guide for developers
- [ ] Create security/privacy document
- [ ] Create ethical design statement
- [ ] Prepare GitHub issues for future development
- [ ] License selection (suggest Apache 2.0 or AGPL)

**Documentation**:
- [ ] `README.md` - Project overview
- [ ] `INSTALL.md` - Build + install instructions
- [ ] `SECURITY.md` - Security + privacy info
- [ ] `ETHICS.md` - Design principles + mutual aid philosophy
- [ ] `CONTRIBUTING.md` - How to contribute
- [ ] `ROADMAP.md` - Future plans

**Acceptance Criteria**:
- ✅ Anyone can build from source
- ✅ Security/privacy clearly documented
- ✅ Ethical framework visible
- ✅ Path for contributors clear

---

## PHASE 6: Future Expansion (Week 21+)

### 6.1 Hardware Mesh (Optional Long-term)

**Objective**: Extend beyond phone-to-phone to include LoRa mesh hardware

**Approach**:
- [ ] Research Meshtastic integration (after Phase 5)
- [ ] Or Reticulum integration (more flexible)
- [ ] Consider: Can same codec work with LoRa?
- [ ] Test: Is phone + hardware mesh possible?

**Timeline**: Q2 2026+ (after Phase 5 stable)

---

### 6.2 Advanced Matching (Optional)

**Objective**: More sophisticated semantic matching

**Options**:
- [ ] Local LLM (Ollama) for understanding
- [ ] Federated learning (devices learn together)
- [ ] Category hierarchy (understand related codes)
- [ ] Time prediction (suggest future matches)

**Timeline**: Q2 2026+ (after Phase 5 feedback)

---

### 6.3 Multi-Community Support

**Objective**: Support multiple communities with different rules/categories

**Approach**:
- [ ] Allow custom UNSPSC subsets per group
- [ ] Allow custom categories + icons
- [ ] Allow group-specific settings

**Timeline**: Q3 2026+ (after multi-community demand)

---

## Technical Architecture

### Technology Stack

```
BACKEND (Go):
├── Berty Protocol (Wesh)
│   ├── OrbitDB (group state)
│   └── IPFS (peer discovery)
├── Custom codec
│   ├── Serialization/deserialization
│   └── Validation
└── gomobile bindings

FRONTEND (React Native):
├── React Native
├── Redux (state management)
├── React Navigation
├── Berty React Native bindings
└── Custom components
    ├── Offer/Need screens
    ├── Matching display
    └── Settings

STORAGE:
├── Berty's built-in (groups, messages)
├── SQLite (if needed for local indexing)
└── Device keychain (for sensitive data)

NETWORKING:
├── BLE (local discovery, Berty)
├── WiFi P2P (if supported)
├── mDNS (local discovery)
├── Tor (if internet used)
└── IPFS (peer-to-peer content)
```

---

### Data Flow

```
USER CREATES OFFER:
  ↓
UI Form (category, qty, time, location)
  ↓
Redux action: createOffer(data)
  ↓
Codec.serialize(data) → 64-75 bytes
  ↓
Berty sendGroupMessage(serialized)
  ↓
Broadcast to group
  ↓
Other devices receive
  ↓
Codec.deserialize(bytes)
  ↓
Redux action: receiveOffer(data)
  ↓
UI updates list
  ↓
Matching algorithm runs
  ↓
Display in "Matches" tab

USER CREATES NEED:
  (Same flow with NEED type)
```

---

### File Structure

```
gratitude/ (forked Berty repo)
├── go/
│   └── pkg/bertyprotocol/
│       ├── codec/
│       │   ├── mutual_aid_message.go (✨ NEW)
│       │   ├── codec_test.go (✨ NEW)
│       │   └── validation.go (✨ NEW)
│       ├── protocol.proto (MODIFIED)
│       └── (existing files)
│
├── js/
│   └── src/
│       ├── services/
│       │   ├── codec.ts (✨ NEW)
│       │   ├── validation.ts (✨ NEW)
│       │   └── matching.ts (✨ NEW)
│       ├── redux/
│       │   ├── slices/
│       │   │   └── mutualAid.ts (✨ NEW)
│       │   └── (existing)
│       ├── screens/
│       │   ├── OfferListScreen.tsx (✨ NEW)
│       │   ├── NeedListScreen.tsx (✨ NEW)
│       │   ├── CreateOfferScreen.tsx (✨ NEW)
│       │   ├── CreateNeedScreen.tsx (✨ NEW)
│       │   ├── DetailScreen.tsx (✨ NEW)
│       │   └── MatchesScreen.tsx (✨ NEW)
│       ├── components/
│       │   ├── OfferCard.tsx (✨ NEW)
│       │   ├── NeedCard.tsx (✨ NEW)
│       │   └── CategoryIcon.tsx (✨ NEW)
│       └── (existing)
│
├── docs/
│   ├── ARCHITECTURE.md (✨ NEW)
│   ├── DEVELOPMENT.md (✨ NEW)
│   ├── DESIGN.md (✨ NEW)
│   ├── CODEC.md (✨ NEW)
│   ├── MATCHING.md (✨ NEW)
│   ├── ETHICS.md (✨ NEW)
│   ├── ROADMAP.md (✨ NEW)
│   └── USER_GUIDE.md (✨ NEW)
│
└── (Berty repo structure - existing)
```

---

## Success Metrics

### Phase 1
- ✅ Clean fork established
- ✅ Berty baseline working
- ✅ Architecture documented

### Phase 2
- ✅ Codec integrated (backend + frontend)
- ✅ Message pipeline working
- ✅ Round-trip serialization tested

### Phase 3
- ✅ All screens implemented
- ✅ Forms working + validated
- ✅ No crashes in basic workflow

### Phase 4
- ✅ Basic matching working
- ✅ Users can discover relevant offers/needs
- ✅ Performance acceptable

### Phase 5
- ✅ 10+ community members actively using
- ✅ Positive feedback on usability
- ✅ Critical bugs fixed
- ✅ Documented + ready for wider release

---

## Known Constraints & Decisions

### Design Decisions

1. **No Reputation System**
   - Intentional: Prevents "worthy vs unworthy" hierarchies
   - Implication: Spam possible, but acceptable risk
   - Mitigation: User can block/report abusive peers

2. **No Monetary Exchange**
   - Intentional: Prevents commodification
   - Implication: Can't be used for selling
   - Enforcement: Categories exclude commercial services

3. **Categories Only (No Free Text)**
   - Intentional: Reduces harassment + misinformation
   - Implication: Less flexibility
   - Mitigation: Rich UNSPSC + custom categories per group

4. **Local Matching First**
   - Intentional: All matching happens on-device
   - Implication: Can't cross-group match initially
   - Future: Can add cross-group match in Phase 5+

5. **No Centralized Moderation**
   - Intentional: No single authority
   - Implication: Groups moderate themselves
   - Mitigation: Users can block problematic peers

### Technical Constraints

1. **BLE Range**: ~100 meters
   - Mitigation: WiFi P2P or internet fallback for distant groups
   
2. **Message Size**: 512 bytes BLE limit (Berty may use chunking)
   - Our codec: 64-75 bytes (fits easily)
   - Safe margin for protocol overhead

3. **Berty Architecture**: P2P groups, not direct messaging
   - Implication: Must use group messaging for broadcasts
   - Workaround: 1:1 chats once matched

4. **Multi-Platform**: iOS + Android + Web
   - Berty supports all
   - React Native handles most (some platform-specific code needed)

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Berty API changes | High | Monitor upstream; maintain fork compatibility |
| User adoption slow | Medium | Start with Free Store; word of mouth; good UX |
| Performance issues | Medium | Benchmark early; optimize hot paths |
| Privacy concerns | Medium | Clear privacy doc; audit crypto usage |
| Spam/abuse | Low-Medium | User blocking; group moderation |
| Technical debt | Medium | Regular refactoring; good documentation |

---

## Governance & Open Source

### License
- **Recommended**: Apache 2.0 (permissive, business-friendly)
- **Alternative**: AGPL (copyleft, stronger privacy protection)
- **Decision**: TBD - align with Berty if possible (same license)

### Community Contribution
- **Phase 1-4**: Colin leads (closed fork)
- **Phase 5**: Alpha testing with community
- **Phase 6+**: Open source with community contributions
  - GitHub issues for feature requests
  - Pull requests welcome
  - Monthly contributor calls (if interest)

### Ethical Framework
- Document mutual aid principles in code + communication
- Maintain no-reputation-system principle
- Reject feature requests that violate core values

---

## How to Use This Document

### For Development
1. Print/bookmark each Phase as you approach it
2. Check off tasks as completed
3. Use "Acceptance Criteria" to verify readiness before next phase
4. Reference architecture diagrams when debugging

### For Communication
- Share with community to show progress
- Use milestones to set expectations
- Reference specific sections when discussing features

### For Future Contributors
- This becomes the primary development guide
- New contributors start here
- Each phase has clear scope + success criteria

---

## Questions & Discussion

As you progress through phases, key questions to revisit:

1. **Phase 2**: Should codec be in Berty core or as plugin?
2. **Phase 3**: What makes offers/needs "interesting" to users?
3. **Phase 4**: How sophisticated should matching be?
4. **Phase 5**: What does community want most?
5. **Phase 6**: Should we integrate hardware mesh?

---

## Next Steps

1. ✅ You're reading this (good!)
2. → Fork Berty repository
3. → Set up development environment (see Phase 1.1)
4. → Study Berty architecture (see Phase 1.2)
5. → Verify baseline functionality (see Phase 1.3)
6. → Create detailed Phase 2 plan (see Phase 2.1)

---

## Appendices

### A. UNSPSC Categories for Mutual Aid

Core categories you'll support in v1:

```
50201506  - Fresh produce
50201507  - Fresh fruits
50201710  - Prepared meals
50201735  - Non-alcoholic beverages
48191503  - Clothing/apparel
48191504  - Footwear
72101505  - Medical supplies (OTC)
72101620  - Mobility aids
81100000  - Community/social services (custom)
```

See `CODEC.md` for complete list.

---

### B. Time Window Examples

How users specify availability:

```
Monday-Friday 9am-5pm       → Standard work hours
Evenings only (6pm-9pm)     → After work
Weekends                     → Saturday-Sunday only
Anytime                      → 24/7 availability
Next Tuesday 2-4pm          → One-time offer
```

---

### C. Distance Privacy

How to show distance without exposing exact location:

```
< 1 km    → "Very close"
1-5 km    → "Nearby"
5-10 km   → "5km away"
10-20 km  → "15km away"
20+ km    → "Far away" or exact km
```

Allow user to show exact or distance bands (configurable).

---

### D. Useful References

- **Berty Docs**: https://berty.tech/
- **Berty GitHub**: https://github.com/berty/berty
- **UNSPSC Codes**: https://www.unspsc.org/
- **Mutual Aid Info**: https://www.mutualaidproject.org/
- **Your Codec Spec**: See `CODEC.md` (linked above)

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Next Review**: After Phase 1 completion  
**Maintainer**: Colin Roy  

---

*This document evolves as you learn and build. Update it as you discover better approaches. Share iterations with community.*
