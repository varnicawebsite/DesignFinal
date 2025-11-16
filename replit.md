# Sirens Digital Marketing Website

## Overview
This is a static website for Sirens, a digital marketing and brand audio identity agency. The website features a modern, animated design showcasing Sirens' services in audio branding, content creation, ad shoots, SEO, web design, and brand identity. All content is focused exclusively on Sirens and its digital marketing services.

## Project Type
Static HTML/CSS/JavaScript website

## Architecture

### Structure
- **Static Assets**: All HTML, CSS, JavaScript, images, and fonts are pre-built and stored in the project
- **Web Server**: Simple Python HTTP server serving static files on port 5000
- **No Build Process**: The website is ready to serve as-is, with no compilation or bundling required

### Key Directories
- `/` - Homepage (index.html)
- `/ventures/` - Services page with full digital marketing offerings
- `/why-sound/` - Why Sound? page explaining brand audio identity
- `/portfolio/` - Portfolio page with client success stories
- `/contact/` - Contact page
- `/about/` - About Sirens company page (not in main navigation)
- `/assets/` - All static assets (CSS, JS, images, fonts)
- `/_pginfo/` - Pinegrow metadata
- `/_pgbackup/` - Pinegrow backups

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (pre-compiled)
- **Server**: Python 3.11 with built-in HTTP server
- **Design Tool**: Pinegrow (visual web design)

## Setup & Configuration

### Development
The website runs on a Python HTTP server configured to:
- Bind to `0.0.0.0:5000` for Replit compatibility
- Serve all static files from the project root
- Disable caching for development
- Allow address reuse for easy restarts

### Deployment
Configured for Replit Autoscale deployment:
- **Target**: `autoscale` (stateless website)
- **Run Command**: `python3 server.py`
- No build step required

## Recent Changes

### 2025-11-16: Homepage Hero Section Update
- **Hero Section**: "SIRENS" branding with floating animation
  - Main heading: "SIRENS" with smooth up-and-down floating animation
  - Large bold subheading: "Your One-Stop Marketing Partner"
    - Two lines: "Your One-Stop" / "Marketing Partner"
    - "Marketing" is underlined with 3px underline
    - Font size: 3.5rem mobile, 4.5rem tablet, 6rem desktop
  - Kept original particle animation canvas (animated dots/ball effect)
  - Description: "Transform your brand with comprehensive marketing solutions..."
  - Two CTA buttons: "Start Your Project" and "View Our Work"
  - All GSAP ScrollTrigger animations intact
  - Respects prefers-reduced-motion for accessibility
- **Navigation**: Added "Home" link to navbar
  - Visible on all screen sizes (desktop and mobile)
  - Links to main homepage (/)
- **Services Section**: Working scroll-based service selection
  - As you scroll, each service becomes active with smooth transitions
  - Service descriptions transition smoothly without overlapping
  - Full GSAP intro-section animation system enabled

### 2025-11-09: Final Content Cleanup - Homepage
- **Removed All Personal References**: Eliminated all remaining non-Sirens content from homepage
  - Removed: "Her vision challenges...", "In a world of rapid change...", "Dive deeper in her Open Letter to the Future"
  - Removed heading: "An open letter to the future"
  - Replaced with: Sirens-focused digital marketing messaging
- **100% Sirens Content**: Homepage now exclusively features Sirens digital marketing services
- All content professionally focused on audio branding and digital marketing

### 2025-11-09: Content Cleanup & About Page Update
- **About Page**: Updated with proper Sirens company information
  - "Where Sound Meets Strategy" positioning
  - What Makes Us Different section
  - All content focused on Sirens services
- **Content Cleanup**: Removed all old blog directories and longevity-related content
  - Deleted: the-intelligence-report, the-longevity-library, longevity-intelligence
  - Website now contains only Sirens-related content
- **Footer Cleanup**: Removed "Created by Noomo Agency" credit from all pages
- **Navigation**: All "Home" links properly direct to main page (/)

### 2025-11-09: Complete Content Population
- **Services Page**: Populated with 8 comprehensive service offerings
  - Brand Theme Song / Audio Identity, Social Authority Content Creation
  - Professional Ad Shoots, Model Providing, SEO & Ads, Website Design
  - Google Listing & Business Registration, The Brand Book
- **Why Sound? Page**: Populated with brand sound education
  - Examples: Paytm, Apple, Netflix, Avengers, Harry Potter
  - Compelling messaging about signature sounds
- **Portfolio Page**: Populated with 3 detailed case studies
  - TechFlow Solutions (SaaS): +340% brand recall, +185% engagement
  - GreenLeaf Organic (E-commerce): +275% organic traffic
  - UrbanFit Gym (Fitness): #1 local search, +890% social following
- All pages production-ready with complete, relevant content

### 2025-11-09: Navigation Menu Restructure
- **New Navigation**: Simplified menu structure across all HTML pages
  - Menu: Services, Why Sound?, Portfolio, Contact
- **Services Link**: Points to existing `/ventures/` directory
- **Logo Integration**: Responsive SVG logos display correctly across all navigation styles

### 2025-11-09: Modern Logo Redesign with Responsive SVG
- **New SVG Logos**: Professional SVG logos with sound wave icon
  - `sirens-logo-compact.svg`: Full logo with icon + "SIRENS" text
  - `sirens-icon-only.svg`: Compact icon-only version for mobile
- **Custom Styling**: Added `custom-logo.css` with hover animations
- **Brand Colors**: Logos feature gradient (#9A92D9 to #B07AF2)

### 2025-11-09: Complete Content Replacement from Sample Site
- **Content Migration**: Replaced ALL text content with Sirens branding
- **Sound Wave Animation**: Professional sound wave/equalizer animation (40 animated bars)
- **Hero Section**: "We create signature sounds and comprehensive digital experiences that make your brand unforgettable - heard even before it's seen."
- **Zero Longevity References**: Completely removed all longevity-related content

### 2025-11-08: Initial Replit Setup
- Installed Python 3.11
- Created `server.py` with cache-control headers and port reuse
- Fixed all hardcoded URLs from jasminadenner.com to relative paths
- Configured workflow to run on port 5000
- Set up deployment configuration for production

## Important Notes

### URL Fix
All HTML files originally contained hardcoded URLs pointing to jasminadenner.com. These have been replaced with relative paths (e.g., `/assets/...`) to work properly in the Replit environment.

### External Dependencies
The website references:
- Google Tag Manager (analytics)

### Cache Control
The server is configured to disable browser caching during development to ensure changes are immediately visible. This is important because Replit shows the website in a nested iframe.

## Maintenance

### Adding New Content
1. Edit HTML files directly or use Pinegrow
2. Place any new assets in the appropriate `/assets/` subdirectory
3. Ensure all URLs are relative (not absolute)
4. Restart the workflow to see changes

### Troubleshooting
- If changes aren't visible: Check that the workflow is running and restart it
- If assets don't load: Verify URLs are relative paths, not absolute URLs
- If port conflicts occur: The server includes `allow_reuse_address = True`

## User Preferences
- All content must be related to Sirens company only
- No external credits or references in footer
- Home links should direct to main page (/)
