# Website Design Context & Strategy

## Current Project Structure
- **Technology Stack**: Next.js with React, Tailwind CSS
- **Languages**: English, Russian, Chinese (i18n support)
- **Current Components**: HeroSection, WhatIsPravilo, WhoIsPraviloFor, ServicesSection, TestimonialsSection, ContactInfoSection, WhatsAppBookingForm
- **Content Files**: pravilo_en.json, pravilo_ru.json, pravilo_zh.json

## New Service Categories Added

### 1. Outdoor Adventures Section
- **Component**: OutdoorAdventuresSection.tsx
- **Services**: Bamboo Forest Trekking, Waterfall Discovery Tours, Sunset Mountain Hiking, Beach Camping Experience, Coastal Rock Climbing
- **Design**: Green-to-blue gradient background, adventure-focused cards
- **SEO Focus**: Nature connection, outdoor activities, adventure tourism

### 2. Handcrafted Artisan Section  
- **Component**: HandcraftedArtisanSection.tsx
- **Services**: Wire-Wrapped Crystal Jewelry, Wooden Pipe Crafting, Coral & Shell Jewelry, Custom Design Consultation
- **Design**: Amber-to-orange gradient background, artisan-focused cards
- **SEO Focus**: Handmade, artisanal, custom jewelry, traditional craftsmanship

### 3. Wellness Therapies Section
- **Services**: Deep Tissue Massage, Spinal Alignment Therapy, Energy Balancing Session, Sports Recovery Massage
- **Design**: Professional therapeutic approach, calming colors
- **SEO Focus**: Holistic wellness, therapeutic massage, bodywork

### 4. Spiritual Practices Section
- **Services**: 10 Slavic-inspired ceremonies and rituals
- **Design**: Mystical, spiritual aesthetic with earth tones
- **SEO Focus**: Ancient wisdom, spiritual practices, personal transformation

## SEO Strategy Implementation

### Keyword Targeting (Location-Agnostic)
- **Primary**: "nature connection therapy", "tropical wellness retreat", "handcrafted artisan jewelry"
- **Secondary**: "bamboo forest meditation", "waterfall discovery", "sacred fire ceremony"
- **Long-tail**: "wire-wrapped crystal jewelry custom", "deep tissue massage therapy", "elemental balancing ritual"

### Content Architecture
- **Homepage**: Overview of all services with clear navigation
- **Service Pages**: Detailed descriptions for each category
- **About Section**: Misha's story and philosophy
- **Blog/Resources**: Educational content about practices
- **Contact**: Location-agnostic contact information

### Technical SEO Elements
- **Schema Markup**: LocalBusiness, Service, Person (for Misha)
- **Meta Tags**: Dynamic titles and descriptions for each language
- **Image Optimization**: Responsive images with alt text
- **Clean URLs**: SEO-friendly page structure
- **Sitemap**: Comprehensive site mapping

## Design System Updates

### Color Palette
- **Primary**: Green gradients (nature/outdoor)
- **Secondary**: Amber/Orange gradients (artisan/creative)
- **Accent**: Blue gradients (wellness/therapeutic)
- **Neutral**: Earth tones (spiritual/mystical)

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable font
- **Accents**: Handwritten-style for artisan elements

### Layout Principles
- **Mobile-First**: Responsive design for all devices
- **Card-Based**: Service cards with clear CTAs
- **Progressive Disclosure**: Detailed information on demand
- **Visual Hierarchy**: Clear information architecture

## Component Architecture

### New Components Needed
1. **OutdoorAdventuresSection.tsx** ✅ Created
2. **HandcraftedArtisanSection.tsx** ✅ Created
3. **WellnessTherapiesSection.tsx** - To be created
4. **SpiritualPracticesSection.tsx** - To be created
5. **ServiceCategoryNavigation.tsx** - To be created

### Updated Components
- **Header.tsx**: Add new navigation items
- **ServicesSection.tsx**: Integrate with new service categories
- **SchemaMarkup.tsx**: Add new service schemas

## Content Strategy

### Service Descriptions
- **Benefit-Focused**: What clients will experience
- **Process-Oriented**: How services work
- **Outcome-Driven**: Expected results
- **Safety-Conscious**: Professional guidance emphasis

### SEO Content Guidelines
- **Natural Integration**: Keywords within natural language
- **User Intent**: Match search intent with content
- **Local Relevance**: Tropical/natural environment focus
- **Authority Building**: Expertise demonstration

## Implementation Plan

### Phase 1: Core Components
- Create remaining service section components
- Update navigation and routing
- Implement responsive design

### Phase 2: Content Integration
- Add all new services to JSON files
- Update component props and interfaces
- Test multilingual support

### Phase 3: SEO Optimization
- Implement schema markup
- Optimize meta tags and descriptions
- Add internal linking structure
- Create sitemap and robots.txt

### Phase 4: Testing & Launch
- Cross-browser testing
- Mobile responsiveness verification
- SEO audit and optimization
- Performance optimization

## Success Metrics

### SEO Goals
- Rank for target keywords without location mentions
- Increase organic traffic from wellness/adventure searches
- Improve engagement metrics (time on site, bounce rate)
- Generate qualified leads for services

### User Experience Goals
- Clear service categorization
- Easy navigation between services
- Compelling calls-to-action
- Professional, trustworthy presentation

### Business Goals
- Attract English-speaking wellness seekers
- Position as comprehensive wellness provider
- Build authority in multiple service areas
- Generate bookings across all service categories