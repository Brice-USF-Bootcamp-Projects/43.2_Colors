# Project Structure

/my-color-factory
 ├── /app
 │   ├── /colors
 │   │   ├── page.js       (Lists all colors)
 │   │   ├── /new
 │   │   │   ├── page.js   (Form to add a new color)
 │   │   ├── /[color]
 │   │   │   ├── page.js   (Dynamic color page)
 │   ├── /components
 │   │   ├── ColorList.js  (Shows color list)
 │   │   ├── ColorForm.js  (Form for new color)
 │   │   ├── Navbar.js     (Navigation Bar)
 │   ├── /not-found
 │   │   ├── page.js       (Redirects invalid URLs)
 ├── /styles
 │   ├── globals.css       (Global styles)
 ├── package.json
