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

  var CONDITION_BANDS = [
    { max: 2.4, name: "Reactive", color: "#e9502a", textColor: "#fff" },
    { max: 3.0, name: "Managed", color: "#0bb996", textColor: "#fff" },
    { max: 3.9, name: "Deliberate", color: "#8ac43f", textColor: "#14151d" },
    { max: 4.5, name: "Integrated", color: "#f0a83a", textColor: "#14151d" },
    { max: 5.01, name: "Architected", color: "#1f9a8d", textColor: "#fff" }
  ];

  function resolveBand(score) {
    for (var i = 0; i < CONDITION_BANDS.length; i++) {
      if (score <= CONDITION_BANDS[i].max) return CONDITION_BANDS[i];
    }
    return CONDITION_BANDS[CONDITION_BANDS.length - 1];
  }

  function getRealScores() {
    try {
      var scores = window.pageData.props.data.result.scores;
      var map = {};
      scores.forEach(function (s) {
        if (s.type === "total" || !s.category || !s.score_count) return;
        map[s.category.title] = s.score / s.score_count;
      });
      return map;
    } catch (e) {
      return null;
    }
  }

  function applyRealScores(list) {
    var real = getRealScores();
    if (!real) return list;

    list.forEach(function (d) {
      var raw = real[d.name];
      if (raw == null) return;
      var rounded = Math.round(raw * 10) / 10;
      var band = resolveBand(rounded);
      d.score = rounded.toFixed(1);
      d.condition = band.name;
      d.color = band.color;
      d.textColor = band.textColor;
    });

    list.sort(function (a, b) { return parseFloat(a.score) - parseFloat(b.score); });
    list.forEach(function (d, i) {
      d.order = String(i + 1).padStart(2, "0");
      d.flag = i === 0;
    });
    return list;
  }

  domains = applyRealScores(domains);

  var CONTENT = {
  "APS Design": {
    "Reactive": {
      "page1": {
        "readerTitle": "APS Design: Reactive",
        "heading": "Your current condition",
        "paragraphs": [
          "APS Design is the ability to create the shared brain that guides how a company and its people think, access information, and make decisions. It connects two essential environments: the internal brain that enables people to perform their work, and the external brain that enables clients to obtain the exact information they need when they need it.",
          "Your current APS Design condition is **Reactive.** Information, answers, and decision logic are likely held in individual people, disconnected files, or informal conversations. When an internal or external client asks a question, the organization responds by finding someone helpful rather than examining why the information was not available at the point of need.",
          "This creates an organization that can appear responsive while remaining dependent on memory, effort, and interruption. People work hard to answer questions that the operating system should have anticipated. Decisions are repeatedly reconstructed because the logic behind them is not visible, shared, or easy to retrieve.",
          "The people involved are committed. The company brain has not yet been deliberately designed."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Questions become service failures",
        "paragraphs": [
          "At a Reactive condition, every recurring question is evidence of a design gap. An internal client asks because the information required to perform is not visible when needed. An external client asks because the path to a clear answer is incomplete, unclear, or unavailable.",
          "The immediate cost is interruption. People stop their own work to locate information, interpret a prior decision, or explain a process that should already be clear. The deeper cost is inconsistency. The quality of the response depends on who is available, what they remember, and how much time they have.",
          "Over time, the organization begins to compensate with additional meetings, more emails, more oversight, and more effort. Leaders become the answer system. Experienced people become bottlenecks. New people take longer to contribute because the knowledge required to perform is difficult to see.",
          "The consequence is predictable: the business cannot reliably scale performance beyond the availability of its most informed people. It pays repeatedly for answers that should have been designed into the system once."
        ]
      },
      "page3": {
        "readerTitle": "Begin by making the questions visible",
        "heading": "Your first design commitment",
        "paragraphs": [
          "Do not begin by selecting more software or trying to document everything. Begin by treating the questions people ask as evidence of where the company brain is missing, inaccessible, or unclear.",
          "Make recurring internal and external questions visible. Look for the questions that interrupt work, delay a decision, create inconsistent responses, or require someone to explain the same issue repeatedly. These questions reveal where information is not reaching the person who needs it at the time they need it.",
          "From there, establish the first elements of an APS: clear information ownership, a consistent place for the answer to live, and a simple logic for when and how that information is used. Build for a reliable response at the point of need rather than a larger knowledge base.",
          "Your immediate goal is to move the organization from **people carrying the brain** to **a visible brain that helps people perform**."
        ]
      }
    },
    "Managed": {
      "page1": {
        "readerTitle": "APS Design: Managed",
        "heading": "Your current condition",
        "paragraphs": [
          "Your APS Design condition is **Managed.** Within the organization you influence, important information, processes, and decision logic are becoming visible. Templates, shared files, procedures, systems, and experienced leaders provide a workable structure. People generally know where to look or who to ask.",
          "This is meaningful progress. Your company brain is no longer entirely held in individual memory. Yet it is often fragmented across platforms, teams, folders, and informal workarounds. Information may exist, but it is not always current, connected, or available at the exact point where a person needs to make a decision.",
          "Your internal and external brains may also be developing separately. Employees can find some information through internal systems, while clients rely on emails, conversations, or manual follow-up. Both environments work, but neither consistently anticipates need.",
          "At this condition, you are managing information reasonably well. The next requirement is to design it as a connected operating capability rather than a collection of useful resources."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Useful information is not yet reliable information",
        "paragraphs": [
          "At a Managed condition, you have reduced some confusion, but the work still carries the cost of fragmentation. People may know that information exists without knowing which version is current, which source should be trusted, or how a prior decision applies to the situation in front of them.",
          "The result is a quiet return to personal workarounds. Your teams create local tools to compensate for gaps in shared systems. You and other leaders continue to translate information across functions. Clients receive answers, but not always through a consistent path. The work becomes easier to manage without removing the conditions that create the exceptions.",
          "This condition can also create a false sense of security. Because documentation, systems, and processes are visible, you may assume the company brain is operating. Yet the real test is whether internal and external clients can obtain the exact information required to make an informed decision without unnecessary searching, interpretation, or escalation.",
          "The real cost appears when a capable person is absent. A colleague needs a routine answer, cannot tell which source is current, and sends the issue upward because no reliable path is visible. A leader stops work to locate the information, confirm the decision, and explain the route that the system should already provide.",
          "Capable people are still paid to hunt, validate, translate, and reconnect information. Every workaround keeps leaders in the middle and turns ordinary work into avoidable handoffs. You can add capable people without gaining the capacity those people should create."
        ]
      },
      "page3": {
        "readerTitle": "Begin by designing for the point of need",
        "heading": "Move from available information to usable information",
        "paragraphs": [
          "The next step is to identify where recurring decisions are made and what information is required at those moments. APS Design becomes stronger when information is designed around the point of need, rather than the department, platform, or person who owns it.",
          "Start with one recurring question or decision that crosses a functional boundary, influences a client relationship, or repeatedly requires your intervention. Trace its route from the source of the information to the person who needs to act. Then connect the internal and external information paths around that single journey.",
          "Clarify the trusted source, the decision logic, and the owner responsible for keeping that information current. Your internal teams need the logic, standards, and information required to serve well. External clients need a clear path to the information required to make informed decisions. Both sides should reinforce the same truth.",
          "Your goal is to reduce the distance between a question and a reliable answer. That is how a Managed company brain begins to become Deliberate."
        ]
      }
    },
    "Deliberate": {
      "page1": {
        "readerTitle": "APS Design: Deliberate",
        "heading": "Your current condition",
        "paragraphs": [
          "Your APS Design condition is **Deliberate.** You have moved beyond simply storing information. You are designing how people discover what is needed, access it, and apply it in decisions. Important questions are increasingly treated as information-design signals rather than isolated requests for help.",
          "You have established a visible approach to building the company brain. Discovery occurs before design. Information is structured around meaningful touchpoints. Some shared decision logic, standards, workflows, and knowledge environments are in place. You are increasingly able to help people find the right answer without relying entirely on individual memory.",
          "The remaining challenge is consistency across the whole value stream. Certain teams, client moments, or decisions may be well designed, while others still rely on local interpretation or your intervention. The brain exists, but it is not yet fully integrated across internal and external environments.",
          "At this condition, you can see that information design is more than administration. It is performance architecture."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "A partial brain still creates uneven performance",
        "paragraphs": [
          "At a Deliberate condition, you have designed important parts of the shared brain. The risk is that those parts may perform well in isolation while the handoffs between them remain incomplete. Information can be accurate at one touchpoint and unavailable at the next. A decision can be clear within a function and unclear across functions.",
          "This creates uneven confidence. People may know how to act in familiar situations but hesitate when the work crosses a boundary, an exception occurs, or a client requires a different path. Leaders still become translators when information, roles, and decision logic are not connected end to end.",
          "You also risk designing around current knowledge without establishing a reliable way to learn from new questions, changed conditions, or repeated breakdowns. When the company brain is not continuously improved, it slowly becomes a record of the past rather than a guide for the work now being done.",
          "The consequence is preventable variation: the gap between a well-designed component and a consistently designed operating reality."
        ]
      },
      "page3": {
        "readerTitle": "Begin by connecting the whole brain",
        "heading": "Design the handoffs, not only the components",
        "paragraphs": [
          "Your next priority is to move from strong information components to a connected information architecture. Examine how a question, decision, or client need moves across the organization. Identify where the answer changes hands, where the logic is interpreted differently, and where a person must bridge a gap that the system should close.",
          "Strengthen the shared decision logic that connects functions, roles, and client touchpoints. People should not need to reconstruct the reason behind a decision every time work crosses a boundary. Make that logic visible, accessible, and consistent with the way the business intends to operate.",
          "Then establish a disciplined mechanism for evolving the brain. New questions, recurring exceptions, and failures in information flow should become inputs for design improvement. This turns everyday work into evidence for strengthening the system.",
          "Your objective is a company brain that supports the full flow of work, not merely selected moments within it."
        ]
      }
    },
    "Integrated": {
      "page1": {
        "readerTitle": "APS Design: Integrated",
        "heading": "Your current condition",
        "paragraphs": [
          "Your APS Design condition is **Integrated.** You have a connected company brain that increasingly guides how people think, access information, and make decisions. Internal teams and external clients are supported by clearer information paths, shared standards, and visible decision logic.",
          "Information is more likely to be available at the point of need. You use questions as evidence. Functions are better connected. You spend less time acting as the answer system because the operating environment helps people find, understand, and apply what is required.",
          "At this condition, APS Design is contributing directly to performance. It reduces friction, improves decision quality, and creates greater consistency across the work you influence. You can see more clearly how information design shapes client experience, team capability, and execution.",
          "The remaining opportunity is to ensure the company brain does more than connect today’s work. It must also anticipate changing needs, learn from performance, and evolve before gaps become visible under pressure."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Integration can still become static",
        "paragraphs": [
          "An Integrated company brain is a significant performance asset. The risk at this level is assuming that a well-connected system will remain effective without deliberate renewal.",
          "As the business changes, new client expectations, new roles, new technologies, and new decisions place pressure on the existing information architecture. Imagine a new client requirement or a role transition exposes a cross-functional decision that no one can explain without assembling the usual people, files, and workarounds. Your core systems may still look strong, but the gap has already moved work back into individual memory and leader dependency.",
          "You can also mistake access for usefulness. Information may be connected and visible, but you must still ask whether it is helping people make better decisions with appropriate speed and judgment. A company brain should create the clarity required to act, not more material for people to process.",
          "The cost of remaining at this condition is being surprised by a gap you had the architecture to see. You perform well, but may not yet use your information environment to identify emerging constraints and improve performance before those constraints become costly."
        ]
      },
      "page3": {
        "readerTitle": "Begin by designing for learning and renewal",
        "heading": "Move from connected information to adaptive intelligence",
        "paragraphs": [
          "Your next priority is to make the company brain more deliberately adaptive. You already have the essential architecture: shared information, connected decision logic, and clearer internal and external paths. The work now is to create a dependable rhythm for learning from how the architecture performs.",
          "Use recurring questions, exceptions, delays, decision reversals, and client friction as design evidence. Do not allow these signals to remain local problems. Use them to strengthen the company brain across the value stream.",
          "Focus leadership attention on the decisions that carry the greatest consequence. Ensure the information supporting those decisions is current, concise, and useful—not simply available. As conditions change, make the logic behind new choices visible so the organization learns together rather than repeatedly starts over.",
          "Your objective is an APS that identifies and closes gaps before pressure reveals them. It learns, adjusts, and increases your organization’s capacity to perform deliberately."
        ]
      }
    },
    "Architected": {
      "page1": {
        "readerTitle": "APS Design: Architected",
        "heading": "Your current condition",
        "paragraphs": [
          "Your APS Design condition is **Architected.** You have created a living company brain that helps internal teams and external clients obtain the right information when they need it, apply shared decision logic, and act with greater confidence.",
          "You treat information as an operating capability rather than a static collection of documents or systems. Questions expose design opportunities. Decision logic is visible. Internal and external environments are connected. You can improve how knowledge, judgment, and learning move through the work.",
          "At this condition, you are not the central source of answers. You are the architect and steward of an environment that allows people to perform with clarity. The organization can scale contribution because its intelligence is increasingly built into the way work flows rather than held in a small number of people.",
          "This condition reflects mature APS Design: human-led, visible, connected, and continuously improved."
        ]
      },
      "page2": {
        "readerTitle": "What this condition protects",
        "heading": "You have reduced dependency. Protect the discipline.",
        "paragraphs": [
          "An Architected company brain protects you from a common performance failure: relying on exceptional people to compensate for incomplete systems. It allows knowledge, standards, decisions, and learning to remain available even as roles change, workload increases, or conditions become more complex.",
          "Your responsibility at this level is stewardship. The greatest risk is allowing a strong architecture to become static, overly complex, or detached from the people and clients it is intended to serve. A company brain retains its value only when it continues to make work clearer, decisions better, and information easier to use.",
          "Maintain the discipline of asking whether information is still available at the point of need, whether the decision logic is still relevant, and whether new questions are being converted into system improvement. Do not confuse maturity with completion.",
          "The standard is a living architecture that makes performance more deliberate as the organization evolves."
        ]
      },
      "page3": {
        "readerTitle": "Sustain the architecture through renewal",
        "heading": "Your leadership priority",
        "paragraphs": [
          "Your next responsibility is to preserve and extend the conditions you have created. Continue treating APS Design as a strategic operating capability, not a completed project or a technology initiative.",
          "Keep the company brain close to the work. Invite the people who use it and the clients who depend on it to reveal where clarity is increasing and where friction is returning. Use their experience to ensure the architecture remains practical, relevant, and aligned with the realities of decision-making.",
          "Develop more people who can steward the architecture. The strength of an Architected condition is not that one leader sees the system clearly. It is that the organization has developed shared capacity to protect, improve, and apply that system over time.",
          "Your objective is to keep converting experience into usable intelligence. That is how APS Design remains a source of clarity, alignment, and predictable execution as the business grows and changes."
        ]
      }
    }
  },
  "AI and Automation": {
    "Reactive": {
      "page1": {
        "readerTitle": "AI and Automation: Reactive",
        "heading": "Your current condition",
        "paragraphs": [
          "AI and Automation is your ability to create the conditions required to use technology in ways that empower talent, improve decisions, and strengthen performance. The aim is **human-led, AI-amplified** work: people retain judgment and responsibility while AI and automation increase their capability to see, decide, create, and perform.",
          "Your current condition is **Reactive.** AI and automation activity is likely driven by individual curiosity, urgent requests, vendor pressure, or isolated tool experimentation. You may see real potential, yet the work is not anchored to a defined value-stream opportunity, a consequential mandate, or the capability ecosystem required to deliver an outcome.",
          "That ecosystem includes clear authority, value-stream clarity, operating and technical expertise, capable people, verified learning, and evidence that the intended outcome has improved. People may be using tools, but their use is disconnected from a shared operating purpose. Authority may be unclear. The expertise required to identify, design, integrate, govern, and sustain an AI or automation solution may not be available when needed. Training, where it exists, may focus on tool exposure rather than demonstrated application.",
          "At this condition, AI and automation remain an activity. They have not yet become a designed capability for improving the work you influence."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Tool activity without performance gain",
        "paragraphs": [
          "When AI and automation are reactive, the organization can spend time, money, and attention without creating dependable capability. Individual experiments may produce useful moments, but they do not reliably improve how work flows, how decisions are made, or how clients and colleagues are served.",
          "The most immediate cost is fragmentation. Different people adopt different tools, create disconnected processes, and build local workarounds. Information becomes harder to trust. Leaders are left trying to determine which uses are valuable, which introduce risk, and which should be stopped before they become embedded in everyday work.",
          "The deeper cost is missed leverage. Repetitive work, preventable delays, and information gaps remain in place while the organization discusses AI in the abstract. Capable people continue to carry work that technology could help them perform more effectively, because no one has defined the value-stream opportunity clearly enough to act with consequence.",
          "Without a deliberate foundation, AI can increase noise faster than it increases performance."
        ]
      },
      "page3": {
        "readerTitle": "Begin with one consequential opportunity",
        "heading": "Your first design commitment",
        "paragraphs": [
          "Do not begin by selecting a platform or attempting a broad AI rollout. Begin by identifying one important value-stream constraint where better information, reduced repetition, faster response, or stronger capability would materially improve performance.",
          "Choose a problem that is visible in the work: a recurring delay, a repeated question, a handoff that creates rework, a decision that requires unnecessary searching, or an activity that consumes skilled capacity without adding proportionate value. Define the desired outcome before discussing the technology.",
          "Then establish a clear mandate for that one opportunity. Identify who has the authority to make the decision, what expertise is required, which people will use the solution, and how you will know whether the work has improved.",
          "Your immediate goal is to move from tool activity to one defined, consequential opportunity for making people more capable through technology."
        ]
      }
    },
    "Managed": {
      "page1": {
        "readerTitle": "AI and Automation: Managed",
        "heading": "Your current condition",
        "paragraphs": [
          "Your AI and Automation condition is **Managed.** You have moved beyond unstructured experimentation. Specific tools, pilots, processes, or automation initiatives are in use, and you can point to examples where technology has reduced effort, improved access to information, or helped people complete work more effectively.",
          "You may have secured support for certain initiatives and identified people with relevant technical or operational capability. However, the work is still likely organized initiative by initiative. The required capability ecosystem—leadership mandate, value-stream design, subject-matter expertise, data and process readiness, implementation support, verified learning, and benefit measurement—is not yet consistently designed as one connected system.",
          "This can create useful early results. It does not yet create a reliable way to decide where AI or automation belongs, how it will be integrated, or how people will demonstrate that they can use it effectively in the flow of work.",
          "You are managing adoption. The next requirement is to architect the conditions that make adoption repeatable."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Early wins that cannot yet scale",
        "paragraphs": [
          "At a Managed condition, individual initiatives can appear successful while the organization remains unable to reproduce that success. A tool works in one team because a committed individual carries the knowledge, translates the process, and compensates for gaps that the broader environment has not addressed.",
          "This creates a familiar pattern: pilots multiply, enthusiasm rises, and useful examples are shared. Yet when the organization attempts to extend the work, the same questions return. Who owns the outcome? Which process should change? What data is required? Who has the expertise to design the solution? How will people demonstrate capability rather than merely complete training?",
          "The real cost becomes visible when a committed person leaves. They take the only working knowledge of several tools, their informal methods for reconciling outputs, and the practical judgment that kept the process functioning. What appeared to be adoption turns out to have been one person holding the capability together.",
          "The next time that person takes a week away, changes roles, or leaves, someone else inherits three tools, conflicting outputs, and no clear way to continue the work. The deadline does not move. You or another leader are pulled in to reconstruct a process that should have been designed to survive the person who first made it work.",
          "You keep buying isolated improvements without building the conditions required to scale their value. Skilled people remain responsible for reconciling tools, teaching workarounds, and protecting the work from inconsistent use. The organization gains activity, but not the capacity it expected to create."
        ]
      },
      "page3": {
        "readerTitle": "Begin by defining one adoption value stream",
        "heading": "Build the ecosystem around a real use case",
        "paragraphs": [
          "Choose one AI or automation initiative that already matters to the work you influence. Create a one-page adoption agreement around that value-stream opportunity. It should name the performance outcome, the leader with decision authority, the people whose work will change, the expertise required, the information and process dependencies, and the evidence that will demonstrate value.",
          "This is a capability design for the work, not a project plan for the tool. The agreement should make clear what the technology will extend, what human judgment remains essential, and what the organization must provide for people to use the solution responsibly and effectively.",
          "Include verified application from the beginning. Training alone does not establish capability. People must be able to demonstrate that they can apply the new process or tool correctly in the work for which it was designed.",
          "Your objective is to create one complete adoption environment that can later become a repeatable pattern."
        ]
      }
    },
    "Deliberate": {
      "page1": {
        "readerTitle": "AI and Automation: Deliberate",
        "heading": "Your current condition",
        "paragraphs": [
          "Your AI and Automation condition is **Deliberate.** You are selecting opportunities with more discipline and designing adoption around a clear performance purpose. You understand that successful AI and automation require more than software. They require authority, expertise, process clarity, relevant information, enabled talent, and a defined measure of value.",
          "You are increasingly able to distinguish between an interesting technology and a consequential opportunity. AI and automation are being applied to work where they can improve decision quality, reduce friction, increase access to information, or amplify the capability of people who are responsible for outcomes.",
          "The remaining challenge is connectivity. Individual adoption environments may be well designed, but the technologies, data, information flows, and learning practices that support them are not yet fully interdependent. Value may be visible within a use case while remaining difficult to see across the wider work system.",
          "At this condition, you have established a disciplined approach. The next step is to connect that approach into an integrated capability architecture."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Well-designed initiatives can still create disconnected work",
        "paragraphs": [
          "At a Deliberate condition, you are making stronger choices. The risk is that each initiative becomes well designed within its own boundary while the connections between initiatives remain unclear. A new automation may improve one handoff but create an information gap at the next. An AI tool may produce better output but not connect to the decision logic, standards, or systems that determine how that output should be used.",
          "When interdependencies are not visible, people are required to bridge them manually. They reconcile outputs across tools, decide which information is authoritative, and absorb the consequences when a platform changes or a process evolves. The technology is helpful, but the operating environment still depends on individual effort to keep the pieces connected.",
          "You can also lose sight of value. A solution may save time in one part of the work while creating review, correction, or training requirements somewhere else. Without an end-to-end view, apparent gains can conceal costs that have simply moved to another team or stage of the value stream.",
          "The consequence is partial amplification: capable technology operating below its potential because the surrounding architecture is not yet fully connected."
        ]
      },
      "page3": {
        "readerTitle": "Begin by designing the interdependencies",
        "heading": "Connect the work around the technology",
        "paragraphs": [
          "Take one successful AI or automation use case and make its full value stream visible. Trace where information enters, where it is processed, who uses the output, which decisions it informs, what other systems it depends on, and how people verify that the result is correct and useful.",
          "This will reveal the interdependencies that currently sit in people’s heads or in informal workarounds. It may show, for example, that an AI output reaches a client-facing decision without a trusted source, a clear handoff, or a visible verification step. Clarify which system holds the trusted information, how outputs move into the next decision, and where human judgment must remain visible. This is how technology becomes part of a connected operating architecture rather than a separate layer of activity.",
          "Then measure value across the complete flow of work. Look beyond tool use or time saved in one step. Determine whether the solution has improved capacity, decision quality, speed, client response, risk control, or another outcome that matters to the organization.",
          "Your next goal is to ensure that every AI and automation initiative strengthens the system around it."
        ]
      }
    },
    "Integrated": {
      "page1": {
        "readerTitle": "AI and Automation: Integrated",
        "heading": "Your current condition",
        "paragraphs": [
          "Your AI and Automation condition is **Integrated.** You have connected AI and automation adoption to the value streams, information flows, decision logic, and talent systems that shape performance. Technology is increasingly selected and designed as part of a wider operating architecture rather than introduced as an isolated solution.",
          "You have the ability to bring the required capabilities together: leadership authority, operational understanding, technical expertise, people who perform the work, and the learning environment needed to apply the solution. Human judgment remains central. People understand where technology strengthens their capability and where they must exercise professional responsibility.",
          "You are also more likely to verify adoption. The standard is not attendance at training or access to a platform. It is demonstrated capability, appropriate use, and evidence that the intended performance outcome has been achieved.",
          "This condition creates reliable performance gains. The leadership challenge now is to ensure that a strong adoption architecture remains adaptive as technology, work, and risk evolve."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "A connected architecture can still be surprised",
        "paragraphs": [
          "An Integrated AI and automation environment is a significant asset. Its risk is assuming that today’s connections, capabilities, and controls will remain sufficient as tools, roles, data, and client expectations change.",
          "Consider what happens when a platform update changes an output that teams have learned to trust, or when a new use case reaches a client-facing decision without the verification discipline built into the original process. The core architecture may still look strong. Yet the gap becomes visible only after people have begun compensating, correcting results, or escalating issues that should have been anticipated.",
          "A different risk is that a solution can outlive the constraint it was designed to solve. It may remain integrated and well used even after the work, decision, or client need it was intended to improve has shifted. Continuing to measure use without re-examining the outcome can preserve activity that no longer creates meaningful value.",
          "The cost is lost anticipation: you have the foundation to see emerging change, but have not yet built a consistent discipline for learning and adapting before that change creates friction."
        ]
      },
      "page3": {
        "readerTitle": "Begin by governing for renewal",
        "heading": "Make learning part of adoption",
        "paragraphs": [
          "Your next priority is to establish a regular renewal rhythm for the AI and automation environments you have created. Review each consequential use case through three questions: is the value-stream opportunity still current, are people still demonstrating the required capability, and is the technology still improving the outcome it was selected to influence?",
          "Bring operational leaders, technical expertise, and the people performing the work into that review. Their experience will reveal where outputs are becoming harder to use, where workarounds are returning, and where a changing role, process, or client expectation requires the adoption architecture to evolve.",
          "Keep value measurement close to the work. A high adoption rate is not sufficient evidence of success. Confirm that the solution is increasing useful capacity, improving the quality or speed of decisions, reducing preventable friction, or strengthening another outcome that matters.",
          "Your objective is an adoption environment that learns before it is forced to react."
        ]
      }
    },
    "Architected": {
      "page1": {
        "readerTitle": "AI and Automation: Architected",
        "heading": "Your current condition",
        "paragraphs": [
          "Your AI and Automation condition is **Architected.** You have created a human-led, AI-amplified capability environment. AI and automation are deliberately connected to the way work flows, information is used, decisions are made, talent is developed, and performance is improved.",
          "You consistently begin with a consequential value-stream opportunity rather than a technology preference. You bring the right authority, expertise, and operating knowledge together before the work begins. The solutions you implement are designed to extend what people can do, protect sound judgment, and make the work easier to see, understand, and improve.",
          "Learning is verified through demonstrated application. Value is measured across the full flow of work rather than assumed from tool use or enthusiasm. You have developed the capability to connect multiple technologies and processes without losing the clarity, ownership, or decision logic required for dependable performance.",
          "At this condition, AI and automation are a disciplined means of extending the capability of the people responsible for performance."
        ]
      },
      "page2": {
        "readerTitle": "What this condition protects",
        "heading": "You have created leverage. Protect human leadership.",
        "paragraphs": [
          "An Architected AI and automation environment protects the organization from two costly extremes: asking people to carry work that the system could help them perform more effectively, and allowing technology to make the work less visible, less understandable, or less human.",
          "Your stewardship responsibility is to ensure that technology strengthens people’s capability without becoming a dependency they no longer understand. People must continue to understand the decisions they are making, the standards that govern their work, the information on which they rely, and the personal responsibility they retain when AI or automation contributes to an outcome.",
          "The risk at this level is subtle. A mature system can become overly trusted, too complex to question, or detached from the people and clients it was intended to serve. A strong architecture must continue to surface uncertainty, verify capability, and invite people to improve the system rather than simply follow it.",
          "The standard is greater human capability, supported by technology that remains useful, visible, and deliberately governed."
        ]
      },
      "page3": {
        "readerTitle": "Sustain the system through stewardship",
        "heading": "Your leadership priority",
        "paragraphs": [
          "Your next responsibility is to preserve and extend the conditions you have created. Continue to treat AI and automation as a strategic capability system: one that requires clear purpose, connected architecture, relevant expertise, demonstrated application, and evidence of value.",
          "Develop more leaders and practitioners who can steward this environment. The strength of an Architected condition is not that one technically capable person can keep the work moving. It is that the people responsible for value streams, talent, information, technology, and decisions understand how to work together as the environment evolves.",
          "Maintain a visible renewal discipline. Revisit the value-stream opportunity, verify ongoing capability, test whether human judgment remains appropriately placed, and measure whether the technology is still increasing useful capacity. Use new questions, changing conditions, and emerging risks as inputs for improvement.",
          "Your objective is to keep building an environment where technology makes capable people more capable—and where performance becomes more deliberate as the organization learns."
        ]
      }
    }
  },
  "Make the Invisible, Visible": {
    "Reactive": {
      "page1": {
        "readerTitle": "Make the Invisible, Visible: Reactive",
        "heading": "Your current condition",
        "paragraphs": [
          "Making the Invisible, Visible is your ability to reveal the conditions shaping performance before attempting to improve them. It requires you to engage the people doing the work, follow information, people, and material flows, ask questions that reveal what others cannot see, and make useful data visible while there is still time to prevent a failure.",
          "Your current condition is **Reactive.** You are likely working from partial information, delayed reports, assumptions, or the perspective of the people closest to the issue. By the time a problem becomes visible, the cost has often already been absorbed: a client is dissatisfied, a deadline has been missed, capacity has been wasted, or a leader is pulled in to resolve an avoidable issue.",
          "The people doing the work may see signals that the wider system does not. Their observations, questions, and workarounds are available, but they are not consistently brought into the way you diagnose performance. Information flows are rarely traced end to end, so the conditions creating delay, rework, or failure remain hidden behind the visible symptom.",
          "At this condition, you are asked to respond to performance after the system has already produced the outcome."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Problems arrive after the opportunity to prevent them",
        "paragraphs": [
          "When performance is visible only after the fact, you are managing consequences rather than preventing failure. A monthly report can tell you what has already happened. It cannot help you intervene at the moment a critical handoff breaks down, a client begins to lose confidence, or a preventable cost starts accumulating.",
          "This forces capable people into response mode. They investigate after a failure, explain why it occurred, and work around it until the immediate pressure subsides. The same issue returns because the flow of information, people, or work that created it was never made visible in time to redesign.",
          "The most costly consequence is misdiagnosis. A visible failure can appear to be a people problem, a workload problem, or an isolated client issue when the real condition sits upstream in the system. Each incorrect response consumes time and weakens trust while leaving the source of the failure intact.",
          "You cannot improve a condition you cannot yet see."
        ]
      },
      "page3": {
        "readerTitle": "Begin with the people doing the work",
        "heading": "Your first design commitment",
        "paragraphs": [
          "Choose one recurring failure, delay, client complaint, or avoidable escalation. Before reviewing a report or proposing a solution, speak with the people who perform the work at the point where the issue becomes visible. Ask them what information they lack, what they must work around, what questions repeat, and what they see before the failure reaches a leader.",
          "Listen for the difference between the visible symptom and the operating condition beneath it. A late response may be caused by missing information. A quality issue may originate in an unclear handoff. A recurring question may reveal that the person who needs to act cannot access the right information when they need it.",
          "Make those observations visible in one shared view. Your immediate purpose is not to fix everything. It is to see the condition accurately enough to prevent an instinctive or incomplete response.",
          "Start by treating the people doing the work as a source of evidence about the system you influence."
        ]
      }
    },
    "Managed": {
      "page1": {
        "readerTitle": "Make the Invisible, Visible: Managed",
        "heading": "Your current condition",
        "paragraphs": [
          "Your current condition is **Managed.** You have begun to make performance more visible through reports, meetings, dashboards, feedback, process reviews, or operating metrics. You are less dependent on instinct alone and more likely to seek evidence before concluding why a problem has occurred.",
          "You may also involve people who perform the work, particularly when an issue requires attention. However, the evidence you use is often retrospective or local to one team, process, or data source. You can see more than before, but the full flow of information, people, and work is not yet consistently visible across the value stream.",
          "At this condition, you have useful management information. The next requirement is to make that information timely, connected, and close enough to the work that people can act before a preventable failure becomes expensive."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "You can see the result, but not always the condition creating it",
        "paragraphs": [
          "At a Managed condition, reporting and review reduce some uncertainty. Yet the evidence often reaches you after the work has moved on. You can identify that service declined, capacity tightened, or a client journey broke down, but the earliest signals may already be gone by the time the issue is discussed.",
          "This creates a costly pattern. Teams become skilled at explaining last month’s result while the conditions shaping next month’s result remain unexamined. Local measures can improve while friction simply moves to the next handoff, the next department, or the next point in the client journey.",
          "The hidden cost is that capable leaders and teams can work harder at interpreting symptoms than at preventing the cause. You are managing a record of performance when you need a view of performance in motion.",
          "The result is delayed learning: the organization becomes more informed about what failed without becoming proportionately more able to prevent the next failure."
        ]
      },
      "page3": {
        "readerTitle": "Begin by making one flow visible in time",
        "heading": "Move the evidence closer to the decision",
        "paragraphs": [
          "Select one critical flow where a delayed signal repeatedly creates avoidable cost: an internal request, a client response, an approval, a service handoff, or a recurring decision. Trace what enters the flow, who touches it, what information is required, where it waits, and where a failure first becomes visible.",
          "Then identify the earliest signal that would allow you or the people doing the work to act before the failure occurs. This could be a missed handoff, an unanswered request, a queue that is growing, a repeated question, or an exception that signals the normal process is not working.",
          "Place that signal in front of the person who can act on it. Do not add a dashboard merely to observe more. Make the information useful at the moment a decision can still change the outcome.",
          "Your objective is to turn one retrospective measure into one visible, preventive operating signal."
        ]
      }
    },
    "Deliberate": {
      "page1": {
        "readerTitle": "Make the Invisible, Visible: Deliberate",
        "heading": "Your current condition",
        "paragraphs": [
          "Your current condition is **Deliberate.** You are actively designing how performance conditions are revealed. You engage the people who do the work to test assumptions. You use process or value-stream mapping to see how information, people, and material move. You ask questions that expose gaps between the intended way of working and the reality people experience.",
          "You are increasingly using data while there is still time to act. Rather than relying solely on monthly results, you identify early signals, examine recurring questions, and look for evidence that a process, handoff, or client experience is beginning to fail.",
          "The remaining challenge is consistency across the wider work system. Some flows may be highly visible and well understood, while others still depend on local knowledge, periodic review, or the judgment of a few experienced people. You have a disciplined method, but the visibility it creates is not yet fully connected end to end.",
          "At this condition, diagnosis is becoming a design practice rather than a response to trouble."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Strong local visibility can still hide system-wide friction",
        "paragraphs": [
          "At a Deliberate condition, you can see important conditions before they become visible failures. The risk is that this visibility remains concentrated in the flows you know best or in the areas where a capable leader has already established a strong practice.",
          "One team may see its own workload, performance measures, and client signals clearly while remaining unaware of the upstream or downstream conditions that determine those results. A well-run process can still absorb the consequences of a poorly designed handoff. People then compensate quietly, which makes the broader constraint harder to detect.",
          "This limits your ability to distinguish improvement from displacement. For example, one team can improve its response-time measure by moving incomplete work to the next handoff. Its dashboard shows a gain, while the next team absorbs the delay, rework, and client follow-up required to finish the work properly.",
          "That is displacement: a problem can appear solved because one measure improves, while the cost has shifted to another team, another client touchpoint, or another point in the value stream.",
          "The consequence is partial visibility: enough insight to improve selected areas, but not yet enough shared evidence to improve the performance architecture as a whole."
        ]
      },
      "page3": {
        "readerTitle": "Begin by connecting visibility across the flow",
        "heading": "Follow one condition beyond your current boundary",
        "paragraphs": [
          "Take one early signal or recurring question that you already monitor effectively. Follow it beyond the team, process, or client touchpoint where it first appears. Show what happens before it reaches that point, what happens after it leaves, and which people must compensate when the signal is missed.",
          "Use this view to bring the people across the complete flow into the same conversation. Test whether they see the same condition, rely on the same information, and interpret the signal in the same way. Differences in their answers will reveal where visibility is breaking down.",
          "Then agree on one shared indicator that makes the condition visible to everyone who influences the outcome. The purpose is not centralized control. It is shared understanding at the moments when coordinated action can prevent a failure or reduce its impact.",
          "Your next goal is to make the important conditions visible across the whole flow of work, not merely within individual areas."
        ]
      }
    },
    "Integrated": {
      "page1": {
        "readerTitle": "Make the Invisible, Visible: Integrated",
        "heading": "Your current condition",
        "paragraphs": [
          "Your current condition is **Integrated.** You have connected the practices required to reveal performance conditions before they become failures. You engage the people doing the work, follow end-to-end flows, test assumptions with evidence, and place useful information close to the decisions that shape performance.",
          "Early signals are becoming part of how the organization operates. Teams can see more clearly how their work affects the next handoff, the next decision, or the next client experience. Questions, exceptions, delays, and recurring workarounds are increasingly treated as evidence about the system rather than as isolated interruptions.",
          "This gives you a stronger basis for design. You can see conditions across functional boundaries and use that visibility to align decisions, improve information flow, and prevent recurring failures. The remaining opportunity is to ensure this connected view continues to adapt as the work, people, and performance requirements change.",
          "You have made visibility an operating capability. The next challenge is to sustain its ability to reveal what is emerging."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "A strong view can still become a familiar view",
        "paragraphs": [
          "An Integrated visibility system gives you a substantial advantage. Its risk is that the organization begins to see only the conditions it already knows how to measure. Existing indicators can remain clear, current, and well used while a new source of friction develops outside the established view.",
          "Consider a change in client expectations, a redesigned role, a new technology, or a shift in workload. Your operating signals may continue to show that the familiar process is under control. Yet the new condition appears in questions, informal workarounds, or small delays that no one has defined as a signal because the system was designed for an earlier reality.",
          "The cost is being accurate about the past while becoming late to the future. Strong measures can provide confidence without revealing what has changed around them.",
          "You have connected the view. The responsibility now is to ensure that it continues to learn."
        ]
      },
      "page3": {
        "readerTitle": "Begin by designing for emerging conditions",
        "heading": "Add a learning loop to your visibility system",
        "paragraphs": [
          "Your next priority is to create a visible practice for detecting what your current measures may not yet show. Bring the people closest to the work together at a regular interval to examine emerging questions, recurring exceptions, new workarounds, and changes in client or internal demand.",
          "Ask a disciplined question: **What are people having to notice, compensate for, or explain that our existing information does not yet make visible?** This question directs attention beyond the familiar dashboard and toward the conditions that may become future constraints.",
          "When a new pattern is identified, decide whether it requires a new signal, a revised map, a different information path, or a change to the work itself. Make the response part of the operating system, not a one-time improvement effort.",
          "Your objective is a visibility environment that identifies emerging conditions before they become established failure patterns."
        ]
      }
    },
    "Architected": {
      "page1": {
        "readerTitle": "Make the Invisible, Visible: Architected",
        "heading": "Your current condition",
        "paragraphs": [
          "Your current condition is **Architected.** You have created a living visibility environment that helps people see the conditions shaping performance, act before preventable failures occur, and continuously improve how information, work, and decisions move through the organization.",
          "You use data at decision time rather than only after the result is known. You engage people who perform the work as ongoing sources of evidence. You follow flows end to end and make questions, exceptions, and workarounds visible as inputs for improvement. The result is not simply more information. It is clearer shared understanding of what is happening, why it is happening, and where action will have the greatest effect.",
          "At this condition, visibility supports personal responsibility without blaming people for conditions the system has created. Leaders and teams can see their contribution, recognize constraints, and work together to redesign the operating environment.",
          "You have established the discipline of making the invisible visible before performance pressure forces it into view."
        ]
      },
      "page2": {
        "readerTitle": "What this condition protects",
        "heading": "You have created foresight. Protect the inquiry.",
        "paragraphs": [
          "An Architected visibility environment protects the organization from a costly illusion: believing that a clean report, a stable dashboard, or a familiar operating rhythm means the underlying conditions are fully understood. It helps people see where performance is being shaped before those conditions become expensive failures.",
          "Your responsibility at this level is to protect the discipline of inquiry. Do not allow visibility to become surveillance, reporting for its own sake, or a fixed collection of measures that people stop questioning. The purpose is to help people understand the work and improve it, not to create more information than they can use.",
          "As the business evolves, continue to ask whose experience is missing, what questions are becoming more frequent, and where people are compensating for a condition that has not yet been made visible. The most important signal may not arrive through a formal metric.",
          "The standard is a learning environment that makes better judgment possible before pressure makes change unavoidable."
        ]
      },
      "page3": {
        "readerTitle": "Sustain foresight through stewardship",
        "heading": "Your leadership priority",
        "paragraphs": [
          "Your next responsibility is to preserve and extend the conditions you have created. Continue to treat visibility as a strategic capability: one that connects real-time information, the experience of people doing the work, end-to-end flow, disciplined questioning, and timely action.",
          "Develop more people who can use evidence with judgment. The strength of an Architected condition is not that one leader can see every relevant signal. It is that teams across the organization have learned to recognize meaningful conditions, make them visible, and respond together before the work is disrupted.",
          "Keep the environment practical. Retire signals that no longer guide a useful decision. Add signals when new patterns emerge. Invite challenge when the data appears to tell a simple story. The purpose is to maintain a shared view that is useful enough to guide action and open enough to reveal what has changed.",
          "Your objective is to keep turning hidden conditions into shared clarity, so performance can be designed deliberately rather than repaired after failure."
        ]
      }
    }
  },
  "System-First Thinking": {
    "Reactive": {
      "page1": {
        "readerTitle": "System-First Thinking: Reactive",
        "heading": "Your current condition",
        "paragraphs": [
          "System-First Thinking is your ability to see performance outcomes as the result of system design. It requires you to think above individual events, challenge strongly held paradigms, see work end to end, and diagnose the conditions shaping performance before judging the people within them.",
          "Your current condition is **Reactive.** When performance breaks down, your attention is likely pulled toward the visible event: the missed deadline, the unhappy client, the low result, the difficult conversation, or the person closest to the problem. You may work hard to resolve what is in front of you, but the wider system that produced the outcome remains largely unexamined.",
          "Decisions are often made inside functional, departmental, or immediate boundaries. People are asked to work harder, communicate more, or correct an error without a clear view of the information, incentives, handoffs, priorities, and decision rules influencing their performance.",
          "At this condition, you are managing the effects of a system that you have not yet made visible."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "The same problems return with different names",
        "paragraphs": [
          "When you respond to visible failures without examining their system causes, the organization can become very busy without becoming more capable. The immediate issue is resolved. A person is coached. A meeting is held. A new rule is introduced. Then the pattern returns in a different team, with a different client, or under a different form of pressure.",
          "This creates an unfair burden on people. They are expected to compensate for unclear priorities, fragmented information, poorly designed handoffs, or decision rules that no longer fit the work. The most capable people become the ones who absorb the friction quietly, which can make the system appear stronger than it is.",
          "The deeper cost is that leaders begin to treat recurring outcomes as individual exceptions. Performance discussions become focused on effort and behavior while the operating conditions that shape those behaviors remain unchanged.",
          "Without a systems view, every hard-working person eventually becomes a workaround."
        ]
      },
      "page3": {
        "readerTitle": "Begin with one outcome",
        "heading": "Your first design commitment",
        "paragraphs": [
          "Choose one outcome that keeps returning: a recurring delay, a service failure, a performance gap, a difficult handoff, or an issue that repeatedly consumes leadership attention. Do not begin with who caused it. Begin with one disciplined question:",
          "> **What conditions in the system are producing this outcome?**",
          "Look beyond the individual event. Identify what information was available, where the work changed hands, which decision rules applied, what competing priorities existed, and what people had to compensate for in order to complete the work.",
          "Bring the people closest to that outcome into the diagnosis. Their experience will reveal where the intended process and the actual process differ. Your immediate goal is to see the pattern before you attempt to correct the person within it.",
          "This is the first move from reaction toward system design."
        ]
      }
    },
    "Managed": {
      "page1": {
        "readerTitle": "System-First Thinking: Managed",
        "heading": "Your current condition",
        "paragraphs": [
          "Your System-First Thinking condition is **Managed.** You are beginning to recognize that performance is shaped by more than individual effort. You may use process reviews, root-cause conversations, operating measures, or cross-functional discussions to understand why a result occurred.",
          "You can see that certain failures are connected to the way work is structured. However, this perspective may be applied mainly after a problem has escalated or within the boundaries of your own function. The wider value stream, the assumptions guiding the work, and the effects on connected teams or clients may not yet be consistently visible.",
          "You may also recognize limiting paradigms without having a dependable method for challenging them. Long-standing beliefs can continue to shape decisions simply because they are familiar, accepted, or difficult to question across organizational boundaries. Your system perspective is still activated in isolated diagnostic moments rather than applied through a consistent end-to-end view of how the work actually performs."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "You can recognize the pattern without yet changing it",
        "paragraphs": [
          "At a Managed condition, leaders can often describe the system factors behind a problem. The difficulty is that each part of the system is still managed separately. One team improves its process, another adjusts its priorities, and a third carries the consequence when the handoff between them remains unclear.",
          "This creates a costly middle ground. You can see that the issue is larger than one person, yet you may still rely on meetings, escalation, and individual leader intervention to reconnect the work. The organization becomes dependent on people who understand the whole picture because the system itself does not make that picture clear enough.",
          "The cost becomes visible in leadership capacity. The same leaders spend their time translating across functions, settling competing priorities, and resolving conflicts that the operating design should have anticipated. Their attention is consumed by integration work that should be built into the way the work flows.",
          "You have identified the need for systems thinking. The constraint is that the system has not yet been examined as one connected reality."
        ]
      },
      "page3": {
        "readerTitle": "Begin by following one value stream",
        "heading": "See the work from end to end",
        "paragraphs": [
          "Choose one outcome that requires more than one team, role, or function to achieve. Follow the work from the moment a need is identified to the moment the intended client, colleague, or stakeholder receives the result. Make visible each handoff, decision, information requirement, delay, and point where people must interpret or compensate.",
          "The purpose is to replace a collection of local views with one shared view of the work. Ask each contributor the same questions: what are you expected to provide, what do you need from the prior step, what decision do you make, and what prevents the next person from performing effectively?",
          "Use what you learn to identify the first condition that crosses a boundary and creates avoidable friction. Do not attempt to redesign the full value stream at once. Establish a shared understanding of where the work is being constrained.",
          "Your objective is to make the end-to-end system visible enough that leadership no longer needs to carry the connections personally."
        ]
      }
    },
    "Deliberate": {
      "page1": {
        "readerTitle": "System-First Thinking: Deliberate",
        "heading": "Your current condition",
        "paragraphs": [
          "Your System-First Thinking condition is **Deliberate.** You routinely look beyond the immediate issue to understand the conditions shaping performance. You think in terms of value streams, connected decisions, handoffs, information flow, and the structures that influence how people behave and perform.",
          "You are prepared to challenge strongly held paradigms when the evidence shows that they no longer serve the work. You engage people across the flow before reaching conclusions, and you recognize that a local improvement can create an unintended consequence elsewhere if the full system is not considered.",
          "The remaining challenge is to make this approach less dependent on your own perspective. You may be able to see the broader system clearly, but other leaders and teams may still make decisions through local objectives, familiar assumptions, or separate measures of success.",
          "At this condition, you are practicing systems thinking with intent. The next step is to make it a shared discipline across the work you influence."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "One systems thinker cannot carry the whole system",
        "paragraphs": [
          "At a Deliberate condition, you can often see the broader pattern before others do. That is an advantage, but it can also create dependency. When people wait for you to connect the dots, challenge the assumption, or identify the downstream consequence, the system remains dependent on your individual capacity rather than becoming stronger in its own right.",
          "The risk is most visible when local measures improve while the wider outcome does not. A function can meet its efficiency target by passing incomplete work to another team. A team can protect its own capacity by delaying a decision that creates a client failure later in the flow. Each local choice can appear reasonable until the full system is considered.",
          "If this pattern continues, you become the translator between competing truths. You carry the responsibility of showing how one team’s decision affects another team’s result. That is valuable leadership work, but it cannot be the only mechanism preventing the organization from optimizing itself into a weaker whole.",
          "The consequence is limited scale: the system improves when you are present to see it, and reverts to local thinking when you are not."
        ]
      },
      "page3": {
        "readerTitle": "Begin by making one assumption discussable",
        "heading": "Challenge the rule beneath the work",
        "paragraphs": [
          "Choose one strongly held belief, rule, or operating assumption that repeatedly shapes decisions in the work you influence. It may be a statement such as, “That team owns that issue,” “This is simply how the process works,” or “We cannot involve the client until the end.”",
          "Bring the people affected by that assumption into one focused discussion. Make the assumption visible. Then test it against the end-to-end evidence: what outcome does it produce, who benefits, who compensates, which handoffs does it shape, and does it still serve the value stream as a whole?",
          "The purpose is not to challenge people for the sake of disruption. It is to create a disciplined way to examine the paradigms that remain invisible precisely because they have become familiar.",
          "Your next goal is to help the people around you see that the rules guiding the work are design choices—and can therefore be redesigned when the evidence requires it."
        ]
      }
    },
    "Integrated": {
      "page1": {
        "readerTitle": "System-First Thinking: Integrated",
        "heading": "Your current condition",
        "paragraphs": [
          "Your System-First Thinking condition is **Integrated.** You have embedded a broader view of performance into the way you lead. Decisions are increasingly considered through their end-to-end effects. People are more likely to examine the information, structures, handoffs, priorities, and assumptions shaping an outcome before assigning cause or selecting a response.",
          "You have helped create shared language for discussing performance as a system. Cross-functional leaders can see how their decisions influence connected teams, clients, and value streams. Limiting paradigms are more open to examination, and improvements are less likely to be treated as isolated projects.",
          "This condition creates stronger integration, better decisions, and more disciplined use of leadership attention. The remaining responsibility is to ensure that the system perspective continues to evolve as the business, its people, and the conditions of work change.",
          "You have connected systems thinking to everyday leadership. The next challenge is to prevent a strong system view from becoming a familiar and incomplete one."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "A strong system view can still become fixed",
        "paragraphs": [
          "An Integrated systems perspective is a significant performance advantage. Its risk is assuming that the system you understand today is the system you will be operating tomorrow. New client expectations, changing roles, growth, technology, or external pressure can alter the work faster than established assumptions and measures are revised.",
          "Consider a cross-functional process that has performed well for years. Leaders know the handoffs, the decision rules, and the usual sources of delay. Then a change in demand introduces a new exception that falls between existing roles. Each team follows its established process correctly, yet the client or internal stakeholder experiences a failure because the system was designed for a condition that no longer exists.",
          "The cost is being confident in the system that produced yesterday’s performance while becoming late to the conditions that will shape tomorrow’s. A strong operating model can continue producing reliable results in familiar conditions while becoming slow to recognize when the conditions themselves have changed.",
          "The responsibility at this level is to keep the system view open to evidence that challenges its current design."
        ]
      },
      "page3": {
        "readerTitle": "Begin by reviewing the system before the failure",
        "heading": "Build a discipline of anticipatory diagnosis",
        "paragraphs": [
          "Your next priority is to create a regular leadership practice for examining the conditions that are changing around the work. Review consequential value streams before performance has visibly declined. Ask where new client needs, changes in workload, role transitions, technology, or emerging questions are putting pressure on the current operating design.",
          "Invite people from across the value stream to identify what no longer fits: a decision rule, a handoff, a measure, a source of information, or an assumption that once made sense but now creates friction. Keep the conversation focused on conditions and evidence, rather than on blame or isolated events.",
          "Then decide what must be tested, adapted, or made visible. A small change to the design can prevent a large amount of compensating effort later.",
          "Your objective is a leadership system that identifies its next constraint before that constraint becomes an operational failure."
        ]
      }
    },
    "Architected": {
      "page1": {
        "readerTitle": "System-First Thinking: Architected",
        "heading": "Your current condition",
        "paragraphs": [
          "Your System-First Thinking condition is **Architected.** You consistently see performance as the outcome of systems design. You approach visible results with disciplined curiosity: what conditions produced this outcome, what assumptions are shaping the work, and where does the full value stream reveal a design opportunity?",
          "You have created an environment where people are able to think beyond their local role. Leaders and teams can challenge limiting paradigms, engage across functions, trace end-to-end effects, and diagnose conditions before making judgments about people. The work is increasingly guided by shared understanding rather than by individual heroics or separate interpretations.",
          "At this condition, systems thinking is more than a personal capability. It is becoming part of the organization’s operating discipline. The people you influence are better able to see connections, take personal responsibility for their contribution, and redesign conditions that limit performance.",
          "You have established the intellectual foundation of performance architecture: the capacity to see that outcomes are designed—and to improve the design deliberately."
        ]
      },
      "page2": {
        "readerTitle": "What this condition protects",
        "heading": "You have created clarity. Protect the discipline of challenge.",
        "paragraphs": [
          "An Architected systems perspective protects the organization from a costly default: treating visible outcomes as isolated events and asking people to compensate for conditions they did not create. It helps leaders direct attention toward the design of work, information, decisions, and relationships before failure becomes normalized.",
          "Your stewardship responsibility is to ensure that shared systems thinking does not harden into a new orthodoxy. A mature organization can become proud of its operating model and therefore less willing to see where that model is beginning to constrain the work. The most dangerous paradigm is often the one that was once correct.",
          "Continue to make it safe and expected for people to challenge assumptions with evidence. Protect the difference between disciplined systems thinking and endless analysis. The purpose is to see clearly enough to make better design choices and then act on them.",
          "The standard is not universal agreement. The standard is a shared capacity to reveal structural friction, test the assumptions behind it, and strengthen the system deliberately."
        ]
      },
      "page3": {
        "readerTitle": "Sustain the architecture through shared thinking",
        "heading": "Your leadership priority",
        "paragraphs": [
          "Your next responsibility is to preserve and extend the systems-thinking discipline you have created. Keep significant outcomes connected to the conditions that produced them. Continue to examine work end to end, invite cross-functional perspective, and test the paradigms that shape decisions before they become invisible constraints.",
          "Develop more leaders who can think at the level of the whole system. They do not need to have every answer. They need to be able to ask stronger questions, recognize the difference between a symptom and a condition, and connect local decisions to the performance of the wider value stream.",
          "Maintain a visible practice of learning from the work. When a new pattern emerges, use it to refine the system rather than merely improve the response. When a result is strong, ask which design choices made it possible and whether those choices can be strengthened or shared.",
          "Your objective is to keep making the invisible structure of performance visible, so talent can align around a clearer system and performance can follow by design."
        ]
      }
    }
  },
  "Talent Success": {
    "Reactive": {
      "page1": {
        "readerTitle": "Talent Success: Reactive",
        "heading": "Your current condition",
        "paragraphs": [
          "Talent Success is your ability to create the conditions for individual career success. Career success remains the individual’s personal responsibility. Your responsibility as a leader is to ensure the system makes success visible, connects contribution to opportunity, provides relevant development, and enables people to direct more of their own work and career.",
          "Your current condition is **Reactive.** Development is likely addressed when a performance issue appears, a role becomes vacant, an employee asks for help, or an individual signals that they may leave. Career conversations can occur, but they are irregular, dependent on the individual manager, and disconnected from a clear view of future contribution or opportunity.",
          "People may receive training, advice, or encouragement, yet they cannot easily see what they are building toward, which capabilities matter, or how their current contribution connects to a wider path. Leaders may want people to grow, but the conditions for growth are largely informal and difficult for individuals to navigate on their own.",
          "At this condition, career success depends too heavily on timing, manager availability, and the individual’s ability to find a way forward without a visible system."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Talent is asked to navigate without a map",
        "paragraphs": [
          "When career success is not visible, capable people can work hard without knowing whether their contribution is building toward something meaningful. They receive feedback on current performance, but little clarity about the capabilities, experiences, relationships, or opportunities that would allow them to create a stronger future.",
          "This creates uneven access. Individuals who are confident, well connected, or supported by an exceptional manager may find pathways forward. Others may contribute just as much while remaining unseen, underdeveloped, or unsure of how to translate their work into opportunity. The organization then mistakes a lack of visible ambition for a lack of potential.",
          "The cost reaches beyond retention. People can become focused on protecting their current role because the system gives them no credible view of how growth occurs. Training may be treated as an event. Development becomes something delivered to people rather than something they can use to shape their own contribution.",
          "Without a visible path, talent is left to guess where to place its effort."
        ]
      },
      "page3": {
        "readerTitle": "Begin by making one career path visible",
        "heading": "Your first design commitment",
        "paragraphs": [
          "Choose one role or group of people whose contribution is important to the work you influence. Make the first elements of career success visible: the purpose of the role, the capabilities required to perform it well, the contribution that creates value, and the opportunities that become possible as those capabilities are demonstrated.",
          "Engage the individuals in that role. Ask what success means to them, what they are trying to become capable of, where they see opportunity, and what prevents them from taking greater personal responsibility for their development. Their answers will reveal what the existing environment makes clear and what it leaves invisible.",
          "Do not promise a promotion or prescribe a fixed career path. Create enough clarity for people to see the connection between their current contribution, the capability they can develop, and the opportunities they may be able to pursue.",
          "Your immediate objective is to give one group of people a credible map for directing their own career success."
        ]
      }
    },
    "Managed": {
      "page1": {
        "readerTitle": "Talent Success: Managed",
        "heading": "Your current condition",
        "paragraphs": [
          "Your Talent Success condition is **Managed.** You have established useful people-development practices. Performance conversations, learning programs, mentoring, role descriptions, succession discussions, and career planning may be available. Individuals have more access to guidance than they would in a purely reactive environment.",
          "However, the pieces are often managed separately. Training can sit apart from daily contribution. Career conversations can be disconnected from visible opportunities. Mentoring, education, advising, coaching, and training may exist, but people may not know when each form of support is required or how it helps them become more capable in the work they are responsible for.",
          "You may be providing real support while people remain dependent on their manager to interpret the path, recommend the next step, or open a door. Career success is better supported, but it has not yet become a visible and integrated design requirement.",
          "At this condition, you are managing development. The opportunity is to connect development to contribution, opportunity, and personal responsibility."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "Support exists, but people still wait for permission",
        "paragraphs": [
          "At a Managed condition, your organization may invest in capable people and still fail to create dependable career momentum. Development plans are prepared, training is completed, and managers have meaningful conversations. Yet the individual may not see how any of it changes the contribution they can make or the opportunities they are ready to pursue.",
          "This leaves managers carrying too much of the work. They become the translators of career possibilities, the sponsors of development, and the people who must remember what each individual is trying to build. When a manager changes roles, becomes overloaded, or leaves, the momentum of several people’s development can disappear with them.",
          "The hidden cost is passive talent. People with potential wait for the next review, the next course, the next opening, or the next manager conversation rather than using a visible system to direct their own growth. Your investment creates activity, but not always the self-direction required for a stronger talent environment.",
          "The constraint is not a lack of care. It is the absence of a connected pathway from contribution to opportunity."
        ]
      },
      "page3": {
        "readerTitle": "Begin by connecting contribution to opportunity",
        "heading": "Turn development into a visible pathway",
        "paragraphs": [
          "Choose one role, capability, or opportunity that matters to the future of the work you influence. Make the connection explicit: what contribution must be demonstrated, which capabilities make that contribution possible, what support is available, and which future opportunities that demonstrated capability can open.",
          "Create a simple shared view that the individual and leader can use together. Use the **Contribution → Capability → Opportunity Framework** to make the development path practical and visible:",
          "> **Contribution:** What am I responsible for now?  \n> **Capability:** What capability am I building?  \n> **Opportunity:** What opportunity could that capability make possible?",
          "Use this conversation to distinguish between personal responsibility and leadership support. The individual owns their career direction and demonstrated contribution. You are responsible for making the operating conditions, development options, and decision criteria visible enough for that responsibility to be meaningful.",
          "Your objective is to help people move from waiting for development to directing their own next contribution."
        ]
      }
    },
    "Deliberate": {
      "page1": {
        "readerTitle": "Talent Success: Deliberate",
        "heading": "Your current condition",
        "paragraphs": [
          "Your Talent Success condition is **Deliberate.** You treat individual career success as a design requirement rather than a private conversation or an annual review activity. You are making career success more visible, connecting individual contribution to opportunity, and providing structured support through mentoring, education, advising, coaching, and training.",
          "You are also creating conditions for people to take greater personal responsibility. Individuals have a clearer understanding of the work they own, the capabilities they need to develop, and the evidence through which they can demonstrate readiness for broader contribution. Development is becoming more connected to real work rather than remaining separate from it.",
          "The remaining challenge is consistency. Some leaders, roles, or teams may provide a strong development environment while others remain dependent on individual manager capability or informal access to opportunity. The components of a Talent Success system are visible, but they are not yet fully integrated into how the wider organization operates.",
          "At this condition, you have moved beyond good intentions. The next priority is to make career success increasingly self-directed and reliable across the work you influence."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "A well-designed support system can still create dependency",
        "paragraphs": [
          "At a Deliberate condition, you are providing more of what people need to grow. The risk is that individuals can become recipients of a strong development system rather than active designers of their own career success. They receive mentoring, coaching, training, and feedback, but still look to a leader to determine what matters most or what opportunity they should pursue next.",
          "This can make development appear stronger than it is. Participation rises. Learning activity is visible. Yet the test is whether people can use that support to make better decisions about their work, demonstrate new capability, and increase the value of their contribution without waiting for someone else to direct each step.",
          "The gap becomes visible when an unexpected opportunity appears or a role changes. People may have completed the development available to them but remain unprepared to articulate their capability, adapt their contribution, or pursue the opportunity with confidence because the system has not required enough self-direction.",
          "The consequence is supported talent that is still not fully mobilized."
        ]
      },
      "page3": {
        "readerTitle": "Begin by verifying applied capability",
        "heading": "Shift the proof from participation to contribution",
        "paragraphs": [
          "Choose one development pathway that is already in place. Identify the capability it is intended to build and the real contribution through which that capability should become visible. Then ask the individual to demonstrate the application in the work—not simply confirm completion of training, attendance, or a conversation.",
          "Make the evidence specific. It may be the ability to lead a decision, improve a client interaction, complete a more complex task independently, mentor another person, resolve a recurring issue, or contribute to a new opportunity. The evidence should show that learning has become usable capability.",
          "Review that evidence with the individual. Ask what they learned about their own strengths, what they need to develop next, and which opportunity they are now prepared to pursue. This returns ownership to the person whose career is being developed.",
          "Your next goal is to make demonstrated contribution—not participation—the bridge between development and opportunity."
        ]
      }
    },
    "Integrated": {
      "page1": {
        "readerTitle": "Talent Success: Integrated",
        "heading": "Your current condition",
        "paragraphs": [
          "Your Talent Success condition is **Integrated.** You have connected career success to the way work, contribution, learning, and opportunity move through the organization. Individuals can see how their role creates value, what capability they need to develop, how they can access support, and what evidence demonstrates readiness for greater responsibility or a different opportunity.",
          "Mentoring, education, advising, coaching, and training are increasingly coordinated around the needs of the individual and the work. People are supported to become more self-directed: they can identify their development needs, seek relevant support, apply learning, and take personal responsibility for the contribution they make.",
          "You have also reduced the dependence on a single manager or informal network. Leaders have clearer ways to make career success visible and connect it to the systems that shape performance. Talent development is beginning to strengthen both individual potential and the capability of the wider organization.",
          "This condition creates a more reliable talent environment. The next responsibility is to ensure that integration remains responsive as people, work, and opportunities change."
        ]
      },
      "page2": {
        "readerTitle": "What this condition is costing",
        "heading": "An integrated pathway can still become a managed pathway",
        "paragraphs": [
          "An Integrated Talent Success environment provides people with clarity, support, and credible paths forward. The risk is that a strong pathway becomes too defined by the organization’s current roles, current capability needs, or existing ideas about what progression should look like.",
          "Consider what happens when a capable individual sees an emerging opportunity that does not fit the expected path. They may have the contribution, judgment, and motivation to create value in a new way, but the visible pathway does not recognize the possibility. A system designed to make careers clearer can unintentionally narrow the forms of success it is prepared to see.",
          "Another risk is assuming that support automatically creates self-direction. People can be well served by mentoring, learning, and clear career information while still relying on leaders to decide when they are ready, which opportunity is appropriate, or how their capabilities should be used.",
          "The cost is lost initiative. You have built a strong path, but must ensure that it remains a platform for people to direct their contribution rather than a route they can only follow."
        ]
      },
      "page3": {
        "readerTitle": "Begin by designing for self-direction",
        "heading": "Test whether the system creates independent capability",
        "paragraphs": [
          "Choose one group of individuals who have access to an established development pathway. Ask them to show how they would identify their next capability requirement, locate the right support, demonstrate the capability in their work, and pursue a relevant opportunity without waiting for a manager to direct every step.",
          "Listen carefully to where they hesitate. If someone can name a development program but cannot explain the contribution it will enable, the system is still managing development rather than enabling self-direction. If people can describe the programs available but cannot explain how to use them to shape their next contribution—or can act only after a manager identifies the opportunity—the pathway remains more managed than architected.",
          "Use what you learn to remove unnecessary dependency. Clarify where people can make decisions for themselves, how they can request or create development opportunities, and what evidence allows them to demonstrate readiness.",
          "Your objective is a talent environment where people are equipped to direct their own growth while remaining connected to the performance needs of the work."
        ]
      }
    },
    "Architected": {
      "page1": {
        "readerTitle": "Talent Success: Architected",
        "heading": "Your current condition",
        "paragraphs": [
          "Your Talent Success condition is **Architected.** You have created a visible, connected environment in which individual career success is treated as a design requirement. People can understand the contribution they are responsible for, the capabilities that increase their value, the support available to them, and the opportunities that demonstrated capability can create.",
          "Career success remains personal responsibility. Your leadership ensures that people are not asked to carry that responsibility without the information, development access, or decision clarity required to act. Mentoring, education, advising, coaching, and training are available as connected forms of support, applied to the needs of the individual and verified through real contribution.",
          "At this condition, people are increasingly able to operate with self-direction. They can recognize what they need to learn, seek support, apply capability in the work, and pursue opportunities with greater independence. The talent system does not promise an outcome; it makes career success more visible, possible, and deliberate.",
          "You have established a talent environment where individual growth and organizational performance strengthen each other."
        ]
      },
      "page2": {
        "readerTitle": "What this condition protects",
        "heading": "You have made career success visible. Protect personal responsibility.",
        "paragraphs": [
          "An Architected Talent Success environment protects people from hidden expectations, informal access to opportunity, and development that is disconnected from the work where capability must be demonstrated. It also protects the organization from depending on a small number of managers or exceptional individuals to identify potential, open doors, and carry others’ career progress personally.",
          "Your stewardship responsibility is to ensure that support does not become dependency. Clear pathways, trusted advice, and relevant development should give people more capacity to direct their own contribution—not create a system where progress depends on someone else deciding what they are ready for.",
          "As work and opportunity evolve, continue to ask whose potential is not yet visible, which capabilities are becoming more important, and where an individual needs a clearer path to demonstrate readiness. The strongest talent environment does not merely develop people for existing roles. It helps people prepare to contribute to work that is still emerging.",
          "The standard is a system that makes career success more deliberate while keeping its ownership where it belongs: with the individual."
        ]
      },
      "page3": {
        "readerTitle": "Sustain Talent Success through stewardship",
        "heading": "Your leadership priority",
        "paragraphs": [
          "Your next responsibility is to preserve and extend the conditions you have created. Keep career success visible. Continue connecting contribution to opportunity. Ensure that mentoring, education, advising, coaching, and training remain relevant to the capabilities people need to demonstrate in the work.",
          "Develop leaders who can support personal responsibility without taking it away. Their role is to make expectations, evidence, development options, and opportunities clear enough for people to direct their own growth. Their role is not to own another person’s career or decide every next step for them.",
          "Keep the talent system open to new forms of contribution. Listen for emerging capability needs, changing individual aspirations, and opportunities that do not fit established pathways. Use that evidence to strengthen the conditions through which people can grow and create value.",
          "Your objective is to make career success visible enough that people can own it fully—developing capability, directing their contribution, and pursuing opportunity with clarity."
        ]
      }
    }
  }
};


  function getLeadName() {
    try {
      var result = window.pageData.props.data.result;
      return { first: result.first_name || "", last: result.last_name || "" };
    } catch (e) {
      return null;
    }
  }

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

  function mdParagraph(text) {
    var parts = String(text).split(/\*\*(.+?)\*\*/g);
    return parts.map(function (part, i) {
      return i % 2 === 1 ? '<strong>' + esc(part) + '</strong>' : esc(part);
    }).join('');
  }

  function copyBlock(paragraphs) {
    return paragraphs.map(function (p) { return '<p class="tag-pa-copy">' + mdParagraph(p) + '</p>'; }).join('');
  }

  function conditionContent(domain) {
    var byDomain = CONTENT[domain.name];
    return (byDomain && byDomain[domain.condition]) || null;
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
    var c = conditionContent(domain);
    var body = c ? copyBlock(c.page1.paragraphs) : '<p class="tag-pa-copy">' + esc(domain.current) + '</p>';
    return '<div class="tag-pa-current"><div><h3>Your current condition</h3><strong>' + esc(domain.condition) + '</strong></div>' + body + '</div>';
  }

  function domainPage(domain, pageNumber) {
    return page("tag-pa-may-overflow", header(false) +
      '<div class="tag-pa-kicker-row"><p class="tag-pa-kicker">Priority Domain ' + domain.order + '</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>' +
      '<div class="tag-pa-two"><div><h1 class="tag-pa-title">' + esc(domain.short) + '<br><span class="tag-pa-em">' + esc(domain.accent) + '</span></h1><p class="tag-pa-copy">' + esc(domain.intro) + '</p><div class="tag-pa-purpose"><h3>' + esc(domain.purposeTitle) + '</h3><p class="tag-pa-copy" style="margin-bottom:0">' + esc(domain.purpose) + '</p></div></div>' +
      '<aside><div class="tag-pa-score-card"><p class="tag-pa-score-label">Your score</p><p class="tag-pa-score">' + domain.score + '</p><p class="tag-pa-condition">' + esc(domain.condition) + '</p></div>' + badgeList(domain.practiceTitle, domain.practices) + '</aside></div>' +
      currentBand(domain), pageNumber);
  }

  function consequencePage(domain, pageNumber, positive) {
    var c = conditionContent(domain);
    var page2 = c && c.page2;
    var kicker = page2 ? page2.readerTitle : (positive ? "What must remain true" : "What this condition costs");
    var headline = page2 ? esc(page2.heading) : esc(domain.costTitle);
    var paragraphs = page2 ? page2.paragraphs : [domain.costIntro];
    var bodyParas = paragraphs.length > 1 ? paragraphs.slice(0, -1) : paragraphs;
    var closing = paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : domain.consequence;
    return page("dark", header(true, '<span class="tag-pa-brand">' + esc(domain.name.toUpperCase()) + '</span> · ' + (positive ? "WHAT THIS PROTECTS" : "CONSEQUENCES")) +
      '<div class="tag-pa-scoreline"><p class="tag-pa-kicker">' + esc(kicker) + '</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>' +
      '<h1 class="tag-pa-display">' + headline + '</h1>' +
      copyBlock(bodyParas) +
      '<div class="tag-pa-callout"><h3>' + (positive ? "What must remain true" : "The consequence") + '</h3><p>' + mdParagraph(closing) + '</p></div>', pageNumber);
  }

  function beginPage(domain, pageNumber) {
    var c = conditionContent(domain);
    var page3 = c && c.page3;
    var kicker = page3 ? page3.readerTitle : "Where to begin";
    var headline = page3 ? esc(page3.heading) : esc(domain.beginTitle);
    var paragraphs = page3 ? page3.paragraphs : [domain.beginIntro];
    var bodyParas = paragraphs.length > 1 ? paragraphs.slice(0, -1) : paragraphs;
    var closing = paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : domain.objective;
    return page("mint", header(false, '<span class="tag-pa-brand">' + esc(domain.name.toUpperCase()) + '</span> · BEGIN HERE') +
      '<div class="tag-pa-scoreline"><p class="tag-pa-kicker">' + esc(kicker) + '</p><p class="tag-pa-eyebrow">YOUR SCORE: <b>' + domain.score + ' · ' + domain.condition.toUpperCase() + '</b></p></div>' +
      '<h1 class="tag-pa-display">' + headline + '</h1>' +
      copyBlock(bodyParas) +
      '<div class="tag-pa-callout"><h3>Your first objective</h3><p>' + mdParagraph(closing) + '</p></div>', pageNumber);
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

  function resultsPage(pageNumber) {
    return page("", header(false) +
      '<p class="tag-pa-kicker">Your results</p><h1 class="tag-pa-title tag-pa-title-results">Your Current Performance<br>Architecture Condition</h1>' +
      '<p class="tag-pa-copy">Your five domains are ordered from the limiting condition requiring your attention first to the strongest area of your current practice. The number inside each segment shows where you currently stand.</p>' +
      '<div class="tag-pa-results-grid">' + donutSvg(domains) + '</div>' +
      '<div class="tag-pa-priority-list">' + domains.map(function (d) {
        return '<article class="tag-pa-road-row' + (d.flag ? " flag" : "") + '"><span class="tag-pa-road-num">' + d.order + '</span><div><h4>' + esc(d.name) + '</h4><p class="tag-pa-road-next">' + esc(d.intro) + '</p></div><div class="tag-pa-road-score-wrap"><span class="tag-pa-road-score">' + d.score + '</span><span class="tag-pa-road-bar"></span></div><p class="tag-pa-road-condition">' + esc(d.condition.toUpperCase()) + '</p></article>';
      }).join("") + '</div>', pageNumber);
  }

  function roadmapPage() {
    return page("", header(false) +
      '<p class="tag-pa-kicker">Your integrated roadmap</p><h1 class="tag-pa-title">Your Performance Architecture <span class="tag-pa-em">Roadmap</span></h1>' +
      '<p class="tag-pa-copy">The five conditions in this report are connected. Do not attempt to improve them all at once. Begin where the architecture is most constrained, then strengthen the conditions that allow performance to become deliberate.</p>' +
      '<div class="tag-pa-roadmap" style="border-top:2px solid var(--tag-ink)">' + domains.map(function (d) {
        return '<article class="tag-pa-road-row"><span class="tag-pa-road-num">' + d.order + '</span><h4>' + esc(d.name) + '</h4><span class="tag-pa-road-score">' + d.score + '</span><p class="tag-pa-road-next">' + esc(d.condition + " · " + d.next) + '</p></article>';
      }).join("") + '</div>' +
      '<div class="tag-pa-callout ink"><h3>Begin here</h3><p>' + highlight("Your first design priority is " + domains[0].name + ". Strengthening this condition gives the other four domains a stronger place to operate from.", domains[0].name + ".", "tag-pa-orange") + '</p></div>', 18);
  }

  function commitmentPage() {
    return page("mint", header(false) +
      '<p class="tag-pa-kicker">Turn insight into action</p><h1 class="tag-pa-title">Your First 90-Day <span class="tag-pa-em">Design Commitment</span></h1>' +
      '<p class="tag-pa-copy">The report becomes valuable only when one limiting condition is turned into structured work. Use this page to establish the first decision and the first review point.</p>' +
      '<div class="tag-pa-fields">' +
      '<div class="tag-pa-field" style="border-top-color:#0bb996"><h4>Priority domain</h4><p>' + esc(domains[0].name) + '</p></div>' +
      '<div class="tag-pa-field" style="border-top-color:#8ac43f"><h4>Current condition</h4><p>' + esc(domains[0].condition) + ' · ' + domains[0].score + '</p></div>' +
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

  var leadName = getLeadName();
  var pages = [];
  pages.push(page("tag-pa-cover", header(false) +
    '<div class="tag-pa-cover-stripes"><span></span><span></span><span></span></div>' +
    '<div class="tag-pa-cover-dot"></div>' +
    '<h1 class="tag-pa-cover-name"><span>' + esc(leadName && leadName.first ? leadName.first : "[First Name]") + '</span><span>' + esc(leadName && leadName.last ? leadName.last : "[Last Name]") + '</span></h1>' +
    '<hr class="tag-pa-cover-rule" />' +
    '<h2 class="tag-pa-display">Your Performance<br>Architecture Roadmap</h2>' +
    '<p class="tag-pa-copy">A score-responsive report that makes the conditions shaping the work you influence visible - and establishes where to focus next.</p>' +
    '<div class="tag-pa-ribbons"><span></span><span></span><span></span><span></span></div>' +
    '<p class="tag-pa-cover-tag">TAG · You’re It</p>', 1));
  pages.push(resultsPage(2));
  domains.forEach(function (domain, index) {
    pages.push(domainPage(domain, 3 + index * 3));
    pages.push(consequencePage(domain, 4 + index * 3, domain.condition === "Architected"));
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
