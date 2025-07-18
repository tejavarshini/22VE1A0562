output screenshots:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/4fa16ae1-caf3-45a9-93eb-f2ee5b545e94" />


##  Folder Structure



22ve1a0523/
├── Logging Middleware/
│   ├── logger.ts
│   ├── logger.test.ts  # optional
│   └── README.md
│
└── Frontend Test Submission/
├── public/
├── src/
│   ├── components/
│   │   ├── URLInputForm.tsx
│   │   ├── URLResultCard.tsx
│   │   └── AnalyticsPanel.tsx
│   ├── middleware/
│   │   └── logger.ts
│   ├── pages/
│   │   └── URLShortenerPage.tsx
│   ├── utils/
│   │   ├── api.ts
│   │   └── validators.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css
├── package.json
└── README.md

`



## Logging Middleware

Located in Logging Middleware/

###  Purpose
A reusable logger.ts utility to track events like:

- API call success or failure
- Form submission
- Errors and warnings



### Sample Output (in Dev Console)

json
{
  "level": "INFO",
  "message": "Fetched auth token",
  "timestamp": "2025-07-18T07:30:00Z",
  "data": { "token": "xyz" }
}


---

## Frontend Test Submission

Located in Frontend Test Submission/

###  Features

*  URL Shortener form
* Form validation (URL format, empty checks)
* API Integration (/auth, /register, /analytics)
* Analytics display (clicks, last clicked at, source)
  * Custom logger.ts used across all API & form flows
* UI built using Material UI

---

## How to Run Locally

bash
cd "Frontend Test Submission"

# Install dependencies
npm install

# Run dev server
npm start


Then open: [http://localhost:3000](http://localhost:3000)

---



## Tech Stack

* React + TypeScript
* Material UI (MUI)
* Axios
* Custom logging middleware
* Form state with useState

---

##  Git Setup (if submitting to GitHub)

bash
# Navigate to root
cd 22ve1a0523

# Initialize Git
git init
git add .
git commit -m "Initial commit for frontend test submission"
git remote add origin https://github.com/<your-username>/22ve1a0523.git
git push -u origin main


---



##  Screenshots
