// --- Canonical Data Registry ---

const personasData = {
    aarav: {
        tag: "STUDENT (EARLY LEARNER)",
        name: "Aarav Patel",
        demo: "21 years old · Final Year Computer Science Student · Mumbai, India",
        goals: [
            "Secure a first internship or junior infrastructure engineer role.",
            "Bridge the gap between university theory and real-world infrastructure operations."
        ],
        painPoints: [
            "No commercial experience to put on a resume.",
            "Traditional certifications are expensive and don't prove practical ability."
        ],
        empathy: "I'm falling behind my peers who have internships. Will I pass an interview?",
        steps: [
            { title: "Registration & Onboarding", desc: "Joins portal and receives introductory guides." },
            { title: "Learning Path Progress", desc: "Completes Cloud Fundamentals syllabus modules." },
            { title: "Verification Submission", desc: "Submits a practice lab for peer-to-mentor review." },
            { title: "Hiring & Placement", desc: "Shortlisted blindly by Community HR and hired." }
        ]
    },
    zara: {
        tag: "FRESHER (EARLY CAREER)",
        name: "Zara Chen",
        demo: "23 years old · Junior DevOps Engineer · Singapore",
        goals: [
            "Excel in current junior role and avoid making critical deployment mistakes.",
            "Build a professional reputation to secure a mid-level promotion."
        ],
        painPoints: [
            "Overwhelmed by production infrastructure complexity.",
            "Lack of structured guidance within her company."
        ],
        empathy: "I have imposter syndrome. I want to lead projects but don't know if I'm ready.",
        steps: [
            { title: "Active Participation", desc: "Attends local chapter events and starts helping students." },
            { title: "Syllabus Mastery", desc: "Earns 'Practitioner' level badges for advanced SRE labs." },
            { title: "Community Sourcing", desc: "Opt-in to the candidate pool for mid-level roles." },
            { title: "Hiring Selection", desc: "Hired by a partner enterprise as a DevOps Specialist." }
        ]
    },
    marcus: {
        tag: "DOMAIN SPECIALIST",
        name: "Marcus Vance",
        demo: "30 years old · Senior Site Reliability Engineer · Chicago, USA",
        goals: [
            "Keep skills sharp in a fast-moving ecosystem.",
            "Give back to the community and establish a personal brand as an industry speaker."
        ],
        painPoints: [
            "Standard recruiter messages are irrelevant and annoying.",
            "No structured platform to mentor others without heavy administrative overhead."
        ],
        empathy: "I want to help the next generation. I'm tired of standard recruiter spam.",
        steps: [
            { title: "Contributor Track", desc: "Submits custom practice challenges to the community library." },
            { title: "Mentor Onboarding", desc: "Passes Mentor Council review to verify grading skills." },
            { title: "Active Mentoring", desc: "Guides 3 mentees through SRE and Cloud paths." },
            { title: "Expert Reputation", desc: "Invited to speak at the annual Ecosystem Summit." }
        ]
    },
    elena: {
        tag: "ECOSYSTEM GUIDE",
        name: "Elena Rostova",
        demo: "38 years old · Principal Infrastructure Architect · Munich, Germany",
        goals: [
            "Drive domain-wide practices and standards.",
            "Identify top-tier talent for her organization and partners."
        ],
        painPoints: [
            "High burden of evaluation; candidate resumes are filled with fluff.",
            "Hard to scale her mentorship impact."
        ],
        empathy: "We need to raise the bar for what 'expert' means. How can I mentor without burnout?",
        steps: [
            { title: "Council Coordination", desc: "Elected to the Mentor Council to oversee syllabus standards." },
            { title: "Syllabus Development", desc: "Creates the curriculum and rubrics for Kubernetes Administration." },
            { title: "Dispute Arbitration", desc: "Audits appealed grading results to ensure fair verifications." },
            { title: "Governance Leader", desc: "Votes on constitutional policy changes and chapter approvals." }
        ]
    }
};

const blueprintsData = {
    verification: [
        {
            num: "Step 1",
            title: "Member Submits Lab",
            frontstage: "Member finishes practice tasks in the sandboxed lab and submits configuration logs.",
            backstage: "System locks resources, exports logs, and pre-screens code matches.",
            sla: "Real-time verification",
            rules: "BR-LR-001 (Lab hours quota limit check)"
        },
        {
            num: "Step 2",
            title: "Peer Pre-screening",
            frontstage: "Two anonymous peer reviewers verify that basic criteria and logic are met.",
            backstage: "Double-blind peer assignment logs results automatically.",
            sla: "48 hours limit",
            rules: "BR-VR-001 (Peer pre-screening criteria checklist)"
        },
        {
            num: "Step 3",
            title: "Mentor Evaluation",
            frontstage: "Certified Mentor checks configuration files against the master grading rubric.",
            backstage: "System provides isolated mentor panel view to ensure objective evaluation.",
            sla: "5 business days",
            rules: "BR-VR-002 (Mentor grading assignment limits)"
        },
        {
            num: "Step 4",
            title: "Portfolio Badge Awarded",
            frontstage: "Member receives verification notification, and the badge is displayed on their profile.",
            backstage: "Reputation point ledger updates and member trust score increases.",
            sla: "Real-time updates",
            rules: "BR-BD-001 (Badge validity & reputation calculation)"
        }
    ],
    placement: [
        {
            num: "Step 1",
            title: "Partner Submits Request",
            frontstage: "Employer partner submits hiring requisition detailing required badges and salary ranges.",
            backstage: "Sourcing portal matches request tags with verified candidate portfolios.",
            sla: "2 hours sync",
            rules: "BR-HR-001 (Non-Influence hiring request verification)"
        },
        {
            num: "Step 2",
            title: "Blind Candidate Sourcing",
            frontstage: "Community HR accesses dashboard and views matching candidates anonymized.",
            backstage: "Recruiter search engine hides names, pictures, and demographic parameters.",
            sla: "24 hours search",
            rules: "BR-HR-002 (Anonymization compliance & search parameters)"
        },
        {
            num: "Step 3",
            title: "Candidate Opt-In Match",
            frontstage: "Candidate receives notification of interest and chooses to share profile contact details.",
            backstage: "Recruiter gets unlocked candidate contact card on member confirmation.",
            sla: "48 hours response window",
            rules: "BR-CR-001 (Member privacy opt-in consent)"
        },
        {
            num: "Step 4",
            title: "Interview & Selection",
            frontstage: "Candidate completes interviews with company and receives job offer.",
            backstage: "Community HR records placement and coordinates onboarding support.",
            sla: "15 business days",
            rules: "BR-ER-001 (Placement recording & referral tracking)"
        }
    ]
};

const capabilitiesData = {
    "cap-ops": {
        title: "Community Operations & Chapters",
        maturity: "3.5",
        maturityDesc: "Defined - Operations are standardized and executed consistently across local chapters.",
        percent: "70%",
        l2: [
            { name: "Chapter Lifecycle Administration", desc: "Manages chapter charters, operational audits, and mergers. (Supports F-GOV-001)" },
            { name: "Volunteer Point Ledger", desc: "Tracks volunteer tasks, points, and references. (Supports F-COM-002)" },
            { name: "Moderation Incident Board", desc: "Standardizes incident logs, warnings, and timeouts. (Supports F-GOV-002)" }
        ]
    },
    "cap-learn": {
        title: "Learning & Verification Systems",
        maturity: "4.0",
        maturityDesc: "Managed - Quality metrics are measured dynamically, ensuring strict peer-mentor auditing.",
        percent: "80%",
        l2: [
            { name: "Syllabus Track Registry", desc: "Maintains structured domain paths and prerequisite checks. (Supports F-LRN-001)" },
            { name: "Practice Sandbox Allocation", desc: "Governs student practice slot quotas and resources. (Supports F-LRN-002)" },
            { name: "Peer-to-Mentor Audit Pipeline", desc: "Manages submission pre-screening and mentor assignment. (Supports F-VER-001)" }
        ]
    },
    "cap-hiring": {
        title: "Enterprise Talent Sourcing Engine",
        maturity: "3.0",
        maturityDesc: "Defined - B2B subscriptions and blind sourcing dashboards follow consistent rules.",
        percent: "60%",
        l2: [
            { name: "Blind Talent Search Console", desc: "Anonymizes candidate demographic details. (Supports F-HR-001)" },
            { name: "Placement Tracking & Audits", desc: "Monitors referral commissions and retention cycles." },
            { name: "Sponsor Scholarship Management", desc: "Distributes sponsored sandbox learning credits." }
        ]
    }
};

// --- Interactive Controller Logic ---

document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initPersonas();
    initBlueprint();
    initCapabilities();
});

// 1. Tab Bar Navigation
function initTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });
}

// 2. Interactive Persona Dashboard
function initPersonas() {
    const cards = document.querySelectorAll(".avatar-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            const id = card.getAttribute("data-persona");
            renderPersona(id);
        });
    });

    // Load initial
    renderPersona("aarav");
}

function renderPersona(id) {
    const data = personasData[id];
    document.getElementById("persona-tag").textContent = data.tag;
    document.getElementById("persona-name").textContent = data.name;
    document.getElementById("persona-demo").textContent = data.demo;
    document.getElementById("persona-empathy").textContent = `"${data.empathy}"`;

    // Goals list
    const goalsContainer = document.getElementById("persona-goals");
    goalsContainer.innerHTML = "";
    data.goals.forEach(goal => {
        const li = document.createElement("li");
        li.textContent = goal;
        goalsContainer.appendChild(li);
    });

    // Pain points list
    const painContainer = document.getElementById("persona-pain");
    painContainer.innerHTML = "";
    data.painPoints.forEach(pain => {
        const li = document.createElement("li");
        li.textContent = pain;
        painContainer.appendChild(li);
    });

    // Timeline steps
    const stepsContainer = document.getElementById("persona-steps");
    stepsContainer.innerHTML = "";
    data.steps.forEach((step, index) => {
        const stepDiv = document.createElement("div");
        stepDiv.className = `journey-step ${index === 0 ? "active" : ""}`;
        stepDiv.innerHTML = `
            <div class="step-circle">${index + 1}</div>
            <div class="step-text">
                <h5>${step.title}</h5>
                <span>${step.desc}</span>
            </div>
        `;
        stepDiv.addEventListener("click", () => {
            document.querySelectorAll(".journey-step").forEach(s => s.classList.remove("active"));
            stepDiv.classList.add("active");
        });
        stepsContainer.appendChild(stepDiv);
    });
}

// 3. Service Blueprint Simulator
function initBlueprint() {
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    let activeFlow = "verification";

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            toggleBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            activeFlow = btn.getAttribute("data-flow");
            renderBlueprintFlow(activeFlow);
        });
    });

    // Initial render
    renderBlueprintFlow("verification");
}

function renderBlueprintFlow(flowKey) {
    const steps = blueprintsData[flowKey];
    const timelineContainer = document.getElementById("flow-steps-container");
    timelineContainer.innerHTML = "";

    steps.forEach((step, index) => {
        const node = document.createElement("div");
        node.className = `timeline-node ${index === 0 ? "active" : ""}`;
        node.innerHTML = `
            <div class="node-num">${index + 1}</div>
            <div class="node-title">${step.title}</div>
        `;
        node.addEventListener("click", () => {
            document.querySelectorAll(".timeline-node").forEach(n => n.classList.remove("active"));
            node.classList.add("active");
            renderBlueprintStepDetails(step);
        });
        timelineContainer.appendChild(node);
    });

    // Render initial step details
    renderBlueprintStepDetails(steps[0]);
}

function renderBlueprintStepDetails(step) {
    document.getElementById("detail-step-num").textContent = step.num;
    document.getElementById("detail-step-title").textContent = step.title;
    document.getElementById("detail-frontstage").textContent = step.frontstage;
    document.getElementById("detail-backstage").textContent = step.backstage;
    document.getElementById("detail-sla").textContent = step.sla;
    document.getElementById("detail-rules").textContent = step.rules;
}

// 4. Capability Explorer
function initCapabilities() {
    const cards = document.querySelectorAll(".capability-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            const capId = card.getAttribute("data-cap");
            renderCapabilityDetails(capId);
        });
    });

    // Initial load
    renderCapabilityDetails("cap-ops");
}

function renderCapabilityDetails(capId) {
    const data = capabilitiesData[capId];
    const container = document.getElementById("cap-detail-container");
    
    let l2Html = "";
    data.l2.forEach(item => {
        l2Html += `
            <div class="l2-item">
                <strong>${item.name}</strong>
                <span>${item.desc}</span>
            </div>
        `;
    });

    container.innerHTML = `
        <h3>${data.title}</h3>
        <div class="info-block">
            <h4>Maturity Index</h4>
            <div class="maturity-bar-wrapper">
                <span class="maturity-label">${data.maturity}</span>
                <div class="bar-outer">
                    <div class="bar-inner" style="width: ${data.percent}"></div>
                </div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">${data.maturityDesc}</p>
        </div>
        
        <h4>Level 2 Business Capabilities</h4>
        <div class="l2-list">
            ${l2Html}
        </div>
    `;
}
