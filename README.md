# CareerCompass — Devember25 Project

CareerCompass is a lightweight static prototype that helps secondary-school students explore career options, take a simple assessment, save career suggestions, and access curated resources to prepare for higher education and the job market.

Key features
- Career Pathways: searchable career cards with descriptions, education requirements, salary ranges, and key skills.
- Assessment: a short personality/interest assessment that generates personalized recommendations.
- Dashboard: saved careers, assessment history, and top recommendations (local demo data stored in browser `localStorage`).
- Resources: curated links to trusted resume templates, scholarship directories, interview guides, and online learning platforms.

How to run locally
- Open `index.html` in your browser (no server required for the static prototype).

Important notes
- Data is stored client-side in `localStorage` for the demo. In production this should be backed by a secure server and authenticated accounts.
- Admin controls exist in the dashboard UI (visible when `careerCompassUser.isAdmin === true`) for device-wide resets; students can clear or export only their own data.

Key pages
- `index.html`, `Assessment.html`, `PathWays.html`, `Resources.html`, `Login.html`, `Sign-up.html`, `Dashboard.html`, `Profile.html`.

