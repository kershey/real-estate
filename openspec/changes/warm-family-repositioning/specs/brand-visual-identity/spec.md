## Purpose

Defines the color, typography, and surface-treatment rules that make every page of the site read as warm and family-oriented rather than modern-luxury, and guarantees that warmth is a property of the design system itself rather than something re-applied by hand on individual pages.

## ADDED Requirements

### Requirement: Warm color foundation

Every user-facing surface, text, and control color SHALL carry non-zero chroma in a warm hue range. The site SHALL NOT present a fully desaturated (neutral gray) palette.

#### Scenario: Theme tokens carry warmth

- **WHEN** any color token that controls a user-facing surface, text, border, or control is inspected
- **THEN** its chroma component is greater than zero
- **AND** its hue falls in the warm range of 30–95 degrees

#### Scenario: No pure black or pure white surfaces

- **WHEN** any page is rendered in its default theme
- **THEN** no background, text, button, or border resolves to pure black (`#000000`) or pure white (`#ffffff`)

#### Scenario: Warmth survives a theme change

- **WHEN** the theme's color tokens are changed in a single place
- **THEN** every page of the site reflects the new palette
- **AND** no page retains the previous palette because colors were written directly into that page

### Requirement: Semantic color consumption

Page and section content SHALL express color through the theme's semantic roles (surface, text, muted text, primary action, accent, border) rather than through fixed color values chosen per component.

#### Scenario: A page does not hardcode its own palette

- **WHEN** a page's styling is inspected
- **THEN** its colors resolve through named semantic roles
- **AND** no fixed neutral or warm color value is applied directly to a page element in place of a semantic role

#### Scenario: Pages are internally consistent

- **WHEN** the Home, About, and Contact pages are viewed in sequence
- **THEN** background warmth, text color, and primary action color are visually consistent across all three
- **AND** no single page appears warmer or colder than the others

### Requirement: Accessible color contrast

All color pairings SHALL meet WCAG 2.1 AA. Boundaries that are the only visual indicator of an interactive control SHALL meet the 3:1 non-text contrast threshold.

#### Scenario: Body and muted text are readable

- **WHEN** primary text or secondary/muted text is rendered on any surface color
- **THEN** the contrast ratio is at least 4.5:1

#### Scenario: Action labels are readable

- **WHEN** a label is rendered on a primary action button
- **THEN** the contrast ratio is at least 4.5:1

#### Scenario: Form controls are discernible

- **WHEN** a text input or textarea is rendered against its surrounding surface
- **THEN** the contrast ratio between its boundary and that surface is at least 3:1

#### Scenario: Focus is visible

- **WHEN** an interactive control receives keyboard focus
- **THEN** the focus indicator has at least 3:1 contrast against the adjacent surface

### Requirement: Approachable typography

Heading typography SHALL read as warm and human rather than technical or editorial-luxury.

#### Scenario: Headings use a humanist typeface

- **WHEN** any page heading is rendered
- **THEN** it uses a humanist typeface distinct from the technical sans used for interface text

#### Scenario: Heading scale is not oversized

- **WHEN** the largest heading on any page is rendered at desktop width
- **THEN** its size does not exceed the equivalent of a 6xl step
- **AND** it does not use the heaviest available weight

#### Scenario: Body text remains legible

- **WHEN** body copy is rendered
- **THEN** it uses the interface sans typeface at a size no smaller than 16px at desktop width

### Requirement: Dark mode parity

The dark theme SHALL express the same warmth as the light theme and SHALL meet the same contrast requirements.

#### Scenario: Dark surfaces are warm

- **WHEN** the site is rendered in dark theme
- **THEN** background and surface colors carry non-zero chroma in the warm hue range
- **AND** no surface resolves to pure black

#### Scenario: Dark theme meets contrast rules

- **WHEN** any text or control is rendered in dark theme
- **THEN** it satisfies the same contrast thresholds required of the light theme
