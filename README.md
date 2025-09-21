# Sarah Mitchell for City Council - Campaign Website

A modern, responsive campaign website built for a city council candidate. This website features a professional design with sections for candidate information, policy positions, endorsements, events, and donation capabilities.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Accessibility**: Built with accessibility best practices including keyboard navigation and screen reader support
- **Interactive Elements**: Contact forms, donation interface, and event listings
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading with optimized images and code

## Sections Included

1. **Navigation**: Sticky header with smooth scrolling navigation
2. **Hero Section**: Eye-catching introduction with candidate photo and key stats
3. **About**: Candidate background, qualifications, and community involvement
4. **Issues**: Detailed policy positions on key local issues
5. **Endorsements**: Support from organizations and community leaders
6. **Events**: Upcoming campaign events and town halls
7. **Contact**: Contact information and volunteer signup form
8. **Donate**: Donation interface with preset amounts
9. **Footer**: Additional links and legal information

## Getting Started

### Prerequisites

- A modern web browser
- A web server (for production) or local development server

### Installation

1. **Clone or download** the files to your local machine
2. **Open the project** in your preferred code editor
3. **Customize the content** (see Customization Guide below)
4. **Test locally** by opening `index.html` in your browser
5. **Deploy** to your web hosting service

### Local Development

For local development, you can:

1. **Simple approach**: Open `index.html` directly in your browser
2. **Using Python**: Run `python -m http.server 8000` in the project directory
3. **Using Node.js**: Install `live-server` globally and run `live-server`
4. **Using PHP**: Run `php -S localhost:8000`

## Customization Guide

### 1. Candidate Information

Edit the following in `index.html`:

- **Candidate Name**: Replace "Sarah Mitchell" throughout the file
- **District**: Change "District 3" to your district
- **Contact Information**: Update email, phone, and address in the contact section
- **Social Media Links**: Update the social media URLs in the footer

### 2. Candidate Photo

Replace the hero image URL in the hero section:

```html
<img src="YOUR_CANDIDATE_PHOTO_URL" alt="Your Name" />
```

### 3. Policy Positions

Update the issues section with your specific policy positions:

- Edit the 6 issue cards in the issues section
- Modify the icons, titles, descriptions, and bullet points
- Add or remove issue cards as needed

### 4. About Section

Customize the about section with:

- Your personal background
- Professional experience
- Community involvement
- Education and qualifications

### 5. Events

Update the events section with your actual campaign events:

- Change dates, times, and locations
- Add or remove events as needed
- Update event descriptions

### 6. Endorsements

Replace the placeholder endorsements with actual endorsements:

- Update organization names
- Change endorsement quotes
- Modify icons to match endorsing organizations

### 7. Colors and Branding

The website uses a blue and red color scheme. To customize:

In `styles.css`, update the CSS custom properties:

```css
:root {
  --primary-color: #2563eb; /* Main blue */
  --secondary-color: #dc2626; /* Donation red */
  --accent-color: #10b981; /* Success green */
}
```

### 8. Fonts

The website uses Inter font from Google Fonts. To change:

1. Update the Google Fonts link in the HTML head
2. Change the font-family in CSS

## Deployment Options

### 1. Static Hosting Services

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for GitHub repositories
- **AWS S3**: Scalable static website hosting

### 2. Traditional Web Hosting

- Upload all files to your web hosting provider
- Ensure the main file is named `index.html`
- Configure any necessary redirects

### 3. Content Delivery Network (CDN)

- Use services like Cloudflare for improved performance
- Enable compression and caching

## Form Integration

The contact form currently shows a success message. For production:

1. **Email Services**: Integrate with services like:

   - Formspree
   - Netlify Forms
   - EmailJS
   - Custom backend API

2. **CRM Integration**: Connect to campaign management tools:
   - NationBuilder
   - MailChimp
   - Constant Contact

## Donation Integration

The donation functionality is currently a placeholder. For real donations:

1. **Payment Processors**: Integrate with:

   - ActBlue (for Democratic campaigns)
   - WinRed (for Republican campaigns)
   - Stripe or PayPal for independent campaigns

2. **Compliance**: Ensure compliance with:
   - FEC regulations
   - State campaign finance laws
   - Contribution limits and reporting requirements

## Analytics and Tracking

Add analytics tracking by:

1. **Google Analytics**: Add tracking code to the head section
2. **Facebook Pixel**: For social media advertising
3. **Campaign-specific tools**: Integration with campaign management platforms

## Security Considerations

- Use HTTPS in production
- Implement Content Security Policy (CSP) headers
- Regular security updates for any backend components
- Secure handling of donor information

## Browser Support

This website supports:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Optimize images before uploading
- Use WebP format for better compression
- Minify CSS and JavaScript for production
- Enable gzip compression on your server
- Use a CDN for faster global loading

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus indicators

## Legal Considerations

Remember to include:

- Campaign finance disclaimers
- Privacy policy
- Terms of use
- Copyright notices
- Compliance with local campaign laws

## Support and Maintenance

- Regular content updates
- Monitor website performance
- Update event listings
- Refresh endorsements
- Security updates

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Contributing

If you're working with a team:

1. Use version control (Git)
2. Create branches for new features
3. Test changes before deploying
4. Keep backups of the live site

## License

This campaign website template is provided as-is for campaign use. Customize and use according to your campaign needs while following applicable laws and regulations.

---

**Note**: This is a template website. All content should be customized for your specific campaign. Ensure compliance with local campaign finance laws and regulations before going live.
