## Purpose

Governs every photograph shown on the site — what it may depict, who must appear in it, how it is lit, and what visual treatment may be applied to it — so that imagery reinforces a warm family-buyer audience instead of an affluent or investor one.

## ADDED Requirements

### Requirement: Photographs depict attainable family housing

Every property photograph SHALL depict housing of a scale and style a family with children would realistically buy. Photographs SHALL NOT depict luxury or investment-grade property.

#### Scenario: Prohibited luxury signifiers are absent

- **WHEN** any photograph on the site is reviewed
- **THEN** it contains none of the following: infinity or resort-style pools, glass-walled modernist architecture, double-height architectural volumes, staged designer show-home interiors, gated estates, or aerial estate views

#### Scenario: Exterior photographs show lived-in homes

- **WHEN** a photograph shows a home exterior
- **THEN** the home reads as a normal family residence on a normal street
- **AND** the surroundings show neighborhood context such as a yard, sidewalk, trees, or neighboring houses

#### Scenario: Interior photographs show real family life

- **WHEN** a photograph shows a home interior
- **THEN** it shows evidence of a family living there, such as children's belongings, family seating, a kitchen or dining space in use, or personal items
- **AND** it is not an empty or professionally staged showpiece room

### Requirement: People appear in site photography

The site SHALL show people, and SHALL specifically show families with children. The target audience SHALL NOT be absent from the imagery.

#### Scenario: Children appear on the site

- **WHEN** the full site is reviewed
- **THEN** at least one photograph shows children
- **AND** at least one photograph shows a family together

#### Scenario: The homepage is not empty of people

- **WHEN** the homepage is viewed end to end
- **THEN** at least one photograph includes a person

#### Scenario: No corporate stock imagery

- **WHEN** any photograph showing people is reviewed
- **THEN** it does not depict business or transactional scenarios such as suited professionals, handshakes, celebratory gestures over laptops, boardrooms, or contract signings

### Requirement: Warm natural light

Photographs SHALL be lit in a way that reads warm and inviting.

#### Scenario: Photographs are warmly lit

- **WHEN** any photograph is reviewed
- **THEN** it is lit by natural daylight with a warm cast
- **AND** it is not a dusk, twilight, night, or dramatically underlit exterior

#### Scenario: Photographs are not cold or clinical

- **WHEN** any photograph is reviewed
- **THEN** it does not present a predominantly cool, blue, or monochrome color cast

### Requirement: Restrained image treatment

Visual treatments applied to photographs SHALL NOT darken or dramatize them.

#### Scenario: Overlays stay light

- **WHEN** a photograph carries a text overlay requiring a scrim for legibility
- **THEN** the scrim's maximum opacity does not exceed 35%
- **AND** the scrim is warm-toned rather than pure black

#### Scenario: Overlay text remains readable

- **WHEN** text is placed over a photograph
- **THEN** the text meets at least 4.5:1 contrast against the underlying image region

#### Scenario: No cinematic motion on imagery

- **WHEN** a page containing a large photograph loads
- **THEN** the photograph does not perform a scale, zoom, or parallax animation

#### Scenario: The hero does not fill the viewport

- **WHEN** the homepage loads at desktop width
- **THEN** the hero occupies less than the full viewport height
- **AND** content below the hero is partially visible without scrolling

### Requirement: Alt text reflects the family audience

Image alt text SHALL describe images in family terms and SHALL NOT use luxury vocabulary.

#### Scenario: Alt text avoids luxury vocabulary

- **WHEN** any image's alt text is inspected
- **THEN** it contains none of the words: luxury, luxurious, premium, exclusive, estate, villa, upscale, high-end

#### Scenario: Alt text is descriptive

- **WHEN** any image's alt text is inspected
- **THEN** it describes the subject and its family or neighborhood context
- **AND** it is not empty for images that carry meaning

### Requirement: Sourcing guidance matches the brief

Documentation that directs image sourcing SHALL reflect the family art direction.

#### Scenario: Sourcing docs do not contradict the brief

- **WHEN** any in-repo documentation describing needed images is read
- **THEN** it does not instruct sourcing of luxury, modern-luxury, or dusk-lit imagery
- **AND** it points to the art direction defined by this capability

#### Scenario: Unused imagery is removed

- **WHEN** the image assets are reviewed
- **THEN** every asset present is referenced by the site
- **AND** superseded assets have been deleted
