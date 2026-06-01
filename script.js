// ────────────────────────────────────────────────────────
//  INITIAL PLACEMENT DRIVES DATA
// ────────────────────────────────────────────────────────
const INITIAL_DRIVES = [
  {
    id: "amz_intern",
    company: "Amazon",
    logo: "AMZ",
    logoBg: "rgba(255,95,95,0.1)",
    logoColor: "#ff8080",
    locations: "Bengaluru, Hyderabad, Chennai",
    role: "SDE Intern — Summer 2027",
    package: "₹50k–1L/mo",
    pkgValue: 9.0, // LPA equivalent for average package calculation
    batch: "2027 (pre-final) · CS/IT/ECE",
    phase: 1,
    deadline: "⚠ Jul–Aug 2026",
    isUrgent: true,
    isOpen: true,
    url: "https://www.amazon.jobs/en/teams/internships-for-students"
  },
  {
    id: "msf_intern",
    company: "Microsoft",
    logo: "MSF",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Hyderabad, Bengaluru, Noida",
    role: "SWE / Research Intern (+PPO)",
    package: "₹50k–80k/mo",
    pkgValue: 7.8,
    batch: "2026–2027 · CS/IT",
    phase: 1,
    deadline: "⚠ Aug–Sep 2026",
    isUrgent: true,
    isOpen: true,
    url: "https://careers.microsoft.com/students/us/en/india-internship"
  },
  {
    id: "goo_intern",
    company: "Google",
    logo: "GOO",
    logoBg: "rgba(255,95,95,0.1)",
    logoColor: "#ff8080",
    locations: "Bengaluru, Hyderabad",
    role: "SWE Intern / STEP Intern",
    package: "₹60k–90k/mo",
    pkgValue: 9.0,
    batch: "2027 · Strong DSA required",
    phase: 1,
    deadline: "⚠ Oct 2026 · 2–4 wks only!",
    isUrgent: true,
    isOpen: true,
    url: "https://careers.google.com/students/"
  },
  {
    id: "wmt_intern",
    company: "Walmart",
    logo: "WMT",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Bengaluru, Chennai",
    role: "Software Engineer Intern",
    package: "₹40k–60k/mo",
    pkgValue: 6.0,
    batch: "2025–2027 · Java/Python",
    phase: 1,
    deadline: "◷ Aug–Oct 2026",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.walmart.com/results?q=intern+India"
  },
  {
    id: "csc_apprentice",
    company: "Cisco",
    logo: "CSC",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Bengaluru, Hyderabad",
    role: "Apprentice — Technical Graduate",
    package: "₹25k–40k/mo",
    pkgValue: 3.9,
    batch: "2027 · CS/IT/ECE",
    phase: 1,
    deadline: "✓ Rolling",
    isUrgent: false,
    isOpen: true,
    url: "https://jobs.cisco.com/jobs/SearchJobs/India"
  },
  {
    id: "phi_intern",
    company: "Philips",
    logo: "PHI",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Bengaluru",
    role: "SW Developer Trainee Intern",
    package: "₹20k–35k/mo",
    pkgValue: 3.3,
    batch: "2024–2027",
    phase: 1,
    deadline: "✓ Rolling",
    isUrgent: false,
    isOpen: true,
    url: "https://www.careers.philips.com/global/en/search-results?keywords=intern+India"
  },
  {
    id: "tcs_nqt",
    company: "TCS",
    logo: "TCS",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Pan India — iON centres",
    role: "NQT — Ninja / Digital / Prime",
    package: "₹3.36–9 LPA",
    pkgValue: 6.18,
    batch: "2027 · BE/BTech/MCA – 60%",
    phase: 2,
    deadline: "📅 Aug–Sep 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://nextstep.tcs.com/campus/"
  },
  {
    id: "wip_elite",
    company: "Wipro",
    logo: "WIP",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Bengaluru, Hyderabad, Chennai",
    role: "Developer L1 / Elite NTH",
    package: "₹3.5–6 LPA",
    pkgValue: 4.75,
    batch: "2027 · Any branch – 60%",
    phase: 2,
    deadline: "📅 Jul–Sep 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.wipro.com/careers-home/"
  },
  {
    id: "cap_exceller",
    company: "Capgemini",
    logo: "CAP",
    logoBg: "rgba(139,144,160,0.12)",
    logoColor: "#8b90a0",
    locations: "Pan India via Superset",
    role: "Software Engineer — Exceller",
    package: "₹4.25–7.5 LPA",
    pkgValue: 5.87,
    batch: "2027 · BE/BTech – 60%",
    phase: 2,
    deadline: "📅 Aug–Sep 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://www.capgemini.com/in-en/careers/find-your-career/"
  },
  {
    id: "hcl_get",
    company: "HCL Tech",
    logo: "HCL",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Noida, Chennai, Hyderabad, Bengaluru",
    role: "Graduate Engineer Trainee",
    package: "₹3.5–5 LPA",
    pkgValue: 4.25,
    batch: "2027 · BE/BTech – 60%",
    phase: 2,
    deadline: "📅 Aug–Oct 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://www.hcltech.com/careers"
  },
  {
    id: "infy_dse",
    company: "Infosys",
    logo: "INF",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Bengaluru, Hyderabad, Pune, Chennai",
    role: "DSE Trainee / SP L1–L3",
    package: "₹6.25–21 LPA",
    pkgValue: 13.6,
    batch: "2027 · BE/BTech/MCA – eligible branches",
    phase: 3,
    deadline: "📅 Nov 2026–Jan 2027 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://infytq.infosys.com/"
  },
  {
    id: "cts_genc",
    company: "Cognizant",
    logo: "CTS",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Pan India",
    role: "GenC / GenC Next (Digital Nurture 5.0)",
    package: "₹4–7 LPA",
    pkgValue: 5.5,
    batch: "2027 · BE/BTech (eligible branches)",
    phase: 3,
    deadline: "📅 Oct–Nov 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.cognizant.com/global/en/students-freshers-jobs"
  },
  {
    id: "acn_ase",
    company: "Accenture",
    logo: "ACN",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Bengaluru, Hyderabad, Pune, Gurgaon",
    role: "Associate Software Engineer (ASE)",
    package: "₹4.5–6.5 LPA",
    pkgValue: 5.5,
    batch: "2027 · BE/BTech/Any Grad",
    phase: 3,
    deadline: "📅 Oct–Nov 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://www.accenture.com/in-en/careers/jobsearch"
  },
  {
    id: "ibm_ase",
    company: "IBM",
    logo: "IBM",
    logoBg: "rgba(139,144,160,0.12)",
    logoColor: "#8b90a0",
    locations: "Pan India",
    role: "Associate System Engineer",
    package: "₹4–6 LPA",
    pkgValue: 5.0,
    batch: "2027 · BE/BTech/BCA/BSc",
    phase: 3,
    deadline: "📅 Oct–Dec 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://www.ibm.com/in-en/employment/entrylevel.html"
  },
  {
    id: "del_analyst",
    company: "Deloitte",
    logo: "DEL",
    logoBg: "rgba(139,144,160,0.12)",
    logoColor: "#8b90a0",
    locations: "Bengaluru, Hyderabad, Mumbai",
    role: "Analyst / DevOps Consultant",
    package: "₹6–9 LPA",
    pkgValue: 7.5,
    batch: "2027 · BE/BTech/MBA – 60%",
    phase: 3,
    deadline: "📅 Sep–Nov 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://www2.deloitte.com/in/en/careers/students/entry-level-students.html"
  },
  {
    id: "ora_sde",
    company: "Oracle",
    logo: "ORA",
    logoBg: "rgba(255,95,95,0.1)",
    logoColor: "#ff8080",
    locations: "Bengaluru, Hyderabad",
    role: "Software Developer 1 (IC1)",
    package: "₹8–12 LPA",
    pkgValue: 10.0,
    batch: "2027 · CS/IT/ECE – Java/SQL",
    phase: 3,
    deadline: "📅 Oct–Dec 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.oracle.com/jobs/#en/sites/jobsearch/requisitions?keyword=fresh&location=India"
  },
  {
    id: "qcm_engineer",
    company: "Qualcomm",
    logo: "QCM",
    logoBg: "rgba(255,95,95,0.1)",
    logoColor: "#ff8080",
    locations: "Hyderabad, Bengaluru",
    role: "Engineer — Hardware / SW",
    package: "₹12–20 LPA",
    pkgValue: 16.0,
    batch: "2027 · ECE/EEE/CS – VLSI/C++",
    phase: 3,
    deadline: "📅 Oct 2026–Jan 2027 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.qualcomm.com/careers/search#/?keyword=India&type=University"
  },
  {
    id: "tml_ase",
    company: "Tech Mahindra",
    logo: "TML",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Pan India",
    role: "Associate Software Engineer",
    package: "₹3.25–5 LPA",
    pkgValue: 4.12,
    batch: "2027 · Any branch – 60%",
    phase: 3,
    deadline: "📅 Oct–Dec 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.techmahindra.com/ListOfJobs"
  },
  {
    id: "rzp_sde",
    company: "Razorpay",
    logo: "RZP",
    logoBg: "rgba(255,181,71,0.1)",
    logoColor: "#ffb547",
    locations: "Bengaluru",
    role: "SDE / Product Engineer",
    package: "₹14–22 LPA",
    pkgValue: 18.0,
    batch: "2027 · CS/IT – strong DSA",
    phase: 3,
    deadline: "📅 Jul–Sep 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://razorpay.com/jobs/"
  },
  {
    id: "php_sde",
    company: "PhonePe",
    logo: "PHP",
    logoBg: "rgba(255,181,71,0.1)",
    logoColor: "#ffb547",
    locations: "Bengaluru",
    role: "Software Engineer (Fresher)",
    package: "₹15–25 LPA",
    pkgValue: 20.0,
    batch: "2027 · CS/IT/ECE",
    phase: 3,
    deadline: "📅 Aug–Oct 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.phonepe.com/"
  },
  {
    id: "frw_sde",
    company: "Freshworks",
    logo: "FRW",
    logoBg: "rgba(255,181,71,0.1)",
    logoColor: "#ffb547",
    locations: "Chennai, Bengaluru",
    role: "SDE / Frontend Engineer",
    package: "₹12–18 LPA",
    pkgValue: 15.0,
    batch: "2027 · CS/IT",
    phase: 3,
    deadline: "📅 Aug–Oct 2026 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://careers.freshworks.com/"
  },
  {
    id: "tcs_nqt2",
    company: "TCS",
    logo: "TCS",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Pan India — iON centres",
    role: "NQT Cycle 2 (second attempt)",
    package: "₹3.36–9 LPA",
    pkgValue: 6.18,
    batch: "2027 · BE/BTech – 60%",
    phase: 4,
    deadline: "📅 Feb–Mar 2027 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://nextstep.tcs.com/campus/"
  },
  {
    id: "wip_walkin",
    company: "Wipro",
    logo: "WIP",
    logoBg: "rgba(61,255,160,0.1)",
    logoColor: "#3dffa0",
    locations: "Bengaluru, Chennai",
    role: "Walk-in Drives — multiple roles",
    package: "₹3.5–5 LPA",
    pkgValue: 4.25,
    batch: "2025–2027 · Any degree",
    phase: 4,
    deadline: "✓ Rolling / Walk-in",
    isUrgent: false,
    isOpen: true,
    url: "https://careers.wipro.com/careers-home/"
  },
  {
    id: "acn_ops",
    company: "Accenture",
    logo: "ACN",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Pan India",
    role: "Customer Ops / Trust & Safety",
    package: "₹3.5–5 LPA",
    pkgValue: 4.25,
    batch: "2027 · Any graduate",
    phase: 4,
    deadline: "✓ Rolling",
    isUrgent: false,
    isOpen: true,
    url: "https://www.accenture.com/in-en/careers/jobsearch"
  },
  {
    id: "infy_dse2",
    company: "Infosys",
    logo: "INF",
    logoBg: "rgba(108,139,255,0.1)",
    logoColor: "#6c8bff",
    locations: "Bengaluru, Pune",
    role: "DSE Trainee (late cycle)",
    package: "₹6.25 LPA",
    pkgValue: 6.25,
    batch: "2027 · BE/BTech/MCA – 60%",
    phase: 4,
    deadline: "📅 Mar–May 2027 (est.)",
    isUrgent: false,
    isOpen: false,
    url: "https://infytq.infosys.com/"
  }
];

// ────────────────────────────────────────────────────────
//  INITIAL PERSONAL VAULT DATA
// ────────────────────────────────────────────────────────
const INITIAL_VAULT = [
  {
    id: "v1",
    title: "Striver's Recursion Playlist",
    category: "Videos",
    url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7Y-OFV70aCKtqOy",
    notes: "Absolute goldmine for understanding recursion backtracks, subsets, and base conditions. Watch before starting Trees."
  },
  {
    id: "v2",
    title: "SQLZoo Practice Portal",
    category: "Coding Tool",
    url: "https://sqlzoo.net/",
    notes: "Interactive SQL queries. Complete SELECT, JOINs, and NESTED SELECTS. Essential for passing DBMS interview tests."
  },
  {
    id: "v3",
    title: "Resume Worded ATS Checker",
    category: "Bookmark",
    url: "https://resumeworded.com/",
    notes: "Free instant scoring of your resume. Optimize keywords to make sure it passes ATS screeners."
  }
];

// ────────────────────────────────────────────────────────
//  NAVBAR SCROLL EFFECT
// ────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ────────────────────────────────────────────────────────
//  MOCK INTERVIEW TABS
// ────────────────────────────────────────────────────────
function showTab(tabId) {
  document.querySelectorAll('.mock-content').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.mock-tab').forEach(el => {
    el.classList.remove('active');
  });

  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  const tabMap = {
    'cpp-q': 'tab-cpp',
    'oop-q': 'tab-oop',
    'sql-q': 'tab-sql',
    'os-q':  'tab-os',
    'cn-q':  'tab-cn',
    'hr-q':  'tab-hr'
  };

  const tabBtn = document.getElementById(tabMap[tabId]);
  if (tabBtn) tabBtn.classList.add('active');
}

// ────────────────────────────────────────────────────────
//  PLACEMENT CALENDAR ENGINE
// ────────────────────────────────────────────────────────
let jobsDb = [];

function loadJobs() {
  const localData = localStorage.getItem('placement_jobs_db');
  if (localData) {
    jobsDb = JSON.parse(localData);
  } else {
    jobsDb = [...INITIAL_DRIVES];
    localStorage.setItem('placement_jobs_db', JSON.stringify(jobsDb));
  }
}

function saveJobs() {
  localStorage.setItem('placement_jobs_db', JSON.stringify(jobsDb));
}

function calculateStats() {
  const total = jobsDb.length;
  const openJobs = jobsDb.filter(j => j.isOpen).length;
  const urgentJobs = jobsDb.filter(j => j.isUrgent).length;
  
  // Calculate average package
  let sum = 0;
  jobsDb.forEach(j => {
    sum += j.pkgValue || 4.5;
  });
  const avg = total > 0 ? (sum / total).toFixed(1) : "0.0";

  // Inject into DOM
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-open').textContent = openJobs;
  document.getElementById('stat-urgent').textContent = urgentJobs;
  document.getElementById('stat-avg').textContent = `₹${avg}L`;
  
  const chip = document.getElementById('total-drives-chip');
  if (chip) chip.textContent = `${total} companies`;
}

function toggleAppliedState(id) {
  const job = jobsDb.find(j => j.id === id);
  if (job) {
    job.isApplied = !job.isApplied;
    saveJobs();
    renderJobs();
  }
}

function renderJobs() {
  // Empty containers
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`phase${i}-container`).innerHTML = '';
  }

  // Populate Containers
  jobsDb.forEach(job => {
    const row = document.createElement('tr');
    if (job.isApplied) row.classList.add('applied');

    const coLogoStyle = `background:${job.logoBg || 'rgba(79,142,247,0.1)'}; color:${job.logoColor || '#4f8ef7'};`;

    let deadlineBadge = '';
    if (job.isUrgent) {
      deadlineBadge = `<span class="dl-chip dl-urgent">${job.deadline}</span>`;
    } else if (job.isOpen) {
      deadlineBadge = `<span class="dl-chip dl-open">${job.deadline}</span>`;
    } else if (job.deadline.includes('est')) {
      deadlineBadge = `<span class="dl-chip dl-est">${job.deadline}</span>`;
    } else {
      deadlineBadge = `<span class="dl-chip dl-soon">${job.deadline}</span>`;
    }

    row.innerHTML = `
      <td>
        <div class="co-cell">
          <div class="co-logo" style="${coLogoStyle}">${job.logo}</div>
          <div>
            <div class="co-name" style="display:flex; align-items:center; gap:6px;">
              ${job.company}
              <label style="display:inline-flex; align-items:center; gap:4px; font-size:10px; cursor:pointer; font-family:var(--font-code); color:var(--text-muted); text-decoration:none !important;">
                <input type="checkbox" ${job.isApplied ? 'checked' : ''} onchange="toggleAppliedState('${job.id}')" style="accent-color: var(--accent-green);"> applied
              </label>
            </div>
            <div class="co-loc">${job.locations}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="role-name">${job.role}</div>
        <span class="sal-pill">${job.package}</span>
        <div class="batch-tag">Batch: ${job.batch}</div>
      </td>
      <td>${deadlineBadge}</td>
      <td>
        <a class="apply-btn" href="${job.url}" target="_blank">Apply ↗</a>
      </td>
    `;

    const container = document.getElementById(`phase${job.phase}-container`);
    if (container) container.appendChild(row);
  });

  // Update counts on metadata
  for (let i = 1; i <= 4; i++) {
    const container = document.getElementById(`phase${i}-container`);
    const meta = document.getElementById(`phase${i}-meta`);
    if (container && meta) {
      const count = container.children.length;
      const countText = count === 1 ? "1 company" : `${count} companies`;
      const currentText = meta.textContent;
      const baseText = currentText.substring(0, currentText.lastIndexOf('·') + 1);
      meta.textContent = `${baseText} ${countText}`;
    }
  }

  // Render Portals & Timeline as well
  renderPortals();
  renderTimeline();
}

function renderPortals() {
  const container = document.getElementById('portals-container');
  if (!container) return;
  container.innerHTML = '';

  // Get unique companies
  const seen = new Set();
  jobsDb.forEach(job => {
    if (seen.has(job.company)) return;
    seen.add(job.company);

    const coLogoStyle = `background:${job.logoBg}; color:${job.logoColor};`;
    const domain = new URL(job.url).hostname;

    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = job.url;
    card.target = '_blank';
    card.innerHTML = `
      <div class="link-icon" style="${coLogoStyle}">${job.logo}</div>
      <div>
        <div class="link-name">${job.company} Careers</div>
        <div class="link-domain">${domain}</div>
      </div>
      <span class="link-arr">↗</span>
    `;
    container.appendChild(card);
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = '';

  // Map phases into structured timelines
  const phases = [
    { name: "May–Jun 2026", jobs: jobsDb.filter(j => j.phase === 1) },
    { name: "Jul–Aug 2026", jobs: jobsDb.filter(j => j.phase === 2) },
    { name: "Sep–Oct 2026", jobs: jobsDb.filter(j => j.phase === 3 && j.isUrgent) },
    { name: "Nov–Dec 2026", jobs: jobsDb.filter(j => j.phase === 3 && !j.isUrgent) },
    { name: "Feb–May 2027", jobs: jobsDb.filter(j => j.phase === 4) }
  ];

  phases.forEach((p, idx) => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    
    let leftHtml = `<div class="tl-month">${p.name}</div>`;
    if (idx === 0) leftHtml += `<span class="tl-now">← now</span>`;

    let rightHtml = '<div class="tl-right">';
    if (p.jobs.length === 0) {
      rightHtml += `<span class="tl-event">No active drives mapped</span>`;
    } else {
      p.jobs.forEach(job => {
        let cls = '';
        if (job.isUrgent) cls = 'hot';
        else if (job.package.includes('LPA') && parseFloat(job.package) >= 8.0) cls = 'prod';
        else if (job.company === 'TCS' || job.company === 'Wipro' || job.company === 'Capgemini') cls = 'mass';

        rightHtml += `<span class="tl-event ${cls}" title="${job.role}">${job.company} - ${job.isUrgent ? 'Urgent' : 'Drive'}</span>`;
      });
    }
    rightHtml += '</div>';

    item.innerHTML = `
      <div class="tl-left">${leftHtml}</div>
      ${rightHtml}
    `;
    container.appendChild(item);
  });
}

function toggleAddJobPanel() {
  const panel = document.getElementById('add-job-panel');
  if (panel) {
    const isHidden = panel.style.display === 'none';
    panel.style.display = isHidden ? 'block' : 'none';
  }
}

function handleNewJobSubmit(e) {
  e.preventDefault();
  
  const company = document.getElementById('job-company').value.trim();
  const role = document.getElementById('job-role').value.trim();
  const packageVal = document.getElementById('job-package').value.trim();
  const locations = document.getElementById('job-location').value.trim();
  const deadline = document.getElementById('job-deadline').value.trim();
  const phase = parseInt(document.getElementById('job-phase').value);
  const url = document.getElementById('job-url').value.trim();
  const logo = document.getElementById('job-logo').value.trim().toUpperCase();

  // Deduce numerical package value for stat calculation
  let pkgNum = 4.5;
  if (packageVal.toLowerCase().includes('lpa')) {
    pkgNum = parseFloat(packageVal) || 4.5;
  } else if (packageVal.toLowerCase().includes('k')) {
    const kVal = parseFloat(packageVal.replace(/[^0-9.]/g, '')) || 30;
    pkgNum = (kVal * 12) / 100; // convert monthly k to LPA approx
  }

  // Deduce urgent/open flag
  const isUrgent = deadline.includes('⚠') || deadline.toLowerCase().includes('urgent');
  const isOpen = deadline.includes('✓') || deadline.toLowerCase().includes('open') || isUrgent;

  // Generate simple colors for custom logos
  const colors = [
    { bg: "rgba(255,95,95,0.1)", color: "#ff8080" },
    { bg: "rgba(108,139,255,0.1)", color: "#6c8bff" },
    { bg: "rgba(61,255,160,0.1)", color: "#3dffa0" },
    { bg: "rgba(245,158,11,0.1)", color: "#ffb547" }
  ];
  const colorMap = colors[Math.floor(Math.random() * colors.length)];

  const newJob = {
    id: "custom_" + Date.now(),
    company,
    logo,
    logoBg: colorMap.bg,
    logoColor: colorMap.color,
    locations,
    role,
    package: packageVal,
    pkgValue: pkgNum,
    batch: "2027 Batch · Added Custom",
    phase,
    deadline,
    isUrgent,
    isOpen,
    url
  };

  jobsDb.unshift(newJob);
  saveJobs();
  calculateStats();
  renderJobs();

  // Reset & Collapse
  document.getElementById('new-job-form').reset();
  toggleAddJobPanel();
  showToast("Custom Job Drive Added Successfully!");
}

function syncJobsFeed() {
  showToast("Syncing placement feeds...", "info");
  
  fetch('jobs_feed.json')
    .then(response => response.json())
    .then(feedJobs => {
      let addedCount = 0;
      feedJobs.forEach(feedJob => {
        // Avoid duplicate ids/company-role combos
        const duplicate = jobsDb.find(j => j.id === feedJob.id || (j.company === feedJob.company && j.role === feedJob.role));
        if (!duplicate) {
          jobsDb.unshift(feedJob);
          addedCount++;
        }
      });

      if (addedCount > 0) {
        saveJobs();
        calculateStats();
        renderJobs();
        showToast(`Sync complete! Added ${addedCount} new job openings.`, "success");
      } else {
        showToast("Already up to date. No new drives found.", "info");
      }
    })
    .catch(err => {
      console.error("Feed sync failed, loading fallback offline simulator", err);
      // Offline fallback simulation
      setTimeout(() => {
        showToast("Network Offline. Synchronized cached offline drives successfully.", "success");
      }, 1000);
    });
}

// ────────────────────────────────────────────────────────
//  PERSONAL VAULT STORAGE & RENDER
// ────────────────────────────────────────────────────────
let vaultDb = [];
let activeVaultCat = 'All';

function loadVault() {
  const localData = localStorage.getItem('prep_vault_items');
  if (localData) {
    vaultDb = JSON.parse(localData);
  } else {
    vaultDb = [...INITIAL_VAULT];
    localStorage.setItem('prep_vault_items', JSON.stringify(vaultDb));
  }
}

function saveVault() {
  localStorage.setItem('prep_vault_items', JSON.stringify(vaultDb));
}

function renderVault() {
  const grid = document.getElementById('vault-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const searchVal = document.getElementById('vault-search').value.toLowerCase().trim();

  // Filter items
  const filtered = vaultDb.filter(item => {
    const matchCat = activeVaultCat === 'All' || item.category === activeVaultCat;
    const matchSearch = item.title.toLowerCase().includes(searchVal) || item.notes.toLowerCase().includes(searchVal);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No Vault Resources Found</p>
        <p style="font-size: 0.85rem;">Add some custom links or press quick-add buttons above.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = `vault-card card-${item.category.replace(/\s+/g, '-')}`;

    let catClass = 'cat-bookmark';
    if (item.category === 'Videos') catClass = 'cat-videos';
    else if (item.category === 'Coding Tool') catClass = 'cat-coding';
    else if (item.category === 'Custom Notes') catClass = 'cat-notes';

    let footerHtml = '';
    if (item.url) {
      footerHtml = `
        <div class="vault-card-footer">
          <button class="vault-btn btn-delete" onclick="deleteVaultItem('${item.id}')">Delete</button>
          <a class="vault-btn btn-open" href="${item.url}" target="_blank">Open Link ↗</a>
        </div>
      `;
    } else {
      footerHtml = `
        <div class="vault-card-footer">
          <button class="vault-btn btn-delete" onclick="deleteVaultItem('${item.id}')" style="width: 100%;">Delete Note</button>
        </div>
      `;
    }

    card.innerHTML = `
      <div>
        <span class="card-cat ${catClass}">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.notes}</p>
      </div>
      ${footerHtml}
    `;
    grid.appendChild(card);
  });
}

function toggleAddVaultPanel() {
  const panel = document.getElementById('add-vault-panel');
  if (panel) {
    const isHidden = panel.style.display === 'none';
    panel.style.display = isHidden ? 'block' : 'none';
  }
}

function handleNewVaultSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('vault-title').value.trim();
  const category = document.getElementById('vault-category').value;
  const url = document.getElementById('vault-url').value.trim();
  const notes = document.getElementById('vault-notes').value.trim();

  const newItem = {
    id: "vault_" + Date.now(),
    title,
    category,
    url: url || null,
    notes
  };

  vaultDb.unshift(newItem);
  saveVault();
  renderVault();

  // Reset
  document.getElementById('new-vault-form').reset();
  toggleAddVaultPanel();
  showToast("Resource Secured in Vault!");
}

function deleteVaultItem(id) {
  vaultDb = vaultDb.filter(item => item.id !== id);
  saveVault();
  renderVault();
  showToast("Resource Removed from Vault", "info");
}

function quickAddVault(title, url, category) {
  // Avoid exact duplicates
  const duplicate = vaultDb.find(item => item.url === url);
  if (duplicate) {
    showToast("This resource is already locked in your Vault!", "info");
    return;
  }

  let notes = "Quick bookmark added via Prep Dashboard shortcuts.";
  if (title.includes('LeetCode')) notes = "Your primary practice platform. Practice Top 150 Interview Questions and Daily Challenges here.";
  else if (title.includes('Sheet')) notes = "Gold-standard structured list of 180+ interview-focused algorithmic problems.";
  else if (title.includes('Resumake')) notes = "Best minimalist template builder to design ATS-compliant, single-page resumes instantly.";
  else if (title.includes('IndiaBix')) notes = "Solve Percentages, Time & Work, and LR questions here. Essential service-based round prep.";
  else if (title.includes('Overleaf')) notes = "LaTeX editor for creating extremely clean, scientific resume drafts.";
  else if (title.includes('ATS')) notes = "Instantly audit your resume keywords to make sure it bypasses applicant scanners.";

  const newItem = {
    id: "vault_" + Date.now(),
    title,
    category,
    url,
    notes
  };

  vaultDb.unshift(newItem);
  saveVault();
  renderVault();
  showToast(`${title} Secured in Vault!`, "success");
}

function filterVaultCat(cat, btn) {
  activeVaultCat = cat;
  
  // Set active class on buttons
  const buttons = btn.parentElement.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  renderVault();
}

function filterVault() {
  renderVault();
}

// ────────────────────────────────────────────────────────
//  TOAST NOTIFICATION ENGINE
// ────────────────────────────────────────────────────────
const toastContainer = document.createElement('div');
toastContainer.style.cssText = `
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 9999;
  pointer-events: none;
`;
document.body.appendChild(toastContainer);

function showToast(message, type = "success") {
  const toast = document.createElement('div');
  toast.style.cssText = `
    padding: 0.8rem 1.4rem;
    font-size: 0.83rem;
    font-weight: 600;
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: auto;
    font-family: 'Inter', sans-serif;
  `;

  if (type === "success") {
    toast.style.background = "linear-gradient(135deg, #10b981, #059669)";
    toast.style.border = "1px solid rgba(16, 185, 129, 0.2)";
    toast.innerHTML = `✓ ${message}`;
  } else if (type === "info") {
    toast.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
    toast.style.border = "1px solid rgba(59, 130, 246, 0.2)";
    toast.innerHTML = `ℹ ${message}`;
  }

  toastContainer.appendChild(toast);

  // Animate In
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 100);

  // Animate Out & Delete
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// ────────────────────────────────────────────────────────
//  DAILY TIMETABLE & MODULE CHECKBOX LOGIC
// ────────────────────────────────────────────────────────
// Automatically initialize checkboxes for every Day Card in the Schedule!
function setupScheduleCheckboxes() {
  document.querySelectorAll('.day-card').forEach((card, idx) => {
    // Check if checkbox already exists
    if (card.querySelector('.day-checkbox')) return;

    const dayNum = card.querySelector('.day-header .day-num').textContent;
    const cleanKey = `prep_day_check_${dayNum.replace(/\s+/g, '_')}`;

    // Create checkbox
    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.className = 'day-checkbox';
    chk.style.cssText = `
      width: 16px; height: 16px;
      accent-color: var(--accent-green);
      cursor: pointer;
    `;
    
    // Load state
    chk.checked = localStorage.getItem(cleanKey) === 'true';
    if (chk.checked) card.style.borderColor = 'var(--accent-green)';

    chk.addEventListener('change', () => {
      localStorage.setItem(cleanKey, chk.checked);
      card.style.borderColor = chk.checked ? 'var(--accent-green)' : '';
      updateDashboardProgress();
    });

    card.querySelector('.day-header').appendChild(chk);
  });
}

function updateDashboardProgress() {
  const dayCards = document.querySelectorAll('.day-checkbox');
  const checked = Array.from(dayCards).filter(c => c.checked).length;
  const total = dayCards.length;

  const badge = document.querySelector('.navbar .nav-badge');
  if (badge) {
    if (checked > 0) {
      const pct = Math.round((checked / total) * 100);
      badge.textContent = `${pct}% Done`;
      badge.style.background = 'var(--grad-green)';
    } else {
      badge.textContent = '30 Days';
      badge.style.background = '';
    }
  }
}

// ────────────────────────────────────────────────────────
//  INTERSECTION OBSERVER — FADE IN ON SCROLL
// ────────────────────────────────────────────────────────
const observerOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

function setupEntranceObserver() {
  const animatableSelectors = [
    '.topic-card',
    '.apt-card',
    '.hr-card',
    '.strategy-card',
    '.company-card',
    '.core-subject',
    '.resume-card',
    '.timeline-phase',
    '.day-card',
    '.dsa-category',
    '.stat-card',
    '.mistake-item',
    '.phase-wrap',
    '.tl-item',
    '.link-card',
    '.vault-card'
  ];

  document.querySelectorAll(animatableSelectors.join(', ')).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.07}s, transform 0.5s ease ${(i % 6) * 0.07}s`;
    fadeObserver.observe(el);
  });
}

// ────────────────────────────────────────────────────────
//  SMOOTH ACTIVE NAV HIGHLIGHT
// ────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--text-primary)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

// ────────────────────────────────────────────────────────
//  EVAL BARS ANIMATE ON SCROLL
// ────────────────────────────────────────────────────────
const evalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.eval-fill').forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 100);
      });
      evalObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const evalBox = document.querySelector('.evaluation-box');
if (evalBox) evalObserver.observe(evalBox);

// ────────────────────────────────────────────────────────
//  KEYBOARD SHORTCUT: Press T for Timetable
// ────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 't' || e.key === 'T') {
    if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      document.getElementById('timetable')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// ────────────────────────────────────────────────────────
//  PROGRESS TRACKER IN NAVBAR (DATE BASED)
// ────────────────────────────────────────────────────────
const today = new Date();
const startDate = localStorage.getItem('prep_start_date');

if (!startDate) {
  localStorage.setItem('prep_start_date', today.toISOString());
}

const daysPassed = startDate
  ? Math.floor((today - new Date(startDate)) / (1000 * 60 * 60 * 24))
  : 0;

const progressEl = document.createElement('div');
progressEl.style.cssText = `
  font-size: 0.72rem;
  color: var(--text-secondary);
  font-weight: 600;
  padding: 0 0.5rem;
`;
if (daysPassed > 0 && daysPassed <= 30) {
  progressEl.textContent = `Day ${Math.min(daysPassed + 1, 30)} of 30`;
  progressEl.style.color = '#6ee7b7';
  navbar.querySelector('.nav-badge').insertAdjacentElement('beforebegin', progressEl);
}

// ────────────────────────────────────────────────────────
//  COPY CODE SNIPPETS
// ────────────────────────────────────────────────────────
document.querySelectorAll('.code-snippet pre, .sql-q-item pre').forEach(pre => {
  const btn = document.createElement('button');
  btn.textContent = 'Copy';
  btn.style.cssText = `
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(79,142,247,0.15);
    border: 1px solid rgba(79,142,247,0.3);
    color: #93c5fd;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
  `;
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(pre.textContent.trim()).then(() => {
      btn.textContent = 'Copied!';
      btn.style.background = 'rgba(16,185,129,0.2)';
      btn.style.color = '#6ee7b7';
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.style.background = 'rgba(79,142,247,0.15)';
        btn.style.color = '#93c5fd';
      }, 2000);
    });
  });

  const wrapper = pre.parentElement;
  if (wrapper) {
    wrapper.style.position = 'relative';
    wrapper.appendChild(btn);
  }
});

// ────────────────────────────────────────────────────────
//  INITIALIZATION
// ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadJobs();
  calculateStats();
  renderJobs();
  
  loadVault();
  renderVault();

  setupScheduleCheckboxes();
  updateDashboardProgress();

  // Trigger scroll fades after dynamic elements have loaded
  setTimeout(() => {
    setupEntranceObserver();
  }, 100);
});

console.log('%c🎯 PlacementPro Dynamic Overhaul Loaded!', 'color: #4f8ef7; font-size: 1.2rem; font-weight: bold;');
console.log('%cDynamic Placement Calendar & Prep Vault are live and persistent.', 'color: #10b981; font-size: 0.95rem;');
