# Shopify Instagram Popup

A customizable popup for Shopify that invites users to follow your Instagram page. Features:
- Multilingual (English, Spanish, Catalan)
- Strong CTA for higher engagement
- Responsive design
- Appears only on blog posts after scrolling
- Cookie logic (shows once per visitor per day)

---

## Installation

1. **Add the snippet**
   - Go to **Shopify Admin > Online Store > Themes > Edit Code**
   - Create a new snippet: `instagram-popup.liquid`
   - Paste the content from `snippets/instagram-popup.html`

2. **Upload assets**
   - Upload `instagram-popup.css` and `instagram-popup.js` to the **Assets** folder

3. **Include snippet and assets in your theme**
   - In `theme.liquid` (before `</body>`), add:
     ```liquid
     {% include 'instagram-popup' %}
     <link rel="stylesheet" href="{{ 'instagram-popup.css' | asset_url }}" />
     <script src="{{ 'instagram-popup.js' | asset_url }}" defer></script>
     ```

4. **Customize**
   - Change Instagram handle in HTML snippet if needed
   - Adjust colors in CSS for branding

---

## Preview
Popup appears on **blog posts** after user scrolls 300px and waits 1.5 seconds.
