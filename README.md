# Embers to Everbloom Wellness

A professional Jekyll website for intuitive healing services, built for GitHub Pages.

## Setup Instructions

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler gem (`gem install bundler`)

### Local Development

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Run the site locally:
   ```bash
   bundle exec jekyll serve
   ```

3. Visit `http://localhost:4000` in your browser

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Save and wait a few minutes for deployment

Your site will be available at `https://emberstoeverbloomwellness.github.io`

## Adding Images

Place images in the `assets/images/` directory:

- `embers-to-everbloom.jpg` - Hero image for homepage
- Favicon files
- Product images for the featured products page

## Customization

- Edit `_config.yml` for site-wide settings
- Modify CSS in `assets/css/style.css`
- Update page content in the HTML files
- Add new pages by creating new HTML files with Jekyll front matter

## Email Forms

The contact forms use JavaScript to create mailto links with the form data. The email address is obfuscated to prevent spam crawlers.

## Structure

- `_layouts/` - Page templates
- `_includes/` - Reusable components (header, footer)
- `assets/` - CSS, JavaScript, and images
- Individual `.html` files - Site pages 