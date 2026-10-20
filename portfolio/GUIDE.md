# Your Portfolio + Career Comeback Guide

Written for an IT graduate (Our Lady of Fatima University) who is currently a technical support / customer service agent and wants to land a work-from-home job in the Philippines. Follow the parts in order. Everything here is free except the domain name (about ₱600–900 per year).

**Your timeline (today is mid-October 2026, you resign in December):**

| When | Goal |
|---|---|
| Oct 17 – Oct 31 | Part 1–3: set up tools, personalize and preview the site |
| Nov 1 – Nov 15 | Part 4–5: put it online with a free link, then buy your domain |
| Nov 16 – Dec | Part 6–7: learn modern skills, build 2–3 real projects |
| December | Part 8: polish resume + LinkedIn, then apply while still employed if you can |

Tip: apply for jobs **before** you resign. Many WFH employers take 2–6 weeks to hire, and having an income while you search is much less stressful.

---

## Part 1 — What you have

The folder contains:

- `index.html` — the page structure (rarely touched)
- `style.css` — the black and gold design (touch only if you want a new look)
- `script.js` — the code that builds the page from your data (leave it alone)
- `data.js` — **your content. You edit this file 95% of the time.**
- `GUIDE.md` — this guide

The site is a single page with sections: Home, About, Experience, Education, Works, Contact. The Works section has category filters and is built from a list, so adding a new project is just copy and paste.

You will also create an `assets/` folder inside it for your photo, resume PDF and project screenshots.

---

## Part 2 — Set up your computer (one-time)

1. **Install Visual Studio Code** (free editor): https://code.visualstudio.com
2. **Install Git**: https://git-scm.com/downloads (accept the default options).
3. **Install Node.js (LTS version)**: https://nodejs.org (you will need it later for learning modern frameworks).
4. **Create a GitHub account**: https://github.com — use a professional username like `kevdedios` (this is part of your brand). Enable two-factor authentication.
5. Open VS Code and install these extensions: **Live Server**, **Prettier**, **GitLens** (optional).

Check that it works. Open a terminal (in VS Code: Terminal → New Terminal) and type:

```
git --version
node --version
```

Both should print version numbers.

---

## Part 3 — Personalize your site

### 3.1 Open it
1. Put the `portfolio` folder somewhere easy, like `Documents/portfolio`.
2. VS Code → File → Open Folder → choose it.
3. Right-click `index.html` → **Open with Live Server**. Your site opens in the browser and refreshes every time you save.

### 3.2 Edit `data.js`
Change each of these (only edit between the quotation marks):

- `name` — your full name
- `email` — a **professional** address (firstname.lastname@gmail.com)
- `about` — 2–3 short paragraphs in your own voice
- `experience` — be honest and specific. Weak: "Handled calls." Strong: "Resolved technical issues for Verizon customers on phone and chat, troubleshooting devices, connectivity and account problems." If you know your numbers (quality score, first-call resolution, awards, being a top performer), add them — numbers are what make recruiters stop scrolling. Do not exaggerate; interviewers will ask about everything on this page.
- `education` — add your graduation year, thesis title, honors, organizations.
- `skills` — list only what you can talk about in an interview.
- `socials` — delete lines for platforms you don't use.

### 3.3 Add your formal picture
1. Create a folder called `assets` inside `portfolio`.
2. Save your photo as `photo.jpg` in it. Best: a **4:5 portrait** (for example 1000×1250 pixels), plain background, plain formal clothes, good lighting.
3. Keep the file under 400 KB. Compress it free at https://squoosh.app.
4. If the photo is missing, the site shows your initials in a gold frame, so it never looks broken.

### 3.4 Add your resume (optional)
Save your resume as `assets/resume.pdf`. If you don't want a Resume button, set `resumeLink: ""`.

### 3.5 Add your works
In the `projects` list, copy one block, paste it at the top, and edit it:

```js
{
  title: "Expense Tracker (Python)",
  description: "Command-line app that records daily expenses and shows monthly totals.",
  tags: ["Python", "CLI"],
  category: "Python",
  image: "assets/expense-tracker.png",
  live: "",
  code: "https://github.com/yourusername/expense-tracker",
  date: "2026"
},
```

Remember the comma after every block. The filter buttons appear automatically from the `category` values. Delete the three "Sample Project" entries once you have real ones — a few real projects are far better than many fake ones.

### 3.6 Make the contact form really send email
The form works out of the box by opening the visitor's email app. For a real "Send message" button:
1. Go to https://formspree.io, create a free account, and make a new form using your email.
2. Copy the form URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `formEndpoint` in `data.js`.

### 3.7 Final text edits
In `index.html` change the `<title>` and the two `og:` lines near the top to your name (this is what appears in Google and when someone shares your link on Facebook or LinkedIn).

---

## Part 4 — Put it online for free (GitHub Pages)

1. On GitHub click **New repository**. Name it `portfolio`. Keep it **Public**. Do not add a README.
2. In VS Code open the terminal inside your `portfolio` folder and run these commands one at a time (replace `yourusername`):

```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

   GitHub will ask you to sign in. If it asks for a password, use a **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens) or sign in through the browser window that pops up.

3. On the repository page go to **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Wait 1–2 minutes. Your site is now live at `https://yourusername.github.io/portfolio/`.

**Every time you update the site later**, you only need:

```
git add .
git commit -m "Add new project"
git push
```

Within a minute the live site updates. That is how you "continue to update it".

(Alternatives if you prefer drag-and-drop: Netlify, Cloudflare Pages or Vercel. All have a free tier and can connect to the same GitHub repo.)

---

## Part 5 — Get your own domain

1. Decide the name. Best: `yourfullname.com` or `yourfullname.dev`. Avoid numbers and dashes. Check availability on the registrar below.
2. Buy it from a reputable registrar: **Cloudflare Registrar** (sold at cost, no markup), **Namecheap**, or **Porkbun**. You can usually pay with a credit/debit card or PayPal. A `.com` costs roughly $10–15 per year. Turn on auto-renew and WHOIS privacy (free on most).
3. Connect it to GitHub Pages:
   - In your repo, create a file named `CNAME` (no extension) containing only your domain, e.g. `yourfullname.com`. Commit and push.
   - In your registrar's DNS settings add these records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

   (GitHub occasionally updates these addresses, so double-check them in GitHub's current "Managing a custom domain for your GitHub Pages site" documentation before you enter them.)
   - Back in **Settings → Pages**, type your domain under "Custom domain", save, wait for the DNS check (can take from a few minutes to 24 hours), then tick **Enforce HTTPS**.
4. Visit `https://yourfullname.com`. Done.

**Bonus:** many registrars let you set up a professional forwarding email like `hello@yourfullname.com` that forwards to your Gmail (Cloudflare Email Routing is free).

---

## Part 6 — Be "future proof" (what to learn, in order)

Nobody can predict which language wins, so the strategy is: **learn fundamentals deeply, then learn one modern stack, then stay curious.** You already know Java, C++ and Python, which means you understand variables, loops, functions and objects. That is the hard part.

### Stage 1 — Web basics (weeks 1–4)
You've already used them in this site. Now learn them on purpose:
- HTML and CSS: freeCodeCamp "Responsive Web Design" (free)
- JavaScript: javascript.info (free, excellent) and freeCodeCamp JavaScript course
- Git and GitHub daily habit: commit every day you code

Project: re-create three small sites (landing page, to-do list, weather app using a free API).

### Stage 2 — TypeScript + one framework (weeks 5–12)
- **TypeScript** (JavaScript with types — feels natural coming from Java/C++)
- **React** with **Next.js** (the most in-demand front end stack for remote jobs)
- Official docs: react.dev and nextjs.org/learn

Project: rebuild this portfolio in Next.js later if you want. Keeping it in plain HTML is also perfectly fine — recruiters care that it exists and looks good.

### Stage 3 — Choose a direction (month 4 onward)
Pick one path, go deep for about 3 months:

| Path | Learn | Good for |
|---|---|---|
| Web developer | Node.js, databases (PostgreSQL), REST APIs | Freelance and product companies |
| Python / automation / data | pandas, SQL, scripting, APIs | Back-office, data entry+, analytics |
| QA / testing | Selenium or Playwright, test cases, Jira | **Easiest transition from your support background** |
| IT support / cloud | Linux, networking, AWS or Azure fundamentals, ITIL | WFH technical support and sysadmin |
| AI / LLM apps | Python, calling AI APIs, prompt design, simple automations | A fast-growing field right now |

### Stay updated without burning out
- Spend 30 minutes a day, not 8 hours on weekends.
- Follow a couple of newsletters (JavaScript Weekly, Python Weekly, TLDR).
- Learn a **new language only when a project needs it**. A good next language to add later, after JavaScript/TypeScript, is Go or Rust, but only if your chosen path calls for it.
- Keep a "Learning log" — a note or blog post per week. It also becomes portfolio content.

### Free learning resources
freeCodeCamp, The Odin Project, CS50 (Harvard, free), Microsoft Learn, Google Skillshop, Coursera audit mode. For certificates that employers recognize: **CompTIA A+**, **Google IT Support Certificate**, **AWS Cloud Practitioner**, **Microsoft AZ-900**. Check current exam fees on the official sites.

---

## Part 7 — Projects worth putting in "Works"

Aim for 3–5 solid ones by December. Each needs: a clear README on GitHub, screenshots, and a one-sentence "what problem it solves".

1. **This portfolio** (already done once you publish)
2. **Support ticket tracker** — small web app to log, filter and close tickets. Directly connects to your day job, so it's a great interview story.
3. **Python automation** — e.g. rename and sort files, send a daily report to email, or scrape and chart prices.
4. **A small API project** — weather, currency (PHP exchange rate) or news app.
5. **Troubleshooting knowledge base site** — write 10 guides ("How to fix slow Wi-Fi") in plain language. This shows technical writing and support skills together.

Always host the code on GitHub with a good README and, when possible, a live demo link.

---

## Part 8 — Get the WFH job

### 8.1 Resume
- One page, PDF, simple layout, name + email + phone + LinkedIn + portfolio link at the top.
- Lead with a 2-line summary, then experience with results, then skills, then education.
- Use keywords from the job post (the first reader is often software).

### 8.2 LinkedIn
- Same photo as your portfolio, a headline like "IT Graduate | Technical Support Specialist | Python • JavaScript".
- Put your portfolio URL in the contact info and "Featured" section.
- Turn on **Open to Work** (recruiters only, if you don't want your employer to see).

### 8.3 Where to look
- **Philippines-friendly:** OnlineJobs.ph, JobStreet Philippines, Indeed Philippines, Kalibrr, LinkedIn Jobs, Facebook groups for WFH jobs in the Philippines.
- **International remote:** We Work Remotely, Remote OK, Working Nomads, Wellfound (startups).
- **Roles that fit you right now:** Technical Support Specialist, IT Helpdesk, Customer Success, QA Tester, Junior Web Developer, Virtual Assistant (tech), Data Entry/Operations, Technical Writer.

### 8.4 Stay safe from scams
Never pay a "training fee", "equipment deposit" or "registration fee" to get hired. Never give your bank PIN or OTP. Be careful with jobs that hire you through chat only, or send a check and ask you to forward money. Verify the company's website, LinkedIn page and reviews.

### 8.5 Equipment for WFH
Most WFH employers will ask for: a reliable laptop or desktop, stable internet (often a minimum of 20–50 Mbps, with a backup like mobile data or a second ISP), a headset, and a quiet area. Prepare these before resigning. Also keep savings for **3–6 months** of expenses; the job search can take longer than expected.

### 8.6 Interviews
Practice explaining each of your projects in 60 seconds: *the problem, what you built, what you learned.* Use the STAR method (Situation, Task, Action, Result) for questions about your Alorica experience — you have excellent real stories already.

---

## Part 9 — Weekly routine that actually works

- Mon–Fri: 1 hour coding after shift (or 30 minutes if tired)
- Saturday: build on a project for 2–3 hours
- Sunday: update `data.js`, push to GitHub, apply to 5 jobs
- Every 2 weeks: add one new thing to your portfolio

Consistency beats intensity. Ninety minutes a day for 8 weeks will beat one 12-hour weekend.

---

## Part 10 — Common problems

| Problem | Fix |
|---|---|
| Page is blank | Open browser DevTools (F12) → Console. A typo in `data.js` (missing comma or quote) is the usual cause. |
| Photo doesn't show | File must be at `assets/photo.jpg` exactly (lowercase). On GitHub the file names are case-sensitive. |
| Site not updating | Run `git add .`, `git commit`, `git push`. Then hard refresh with Ctrl+Shift+R. |
| Domain not working | Wait up to 24 hours for DNS, check records match the table above, check the `CNAME` file. |
| `git push` rejected | Run `git pull --rebase origin main`, then push again. |

---

## Appendix — Change the look

All colors are at the top of `style.css`:

```css
--bg:#000;      /* page background */
--gold:#c9a96e; /* accent color */
```

Want silver or white accents instead of gold? Change `--gold` and `--gold2`. Fonts are **Cormorant Garamond** (headings) and **Inter** (body), loaded from Google Fonts in `index.html`.
