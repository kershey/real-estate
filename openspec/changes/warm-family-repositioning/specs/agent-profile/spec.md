## Purpose

Defines how the agent's experience and credibility are presented to a family audience — which proof points earn trust from parents buying a home and which ones signal that the agent serves a different, wealthier clientele.

## ADDED Requirements

### Requirement: Trust signals are family-relevant

The agent's headline proof points SHALL be ones that reassure a family. Sales volume and transaction value SHALL NOT be presented as headline statistics.

#### Scenario: Transaction volume is not headlined

- **WHEN** the About page's headline statistics are read
- **THEN** none of them state a total dollar value of transactions

#### Scenario: Statistics reassure families

- **WHEN** the About page's headline statistics are read
- **THEN** each one speaks to reliability or family experience, such as families helped, years serving the area, first-time buyers guided, or communities known

### Requirement: Mock content is identifiable

Testimonials, statistics, credentials, and the agent's identity are placeholder content until real values are supplied. They SHALL be recognizable as placeholder in the source so they can be replaced without an audit.

#### Scenario: Placeholder content is marked

- **WHEN** testimonial, statistic, or credential content is inspected in the source
- **THEN** it is declared in a named constant identified as mock
- **AND** a comment states that it is placeholder content awaiting real values

#### Scenario: Placeholder content still meets the audience rules

- **WHEN** placeholder content is rendered
- **THEN** it satisfies the same persona, vocabulary, and framing requirements as real content would

### Requirement: The agent appears approachable

The agent SHALL be depicted in a way that reads warm and personable.

#### Scenario: Portrait is warm

- **WHEN** the agent's portrait is viewed
- **THEN** the agent is smiling or otherwise approachable
- **AND** the portrait is not set in a corporate office or glass tower environment

#### Scenario: Portrait is of the real agent

- **WHEN** the agent's portrait is viewed
- **THEN** it depicts the actual agent rather than stock photography

### Requirement: Credentials are framed for families

Listed credentials, specializations, and service areas SHALL prioritize family and first-time-buyer relevance.

#### Scenario: Luxury and investment credentials are absent

- **WHEN** the credentials list is read
- **THEN** no credential is titled or described in terms of luxury property or investment property

#### Scenario: Specializations lead with families

- **WHEN** the specializations list is read
- **THEN** the first entry concerns families or first-time buyers
- **AND** no entry concerns luxury, investment, or commercial property

#### Scenario: Service areas are real and residential

- **WHEN** the service areas are read
- **THEN** each is a named local community the agent actually serves
- **AND** no area is generic or commercial, such as "Downtown", "Suburbs", or "Commercial Zone"

### Requirement: The agent's story explains why families should trust them

The agent's biography SHALL explain their motivation and approach in terms a family recognizes.

#### Scenario: Biography addresses families

- **WHEN** the agent's biography is read
- **THEN** it explains how the agent helps families find a home
- **AND** it references concerns such as schools, neighborhoods, safety, or raising children

#### Scenario: Biography avoids technical positioning

- **WHEN** the agent's biography is read
- **THEN** it does not position the agent primarily through technology, data analysis, or market instruments
