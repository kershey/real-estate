## Purpose

Defines who the site speaks to and how it speaks — the vocabulary it uses and refuses, the personas its testimonials may present, the services it offers, and the single consistent identity behind the writing — so that every page addresses a family with children buying a home.

## ADDED Requirements

### Requirement: Single first-person agent identity

The site SHALL present one individual agent speaking in first person. It SHALL NOT present itself as a company, platform, or marketplace.

#### Scenario: Voice is consistent across pages

- **WHEN** the Home, About, and Contact pages are read in sequence
- **THEN** all three speak in the first person singular
- **AND** no page refers to the business in the third person or plural

#### Scenario: Platform framing is absent

- **WHEN** any page copy is read
- **THEN** it does not describe the site as a platform, marketplace, or leading provider
- **AND** it does not refer to "our agents" or an unnamed company brand

#### Scenario: Placeholder brand naming is removed

- **WHEN** any page copy is read
- **THEN** no placeholder company name appears in headings or body copy

### Requirement: Prohibited vocabulary

Site copy SHALL NOT use language associated with luxury, investment, or short-term rental audiences.

#### Scenario: Luxury vocabulary is absent

- **WHEN** any user-visible copy is read
- **THEN** it contains none of: luxury, luxurious, glamour, opulent, prestigious, exclusive, elite, upscale, villa, estate

#### Scenario: Investor vocabulary is absent

- **WHEN** any user-visible copy is read
- **THEN** it contains none of: investment, investor, portfolio, ROI, returns, profitable, yield, asset, transaction volume

#### Scenario: Short-term rental vocabulary is absent

- **WHEN** any user-visible copy is read
- **THEN** it contains none of: booking, reservation, guest, stay, vacation rental

#### Scenario: Corporate filler is absent

- **WHEN** any user-visible copy is read
- **THEN** it contains no unsupported self-praise such as "redefining real estate", "innovation and excellence", or "industry-leading"

### Requirement: Testimonials come from families

Every testimonial SHALL be attributed to a family or individual who bought or sold a home to live in.

#### Scenario: No investor or luxury personas

- **WHEN** any testimonial's attribution is read
- **THEN** the role is not investor, villa owner, luxury buyer, property guest, or commercial client

#### Scenario: Testimonials reference family concerns

- **WHEN** the full set of testimonials on any page is read
- **THEN** a majority reference at least one of: children, schools, neighborhood, safety, or space for a family

#### Scenario: Testimonials do not lead with money saved

- **WHEN** a testimonial is read
- **THEN** its opening sentence describes the experience or the outcome for the family rather than a dollar amount

### Requirement: Services are scoped to family home buying and selling

The site SHALL offer only services relevant to families buying or selling a home to live in.

#### Scenario: Commercial services are absent

- **WHEN** the service offerings are read
- **THEN** no commercial, business leasing, or investment service is listed

#### Scenario: Services address family situations

- **WHEN** each service offering is read
- **THEN** it describes what the agent does for a family in that situation
- **AND** it does not describe maximizing value, premium positioning, or market opportunity

### Requirement: Value proposition is built on family concerns

Sections describing why a family should work with the agent SHALL lead with family concerns rather than tooling or platform features.

#### Scenario: Family concerns are covered

- **WHEN** the section describing what the agent offers is read
- **THEN** it addresses at least four of: school quality, neighborhood safety, parks and play space, commute, space for children to grow, and guidance for first-time buyers

#### Scenario: Software feature framing is absent

- **WHEN** that section is read
- **THEN** it does not present the offering as software capabilities such as search filters, virtual tours, payment options, analytics, or platform usability

#### Scenario: Calls to action invite a conversation

- **WHEN** any primary call to action is read
- **THEN** it invites contact or a conversation with the agent
- **AND** it does not use marketplace phrasing such as "browse properties" or "explore listings" unless a corresponding page exists
