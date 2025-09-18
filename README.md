# Real Estate Dashboard

A small React + TypeScript single-page app built with Vite. It lists mock real estate properties, supports search/filters, and shows a details page for each property using React Router. Styles are done with Tailwind CSS.

## How to run the project

Prerequisites:
- Node.js 18 or newer

Steps:
1. Install dependencies
   - `npm install`
2. Start the dev server
   - `npm run dev`
   - Open the printed URL in your browser
3. Build for production
   - `npm run build`
4. Preview the production build locally
   - `npm run preview`

## Notes on approach and trade‑offs

- Kept a simple file structure under `src/` with small, focused components (`PropertyList`, `PropertyDetails`, `Footer`).
- Used React Router for clean navigation between the list and detail pages.
- Mock data lives in `src/data/mockProperties.ts` to keep the app self‑contained.
- Tailwind utilities keep styles consistent and easy to tweak. Chose neutral colors to avoid an over‑designed feel.
- Images are displayed responsibly to avoid stretching. Card images use object-cover; the detail view avoids unnecessary upscaling where possible.

Potential improvements if given more time:
- Add pagination or infinite scrolling to the list view.
- Extract a global layout with a header and route-based page titles.
- Add unit tests for filtering logic and basic component rendering.
- Replace mock data with a small API layer and proper data fetching.




 ## Include two or three lines about how long did it take you to complete the task:
 
 It took almost 3 to 4 hours to complete this task
 
  ## how satisfied you’re with your submissions on a scale of 0-10.

  i would scale it 8/10.

Please share the code in a GitHub repository (or as a ZIP).

 https://github.com/Sohaib909/Frontend_Task

---

If anything is unclear or you need a different package manager command, let me know.
