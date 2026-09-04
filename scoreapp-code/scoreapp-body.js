(function () {
  var existing = document.querySelector(".tag-pa-report");
  if (existing) existing.remove();

  var LOGO_COLOR = "data:image/png;base64,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";
  var LOGO_WHITE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAA8CAYAAADYDABOAAADo0lEQVR4nO2dS1LsMAxFm1QWQd4M9r8mhngZvMqgq6ArTmzp6uP4nhnQsWXnWi3LH97et4+fByGTsUQbQEgEFD6ZktW7wvL99efn7d+ntwmEPN48Y/xX0beK//dzHChkGOHXBP+bmqCPnqX4SfoYv0X0tedqz0rLJMQlxteI3rtufovMhVmoIxVez3OvYkUMGA6AOVhG9fQWon+Ww1Dq/rinMzOGRbVyLb2/x+Aa9durXPQNol0moU7rS90bIBWA5tneetB4fqNI7S8BKWRJv0ht6xL+07CevDtauF6CP6oXhbf9vbYX4XpLVH9I7GoSvqQjLF5ulOifdSPIPmjLiX1o4SP7ote2RWNcbydpOi5S9DszTHjLRRuRfYDuz97yTCe3CA8hSXO22tFbpvWEdxZKAieyZjZQO/k9IzJkiu7XI1ptusvgT7stOavoR1skyybSkmTQrxkNzCp6b0F65LM9Qz7tNhLkxHvJ5E008fz+bOZ8M9G/y7Pfp1+5rXlzSy9P8JROr9+zqIn4jEj4mv3zLRw9S9HHUBJ9e3k6sBR7dTyXqlHcJbuRpQ+8neE64vL9UVg0uwhH9/YWmbczTYSmM5F7dZAxJIkdPB4DckHsXffaw341Aab42ynG87geIpyRSPg1oVsNAMS2hVqZ0r/PwgZYb8hI6Ams1tSVVcce5YU91wOiKIm8fdTAMYvxUUv7XiHUDIK3pARuMR5yr07N6+5wG3IOb78FOATrOlPk8V8bysWscc8/b4qjjj0DTusUTT2+xLhRRD9iWJR9Eloc7VsyvVTNCi4ytZpdIJkpyvO6LX2PmJynOIFlcdOC19bZURipXaWy8opsQ3iMb3m9iNV+mhHDnAxsnVk6y7B3iXy52e7UGckrZm5XcbypId3k9mpGro3no8jy4oju/axWlz4dob0p4a4eOQMb6NKp1rost7aExfjoRiFvXTvrnKt67urtt6AFqtQXSkW+7OeqLnr7skTc2UQfbc8GujMJefeSyd2Z3mGG9gwu4oaCDKesaueTEeXsaNqHLNP7FJ7o0lhrPOL5aEFH0XI6KbrMlNeEewgSGdqcfZ7My5olpai9tYEZH9KDOKuDGgBaz0vPTSSo05nSARA1m0fVTcYGlsf3FBP6MisyH+EnsI64WmSSlknRkzS7M1tDKHp5MsQ/eB55sYfcn1sJn5ChY3xCrKHwyZRQ+GRKKHwyJRQ+mRIKn0wJhU+mhMInU0Lhk8eM/AdXBFgonAVn0AAAAABJRU5ErkJggg==";

  var BADGE_COLORS = ["#0bb996", "#8ac43f", "#f0a83a", "#e9502a", "#9aa39a", "#12131c"];

  var domains = [
    {
      order: "01",
      name: "APS Design",
      short: "APS",
      accent: "Design",
      intro: "The shared brain that guides how people think and make decisions.",
      score: "2.3",
      condition: "Reactive",
      color: "#e9502a",
      textColor: "#fff",
      flag: true,
      purposeTitle: "The purpose of APS Design",
      purpose: "APS Design creates the decision architecture for the business, function, team, or value stream you influence. It connects the principles, frameworks, standards, procedures, and tools that enable people to receive the exact information they need when they need it.",
      practiceTitle: "The Shared Brain",
      practices: ["Governing Principles", "Philosophies", "Frameworks", "Standards", "SOPs", "Tools"],
      current: "At this condition, the shared brain is incomplete or absent. Decisions depend on individual memory, informal questions, personal experience, and rescue. The logic that should guide work has not yet been made visible enough for people to operate from it consistently.",
      costTitle: "When the shared brain is missing, work depends on people remembering what the system has not defined.",
      costHighlight: "not",
      costIntro: "A Reactive APS condition does not mean people are incapable. It means the structure that should support their judgment, decisions, and execution has not been deliberately created.",
      costs: [
        ["Questions multiply", "Internal and external clients ask the same questions because the information they need is not available at the point of need."],
        ["Decisions vary", "What is right changes by person, pressure, or moment because shared decision logic is missing."],
        ["Capacity is consumed", "Experienced people become the answer engine. Their time is spent rescuing work rather than improving the system."],
        ["Tools amplify disorder", "Technology can move work faster, but without governing logic it accelerates ambiguity, rework, and inconsistent outcomes."]
      ],
      consequence: "Performance becomes dependent on effort, availability, and memory - not a shared architecture that can be used, improved, and trusted.",
      consequenceHighlight: "effort, availability, and memory",
      beginTitle: "Build the first shared decision architecture.",
      beginHighlight: "decision architecture",
      beginIntro: "Do not attempt to document the entire business. Begin with one recurring, high-value question or service failure where people lack the information or decision logic needed to perform.",
      steps: [
        ["Choose one material question", "Start where a question repeatedly interrupts work. A recurring question is evidence that the answer has not been made available when it is needed."],
        ["Observe the current reality", "Engage the people doing the work. Make the information, handoffs, delays, and decisions visible before deciding what must be designed."],
        ["Define the logic before the tool", "Establish the governing principle, shared framework, and standard before creating an SOP, automation, template, or software solution."],
        ["Place and verify the answer", "Make the information available at the point of need, then verify that people can use the new decision architecture as designed."]
      ],
      objective: "Turn one recurring question into a governed answer that others can use without waiting for a particular person.",
      objectiveHighlight: "governed answer",
      next: "Create the shared brain."
    },
    {
      order: "02",
      name: "AI and Automation",
      short: "AI and",
      accent: "Automation",
      intro: "The conditions required to use AI and automation to empower talent.",
      score: "2.8",
      condition: "Managed",
      color: "#0bb996",
      textColor: "#fff",
      flag: false,
      purposeTitle: "The purpose of AI and Automation",
      purpose: "AI and automation should remove friction, reduce unnecessary cognitive load, and strengthen human judgment. They are not a technology project. They are a whole-system leadership responsibility.",
      practiceTitle: "Adoption Conditions",
      practices: ["Capability Ecosystem", "Consequential Mandate", "Measurable Value Case", "Human-Led Amplification", "Disciplined Adoption"],
      current: "At this condition, AI and automation activity exists, but it is not yet governed as an integrated performance initiative. Tools may be selected and used, yet the mandate, value case, connected information architecture, and verified capability required to create sustained value remain incomplete.",
      costTitle: "When adoption is managed but not architected, tools are active but value remains uncertain.",
      costHighlight: "value remains uncertain.",
      costIntro: "This condition is not a failure of effort. It signals that technology use has begun before the full adoption environment has been deliberately designed.",
      costs: [
        ["Tools proliferate", "Platforms are selected for local needs, creating more applications without a connected role inside the information and decision architecture."],
        ["Value cannot be proven", "Usage may be visible, but the business has not established the baseline, benefit, investment, and measure required to show whether performance improved."],
        ["People remain unsupported", "Training is offered, yet human judgment, adoption expectations, and verified capability are not designed into daily work."],
        ["Workflows stay unchanged", "Technology is layered onto existing work rather than used to redesign the value stream, remove waste, and create capacity."]
      ],
      consequence: "The business may appear to be moving, but it cannot scale adoption with confidence or demonstrate the value created.",
      consequenceHighlight: "demonstrate the value created.",
      beginTitle: "Move one initiative from a tool trial to a governed value-stream redesign.",
      beginHighlight: "value-stream redesign",
      beginIntro: "Do not begin by comparing another platform. Begin with one important performance opportunity where technology could help people decide, serve, or execute more effectively.",
      steps: [
        ["Choose one value-stream opportunity", "Select a recurring constraint with a visible baseline, a meaningful operational or financial consequence, and clear potential to improve flow."],
        ["Assemble the capability ecosystem", "Bring together the people doing the work, operational and APS expertise, technical capability, adoption support, and external specialists where required."],
        ["Secure the mandate and value case", "Clarify the authority, executive support, capacity, expected benefit, full investment, and measures that will determine whether value is created."],
        ["Design human-led use", "Define where AI assists, where people decide and validate, and how capability will be demonstrated before reliance is placed on the new system."]
      ],
      objective: "Turn one AI opportunity into a measurable performance decision - not another disconnected tool.",
      objectiveHighlight: "measurable performance decision",
      next: "Establish a governed value case."
    },
    {
      order: "03",
      name: "Make the Invisible, Visible",
      short: "Make the",
      accent: "Invisible, Visible",
      intro: "The practice of revealing the conditions shaping performance before attempting to improve them.",
      score: "3.4",
      condition: "Deliberate",
      color: "#8ac43f",
      textColor: "#14151d",
      flag: false,
      purposeTitle: "The purpose of visibility",
      purpose: "Visibility turns assumption into evidence. It allows leaders to see how work, information, ownership, and decisions actually move while there is still time to prevent service failure.",
      practiceTitle: "Visibility Practices",
      practices: ["Engage the Work", "Map the Flow", "Ask Revealing Questions", "Surface Timely Data", "Clarify Decisions"],
      current: "At this condition, the leader deliberately creates visibility in important situations. Yet the practice is not fully integrated into every critical value stream. Some data, ownership, and decision rights still become visible after the service failure, delay, or escalation has already occurred.",
      costTitle: "When visibility is deliberate but not integrated, leaders can see important conditions - but not consistently early enough.",
      costHighlight: "early enough.",
      costIntro: "The organization has the ability to diagnose. The remaining gap is converting visibility from an occasional leadership practice into a normal condition of how work flows.",
      costs: [
        ["Data arrives after the fact", "Measures explain what went wrong, but do not give people enough time to intervene before the client, customer, or team experiences the failure."],
        ["Maps remain project artifacts", "Value-stream maps are created for improvement work, then cease to guide daily decisions, handoffs, and future redesign."],
        ["Ownership blurs under pressure", "People may understand their roles in normal conditions, but decision rights and escalation paths become unclear when work becomes urgent."],
        ["Questions repeat", "Questions expose missing information, but the answer is resolved locally instead of being embedded into the system for the next person."]
      ],
      consequence: "The system can often diagnose what failed, but it cannot always prevent the same failure from recurring.",
      consequenceHighlight: "prevent the same failure from recurring.",
      beginTitle: "Convert one recurring failure into an early signal.",
      beginHighlight: "early signal",
      beginIntro: "Choose a service failure, delay, or recurring escalation that matters to the value stream. The objective is not to collect more data. It is to make the right evidence available early enough to change the outcome.",
      steps: [
        ["Engage the people doing the work", "Validate the data and assumptions with the people closest to the work. They can identify the friction that reports and dashboards cannot show."],
        ["Map the end-to-end flow", "Make the people, information, decisions, and handoffs visible from the original need to the final outcome."],
        ["Identify the earliest usable signal", "Define what must become visible before the failure occurs and who needs to see it in time to make a different decision."],
        ["Clarify ownership and decision rights", "Make it clear who owns the outcome, who can act, and when the work must be escalated before service is affected."]
      ],
      objective: "Make one critical risk visible while there is still time to prevent failure.",
      objectiveHighlight: "while there is still time to prevent failure.",
      next: "Create early signals."
    },
    {
      order: "04",
      name: "System-First Thinking",
      short: "System-First",
      accent: "Thinking",
      intro: "The ability to see performance as the outcome of system design.",
      score: "4.2",
      condition: "Integrated",
      color: "#f0a83a",
      textColor: "#14151d",
      flag: false,
      purposeTitle: "The purpose of systems-first thinking",
      purpose: "Systems-first thinking moves leaders beyond effort, personality, urgency, and isolated events. It reveals the conditions producing performance so those conditions can be redesigned deliberately.",
      practiceTitle: "Systems-First Practice",
      practices: ["See Outcomes as Designed", "Challenge Paradigms", "Step Back", "Think End-to-End", "Diagnose Before Judging"],
      current: "At this condition, systems thinking is connected to how the leader interprets work, decisions, and performance. The next opportunity is to make the lens durable beyond individual leadership intent, so it remains active when pressure rises, people change, or familiar paradigms return.",
      costTitle: "When systems thinking is integrated but not architected, urgency can still displace the system lens.",
      costHighlight: "system lens.",
      costIntro: "Integrated practice is strong. The remaining risk is that it may still depend on specific leaders repeatedly stepping back, rather than being embedded in the way the wider system thinks and decides.",
      costs: [
        ["Local pressure wins", "Under pressure, people optimize the local task or department instead of considering the full value stream and downstream effect."],
        ["Old paradigms return", "Long-standing assumptions reappear because they have not been named, challenged, and replaced with a more durable shared framework."],
        ["The lens is not transferred", "New leaders and team members learn systems thinking through experience rather than through clear principles, standards, and coaching."],
        ["People are blamed too soon", "Strong intentions can still default to personal explanation when the system conditions are not routinely inspected before conclusions are formed."]
      ],
      consequence: "Integration protects performance today. Architecture ensures the system lens survives change, pressure, and growth.",
      consequenceHighlight: "survives change, pressure, and growth.",
      beginTitle: "Make systems-first thinking independent of one leader.",
      beginHighlight: "independent of one leader",
      beginIntro: "The goal is not more reflection. It is to make the system lens a repeatable part of decisions, reviews, problem-solving, and leadership development across the work you influence.",
      steps: [
        ["Codify the decision lens", "Document the principles and diagnostic questions that help people examine direction, structure, and behavior before acting on a performance problem."],
        ["Require end-to-end review", "Make value-stream impact a normal part of material decisions, improvements, and change initiatives - not an optional leadership preference."],
        ["Challenge one embedded paradigm", "Select a belief that limits performance, inspect the evidence behind it, and replace it with a more useful system-level principle."],
        ["Teach the lens through real work", "Use active service failures and decisions to develop other leaders' ability to inspect systems before they judge people, tools, or effort."]
      ],
      objective: "Make one systems-first diagnostic a required part of how decisions are made.",
      objectiveHighlight: "required part of how decisions are made.",
      next: "Make the lens durable."
    },
    {
      order: "05",
      name: "Talent Success",
      short: "Talent",
      accent: "Success",
      intro: "The conditions that allow individuals to see a credible path to grow, contribute, and build a stronger future.",
      score: "4.8",
      condition: "Architected",
      color: "#1f9a8d",
      textColor: "#fff",
      flag: false,
      purposeTitle: "The purpose of Talent Success",
      purpose: "Talent Success is the deliberate design of visible career paths, contribution, opportunity, self-direction, and support. The individual owns career success; the leader owns the system that makes the path possible.",
      practiceTitle: "Talent-Success Conditions",
      practices: ["Career Success as Design", "Career Discussions", "Contribution to Opportunity", "Self-Directed Teams", "MEACT Support"],
      current: "At this condition, career success is a visible operating requirement rather than a promise. People can see the connection between capability, contribution, opportunity, and the support required to succeed. The work now is to protect, extend, and continually improve the conditions that make this possible.",
      costTitle: "An architected talent system is powerful only while it remains visible, credible, and lived.",
      costHighlight: "visible, credible, and lived.",
      costIntro: "This is a strength. Its risk is not absence; it is allowing a well-designed system to become assumed, unevenly applied, or disconnected from the evolving reality of the people and work it serves.",
      costs: [
        ["Career paths become informal", "People rely on individual manager relationships or assumptions when the visible path, criteria, and opportunity logic are no longer refreshed."],
        ["Contribution loses connection", "Capability and personal responsibility may remain high, but people cannot clearly see how their contribution leads to the next opportunity."],
        ["New people inherit inconsistency", "New internal clients may experience a weaker system if development standards and career discussions are not consistently transferred."],
        ["Support becomes generic", "Mentoring, education, advising, coaching, and training can become activity rather than the precise support required by the person and their next capability step."]
      ],
      consequence: "What has been designed as a talent advantage can slowly become an unexamined assumption unless it is governed and renewed.",
      consequenceHighlight: "governed and renewed.",
      beginTitle: "Make the talent system self-renewing.",
      beginHighlight: "self-renewing",
      beginIntro: "The next move is not to add another development program. It is to ensure the existing conditions remain visible, trusted, and capable of developing the next generation of self-directed contributors.",
      steps: [
        ["Maintain the career dialogue", "Protect the rhythm of individual career discussions so aspirations, capability requirements, opportunities, and support remain current."],
        ["Refresh contribution-to-opportunity logic", "Keep the connection between stronger capability, personal responsibility, meaningful contribution, and future opportunity explicit."],
        ["Develop the team of one", "Verify that individuals can operate inside the system, make commitments visible, practice daily fundamentals, and self-direct before team autonomy is expanded."],
        ["Apply precise MEACT support", "Use mentoring, education, advising, coaching, and training according to the specific capability the individual needs - not as a generic intervention."]
      ],
      objective: "Ensure the next internal client can see a credible path from contribution to opportunity.",
      objectiveHighlight: "credible path from contribution to opportunity.",
      next: "Keep the system self-renewing."
    }
  ];

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
    });
  }

  function highlight(text, phrase, cls) {
    var safe = esc(text);
    if (!phrase) return safe;
    var idx = text.indexOf(phrase);
    if (idx === -1) return safe;
    var before = esc(text.slice(0, idx));
    var mid = esc(phrase);
    var after = esc(text.slice(idx + phrase.length));
    return before + '<span class="' + cls + '">' + mid + '</span>' + after;
  }

  function logo(white) {
    return '<div class="tag-pa-logo"><img src="' + (white ? LOGO_WHITE : LOGO_COLOR) + '" alt="TAG" /></div>';
  }

  function header(dark, extra) {
    return '<div class="tag-pa-header">' + logo(dark) + '<span>' + (extra || '<span class="tag-pa-brand">TAG</span> Performance Architect Assessment Report') + '</span></div>';
  }

  function footer(page) {
    return '<div class="tag-pa-footer"><span>Design systems. Align talent. Performance follows.</span><b>' + page + '</b></div>';
  }

  function page(classes, body, pageNumber) {
    return '<section class="tag-pa-page ' + (classes || "") + '">' + body + footer(String(pageNumber).padStart(2, "0")) + '</section>';
  }

  function scoreline(domain, dark) {
    return '<div class="tag-pa-scoreline"><p class="tag-pa-kicker" style="margin:0">' + (dark ? "" : "") + '</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>';
  }

  function list(items) {
    return '<div class="tag-pa-list">' + items.map(function (item, index) {
      return '<article class="tag-pa-list-item"><span class="tag-pa-num">' + String(index + 1).padStart(2, "0") + '</span><h4>' + esc(item[0]) + '</h4><p>' + esc(item[1]) + '</p></article>';
    }).join("") + '</div>';
  }

  function steps(items) {
    return '<div class="tag-pa-steps">' + items.map(function (item, index) {
      return '<article class="tag-pa-step"><span class="tag-pa-num">' + String(index + 1).padStart(2, "0") + '</span><h4>' + esc(item[0]) + '</h4><p>' + esc(item[1]) + '</p></article>';
    }).join("") + '</div>';
  }

  function badgeList(title, items) {
    return '<div class="tag-pa-practices"><p class="tag-pa-panel-title">' + esc(title) + '</p><div class="tag-pa-badge-list">' + items.map(function (item, index) {
      return '<div class="tag-pa-badge-row"><span class="tag-pa-badge-num" style="background:' + BADGE_COLORS[index % BADGE_COLORS.length] + '">' + String(index + 1).padStart(2, "0") + '</span><span>' + esc(item) + '</span></div>';
    }).join("") + '</div></div>';
  }

  function currentBand(domain) {
    return '<div class="tag-pa-current"><div><h3>Your current condition</h3><strong>' + esc(domain.condition) + '</strong></div><p>' + esc(domain.current) + '</p></div>';
  }

  function domainPage(domain, pageNumber) {
    return page("", header(false) +
      '<div class="tag-pa-kicker-row"><p class="tag-pa-kicker">Priority Domain ' + domain.order + '</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>' +
      '<div class="tag-pa-two"><div><h1 class="tag-pa-title">' + esc(domain.short) + '<br><span class="tag-pa-em">' + esc(domain.accent) + '</span></h1><p class="tag-pa-copy">' + esc(domain.intro) + '</p><div class="tag-pa-purpose"><h3>' + esc(domain.purposeTitle) + '</h3><p class="tag-pa-copy" style="margin-bottom:0">' + esc(domain.purpose) + '</p></div></div>' +
      '<aside><div class="tag-pa-score-card"><p class="tag-pa-score-label">Your score</p><p class="tag-pa-score">' + domain.score + '</p><p class="tag-pa-condition">' + esc(domain.condition) + '</p></div>' + badgeList(domain.practiceTitle, domain.practices) + '</aside></div>' +
      currentBand(domain), pageNumber);
  }

  function consequencePage(domain, pageNumber, positive) {
    return page("dark", header(true, '<span class="tag-pa-brand">' + esc(domain.name.toUpperCase()) + '</span> · ' + (positive ? "WHAT THIS PROTECTS" : "CONSEQUENCES")) +
      '<div class="tag-pa-scoreline"><p class="tag-pa-kicker">' + (positive ? "What must remain true" : "What this condition costs") + '</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>' +
      '<h1 class="tag-pa-display">' + highlight(domain.costTitle, domain.costHighlight, "tag-pa-orange") + '</h1>' +
      '<p class="tag-pa-copy">' + esc(domain.costIntro) + '</p>' + list(domain.costs) +
      '<div class="tag-pa-callout"><h3>The consequence</h3><p>' + highlight(domain.consequence, domain.consequenceHighlight, "tag-pa-soft") + '</p></div>', pageNumber);
  }

  function beginPage(domain, pageNumber) {
    return page("mint", header(false, '<span class="tag-pa-brand">' + esc(domain.name.toUpperCase()) + '</span> · BEGIN HERE') +
      '<div class="tag-pa-scoreline"><p class="tag-pa-kicker">Where to begin</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>' +
      '<h1 class="tag-pa-display">' + highlight(domain.beginTitle, domain.beginHighlight, "tag-pa-em") + '</h1>' +
      '<p class="tag-pa-copy">' + esc(domain.beginIntro) + '</p>' + steps(domain.steps) +
      '<div class="tag-pa-callout"><h3>Your first objective</h3><p>' + highlight(domain.objective, domain.objectiveHighlight, "tag-pa-soft") + '</p></div>', pageNumber);
  }

  function polar(cx, cy, r, angleDeg) {
    var rad = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function wedgePath(cx, cy, R, r, start, end) {
    var large = end - start > 180 ? 1 : 0;
    var p1 = polar(cx, cy, R, start);
    var p2 = polar(cx, cy, R, end);
    var p3 = polar(cx, cy, r, end);
    var p4 = polar(cx, cy, r, start);
    return "M " + p1.x + " " + p1.y + " A " + R + " " + R + " 0 " + large + " 1 " + p2.x + " " + p2.y +
      " L " + p3.x + " " + p3.y + " A " + r + " " + r + " 0 " + large + " 0 " + p4.x + " " + p4.y + " Z";
  }

  function donutSvg(list) {
    var cx = 380, cy = 320, R = 205, r = 125, gap = 6;
    var labels = [
      { anchor: "middle", dy: -14 },
      { anchor: "start", dy: -6 },
      { anchor: "start", dy: 10 },
      { anchor: "end", dy: 10 },
      { anchor: "end", dy: -6 }
    ];
    var subtitles = ["Priority focus", "Second priority", "Third priority", "Fourth priority", "Strongest current domain"];
    var parts = [];
    list.forEach(function (d, i) {
      var mid = 72 * i;
      var start = mid - (72 - gap) / 2;
      var end = mid + (72 - gap) / 2;
      var path = wedgePath(cx, cy, R, r, start, end);
      parts.push('<path d="' + path + '" fill="' + d.color + '"></path>');
      var scorePt = polar(cx, cy, (R + r) / 2, mid);
      parts.push('<text x="' + scorePt.x + '" y="' + (scorePt.y + 10) + '" text-anchor="middle" fill="' + d.textColor + '" font-family="Libre Baskerville, Georgia, serif" font-weight="700" font-size="32">' + d.score + '</text>');
      var lineFrom = polar(cx, cy, R + 6, mid);
      var lineTo = polar(cx, cy, R + 26, mid);
      parts.push('<line x1="' + lineFrom.x + '" y1="' + lineFrom.y + '" x2="' + lineTo.x + '" y2="' + lineTo.y + '" stroke="#c9c6ba" stroke-width="1"></line>');
      var labelPt = polar(cx, cy, R + 34, mid);
      var lbl = labels[i];
      var nameLines = d.name.indexOf(",") !== -1 ? d.name.split(", ").map(function (part, idx, arr) { return idx < arr.length - 1 ? part + "," : part; }) : [d.name];
      parts.push('<text x="' + labelPt.x + '" y="' + (labelPt.y + lbl.dy) + '" text-anchor="' + lbl.anchor + '" fill="#14151d" font-family="DM Sans, Arial, sans-serif" font-weight="700" font-size="14">' + nameLines.map(function (line, li) {
        return '<tspan x="' + labelPt.x + '" dy="' + (li === 0 ? 0 : 16) + '">' + esc(line) + '</tspan>';
      }).join("") + '</text>');
      var subDy = lbl.dy + 16 + (nameLines.length - 1) * 16;
      parts.push('<text x="' + labelPt.x + '" y="' + (labelPt.y + subDy) + '" text-anchor="' + lbl.anchor + '" fill="#6f746f" font-family="DM Sans, Arial, sans-serif" font-size="11">' + esc(subtitles[i]) + '</text>');
    });
    parts.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 8) + '" fill="#f6f4ed"></circle>');
    parts.push('<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" fill="#6f746f" font-family="DM Sans, Arial, sans-serif" font-weight="800" font-size="13" letter-spacing="1">CURRENT CONDITION</text>');
    return '<div class="tag-pa-donut-wrap"><svg viewBox="0 0 760 640" xmlns="http://www.w3.org/2000/svg">' + parts.join("") + '</svg></div>';
  }

  function resultsPage() {
    return page("", header(false) +
      '<p class="tag-pa-kicker">Your results</p><h1 class="tag-pa-title">Your Current Performance Architecture Condition</h1>' +
      '<p class="tag-pa-copy">Your five domains are ordered from the limiting condition requiring your attention first to the strongest area of your current practice. The number inside each segment shows where you currently stand.</p>' +
      '<div class="tag-pa-results-grid">' + donutSvg(domains) + '</div>' +
      '<div class="tag-pa-priority-list">' + domains.map(function (d) {
        return '<article class="tag-pa-road-row' + (d.flag ? " flag" : "") + '"><span class="tag-pa-road-num">' + d.order + '</span><div><h4>' + esc(d.name) + '</h4><p class="tag-pa-road-next">' + esc(d.intro) + '</p></div><div class="tag-pa-road-score-wrap"><span class="tag-pa-road-score">' + d.score + '</span><span class="tag-pa-road-bar"></span></div><p class="tag-pa-road-condition">' + esc(d.condition.toUpperCase()) + '</p></article>';
      }).join("") + '</div>', 2);
  }

  function roadmapPage() {
    return page("", header(false) +
      '<p class="tag-pa-kicker">Your integrated roadmap</p><h1 class="tag-pa-title">Your Performance Architecture <span class="tag-pa-em">Roadmap</span></h1>' +
      '<p class="tag-pa-copy">The five conditions in this report are connected. Do not attempt to improve them all at once. Begin where the architecture is most constrained, then strengthen the conditions that allow performance to become deliberate.</p>' +
      '<div class="tag-pa-roadmap" style="border-top:2px solid var(--tag-ink)">' + domains.map(function (d) {
        return '<article class="tag-pa-road-row"><span class="tag-pa-road-num">' + d.order + '</span><h4>' + esc(d.name) + '</h4><span class="tag-pa-road-score">' + d.score + '</span><p class="tag-pa-road-next">' + esc(d.condition + " · " + d.next) + '</p></article>';
      }).join("") + '</div>' +
      '<div class="tag-pa-callout ink"><h3>Begin here</h3><p>' + highlight("Your first design priority is APS Design. A shared company brain gives the other four domains a stronger place to operate from.", "APS Design.", "tag-pa-orange") + '</p></div>', 18);
  }

  function commitmentPage() {
    return page("mint", header(false) +
      '<p class="tag-pa-kicker">Turn insight into action</p><h1 class="tag-pa-title">Your First 90-Day <span class="tag-pa-em">Design Commitment</span></h1>' +
      '<p class="tag-pa-copy">The report becomes valuable only when one limiting condition is turned into structured work. Use this page to establish the first decision and the first review point.</p>' +
      '<div class="tag-pa-fields">' +
      '<div class="tag-pa-field" style="border-top-color:#0bb996"><h4>Priority domain</h4><p>APS Design</p></div>' +
      '<div class="tag-pa-field" style="border-top-color:#8ac43f"><h4>Current condition</h4><p>Reactive · 2.3</p></div>' +
      '<div class="tag-pa-field" style="border-top-color:#f0a83a"><h4>Value stream or work affected</h4><span class="tag-pa-line"></span></div>' +
      '<div class="tag-pa-field" style="border-top-color:#e9502a"><h4>Result to improve</h4><span class="tag-pa-line"></span></div>' +
      '<div class="tag-pa-field" style="border-top-color:#0bb996"><h4>First architectural decision</h4><span class="tag-pa-line"></span></div>' +
      '<div class="tag-pa-field" style="border-top-color:#0bb996"><h4>Review date</h4><span class="tag-pa-line"></span></div>' +
      '</div>' +
      '<div class="tag-pa-callout outline"><h3>Design principle</h3><p>' + highlight("Do not attempt to repair everything at once. Make one material condition visible, then design the system required to improve it.", "Make one material condition visible, then design the system required to improve it.", "tag-pa-soft") + '</p></div>', 19);
  }

  function resourcesPage() {
    var resources = [
      ["System-First Thinking", "Systems-First Field Guide", "Diagnose performance as a system before treating it as an effort problem.", "#0bb996"],
      ["Make the Invisible Visible", "Value-Stream Visibility Map", "Map information, people, handoffs, and decision points.", "#8ac43f"],
      ["APS Design", "Build Your Company Brain Starter Guide", "Use the six-tier APS architecture to begin with one material question.", "#f0a83a"],
      ["Talent Success", "Build a Self-Directed Team Guide", "Develop visible commitments, capability, and the conditions for self-direction.", "#e9502a"],
      ["AI and Automation", "Human-Led AI Adoption Readiness Guide", "Move from tool activity to an architected, measurable adoption environment.", "#0bb996"]
    ];
    return page("", header(false) +
      '<p class="tag-pa-kicker">Continue the work</p><h1 class="tag-pa-title">The Performance Architect <span class="tag-pa-em">Center</span></h1>' +
      '<p class="tag-pa-copy">The assessment has made the conditions visible. The Performance Architect Center gives you practical resources to begin strengthening the domain that matters most to the work you influence.</p>' +
      '<div class="tag-pa-resource-grid">' + resources.map(function (r) { return '<article class="tag-pa-resource" style="border-left-color:' + r[3] + '"><p class="tag-pa-kicker" style="margin-bottom:8px">' + esc(r[0]) + '</p><h4>' + esc(r[1]) + '</h4><p>' + esc(r[2]) + '</p></article>'; }).join("") + '</div>' +
      '<div class="tag-pa-action-band"><p>Choose the resource connected to your priority domain.</p><a href="https://tagaps.com/performance-architect-center">tagaps.com/performance-<br>architect-center</a></div>', 20);
  }

  function closingPage() {
    return page("dark", header(true) +
      '<div style="margin-top:150px"><h1 class="tag-pa-title">Your next design decision begins <span class="tag-pa-em">now.</span></h1>' +
      '<p class="tag-pa-copy">Thank you for completing the TAG Performance Architect Assessment. You have taken the first step: making the conditions shaping the work you influence visible. The next step is to choose one material condition and begin designing a better system around it.</p>' +
      '<div class="tag-pa-contact"><div><h3>Reach out</h3><p><a href="mailto:contact@tagaps.com">contact@tagaps.com</a></p></div><div><h3 class="tag-pa-lime">Explore TAG</h3><p><a href="https://www.tagaps.com">www.tagaps.com</a></p></div></div>' +
      '<div class="tag-pa-social"><p>Stay in touch</p><div class="tag-pa-social-links"><span><i>&#9679;</i>Website</span><span><i>in</i>LinkedIn</span></div></div></div>', 21);
  }

  var pages = [];
  pages.push(page("tag-pa-cover", header(false) +
    '<div class="tag-pa-cover-stripes"><span></span><span></span><span></span></div>' +
    '<div class="tag-pa-cover-dot"></div>' +
    '<h1 class="tag-pa-cover-name"><span>[First Name]</span><span>[Last Name]</span></h1>' +
    '<hr class="tag-pa-cover-rule" />' +
    '<h2 class="tag-pa-display">Your Performance<br>Architecture Roadmap</h2>' +
    '<p class="tag-pa-copy">A score-responsive report that makes the conditions shaping the work you influence visible - and establishes where to focus next.</p>' +
    '<div class="tag-pa-ribbons"><span></span><span></span><span></span><span></span></div>' +
    '<p class="tag-pa-cover-tag">TAG · You’re It</p>', 1));
  pages.push(resultsPage());
  domains.forEach(function (domain, index) {
    pages.push(domainPage(domain, 3 + index * 3));
    pages.push(consequencePage(domain, 4 + index * 3, domain.order === "05"));
    pages.push(beginPage(domain, 5 + index * 3));
  });
  pages.push(roadmapPage());
  pages.push(commitmentPage());
  pages.push(resourcesPage());
  pages.push(closingPage());

  var report = document.createElement("main");
  report.className = "tag-pa-report";
  report.setAttribute("data-tag-report", "performance-architect");
  report.innerHTML = pages.join("");

  var candidates = [
    ".scoreapp-result",
    ".result-pdf",
    ".page-content",
    ".content",
    "main",
    "body"
  ];
  var target = candidates.map(function (selector) { return document.querySelector(selector); }).find(Boolean) || document.body;

  Array.from(target.children).forEach(function (child) {
    if (!child.matches || !child.matches("script, style, link")) child.style.display = "none";
  });
  target.appendChild(report);
})();
