/* course-data.js — Cell & Molecular Biology of Aging (BIO 41000, Summer 2026)
   Prof. Stav Kemeny — CCNY/CUNY
   Built from: L1 Theories of Aging (24 slides), L2 DNA Damage (25 slides),
   the Facts on Aging Quiz (Breytspraak & Badura 2015), and the
   Evidence vs. Hype in-class activity. */

window.META = {
  course: "BIO 41000 — Cell & Molecular Biology of Aging",
  courseCode: "BIO 41000 · Cell Senescence",
  brandTitle: "Biology of Aging",
  examLabel: "Exam 1 (Meetings 1–7)",
  examDate: "Mon June 29",
  logo: "🧬",
  storeKey: "bio41000_aging_exam1_v3",
  tip: "<b>Exam 1 = meetings 1–7</b> (Mon 6/29, 75 min, 35–45 MCQ + short answer, not cumulative): 1) Theories of aging, 2) Genomic instability & DNA repair, 3) Telomeres & senescence, 4) Epigenetics, 5) Proteostasis, 6) Mitochondria & oxidative stress, 7) Nutrient sensing. The professor says exam questions test <i>understanding & logic, not memorization</i>, and resemble the in-class & homework questions.<br><b>How to use this:</b> work through <b>Learn</b> for each topic (every real slide is embedded), then the per-topic quizzes; missed questions collect in the <b>Wrong-answer bank</b>. Recurring theme: <i>evidence vs. hype</i> — for any claim ask human/animal/cell data, correlation vs. causation, and who's selling it."
};

window.COURSE = [
 /* ============================ LECTURE 1 ============================ */
 {
  id:"L1", icon:"🔬", short:"L1 · Theories of Aging",
  title:"Lecture 1 — Theories of Aging & the Hallmarks",
  blurb:"Why we age, the free-radical theory and why antioxidant supplements failed, and the ten hallmarks of aging (molecular, cellular, systemic).",
  objectives:[
    "Explain the free-radical/oxidative theory of aging (FRTA) and why antioxidant supplementation has NOT extended human healthspan",
    "Define hormesis and explain why mild/intermittent stress can extend lifespan while antioxidants may not",
    "List and categorize the ten hallmarks of aging into molecular, cellular, and systemic levels",
    "Describe each molecular hallmark: genomic instability, telomere shortening, epigenetic alteration, loss of proteostasis, compromised autophagy, mitochondrial dysfunction",
    "Describe each cellular hallmark: cellular senescence (+SASP), stem cell exhaustion, altered intercellular communication",
    "Explain how aging roughly doubles the risk of chronic disease about every 8 years",
    "Evaluate an aging/anti-aging claim using evidence-quality criteria (correlation vs. causation, study type, sample size, conflict of interest)"
  ],
  topics:[
   {
    id:"L1T1", title:"Why study aging + the Free-Radical Theory",
    sub:"Aging as the master risk factor, and the rise & fall of antioxidant supplements (slides 1, 4–8).",
    slides:[
     {h:"The science of aging is the science of life itself", imgs:[
        {src:"slides/L1/slide-01.jpg", cap:"L1 · Slide 1 — Course title"},
        {src:"slides/L1/slide-05.jpg", cap:"L1 · Slide 5"}
      ], html:`
       <p class="lead">Welcome to <span class="kw">Cell &amp; Molecular Biology of Aging</span> (BIO 41000, Prof. Kemeny). The framing question for the whole course: <i>what changes inside cells and tissues as we get older, and which claims about slowing or reversing that are actually supported by evidence?</i></p>
       <p>Aging is studied at three levels you'll see again and again: <span class="kw-2">molecular</span>, <span class="kw-2">cellular</span>, and <span class="kw-2">systemic</span>.</p>`},
     {h:"Aging is the master risk factor for chronic disease", imgs:[
        {src:"slides/L1/slide-04.jpg", cap:"L1 · Slide 4 — Risk doubles ~every 8 years"}
      ], html:`
       <p class="lead">For most chronic diseases, <span class="warn">risk roughly doubles every ~8 years of age</span>, and there are genes responsible for that susceptibility.</p>
       <ul>
         <li><b>CHF</b> = congestive heart failure</li>
         <li><b>MI</b> = myocardial infarction (heart attack)</li>
         <li><b>COPD</b> = chronic obstructive pulmonary disease</li>
       </ul>
       <p>Plotted as log incidence vs. age, cancer, stroke, dementia, diabetes, COPD and heart disease all climb steeply with age — which is why understanding aging itself is a way to address many diseases at once.</p>
       <div class="callout key">Exam-friendly number: chronic-disease risk ≈ <b>doubles every 8 years</b> with age.</div>`},
     {h:"The Free-Radical Theory of Aging (FRTA)", imgs:[
        {src:"slides/L1/slide-06.jpg", cap:"L1 · Slide 6 — Antioxidant Vitamins & Ageing (Harman's FRTA)"}
      ], html:`
       <p class="lead">The <span class="kw">free-radical theory of aging (FRTA)</span>, proposed by <span class="kw">Denham Harman in the 1950s</span>, says aerobic organisms age because of <span class="kw-2">reactive oxygen species (ROS)</span> — free radicals produced by normal metabolism that accumulate and damage cells over time.</p>
       <p>The "logical" prediction from FRTA: take <span class="kw-2">antioxidant supplements</span> to neutralize radicals by electron donation, and you should slow aging and prevent disease. <span class="warn">This prediction largely failed</span> — the chapter's own abstract highlights the <u>inability</u> of antioxidant supplementation to improve health and longevity.</p>`},
     {h:"The evidence: antioxidant supplements didn't help (and may harm)", imgs:[
        {src:"slides/L1/slide-07.jpg", cap:"L1 · Slide 7 — JAMA meta-analysis"}
      ], html:`
       <p class="lead">A landmark <span class="kw">JAMA systematic review &amp; meta-analysis</span> (Bjelakovic et al., 2007) pooled 47 of the most rigorous antioxidant-supplement trials (literature 1977–2006).</p>
       <p>Supplements tested: <span class="kw-2">beta-carotene, vitamin A, vitamin C, vitamin E, and/or selenium</span>. The striking result: supplement users showed <span class="warn">increased mortality</span> — not the protection FRTA predicted.</p>
       <div class="callout key">Classic "evidence vs. hype" case: a plausible mechanism (ROS → damage) does <b>not</b> guarantee the intervention works. The best human evidence (large RCT meta-analysis) found antioxidant supplements <b>increased</b> mortality.</div>`},
     {h:"Hormesis — why a little stress can extend lifespan", imgs:[
        {src:"slides/L1/slide-08.jpg", cap:"L1 · Slide 8 — Stress, ROS & lifespan"}
      ], html:`
       <p class="lead">Why might antioxidants fail while exercise and caloric restriction help? Because <span class="kw">ROS are also signals</span>, not just poison. The dose and pattern of stress matter.</p>
       <table class="dt">
        <tr><th>Condition</th><th>Effect</th></tr>
        <tr><td><b>Synthetic antioxidants</b></td><td>↓ ROS → ↓ autophagy, ↓ removal of misfolded proteins, ↓ proteostasis → can ↓ lifespan</td></tr>
        <tr><td><b>Severe stress</b></td><td>↑↑ ROS → necrosis / apoptosis / cell death → ↓ lifespan</td></tr>
        <tr><td><b>Moderate / intermittent stress</b> (CRM, HM)</td><td>mild ↑ ROS → ↑ autophagy, ↑ proteostasis → ↑ lifespan</td></tr>
       </table>
       <p>This is <span class="kw-2">hormesis</span>: a mild, intermittent stressor triggers protective responses. <b>CRM</b> = caloric-restriction mimetics; <b>HM</b> = hormesis mimetics; <b>ROS</b> = reactive oxygen species.</p>
       <div class="callout tip">Hormesis explains the U-shaped curve: too little stress (over-suppressed ROS) <i>and</i> too much stress both shorten lifespan; a moderate amount extends it.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Who proposed the free-radical theory of aging, and in what decade?", opts:["Leonard Hayflick, 1960s","Denham Harman, 1950s","Elizabeth Blackburn, 1980s","August Weismann, 1880s"], a:1,
      exp:"Denham Harman proposed the free-radical theory of aging (FRTA) in the 1950s."},
     {type:"mcq", q:"What did the large JAMA meta-analysis of antioxidant supplement trials find?", opts:["Supplements roughly doubled lifespan","Supplements had no measurable effect at all","Supplement users showed INCREASED mortality","Only vitamin C was protective"], a:2,
      exp:"Pooling the most rigorous trials, antioxidant supplement users showed increased mortality — the opposite of the FRTA prediction."},
     {type:"tf", q:"Because reactive oxygen species damage cells, taking antioxidant supplements is a proven way to extend human lifespan.", a:false,
      exp:"False. A plausible mechanism is not proof. The best human evidence shows antioxidant supplements do not extend lifespan and may increase mortality."},
     {type:"mcq", q:"Hormesis refers to the idea that:", opts:["All stress is harmful and shortens life","Mild/intermittent stress triggers protective responses that can extend lifespan","Antioxidants are the strongest anti-aging intervention","Aging is genetically programmed to a fixed clock"], a:1,
      exp:"Hormesis = a mild, intermittent stressor (e.g., exercise, caloric restriction) activates protective pathways (autophagy, proteostasis) and can extend lifespan."},
     {type:"mcq", q:"Roughly how often does the risk of most chronic diseases double with age?", opts:["Every 2 years","Every 8 years","Every 25 years","It stays flat until 80"], a:1,
      exp:"Chronic-disease risk roughly doubles about every 8 years of age."},
     {type:"short", q:"Explain why antioxidant supplements might fail to extend lifespan even though ROS damage cells. Use the word 'hormesis'.",
      model:"ROS are not only damaging — they also act as signals that trigger protective responses like autophagy and improved proteostasis (hormesis). Blunting all ROS with antioxidant supplements can suppress these beneficial adaptive responses, so supplements fail to extend (and may shorten) lifespan, whereas moderate intermittent stress raises ROS just enough to be protective.",
      pts:["ROS also act as protective signals","Hormesis = mild stress triggers protection (autophagy/proteostasis)","Suppressing all ROS removes the benefit","Human trials showed no benefit / increased mortality"]},
     {type:"mcq", q:"Which of these is an example of a hormetic (mildly stressful, life-extending) intervention rather than a failed one?", opts:["High-dose vitamin E supplements","Beta-carotene supplements","Caloric restriction / exercise","Selenium megadoses"], a:2,
      exp:"Caloric restriction and exercise are mild intermittent stressors (hormesis) that activate protective pathways. The antioxidant megadoses are the interventions that failed."},
     {type:"tf", q:"A plausible biological mechanism (ROS damage cells) is sufficient proof that an intervention based on it (antioxidant pills) will work in people.", a:false,
      exp:"False — mechanism ≠ proof. You still need rigorous human evidence, which in this case showed the supplements did not help and may harm."},
     {type:"mcq", q:"In the hormesis curve relating stress to lifespan, which pattern fits?", opts:["More stress always means longer life","Less stress always means longer life","Both too little and too much stress shorten life; moderate stress extends it","Stress has no effect on lifespan"], a:2,
      exp:"It's U-shaped: over-suppressed ROS and severe stress both shorten life; a moderate, intermittent dose extends it."},
     {type:"mcq", q:"Which antioxidants were among those tested in the JAMA meta-analysis that found increased mortality?", opts:["Beta-carotene, vitamin A, vitamin C, vitamin E, selenium","Only fish oil and magnesium","Metformin and rapamycin","NAD+ and resveratrol"], a:0,
      exp:"The trials tested beta-carotene, vitamin A, vitamin C, vitamin E, and/or selenium."}
    ]
   },
   {
    id:"L1T2", title:"The Hallmarks of Aging — the framework",
    sub:"The organizing scheme of the whole field: molecular, cellular, systemic (slides 10, 21, 22).",
    slides:[
     {h:"Three levels of hallmarks", imgs:[
        {src:"slides/L1/slide-10.jpg", cap:"L1 · Slide 10 — Hallmarks overview"}
      ], html:`
       <p class="lead">The hallmarks of aging are grouped into three levels:</p>
       <ul>
        <li><span class="kw">Molecular hallmarks</span> — what goes wrong inside the molecules/genome</li>
        <li><span class="kw">Cellular hallmarks</span> — what goes wrong with whole cells</li>
        <li><span class="kw">Systemic alterations</span> — body/tissue-wide changes (e.g., deregulated nutrient sensing)</li>
       </ul>`},
     {h:"The ten hallmarks of aging — the master list", imgs:[
        {src:"slides/L1/slide-22.jpg", cap:"L1 · Slide 22 — The ten hallmarks (list)"},
        {src:"slides/L1/slide-21.jpg", cap:"L1 · Slide 21 — The ten hallmarks (figure)"}
      ], html:`
       <p class="lead">Memorize this list and which level each belongs to — it's the backbone of the course.</p>
       <table class="dt">
        <tr><th>Level</th><th>Hallmarks</th></tr>
        <tr><td><b>Molecular</b></td><td>genomic instability · telomere dysfunction · epigenetic alterations · loss of proteostasis · compromised autophagy · mitochondrial dysfunction</td></tr>
        <tr><td><b>Cellular</b></td><td>cellular senescence · stem cell exhaustion · altered intercellular communication</td></tr>
        <tr><td><b>Systemic</b></td><td>deregulated nutrient sensing</td></tr>
       </table>
       <div class="callout key">Count check: 6 molecular + 3 cellular + 1 systemic = <b>10 hallmarks</b>. A favorite exam task is to sort a given hallmark into the correct level.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Cellular senescence is best classified as which level of hallmark?", opts:["Molecular","Cellular","Systemic","It is not a hallmark"], a:1,
      exp:"Cellular senescence is a CELLULAR hallmark (along with stem cell exhaustion and altered intercellular communication)."},
     {type:"mcq", q:"Which of these is the SYSTEMIC-level hallmark emphasized in lecture?", opts:["Telomere shortening","Deregulated nutrient sensing","Cellular senescence","Genomic instability"], a:1,
      exp:"Deregulated nutrient sensing is the systemic alteration; the others are molecular or cellular."},
     {type:"tf", q:"Telomere shortening, genomic instability, and loss of proteostasis are all MOLECULAR hallmarks.", a:true,
      exp:"True — all three are molecular-level hallmarks."},
     {type:"mcq", q:"How many hallmarks of aging are presented, and how do they split?", opts:["8 total: 4 molecular, 4 cellular","10 total: 6 molecular, 3 cellular, 1 systemic","12 total: 6 molecular, 6 cellular","9 total: 3 of each level"], a:1,
      exp:"Ten hallmarks: 6 molecular + 3 cellular + 1 systemic (deregulated nutrient sensing)."},
     {type:"short", q:"List the three CELLULAR-level hallmarks of aging.",
      model:"Cellular senescence, stem cell exhaustion, and altered intercellular communication.",
      pts:["Cellular senescence","Stem cell exhaustion","Altered intercellular communication"]},
     {type:"mcq", q:"Which hallmark would you classify 'mitochondrial dysfunction' under?", opts:["Cellular","Molecular","Systemic","It is not a hallmark"], a:1,
      exp:"Mitochondrial dysfunction is one of the six MOLECULAR hallmarks."},
     {type:"tf", q:"Stem cell exhaustion and altered intercellular communication are both cellular-level hallmarks.", a:true,
      exp:"True — together with cellular senescence, these are the three cellular hallmarks."},
     {type:"mcq", q:"Sorting practice — which list contains ONLY molecular hallmarks?", opts:["Genomic instability, telomere shortening, epigenetic alterations","Cellular senescence, telomere shortening, nutrient sensing","Stem cell exhaustion, autophagy, senescence","Nutrient sensing, mitochondrial dysfunction, senescence"], a:0,
      exp:"Genomic instability, telomere shortening, and epigenetic alterations are all molecular. The others mix in cellular/systemic hallmarks."}
    ]
   },
   {
    id:"L1T3", title:"Systemic & Cellular hallmarks in detail",
    sub:"Nutrient sensing, senescence/SASP, stem cell exhaustion, intercellular communication (slides 11–14).",
    slides:[
     {h:"Systemic level — deregulated nutrient sensing", imgs:[
        {src:"slides/L1/slide-11.jpg", cap:"L1 · Slide 11 — Nutrient sensing / gut-brain axis"}
      ], html:`
       <p class="lead">At the systemic level, aging involves <span class="kw">deregulated nutrient sensing</span> — the pathways that tell cells whether food/energy is plentiful drift out of balance. This connects to the <span class="kw-2">gut–brain axis (GBA)</span> and reduced nutrient sensing.</p>
       <p>Key nutrient-sensing players:</p>
       <ul>
        <li><b>IGF</b> = insulin-like growth factor-1</li>
        <li><b>AMPK</b> = protein kinase AMP-activated catalytic subunit alpha 1 (senses low energy)</li>
        <li><b>mTOR</b> = mechanistic target of rapamycin kinase (senses abundance / drives growth)</li>
       </ul>
       <div class="callout tip">Theme: lowering IGF/mTOR signaling and activating AMPK (e.g., caloric restriction, rapamycin, metformin) tends to associate with longevity — the same hormesis logic from Topic 1.</div>`},
     {h:"Cellular level — cellular senescence & SASP", imgs:[
        {src:"slides/L1/slide-12.jpg", cap:"L1 · Slide 12 — Cellular senescence & SASP"}
      ], html:`
       <p class="lead"><span class="kw">Cellular senescence</span> = cells stop dividing but don't die; they linger and secrete inflammatory signals.</p>
       <p>Those secretions are the <span class="kw-2">SASP = senescence-associated secretory phenotype</span>. SASP drives <span class="warn">inflammation</span> in surrounding tissue (both senescent somatic cells and senescent immune cells contribute), spreading dysfunction to neighbors.</p>
       <div class="callout key"><b>SASP</b> is a must-know acronym: senescence-associated secretory phenotype — the pro-inflammatory cocktail secreted by senescent cells.</div>`},
     {h:"Cellular level — stem cell exhaustion", imgs:[
        {src:"slides/L1/slide-13.jpg", cap:"L1 · Slide 13 — Stem cell exhaustion"}
      ], html:`
       <p class="lead"><span class="kw">Stem cell exhaustion</span>: with age the regenerative pool declines. Young tissue balances stem-cell maintenance and expansion; old tissue shows reduced capacity (driven in part by <span class="kw-2">impaired autophagy</span>), so damaged cells aren't replaced.</p>`},
     {h:"Cellular level — altered intercellular communication", imgs:[
        {src:"slides/L1/slide-14.jpg", cap:"L1 · Slide 14 — Intercellular communication"}
      ], html:`
       <p class="lead"><span class="kw">Altered intercellular communication</span>: cells talk to each other through two broad channels, and both degrade with age.</p>
       <table class="dt">
        <tr><th>Contact-dependent</th><th>Soluble factors</th></tr>
        <tr><td>Membrane-bound signals, gap junctions, tunneling nanotubes</td><td>SASP, extracellular vesicles (EVs) released into the bloodstream</td></tr>
       </table>
       <ul>
        <li><b>SASP</b> = senescence-associated secretory phenotype</li>
        <li><b>EVs</b> = extracellular vesicles</li>
       </ul>`}
    ],
    quiz:[
     {type:"mcq", q:"SASP stands for:", opts:["Stress-activated senescence protein","Senescence-associated secretory phenotype","Stem-cell aging signaling pathway","Systemic anti-senescence program"], a:1,
      exp:"SASP = senescence-associated secretory phenotype — the inflammatory factors secreted by senescent cells."},
     {type:"tf", q:"Senescent cells have died and been cleared, which is why they no longer affect their neighbors.", a:false,
      exp:"False — senescent cells stop dividing but persist, and their SASP actively inflames and damages neighboring tissue."},
     {type:"mcq", q:"Which trio of molecules are the nutrient-sensing players highlighted in lecture?", opts:["BECN1, ATG5, ATG7","IGF, AMPK, mTOR","SIRT1, PARP1, CD38","HSP, HSF-1, chaperones"], a:1,
      exp:"IGF (insulin-like growth factor-1), AMPK, and mTOR are the nutrient-sensing pathway molecules. (BECN1/ATG are autophagy; SIRT1/PARP1/CD38 are NAD+; HSP/HSF-1 are proteostasis.)"},
     {type:"mcq", q:"Extracellular vesicles (EVs) and SASP factors are examples of which mode of intercellular communication?", opts:["Contact-dependent","Soluble factors","Gap junctions","Tunneling nanotubes"], a:1,
      exp:"EVs and SASP are SOLUBLE factors. Contact-dependent modes are membrane-bound signals, gap junctions, and tunneling nanotubes."},
     {type:"short", q:"Define cellular senescence and explain why it is harmful to surrounding tissue.",
      model:"Cellular senescence is a state in which a cell permanently stops dividing but does not die and instead persists in the tissue. It is harmful because senescent cells secrete the SASP (senescence-associated secretory phenotype), a pro-inflammatory mix that inflames and damages neighboring cells, spreading dysfunction.",
      pts:["Cell stops dividing but doesn't die","Persists in tissue","Secretes SASP","SASP causes inflammation/damage to neighbors"]},
     {type:"mcq", q:"Activating AMPK and lowering mTOR/IGF signaling (e.g., via caloric restriction) is generally associated with:", opts:["Accelerated aging","Longevity / healthspan benefits","Increased senescence","No change"], a:1,
      exp:"Low IGF/mTOR and active AMPK signal energy scarcity and are associated with longevity — the same hormesis logic."},
     {type:"tf", q:"Gap junctions and tunneling nanotubes are contact-dependent modes of intercellular communication.", a:true,
      exp:"True — contact-dependent modes include membrane-bound signals, gap junctions, and tunneling nanotubes."},
     {type:"mcq", q:"Stem cell exhaustion with age is worsened in part by:", opts:["Excess telomerase","Impaired autophagy","Too much proteostasis","Increased nutrient sensing accuracy"], a:1,
      exp:"Impaired autophagy contributes to reduced stem-cell maintenance/regeneration with age."}
    ]
   },
   {
    id:"L1T4", title:"Molecular hallmarks in detail",
    sub:"Genomic instability, telomeres, epigenetics, proteostasis, autophagy, mitochondria (slides 15–20).",
    slides:[
     {h:"Genomic instability", imgs:[
        {src:"slides/L1/slide-15.jpg", cap:"L1 · Slide 15 — Genomic instability"}
      ], html:`
       <p class="lead"><span class="kw">Genomic instability</span> = accumulating damage to the genome. Contributors shown: <span class="kw-2">lamin (nuclear envelope) gene mutations</span>, <span class="kw-2">mitochondrial DNA (mtDNA) mutations</span>, and general <span class="warn">DNA damage accumulation</span>. (This is the bridge into Lecture 2.)</p>`},
     {h:"Telomere shortening", imgs:[
        {src:"slides/L1/slide-16.jpg", cap:"L1 · Slide 16 — Telomere shortening"}
      ], html:`
       <p class="lead"><span class="kw">Telomeres</span> are the protective caps on chromosome ends. They shorten with each division (<span class="kw-2">telomere attrition</span>). The enzyme <span class="kw-2">telomerase</span> can rebuild them (telomerase induction) or be blocked (telomerase inhibition).</p>
       <div class="callout tip">Telomere attrition → cells eventually can't divide → senescence. Telomerase is high in stem cells and most cancers, low in most somatic cells.</div>`},
     {h:"Epigenetic alterations", imgs:[
        {src:"slides/L1/slide-17.jpg", cap:"L1 · Slide 17 — Epigenetic alteration"}
      ], html:`
       <p class="lead"><span class="kw">Epigenetic alterations</span> = changes in how DNA is read without changing the sequence: <span class="kw-2">DNA methylation</span> (methyl groups on DNA), histone/chromatin modification, and non-coding RNAs.</p>
       <ul>
        <li><b>ncRNA</b> = non-coding RNA</li>
        <li><b>mRNA</b> = messenger RNA</li>
       </ul>
       <div class="callout tip">DNA-methylation patterns change so predictably with age that they're used as "epigenetic clocks" to estimate biological age.</div>`},
     {h:"Loss of proteostasis", imgs:[
        {src:"slides/L1/slide-18.jpg", cap:"L1 · Slide 18 — Loss of proteostasis"}
      ], html:`
       <p class="lead"><span class="kw">Loss of proteostasis</span> = failure to keep the proteome correctly folded. Stresses (ER stress, oxidative stress, heat shock) produce <span class="warn">misfolded/unfolded proteins</span>. Cells respond with chaperones, the ubiquitin–proteasome system, and autophagy/lysosomes.</p>
       <ul>
        <li><b>HSP</b> = heat shock protein</li>
        <li><b>HSF-1</b> = heat shock factor-1 (turns on the chaperone response)</li>
       </ul>`},
     {h:"Compromised autophagy", imgs:[
        {src:"slides/L1/slide-19.jpg", cap:"L1 · Slide 19 — Compromised autophagy"}
      ], html:`
       <p class="lead"><span class="kw">Autophagy</span> is the cell's recycling/self-digestion process (phagophore → autophagosome → fusion with lysosome). With aging it becomes <span class="warn">dysfunctional</span>: reduced lysosomal proteolytic function and impaired clearance.</p>
       <ul>
        <li><b>BECN1</b> = Beclin 1</li>
        <li><b>ATG5</b> = autophagy-related 5</li>
        <li><b>ATG7</b> = autophagy-related 7</li>
       </ul>
       <div class="callout tip">Autophagy ties back to hormesis: mild stress (fasting, exercise) <i>boosts</i> autophagy, helping clear damaged components.</div>`},
     {h:"Mitochondrial dysfunction", imgs:[
        {src:"slides/L1/slide-20.jpg", cap:"L1 · Slide 20 — Mitochondrial dysfunction"}
      ], html:`
       <p class="lead"><span class="kw">Mitochondrial dysfunction</span>: aging mitochondria run the electron transport chain / <span class="kw-2">OXPHOS</span> less cleanly, leaking <span class="warn">excessive ROS</span> and producing less ATP. Reduced mitophagy lets damaged mitochondria pile up → more dysfunction → aging (a vicious cycle).</p>
       <ul>
        <li><b>ROS</b> = reactive oxygen species</li>
        <li><b>ATP</b> = adenosine triphosphate</li>
        <li><b>OXPHOS</b> = oxidative phosphorylation</li>
       </ul>`}
    ],
    quiz:[
     {type:"mcq", q:"The enzyme that can rebuild/lengthen telomeres is:", opts:["Telomerase","DNA polymerase III","Beclin 1","HSF-1"], a:0,
      exp:"Telomerase extends telomeres. It is active in stem cells and most cancers but low in most somatic cells."},
     {type:"mcq", q:"Epigenetic alterations involve all of the following EXCEPT:", opts:["DNA methylation","Histone/chromatin modification","Non-coding RNAs","Changing the underlying DNA base sequence"], a:3,
      exp:"Epigenetics changes how DNA is read WITHOUT altering the sequence. Methylation, histone modification, and ncRNAs are epigenetic; changing the base sequence is a mutation."},
     {type:"tf", q:"BECN1 (Beclin 1), ATG5, and ATG7 are key players in autophagy.", a:true,
      exp:"True — Beclin 1, ATG5, and ATG7 are autophagy-related proteins; compromised autophagy is a molecular hallmark."},
     {type:"mcq", q:"Aging mitochondria contribute to a vicious cycle primarily by:", opts:["Producing too much ATP","Leaking excessive ROS and clearing damaged mitochondria poorly (low mitophagy)","Lengthening telomeres","Increasing chaperone production"], a:1,
      exp:"Dysfunctional mitochondria leak excessive ROS and reduced mitophagy lets damaged mitochondria accumulate, worsening dysfunction."},
     {type:"mcq", q:"HSP and HSF-1 belong to which hallmark?", opts:["Telomere shortening","Loss of proteostasis","Genomic instability","Stem cell exhaustion"], a:1,
      exp:"Heat shock proteins (HSP) and heat shock factor-1 (HSF-1) are part of the proteostasis machinery; loss of proteostasis is the hallmark."},
     {type:"short", q:"Name the six MOLECULAR hallmarks of aging.",
      model:"Genomic instability, telomere shortening/dysfunction, epigenetic alterations, loss of proteostasis, compromised autophagy, and mitochondrial dysfunction.",
      pts:["Genomic instability","Telomere shortening","Epigenetic alterations","Loss of proteostasis","Compromised autophagy","Mitochondrial dysfunction"]},
     {type:"mcq", q:"Why are DNA-methylation patterns useful as 'epigenetic clocks'?", opts:["They randomly fluctuate","They change predictably with age, allowing estimation of biological age","They change the DNA sequence with age","They are identical in everyone"], a:1,
      exp:"Methylation patterns shift predictably with age, so they can estimate biological (vs. chronological) age."},
     {type:"tf", q:"Telomerase is typically HIGH in most ordinary somatic cells and LOW in cancer cells.", a:false,
      exp:"False — it's the reverse: telomerase is low in most somatic cells but high in stem cells and most cancers."},
     {type:"mcq", q:"The ER stress, oxidative stress, and heat-shock responses that produce misfolded proteins relate to which hallmark?", opts:["Loss of proteostasis","Telomere shortening","Genomic instability","Altered intercellular communication"], a:0,
      exp:"Misfolded/unfolded proteins and the chaperone (HSP/HSF-1) response are part of loss of proteostasis."},
     {type:"mcq", q:"OXPHOS stands for and refers to:", opts:["Oxidative phosphorylation — ATP production in mitochondria","Oxygen phosphate storage in the nucleus","Oxidized phospholipid synthesis","A telomere-capping protein"], a:0,
      exp:"OXPHOS = oxidative phosphorylation, the mitochondrial process that makes ATP; it becomes less efficient and leakier with age."}
    ]
   },
   {
    id:"L1T5", title:"Evidence vs. Hype — evaluating aging claims",
    sub:"How to judge an aging/anti-aging claim, plus the research timeline (slides 9, 23, 24).",
    slides:[
     {h:"Why we need to evaluate claims", imgs:[
        {src:"slides/L1/slide-09.jpg", cap:"L1 · Slide 9 — Claims we constantly hear"}
      ], html:`
       <p class="lead">We're flooded with claims: "inflammation causes aging," "this supplement reverses aging," "this disease is preventable," "this therapy slows degeneration." The skill is deciding <span class="kw">which claims the evidence actually supports</span>.</p>
       <p>Your job as a scientist: investigate a disease/claim, select it, evaluate the evidence, and decide what's justified.</p>`},
     {h:"The evidence-quality checklist", imgs:[
        {src:"slides/L1/slide-24.jpg", cap:"L1 · Slide 24 — Evaluate a claim (evidence-quality challenge)"}
      ], html:`
       <p class="lead">Three-part framework from the class activity:</p>
       <ol>
        <li><b>Disease overview</b> — which tissues/organs are affected, main symptoms, why incidence rises with age.</li>
        <li><b>Biological mechanisms</b> — identify 2–3 systemic/cellular/molecular hallmarks involved (e.g., mitochondrial dysfunction, telomere attrition, senescence, proteostasis failure, chronic inflammation, stem cell depletion).</li>
        <li><b>Evaluate the claim</b> using these key criteria:</li>
       </ol>
       <table class="dt">
        <tr><th>Ask…</th><th>Why it matters</th></tr>
        <tr><td>Correlation or causation?</td><td>Two things rising together ≠ one causes the other.</td></tr>
        <tr><td>Human, mouse, or cell-culture study?</td><td>Human RCTs &gt; animal &gt; cell culture for relevance to people.</td></tr>
        <tr><td>Sample size?</td><td>Tiny studies are unreliable.</td></tr>
        <tr><td>Conflict of interest?</td><td>A company selling the product is biased.</td></tr>
        <tr><td>Does the headline exaggerate?</td><td>Dramatic wording often oversells.</td></tr>
        <tr><td>Are uncertainties acknowledged?</td><td>Honest science states its limits.</td></tr>
       </table>
       <div class="callout key">Evidence strength: a <b>review citing multiple studies</b> = strong; an <b>anecdote with no controlled trials</b> = weak.</div>`},
     {h:"Research timeline of aging", imgs:[
        {src:"slides/L1/slide-23.jpg", cap:"L1 · Slide 23 — Timeline of aging research"}
      ], html:`
       <p class="lead">Aging research has a long arc — from early work on growth rate and lifespan in <i>Drosophila</i> and rodent caloric restriction, through the radical/free-radical theory, telomere and mtDNA discoveries, to modern interventions. Useful abbreviations on this slide:</p>
       <ul>
        <li><b>RHD</b> = rheumatic heart disease · <b>PD</b> = Parkinson's disease · <b>AD</b> = Alzheimer's disease</li>
        <li><b>mtDNA</b> = mitochondrial DNA · <b>NAD⁺</b> = nicotinamide adenine dinucleotide · <b>HP</b> = heterochronic parabiosis</li>
       </ul>
       <div class="callout tip"><b>Heterochronic parabiosis</b> (joining the circulation of a young and old animal) is a classic experiment showing blood-borne factors influence aging — a go-to example of "altered intercellular communication" being studied.</div>`},
     {h:"🎙️ From the lecture (Meeting 1) — how Prof. Kemeny wants you to think", imgs:[], html:`
       <div class="callout">🎙️ <b>From the recorded Meeting 1 lecture.</b> These are points the professor stressed out loud — strong candidates for "understand &amp; reason" exam questions.</div>
       <p class="lead">Vocabulary he was careful about:</p>
       <table class="dt">
        <tr><th>Term</th><th>His definition</th></tr>
        <tr><td><b>Theory</b> (in science)</td><td>A <span class="kw">system of ideas backed by lots of evidence</span> from many experiments/labs (e.g., gravity). NOT a guess.</td></tr>
        <tr><td><b>Hypothesis</b></td><td>An <span class="kw-2">educated guess</span> from an observation, tested in a <b>controlled experiment</b> (control + experimental group).</td></tr>
        <tr><td><b>Misinformation</b></td><td>Information that is simply incorrect.</td></tr>
        <tr><td><b>Disinformation</b></td><td>Incorrect information spread <span class="warn">deliberately</span> — usually for profit, votes, or an agenda.</td></tr>
        <tr><td><b>Clinical</b> trial</td><td>Experiment on <span class="kw">humans</span>.</td></tr>
        <tr><td><b>Preclinical</b> trial</td><td>Experiment on <span class="kw-2">animals</span> (or cells in a dish).</td></tr>
        <tr><td><b>Lifespan vs. longevity</b></td><td>Lifespan = how long you live; <span class="kw">longevity</span> = long <i>and healthy/functional</i> life.</td></tr>
       </table>
       <p>Judging a <b>source's reliability</b> (his "highlight of the activity"):</p>
       <ul>
        <li><b>Peer review</b> = other experts approve it before publication. But beware <span class="warn">predatory journals</span> that publish anything for money — that's <span class="warn">pseudoscience</span>, not real peer review.</li>
        <li><b>Good sources:</b> reputable textbooks (check the publisher &amp; date — the field moves fast, so a 20-yr-old book may be outdated), <b>patient-advocacy group</b> sites for major diseases, and hospital/medical-group sites.</li>
        <li><b>An expert in one field is not an expert in another</b> (a cardiologist isn't a virologist).</li>
       </ul>
       <div class="callout key">Two facts he hammered: (1) <b>Antioxidant supplements don't just fail — they can be harmful</b> (higher cardiovascular risk in trials), and supplements <b>aren't FDA-approved</b> so they can claim almost anything. (2) The ROS example for correlation vs. causation: ROS rise with age, but does ROS <i>cause</i> aging or does aging <i>cause</i> ROS? Correlation alone can't tell you.</div>
       <div class="callout tip"><b>DAF-2 / C. elegans:</b> mutating the <span class="kw-2">DAF-2</span> gene in the worm <i>C. elegans</i> made it live ~150% longer — and the gene is conserved in humans. A classic "genes control aging" example, and a reminder that worm results don't automatically translate to people.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"In SCIENCE, the word 'theory' means:", opts:["A wild guess","A system of ideas supported by a large body of evidence from many experiments","An untested opinion","A marketing claim"], a:1,
      exp:"In science a theory (like gravity) is well-supported by extensive evidence — unlike the everyday use meaning 'a guess,' which actually matches a hypothesis."},
     {type:"mcq", q:"A 'clinical' trial is an experiment on ___, while a 'preclinical' trial is on ___:", opts:["animals; humans","humans; animals (or cells)","cells; computers","plants; humans"], a:1,
      exp:"Clinical = humans; preclinical = animals (or cells in a dish). Human (clinical) evidence is the most relevant to people."},
     {type:"mcq", q:"The difference between misinformation and disinformation is that disinformation is:", opts:["Always about science","Spread deliberately (often for profit, votes, or an agenda)","Accidentally wrong","Peer-reviewed"], a:1,
      exp:"Misinformation is simply incorrect; disinformation is incorrect AND spread deliberately for some incentive."},
     {type:"mcq", q:"A scientific-looking article is published in a 'predatory journal.' What should you conclude?", opts:["It is automatically trustworthy","It may be pseudoscience — predatory journals publish anything for money without real peer review","It was reviewed by the FDA","It must be a clinical trial"], a:1,
      exp:"Predatory journals publish for a fee without genuine peer review, so the work may be pseudoscience — not reliable."},
     {type:"mcq", q:"Mutating the DAF-2 gene in C. elegans worms caused them to:", opts:["Die immediately","Live about 150% longer (and the gene is conserved in humans)","Lose all their cells","Stop eating"], a:1,
      exp:"DAF-2 mutants live ~150% longer — a classic demonstration that specific genes influence aging/longevity; DAF-2 is conserved in humans."},
     {type:"tf", q:"'Lifespan' and 'longevity' mean exactly the same thing.", a:false,
      exp:"Not quite — lifespan is how long you live; longevity emphasizes a long AND healthy, functional life."},
     {type:"mcq", q:"Which counts as the STRONGEST evidence for an anti-aging claim?", opts:["A celebrity testimonial","A single anecdote on social media","A peer-reviewed review citing multiple controlled human studies","A supplement company's press release"], a:2,
      exp:"A review citing multiple controlled studies is strong; anecdotes, testimonials, and company press releases are weak/biased."},
     {type:"tf", q:"If a supplement is correlated with longer life in a survey, that proves the supplement causes longer life.", a:false,
      exp:"False — correlation is not causation. Confounders (healthier people take supplements) can explain the association."},
     {type:"mcq", q:"For relevance to humans, rank these study types from most to least convincing:", opts:["Cell culture > mouse > human RCT","Human RCT > mouse study > cell culture","Mouse study > human RCT > cell culture","They are all equally convincing"], a:1,
      exp:"Human randomized controlled trials > animal studies > cell-culture studies for predicting effects in people."},
     {type:"mcq", q:"A headline reads: 'Miracle molecule REVERSES aging!' based on a study of 8 mice funded by the seller. The biggest red flags are:", opts:["Dramatic wording, tiny sample, animal-only data, and commercial conflict of interest","Nothing — mouse studies always translate to humans","Only that it used mice","Only the dramatic wording"], a:0,
      exp:"All four: exaggerated wording, n=8 (tiny), animal-only (not human), and a conflict of interest from the seller funding it."},
     {type:"short", q:"You read: 'Inflammation causes aging.' List four questions you'd ask to evaluate this claim.",
      model:"Is it correlation or causation? Is the evidence from humans, animals, or cell culture? What's the sample size? Is there a conflict of interest? Does the wording exaggerate, and are uncertainties acknowledged?",
      pts:["Correlation vs causation","Study type (human/animal/cell)","Sample size","Conflict of interest / exaggeration"]},
     {type:"mcq", q:"Heterochronic parabiosis (joining a young and old animal's circulation) is most often cited as a way to study which hallmark?", opts:["Telomere shortening","Altered intercellular communication (blood-borne factors)","Proteostasis","Genomic instability"], a:1,
      exp:"Parabiosis tests whether circulating (blood-borne) factors influence aging — a model of altered intercellular communication."},
     {type:"tf", q:"An anecdote with no controlled trials counts as weak evidence even if the story is dramatic and convincing.", a:true,
      exp:"True — persuasiveness is not strength. Anecdotes without controls are weak regardless of how compelling they sound."},
     {type:"mcq", q:"Step 2 of the class evidence framework asks you to:", opts:["Buy the supplement and test it","Identify 2–3 systemic/cellular/molecular hallmarks involved in the disease","Ignore the mechanism","Only read the headline"], a:1,
      exp:"Step 2 = identify the biological mechanisms (2–3 hallmarks) involved; step 1 is disease overview, step 3 is evaluating the claim."}
    ]
   },
   {
    id:"L1X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions beyond the per-topic quizzes — the kind that separate a B from an A.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">These are <b>harder, application-level</b> questions that combine ideas, interpret experiments, and do quick calculations — closer to the toughest exam items. Misses go to your wrong-answer bank. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"A company advertises that mice given antioxidant compound X lived 20% longer, and urges humans to buy it. What is the SINGLE strongest reason for scientific caution?", opts:["The study used too many mice","Mouse results frequently fail to translate to humans, and no controlled human trial is cited","Antioxidants are illegal","20% is not a large number"], a:1,
      exp:"'Mice lie and monkeys exaggerate' — preclinical success often fails in humans. Without a controlled human trial (and given the seller's conflict of interest), the claim is weak for humans."},
     {type:"mcq", q:"Chronic-disease risk roughly doubles every ~8 years of age. If a condition carries ~1% risk at age 50, the approximate risk at age 74 is:", opts:["~3%","~8%","~2%","~24%"], a:1,
      exp:"74−50 = 24 years ≈ 3 doublings (×2×2×2 = ×8). 1% × 8 ≈ 8%."},
     {type:"tf", q:"Hormesis predicts a linear dose–response: the more stress applied, the more benefit gained.", a:false,
      exp:"False — hormesis is biphasic: mild/intermittent stress is beneficial, but high stress is damaging. The curve is not linear."},
     {type:"short", q:"Explain how 'lifespan' and 'healthspan/longevity' can diverge. Give one concrete example.", model:"Lifespan = total years alive; healthspan/longevity = years lived in good, functional health. They diverge when an intervention keeps an organism alive longer but in poor condition, or improves health without extending maximum lifespan. Example: activating mitophagy in aged mice improved tissue function (healthspan) without increasing lifespan; conversely, a person can live to 90 but spend the last 15 years with chronic disease.", pts:["Lifespan = total years; healthspan = healthy/functional years","They can diverge in either direction","Concrete example (e.g., mitophagy → healthspan not lifespan)"]},
     {type:"mcq", q:"Which is a CELLULAR-level hallmark (not molecular)?", opts:["Telomere shortening","Epigenetic alterations","Cellular senescence","Loss of proteostasis"], a:2,
      exp:"Cellular senescence, stem-cell exhaustion, and altered intercellular communication are the 3 cellular hallmarks. The others are molecular."},
     {type:"mcq", q:"Deregulated nutrient sensing (IGF/insulin, AMPK, mTOR) is categorized as which level of hallmark?", opts:["Molecular","Cellular","Systemic","Not a hallmark"], a:2,
      exp:"Deregulated nutrient sensing is the single SYSTEMIC hallmark (6 molecular + 3 cellular + 1 systemic = 10)."},
     {type:"mcq", q:"Which is the STRONGEST evidence for a longevity claim?", opts:["A compelling personal testimonial","A press release from the supplement maker","A peer-reviewed review summarizing multiple randomized controlled human trials","An influencer with millions of followers"], a:2,
      exp:"Strong evidence = controlled human studies synthesized in peer review. Testimonials, press releases, and popularity are weak."},
     {type:"mcq", q:"Why are senescent cells harmful to neighboring tissue even though they no longer divide?", opts:["They secrete the pro-inflammatory SASP","They consume all the oxygen","They divide uncontrollably","They lengthen neighbors' telomeres"], a:0,
      exp:"Senescent cells persist and secrete the SASP — pro-inflammatory factors driving 'inflammaging' and tissue dysfunction."},
     {type:"short", q:"A friend takes high-dose vitamin E daily 'to slow aging.' Walk through the evidence-vs-hype questions you'd ask.", model:"Ask: (1) Human or just animal/cell data? Best human evidence (meta-analyses) shows antioxidant supplements give no benefit and sometimes increase mortality. (2) Correlation or causation? (3) Who's selling it / conflict of interest? (4) Mechanistically, blunting all ROS removes hormetic signaling, so it can backfire. Conclusion: not supported; potentially harmful.", pts:["Demand human (not just animal) data","Correlation vs causation","Conflict of interest / who profits","Mechanism: antioxidants blunt protective ROS/hormesis; trials show no benefit or harm"]},
     {type:"mcq", q:"DAF-2 mutant worms live ~150% longer, and DAF-2 is conserved in humans. What is the MOST defensible conclusion?", opts:["Mutating the human insulin receptor will safely extend human lifespan","The pathway is conserved and worth studying in humans, but worm lifespan gains don't prove a human effect","Humans should take insulin to live longer","The result is irrelevant to humans"], a:1,
      exp:"Conservation makes the pathway relevant and worth studying, but a worm result is not proof of a safe human effect — translation is not guaranteed."}
    ]
   }
  ]
 },

 /* ============================ LECTURE 2 ============================ */
 {
  id:"L2", icon:"🧫", short:"L2 · DNA Damage",
  title:"Lecture 2 — DNA Damage, Repair & the NAD⁺ Connection",
  blurb:"Why genomes destabilize with age, the sources of DNA damage (endogenous & exogenous), the five repair pathways, progeroid diseases, and the PARP/sirtuin/NAD⁺ link.",
  objectives:[
    "Explain the Disposable Soma model and how it accounts for aging as imperfect maintenance",
    "Describe the four sub-features of genomic instability as an aging hallmark",
    "Distinguish endogenous vs. exogenous sources of DNA damage and give examples of each",
    "Explain how oxidative damage (8-oxodG), depurination, and deamination create specific mutations",
    "Match the five DNA repair pathways (BER, NER, MMR, NHEJ, HR) to the lesions they fix",
    "Explain why defects in genome-maintenance genes cause progeroid (accelerated-aging) syndromes",
    "Describe the NAD⁺ link: how PARPs and sirtuins consume NAD⁺ and the proposed DNA-damage→PARP→NAD⁺-depletion aging cycle",
    "Critically evaluate 'boost your DNA repair' anti-aging supplement claims"
  ],
  topics:[
   {
    id:"L2T1", title:"Disposable Soma & genomic instability",
    sub:"Why we age, and why genomes destabilize over time (slides 1, 4–7).",
    slides:[
     {h:"The Disposable Soma model", imgs:[
        {src:"slides/L2/slide-01.jpg", cap:"L2 · Slide 1 — Disposable Soma model"}
      ], html:`
       <p class="lead">The <span class="kw">Disposable Soma model</span>: organisms invest only enough energy in maintaining the <span class="kw-2">soma (body)</span> to survive long enough to reproduce.</p>
       <p>So aging occurs (at least partly) as a consequence of this <span class="warn">imperfect maintenance</span> — <i>not</i> as a deliberately genetically programmed process. There's an evolutionary trade-off between reproduction and bodily upkeep.</p>
       <div class="callout key">Key contrast: Disposable Soma frames aging as a <b>byproduct of limited maintenance investment</b>, opposed to "programmed aging" theories.</div>`},
     {h:"Aging hallmark: genomic instability", imgs:[
        {src:"slides/L2/slide-05.jpg", cap:"L2 · Slide 5 — Genomic instability"},
        {src:"slides/L2/slide-04.jpg", cap:"L2 · Slide 4 — Why genomes destabilize"}
      ], html:`
       <p class="lead">Why do our genomes become increasingly unstable with age? Because damage outpaces repair. <span class="kw">Genomic instability</span> as an aging hallmark has four sub-features:</p>
       <ul>
        <li><span class="kw-2">Mutation accumulation</span></li>
        <li><span class="kw-2">Chromosomal abnormalities</span></li>
        <li><span class="kw-2">Telomere dysfunction</span></li>
        <li><span class="kw-2">Mitochondrial DNA damage</span></li>
       </ul>
       <p>All of these are associated with aging phenotypes.</p>`},
     {h:"The paradox: thousands of lesions a day, yet we survive", imgs:[
        {src:"slides/L2/slide-06.jpg", cap:"L2 · Slide 6 — Tens of thousands of lesions/day"},
        {src:"slides/L2/slide-07.jpg", cap:"L2 · Slide 7 — Same age, different repair capacity"}
      ], html:`
       <p class="lead">Your DNA takes <span class="warn">tens of thousands of lesions every day</span>, yet most cells survive for decades. If damage were constant and unrepaired, we'd all get cancer or genomic catastrophe in childhood — the reason we don't is <span class="kw">DNA repair</span>.</p>
       <p>Consider two people both 70 years old: one healthy, one with multiple age-related diseases. A leading idea: differences in <span class="kw-2">DNA repair capacity</span> help explain the gap in biological aging between people of the same chronological age.</p>`},
     {h:"🎙️ From the lecture (Meeting 2) — what Prof. Kemeny stressed", imgs:[], html:`
       <div class="callout">🎙️ <b>From the recorded Meeting 2 lecture.</b> Points he emphasized out loud beyond the slides — prime "reason it out" exam material.</div>
       <p class="lead"><span class="kw">p53 — the master DNA-damage checkpoint</span> (he spent a lot of time here):</p>
       <ul>
        <li>If a cell has DNA damage, <span class="kw-2">p53</span> halts the cell cycle so the cell either <b>repairs the DNA</b> or, if it can't, undergoes <b>apoptosis</b> (programmed cell death) — so it doesn't divide with the damage.</li>
        <li><span class="warn">Cancer cells frequently carry p53 mutations</span> → they evade apoptosis, keep dividing despite accumulated mutations, and form tumors.</li>
       </ul>
       <p><span class="kw">Why we don't all get cancer as children</span>, despite tens of thousands of lesions/day: DNA repair + p53-driven apoptosis remove damaged cells. He also noted there are <b>millions of mutations per cell generation</b>, but most are harmless because…</p>
       <div class="callout key"><b>Only ~2% of the genome codes for protein</b> (≈3 billion bp total). The other ~98% is non-coding (introns, regulatory/enhancer sequences, ancient viral remnants), so many mutations land where they're <b>tolerated</b> and cause no phenotype.</div>
       <p><span class="kw">Why two 70-year-olds differ</span> (one healthy, one with <span class="kw-2">comorbidities</span> = several diseases at once): differences in <b>DNA repair capacity</b>, set by both <span class="kw-2">genetic predisposition</span> (which alleles you inherit code for better/worse repair enzymes) and <span class="kw-2">environment</span> (smoking, pollution, UV) — "nature <i>and</i> nurture." Genetics is "not a death sentence." Example defense: <span class="kw-2">melanin</span> is made in UV-exposed skin to block radiation and protect DNA.</p>
       <p><span class="kw">Designing a clean experiment</span> for a "boosts DNA repair" supplement (he drilled this):</p>
       <ul>
        <li>Need a <b>control vs. supplement</b> group; <b>induce DNA damage</b>; measure a <b>direct endpoint</b> — look at <span class="kw-2">the DNA itself</span> (fewer mutations/lesions). Measuring repair-protein levels is only <span class="warn">indirect</span> evidence (more protein ≠ proof the DNA got fixed).</li>
        <li><b>Always design from the endpoint</b> (the dependent variable / readout). <span class="kw-2">Clinical</span> = on humans; <span class="kw-2">preclinical</span> = on animals or cells.</li>
       </ul>
       <div class="callout tip">Finding reliable sources: use <b>PubMed</b> (the article repository under the <b>NIH</b> = National Institutes of Health) and your CCNY library's journal access — not just a Google result.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"What is the primary role of p53 when a cell's DNA is damaged?", opts:["It speeds the cell through division","It halts the cell cycle so the cell either repairs the DNA or undergoes apoptosis","It lengthens telomeres","It adds methyl groups to DNA"], a:1,
      exp:"p53 is the master checkpoint: on damage it arrests the cycle, routing the cell to DNA repair or, if unrepairable, to apoptosis."},
     {type:"mcq", q:"Why do many cancer cells carry p53 mutations?", opts:["It makes them divide more slowly","A broken p53 lets them evade apoptosis and keep dividing despite accumulated mutations","It lengthens their telomeres directly","It repairs their DNA perfectly"], a:1,
      exp:"With p53 mutated, damaged cells escape the repair-or-die checkpoint, so they survive and proliferate into tumors."},
     {type:"mcq", q:"About what fraction of the human genome actually codes for proteins?", opts:["~2%","~50%","~98%","100%"], a:0,
      exp:"Only ~2% of the ~3 billion bp genome codes for protein; the rest is non-coding, so many mutations are tolerated."},
     {type:"mcq", q:"To prove a supplement 'boosts DNA repair,' which is the most DIRECT endpoint to measure?", opts:["The levels of repair proteins","The DNA itself — fewer mutations/lesions after damage, vs. a control","How energetic the animal seems","Customer reviews"], a:1,
      exp:"Look at the DNA directly (fewer lesions/mutations vs. control). Repair-protein levels are only indirect — more protein doesn't prove the DNA was fixed."},
     {type:"tf", q:"In the professor's terms, a 'clinical' trial is run on humans while a 'preclinical' experiment is on animals or cells.", a:true,
      exp:"True — clinical = humans; preclinical = animals or cell cultures."},
     {type:"mcq", q:"Two 70-year-olds differ greatly in health. The lecture attributes differences in DNA-repair capacity to:", opts:["Only inherited genes","Only environment","Both genetic predisposition (alleles) AND environment (smoking, UV, pollution)","Neither — it's purely random"], a:2,
      exp:"Repair capacity reflects nature AND nurture: inherited repair-enzyme alleles plus environmental exposures."},
     {type:"mcq", q:"The Disposable Soma model proposes that aging is:", opts:["A precisely programmed genetic clock","A consequence of investing only enough energy to maintain the body until reproduction (imperfect maintenance)","Caused entirely by telomerase","Reversible with antioxidants"], a:1,
      exp:"Disposable Soma: organisms maintain the soma only well enough to reproduce, so aging results from imperfect maintenance rather than a deliberate program."},
     {type:"mcq", q:"Which is NOT one of the four sub-features of genomic instability listed?", opts:["Mutation accumulation","Chromosomal abnormalities","Telomere dysfunction","Increased autophagy"], a:3,
      exp:"The four are mutation accumulation, chromosomal abnormalities, telomere dysfunction, and mitochondrial DNA damage. Autophagy is a separate hallmark."},
     {type:"tf", q:"Your DNA experiences only a handful of lesions per day, which is why most cells survive for decades.", a:false,
      exp:"False — DNA experiences tens of thousands of lesions per day; cells survive because of robust DNA repair, not because damage is rare."},
     {type:"mcq", q:"Two people are both 70. One is healthy and one has many age-related diseases. The lecture suggests this gap can be partly explained by differences in:", opts:["Chronological age","DNA repair capacity","Height","Blood type"], a:1,
      exp:"Differences in DNA repair capacity can help explain why people of the same chronological age differ in biological aging."},
     {type:"short", q:"Explain the everyday paradox of DNA damage: why don't we all develop cancer in childhood given constant damage?",
      model:"DNA suffers tens of thousands of lesions every day, but cells possess multiple efficient DNA repair pathways that fix the vast majority of this damage before it becomes a permanent mutation. Because repair keeps pace with damage for decades, genomic instability and cancer are usually delayed until later life when repair capacity and fidelity decline.",
      pts:["Tens of thousands of lesions/day","DNA repair fixes most damage","Repair keeps pace for decades","Decline in repair → instability later in life"]},
     {type:"mcq", q:"The Disposable Soma model is best contrasted with which competing idea?", opts:["Programmed-aging theories (a deliberate genetic clock)","The free-radical theory","Mismatch repair","The Hayflick limit"], a:0,
      exp:"Disposable Soma frames aging as a byproduct of limited maintenance investment — opposed to 'programmed aging' theories that view aging as a deliberate program."},
     {type:"tf", q:"Mitochondrial DNA damage is one of the four sub-features of genomic instability as an aging hallmark.", a:true,
      exp:"True — the four are mutation accumulation, chromosomal abnormalities, telomere dysfunction, and mitochondrial DNA damage."},
     {type:"mcq", q:"According to the 'soma' logic, organisms invest in body maintenance:", opts:["As much as physically possible, forever","Only enough to survive long enough to reproduce","Not at all","Equally across all tissues for life"], a:1,
      exp:"They invest only enough to survive to reproduce; the resulting imperfect maintenance contributes to aging."}
    ]
   },
   {
    id:"L2T2", title:"Endogenous sources of DNA damage",
    sub:"Damage from inside: replication errors, ROS, depurination, deamination (slides 9–14).",
    slides:[
     {h:"The race between repair and replication", imgs:[
        {src:"slides/L2/slide-09.jpg", cap:"L2 · Slide 9 — Repair vs. replication"}
      ], html:`
       <p class="lead">A base change can either be <span class="kw">corrected by DNA repair</span> (back to wild-type) or, if replication happens first, become locked in: after replication both strands carry the change → a <span class="warn">heritable mutation</span>.</p>
       <div class="callout key">The decisive factor is timing: <b>repair before replication = no mutation; replication before repair = permanent mutation.</b></div>`},
     {h:"Endogenous sources (overview)", imgs:[
        {src:"slides/L2/slide-10.jpg", cap:"L2 · Slide 10 — Sources of DNA damage (endogenous)"}
      ], html:`
       <p class="lead"><span class="kw">Endogenous</span> = damage arising from inside the cell / normal biology:</p>
       <ul>
        <li><span class="kw-2">Replication errors</span></li>
        <li><span class="kw-2">Reactive oxygen species (ROS)</span></li>
        <li><span class="kw-2">Spontaneous depurination</span></li>
        <li><span class="kw-2">Deamination</span></li>
       </ul>`},
     {h:"Replication errors & proofreading", imgs:[
        {src:"slides/L2/slide-11.jpg", cap:"L2 · Slide 11 — Proofreading"}
      ], html:`
       <p class="lead">DNA polymerase sometimes inserts a wrong base, but mistakes are exceedingly rare (&lt; 10⁻⁹ in bacteria and humans) thanks to <span class="kw">proofreading</span>.</p>
       <p>The <span class="kw-2">3′→5′ exonuclease</span> activity of DNA polymerase recognizes and excises the mismatched base, then the polymerase adds the correct one.</p>`},
     {h:"Oxidative damage — 8-oxodG", imgs:[
        {src:"slides/L2/slide-12.jpg", cap:"L2 · Slide 12 — Oxidative damage"}
      ], html:`
       <p class="lead"><span class="kw">ROS / free radicals</span> oxidize guanine into <span class="kw-2">8-oxo-dG (8-oxo-deoxyguanosine, GO)</span>.</p>
       <p>The problem: <span class="warn">8-oxodG mispairs with adenine (A)</span> instead of cytosine. So a normal G–C pair becomes a mutant <span class="warn">T–A</span> after replication.</p>
       <div class="callout key">Memorize the conversion: oxidative damage → 8-oxodG mispairs with A → <b>G–C becomes T–A</b>.</div>`},
     {h:"Spontaneous depurination", imgs:[
        {src:"slides/L2/slide-13.jpg", cap:"L2 · Slide 13 — Depurination"}
      ], html:`
       <p class="lead"><span class="kw">Spontaneous depurination</span>: a purine base (e.g., guanine) is lost, leaving an <span class="kw-2">apurinic (AP) site</span> — happens about <span class="warn">1000 times per hour in every cell</span>.</p>
       <p>If not repaired, the next round of replication inserts a <span class="warn">random base opposite the apurinic site</span> → potential mutation.</p>`},
     {h:"Spontaneous deamination", imgs:[
        {src:"slides/L2/slide-14.jpg", cap:"L2 · Slide 14 — Deamination"}
      ], html:`
       <p class="lead"><span class="kw">Deamination</span>: loss of an amino group converts <span class="kw-2">cytosine (C) → uracil (U)</span>.</p>
       <p>Uracil pairs with adenine, so a normal <span class="warn">C–G becomes A–T</span> after replication. (Uracil in DNA is a flag that something went wrong — it's normally an RNA base.)</p>
       <div class="callout key">Two conversions to keep straight: <b>oxidation → G–C→T–A</b>; <b>deamination of C→U → C–G→A–T</b>.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Oxidative damage produces 8-oxoguanine (8-oxodG), which mispairs with adenine. The resulting mutation is:", opts:["G–C → T–A","A–T → G–C","C–G → A–T","No mutation occurs"], a:0,
      exp:"8-oxodG mispairs with A, converting a G–C pair into T–A after replication."},
     {type:"mcq", q:"Deamination of cytosine produces:", opts:["Thymine","Uracil","8-oxoguanine","An apurinic site"], a:1,
      exp:"Deamination removes the amino group from cytosine, converting it to uracil (which then pairs with A, giving C–G → A–T)."},
     {type:"mcq", q:"An 'apurinic site' is created by:", opts:["Deamination of cytosine","Loss of a purine base (depurination)","UV light forming thymine dimers","Proofreading by DNA polymerase"], a:1,
      exp:"Depurination is the loss of a purine (A or G), leaving an apurinic site — about 1000 per hour per cell."},
     {type:"mcq", q:"DNA polymerase's proofreading is carried out by its:", opts:["5′→3′ polymerase activity","3′→5′ exonuclease activity","Helicase activity","Ligase activity"], a:1,
      exp:"The 3′→5′ exonuclease activity excises a wrongly inserted base; then the correct base is added. Error rate < 10⁻⁹."},
     {type:"tf", q:"Whether a base change becomes a permanent mutation depends on whether repair happens before the next round of replication.", a:true,
      exp:"True — repair before replication restores wild-type; if replication occurs first, both strands carry the change and the mutation is heritable."},
     {type:"short", q:"Name the four endogenous sources of DNA damage covered in lecture.",
      model:"Replication errors, reactive oxygen species (oxidative damage), spontaneous depurination, and spontaneous deamination.",
      pts:["Replication errors","Reactive oxygen species / oxidative","Depurination","Deamination"]},
     {type:"mcq", q:"About how often does spontaneous depurination occur in a single cell?", opts:["About once per year","About 1000 times per hour","Never under normal conditions","Only after UV exposure"], a:1,
      exp:"Spontaneous depurination occurs roughly 1000 times per hour in every cell, leaving apurinic sites."},
     {type:"tf", q:"Uracil is a normal component of DNA, so its presence never signals damage.", a:false,
      exp:"False — uracil is an RNA base. Its appearance in DNA (e.g., from cytosine deamination) flags damage to be repaired."},
     {type:"mcq", q:"A G–C pair becomes a T–A pair after replication. The most likely cause is:", opts:["Deamination of cytosine","Oxidation of guanine to 8-oxodG (mispairs with A)","UV thymine dimer","Depurination"], a:1,
      exp:"8-oxodG (oxidized guanine) mispairs with adenine, converting G–C to T–A. (Deamination of C gives C–G → A–T instead.)"},
     {type:"mcq", q:"DNA polymerase's error rate is kept below ~10⁻⁹ mainly because of:", opts:["Mismatch repair only","Its 3′→5′ exonuclease proofreading","Telomerase","Antioxidants"], a:1,
      exp:"Proofreading by the 3′→5′ exonuclease excises wrong bases during replication, keeping errors exceedingly rare (mismatch repair then catches the rest)."}
    ]
   },
   {
    id:"L2T3", title:"Exogenous sources of DNA damage",
    sub:"Damage from outside: UV, ionizing radiation, smoke, toxins (slides 15–17).",
    slides:[
     {h:"Exogenous sources (overview)", imgs:[
        {src:"slides/L2/slide-15.jpg", cap:"L2 · Slide 15 — Exogenous sources"}
      ], html:`
       <p class="lead"><span class="kw">Exogenous</span> = damage from outside the body/environment:</p>
       <ul>
        <li><span class="kw-2">UV radiation</span></li>
        <li><span class="kw-2">Ionizing radiation</span></li>
        <li><span class="kw-2">Cigarette smoke</span></li>
        <li><span class="kw-2">Environmental toxins</span></li>
       </ul>`},
     {h:"Radiation: X-rays vs. UV", imgs:[
        {src:"slides/L2/slide-16.jpg", cap:"L2 · Slide 16 — Naturally occurring radiation"}
      ], html:`
       <p class="lead">Two distinct mechanisms:</p>
       <table class="dt">
        <tr><th>Source</th><th>What it does</th></tr>
        <tr><td><b>X-rays (ionizing)</b></td><td>Break the <span class="kw-2">sugar–phosphate backbone</span> → strand breaks / deletions</td></tr>
        <tr><td><b>UV light</b></td><td>Causes adjacent thymines to form abnormal covalent bonds → <span class="kw-2">thymine dimers</span></td></tr>
       </table>
       <div class="callout key">Classic pairing: <b>X-rays → backbone breaks</b>; <b>UV → thymine (pyrimidine) dimers</b>.</div>`},
     {h:"Amounts of DNA damage", imgs:[
        {src:"slides/L2/slide-17.jpg", cap:"L2 · Slide 17 — Amounts of DNA damage"}
      ], html:`
       <p class="lead">The relative frequencies matter. Endogenous adducts like <span class="kw-2">depurination</span> happen at very high frequency per cell per day, while double-strand breaks (DSBs) are comparatively rare but far more dangerous.</p>
       <ul>
        <li><b>SSB</b> = single-strand break</li>
        <li><b>DSB</b> = double-strand break</li>
        <li><b>DNA adduct</b> = a chemical covalently bonded to DNA</li>
       </ul>
       <div class="callout tip">Frequency ≠ danger. Depurination is extremely common but easily repaired; a double-strand break is rare but can kill the cell or cause chromosomal rearrangement.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"UV light primarily damages DNA by:", opts:["Breaking the sugar-phosphate backbone","Forming thymine dimers (covalent bonds between adjacent thymines)","Deaminating cytosine","Removing purine bases"], a:1,
      exp:"UV causes adjacent thymines to form abnormal covalent bonds — thymine (pyrimidine) dimers."},
     {type:"mcq", q:"X-rays (ionizing radiation) damage DNA mainly by:", opts:["Forming thymine dimers","Breaking the sugar-phosphate backbone (strand breaks)","Oxidizing guanine to 8-oxodG","Adding methyl groups"], a:1,
      exp:"X-rays break the sugar-phosphate backbone, producing strand breaks and deletions."},
     {type:"tf", q:"UV radiation, ionizing radiation, cigarette smoke, and environmental toxins are all EXOGENOUS sources of DNA damage.", a:true,
      exp:"True — all four come from outside the cell/environment, making them exogenous."},
     {type:"mcq", q:"A double-strand break (DSB) compared to depurination is:", opts:["More frequent and less dangerous","Less frequent but more dangerous","Both more frequent and more dangerous","Identical in frequency and danger"], a:1,
      exp:"DSBs are comparatively rare but far more dangerous (can cause cell death or chromosomal rearrangement); depurination is very common but easily repaired."},
     {type:"short", q:"Contrast how X-rays and UV light damage DNA.",
      model:"X-rays are ionizing radiation that break the sugar-phosphate backbone, producing single- and double-strand breaks and deletions. UV light causes adjacent thymines (pyrimidines) to form abnormal covalent bonds called thymine dimers, distorting the helix.",
      pts:["X-rays = backbone/strand breaks","UV = thymine dimers","UV bonds adjacent thymines","X-rays are ionizing"]},
     {type:"mcq", q:"A 'DNA adduct' is:", opts:["A broken chromosome","A chemical covalently bonded to DNA","A missing telomere","A type of repair enzyme"], a:1,
      exp:"A DNA adduct is a chemical (e.g., from smoke or a toxin) covalently bonded to the DNA."},
     {type:"tf", q:"Cigarette smoke and environmental toxins are endogenous sources of DNA damage.", a:false,
      exp:"False — they come from outside the body, so they are EXOGENOUS sources."},
     {type:"mcq", q:"Which is the most dangerous (though comparatively rare) form of DNA lesion?", opts:["Single base depurination","A double-strand break (DSB)","A single deaminated cytosine","A methylated promoter"], a:1,
      exp:"Double-strand breaks are rare but most dangerous — they can cause cell death or chromosomal rearrangements."}
    ]
   },
   {
    id:"L2T4", title:"DNA repair pathways",
    sub:"The five pathways and the lesions each one fixes (slide 18).",
    slides:[
     {h:"The five DNA repair pathways", imgs:[
        {src:"slides/L2/slide-18.jpg", cap:"L2 · Slide 18 — DNA repair pathways"}
      ], html:`
       <p class="lead">Match each pathway to what it repairs — a guaranteed exam item.</p>
       <table class="dt">
        <tr><th>Pathway</th><th>Repairs</th></tr>
        <tr><td><b>Base Excision Repair (BER)</b></td><td>Small, non-helix-distorting lesions — e.g., oxidative damage (8-oxodG), deamination</td></tr>
        <tr><td><b>Nucleotide Excision Repair (NER)</b></td><td>Bulky, helix-distorting lesions — e.g., UV thymine dimers</td></tr>
        <tr><td><b>Mismatch Repair (MMR)</b></td><td>Replication errors (base–base mismatches, insertion/deletion loops)</td></tr>
        <tr><td><b>Non-Homologous End Joining (NHEJ)</b></td><td>Double-strand breaks — no template needed (can be error-prone)</td></tr>
        <tr><td><b>Homologous Recombination (HR)</b></td><td>Double-strand breaks — uses a homologous template (accurate)</td></tr>
       </table>
       <div class="callout key">Two pathways fix double-strand breaks: <b>NHEJ</b> (no template, error-prone) and <b>HR</b> (uses a template, accurate). BER = small oxidative lesions; NER = bulky/UV; MMR = replication errors.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Which pathway repairs bulky, helix-distorting lesions such as UV-induced thymine dimers?", opts:["Base Excision Repair (BER)","Nucleotide Excision Repair (NER)","Mismatch Repair (MMR)","Non-Homologous End Joining (NHEJ)"], a:1,
      exp:"NER removes bulky lesions and UV damage (thymine dimers)."},
     {type:"mcq", q:"Small oxidative lesions like 8-oxodG are primarily fixed by:", opts:["Base Excision Repair (BER)","Homologous Recombination (HR)","Nucleotide Excision Repair (NER)","NHEJ"], a:0,
      exp:"BER handles small, non-distorting lesions including oxidative damage and deamination products."},
     {type:"mcq", q:"Replication errors (base-base mismatches) are corrected by:", opts:["NER","Mismatch Repair (MMR)","HR","BER"], a:1,
      exp:"Mismatch Repair (MMR) fixes replication errors that escaped proofreading."},
     {type:"tf", q:"Both NHEJ and Homologous Recombination repair double-strand breaks, but only HR uses a homologous template.", a:true,
      exp:"True — NHEJ rejoins broken ends without a template (error-prone); HR uses a homologous template for accurate repair."},
     {type:"mcq", q:"Which repair pathway is template-dependent and therefore the most accurate for double-strand breaks?", opts:["NHEJ","Homologous Recombination (HR)","BER","MMR"], a:1,
      exp:"HR uses a homologous template (e.g., the sister chromatid), making it accurate; NHEJ is template-free and error-prone."},
     {type:"short", q:"List the five DNA repair pathways and one lesion each repairs.",
      model:"BER — small oxidative lesions (8-oxodG)/deamination; NER — bulky lesions/UV thymine dimers; MMR — replication errors/mismatches; NHEJ — double-strand breaks (no template); HR — double-strand breaks (uses homologous template).",
      pts:["BER → oxidative/small lesions","NER → bulky/UV damage","MMR → replication errors","NHEJ → double-strand breaks","HR → double-strand breaks (template)"]},
     {type:"mcq", q:"A patient cannot repair UV-induced thymine dimers and develops severe skin cancers. Which repair pathway is defective?", opts:["Mismatch Repair (MMR)","Nucleotide Excision Repair (NER)","Homologous Recombination (HR)","Base Excision Repair (BER)"], a:1,
      exp:"NER removes bulky UV lesions (thymine dimers). Its failure underlies xeroderma pigmentosum, with extreme UV sensitivity and skin cancer."},
     {type:"mcq", q:"Which pathway is error-prone because it rejoins broken DNA ends WITHOUT a template?", opts:["Homologous Recombination","Non-Homologous End Joining (NHEJ)","Base Excision Repair","Mismatch Repair"], a:1,
      exp:"NHEJ ligates broken ends directly with no template, so it can introduce errors; HR uses a template and is accurate."},
     {type:"tf", q:"Base Excision Repair (BER) is the main pathway for the oxidative lesion 8-oxodG.", a:true,
      exp:"True — BER handles small, non-distorting lesions such as oxidative damage (8-oxodG) and deamination products."}
    ]
   },
   {
    id:"L2T5", title:"Progeroid diseases & the NAD⁺ connection",
    sub:"Accelerated-aging syndromes, and how PARPs/sirtuins consume NAD⁺ (slides 8, 19–25).",
    slides:[
     {h:"Genome-maintenance defects cause accelerated aging", imgs:[
        {src:"slides/L2/slide-19.jpg", cap:"L2 · Slide 19 — Diseases of accelerated aging"}
      ], html:`
       <p class="lead">Most human diseases of <span class="kw">accelerated aging (progeroid syndromes)</span> are caused by <span class="warn">defects in genome-maintenance / DNA-repair genes</span>. This is strong evidence that DNA repair is central to normal aging.</p>
       <p>Examples from the table: <span class="kw-2">Hutchinson-Gilford progeria</span> (LMNA, chromatin organization), <span class="kw-2">Werner syndrome</span> (telomere maintenance/replication), <span class="kw-2">Bloom syndrome</span> (replication/recombination), <span class="kw-2">Xeroderma pigmentosum</span> and <span class="kw-2">Cockayne syndrome</span> (NER), <span class="kw-2">Fanconi anemia</span> (crosslink repair). These typically bring premature aging phenotypes and increased cancer.</p>`},
     {h:"\"Boost your DNA repair\" — evaluating the claim", imgs:[
        {src:"slides/L2/slide-08.jpg", cap:"L2 · Slide 8 — Supplements claiming to 'boost DNA repair'"}
      ], html:`
       <p class="lead">Many anti-aging supplements (e.g., <span class="kw-2">NAD⁺ boosters</span>) claim to "boost DNA repair." Apply the evidence checklist: <span class="warn">What evidence would convince you the claim is valid?</span></p>
       <p>You'd want human (not just mouse/cell-culture) randomized trials, adequate sample sizes, measured clinical outcomes (not just a biomarker), and no conflict of interest from the seller. The biology below is real and interesting — but a real mechanism does not by itself validate a product's health claim.</p>`},
     {h:"NAD⁺ — synthesis and consumption", imgs:[
        {src:"slides/L2/slide-20.jpg", cap:"L2 · Slide 20 — NAD⁺ pathways"}
      ], html:`
       <p class="lead"><span class="kw">NAD⁺ = nicotinamide adenine dinucleotide</span>, a central metabolic cofactor. It's made via the de novo pathway (from tryptophan) and the salvage pathway (recycling), and it's <span class="warn">consumed</span> by three big enzyme families:</p>
       <table class="dt">
        <tr><th>Consumer</th><th>Role</th></tr>
        <tr><td><b>SIRT1 (sirtuins)</b></td><td>Circadian/chromatin control, stress responses</td></tr>
        <tr><td><b>PARP1 (PARPs)</b></td><td>DNA repair</td></tr>
        <tr><td><b>CD38</b></td><td>Mitochondrial/immune function</td></tr>
       </table>
       <p>Abbreviations: <b>NR</b> = nicotinamide riboside; <b>NMN</b> = nicotinamide mononucleotide; <b>NAM</b> = nicotinamide; <b>NAMPT</b> = NAM phosphoribosyltransferase. These are the "NAD⁺ boosters" sold as supplements.</p>`},
     {h:"PARPs & sirtuins both consume NAD⁺", imgs:[
        {src:"slides/L2/slide-21.jpg", cap:"L2 · Slide 21 — PARPs"},
        {src:"slides/L2/slide-22.jpg", cap:"L2 · Slide 22 — Sirtuins"}
      ], html:`
       <p class="lead"><span class="kw">PARPs (poly(ADP-ribose) polymerases)</span>:</p>
       <ul><li>Detect DNA breaks</li><li>Recruit repair machinery</li><li><span class="warn">Consume NAD⁺</span> to do it</li></ul>
       <p class="lead"><span class="kw">Sirtuins</span>:</p>
       <ul><li>Are <span class="kw-2">NAD⁺-dependent</span> enzymes</li><li>Involved in chromatin regulation and stress responses</li></ul>
       <div class="callout key">Both PARPs and sirtuins <b>need/consume NAD⁺</b> — so they compete for the same limited pool. Heavy DNA damage → PARPs burn through NAD⁺ → less NAD⁺ left for sirtuins.</div>`},
     {h:"NAD⁺ boosters & the proposed aging cycle", imgs:[
        {src:"slides/L2/slide-23.jpg", cap:"L2 · Slide 23 — Physiological effects of NAD boosters"},
        {src:"slides/L2/slide-24.jpg", cap:"L2 · Slide 24 — The proposed aging cycle"}
      ], html:`
       <p class="lead">NAD⁺-boosting molecules are claimed to affect many systems (brain, liver, heart, muscle, immunity, etc.), and exercise and diet also raise NAD⁺. The proposed <span class="kw">aging cycle</span>:</p>
       <div class="formula">DNA damage ↑ → PARP activation ↑ → NAD⁺ consumption ↑ → cellular function ↓</div>
       <p>As damage rises, PARPs activate and deplete NAD⁺, leaving less for sirtuins and other NAD⁺-dependent functions, so cellular function declines.</p>
       <div class="callout key">Critical caveat stated on the slide: <span class="warn">causality remains an active research area</span>. The cycle is a hypothesis — appealing and mechanistic, but not proof that taking NAD⁺ boosters reverses human aging.</div>`},
     {h:"Evaluating the evidence (class activity)", imgs:[
        {src:"slides/L2/slide-25.jpg", cap:"L2 · Slide 25 — Evaluating the evidence"}
      ], html:`
       <p class="lead">The lecture closes by handing each group a "case file" (a landmark or commonly cited study) with the task to: <b>1)</b> understand the experiment, <b>2)</b> evaluate the evidence, <b>3)</b> explain its strengths and weaknesses, and <b>4)</b> decide what conclusions are justified.</p>
       <div class="callout tip">Same evidence-vs-hype muscle as Lecture 1 — applied to DNA-repair and NAD⁺ claims.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Most human progeroid (accelerated-aging) syndromes are caused by defects in:", opts:["Antioxidant supplement metabolism","Genome-maintenance / DNA-repair genes","Telomerase overexpression","Excess autophagy"], a:1,
      exp:"Progeroid syndromes (Werner, Cockayne, xeroderma pigmentosum, etc.) arise from defective DNA-repair/genome-maintenance genes — evidence that repair is central to aging."},
     {type:"mcq", q:"NAD⁺ is consumed by all of the following EXCEPT:", opts:["PARP1","SIRT1 (sirtuins)","CD38","Telomerase"], a:3,
      exp:"PARP1, sirtuins, and CD38 all consume NAD⁺. Telomerase extends telomeres and is not an NAD⁺ consumer in this scheme."},
     {type:"mcq", q:"PARPs contribute to the proposed aging cycle because they:", opts:["Produce NAD⁺ during DNA repair","Detect DNA breaks and CONSUME NAD⁺ to recruit repair machinery","Lengthen telomeres","Block sirtuin activity directly by phosphorylation"], a:1,
      exp:"PARPs detect breaks and recruit repair while consuming NAD⁺; heavy damage depletes the shared NAD⁺ pool, leaving less for sirtuins."},
     {type:"tf", q:"Sirtuins are NAD⁺-dependent enzymes involved in chromatin regulation and stress responses.", a:true,
      exp:"True — sirtuins require NAD⁺ and regulate chromatin and stress responses, which is why they compete with PARPs for NAD⁺."},
     {type:"mcq", q:"The proposed DNA-damage/NAD⁺ aging cycle is, according to the slide:", opts:["Fully proven in humans","An active research area where causality is not yet established","Disproven","Irrelevant to aging"], a:1,
      exp:"The slide explicitly notes causality remains an active research area — the cycle is a hypothesis, not settled fact."},
     {type:"short", q:"Write out the proposed DNA-damage/NAD⁺ aging cycle and state the key caveat.",
      model:"DNA damage ↑ → PARP activation ↑ → NAD⁺ consumption ↑ → cellular function ↓. The caveat is that causality remains an active research area — the cycle is a plausible hypothesis, not proof that NAD⁺ boosters reverse human aging.",
      pts:["DNA damage up → PARP up","NAD+ consumption up","Cellular function down","Causality not yet proven / still researched"]},
     {type:"mcq", q:"Why do PARPs and sirtuins effectively compete during heavy DNA damage?", opts:["They bind the same DNA break","They both require/consume NAD+ from a shared limited pool","They both lengthen telomeres","They both make ATP"], a:1,
      exp:"Both depend on NAD+. When PARPs activate strongly to repair damage, they deplete NAD+, leaving less for sirtuins."},
     {type:"tf", q:"The existence of progeroid syndromes caused by DNA-repair gene defects supports the idea that DNA repair is central to aging.", a:true,
      exp:"True — accelerated-aging diseases tied to repair-gene mutations are strong evidence linking genome maintenance to aging."},
     {type:"mcq", q:"NR (nicotinamide riboside) and NMN (nicotinamide mononucleotide) are best described as:", opts:["DNA repair enzymes","NAD+ precursors / 'boosters' sold as supplements","Telomerase activators","Types of ROS"], a:1,
      exp:"NR and NMN are NAD+ precursors marketed as boosters; the biology is real but human anti-aging efficacy is unproven."},
     {type:"short", q:"You see an ad: 'Clinically proven NAD+ booster reverses aging!' Name three things you'd check before believing it.",
      model:"Whether the evidence is from humans (not just mice/cell culture), the sample size and whether it was a controlled trial, whether real clinical outcomes (not just a biomarker) improved, and whether the seller funded the study (conflict of interest).",
      pts:["Human vs animal/cell evidence","Sample size / controlled trial","Clinical outcome vs biomarker","Conflict of interest"]}
    ]
   },
   {
    id:"L2X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions on DNA damage, repair-pathway choice, and the NAD⁺ connection.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">Harder, application-level questions — pick the right repair pathway for the scenario, reason about mutation outcomes, and separate direct from indirect evidence. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"A replication fork reaches a damaged base. If the cell REPLICATES before the lesion is repaired, the most likely outcome is:", opts:["Wild-type sequence is restored","A permanent, heritable mutation is fixed into the daughter strand","The cell instantly dies","Telomeres lengthen"], a:1,
      exp:"Repair-before-replication restores wild type; replication-before-repair locks in a permanent mutation passed to daughter cells."},
     {type:"mcq", q:"8-oxodG (oxidized guanine) mispairs with adenine. After replication this typically produces which change?", opts:["G–C → T–A transversion","A–T → G–C","No change","Loss of a chromosome arm"], a:0,
      exp:"8-oxodG pairs with A, so the original G–C becomes T–A — a transversion."},
     {type:"mcq", q:"UV light creates bulky thymine dimers. Which repair pathway removes them?", opts:["Base excision repair (BER)","Nucleotide excision repair (NER)","Mismatch repair (MMR)","Non-homologous end joining (NHEJ)"], a:1,
      exp:"NER removes bulky, helix-distorting lesions like UV thymine dimers. BER handles small/oxidative lesions; MMR fixes replication mismatches."},
     {type:"mcq", q:"A double-strand break occurs in G1 (no sister chromatid present). Which repair is used, and what's the trade-off?", opts:["HR — error-free","NHEJ — fast but error-prone (no template)","MMR — uses the mismatch","BER — removes a base"], a:1,
      exp:"Without a sister-chromatid template, the cell uses NHEJ: it directly ligates ends — fast but error-prone. HR (template-based, accurate) needs S/G2."},
     {type:"short", q:"Despite ~tens of thousands of DNA lesions per cell per day, children rarely get cancer. Explain the two main protections.", model:"(1) Efficient DNA repair pathways (BER, NER, MMR, NHEJ, HR) fix most lesions before replication. (2) The p53 checkpoint halts the cell cycle for repair, or triggers apoptosis if damage is unrepairable, eliminating dangerous cells. Cancer cells often mutate p53 to escape this.", pts:["Efficient DNA repair fixes most lesions","p53 checkpoint: arrest→repair or apoptosis","Damaged/unrepairable cells removed before becoming cancer"]},
     {type:"mcq", q:"In the proposed PARP/NAD⁺ aging cycle, chronic DNA damage leads to:", opts:["↑PARP activity → ↑NAD⁺ consumption → ↓cellular function","↓PARP → ↑NAD⁺ → improved function","Telomere lengthening","More introns"], a:0,
      exp:"Chronic damage over-activates PARP1, which consumes NAD⁺; depleting the NAD⁺ pool impairs sirtuins and other functions (causality still unproven)."},
     {type:"mcq", q:"Two healthy 70-year-olds have very different mutation burdens. The best explanation is:", opts:["Pure chance only","Inherited DNA-repair alleles (genetic) PLUS environmental exposures (smoking, UV, pollution)","Their telomerase levels are identical","Diet has no effect"], a:1,
      exp:"Mutation load reflects nature + nurture: inherited repair-enzyme efficiency and lifetime environmental damage exposure."},
     {type:"tf", q:"Measuring the level of a repair protein is DIRECT evidence that DNA was actually repaired.", a:false,
      exp:"False — protein levels are INDIRECT. Direct evidence measures the DNA itself (fewer lesions/mutations); repair-protein abundance doesn't prove the DNA got fixed."},
     {type:"mcq", q:"Only ~2% of the human genome codes for protein. A key consequence for mutation is:", opts:["Every mutation is lethal","Many mutations fall in non-coding regions and are tolerated","DNA repair is unnecessary","Mutations only occur in the 2%"], a:1,
      exp:"With ~98% non-coding, many mutations land where they have little/no protein consequence and are tolerated — though regulatory regions still matter."},
     {type:"short", q:"NAD⁺ supplements are marketed for 'DNA repair and anti-aging.' What's the rationale, and what evidence would convince you?", model:"Rationale: PARPs and sirtuins consume NAD⁺ for DNA repair and stress responses; NAD⁺ declines with age, so boosting it might restore repair capacity. Convincing evidence would be randomized controlled HUMAN trials showing reduced DNA damage or improved healthspan/longevity outcomes (not just raised NAD⁺ levels or mouse data), from sources without conflicts of interest.", pts:["PARPs/sirtuins need NAD⁺; NAD⁺ falls with age","Hypothesis: restore repair capacity","Need human RCTs showing real outcomes, not just biomarker/mouse data","Watch for conflict of interest / hype"]}
    ]
   }
  ]
 },

 /* ============================ LECTURE 3 ============================ */
 {
  id:"L3", icon:"🧬", short:"L3 · Telomeres & Senescence",
  title:"Lecture 3 — Telomeres, the DNA-Damage Response & Cellular Senescence",
  blurb:"Telomere structure and attrition, telomerase, the DNA-damage response (DDR), what makes a cell senescent (drivers, SASP, biomarkers), and senolytic vs. senomorphic drugs.",
  objectives:[
    "Describe telomere structure (TTAGGG repeats, the t-loop, the 3′ G-rich overhang) and why ends are hard to replicate (the end-replication problem)",
    "Explain telomere attrition (~50–100 bp/division), replicative crisis, and end-to-end fusion of critically short telomeres",
    "State the role of telomerase and identify which cells do/don't express it",
    "Explain how critically short telomeres are sensed as DNA damage and trigger the DDR",
    "Outline the DNA-damage response: ATM/ATR → CHK1/CHK2 → p53 → p21, and the roles of p16 and γH2AX",
    "List the drivers of senescence and describe the SASP and 'inflammaging'",
    "Name senescence biomarkers (SA-β-gal, γH2AX, SAHFs, DNA-SCARS, etc.) and explain antagonistic pleiotropy (good early, harmful late)",
    "Distinguish senescent from quiescent cells, and senolytic from senomorphic drugs"
  ],
  topics:[
   {
    id:"L3T1", title:"Why study aging + meet the telomere",
    sub:"Demographics of aging and the t-loop structure (slides 1–6).",
    slides:[
     {h:"Why we study aging — and why now", imgs:[
        {src:"slides/L3/slide-01.jpg", cap:"L3 · Slide 1 — Why do we study aging?"},
        {src:"slides/L3/slide-02.jpg", cap:"L3 · Slide 2 — Life expectancy rising"}
      ], html:`
       <p class="lead">Since 1950–55, life expectancy at birth has risen by more than 10 years in much of the world (≈25 years in Latin America/Caribbean), driven by better sanitation, nutrition, and medicine.</p>
       <p>The result: the population is aging fast, especially in developing regions, and the number of older persons is growing faster than every younger age group.</p>`},
     {h:"Healthy aging & the telomere", imgs:[
        {src:"slides/L3/slide-05.jpg", cap:"L3 · Slide 5 — Centenarians & healthy aging"},
        {src:"slides/L3/slide-06.jpg", cap:"L3 · Slide 6 — EM image of a telomere (t-loop)"}
      ], html:`
       <p class="lead">A central question: <span class="kw">what allows centenarians to age healthily?</span> Part of the answer lives at the ends of our chromosomes.</p>
       <p>The electron-microscopy image shows a <span class="kw-2">telomere</span>, and the loop is the <span class="kw">t-loop</span> — the telomere folds back and tucks its single-stranded end into the double-stranded DNA, hiding the chromosome end so the cell doesn't mistake it for a break.</p>
       <div class="callout tip">The t-loop is a protective "cap" conformation. When telomeres get too short to form it, the exposed end looks like DNA damage.</div>`}
    ],
    quiz:[
     {type:"tf", q:"Since the 1950s, human life expectancy at birth has risen by more than 10 years in much of the world.", a:true,
      exp:"True — life expectancy rose >10 years in many regions (≈25 years in Latin America/Caribbean) since 1950–55."},
     {type:"mcq", q:"In the EM image of a telomere, the loop structure is called the:", opts:["t-loop","D-loop","R-loop","nucleosome"], a:0,
      exp:"The t-loop forms when the telomere folds back and tucks its 3′ single-stranded overhang into the duplex, capping/hiding the chromosome end."},
     {type:"mcq", q:"Why does the t-loop matter for genome stability?", opts:["It speeds up replication","It hides the chromosome end so it isn't mistaken for a double-strand break","It lengthens the telomere","It recruits ribosomes"], a:1,
      exp:"By tucking the end away, the t-loop prevents the chromosome terminus from being sensed as DNA damage."}
    ]
   },
   {
    id:"L3T2", title:"Telomere structure, attrition & telomerase",
    sub:"TTAGGG, the end-replication problem, crisis, fusion, and telomerase (slides 7–9).",
    slides:[
     {h:"Telomeres protect chromosome ends from attrition", imgs:[
        {src:"slides/L3/slide-07.jpg", cap:"L3 · Slide 7 — Attrition & crisis"},
        {src:"slides/L3/slide-08.jpg", cap:"L3 · Slide 8 — Telomeres at both ends; short telomeres fuse"}
      ], html:`
       <p class="lead"><span class="kw">Telomeres</span> are repeats of the sequence <span class="kw-2">5′-TTAGGG</span> at <i>both</i> ends of every chromosome. They cap and protect the coding DNA in the middle.</p>
       <ul>
        <li>Each cell division loses <span class="warn">~50–100 bp</span> of telomere (the <span class="kw">end-replication problem</span> — DNA polymerase can't fully copy the very end of a linear chromosome, so a bit goes uncopied and is lost).</li>
        <li>When fewer than ~12 repeats remain, the cell hits <span class="warn">CRISIS</span>.</li>
        <li>Critically short telomeres can <span class="warn">fuse end-to-end</span> (shown by FISH — fluorescence in situ hybridization), causing chromosomal instability.</li>
       </ul>
       <div class="callout key">Why telomeres shorten: in each division a small part of the end is left uncopied and lost. This is the molecular basis of the "Hayflick limit" on divisions.</div>`},
     {h:"Telomere structure & telomerase", imgs:[
        {src:"slides/L3/slide-09.jpg", cap:"L3 · Slide 9 — Telomere structure & vulnerabilities"}
      ], html:`
       <p class="lead">A telomere isn't uniform — it has regions:</p>
       <ul>
        <li>Nontelomeric chromosome DNA → subtelomeric (telomere-like, 2–3 kbp) → double-stranded telomeric region (5–10 kbp) → a <span class="kw-2">single-stranded 3′ G-rich overhang</span> (several hundred bases).</li>
       </ul>
       <p>The G-rich strand is <span class="warn">hard to replicate</span> and vulnerable to endonucleases, exonucleases, and electrophiles.</p>
       <p><span class="kw">Telomerase</span> is the enzyme that rebuilds telomeres — it eliminates the shortening that would otherwise occur during replication, slowing cellular aging. It's active in stem cells and most cancers, but <span class="warn">most ordinary somatic cells (e.g., heart muscle cells) do not regularly express it</span>.</p>
       <div class="callout key">Critically short telomeres are <b>recognized as DNA damage</b> → they trigger the DNA-damage response and push the cell into senescence. Telomerase counters this; little/no telomerase → cells age and lose function.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Why does telomere length shorten over time?", opts:["Telomerase actively cuts it","In each cell division, a small part of the telomere end is left uncopied and lost","ROS dissolve the telomere","Histones eat the telomere"], a:1,
      exp:"The end-replication problem: DNA polymerase can't fully copy the very end, so ~50–100 bp is lost each division."},
     {type:"mcq", q:"A cancer cell line has inappropriate telomerase expression. Which treatment best prevents it from dividing indefinitely?", opts:["A drug that blocks the promoter of the telomerase gene","Adding more telomerase","Shortening the cell cycle","Increasing ROS only"], a:0,
      exp:"Blocking the telomerase gene's promoter shuts off telomerase, so telomeres shorten with each division and the cancer cells can no longer divide indefinitely."},
     {type:"mcq", q:"Which cells do NOT regularly express the telomerase gene?", opts:["Embryonic stem cells","Most cancer cells","Heart muscle cells","Germline cells"], a:2,
      exp:"Most ordinary somatic cells, such as heart muscle cells, do not regularly express telomerase; stem cells, germline, and most cancers do."},
     {type:"tf", q:"Critically short telomeres are recognized by the cell as DNA damage.", a:true,
      exp:"True — once telomeres are too short to form the protective t-loop, the exposed end is sensed as a DNA double-strand break, triggering the DDR and senescence."},
     {type:"mcq", q:"What is most likely to result from reduced or very little active telomerase?", opts:["Cells become immortal","Cells age and begin to lose function","Telomeres lengthen","Faster cell division"], a:1,
      exp:"Without telomerase, telomeres keep shortening; cells age, stop dividing, and lose function."},
     {type:"short", q:"Explain the role of telomerase in replicating the ends of linear chromosomes.",
      model:"Telomerase catalyzes the lengthening of telomeres, adding TTAGGG repeats to chromosome ends. This compensates for the shortening that occurs during DNA replication (the end-replication problem), so it can eliminate telomere shortening and slow cellular aging.",
      pts:["Lengthens/adds telomere repeats","Compensates for end-replication problem","Counteracts shortening from replication","Slows cellular aging"]}
    ]
   },
   {
    id:"L3T3", title:"The DNA-damage response (DDR)",
    sub:"Measuring damage, γH2AX, and the ATM/ATR → p53 → p21 pathway (slides 10–11).",
    slides:[
     {h:"Measuring endogenous DNA damage is hard", imgs:[
        {src:"slides/L3/slide-10.jpg", cap:"L3 · Slide 10 — Measuring DNA damage"}
      ], html:`
       <p class="lead">On average ~1 in 200,000 bases is damaged at any time, the lesions are diverse, unstable, and even produced during DNA isolation — so we use <span class="kw">indirect measures</span>:</p>
       <ul>
        <li>Transcription factor <span class="kw-2">p53 activation</span></li>
        <li><span class="kw-2">γH2AX</span> = gamma-phosphorylated histone H2A.X (a marker laid down at break sites — a hallmark of DNA-damage signaling)</li>
        <li>Non-specific measures like the <span class="kw-2">COMET assay</span></li>
        <li>Highly sensitive but laborious <span class="kw-2">LC-MS</span> (liquid chromatography–mass spectrometry)</li>
       </ul>
       <div class="callout tip">Cells from older individuals show MORE γH2AX staining than younger cells → interpreted as increased DNA-damage signaling.</div>`},
     {h:"The DNA-damage response pathway (DDR)", imgs:[
        {src:"slides/L3/slide-11.jpg", cap:"L3 · Slide 11 — DDR pathway"}
      ], html:`
       <p class="lead">When DNA is damaged, the <span class="kw">DNA-damage response (DDR)</span> fires:</p>
       <div class="formula">DNA damage → ATM/ATR → CHK1/CHK2 → p53 → p21 (+ p16 → cyclin-CDK inhibition)</div>
       <p>The outcomes branch to <span class="kw-2">apoptosis</span>, <span class="kw-2">DNA repair</span>, or <span class="kw-2">cell-cycle arrest</span> — all serving to protect <span class="kw">genomic stability</span>. Persistent, unrepaired damage drives the cell into <span class="warn">senescence</span> rather than transient arrest.</p>
       <table class="dt">
        <tr><th>Player</th><th>Role</th></tr>
        <tr><td><b>γH2AX</b></td><td>Marks/ signals the break site (a readout of damage)</td></tr>
        <tr><td><b>p53</b></td><td>Master sensor/transcription factor; induces p21</td></tr>
        <tr><td><b>p21</b></td><td>CDK inhibitor → cell-cycle arrest (downstream of p53)</td></tr>
        <tr><td><b>p16</b></td><td>Inhibits cyclin-CDK, preventing cell-cycle progression (a key senescence enforcer)</td></tr>
       </table>
       <p>ATM/ATR are <span class="kw-2">kinases</span> (they add phosphate to activate other proteins). p53 sits at the fork: route to <b>apoptosis</b> (caspases + PARP) or <b>cell-cycle arrest</b> (via p21).</p>`},
     {h:"🎙️ From the lecture (Meeting 3) — lab assays for DNA damage", imgs:[], html:`
       <div class="callout">🎙️ <b>From the recorded Meeting 3 lecture.</b> The professor said the <b>slide-presentation assignment is on these lab assays</b> — so know what each one measures, what info it gives, and what an aged sample looks like.</div>
       <p class="lead">Why measuring DNA damage is <span class="warn">hard</span>: only ~<b>1 in 200,000 bases</b> is damaged at any time (out of ~3 billion), there are many lesion <i>types</i>, damage changes over time, and <b>isolating the DNA itself can induce damage</b>. So we lean on indirect biomarkers and specialized assays.</p>
       <table class="dt">
        <tr><th>Assay</th><th>What it does / measures</th></tr>
        <tr><td><b>FISH</b> (fluorescence in situ hybridization)</td><td>A <span class="kw-2">probe</span> (short complementary DNA tagged with a fluorophore) binds a target sequence — e.g., telomeres light up as dots. Used to see telomeres and end-to-end fusions.</td></tr>
        <tr><td><b>Immunofluorescence</b></td><td>Fluorophore-tagged <span class="kw-2">antibodies</span> bind a specific protein (e.g., phospho-γH2AX), revealing damage <span class="kw-2">foci</span> on the DNA.</td></tr>
        <tr><td><b>COMET assay</b></td><td>Single-cell gel electrophoresis: broken DNA fragments migrate into a <span class="kw-2">"comet tail."</span> Longer tail = more breakage. Measures overall damage but is <span class="warn">not specific</span> to lesion type.</td></tr>
        <tr><td><b>LC-MS</b> (liquid chromatography–mass spectrometry)</td><td>Very <span class="kw">specific</span>: compares your DNA to a standard of one altered nucleotide; a laser reads particle mass/shape to count that lesion — but only <b>one lesion type at a time</b>.</td></tr>
       </table>
       <div class="callout key">Indirect biomarkers of DNA damage: <b>activated p53</b>, <b>γH2AX</b> (phosphorylated histone H2AX), and <b>p21</b> (signals the arrest pathway). Direct-ish: the COMET assay and LC-MS look at the DNA itself.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"In FISH (fluorescence in situ hybridization), a 'probe' is:", opts:["An antibody against a protein","A short complementary DNA sequence tagged with a fluorophore","A type of laser","A senescent cell"], a:1,
      exp:"FISH uses a fluorophore-tagged complementary DNA probe that binds its target sequence (e.g., telomeres) so it glows under the microscope."},
     {type:"mcq", q:"The COMET assay measures DNA damage by:", opts:["Counting one specific lesion type with a laser","Running single-cell DNA on a gel — broken fragments form a 'comet tail' (more tail = more damage)","Binding antibodies to p53","Sequencing the whole genome"], a:1,
      exp:"COMET = single-cell gel electrophoresis; broken DNA migrates into a comet tail. It gauges overall breakage but isn't specific to the lesion type."},
     {type:"mcq", q:"Which assay is the most SPECIFIC but can only quantify one lesion type at a time?", opts:["COMET assay","FISH","LC-MS (liquid chromatography–mass spectrometry)","SA-β-gal stain"], a:2,
      exp:"LC-MS compares your DNA to a standard of one altered nucleotide and counts it by mass/shape — very specific, but one lesion type per run."},
     {type:"tf", q:"Measuring DNA damage is hard partly because isolating the DNA from cells can itself induce damage.", a:true,
      exp:"True — only ~1 in 200,000 bases is damaged, there are many lesion types, and the isolation process itself can create damage."},
     {type:"mcq", q:"Immunofluorescence reveals DNA-damage 'foci' by using:", opts:["Fluorophore-tagged antibodies against a specific protein (e.g., phospho-γH2AX)","A comet tail","A DNA probe only","Blue β-gal color"], a:0,
      exp:"Immunofluorescence uses tagged antibodies that bind a specific protein; anti–phospho-γH2AX concentrates at damage foci."},
     {type:"mcq", q:"Cells from older individuals show increased γH2AX staining vs. younger cells. The most likely interpretation is:", opts:["Increased DNA-damage signaling","Increased telomerase","Decreased senescence","More ATP production"], a:0,
      exp:"γH2AX (gamma-phosphorylated histone H2A.X) marks DNA breaks; more staining indicates increased DNA-damage signaling with age."},
     {type:"mcq", q:"A population of fibroblasts accumulates persistent DNA damage and becomes senescent. Which pathway most directly mediates this?", opts:["Activation of p53 followed by induction of p21","Telomerase activation","HSP90 inhibition","BER only"], a:0,
      exp:"Persistent damage activates p53, which induces p21 (a CDK inhibitor) to enforce the cell-cycle arrest of senescence."},
     {type:"mcq", q:"What is the primary role of p16 in cellular senescence?", opts:["Lengthening telomeres","Inhibiting cyclin-CDK and preventing cell-cycle progression","Producing ROS","Degrading p53"], a:1,
      exp:"p16 inhibits cyclin-CDK complexes, blocking cell-cycle progression — a core enforcer of the senescent arrest."},
     {type:"tf", q:"γH2AX is gamma-phosphorylated histone H2A.X and is used as an indirect marker of DNA damage.", a:true,
      exp:"True — γH2AX forms at break sites and is a widely used readout of DNA-damage signaling."},
     {type:"mcq", q:"Order of the core DDR signaling pathway is:", opts:["p21 → p53 → ATM/ATR → DNA damage","DNA damage → ATM/ATR → CHK1/CHK2 → p53 → p21","DNA damage → p21 → telomerase","p16 → ATM → ROS → apoptosis"], a:1,
      exp:"Damage activates ATM/ATR, which signal through CHK1/CHK2 to p53, which induces p21 → arrest (protecting genomic stability)."}
    ]
   },
   {
    id:"L3T4", title:"Cellular senescence — drivers, SASP & biomarkers",
    sub:"What pushes a cell into senescence, what it secretes, and how we detect it (slides 12–13).",
    slides:[
     {h:"What drives senescence — and what it drives", imgs:[
        {src:"slides/L3/slide-12.jpg", cap:"L3 · Slide 12 — Events that drive senescence"}
      ], html:`
       <p class="lead"><span class="kw">Five drivers</span> push a normal cell into senescence:</p>
       <ul>
        <li>DNA damage</li><li>Telomere shortening</li><li>Epigenetic dysregulation</li><li>Oncogene induction</li><li>Reactive metabolites</li>
       </ul>
       <p>Once senescent, the cell drives downstream events: <span class="kw-2">stem cell exhaustion</span>, the <span class="kw-2">SASP (senescence-associated secretory phenotype)</span>, reinforcement/amplification of senescence in neighbors, and <span class="warn">inflammaging</span> (chronic low-grade inflammation).</p>
       <div class="callout key">Antagonistic pleiotropy: senescence is <b>beneficial early in life</b> (it suppresses cancer by stopping damaged cells dividing) but <b>harmful later</b> (accumulating senescent cells impair tissue regeneration and inflame tissue via SASP).</div>`},
     {h:"Senescence biomarkers", imgs:[
        {src:"slides/L3/slide-13.jpg", cap:"L3 · Slide 13 — Senescence biomarkers"}
      ], html:`
       <p class="lead">A senescent cell can be detected by a panel of markers (no single one is definitive):</p>
       <ul>
        <li><span class="kw-2">SA-β-gal</span> = senescence-associated β-galactosidase (the classic stain)</li>
        <li><span class="kw-2">γH2AX</span> (DNA-damage foci), <span class="kw-2">DNA-SCARS</span>, <span class="kw-2">SAHFs</span> = senescence-associated heterochromatin foci</li>
        <li><span class="kw-2">MMPs</span> (matrix metalloproteinases) and other SASP factors, elevated <span class="kw-2">ROS</span>, <span class="kw-2">ARF</span> (alternative reading frame)</li>
        <li>Morphological changes: enlarged, flattened cells</li>
       </ul>
       <div class="callout key">Senescent vs. quiescent: a <b>quiescent</b> cell is reversibly resting and can re-enter the cell cycle; a <b>senescent</b> cell is <b>permanently arrested</b> and often secretes inflammatory factors (SASP).</div>`}
    ],
    quiz:[
     {type:"short", q:"Why might cellular senescence be beneficial early in life but harmful later in life?",
      model:"Early in life, senescence is beneficial because it suppresses cancer — it permanently stops damaged or precancerous cells from dividing. Later in life it becomes harmful because senescent cells accumulate, impair tissue regeneration (linked to stem cell exhaustion), and secrete the pro-inflammatory SASP that drives inflammaging and damages surrounding tissue.",
      pts:["Early: suppresses cancer (stops damaged cells dividing)","Late: senescent cells accumulate","Impairs tissue regeneration","SASP → inflammation/inflammaging"]},
     {type:"mcq", q:"Which characteristic best distinguishes a senescent cell from a quiescent cell?", opts:["Senescent cells are permanently arrested and often secrete inflammatory factors","Senescent cells can easily re-enter the cell cycle","Quiescent cells secrete the SASP","They are identical"], a:0,
      exp:"Senescent cells are permanently arrested and secrete the SASP; quiescent cells are reversibly resting and can re-enter the cycle."},
     {type:"mcq", q:"Which is the classic histochemical biomarker of senescence?", opts:["SA-β-galactosidase (SA-β-gal)","Telomerase","ATP synthase","Hemoglobin"], a:0,
      exp:"Senescence-associated β-galactosidase (SA-β-gal) is the classic senescence stain; SAHFs, γH2AX, and DNA-SCARS are additional markers."},
     {type:"mcq", q:"Which is NOT one of the listed drivers of senescence?", opts:["DNA damage","Telomere shortening","Oncogene induction","Telomerase overexpression in somatic cells"], a:3,
      exp:"The drivers are DNA damage, telomere shortening, epigenetic dysregulation, oncogene induction, and reactive metabolites. Telomerase activity actually opposes senescence."},
     {type:"tf", q:"SAHFs (senescence-associated heterochromatin foci) and the SASP are both associated with senescent cells.", a:true,
      exp:"True — SAHFs are a chromatin biomarker of senescence and the SASP is its secretory phenotype."}
    ]
   },
   {
    id:"L3T5", title:"Senolytics & senomorphics",
    sub:"Drugs that clear or quiet senescent cells, and how we screen for them (slides 14–15).",
    slides:[
     {h:"Senolytics vs. senomorphics", imgs:[
        {src:"slides/L3/slide-14.jpg", cap:"L3 · Slide 14 — Senescent cell screening assay"},
        {src:"slides/L3/slide-15.jpg", cap:"L3 · Slide 15 — First- & second-generation senolytics"}
      ], html:`
       <p class="lead">Two drug strategies target senescent cells (Sncs):</p>
       <table class="dt">
        <tr><th>Class</th><th>What it does</th></tr>
        <tr><td><b>Senolytics</b></td><td><span class="kw">Eliminate/kill senescent cells</span> — reduce their number in tissue</td></tr>
        <tr><td><b>Senomorphics</b></td><td>Don't kill the cells but <span class="kw-2">suppress the SASP</span> — reduce SA-β-gal-positive output without reducing cell number</td></tr>
       </table>
       <p>First-generation senolytics were hypothesis-driven/mechanism-based: e.g., <span class="kw-2">dasatinib, quercetin, fisetin, navitoclax (ABT-263), HSP90 inhibitors, FOXO4-related peptide</span>. Second-generation methods use high-throughput screens, toxin-loaded nanoparticles, immunomodulators, and cell-based therapies.</p>
       <p>Screening uses senescent MEFs (mouse embryonic fibroblasts) and markers like <span class="kw-2">C₁₂FDG</span> (a fluorescent SA-β-gal substrate).</p>
       <div class="callout key">A drug that truly reduces senescence should show <b>decreased p21, decreased SA-β-gal staining, and increased EdU incorporation</b> (EdU = cells re-entering S-phase/DNA synthesis → proliferation restored).</div>`},
     {h:"🎙️ From the lecture (Meeting 3) — the screen, more biomarkers & evidence-vs-hype", imgs:[], html:`
       <div class="callout">🎙️ <b>From the recorded Meeting 3 lecture.</b> How the senolytic screen actually works, the fuller biomarker panel, and the professor's "would you buy this?" punchline.</div>
       <p class="lead">The <span class="kw">SA-β-gal screen</span> (the lab-assay assignment): take <span class="kw-2">MEFs (mouse embryonic fibroblasts)</span>, often from <span class="kw-2">DNA-repair-deficient mice</span>, hit them with genotoxic stress → a mix of senescent + non-senescent cells. Plate one clone per well in <b>96- or 384-well plates</b>, add a candidate drug, then add the <span class="kw-2">β-galactosidase substrate</span>. Senescent cells express SA-β-gal and turn <span class="kw-2">blue</span>; a plate reader quantifies it.</p>
       <ul>
        <li><b>More</b> blue after drug → the drug <i>induces</i> senescence (useful against cancer).</li>
        <li><b>Less</b> blue (fewer senescent cells) → a <span class="kw">senolytic</span>. (A <span class="kw-2">senomorphic</span> changes the phenotype without killing — cells survive but stop showing the senescent output.)</li>
       </ul>
       <p>Fuller <span class="kw">senescence biomarker panel</span> (no single marker is enough — combine several): p53, p21, p16; short telomere length; γH2AX; <span class="kw-2">SADS</span> (senescence-associated DNA-damage foci, seen by immunofluorescence); <span class="kw-2">SAHF</span> (senescence-associated heterochromatin foci); <span class="kw-2">DAMPs</span> (danger-associated molecular patterns); ROS; <span class="kw-2">cytoplasmic chromatin / CCF</span> (lamins &amp; HMGB drop → nuclear membrane gets porous → DNA leaks into the cytoplasm = an alarm signal); SA-β-gal; changed surface receptors; degraded extracellular matrix; secreted chemokines → inflammation.</p>
       <div class="callout key">Evidence-vs-hype punchline he made twice: a senolytic that <b>blindly kills every senescent cell</b>, or a therapy that <b>keeps telomeres long forever</b>, is dangerous — both senescence and telomere shortening are <span class="kw">protective anti-cancer mechanisms</span>. Cells that keep telomerase on and telomeres long are basically what <b>cancer cells</b> do. An ideal drug targets the <i>upstream cause</i> (e.g., less DNA damage), not "remove all senescent cells."</div>`}
    ],
    quiz:[
     {type:"mcq", q:"In the SA-β-gal senolytic screen, senescent cells turn blue because they:", opts:["Contain telomerase","Express senescence-associated β-galactosidase, which converts an added substrate to a blue product","Have long telomeres","Lack DNA damage"], a:1,
      exp:"Senescent cells express SA-β-gal; adding its substrate yields a blue color a plate reader can quantify."},
     {type:"mcq", q:"In that screen, a drug that produces FEWER blue (senescent) cells is acting as a:", opts:["Senescence inducer","Senolytic","Telomerase activator","Mutagen"], a:1,
      exp:"Fewer senescent cells after treatment = a senolytic. More blue would mean the drug induces senescence (useful against cancer)."},
     {type:"mcq", q:"'Cytoplasmic chromatin' (genomic DNA leaking into the cytoplasm) becomes a senescence biomarker because:", opts:["DNA normally lives in the cytoplasm","Lamins/HMGB decline make the nuclear membrane porous, letting damaged DNA escape — an alarm signal","It lengthens telomeres","It is how cells divide"], a:1,
      exp:"As lamins and HMGB proteins drop, the nuclear envelope becomes porous and damaged DNA leaks out — a danger signal characteristic of senescence."},
     {type:"tf", q:"A therapy that keeps telomeres long forever is risk-free and simply prevents aging.", a:false,
      exp:"False — keeping telomerase on / telomeres long indefinitely is exactly what cancer cells do; telomere shortening and senescence are protective anti-cancer mechanisms."},
     {type:"short", q:"A company sells a senolytic that 'kills ALL your senescent cells to make you young forever.' Using the lecture, give two reasons to be skeptical.",
      model:"Senescence is adaptive/protective — it stops damaged or pre-cancerous cells from dividing, so blindly removing all senescent cells could let cancer or damaged cells proliferate. We also need some cell turnover, and an ideal drug should target the upstream cause (e.g., reduce DNA damage) rather than indiscriminately clearing senescent cells. (Likewise, keeping telomeres long forever mimics cancer.)",
      pts:["Senescence protects against cancer","Blindly clearing it could enable cancer/damaged cells","Better to target upstream cause","Long telomeres forever = cancer-like"]},
     {type:"mcq", q:"What is the proposed goal of senolytic therapies?", opts:["Eliminate senescent cells from tissues","Increase the number of senescent cells","Lengthen telomeres directly","Block all cell division"], a:0,
      exp:"Senolytics aim to selectively eliminate senescent cells from tissues."},
     {type:"mcq", q:"A scientist treats cells with a compound believed to REDUCE senescence. Which result best supports that conclusion?", opts:["Increased p21 and increased SA-β-gal","Decreased p21, decreased SA-β-gal staining, and increased EdU incorporation","Increased SA-β-gal and decreased EdU","No change in any marker"], a:1,
      exp:"Less senescence = lower p21 and SA-β-gal, plus increased EdU incorporation (cells resuming DNA synthesis/proliferation)."},
     {type:"mcq", q:"How do senomorphic drugs differ from senolytics?", opts:["Senomorphics kill senescent cells; senolytics don't","Senomorphics suppress the SASP without reducing senescent-cell number; senolytics eliminate the cells","They are the same thing","Senomorphics lengthen telomeres"], a:1,
      exp:"Senomorphics quiet the SASP without killing the cells (no reduction in cell number); senolytics actually clear senescent cells."},
     {type:"tf", q:"Dasatinib, quercetin, and fisetin are examples of senolytic agents.", a:true,
      exp:"True — these are among the first-generation, mechanism-based senolytics."},
     {type:"mcq", q:"EdU incorporation is used in these assays to measure:", opts:["Cell death","Cells entering S-phase / DNA synthesis (proliferation)","SASP secretion","Telomere length"], a:1,
      exp:"EdU is incorporated into newly synthesized DNA, so increased EdU = cells re-entering the cell cycle and proliferating."}
    ]
   },
   {
    id:"L3X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions on telomeres, the DDR, and senescence biology.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">Harder, application-level questions — interpret screens, distinguish senescent vs quiescent, and reason about why senescence is a double-edged sword. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"The end-replication problem arises because:", opts:["DNA polymerase cannot fully replicate the very end of the lagging strand","Telomerase destroys chromosome ends","Histones block replication","RNA cannot be made"], a:0,
      exp:"DNA polymerase can't complete the lagging-strand end, so ~50–100 bp are lost each division → progressive telomere shortening."},
     {type:"mcq", q:"A critically short telomere triggers senescence because the cell interprets it as:", opts:["A signal to divide faster","DNA damage, activating the DDR (ATM/ATR → p53 → p21)","A nutrient signal","An epigenetic mark"], a:1,
      exp:"An uncapped/short telomere looks like a double-strand break → DNA-damage response → p53/p21 → senescent arrest."},
     {type:"mcq", q:"What distinguishes a SENESCENT cell from a QUIESCENT cell?", opts:["Quiescent cells secrete SASP; senescent cells don't","Senescent = permanently arrested + secretes SASP; quiescent = reversibly resting, can re-enter the cycle","They are identical","Senescent cells divide faster"], a:1,
      exp:"Senescent = irreversible arrest with SASP. Quiescent = reversible rest; can resume dividing when signaled."},
     {type:"mcq", q:"In the DDR, which CDK inhibitor is induced BY p53, and which acts independently of p53?", opts:["p21 is p53-induced; p16 is p53-independent","p16 is p53-induced; p21 is independent","Both are p53-induced","Neither involves p53"], a:0,
      exp:"p21 is a direct p53 transcriptional target; p16 enforces senescent arrest independently of p53. Both inhibit cyclin–CDK."},
     {type:"tf", q:"Because short telomeres cause senescence, keeping telomeres long forever would be a risk-free anti-aging strategy.", a:false,
      exp:"False — unlimited telomere maintenance (like telomerase-high cancer cells) removes a key anti-cancer brake, raising cancer risk. Senescence is protective."},
     {type:"short", q:"Explain the 'antagonistic pleiotropy' of cellular senescence — why it helps early in life but harms later.", model:"Early: oncogene-induced senescence stops damaged/pre-cancerous cells from dividing, suppressing cancer — beneficial. Late: senescent cells accumulate as clearance declines, and their SASP drives chronic inflammation ('inflammaging'), impairs regeneration, and promotes age-related disease — harmful. The mechanism is selected for its early benefit despite the late cost.", pts:["Early benefit: suppresses cancer (oncogene-induced senescence)","Late harm: accumulation + SASP/inflammaging, impaired regeneration","Antagonistic pleiotropy = early benefit, late cost"]},
     {type:"mcq", q:"A senolytic and a senomorphic differ how?", opts:["Senolytics kill senescent cells; senomorphics suppress the SASP without killing them","They are the same","Senomorphics kill cells; senolytics don't","Both lengthen telomeres"], a:0,
      exp:"Senolytics (e.g., dasatinib, quercetin, fisetin) eliminate senescent cells; senomorphics suppress the harmful SASP without killing them."},
     {type:"mcq", q:"In a multi-well SA-β-gal screen, a candidate drug reduces the number of blue cells vs control. The drug is most likely a:", opts:["Senescence inducer","Senolytic (clears senescent cells)","Telomerase activator","Mutagen"], a:1,
      exp:"Fewer SA-β-gal⁺ (blue) cells = fewer senescent cells = the drug cleared them → senolytic. More blue = a senescence inducer."},
     {type:"tf", q:"γH2AX foci mark sites of DNA breaks, increase with age, and serve as an indirect biomarker of damage/senescence.", a:true,
      exp:"True — phospho-γH2AX marks double-strand breaks; foci rise with age and are part of the senescence biomarker panel (indirect)."},
     {type:"short", q:"Why might a therapy that clears ALL senescent cells be dangerous? Reference their protective role.", model:"Senescence is protective: oncogene-induced senescence arrests would-be cancer cells, and senescent cells transiently aid wound healing/tissue repair. Indiscriminately killing all of them could remove anti-cancer protection and impair normal repair. Targeted, partial clearance (or SASP suppression) is safer than total elimination.", pts:["Senescence suppresses cancer (oncogene-induced arrest)","Roles in wound healing/repair","Total clearance risks cancer / impaired repair","Targeted/partial approach safer"]}
    ]
   }
  ]
 },

 /* ============================ LECTURE 4 ============================ */
 {
  id:"L4", icon:"🧩", short:"L4 · Epigenetics",
  title:"Lecture 4 — Epigenetics, Chromatin & the Epigenetic Clock",
  blurb:"DNA methylation and histone modification, how chromatin controls gene expression, genetic vs. epigenetic change, and epigenetic clocks that estimate biological age.",
  objectives:[
    "Define epigenetics (heritable change in gene expression without changing the DNA sequence) and give the cloned-animal evidence",
    "Explain how DNA methylation (by DNMTs at CpG islands) and methyl-CpG-binding proteins silence transcription",
    "Relate histone acetylation/methylation and euchromatin vs. heterochromatin to gene activity",
    "Contrast genetic and epigenetic change (sequence vs. packaging; irreversible vs. reversible)",
    "Explain how epigenetic clocks use DNA-methylation patterns to estimate biological age, why diverse training data matters, and the causal-vs-correlative caveat"
  ],
  topics:[
   {
    id:"L4T1", title:"What epigenetics is",
    sub:"Same genome, different phenotype; methylation copied through replication (slides 2–4).",
    slides:[
     {h:"Differentiated cells keep the whole genome", imgs:[
        {src:"slides/L4/slide-02.jpg", cap:"L4 · Slide 2 — Nuclear transplantation (cloning)"}
      ], html:`
       <p class="lead">Differentiated cells contain <span class="kw">all the genetic instructions needed to direct a complete organism</span>. <span class="kw-2">Nuclear transplantation</span> (placing a differentiated donor nucleus into an enucleated egg) produces clones — calves from the same donor are genetically identical.</p>
       <div class="callout key">Conclusion: differentiation doesn't delete genes. What differs between cell types is which genes are <b>expressed</b> — that's epigenetics.</div>`},
     {h:"Epigenetics — definition (Copy Cat)", imgs:[
        {src:"slides/L4/slide-03.jpg", cap:"L4 · Slide 3 — Copy Cat, a clone with a different coat"},
        {src:"slides/L4/slide-04.jpg", cap:"L4 · Slide 4 — Methylation copied during replication"}
      ], html:`
       <p class="lead"><span class="kw">Epigenetics</span> = heritable changes in gene expression <span class="warn">without changing the DNA sequence</span>. "Copy Cat" is a genetic clone of Rainbow yet has a different coat pattern — identical DNA, different phenotype.</p>
       <ul><li>Think of it as: <span class="kw-2">DNA = the hardware</span>, <span class="kw-2">gene expression = the software</span>.</li></ul>
       <p>DNA methylation is a true epigenetic mark because the methylation pattern is <span class="kw">copied during DNA replication</span> by <span class="kw-2">DNMT (DNA methyltransferase)</span>, so it's heritable across cell divisions even though the sequence never changes.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"Epigenetics is best defined as:", opts:["Changes in the DNA base sequence","Heritable changes in gene expression WITHOUT changing the DNA sequence","Random protein folding","Telomere shortening"], a:1,
      exp:"Epigenetics = heritable changes in gene expression that do not alter the underlying DNA sequence."},
     {type:"mcq", q:"What can you conclude from nuclear transplantation / cloning experiments (e.g., in cattle)?", opts:["Differentiated cells lose most genes","A differentiated cell's nucleus retains the complete genome and can direct a whole organism","DNA is rewritten during differentiation","Only egg cells contain DNA"], a:1,
      exp:"Cloning shows the differentiated nucleus still holds the full genome; differences between cell types are epigenetic, not genetic."},
     {type:"tf", q:"DNA methylation is considered epigenetic because the pattern is copied during DNA replication (by DNMTs), making it heritable without changing the sequence.", a:true,
      exp:"True — DNMTs copy the methylation pattern to daughter strands, so the mark is heritable yet the sequence is unchanged."},
     {type:"mcq", q:"'Copy Cat' (a clone with a different coat than its genetic donor) illustrates that:", opts:["Clones are impossible","Identical DNA can give different phenotypes via epigenetics","Coat color is not genetic at all","Methylation changes the DNA sequence"], a:1,
      exp:"Same genome, different phenotype = epigenetic regulation of gene expression."}
    ]
   },
   {
    id:"L4T2", title:"DNA methylation & chromatin",
    sub:"CpG islands, euchromatin vs. heterochromatin, histone modifications (slides 5–10).",
    slides:[
     {h:"Methylation silences genes at CpG islands", imgs:[
        {src:"slides/L4/slide-05.jpg", cap:"L4 · Slide 5 — Methyl added to cytosine by DNMTs"},
        {src:"slides/L4/slide-06.jpg", cap:"L4 · Slide 6 — CpG-island methylation silences genes"}
      ], html:`
       <p class="lead"><span class="kw">DNA methylation</span> adds a methyl group to the cytosine in a 5′-CpG-3′ dinucleotide, catalyzed by <span class="kw-2">DNMTs</span>. At promoter <span class="kw-2">CpG islands</span>, this regulates transcription initiation.</p>
       <table class="dt">
        <tr><th>State</th><th>What happens</th></tr>
        <tr><td><b>Unmethylated CpG island</b></td><td><span class="kw">Euchromatin</span> — open chromatin, activator + pol II bind → <b>transcription ON</b></td></tr>
        <tr><td><b>Methylated CpG island</b></td><td>Methyl-CpG-binding proteins (<span class="kw-2">MeCP</span>) bind and close chromatin → <span class="kw">heterochromatin</span> → <b>silencing</b></td></tr>
       </table>
       <div class="callout key">Heavily methylated promoter DNA → <b>repression of transcription</b> (a guaranteed exam item).</div>`},
     {h:"Chromatin & histone-tail modifications", imgs:[
        {src:"slides/L4/slide-09.jpg", cap:"L4 · Slide 9 — Chromatin & the nucleosome"},
        {src:"slides/L4/slide-10.jpg", cap:"L4 · Slide 10 — Histone-tail chemical modifications"}
      ], html:`
       <p class="lead"><span class="kw">Chromatin</span> is roughly ⅓ DNA, ⅓ histones, ⅓ nonhistone proteins. DNA (negatively charged) wraps around histones (positively charged) into nucleosomes; nucleosome spacing controls <span class="kw-2">accessibility</span> and therefore gene expression.</p>
       <p>The four core histone tails can be chemically modified:</p>
       <ul>
        <li><span class="kw-2">Acetylation</span> (by HAT, histone acetyltransferase) of histone tails → <span class="kw">euchromatin</span>, transcribed.</li>
        <li><span class="kw-2">Methylation</span> → heterochromatin OR euchromatin <i>depending on which residue</i> is methylated (e.g., HP-1 + HMTase build heterochromatin).</li>
       </ul>
       <div class="callout tip">Don't overgeneralize: DNA methylation generally silences, but histone methylation can activate or repress depending on the specific residue.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Heavily methylated promoter DNA is associated with:", opts:["Activation of transcription","Splicing exons out of mRNA","Repression of transcription","Faster replication"], a:2,
      exp:"Methylation at CpG islands recruits MeCP proteins that close chromatin → repression of transcription."},
     {type:"mcq", q:"You study a histone complex with unusually high levels of acetyl groups. The DNA bound to it is most likely:", opts:["Actively transcribed","Permanently deleted","Silenced heterochromatin","Methylated and repressed"], a:0,
      exp:"Histone acetylation (by HATs) opens chromatin into euchromatin → active transcription."},
     {type:"mcq", q:"DNA methylation is added to which base, by which enzyme?", opts:["Adenine, by DNA polymerase","Cytosine (in CpG), by DNMTs","Guanine, by telomerase","Thymine, by HAT"], a:1,
      exp:"DNMTs add a methyl group to cytosine in a 5′-CpG-3′ dinucleotide."},
     {type:"tf", q:"Methyl-CpG-binding proteins (MeCP) bind methylated DNA and help close/condense chromatin.", a:true,
      exp:"True — MeCP proteins bind methylated CpG islands and promote heterochromatin/silencing."},
     {type:"mcq", q:"Stem cells converting euchromatin to heterochromatin during differentiation is:", opts:["A DNA-sequence mutation","An epigenetic change","Telomere attrition","A genetic deletion"], a:1,
      exp:"Changing chromatin packaging to silence genes (without altering sequence) is an epigenetic change."}
    ]
   },
   {
    id:"L4T3", title:"Genetic vs. epigenetic change",
    sub:"Sequence vs. packaging, reversibility, and many control points (slides 11–13).",
    slides:[
     {h:"Genetic vs. epigenetic — the contrast", imgs:[
        {src:"slides/L4/slide-12.jpg", cap:"L4 · Slide 12 — Genetic vs. epigenetic change"},
        {src:"slides/L4/slide-13.jpg", cap:"L4 · Slide 13 — Many control points on gene expression"}
      ], html:`
       <table class="dt">
        <tr><th>Property</th><th>Genetic</th><th>Epigenetic</th></tr>
        <tr><td>Caused by nucleotide-sequence change</td><td>✔</td><td>—</td></tr>
        <tr><td>Caused by change in DNA packaging</td><td>—</td><td>✔</td></tr>
        <tr><td>Reversibility</td><td>Irreversible</td><td>Reversible</td></tr>
        <tr><td>Can cause disease</td><td>✔</td><td>✔</td></tr>
        <tr><td>Changes which sequences are <i>read</i></td><td>—</td><td>✔</td></tr>
       </table>
       <p>Gene expression has <span class="kw">many control points</span> that must be switched before a gene is expressed, influenced by other genes, habits, environmental exposures, and microbes.</p>
       <div class="callout key">Key split: <b>genetic = changes the sequence, irreversible; epigenetic = changes packaging/readout, reversible.</b> Both can cause disease.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Which is TRUE of epigenetic (vs. genetic) change?", opts:["It changes the nucleotide sequence","It is generally reversible and changes which genes are read","It is always irreversible","It cannot affect disease"], a:1,
      exp:"Epigenetic change alters packaging/readout (not the sequence) and is generally reversible; both genetic and epigenetic changes can cause disease."},
     {type:"mcq", q:"Which scenario is NOT epigenetic?", opts:["Agouti mouse coat color changed by methyl-rich maternal diet","High-fat parental diet raising offspring diabetes risk","A BRCA1 mutation inherited in a family","Childhood abuse linked to glucocorticoid-receptor methylation"], a:2,
      exp:"A BRCA1 mutation is a DNA-sequence change → genetic. The others involve methylation/expression → epigenetic."},
     {type:"tf", q:"A genetic change alters the DNA sequence and is essentially irreversible, whereas an epigenetic change is reversible.", a:true,
      exp:"True — sequence change (genetic, irreversible) vs. packaging/expression change (epigenetic, reversible)."},
     {type:"mcq", q:"Lizards on an island becoming all one color after a hurricane kills other variants is best explained by:", opts:["Epigenetic methylation","Natural selection / population bottleneck (not epigenetic)","Histone acetylation","DNMT activity"], a:1,
      exp:"This is selection on existing genetic variation (a bottleneck), not an epigenetic modification."}
    ]
   },
   {
    id:"L4T4", title:"Epigenetic clocks & biological age",
    sub:"Methylation patterns, accelerated/decelerated aging, and the causal caveat (slides 15–20).",
    slides:[
     {h:"Methylation changes with age → epigenetic clocks", imgs:[
        {src:"slides/L4/slide-15.jpg", cap:"L4 · Slide 15 — Methylation patterns change with age"},
        {src:"slides/L4/slide-16.jpg", cap:"L4 · Slide 16 — Epigenetic clock (cor=0.97)"}
      ], html:`
       <p class="lead">Methylation patterns shift predictably with age (turning specific genes on/off), and these changes may themselves contribute to aging. Plotting <span class="kw">epigenetic age vs. chronological age</span> gives a tight correlation (cor ≈ 0.97).</p>
       <ul>
        <li>Above the line = <span class="warn">accelerated aging</span> (epigenetic age &gt; chronological age).</li>
        <li>Below the line = <span class="kw">decelerated aging</span>.</li>
       </ul>`},
     {h:"How the clocks work & the big caveat", imgs:[
        {src:"slides/L4/slide-17.jpg", cap:"L4 · Slide 17 — Biological age & age acceleration (AA)"},
        {src:"slides/L4/slide-18.jpg", cap:"L4 · Slide 18 — Clocks are ML models on methylation data"},
        {src:"slides/L4/slide-20.jpg", cap:"L4 · Slide 20 — Predictive models, not direct measures"}
      ], html:`
       <p class="lead"><span class="kw">Epigenetic clocks are machine-learning algorithms</span> trained on genome-wide DNA-methylation data (at clock CpGs) plus an age variable. They output a <span class="kw-2">DNAm age</span>, and the gap from chronological age is the <span class="kw-2">age acceleration (AA)</span>, which is <span class="kw">malleable by health-promoting interventions</span>.</p>
       <div class="callout key">Two exam-critical caveats from the final slides:
       <ul><li>Aging biomarkers are <b>predictive models, not direct measurements of damage</b> — clocks don't measure time directly; they detect methylation patterns that <b>correlate</b> with biological aging.</li>
       <li>Open questions: is epigenetic aging <b>causal or merely correlative</b>, and is it <b>modifiable</b>?</li></ul></div>
       <p>Why train on a <span class="kw-2">diverse</span> population: so the model's aging patterns generalize across groups rather than overfitting one.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"How do epigenetic clocks estimate biological age?", opts:["By sequencing the genome for mutations","By detecting DNA-methylation patterns that correlate with aging","By measuring telomere length only","By weighing cells"], a:1,
      exp:"They are ML models that read age-correlated DNA-methylation patterns to estimate biological age."},
     {type:"mcq", q:"On an epigenetic-age vs. chronological-age plot, a point ABOVE the line indicates:", opts:["Decelerated aging","Accelerated aging (epigenetic age > chronological age)","A measurement error","Immortality"], a:1,
      exp:"Above the line = epigenetic (biological) age exceeds chronological age = accelerated aging."},
     {type:"tf", q:"Epigenetic clocks directly measure the passage of time and the actual molecular damage in a cell.", a:false,
      exp:"False — they are predictive models that detect methylation patterns correlating with aging; they don't directly measure time or damage."},
     {type:"mcq", q:"Why train an epigenetic-clock algorithm on a DIVERSE group of individuals?", opts:["To run faster","So the model generalizes across different populations","To reduce the number of CpGs","Diversity doesn't matter"], a:1,
      exp:"Diverse training data helps the model learn aging patterns that generalize instead of overfitting one population."},
     {type:"mcq", q:"A key unresolved question about epigenetic aging raised in lecture is whether it is:", opts:["Causal or merely correlative (and whether it's modifiable)","Real or fake","Genetic or chromosomal","Measured in years or days"], a:0,
      exp:"The slides explicitly ask: is epigenetic aging causal or correlative, and is it modifiable?"}
    ]
   },
   {
    id:"L4T5", title:"🎙️ From the lecture (Meeting 4) — what Prof. Kemeny stressed",
    sub:"Points from the Whisper-transcribed audio: the hardware/software & recipe analogies, the misconception warning, genetic vs. epigenetic table, and how AI clocks are built.",
    slides:[
     {h:"🎙️ From the lecture (Meeting 4) — key emphases", imgs:[], html:`
      <div class="callout">🎙️ <b>From the recorded Meeting 4 lecture.</b> These are points the professor stressed out loud — strong candidates for 'understand &amp; reason' exam questions.</div>
      <h4>DNA = hardware · Epigenetics = software</h4>
      <p>She used the analogy: DNA is the <b>hardware</b> with all the instructions; epigenetics is the <b>software</b> that decides which genes get read. CopyKat the cat and her mother Rainbow have <b>identical DNA</b> but look different — because epigenetics determines which genes are expressed in each cell.</p>
      <h4>The recipe-fading analogy</h4>
      <p>"DNA is like a recipe for making cells. As we age the recipe fades — the instructions become unclear." The methylation pattern tells cells which genes to express when and how much. As patterns drift with aging, cells get confused and express genes they shouldn't.</p>
      <h4>⚠️ Common misconception she explicitly warned about</h4>
      <div class="callout warn">Do <b>NOT</b> mix up <b>DNA methylation</b> (methyl groups on cytosine in CpG islands) with <b>histone protein modifications</b> (acetyl or methyl groups on histone tails). These are two separate levels of epigenetic regulation and students commonly confuse them.</div>
      <h4>Key enzyme names</h4>
      <table class="dt">
       <tr><th>Enzyme</th><th>What it does</th><th>Effect on gene</th></tr>
       <tr><td><b>DNMTs</b></td><td>Add methyl groups to cytosine at CpG islands</td><td>Silencing</td></tr>
       <tr><td><b>MECPs</b></td><td>Bind methylated CpG islands; recruit closing machinery</td><td>Silencing</td></tr>
       <tr><td><b>HDACs</b></td><td>Remove acetyl groups from histone tails → heterochromatin</td><td>Silencing</td></tr>
       <tr><td><b>HATs</b></td><td>Add acetyl groups to histone tails → euchromatin</td><td>Activation</td></tr>
      </table>`},
     {h:"🎙️ Genetic vs. epigenetic — the comparison", imgs:[], html:`
      <div class="callout">She walked students through this comparison on a worksheet during class:</div>
      <table class="dt">
       <tr><th></th><th>Genetic</th><th>Epigenetic</th></tr>
       <tr><td><b>What changes</b></td><td>DNA nucleotide sequence (mutation)</td><td>DNA packaging / methylation pattern</td></tr>
       <tr><td><b>Reversible?</b></td><td>No — permanent</td><td>Yes — dynamic, can open/close</td></tr>
       <tr><td><b>Can cause disease?</b></td><td>Yes</td><td>Yes</td></tr>
      </table>
      <p>Key point: <b>epigenetics is dynamic</b> — methylation and histone marks come ON and OFF in response to signals. Enzymes (demethylases, HDACs, HATs) toggle the marks as the cell's needs change.</p>`},
     {h:"🎙️ How the epigenetic clock AI is built", imgs:[], html:`
      <ol>
       <li><b>Collect huge database</b> — methylation patterns from thousands of people at all ages + their chronological age, health biomarkers, smoke exposure, etc.</li>
       <li><b>Train the AI</b> — show it the data trillions of times. It learns: "this methylation pattern → this age + health profile."</li>
       <li><b>Test and validate</b> — give it new methylation data; check if it predicts age correctly.</li>
       <li><b>Deploy</b> — read a patient's epigenome → output biological age vs. chronological age.</li>
      </ol>
      <div class="callout key">"<b>Garbage in, garbage out.</b>" The tool is only as good as the database. A diverse, large, reliable database is mandatory.</div>
      <p><b>Clock starts at age 20</b> — before 20, methylation changes so rapidly (growth/development) that it can't reliably track aging. After 20, changes correlate more tightly with aging.</p>
      <div class="callout tip">Scientists who discover things in this field often open companies and have financial incentives. "No one is unbiased today." Use that critical lens when evaluating epigenetic-clock products.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Prof. Kemeny explicitly warned that students commonly confuse these two epigenetic levels:", opts:["Transcription and translation","DNA methylation and histone protein modifications","Senescence and apoptosis","Telomeres and promoters"], a:1,
      exp:"DNA methylation (methyl on cytosine) vs. histone modifications (acetyl/methyl on histone tails) are separate — she warned this is a common misconception."},
     {type:"mcq", q:"In Prof. Kemeny's 'fading recipe' analogy, what does the fading represent?", opts:["Increasing mutation rate","DNA methylation patterns drifting with age so gene-expression instructions become unclear","Loss of ribosomes","Shortening telomeres"], a:1,
      exp:"The recipe fades = methylation patterns drift with age → cells lose clear instructions on which genes to express, and may express wrong genes."},
     {type:"mcq", q:"HDAC stands for:", opts:["Histone DNA Acetylation Complex","Histone Deacetylase — removes acetyl groups from histone tails, closing chromatin","DNA Histone Association Complex","Histone Acetyl Deaminase"], a:1,
      exp:"HDAC = Histone Deacetylase. Removing acetyl groups compacts chromatin into heterochromatin, silencing nearby genes."},
     {type:"mcq", q:"Why does the epigenetic clock begin tracking biological age at ~20 years rather than birth?", opts:["DNA doesn't exist before 20","Methylation changes so rapidly before age 20 (due to development/growth) that it can't reliably track aging","CpG islands don't form until age 20","Epigenetic marks are fully reset at birth"], a:1,
      exp:"Before 20, methylation changes rapidly due to growth. After 20 the changes correlate more reliably with aging pace."},
     {type:"tf", q:"According to Prof. Kemeny, epigenetic marks like DNA methylation are irreversible once set.", a:false,
      exp:"False — epigenetic marks are dynamic and reversible. Enzymes (demethylases, HATs, HDACs) add or remove them in response to cellular signals."},
     {type:"mcq", q:"The 'garbage in, garbage out' principle for AI-based epigenetic clocks means:", opts:["Only low-quality DNA can be methylated","The tool's accuracy depends entirely on the quality and diversity of the training database","All older cells secrete waste products","Epigenetic changes always degrade with age"], a:1,
      exp:"A poor training database produces a poor predictive model. Quality, large, diverse data is the foundation of any reliable AI biomarker tool."}
    ]
   },
   {
    id:"L4X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions on chromatin marks, genetic vs epigenetic, and the epigenetic clock.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">Harder, application-level questions — predict the effect of an enzyme inhibitor, separate genetic from epigenetic, and apply evidence-vs-hype to clock companies. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"Methylation of CpG islands in a gene's promoter generally causes:", opts:["Activation via HAT recruitment","Repression — methyl-CpG recruits MeCP and compacts chromatin","Telomere lengthening","A change in DNA sequence"], a:1,
      exp:"Promoter CpG methylation represses transcription: MeCP binds methylated CpG and promotes a closed, silenced chromatin state. No sequence change occurs."},
     {type:"mcq", q:"A drug inhibits HDACs (histone deacetylases). The expected effect on chromatin/transcription is:", opts:["More acetylation → open chromatin → increased transcription","Less acetylation → closed chromatin → silencing","DNA strand breaks","Telomere shortening"], a:0,
      exp:"HDACs remove acetyl groups (closing chromatin). Inhibiting them keeps acetylation high → open euchromatin → more transcription."},
     {type:"mcq", q:"The KEY practical difference between a genetic and an epigenetic change is that epigenetic changes are:", opts:["Permanent and irreversible","Potentially reversible (marks can be added/removed) without altering DNA sequence","Always harmful","Only found in cancer"], a:1,
      exp:"Genetic = sequence change (irreversible without mutation/editing). Epigenetic = reversible marks (methyl/acetyl) on unchanged DNA — drugs/environment can reset them."},
     {type:"mcq", q:"An epigenetic clock predicts biological age from methylation patterns. A crucial caveat for the exam is that the clock:", opts:["Directly measures molecular damage","Detects methylation that CORRELATES with age — it may be correlative, not causal","Edits the genome","Measures telomere length"], a:1,
      exp:"Clocks are predictive models built on age-correlated methylation. Whether those changes CAUSE aging or merely correlate is still open."},
     {type:"tf", q:"CopyKat (a cloned cat with a coat pattern different from its genetically identical donor) shows that identical DNA can yield different phenotypes via the epigenome.", a:true,
      exp:"True — same genome, different epigenome → different phenotype. A classic demonstration that epigenetics ≠ genetics."},
     {type:"short", q:"Why must an epigenetic-clock AI be trained on diverse data, generally starting around age 20?", model:"Diverse training data (varied ancestry, environments) lets the model's age–methylation patterns generalize across populations instead of overfitting one group. Training starts ~age 20 because childhood/development introduces large methylation changes (noise) unrelated to aging. 'Garbage in, garbage out': biased or poor-quality input yields biased predictions.", pts:["Diversity → generalizes, avoids overfitting one group","Start ~20 to avoid developmental noise","Garbage in/garbage out — biased data → biased clock"]},
     {type:"mcq", q:"Which of these is NOT an epigenetic phenomenon?", opts:["Agouti mouse coat color changed by a maternal methyl-rich diet","Glucocorticoid-receptor methylation after childhood stress","A BRCA1 sequence mutation causing cancer risk","Histone acetylation opening chromatin"], a:2,
      exp:"A BRCA1 sequence mutation is GENETIC (a DNA change). The others are epigenetic (marks/expression changes without sequence change)."},
     {type:"mcq", q:"A company emails: 'Your epigenetic age is 10 years above your real age — buy our supplement to reverse it.' The best scientific objection is:", opts:["Epigenetic clocks don't exist","Conflict of interest + the clock is correlative, and there's no proven causal supplement fix","Methylation can't be measured","Age can't be estimated at all"], a:1,
      exp:"The seller has a conflict of interest; the clock detects correlation, not a modifiable cause, and no supplement is proven to 'reverse' it. Classic evidence-vs-hype."},
     {type:"tf", q:"Epigenetic regulation is only a disease process and plays no role in normal biology.", a:false,
      exp:"False — epigenetics is essential for normal development and cell differentiation (one genome → many cell types). It's not solely a disease phenomenon."},
     {type:"short", q:"Using the 'hardware vs software' analogy, explain how one genome produces many cell types.", model:"The DNA sequence is the hardware (identical in every cell); the epigenome — DNA methylation and histone modifications — is the software that determines which genes run. Different epigenetic programs switch different gene sets on/off, so a neuron and a liver cell share one genome but express different proteins and behave differently. The software can change without rewriting the hardware.", pts:["DNA = hardware (same in all cells)","Epigenome = software (which genes are expressed)","Different epigenetic programs → different cell types from one genome"]}
    ]
   }
  ]
 },

 /* ============================ LECTURE 5 ============================ */
 {
  id:"L5", icon:"🧷", short:"L5 · Proteostasis",
  title:"Lecture 5 — Proteostasis: Folding, Chaperones, the Ubiquitin–Proteasome System & PROTACs",
  blurb:"How proteins fold (chaperones TRiC/Hsp70/HSP90), how they're degraded (the ubiquitin–proteasome system), how misfolding drives disease, and how PROTACs exploit degradation as a drug strategy.",
  objectives:[
    "Explain why a polypeptide must fold correctly and how chaperones (using ATP) assist folding",
    "Describe the proteostasis network: synthesis, chaperone folding, UPS degradation, and autophagy",
    "Explain the Hsp70 ATPase cycle, the TRiC folding chamber, and the HSP90 client-maturation cycle",
    "Lay out ubiquitin–proteasome degradation: E1→E2→E3, polyubiquitin tagging, and proteasomal degradation",
    "Explain how E3 ligases/degrons confer specificity and how DUBs and SUMOylation modulate the system",
    "Explain how PROTACs recruit an E3 ligase to degrade a target protein, and link misfolding/aggregation to disease"
  ],
  topics:[
   {
    id:"L5T1", title:"Protein folding & chaperones",
    sub:"Why folding matters and how chaperones help (slides 5–9).",
    slides:[
     {h:"The endomembrane system & protein traffic", imgs:[
        {src:"slides/L5/slide-05.jpg", cap:"L5 · Slide 5 — The endomembrane system"},
        {src:"slides/L5/slide-07.jpg", cap:"L5 · Slide 7 — Rough ER, the protein assembly line"}
      ], html:`
       <p class="lead">The <span class="kw">endomembrane system</span> (nuclear envelope, ER, Golgi, lysosomes, vacuoles, plasma membrane — connected by <span class="kw-2">vesicles</span>) regulates protein traffic. Proteins are assembled on ribosomes of the <span class="kw-2">rough ER</span>.</p>`},
     {h:"Proteins must fold correctly — chaperones help", imgs:[
        {src:"slides/L5/slide-08.jpg", cap:"L5 · Slide 8 — Folding into the native 3D shape"},
        {src:"slides/L5/slide-09.jpg", cap:"L5 · Slide 9 — Chaperones guide folding"}
      ], html:`
       <p class="lead">To be useful, a completed polypeptide must <span class="kw">fold correctly into its 3D conformation</span> (sometimes plus covalent modification like phosphorylation, or binding to other subunits) to become a <span class="kw-2">mature functional protein</span>.</p>
       <p><span class="kw">Chaperone proteins</span> guide a newly synthesized chain along the most energetically favorable folding pathway and prevent aggregation. <span class="warn">Their function requires ATP binding and hydrolysis.</span></p>
       <div class="callout key">What chaperones do: prevent aggregation and assist (re)folding. What they do <b>NOT</b> primarily do: traffic already-correctly-folded proteins to their destination (that's a separate transport job).</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Which is NOT a primary function of chaperone proteins?", opts:["Preventing aggregation of folding proteins","Helping a polypeptide fold to its native shape","Giving misfolded proteins another chance to refold","Guiding already-correctly-folded proteins to their cellular location"], a:3,
      exp:"Trafficking already-folded proteins to a location is not a core chaperone job; chaperones prevent aggregation and assist folding/refolding (using ATP)."},
     {type:"tf", q:"Chaperone-assisted folding requires ATP binding and hydrolysis.", a:true,
      exp:"True — chaperones use ATP to cycle through substrate-binding states and drive folding."},
     {type:"mcq", q:"Why must a newly synthesized polypeptide fold correctly?", opts:["Only folded proteins can be sequenced","A protein must reach its native 3D conformation to be functional","Folding adds new amino acids","Folding shortens the protein"], a:1,
      exp:"Function depends on the correct three-dimensional (native) conformation."},
     {type:"mcq", q:"Why is it advantageous for some chaperones to associate with the ribosome?", opts:["They speed up transcription","Engaging nascent chains early reduces misfolding and improves fitness","They lengthen telomeres","They add methyl groups"], a:1,
      exp:"Catching the protein as it emerges from the ribosome reduces improper folding and improves cellular fitness."}
    ]
   },
   {
    id:"L5T2", title:"The proteostasis network & chaperone machines",
    sub:"The network, plus Hsp70, TRiC and HSP90 (slides 10, 12–15).",
    slides:[
     {h:"Protein fates in the proteostasis network", imgs:[
        {src:"slides/L5/slide-10.jpg", cap:"L5 · Slide 10 — Proteostasis network"}
      ], html:`
       <p class="lead">Newly made proteins enter the <span class="kw">proteostasis network</span> with several possible fates:</p>
       <ul>
        <li>Fold (with chaperones) → native protein</li>
        <li>Misfold → refold, or be sent to the <span class="kw-2">ubiquitin–proteasome system (UPS)</span> for degradation</li>
        <li>Aggregate → cleared by <span class="kw-2">macroautophagy</span> (recycling of organelles and large aggregates), or form amyloid fibrils</li>
       </ul>`},
     {h:"Hsp70, TRiC and HSP90", imgs:[
        {src:"slides/L5/slide-12.jpg", cap:"L5 · Slide 12 — HSP70 chaperone cycle"},
        {src:"slides/L5/slide-13.jpg", cap:"L5 · Slide 13 — TRiC folding chamber"},
        {src:"slides/L5/slide-14.jpg", cap:"L5 · Slide 14 — HSP90 ATPase cycle"}
      ], html:`
       <table class="dt">
        <tr><th>Chaperone</th><th>Mechanism</th></tr>
        <tr><td><b>Hsp70</b></td><td>Cycles between <span class="kw-2">open/low-affinity (ATP-bound)</span> and <span class="kw-2">closed/high-affinity (ADP-bound)</span> states; Hsp40 and nucleotide-exchange factors (NEFs) drive the cycle → repeated refolding attempts (increasingly needed in aged cells with more damaged proteins).</td></tr>
        <tr><td><b>TRiC (CCT)</b></td><td>An <span class="kw-2">isolation chamber</span>: a partially folded chain is sequestered inside, the cap closes, the protein folds shielded from aggregation, and is released when the cap dissociates.</td></tr>
        <tr><td><b>HSP90</b></td><td>Uses an <span class="kw-2">ATP-driven conformational cycle</span> (with co-chaperones HOP, AHA1, CDC37) to stabilize and mature client signaling proteins. Block ATP binding → clients lose function and are degraded.</td></tr>
       </table>`}
    ],
    quiz:[
     {type:"mcq", q:"In the Hsp70 cycle, the ATP-bound state is ___ affinity and the ADP-bound state is ___ affinity:", opts:["high; low","low; high","both high","both low"], a:1,
      exp:"ATP-bound Hsp70 is open/low-affinity; ADP-bound is closed/high-affinity. NEFs and Hsp40 drive cycling for repeated refolding."},
     {type:"mcq", q:"Which best describes how TRiC promotes folding?", opts:["It cuts proteins into peptides","It sequesters a partially folded chain in a capped chamber so it folds without aggregating","It methylates the protein","It exports proteins from the cell"], a:1,
      exp:"TRiC is an isolation chamber: the substrate folds inside, shielded, then is released when the cap dissociates."},
     {type:"mcq", q:"A drug blocks ATP binding to HSP90 (not affecting synthesis); cells show reduced growth signaling and accumulation of unstable signaling proteins. Best explanation?", opts:["HSP90 needs ATP-driven conformational changes to mature client proteins, so inhibition makes clients lose function and be degraded","HSP90 produces ATP","HSP90 is a telomerase","HSP90 cuts DNA"], a:0,
      exp:"HSP90's ATP cycle matures client proteins; inhibiting it destabilizes clients, which are degraded — explaining loss of signaling."},
     {type:"tf", q:"In the proteostasis network, large protein aggregates are cleared primarily by macroautophagy.", a:true,
      exp:"True — macroautophagy recycles organelles and removes large protein aggregates; the UPS handles individual ubiquitin-tagged proteins."},
     {type:"mcq", q:"The Hsp70 ATPase cycle becomes increasingly relevant in aging because:", opts:["It stops working entirely","Aged cells have more damaged proteins needing repeated refolding attempts","It lengthens telomeres","It methylates DNA"], a:1,
      exp:"Aged cells accumulate damaged proteins; Hsp70's repeated binding/refolding cycles help maintain proteostasis under that stress."},
     {type:"mcq", q:"Researchers expose two groups of cells to heat shock. One group produces HSPs normally; the second cannot activate HSP expression. Which outcome would most likely occur?", opts:["The HSP-deficient cells would produce more ATP","Heat shock proteins would accelerate apoptosis in both groups","The HSP-deficient cells would show increased protein misfolding and reduced survival","Both cell groups would have similar responses because heat shock only affects DNA"], a:2,
      exp:"HSPs (Hsp70, Hsp90, etc.) refold heat-denatured proteins. Without them, misfolded proteins aggregate and cells die. HSPs are pro-survival chaperones, not pro-apoptotic factors."}
    ]
   },
   {
    id:"L5T3", title:"The ubiquitin–proteasome system (UPS)",
    sub:"E1→E2→E3 tagging, polyubiquitin, and the proteasome (slides 16–20, 23–26, 29–33).",
    slides:[
     {h:"The UPS — controlled protein breakdown", imgs:[
        {src:"slides/L5/slide-16.jpg", cap:"L5 · Slide 16 — Ubiquitin–proteasome system"},
        {src:"slides/L5/slide-18.jpg", cap:"L5 · Slide 18 — Why cell division depends on protein death"}
      ], html:`
       <p class="lead">The <span class="kw">ubiquitin–proteasome system (UPS)</span> performs controlled protein breakdown to regulate the amount of each protein in a cell (think of it as outgoing mail — tagged for disposal). It's also essential for the cell cycle: cyclins and CDK inhibitors must be degraded on schedule, and when this goes awry, <span class="warn">cancer can result</span>.</p>`},
     {h:"Tagging a protein: E1 → E2 → E3", imgs:[
        {src:"slides/L5/slide-23.jpg", cap:"L5 · Slide 23 — E1/E2/E3 and F-box target selection"},
        {src:"slides/L5/slide-25.jpg", cap:"L5 · Slide 25 — Ubiquitin attached to target lysine"},
        {src:"slides/L5/slide-20.jpg", cap:"L5 · Slide 20 — Polyubiquitin chain → degradation"}
      ], html:`
       <p class="lead">Ubiquitin is a small 76-amino-acid protein attached to targets in a <span class="kw">three-step, ATP-dependent</span> process:</p>
       <ol>
        <li><span class="kw-2">E1 (activating enzyme)</span> — activates ubiquitin using ATP (attaches it to a cysteine).</li>
        <li><span class="kw-2">E2 (conjugating enzyme)</span> — receives the ubiquitin.</li>
        <li><span class="kw-2">E3 (ubiquitin ligase)</span> — recognizes the specific target and transfers ubiquitin onto a <span class="kw-2">lysine</span> residue; repeated to build a <span class="warn">polyubiquitin chain</span>.</li>
       </ol>
       <p>A protein marked with a polyubiquitin chain is fed into the proteasome and degraded; the ubiquitin is recycled.</p>
       <div class="callout key">Specificity lives in the <b>E3 ligase</b>: hundreds of E3s (× several E2s) select which proteins die. Internal sequences called <span class="kw-2">degrons</span> (and some N-terminal residues) target proteins for degradation; <span class="kw-2">DUBs</span> (deubiquitylating enzymes) can remove ubiquitin to reverse it.</div>`},
     {h:"The proteasome", imgs:[
        {src:"slides/L5/slide-19.jpg", cap:"L5 · Slide 19 — Proteasome structure"},
        {src:"slides/L5/slide-32.jpg", cap:"L5 · Slide 32 — Proteasomes feed & hydrolyze proteins"}
      ], html:`
       <p class="lead">The <span class="kw">proteasome</span> is a large protein-degrading machine (19S regulatory particles + 20S core proteases). It binds ubiquitin-labeled proteins, removes the ubiquitin, and feeds the protein into its central channel where peptide bonds are hydrolyzed (ATP-dependent) into <span class="kw-2">small peptide fragments / amino acids</span>.</p>
       <p>In times of need (malnourishment or disease) the proteasome becomes more active in muscle, breaking proteins into amino acids that can be converted to glucose for energy.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"Put the ubiquitin-tagging enzymes in the correct order:", opts:["E3 → E2 → E1","E1 (activating) → E2 (conjugating) → E3 (ligase)","E2 → E1 → E3","E1 → E3 → E2"], a:1,
      exp:"E1 activates ubiquitin (ATP), passes it to E2 (conjugating), and E3 (ligase) transfers it to the target's lysine."},
     {type:"mcq", q:"Which component provides the SPECIFICITY for which protein gets degraded?", opts:["E1 activating enzyme","E2 conjugating enzyme","E3 ubiquitin ligase","The proteasome"], a:2,
      exp:"E3 ligases recognize specific targets (via degrons/N-terminal residues); the many E2×E3 combinations confer high specificity."},
     {type:"mcq", q:"A protein destined for proteasomal degradation is marked by:", opts:["A single methyl group","A polyubiquitin chain on a lysine residue","A phosphate on serine","A SUMO that protects it"], a:1,
      exp:"A polyubiquitin chain (built on a lysine) is the degradation signal recognized by the proteasome."},
     {type:"tf", q:"Deubiquitylating enzymes (DUBs) can remove ubiquitin chains and thereby rescue a protein from degradation.", a:true,
      exp:"True — DUBs reverse ubiquitination, regulating degradation."},
     {type:"short", q:"Describe the ubiquitin–proteasome pathway from ubiquitin activation to protein destruction.",
      model:"Ubiquitin is activated by E1 in an ATP-dependent step, transferred to E2 (conjugating enzyme), then an E3 ligase recognizes the specific target protein and attaches ubiquitin to a lysine residue. Repeated cycles build a polyubiquitin chain, which serves as a signal; the proteasome binds the tagged protein, removes/recycles the ubiquitin, and hydrolyzes the protein into short peptides.",
      pts:["E1 activates ubiquitin (ATP)","Transferred to E2","E3 ligase selects target, attaches to lysine","Polyubiquitin chain = signal","Proteasome degrades into peptides"]}
    ]
   },
   {
    id:"L5T4", title:"PROTACs — drugging degradation",
    sub:"Recruiting an E3 ligase to destroy a target protein (slides 27–28).",
    slides:[
     {h:"PROTACs target proteins for degradation", imgs:[
        {src:"slides/L5/slide-27.jpg", cap:"L5 · Slide 27 — PROTAC mechanism"},
        {src:"slides/L5/slide-28.jpg", cap:"L5 · Slide 28 — PROTAC complex (target–PROTAC–E3 VHL)"}
      ], html:`
       <p class="lead"><span class="kw">PROTACs (proteolysis-targeting chimeras)</span> are two-headed molecules that <span class="kw-2">simultaneously bind the target protein and an E3 ubiquitin ligase</span> (forming a ternary complex). This brings the E3 to the target, which gets ubiquitinated and degraded by the proteasome — then the PROTAC is released to act again.</p>
       <div class="callout key">PROTAC key point: the target protein's level <b>drops even though its gene is transcribed normally</b> — because the protein is being <i>degraded</i>, not the gene silenced. The defining step is bridging target + E3 ligase.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"A PROTAC reduces a target kinase protein even though its gene is transcribed normally. Why?", opts:["It silences the gene","It binds the target AND an E3 ubiquitin ligase, causing ubiquitination and proteasomal degradation","It blocks the ribosome","It lengthens telomeres"], a:1,
      exp:"PROTACs bridge target and E3 ligase → the target is ubiquitinated and degraded; protein level falls despite normal transcription."},
     {type:"mcq", q:"The KEY step that lets a PROTAC trigger degradation is:", opts:["Bringing the target protein and an E3 ubiquitin ligase together","Mutating the target gene","Adding methyl groups to DNA","Cutting the protein with a protease directly"], a:0,
      exp:"Recruiting an E3 ligase to the target (ternary complex) is the defining mechanism."},
     {type:"tf", q:"PROTACs work by recruiting E3 ubiquitin ligases to target proteins for degradation.", a:true,
      exp:"True — that recruitment is the core of PROTAC-induced targeted protein degradation."}
    ]
   },
   {
    id:"L5T5", title:"Misfolding disease, SUMO & other degradation",
    sub:"Aggregation in neurodegeneration, SUMOylation, microautophagy (slides 22, 34–35).",
    slides:[
     {h:"Misfolding & aggregation drive disease", imgs:[
        {src:"slides/L5/slide-22.jpg", cap:"L5 · Slide 22 — Misfolding → aggregates → neurodegeneration"}
      ], html:`
       <p class="lead">Protein misfolding, accumulation, and aggregation contribute to <span class="warn">neurodegenerative diseases</span>: misfolded monomers → soluble aggregates → insoluble aggregates. Aggregates can clog the proteasome (functional → impaired proteasome), a vicious cycle in aging cells.</p>`},
     {h:"SUMOylation & other degradation routes", imgs:[
        {src:"slides/L5/slide-34.jpg", cap:"L5 · Slide 34 — SUMOylation"},
        {src:"slides/L5/slide-35.jpg", cap:"L5 · Slide 35 — Microautophagy"}
      ], html:`
       <ul>
        <li><span class="kw">SUMOylation</span> — adding <span class="kw-2">small ubiquitin-related modifiers (SUMOs)</span> alters protein stability, movement in/out of the nucleus, and transcription-factor function (it's a regulatory tag, not simply a degradation tag).</li>
        <li><span class="kw">Microautophagy</span> — lysosomes directly engulf proteins by infolding their membrane; nonselective, slow, continual recycling of amino acids.</li>
       </ul>`}
    ],
    quiz:[
     {type:"mcq", q:"Accumulation of insoluble protein aggregates is most associated with:", opts:["Telomere lengthening","Neurodegenerative diseases and impaired proteasome function","Faster cell division","Increased telomerase"], a:1,
      exp:"Misfolded/aggregated proteins drive neurodegeneration and can impair the proteasome — a hallmark of proteostasis failure."},
     {type:"mcq", q:"SUMOylation primarily:", opts:["Tags proteins only for immediate destruction","Alters protein stability, nuclear trafficking, and transcription-factor function","Lengthens telomeres","Replicates DNA"], a:1,
      exp:"SUMO is a regulatory modifier affecting stability, localization, and transcription-factor activity — not just degradation."},
     {type:"tf", q:"Microautophagy is a selective, fast pathway, unlike macroautophagy.", a:false,
      exp:"False — microautophagy (lysosomal membrane infolding) is nonselective and slow, giving continual amino-acid recycling."}
    ]
   },
   {
    id:"L5T6", title:"🎙️ From the lecture (Meeting 5) — what Prof. Kemeny stressed",
    sub:"Points from the Whisper-transcribed audio: zip-code analogy, E1/E2/E3 cascade specificity, the vicious cycle, Parkin/Parkinson's, PROTACs, and AlphaFold.",
    slides:[
     {h:"🎙️ From the lecture (Meeting 5) — key emphases", imgs:[], html:`
      <div class="callout">🎙️ <b>From the recorded Meeting 5 lecture.</b> These are points the professor stressed out loud — strong candidates for 'understand &amp; reason' exam questions.</div>
      <h4>Protein 'zip codes'</h4>
      <p>Every protein has a <b>zip code</b> — a short amino-acid sequence (N-terminal, C-terminal, or internal) that tells chaperone delivery proteins where to take it. This sequence must be correctly exposed (properly folded) to be readable. "Proteins know where to go because they carry their own zip code."</p>
      <h4>Protein half-lives vary enormously</h4>
      <p>Some proteins survive only <b>minutes to hours</b> (cell-cycle regulators the cell needs briefly). Others last <b>weeks</b>. The UPS must clear proteins once their job is done — otherwise the cell fills up with stale proteins competing for space.</p>
      <h4>E1→E2→E3 cascade — specificity lives in E3</h4>
      <table class="dt">
       <tr><th>Enzyme</th><th>Count in cells</th><th>Role</th></tr>
       <tr><td><b>E1</b></td><td>Only 1–2</td><td>Activates ubiquitin using ATP; hands it to E2</td></tr>
       <tr><td><b>E2</b></td><td>A few</td><td>Conjugating enzyme; carries ubiquitin to E3</td></tr>
       <tr><td><b>E3</b></td><td>Hundreds to thousands</td><td>Ligase — SPECIFIC: attaches ubiquitin to the target's lysine residue</td></tr>
      </table>
      <div class="callout key">Specificity = E3 ligases. Each E3 recognizes only a small set of substrate proteins. That's why we need so many of them.</div>`},
     {h:"🎙️ Vicious cycle, Nobel Prizes, and Prof.'s own research", imgs:[], html:`
      <h4>The vicious cycle of protein aggregation</h4>
      <p>Misfolded proteins → expose hydrophobic residues → bind other misfolded proteins → aggregates form → <b>proteasome becomes overloaded and damaged</b> → less clearance → more misfolding → cycle worsens. This is at the core of Parkinson's, Alzheimer's, and Huntington's disease.</p>
      <h4>Nobel Prizes</h4>
      <p>She emphasized this several times: <b>chaperones, the ubiquitin-proteasome system, and autophagy</b> all led to Nobel Prizes. "That tells you how fundamental and important these processes are."</p>
      <h4>Prof. Kemeny's own research</h4>
      <div class="callout key">She personally worked on <b>Parkin</b> — an E3 ubiquitin ligase. Mutations in PARKIN cause <b>early-onset Parkinson's disease</b>. Parkin doesn't work → substrates accumulate → dopaminergic neurons die → Parkinson's. <b>Note:</b> this same Parkin also mediates mitophagy (L6 content — it's a bridge topic!).</div>
      <h4>Single ubiquitin vs. poly-ubiquitin chain</h4>
      <ul>
       <li><b>Single ubiquitin</b> = localization signal (send protein to a specific compartment)</li>
       <li><b>Poly-ubiquitin chain</b> (≥4 linked ubiquitins) = degradation signal to the proteasome</li>
      </ul>`},
     {h:"🎙️ PROTACs and AlphaFold — the cutting edge", imgs:[], html:`
      <h4>PROTACs — as she described them</h4>
      <p>A PROTAC is a <b>chimeric (two-part) molecule</b>: one end binds an E3 ligase, the other end binds the target protein you want destroyed. A linker holds them together. The recruited E3 ligase then ubiquitinates the target → sent to the proteasome.</p>
      <ul>
       <li>Clinical trials are underway for Parkinson's, Alzheimer's, Huntington's, cancer, hypercholesterolemia</li>
       <li>The challenge: the linker must be long enough that both ends can reach their targets</li>
       <li>The E3 ligase must be <b>functional</b> — PROTACs use the cell's own UPS; if the system is broken, they don't work</li>
       <li>Chimera = Greek mythology monster made of parts from different animals → molecules made from two parts</li>
      </ul>
      <h4>AlphaFold + AI for PROTAC design</h4>
      <p><b>AlphaFold</b> (Nobel Prize ~2024) predicts 3D protein structures. Scientists use it to find the optimal "pocket" on an E3 ligase or target protein where the PROTAC can bind — replacing decades of trial-and-error with AI-guided design. "Before AI, scientists just tried thousands of molecules. Now AI finds the pockets."</p>`}
    ],
    quiz:[
     {type:"mcq", q:"In the E1→E2→E3 cascade, substrate SPECIFICITY comes from:", opts:["E1, because it's the first enzyme","E2, because it carries ubiquitin","E3 ligases — hundreds exist, each recognizing specific target proteins","The proteasome itself"], a:2,
      exp:"E3 ligases provide specificity: hundreds of them recognize only specific substrates, ensuring the right proteins are ubiquitinated."},
     {type:"mcq", q:"A single ubiquitin tag on a protein (vs. a poly-ubiquitin chain) typically signals:", opts:["Proteasomal degradation","Protein localization to a specific cellular destination","Autophagy initiation","Apoptosis"], a:1,
      exp:"Single ubiquitin = localization signal. Poly-ubiquitin chain (≥4 linked) = degradation signal to the proteasome."},
     {type:"mcq", q:"Why does protein misfolding create a 'vicious cycle' in aging cells?", opts:["Misfolded proteins activate telomerase","Misfolded proteins overload the proteasome → less clearance → more aggregation → proteasome more damaged","Misfolded proteins make extra ribosomes","Misfolded proteins activate DNA repair"], a:1,
      exp:"Aggregates clog and damage the proteasome; broken proteasome → more protein accumulation → cycle worsens. Classic in neurodegeneration."},
     {type:"mcq", q:"PROTACs require a functional UPS because:", opts:["They need ATP from the proteasome","They work by bringing a functional E3 ligase to the target protein to force ubiquitination and degradation","They need the proteasome's DNA-cutting activity","They synthesize new E3 ligases"], a:1,
      exp:"PROTACs recruit a functional E3 ligase. If the UPS machinery is broken, there is no E3 to ubiquitinate the target, and the therapy fails."},
     {type:"mcq", q:"Prof. Kemeny's own research on Parkin (an E3 ligase) showed mutations in PARKIN cause:", opts:["Alzheimer's disease","Early-onset Parkinson's disease — and normal Parkin also mediates mitophagy","Huntington's disease","Telomere shortening"], a:1,
      exp:"She worked on Parkin personally — PARKIN mutations cause early-onset Parkinson's. The same Parkin protein also mediates mitophagy (connecting L5 and L6 topics)."},
     {type:"tf", q:"AlphaFold is an AI tool that predicts 3D protein structures and is used to find PROTAC binding sites on E3 ligases and target proteins.", a:true,
      exp:"True — AlphaFold (Nobel Prize ~2024) predicts protein structures; scientists use it to identify optimal binding pockets for PROTAC molecule design."}
    ]
   },
   {
    id:"L5X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions on chaperones, the ubiquitin–proteasome system, and PROTACs.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">Harder, application-level questions — reason about chaperone ATP cycles, E1/E2/E3 specificity, ubiquitin codes, and PROTAC logic. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"In the Hsp70 cycle, which nucleotide state binds substrate tightly, and what drives release?", opts:["ATP-bound = high affinity; ADP drives release","ADP-bound = high affinity (closed); ATP binding + NEFs drive release/cycling","Hsp70 needs no ATP","It binds DNA, not protein"], a:1,
      exp:"ADP-bound Hsp70 is closed/high-affinity; ATP binding (with Hsp40 and nucleotide-exchange factors) opens it for release and repeated refolding attempts."},
     {type:"mcq", q:"A drug blocks ATP binding to HSP90 (without affecting transcription). Cells show loss of signaling and degradation of client proteins. Best explanation:", opts:["HSP90 makes ATP","HSP90's ATP-driven cycle matures/stabilizes clients; without it, clients misfold and are degraded","HSP90 is a telomerase","Clients are now over-stabilized"], a:1,
      exp:"HSP90 uses an ATP cycle to mature client signaling proteins. Block ATP → clients can't fold/stabilize → they're degraded → signaling lost."},
     {type:"mcq", q:"There are 1–2 E1s, dozens of E2s, and hundreds of E3s. The large number of E3 ligases primarily provides:", opts:["Energy","Substrate SPECIFICITY (which protein gets tagged)","Faster ATP synthesis","Membrane transport"], a:1,
      exp:"E3 ligases recognize specific targets (degrons), so their large number is the source of which proteins get ubiquitinated — i.e., specificity."},
     {type:"mcq", q:"A protein receives a single ubiquitin vs a Lys48-linked poly-ubiquitin chain. The respective fates are:", opts:["Both → immediate degradation","Mono = regulatory signal (e.g., localization); poly(K48) = proteasomal degradation","Mono = degradation; poly = activation","Neither does anything"], a:1,
      exp:"Mono-ubiquitin is a regulatory signal (localization, histone function, repair); Lys48 poly-ubiquitin flags the protein for the proteasome."},
     {type:"mcq", q:"A PROTAC lowers a target protein's level even though its gene is still fully transcribed. This proves the mechanism is:", opts:["Gene silencing","Targeted DEGRADATION (PROTAC bridges target to an E3 ligase → ubiquitination → proteasome)","Increased translation","Methylation"], a:1,
      exp:"PROTACs are chimeras linking the target to an E3 ligase, forcing ubiquitination and proteasomal degradation — protein drops despite ongoing transcription (degradation, not silencing)."},
     {type:"short", q:"Explain the 'vicious cycle' by which loss of proteostasis accelerates with age.", model:"Damaged/misfolded proteins accumulate and overwhelm chaperones and the proteasome. The aggregates themselves damage and sequester chaperones and UPS components, reducing capacity further, which lets more proteins misfold and aggregate — a positive-feedback spiral. Aging adds more damaged proteins and declining proteostasis capacity, so the cycle worsens over time.", pts:["Misfolded proteins overwhelm chaperones + proteasome","Aggregates damage/sequester the machinery that clears them","Positive feedback → accelerating decline","Worsens with age as capacity drops"]},
     {type:"tf", q:"The main job of chaperones is to traffic already-folded proteins to their correct cellular location.", a:false,
      exp:"False — chaperones prevent aggregation and assist (re)folding to native shape. Trafficking folded proteins is a different function handled by signal sequences/transport systems."},
     {type:"mcq", q:"Parkin is an E3 ubiquitin ligase. A loss-of-function PARKIN mutation is associated with:", opts:["Longer lifespan","Early-onset Parkinson's disease (defective tagging of damaged mitochondria for mitophagy)","Cancer immunity","Telomere lengthening"], a:1,
      exp:"Parkin (E3 ligase) tags damaged mitochondria; loss-of-function impairs mitophagy → damaged mitochondria accumulate in neurons → early-onset Parkinson's. (Links L5 and L6.)"},
     {type:"mcq", q:"Large protein aggregates that the proteasome can't handle are cleared mainly by:", opts:["The UPS alone","Macroautophagy","Telomerase","DNA repair"], a:1,
      exp:"The UPS degrades individual ubiquitin-tagged proteins; large aggregates and whole organelles are cleared by macroautophagy."},
     {type:"short", q:"Describe how a PROTAC is designed and why it's called an 'event-driven' (catalytic) drug.", model:"A PROTAC is a two-headed (chimeric) molecule: one end binds the target protein, the other binds an E3 ubiquitin ligase, joined by a linker. By bringing them together it forces ubiquitination of the target, which the proteasome then degrades. It's 'event-driven/catalytic' because the PROTAC is released after the target is degraded and can act repeatedly on more target molecules — unlike an inhibitor that must continuously occupy the target.", pts:["Chimera: target-binding end + E3-binding end + linker","Forces ubiquitination → proteasomal degradation","Catalytic: released and reused after each degradation","Lowers protein level despite ongoing transcription"]}
    ]
   }
  ]
 },

 /* ============================ LECTURE 6 ============================ */
 {
  id:"L6", icon:"⚡", short:"L6 · Mitochondria & ROS",
  title:"Lecture 6 — Mitochondria, Oxidative Stress, Autophagy & Mitophagy",
  blurb:"Autophagy & its decline, mitochondrial structure/function, the good and bad sides of ROS, mitochondrial dynamics, mtDNA, mitophagy (PINK1/Parkin), and mitohormesis.",
  objectives:[
    "Describe macroautophagy (initiation→elongation→closure→fusion→degradation) and how it declines with age",
    "Explain autophagy's link to longevity (p62/SQST-1) and the concept of mitohormesis",
    "Describe mitochondrial structure and its major cellular roles (ATP, TCA cycle, apoptosis, Ca²⁺, ROS signaling)",
    "Contrast the harmful and beneficial (signaling) sides of ROS and name the antioxidant enzymes (SOD, GPx, PRDX)",
    "Explain mitochondrial dynamics (fission/fusion), mtDNA features, and PINK1/Parkin-mediated mitophagy",
    "Critically evaluate whether more mitophagy / fewer ROS is always beneficial (evidence vs. hype)"
  ],
  topics:[
   {
    id:"L6T1", title:"Autophagy & macroautophagy",
    sub:"Proteostasis with age, lysosomes, and the macroautophagy steps (slides 1, 2, 4, 5).",
    slides:[
     {h:"Autophagy clears damaged components", imgs:[
        {src:"slides/L6/slide-01.jpg", cap:"L6 · Slide 1 — Intracellular proteostasis systems change with age"},
        {src:"slides/L6/slide-02.jpg", cap:"L6 · Slide 2 — Lysosomes & autophagy"}
      ], html:`
       <p class="lead">Cells clear damaged proteins/organelles through three systems that all <span class="warn">decline with age</span>: the <span class="kw-2">ubiquitin–proteasome system (UPS)</span>, <span class="kw-2">chaperone-mediated autophagy (CMA)</span>, and <span class="kw-2">macroautophagy (MA)</span>. Lysosomes carry out the digestion (e.g., of damaged mitochondria/peroxisome fragments).</p>
       <p>Defects in autophagy are linked to many diseases: cancer, neurodegeneration (Parkinson's, Alzheimer's, Huntington's), heart/eye/liver/kidney/muscle disease, immune and lysosomal-storage disorders — collectively age-related "proteopathies."</p>`},
     {h:"The macroautophagy process", imgs:[
        {src:"slides/L6/slide-05.jpg", cap:"L6 · Slide 5 — Macroautophagy steps"}
      ], html:`
       <p class="lead"><span class="kw">Macroautophagy</span> proceeds in stages: <span class="kw-2">initiation → elongation → closure → fusion → degradation</span>.</p>
       <ul>
        <li><span class="kw-2">AMPK</span> activates autophagy (low energy); <span class="kw-2">mTOR</span> inhibits it (abundance).</li>
        <li>ULK1 complex initiates; ATG proteins and <span class="kw-2">LC3</span> build the phagophore → autophagosome, which fuses with a lysosome → autolysosome → contents degraded.</li>
       </ul>
       <div class="callout tip">This is the same AMPK↑/mTOR↓ logic as caloric restriction — nutrient scarcity turns autophagy ON.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Order the macroautophagy steps:", opts:["Degradation → fusion → initiation","Initiation → elongation → closure → fusion → degradation","Fusion → initiation → closure","Closure → degradation → initiation"], a:1,
      exp:"Phagophore initiation → elongation → closure (autophagosome) → fusion with lysosome → degradation."},
     {type:"mcq", q:"Which pair correctly describes autophagy regulation?", opts:["AMPK inhibits autophagy; mTOR activates it","AMPK activates autophagy; mTOR inhibits it","Both activate it","Both inhibit it"], a:1,
      exp:"AMPK (low-energy sensor) activates autophagy; mTOR (abundance sensor) suppresses it."},
     {type:"tf", q:"The UPS, chaperone-mediated autophagy, and macroautophagy all tend to decline with age.", a:true,
      exp:"True — age-related decline in these proteostasis systems contributes to accumulation of damaged proteins/organelles."},
     {type:"mcq", q:"LC3 and ATG proteins are most directly involved in:", opts:["Building the autophagosome membrane","Telomere lengthening","DNA methylation","Mitochondrial fission only"], a:0,
      exp:"ATG proteins and LC3 drive phagophore/autophagosome formation in macroautophagy."},
     {type:"mcq", q:"Mice are genetically modified to lack an essential autophagy gene in neurons. As they age, protein aggregates and neurodegeneration increase. Which conclusion is best supported?", opts:["Autophagy repairs DNA mutations","Aging occurs independently of intracellular quality-control mechanisms","Autophagy contributes to maintaining cellular proteostasis during aging","Autophagy is responsible for synthesis of damaged proteins"], a:2,
      exp:"Removing autophagy → aggregates build up → neurodegeneration. This directly shows autophagy maintains proteostasis in aging neurons. Aging is clearly NOT independent of quality control here."}
    ]
   },
   {
    id:"L6T2", title:"Autophagy, longevity & mitohormesis",
    sub:"p62/SQST-1 and the beneficial-vs-harmful stress boundary (slides 7, 8, 9, 18).",
    slides:[
     {h:"Autophagy receptor p62/SQST-1 extends lifespan", imgs:[
        {src:"slides/L6/slide-07.jpg", cap:"L6 · Slide 7 — p62/SQST-1 promotes longevity (C. elegans)"},
        {src:"slides/L6/slide-08.jpg", cap:"L6 · Slide 8 — p62/SQST-1 overexpression ↑ lifespan"}
      ], html:`
       <p class="lead">In <span class="kw-2">C. elegans</span>, the autophagy receptor <span class="kw">p62/SQST-1</span> promotes proteostasis and longevity by driving selective autophagic degradation of ubiquitinated aggregates. A <span class="kw-2">hormetic heat shock</span> induces it (stress resistance → longevity), and overexpressing it increases lifespan.</p>`},
     {h:"Mitohormesis — the dose makes the medicine", imgs:[
        {src:"slides/L6/slide-09.jpg", cap:"L6 · Slide 9 — Mild vs. excessive stress"},
        {src:"slides/L6/slide-18.jpg", cap:"L6 · Slide 18 — Exercise ROS vs. high-dose antioxidants"}
      ], html:`
       <p class="lead"><span class="kw">Mitohormesis</span>: autophagy is activated by <span class="kw-2">mild stress</span> (exercise, fasting, modest ROS), but <span class="warn">excessive stress</span> causes cellular damage. The key question is where the boundary between <i>beneficial</i> and <i>harmful</i> stress lies.</p>
       <div class="callout key">Evidence-vs-hype tie-in: exercise raises ROS, which activates adaptive responses (autophagy). Some studies suggest <b>high-dose antioxidants can blunt exercise benefits</b> — so reducing oxidative stress is <b>not always</b> good. (Same lesson as L1's antioxidant story.)</div>`}
    ],
    quiz:[
     {type:"mcq", q:"In C. elegans, overexpressing the autophagy receptor p62/SQST-1 has what effect?", opts:["Shortens lifespan","Increases lifespan via selective autophagy of aggregates","No effect","Causes immediate death"], a:1,
      exp:"p62/SQST-1 promotes proteostasis/longevity; its overexpression increases lifespan."},
     {type:"tf", q:"Mitohormesis is the idea that mild stress (e.g., exercise, fasting) is beneficial while excessive stress is damaging.", a:true,
      exp:"True — a hormetic dose-response: mild stress activates protective autophagy/adaptation; too much causes damage."},
     {type:"mcq", q:"Why might high-dose antioxidant supplements blunt the benefits of exercise?", opts:["They add ATP","They suppress the exercise-induced ROS signals that trigger beneficial adaptations","They lengthen telomeres","They block the proteasome"], a:1,
      exp:"Exercise ROS act as adaptive signals (autophagy, mitochondrial biogenesis); quenching them with high-dose antioxidants can remove the benefit."},
     {type:"mcq", q:"A hormetic heat shock in C. elegans tends to:", opts:["Kill the worms immediately","Induce stress resistance and longevity (via p62/SQST-1)","Permanently stop autophagy","Lengthen telomeres only"], a:1,
      exp:"A mild (hormetic) heat shock induces p62/SQST-1 and stress resistance, promoting longevity."},
     {type:"mcq", q:"A researcher exposes young cells to a low dose of oxidative stress and observes improved survival after a later high-dose challenge. Which concept is best illustrated?", opts:["Hormesis","Replicative senescence","Proteostasis collapse","Adaptive homeostasis"], a:0,
      exp:"Low-dose stress → protective pathways activated → better survival against high-dose challenge = hormesis. The other options don't describe a beneficial response to low-dose stress."},
     {type:"mcq", q:"In an experiment testing hormesis, which result would most strongly support a hormetic response?", opts:["Following exposure to stress, cells stop dividing","Increasing stress reduces cellular function","All intensities of stress have similar effects","Moderate heat exposure improves long-term stress resistance, while high heat exposure reduces survival"], a:3,
      exp:"Hormesis requires a biphasic dose-response: low/moderate stress = beneficial; high stress = harmful. Only option 4 shows this curve."},
     {type:"mcq", q:"Researchers activate mitophagy in aged mice and observe improved tissue function. However, lifespan does not increase. Which explanation best fits?", opts:["Mitophagy has a significant effect only in embryonic development","Mitophagy decreases mitochondrial quality","Improving one hallmark of aging may enhance healthspan without fully extending lifespan","Lifespan and healthspan always change together"], a:2,
      exp:"Tissue function (healthspan) improved but maximum lifespan did not — classic evidence that fixing one hallmark can decouple healthspan from lifespan. Aging is multifactorial."}
    ]
   },
   {
    id:"L6T3", title:"Mitochondrial structure & function",
    sub:"Architecture and the many jobs of mitochondria (slides 11–13).",
    slides:[
     {h:"Mitochondrial structure", imgs:[
        {src:"slides/L6/slide-11.jpg", cap:"L6 · Slide 11 — Mitochondrial structure"},
        {src:"slides/L6/slide-12.jpg", cap:"L6 · Slide 12 — Varied shapes"}
      ], html:`
       <p class="lead">A mitochondrion has an <span class="kw-2">outer membrane</span>, an <span class="kw-2">inner membrane</span> folded into <span class="kw-2">cristae</span> (which hold the electron-transport chain), the <span class="kw-2">intermembrane space</span>, and the <span class="kw-2">matrix</span>. Their shape is dynamic and varied across cell types.</p>`},
     {h:"Mitochondria have many roles", imgs:[
        {src:"slides/L6/slide-13.jpg", cap:"L6 · Slide 13 — Roles of mitochondria"}
      ], html:`
       <p class="lead">Mitochondria do far more than make ATP:</p>
       <ul>
        <li><span class="kw">ATP production</span> (oxidative phosphorylation)</li>
        <li><span class="kw-2">TCA cycle</span> (tricarboxylic acid = Krebs/citric-acid cycle)</li>
        <li><span class="kw-2">Apoptosis</span> (release of cytochrome c)</li>
        <li><span class="kw-2">Fatty-acid oxidation</span></li>
        <li><span class="kw-2">Ca²⁺ regulation</span></li>
        <li><span class="kw-2">ROS signaling</span></li>
       </ul>`}
    ],
    quiz:[
     {type:"mcq", q:"The folds of the inner mitochondrial membrane that house the electron-transport chain are called:", opts:["Cristae","Matrix","Cisternae","Thylakoids"], a:0,
      exp:"Cristae are the inner-membrane folds; the matrix is the innermost compartment."},
     {type:"mcq", q:"Which is NOT a role of mitochondria listed in lecture?", opts:["ATP production","TCA (Krebs) cycle","Apoptosis and Ca²⁺ regulation","DNA methylation of the nuclear genome"], a:3,
      exp:"Mitochondria handle ATP, the TCA cycle, apoptosis, fatty-acid oxidation, Ca²⁺ regulation, and ROS signaling — not nuclear DNA methylation."},
     {type:"tf", q:"Mitochondria participate in apoptosis (programmed cell death).", a:true,
      exp:"True — mitochondrial outer-membrane permeabilization releases cytochrome c to trigger apoptosis."},
     {type:"mcq", q:"'TCA cycle' refers to:", opts:["The telomere capping apparatus","The tricarboxylic acid (Krebs/citric-acid) cycle","A type of chaperone","A DNA repair pathway"], a:1,
      exp:"TCA = tricarboxylic acid cycle = the Krebs/citric-acid cycle."},
     {type:"mcq", q:"Which experimental observation would provide the strongest evidence that mitochondrial dysfunction is a CAUSE, rather than only a consequence, of aging?", opts:["ATP production decreases with age","Aging tissues contain more oxidized molecules","Inducing mitochondrial damage in young animals accelerates age-related phenotypes","Older individuals contain fewer healthy mitochondria"], a:2,
      exp:"Only option 3 is an interventional experiment: damage mito in a young (non-aged) animal → the animal ages faster. The other options show correlation in already-aged organisms, not causation."},
     {type:"mcq", q:"Why might mitochondrial health serve as a useful biomarker of aging?", opts:["Mitochondrial function integrates metabolism, oxidative stress, and quality control","Mitochondria accumulate all age-related mutations equally","Mitochondrial number remains constant across lifespan","Mitochondria directly measure chronological time"], a:0,
      exp:"A good biomarker reflects multiple converging processes. Mito health integrates ATP output, ROS signaling, fission/fusion dynamics, and mitophagy — making it a broad readout of cellular aging."}
    ]
   },
   {
    id:"L6T4", title:"ROS — the good and the bad",
    sub:"Where free radicals come from, oxidative damage, ROS signaling, antioxidant enzymes (slides 15–17, 20).",
    slides:[
     {h:"Where free radicals come from", imgs:[
        {src:"slides/L6/slide-15.jpg", cap:"L6 · Slide 15 — Sources of free radicals"}
      ], html:`
       <p class="lead">About <span class="kw">1–4% of oxygen is converted to ROS</span>, and <span class="warn">&gt;90% of ROS is mitochondrial</span> (the electron-transport chain leaks electrons to oxygen). Antioxidant defenses include:</p>
       <ul>
        <li><span class="kw-2">CuZnSOD (SOD1)</span> — copper-zinc superoxide dismutase, a natural O₂•⁻ scavenger</li>
        <li><span class="kw-2">MnSOD</span> — manganese superoxide dismutase, protects from oxidative damage</li>
       </ul>`},
     {h:"The BAD side and the GOOD side of ROS", imgs:[
        {src:"slides/L6/slide-16.jpg", cap:"L6 · Slide 16 — ROS cause oxidative damage"},
        {src:"slides/L6/slide-17.jpg", cap:"L6 · Slide 17 — ROS signaling (cell survival)"},
        {src:"slides/L6/slide-20.jpg", cap:"L6 · Slide 20 — Oxidation & antioxidant clearance"}
      ], html:`
       <table class="dt">
        <tr><th>'BAD' — oxidative damage</th><th>'GOOD' — ROS signaling</th></tr>
        <tr><td>Lipids (membrane peroxidation)<br>Proteins (carbonyls, aggregation)<br>DNA (8-oxodG, mutations, deletions)</td><td>Cell survival/proliferation, HIF-1α, NF-κB, MAPKs, antioxidant induction (Keap1)</td></tr>
       </table>
       <p>ROS produced by the respiratory chain are cleared by antioxidant enzymes: <span class="kw-2">SOD</span> (superoxide dismutase), <span class="kw-2">GPx</span> (glutathione peroxidase), and <span class="kw-2">PRDX</span> (peroxiredoxins); glutathione cycles between GSH (reduced) and GSSG (oxidized).</p>
       <div class="callout key">ROS are double-edged: damaging at high levels but essential <b>signaling molecules</b> at low levels — which is exactly why blanket antioxidant supplementation can backfire.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"What fraction of oxygen is converted to ROS, and where do most ROS originate?", opts:["~50%, in the nucleus","~1–4%, mostly mitochondrial (electron-transport chain)","~25%, in the cytosol","None; ROS are only from UV"], a:1,
      exp:"About 1–4% of O₂ becomes ROS, and >90% of ROS is mitochondrial (ETC electron leak)."},
     {type:"mcq", q:"Which enzyme is a superoxide scavenger that protects against oxidative damage?", opts:["Telomerase","Superoxide dismutase (SOD, e.g., CuZnSOD/MnSOD)","DNMT","HAT"], a:1,
      exp:"SOD (CuZnSOD/SOD1, MnSOD) converts superoxide to less-damaging species; GPx and PRDX further clear ROS."},
     {type:"tf", q:"ROS are purely harmful and have no useful role in the cell.", a:false,
      exp:"False — at low levels ROS are important signaling molecules (cell survival, HIF-1α, NF-κB, MAPKs); they're damaging only in excess."},
     {type:"mcq", q:"Oxidative damage from ROS includes all EXCEPT:", opts:["Lipid peroxidation of membranes","Protein carbonylation/aggregation","8-oxodG and DNA mutations","Lengthening of telomeres"], a:3,
      exp:"ROS damage lipids, proteins, and DNA (8-oxodG). They do not lengthen telomeres."},
     {type:"mcq", q:"Glutathione peroxidase (GPx) and peroxiredoxins (PRDX) function to:", opts:["Produce ROS","Clear/detoxify ROS (antioxidant defense)","Build the proteasome","Methylate DNA"], a:1,
      exp:"GPx and PRDX are antioxidant enzymes that clear ROS (GPx uses the GSH/GSSG glutathione cycle)."},
     {type:"mcq", q:"Researchers genetically engineered mice to produce very low levels of mitochondrial ROS. These mice showed impaired stress-response pathways, reduced mitochondrial quality control, and poorer metabolic health. Which conclusion is best supported?", opts:["Antioxidants increase ATP production and extend lifespan","Mitochondria produce ROS only when cells are damaged","Reactive oxygen species are harmful and should be eliminated completely","Mitochondrial ROS can function as signaling molecules required to activate protective cellular responses"], a:3,
      exp:"Eliminating ROS made things worse — proving ROS is needed for signaling and protective responses. This is the ROS paradox: some ROS is required, not just harmful."}
    ]
   },
   {
    id:"L6T5", title:"Mitochondrial dynamics, mtDNA & mitophagy",
    sub:"Fission/fusion, mitochondrial DNA, and PINK1/Parkin (slides 19, 21–24).",
    slides:[
     {h:"Mitochondrial dynamics: fission & fusion", imgs:[
        {src:"slides/L6/slide-21.jpg", cap:"L6 · Slide 21 — Fission & fusion"},
        {src:"slides/L6/slide-19.jpg", cap:"L6 · Slide 19 — Mitochondria link inflammation, ROS & aging"}
      ], html:`
       <p class="lead">Mitochondria constantly <span class="kw">fuse and divide</span>:</p>
       <ul>
        <li><span class="kw-2">Fission</span>: Drp1 (a dynamin-related GTPase), with Mff, Fis1, Mid49/51.</li>
        <li><span class="kw-2">Fusion</span>: Mfn (mitofusins, outer membrane) and Opa1 (inner membrane).</li>
       </ul>
       <p>Disordered dynamics, mtDNA damage, and impaired mitophagy make mitochondria a <span class="warn">core link between inflammation, oxidative stress, and aging</span> (DAMPs → inflammaging).</p>`},
     {h:"Mitochondrial DNA & mitophagy (PINK1/Parkin)", imgs:[
        {src:"slides/L6/slide-22.jpg", cap:"L6 · Slide 22 — Mitochondrial DNA"},
        {src:"slides/L6/slide-23.jpg", cap:"L6 · Slide 23 — Mitophagy"},
        {src:"slides/L6/slide-24.jpg", cap:"L6 · Slide 24 — PINK1/Parkin pathway"}
      ], html:`
       <p class="lead"><span class="kw">Mitochondrial DNA (mtDNA)</span> is a small circular genome with <span class="kw-2">13 protein-coding genes, 22 tRNA genes, and 2 rRNA genes</span>. It has a <span class="warn">higher mutation rate than nuclear DNA</span> (near the ROS source, less protected) and can leak into the cytosol. mtDNA is maintained by BER, MMR, HR, and strand-break repair.</p>
       <p><span class="kw">Mitophagy</span> is selective autophagy of damaged mitochondria (autophagosome → autolysosome → degradation). The <span class="kw-2">PINK1/Parkin</span> pathway activates mitophagy by tagging/recognizing damaged mitochondria for removal.</p>
       <div class="callout key">mtDNA numbers to remember: <b>13 protein-coding + 22 tRNA + 2 rRNA</b> genes; higher mutation rate than nuclear DNA.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Mitochondrial DNA contains:", opts:["13 protein-coding, 22 tRNA, and 2 rRNA genes","Thousands of protein-coding genes","Only rRNA genes","No genes at all"], a:0,
      exp:"mtDNA encodes 13 proteins, 22 tRNAs, and 2 rRNAs, and mutates faster than nuclear DNA."},
     {type:"mcq", q:"The PINK1/Parkin pathway mediates:", opts:["Telomere lengthening","Recognition of damaged mitochondria for mitophagy","DNA methylation","Histone acetylation"], a:1,
      exp:"PINK1/Parkin marks damaged mitochondria for selective autophagy (mitophagy)."},
     {type:"mcq", q:"Mitochondrial fission is driven mainly by:", opts:["Mfn and Opa1","Drp1 (a dynamin-related GTPase)","Telomerase","DNMT"], a:1,
      exp:"Drp1 (with Mff, Fis1, Mid49/51) drives fission; Mfn and Opa1 drive fusion."},
     {type:"tf", q:"mtDNA has a higher mutation rate than nuclear DNA.", a:true,
      exp:"True — mtDNA sits near the ROS-producing ETC and is less protected, giving a higher mutation rate."},
     {type:"mcq", q:"Mitophagy is best described as:", opts:["Mitochondrial fusion","Selective autophagy that degrades damaged mitochondria","Production of new ribosomes","ATP synthesis"], a:1,
      exp:"Mitophagy is the selective autophagic removal of damaged mitochondria (autophagosome → autolysosome)."},
     {type:"mcq", q:"A mutation prevents mitophagy while general autophagy remains functional. Which aging-related outcome would be most likely?", opts:["Accumulation of dysfunctional mitochondria and increased oxidative stress","Increased mitochondrial biogenesis","Faster DNA replication","Elimination of reactive oxygen species"], a:0,
      exp:"Mitophagy selectively clears damaged mito. Block it → damaged mito pile up → excess ROS → oxidative stress. General autophagy can't compensate because it lacks the PINK1/Parkin selective-targeting signal."},
     {type:"mcq", q:"A researcher generates cells where PARKIN cannot be recruited to mitochondria, while PINK1 remains functional. Which outcome would most likely be observed?", opts:["Healthy mitochondria would be degraded more rapidly because PARKIN normally inhibits mitophagy","Damaged mitochondria would accumulate because PINK1 detects damage but PARKIN cannot label them for degradation","ATP production would increase because damaged mitochondria remain available for energy production","Mitophagy would continue normally because PINK1 directly degrades damaged mitochondria"], a:1,
      exp:"PINK1 accumulates and signals damage, but without PARKIN recruitment, no ubiquitin chain is added → damaged mito never tagged for phagosome formation → they accumulate."},
     {type:"mcq", q:"In mitochondrial dynamics, which process dilutes localized damage by mixing mitochondrial contents?", opts:["Fission","Fusion","Mitophagy","Import"], a:1,
      exp:"Fusion merges two mitochondria, diluting localized damage by mixing contents across the combined compartment."},
     {type:"mcq", q:"In mitochondrial dynamics, which process isolates dysfunctional regions so they can be removed by mitophagy?", opts:["Fusion","Import via TOM/TIM","Fission","Biogenesis"], a:2,
      exp:"Fission splits off the damaged portion of a mitochondrion, isolating it into a separate organelle that can then be tagged by PINK1/Parkin and removed by mitophagy."}
    ]
   },
   {
    id:"L6T6", title:"Mitochondrial transfer & import",
    sub:"Horizontal transfer between cells and protein import (slides 26–30).",
    slides:[
     {h:"Cells can transfer mitochondria to each other", imgs:[
        {src:"slides/L6/slide-26.jpg", cap:"L6 · Slide 26 — Horizontal mitochondrial transfer"},
        {src:"slides/L6/slide-27.jpg", cap:"L6 · Slide 27 — Vertical vs. horizontal inheritance"}
      ], html:`
       <p class="lead">Beyond <span class="kw-2">vertical inheritance</span> (passed to daughter cells at division), mitochondria show <span class="kw">horizontal/intercellular transfer</span> — moved from one cell to another via <span class="kw-2">tunneling nanotubes</span> or <span class="kw-2">extracellular vesicles (EVs)</span>. Free mitochondria are released without an enveloping membrane; EV-associated mitochondria (EVM) are enclosed in a vesicle.</p>
       <div class="callout tip">A class activity used this: blocking mitophagy eliminated most benefits of mitochondrial transfer → the best-supported conclusion is that <b>mitophagy may be necessary for transferred mitochondria to improve long-term cellular health</b> (not that transfer alone "reverses aging").</div>`},
     {h:"Importing proteins into mitochondria", imgs:[
        {src:"slides/L6/slide-30.jpg", cap:"L6 · Slide 30 — TOM/TIM import with Hsp70"}
      ], html:`
       <p class="lead">Most mitochondrial proteins are made in the cytosol and imported. <span class="kw-2">Hsp70 (chaperone)</span> keeps the polypeptide unfolded; a <span class="kw-2">transit sequence</span> binds the <span class="kw-2">TOM</span> receptor (outer membrane) and passes through <span class="kw-2">TIM</span> (inner membrane). ATP-driven Hsp70 cycles pull it into the matrix, the transit sequence is cleaved by a peptidase, and <span class="kw-2">Hsp60</span> aids final folding.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"Horizontal (intercellular) mitochondrial transfer occurs via:", opts:["Tunneling nanotubes and extracellular vesicles","Telomerase","DNA methylation","The proteasome"], a:0,
      exp:"Mitochondria move between cells through tunneling nanotubes and EVs (vs. vertical inheritance at cell division)."},
     {type:"mcq", q:"In an experiment, blocking mitophagy eliminated most benefits of mitochondrial transfer (senescence markers didn't improve). Best-supported conclusion?", opts:["Mitochondrial transfer alone fully reverses aging","Mitophagy may be necessary for transferred mitochondria to improve long-term cellular health","Hormesis prevents aging entirely","Aging is caused only by low ATP"], a:1,
      exp:"Since blocking mitophagy removed the benefit, mitophagy is likely required for transferred mitochondria to help — a measured conclusion, not 'reverses aging.'"},
     {type:"tf", q:"Hsp70 keeps an incoming polypeptide unfolded during import through the TOM/TIM complexes.", a:true,
      exp:"True — cytosolic Hsp70 holds the precursor unfolded; ATP-driven Hsp70 cycles import it through TOM (outer) and TIM (inner) membranes."},
     {type:"mcq", q:"'EVM' (EV-associated mitochondria) differ from 'free mitochondria' in that EVM are:", opts:["Enclosed within an extracellular vesicle","Always inside the nucleus","Made only of DNA","Unable to be transferred"], a:0,
      exp:"EVM are released enclosed in an extracellular vesicle; free mitochondria are released without an additional enveloping membrane."},
     {type:"mcq", q:"Researchers culture aged recipient cells with healthy donor cells and observe improved mitochondrial membrane potential. Blocking TNTs gives partial reduction in recovery; blocking EVs gives partial reduction; blocking both nearly eliminates recovery. Which conclusion is most strongly supported?", opts:["Recovery must occur through increased mtDNA replication rather than intercellular transfer","TNTs and EVs may function as partially redundant pathways that together mediate horizontal mitochondrial transfer and support cellular recovery","EVs are the only biologically relevant mechanism because they affect more cells simultaneously","TNTs and EVs independently generate new mitochondria in recipient cells"], a:1,
      exp:"Each pathway alone only partially reduces recovery, but blocking both nearly eliminates it — the signature of two partially redundant routes that together mediate the transfer."},
     {type:"mcq", q:"Scientists transfer mitochondria from young donor cells into aged recipient cells. ATP production temporarily improves, but markers of aging remain unchanged. Which interpretation is most justified?", opts:["Mitochondria may not fully determine biological age","Aging is caused solely by mitochondrial dysfunction","Mitochondria have no role in aging","ATP production directly determines chronological age"], a:0,
      exp:"Improved ATP but unchanged aging markers means mito dysfunction is A contributor, not THE sole determinant of biological age. Aging is multifactorial."}
    ]
   },
   {
    id:"L6T7", title:"🎙️ From the lecture (Meeting 6) — what Prof. Kemeny stressed",
    sub:"Points from the Whisper-transcribed audio: 'not static ovals,' the ROS paradox, PINK1/Parkin → Parkinson's, horizontal transfer 'everyone is amazed,' and the hype warning.",
    slides:[
     {h:"🎙️ From the lecture (Meeting 6) — key emphases", imgs:[], html:`
      <div class="callout">🎙️ <b>From the recorded Meeting 6 lecture.</b> These are points the professor stressed out loud — strong candidates for 'understand &amp; reason' exam questions.</div>
      <h4>"Mitochondria are NOT static ovals"</h4>
      <p>She explicitly contrasted textbook diagrams with reality: in living cells, mitochondria form a <b>dynamic, interconnected network</b>. They constantly undergo <b>fission</b> (divide) and <b>fusion</b> (merge), travel along cytoskeletal tracks, and this dynamics is how they renew themselves. Brain and muscle cells may have <b>thousands</b> of mitochondria.</p>
      <h4>Prokaryotic origin — why it matters</h4>
      <p>Mitochondria entered a primordial eukaryotic cell as endosymbiotic bacteria. That's why they have:</p>
      <ul>
       <li>Their own <b>circular DNA</b> (like bacteria — not linear like our chromosomes)</li>
       <li>Their own <b>ribosomes</b> (bacteria-like, which is why some antibiotics affect mitochondria)</li>
       <li>Their own <b>polymerases</b></li>
       <li>Genes with <b>no introns</b> (prokaryotic gene structure)</li>
      </ul>`},
     {h:"🎙️ The ROS paradox — decades of failed antioxidants", imgs:[], html:`
      <h4>The failed antioxidant hypothesis</h4>
      <p>Since the 1950s, the theory was: ROS damages cells → give antioxidants → extend lifespan. Scientists spent <b>decades</b> testing this in worms, flies, mice, monkeys, and humans. Result: <b>antioxidants did not extend lifespan</b>. In some human trials they <b>increased disease risk</b>.</p>
      <h4>Why? ROS is a signaling molecule</h4>
      <p>ROS activates survival pathways (NF-κB, HIF-1α, MAPKs). Without some ROS, cells lose hormetic protection. <b>"We actually need our reactive oxygen species."</b></p>
      <div class="callout warn">Antioxidant supplements can be <b>HARMFUL</b> — they blunt the beneficial ROS signals that exercise and hormetic responses depend on. Exam point: removing ROS with supplements is not a cure for aging.</div>
      <h4>Mitohormesis — the key principle</h4>
      <p>A <b>little ROS</b> (from exercise, heat shock, cold water dipping, intermittent fasting) → hormetic response → repair pathways activated → cells do better and organisms live longer. <b>Too much ROS</b> → oxidative damage. The dose makes the cure or the poison.</p>`},
     {h:"🎙️ PINK1/Parkin, horizontal transfer & the hype warning", imgs:[], html:`
      <h4>PINK1 → Parkin → Parkinson's disease (critical exam connection)</h4>
      <ol>
       <li><b>PINK1</b> (a kinase) accumulates on damaged mitochondria → <b>phosphorylates Parkin</b></li>
       <li><b>Parkin</b> = E3 ubiquitin ligase (same protein from L5!) → adds ubiquitin chain to damaged mitochondria</li>
       <li>Ubiquitin chain → phagosome membrane forms → fuses with lysosome → <b>mitophagy</b></li>
      </ol>
      <div class="callout key">Mutations in <b>PINK1</b> or <b>PARKIN</b> genes → early-onset Parkinson's disease, sometimes as young as teenagers. Defective mitophagy = damaged mitochondria accumulate = neurons die = Parkinson's. This is the same Parkin E3 ligase Prof. Kemeny researched in L5!</div>
      <h4>Horizontal mitochondrial transfer — "everyone is amazed"</h4>
      <p>Only discovered in the last few years: cells can transfer <b>whole functional mitochondria</b> to neighboring cells via:</p>
      <ul>
       <li><b>Tunneling nanotubes</b> — physical membrane tubes between cells</li>
       <li><b>Extracellular vesicles</b> — mitochondria enclosed in membrane vesicles</li>
       <li><b>Cell-surface carbohydrate receptors</b> — capturing free mitochondria from the environment</li>
      </ul>
      <p>Some transferred mitochondria are degraded (lysosome), but some integrate and function. This is a hot research area with therapeutic potential.</p>
      <div class="callout warn"><b>Hype warning:</b> "If you meet a promoter of a mitophagy product, you can tell them that you know better." Too much mitophagy destroys mitochondria that heart and muscle cells need for ATP → fatigue, muscle loss, heart dysfunction. More mitophagy is <b>NOT</b> always better.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Why did decades of antioxidant supplementation experiments fail to extend lifespan?", opts:["Antioxidants weren't absorbed","ROS is needed for cell signaling and hormetic responses — removing it eliminates protective effects","Animals disliked the supplements","Antioxidants only work in humans"], a:1,
      exp:"ROS activates survival signaling. Eliminating it with antioxidants removes beneficial effects. Antioxidants failed because some ROS is necessary."},
     {type:"mcq", q:"The PINK1/Parkin pathway triggers mitophagy when:", opts:["A mitochondrion is healthy","PINK1 accumulates on a damaged mitochondrion → phosphorylates Parkin (E3 ligase) → ubiquitin chain → phagosome → lysosome","The cell has excess ATP","Ribosomes are overloaded"], a:1,
      exp:"PINK1 accumulates on damaged mito → phosphorylates Parkin (E3 ligase) → ubiquitin chain → phagosome forms → fuses with lysosome = mitophagy."},
     {type:"mcq", q:"Mutations in PINK1 or PARKIN genes are associated with:", opts:["Accelerated telomere growth","Early-onset Parkinson's disease (sometimes in teenagers)","Increased lifespan","Epigenetic clock deceleration"], a:1,
      exp:"PINK1/PARKIN mutations → defective mitophagy → damaged mitochondria accumulate in neurons → early-onset Parkinson's disease."},
     {type:"mcq", q:"Horizontal mitochondrial transfer between neighboring cells can occur via:", opts:["DNA methylation signals","Tunneling nanotubes, extracellular vesicles, and cell-surface carbohydrate receptors","Ribosomal export","Epigenetic reprogramming"], a:1,
      exp:"Whole mitochondria move between cells through tunneling nanotubes, EVs, and cell-surface carbohydrate receptors — recently discovered and widely studied."},
     {type:"tf", q:"Prof. Kemeny stated that increasing mitophagy is always beneficial for aging, and supplements that enhance it should be taken.", a:false,
      exp:"False — too much mitophagy destroys mitochondria heart and muscle cells need for ATP production → harm. She explicitly warned against assuming more mitophagy is always good."},
     {type:"mcq", q:"Why do mitochondria have their own circular DNA, bacteria-like ribosomes, and intron-free genes?", opts:["They evolved independently from chromosomes","They are descended from endosymbiotic prokaryotes (bacteria) that entered a primordial eukaryotic cell","They acquired DNA from viruses","The nucleus donated DNA to them"], a:1,
      exp:"Endosymbiotic theory: mitochondria were once free-living bacteria. That's why their genome, ribosomes, and genes still look prokaryotic."},
     {type:"mcq", q:"A scientist inhibits both mitophagy and the heat shock response in aging cells. Which combined outcome would most likely occur?", opts:["Improved proteostasis and mitochondrial function","Increased protein synthesis and lifespan extension","Reduced need for autophagy","Accumulation of damaged proteins and dysfunctional mitochondria leading to accelerated cellular decline"], a:3,
      exp:"Blocking both quality-control systems simultaneously removes two compensatory defenses: damaged mito accumulate (no mitophagy) AND misfolded proteins aggregate (no chaperone response) — a compounding failure that accelerates decline."}
    ]
   },
   {
    id:"L6X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions on the ROS paradox, mitophagy, mito dynamics, and endosymbiosis.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">Harder, application-level questions — reason through the ROS paradox, order the PINK1/Parkin cascade, and predict outcomes of blocking mitophagy. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"Why did 50+ years of antioxidant-supplement experiments fail to extend lifespan (and sometimes raise disease risk)?", opts:["Antioxidants were too weak","ROS are required signaling molecules; eliminating them removes protective (hormetic) responses","Animals refused the supplements","ROS don't exist in mitochondria"], a:1,
      exp:"ROS act as signals (NF-κB, HIF-1α, MAPKs) that trigger protective adaptations. Blanket antioxidants blunt these, so they don't help and can harm — the ROS paradox."},
     {type:"mcq", q:"Order the PINK1/Parkin mitophagy steps correctly:", opts:["Parkin phosphorylates PINK1 → fusion → fission","PINK1 accumulates on damaged mito → phosphorylates/recruits Parkin → poly-ubiquitin → phagosome → lysosome","Lysosome → PINK1 → healthy mito tagged","mTOR → Parkin → telomere"], a:1,
      exp:"PINK1 builds up on damaged mitochondria, recruits/activates Parkin (E3 ligase), which adds poly-ubiquitin; an autophagosome forms and fuses with a lysosome → mitophagy."},
     {type:"mcq", q:"In mitochondrial dynamics, fission and fusion serve which complementary roles?", opts:["Fission dilutes damage; fusion isolates it","Fusion mixes/dilutes contents to buffer damage; fission separates damaged regions for mitophagy","Both only make ATP","Both shorten mtDNA"], a:1,
      exp:"Fusion merges mitochondria, diluting localized damage; fission splits off damaged segments so they can be tagged and removed by mitophagy."},
     {type:"mcq", q:"mtDNA has a higher mutation rate than nuclear DNA mainly because it:", opts:["Has more introns","Sits next to the ROS-producing ETC and is less protected (no histones, limited repair)","Is linear","Is never replicated"], a:1,
      exp:"Circular mtDNA lies near the electron-transport chain (ROS source), lacks histone protection, and has more limited repair — so it mutates faster."},
     {type:"tf", q:"Since mitophagy clears damaged mitochondria, more mitophagy is always better for health.", a:false,
      exp:"False — excessive mitophagy destroys mitochondria that heart/muscle cells need for ATP, causing fatigue, muscle loss, and dysfunction. The professor warned against mitophagy-supplement hype."},
     {type:"short", q:"A mutation blocks mitophagy specifically, but general (macro)autophagy still works. Predict the aging-relevant outcome and explain why general autophagy can't compensate.", model:"Damaged mitochondria accumulate because mitophagy is the SELECTIVE pathway that recognizes them (via PINK1/Parkin ubiquitin tagging). General autophagy lacks that selective targeting, so it won't specifically remove damaged mitochondria. The buildup leaks excess ROS → oxidative stress, lowers ATP, and accelerates cellular decline.", pts:["Damaged mitochondria accumulate","General autophagy lacks PINK1/Parkin selective targeting","Result: ↑ROS/oxidative stress, ↓ATP, faster decline"]},
     {type:"mcq", q:"Which pairing correctly describes autophagy regulation by energy sensors?", opts:["AMPK inhibits autophagy; mTOR activates it","AMPK (low energy) activates autophagy; mTOR (abundance) inhibits it","Both inhibit it","Both activate it"], a:1,
      exp:"AMPK senses low energy and turns ON autophagy; mTOR senses abundance and turns it OFF."},
     {type:"mcq", q:"Which feature is the BEST evidence that mitochondria descended from endosymbiotic bacteria?", opts:["They make ATP","They have their own circular DNA, bacteria-like ribosomes, and intron-free genes","They are oval-shaped","They contain water"], a:1,
      exp:"Circular DNA, prokaryote-type ribosomes (sensitive to some antibiotics), own polymerases, and intron-free genes all point to a bacterial (endosymbiotic) origin."},
     {type:"short", q:"Explain mitohormesis: why exercise-induced ROS can be beneficial while high-dose antioxidants taken around exercise may not be.", model:"Exercise transiently raises ROS, which act as signals activating repair and adaptive pathways (e.g., HIF-1α, NF-κB, MAPKs, mitochondrial biogenesis) — a hormetic benefit. High-dose antioxidants taken around exercise quench these ROS signals, blunting the adaptive response and the benefit. The dose matters: a little ROS is protective, too much is damaging.", pts:["Exercise ROS = adaptive signal → repair/biogenesis","Hormesis: mild stress beneficial","High-dose antioxidants quench the signal, blunting benefit","Dose-dependent (little good, too much bad)"]},
     {type:"mcq", q:"Horizontal (cell-to-cell) mitochondrial transfer can occur via all of these EXCEPT:", opts:["Tunneling nanotubes","Extracellular vesicles","Cell-surface carbohydrate receptors capturing free mitochondria","DNA methylation"], a:3,
      exp:"Mitochondria move between cells via tunneling nanotubes, EVs, and surface carbohydrate-receptor capture. DNA methylation is an epigenetic mark, not a transfer route."}
    ]
   }
  ]
 },

 /* ============================ LECTURE 7 ============================ */
 {
  id:"L7", icon:"🍽️", short:"L7 · Nutrient Sensing",
  title:"Lecture 7 — Nutrient Sensing, Metabolism & Longevity",
  blurb:"Why diabetes matters for aging, caloric restriction & the insulin/IGF-1 (DAF-2/DAF-16→FOXO) pathway, glucose homeostasis & type 1 vs type 2 diabetes, the AMPK/mTOR longevity axis, and interventions: rapamycin, metformin, and GLP-1 agonists.",
  objectives:[
    "Explain why deregulated nutrient sensing is a systemic hallmark of aging, using diabetes/prediabetes epidemiology and economics",
    "Distinguish type 1 (autoimmune, β-cell loss) from type 2 (metabolic, insulin resistance) diabetes at the molecular level",
    "Describe glucose homeostasis (insulin/glucagon, β/α cells, glycogen, GLUT4) and how it breaks in each diabetes type",
    "Interpret the Kenyon daf-2 / daf-16 lifespan experiments and explain why daf-16 (FOXO) is required for daf-2 longevity",
    "Map the insulin/IGF-1 signaling (IIS) pathway → PI3K → AKT → mTOR → autophagy, and the AMPK energy-sensor branch",
    "State which nutrient-sensing pathways to activate (AMPK) vs suppress (IIS, mTOR) to promote longevity, and why timing/context matters",
    "Evaluate caloric restriction, rapamycin, metformin, and GLP-1 agonists as interventions — separating evidence from hype"
  ],
  topics:[
   {
    id:"L7T1", title:"Why we care — diabetes, prediabetes & aging",
    sub:"The epidemiology and economics, type 1 vs type 2, and when to intervene (slides 1–6).",
    slides:[
     {h:"The scale of diabetes — and why it's an aging problem", imgs:[
        {src:"slides/L7/slide-02.jpg", cap:"L7 · Slide 2 — Diabetes & prediabetes in the US"},
        {src:"slides/L7/slide-03.jpg", cap:"L7 · Slide 3 — Cost & complications"}
      ], html:`
       <p class="lead">Prof. Kemeny opened (as always) with <span class="kw">why do we care?</span> The numbers are staggering: <span class="warn">~40 million</span> Americans have diabetes (~12% of the population), and <span class="warn">115+ million</span> have <span class="kw-2">prediabetes</span> — "more than 8 in 10" don't know it.</p>
       <ul>
        <li><b>Economics:</b> diabetes was ~25% of US healthcare spending; medical costs are <b>more than twice</b> as high for people with diabetes.</li>
        <li><b>Complications:</b> blindness, kidney failure, heart disease, stroke, loss of toes/feet/legs — all from excess blood sugar destroying blood vessels and tissues.</li>
       </ul>
       <div class="callout key">Diabetes is an <b>age-related disease</b> tied to obesity, and obesity worsens essentially every age-related disease (cardiovascular disease, cancer, Parkinson's, Alzheimer's). Deregulated nutrient sensing is the systemic hallmark of aging.</div>`},
     {h:"Type 1 vs Type 2 — and when to intervene", imgs:[
        {src:"slides/L7/slide-04.jpg", cap:"L7 · Slide 4 — Type 1 vs Type 2"},
        {src:"slides/L7/slide-05.jpg", cap:"L7 · Slide 5 — Risk factors & prevention"},
        {src:"slides/L7/slide-06.jpg", cap:"L7 · Slide 6 — At what stage to intervene?"}
      ], html:`
       <table class="dt">
        <tr><th>Type 1 diabetes</th><th>Type 2 diabetes</th></tr>
        <tr><td><b>Autoimmune</b> — immune system attacks pancreatic β-cells → body can't make enough insulin. <b>~5–10%</b> of cases. Any age. <b>No way to prevent</b>; treated with exogenous insulin.</td><td><b>Metabolic disease</b> — body makes insulin but cells stop responding (<b>insulin resistance</b>). <b>~90–95%</b> of cases. Largely <b>preventable</b>; driven by obesity/inactivity.</td></tr>
       </table>
       <div class="callout tip"><b>Class question (slide 6):</b> if aging contributes to diabetes risk, when do interventions have the greatest impact — before, during, or after prediabetes? Prof.'s take: <b>before</b> is best (prevention), but <b>lifestyle change is the hardest intervention of all</b> — people would rather take a pill. Personalized medicine ("your zip code matters") helps but isn't yet accessible to most.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"What fundamentally distinguishes type 1 from type 2 diabetes?", opts:["Type 1 is autoimmune β-cell destruction (insufficient insulin); type 2 is insulin resistance (cells don't respond)","Type 1 is preventable; type 2 is not","Type 1 only occurs in adults; type 2 only in children","They are the same disease at different ages"], a:0,
      exp:"Type 1 = autoimmune attack on β-cells → too little insulin. Type 2 = metabolic insulin resistance → cells stop responding to insulin that is present."},
     {type:"mcq", q:"Which type of diabetes accounts for ~90–95% of cases and is largely preventable?", opts:["Type 1","Type 2","Gestational only","Neither is preventable"], a:1,
      exp:"Type 2 is ~90–95% of cases, tied to obesity/inactivity, and largely preventable through lifestyle."},
     {type:"tf", q:"Prof. Kemeny said lifestyle change is one of the easiest interventions for type 2 diabetes.", a:false,
      exp:"False — she stressed lifestyle change is the HARDEST intervention; people prefer a pill/drug over changing diet and exercise habits."},
     {type:"mcq", q:"Why does excess blood glucose cause complications like blindness, kidney failure, and stroke?", opts:["It directly methylates DNA","It damages blood vessels and the tissues they supply (eyes, kidneys, brain, extremities)","It shortens telomeres in neurons only","It activates telomerase"], a:1,
      exp:"Chronic high sugar destroys blood vessels and the tissues they feed — retina, kidney filtration, brain (stroke), and limb extremities."}
    ]
   },
   {
    id:"L7T2", title:"Caloric restriction & the insulin/IGF-1 pathway",
    sub:"CR across species, Kenyon's daf-2/daf-16 worms, and the conserved IIS→FOXO logic (slides 7–10).",
    slides:[
     {h:"Caloric restriction extends lifespan across species", imgs:[
        {src:"slides/L7/slide-07.jpg", cap:"L7 · Slide 7 — Lifespan increase after caloric restriction"}
      ], html:`
       <p class="lead">For ~100 years, scientists have seen that <span class="kw">restricting calories extends lifespan</span> across model organisms — and the animals stay <b>healthy</b> (yeast keep budding; worms keep laying eggs).</p>
       <ul>
        <li><b>Yeast:</b> up to <b>~300%</b> (3× longer)</li>
        <li><b>Roundworms / rats:</b> ~80–100% (≈ double)</li>
        <li><b>Mouse lemurs (primates):</b> ~150% — like extending an 80-yr human lifespan to 120</li>
        <li>Now studied in <b>dogs</b> too</li>
       </ul>
       <div class="callout warn">Caution Prof. stressed: <b>"mice lie and monkeys exaggerate."</b> Many interventions work in model organisms and fail to translate to humans — there's a "graveyard" of drugs that succeeded preclinically but failed in human trials.</div>`},
     {h:"Kenyon's daf-2 / daf-16 experiments (1993)", imgs:[
        {src:"slides/L7/slide-08.jpg", cap:"L7 · Slide 8 — daf-2 mutant lives 2.3× longer"},
        {src:"slides/L7/slide-09.jpg", cap:"L7 · Slide 9 — daf-2;daf-16 double mutant loses the benefit"},
        {src:"slides/L7/slide-10.jpg", cap:"L7 · Slide 10 — Conserved IIS→FOXO in worms, flies, mice"}
      ], html:`
       <p class="lead"><span class="kw">Cynthia Kenyon (1993)</span> mutated <span class="kw-2">daf-2</span> — the worm <b>insulin/IGF-1 receptor</b>. When daf-2 is inactivated, worms live <b>2.3× longer</b> with the healthspan of a young worm.</p>
       <p>The key logic experiment: a <span class="kw-2">daf-2; daf-16 double mutant loses all the lifespan benefit</span>. <span class="kw">daf-16</span> encodes a <b>transcription factor (FOXO in humans)</b>.</p>
       <div class="callout key"><b>Conclusion:</b> daf-2 mutations extend life <b>by allowing daf-16/FOXO to act</b>. Normally the active insulin receptor <i>inhibits</i> FOXO; remove the receptor → FOXO is freed → longevity. Take FOXO away too → no benefit. The pathway is <b>evolutionarily conserved</b>: worm DAF-2 ≈ human insulin receptor; worm DAF-16 ≈ human FOXO.</div>
       <p class="muted">Aside: Kenyon later moved to <b>Calico</b> (California Life Company), funded by Alphabet/Google — a sign of how much money is flowing into longevity research.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"In Kenyon's experiment, a daf-2; daf-16 double mutant shows normal (not extended) lifespan, while a daf-2 single mutant lives ~2.3× longer. What does this prove?", opts:["daf-16 is irrelevant to aging","daf-2 longevity REQUIRES daf-16 (FOXO) acting downstream","daf-2 and daf-16 are the same gene","Caloric restriction caused the effect, not the genes"], a:1,
      exp:"Removing daf-16 abolishes the daf-2 benefit, so daf-16 (FOXO) is required downstream. The insulin receptor normally inhibits FOXO; losing the receptor frees FOXO to promote longevity."},
     {type:"mcq", q:"daf-2 (worm) corresponds to which human protein, and daf-16 to which?", opts:["daf-2 = FOXO; daf-16 = insulin receptor","daf-2 = insulin/IGF-1 receptor; daf-16 = FOXO","Both are mTOR","Both are telomerase"], a:1,
      exp:"daf-2 = the insulin/IGF-1 receptor; daf-16 = FOXO transcription factor. The IIS→FOXO axis is conserved from worms to mammals."},
     {type:"mcq", q:"Caloric restriction produced the LARGEST proportional lifespan increase in which organism?", opts:["Yeast (~300%)","Dogs","Mice","Primates"], a:0,
      exp:"Yeast showed up to ~300% (3×) lifespan extension; the effect is generally smaller in longer-lived animals."},
     {type:"tf", q:"'Mice lie and monkeys exaggerate' captures the idea that model-organism results always translate directly to humans.", a:false,
      exp:"False — the phrase warns the OPPOSITE: many interventions work in mice/monkeys but fail in humans. Model organisms are essential but results don't automatically translate."}
    ]
   },
   {
    id:"L7T3", title:"Hormones, the nutrient-sensing network & digestion",
    sub:"What a hormone is, the molecules cells sense, and the digestive overview (slides 11–13).",
    slides:[
     {h:"Hormones & the nutrient-sensing network", imgs:[
        {src:"slides/L7/slide-11.jpg", cap:"L7 · Slide 11 — A simple endocrine pathway"},
        {src:"slides/L7/slide-12.jpg", cap:"L7 · Slide 12 — Components of the nutrient-sensing network"}
      ], html:`
       <p class="lead">A <span class="kw">hormone</span> is a molecule secreted from one tissue that travels through the blood; <b>only cells with the matching receptor</b> (target cells) respond. The hormone is the <b>ligand</b>; binding changes the receptor's shape → a signaling cascade. Secreting tissues = the <span class="kw-2">endocrine system</span>.</p>
       <p>Hormone chemical types: <b>steroid</b> (testosterone, estrogen), <b>gas</b> (nitric oxide), and <b>protein</b> (insulin — encoded by a gene). Regulation runs by <b>negative feedback</b>.</p>
       <p>Cells evolved to <span class="kw">sense nutrients</span>. The network senses:</p>
       <ul>
        <li><b>Energy mediators</b> — ATP, NAD</li>
        <li><b>Carbohydrates</b> — glucose</li>
        <li><b>Proteins</b> — amino acids</li>
        <li><b>Fats/lipids</b> — fatty acids</li>
        <li><b>Micronutrients</b> (vitamins, e.g. zinc — enzyme cofactors) & <b>phytonutrients</b> (from plants, including fiber broken down by gut bacteria)</li>
       </ul>`},
     {h:"The digestive system — taking molecules in", imgs:[
        {src:"slides/L7/slide-13.jpg", cap:"L7 · Slide 13 — Mammalian digestive system"}
      ], html:`
       <p class="lead">Breakdown of nutrients begins in the <span class="kw-2">mouth</span> → <span class="kw-2">stomach</span> (acids + enzymes) → <span class="kw-2">small intestine</span>, where <b>most absorption</b> happens (with juices from the <b>liver</b> and <b>pancreas</b>, both accessory organs) → <span class="kw-2">large intestine</span>, full of bacteria that release metabolites absorbed into the blood.</p>
       <div class="callout tip">Those gut-bacterial metabolites travel in the blood and can affect <b>every organ system, including the brain</b> — foreshadowing the microbiome and gut–brain axis at the end of the lecture.</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Which is the defining feature of a hormone?", opts:["It acts only inside the cell that makes it","It is secreted from one tissue, travels in the blood, and acts only on cells with its receptor","It is always a steroid","It is never encoded by a gene"], a:1,
      exp:"A hormone is secreted, travels through circulation, and affects only target cells bearing the matching receptor. Hormones can be steroid, gas, or protein (insulin is a protein hormone)."},
     {type:"mcq", q:"Which list correctly names categories the nutrient-sensing network monitors?", opts:["Telomeres, histones, centromeres","Energy mediators (ATP/NAD), glucose, amino acids, fatty acids, micro/phytonutrients","Only glucose","Only oxygen"], a:1,
      exp:"The network senses energy mediators (ATP, NAD), carbohydrates (glucose), proteins (amino acids), fats (fatty acids), plus micronutrients and phytonutrients."},
     {type:"mcq", q:"Where does most absorption of nutrients occur?", opts:["The stomach","The small intestine","The large intestine","The mouth"], a:1,
      exp:"Most nutrient absorption happens in the small intestine, aided by secretions from the liver and pancreas."}
    ]
   },
   {
    id:"L7T4", title:"Glucose homeostasis & the diabetes mechanism",
    sub:"Insulin/glucagon set-point control and how GLUT4 signaling fails in type 2 (slides 14–17).",
    slides:[
     {h:"Homeostatic regulation of blood glucose", imgs:[
        {src:"slides/L7/slide-14.jpg", cap:"L7 · Slide 14 — Insulin/glucagon glucose homeostasis"}
      ], html:`
       <p class="lead">Blood glucose is held near a set point (~70–110 mg/100 mL) by two pancreatic hormones:</p>
       <ul>
        <li><b>High sugar (after eating):</b> <span class="kw-2">β-cells</span> secrete <span class="kw">insulin</span> → cells take in glucose; liver/muscle store it as <b>glycogen</b> → blood sugar falls.</li>
        <li><b>Low sugar (after fasting):</b> <span class="kw-2">α-cells</span> secrete <span class="kw">glucagon</span> → liver breaks glycogen back into glucose → blood sugar rises.</li>
       </ul>
       <div class="callout key"><b>Homeostasis is not constancy</b> — it's oscillation around a set point: up a bit, back down; down a bit, back up. In <b>type 1 diabetes</b>, autoimmune loss of β-cells means little/no insulin, so glucose stays high ("sweet pee" was the original ancient diagnosis — ants drawn to the sugar).</div>`},
     {h:"Type 2 diabetes — insulin resistance & GLUT4", imgs:[
        {src:"slides/L7/slide-15.jpg", cap:"L7 · Slide 15 — Type 2 diabetes: insulin resistance"},
        {src:"slides/L7/slide-17.jpg", cap:"L7 · Slide 17 — Q: what's directly affected? (A: glucose uptake)"}
      ], html:`
       <p class="lead">Normally, insulin binding its receptor triggers vesicles carrying <span class="kw">GLUT4</span> (glucose transporter-4) to fuse with the membrane → glucose enters the cell.</p>
       <p>In <span class="kw-2">type 2 diabetes</span>, the insulin receptor can't bind insulin or can't signal downstream → <b>GLUT4 is never brought to the membrane</b> → glucose stays outside → it can't be stored as glycogen or broken down for energy, and excess is shunted to <b>fatty acids</b>. Years of high sugar <b>desensitize</b> the receptors.</p>
       <div class="callout tip"><b>Class question (slide 16–17):</b> which component is directly affected by the defect in GLUT4 signaling? <b>Answer: glucose uptake.</b> A useful biomarker for chronic high sugar is <b>HbA1c</b> (glycated hemoglobin).</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Which component is DIRECTLY affected by the defect in signaling to GLUT-4 in type 2 diabetes?", opts:["Glucose uptake","Insulin production","Glucose production","Receptor sensitivity"], a:0,
      exp:"GLUT4 is the glucose transporter; if signaling to it fails, the cell can't import glucose — glucose uptake is directly impaired. (Slide 16–17 in-class answer.)"},
     {type:"mcq", q:"How do β-cells and α-cells maintain glucose homeostasis?", opts:["β-cells release glucagon; α-cells release insulin","β-cells release insulin (lowers sugar); α-cells release glucagon (raises sugar)","Both release insulin","Both release glucagon"], a:1,
      exp:"β-cells secrete insulin (stores glucose, lowers blood sugar); α-cells secrete glucagon (breaks down glycogen, raises blood sugar)."},
     {type:"tf", q:"Homeostasis means blood glucose stays at exactly the same value at all times.", a:false,
      exp:"False — homeostasis is oscillation around a set point (up then back, down then back), not a constant value."},
     {type:"mcq", q:"In type 1 diabetes, why is blood glucose chronically high?", opts:["The liver overproduces glycogen","Autoimmune destruction of β-cells means little/no insulin is made","GLUT4 is overactive","Glucagon is absent"], a:1,
      exp:"Type 1 is autoimmune β-cell loss → insufficient insulin → glucose can't be taken into cells → it stays high in the blood."}
    ]
   },
   {
    id:"L7T5", title:"The longevity pathways — IIS, AMPK & mTOR",
    sub:"Which pathways to activate vs suppress, the IIS→mTOR→autophagy axis, and IGF's double edge (slides 18–24).",
    slides:[
     {h:"Five interventions & the IIS→mTOR→autophagy axis", imgs:[
        {src:"slides/L7/slide-18.jpg", cap:"L7 · Slide 18 — Interventions that extend lifespan"},
        {src:"slides/L7/slide-19.jpg", cap:"L7 · Slide 19 — The insulin/IGF-1 signaling (IIS) pathway"}
      ], html:`
       <p class="lead">Across yeast → worms → flies → mice, five interventions extend lifespan: <span class="kw-2">reduced insulin/IGF-1 signaling</span>, <span class="kw-2">reduced food intake</span>, <span class="kw-2">reduced mTOR signaling</span> (target of rapamycin), <span class="kw-2">reduced mitochondrial respiration</span>, and <span class="kw-2">germline removal</span>.</p>
       <p>The <span class="kw">IIS pathway</span>: insulin/IGF-1 bind receptor dimers (homo- or heterodimers) that phosphorylate each other → <b>IRS → PI3K → AKT → mTOR</b>. (A <b>kinase</b> adds a phosphate; a <b>phosphatase</b> removes one.)</p>
       <div class="callout key"><b>mTOR inhibits ULK → inhibits autophagy.</b> So insulin signaling <b>blocks autophagy</b>. mTOR drives <b>anabolic</b> ("building") pathways — protein translation, growth, proliferation; autophagy is <b>catabolic</b> ("catabolic = cutting down"). AKT also inhibits <b>FOXO</b>. Eating sugar → activates mTOR → shuts off the cell's clean-up.</div>`},
     {h:"Activate AMPK, suppress IIS & mTOR — but context matters", imgs:[
        {src:"slides/L7/slide-20.jpg", cap:"L7 · Slide 20 — Caloric restriction inhibits PI3K/AKT; AMPK energy sensor"},
        {src:"slides/L7/slide-22.jpg", cap:"L7 · Slide 22 — IGF-1: Dr Jekyll & Mr Hyde"},
        {src:"slides/L7/slide-24.jpg", cap:"L7 · Slide 24 — mTOR interactions with other longevity pathways"}
      ], html:`
       <p class="lead"><span class="kw">AMPK</span> is the cell's conserved <b>energy sensor</b>. Low energy → AMPK turns ON ATP-producing pathways and turns OFF ATP-consuming ones — including <b>inhibiting mTOR</b>. Caloric restriction inhibits PI3K/AKT in humans too (a "younger" transcription profile).</p>
       <div class="callout tip"><b>For longevity (slide 21):</b> <b>suppress</b> insulin/IGF-1 signaling ⬇, <b>suppress</b> mTOR ⬇, <b>activate</b> AMPK ⬆.</div>
       <p>But it's not simple. <span class="kw-2">IGF-1 is "Dr Jekyll & Mr Hyde"</span>: good for development, neurogenesis, myelination, and cell survival — but it inhibits autophagy/stress resistance and can drive excess ROS. <b>Timing matters</b>: a child needs IGF-1 to grow; when to start inhibiting these pathways differs per person (a case for biological clocks & personalized medicine).</p>
       <p class="muted">mTOR is a protein complex with two forms, <b>mTORC1</b> and <b>mTORC2</b>; it is the master regulator of growth/metabolism and is inhibited by AMPK.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"To promote longevity, which combination matches the lecture's logic?", opts:["Activate IIS, activate mTOR, suppress AMPK","Suppress IIS, suppress mTOR, activate AMPK","Activate all three","Suppress all three"], a:1,
      exp:"Suppress insulin/IGF-1 signaling and mTOR (both drive anabolic growth and block autophagy); activate AMPK (the energy sensor that inhibits mTOR and promotes autophagy)."},
     {type:"mcq", q:"How does eating sugar end up blocking the cell's autophagy?", opts:["Insulin → IRS → PI3K → AKT → mTOR, and mTOR inhibits ULK/autophagy","Sugar directly degrades lysosomes","Glucagon activates mTOR","AMPK is activated by sugar"], a:0,
      exp:"Insulin signaling runs IRS→PI3K→AKT→mTOR; mTOR inhibits ULK and therefore autophagy. So high insulin (from sugar) shuts down the clean-up pathway."},
     {type:"mcq", q:"AMPK is best described as:", opts:["A growth-promoting transcription factor","The cell's energy sensor — active in low energy, it inhibits mTOR and turns on ATP production","A glucose transporter","An autoimmune trigger"], a:1,
      exp:"AMPK is the conserved energy sensor: low cellular energy activates it; it then inhibits ATP-consuming mTOR and switches on ATP-producing pathways."},
     {type:"tf", q:"Because IGF-1 inhibits autophagy, more IGF-1 is always harmful at every stage of life.", a:false,
      exp:"False — IGF-1 is 'Dr Jekyll & Mr Hyde.' It's essential for growth, neurogenesis, and myelination (e.g., in children). Whether to inhibit it depends on life stage and context."},
     {type:"mcq", q:"What is the relationship between AMPK and mTOR?", opts:["AMPK activates mTOR","AMPK inhibits mTOR","They are the same complex","Neither affects the other"], a:1,
      exp:"AMPK inhibits mTOR. Activating AMPK (e.g., via caloric restriction or metformin) lifts mTOR's brake on autophagy."}
    ]
   },
   {
    id:"L7T6", title:"Interventions — rapamycin, metformin & GLP-1 agonists",
    sub:"Drugging the pathways, appetite hormones, semaglutides, and the microbiome (slides 25–33).",
    slides:[
     {h:"Rapamycin, metformin & the growth-vs-longevity trade-off", imgs:[
        {src:"slides/L7/slide-25.jpg", cap:"L7 · Slide 25 — Metformin's 'double dividends'"},
        {src:"slides/L7/slide-26.jpg", cap:"L7 · Slide 26 — Growth/reproduction vs stress-resistance/longevity"}
      ], html:`
       <p class="lead"><span class="kw">Rapamycin</span> (from a fungus — "mechanistic <b>T</b>arget <b>O</b>f <b>R</b>apamycin") <b>inhibits mTOR</b> → boosts autophagy. The only solid human evidence so far: in older people, <b>rapamycin improved immune function</b> (better flu-vaccine response, Mannick 2014). Many people take it anyway based on hype.</p>
       <p><span class="kw">Metformin</span> activates AMPK / inhibits mTOR and reduces the liver's glucose production. It's been an FDA-approved diabetes drug for decades — taken safely by millions — so it's now studied for longevity ("double dividends": acting on mitochondria).</p>
       <div class="callout warn"><b>No magic bullet.</b> Cells don't "decide" — outcomes are just the sum of active molecules, "like computer logic." The same molecule can do good or bad depending on context. Prof.'s goal: enough understanding that you <b>don't jump on an influencer's hype</b> (rapamycin, mTOR-inhibitor drugs, intermittent fasting) without knowing the science. The core trade-off: pathways favor <b>growth/reproduction</b> OR <b>stress-resistance/longevity</b> — overactivation associates with aging; inhibition extends lifespan in many organisms.</div>`},
     {h:"Appetite hormones & GLP-1 agonists (Ozempic/Wegovy)", imgs:[
        {src:"slides/L7/slide-27.jpg", cap:"L7 · Slide 27 — Appetite-regulating hormones"},
        {src:"slides/L7/slide-28.jpg", cap:"L7 · Slide 28 — GLP-1 receptor agonists"},
        {src:"slides/L7/slide-31.jpg", cap:"L7 · Slide 31 — Early MACE reduction before weight loss"}
      ], html:`
       <p class="lead">The <span class="kw-2">hypothalamus</span> satiety center is tuned by hormones: <b>ghrelin</b> (+, hunger) vs <b>leptin, insulin, PYY</b> (−, satiety).</p>
       <p><span class="kw">GLP-1 receptor agonists</span> (semaglutides: Ozempic, Wegovy, Mounjaro, Zepbound) were developed in Denmark for diabetes and improved from a 2-minute → weekly-injection drug. GLP-1 receptors act in many tissues: <b>brain</b> (↓appetite), <b>pancreas</b> (↑insulin), <b>liver</b> (↓fat), <b>fat</b> (lipolysis), <b>stomach/gut</b> (↓gastric emptying).</p>
       <div class="callout key"><b>Evidence-vs-hype highlight:</b> real-world data show GLP-1 agonists cut <b>major adverse cardiovascular events (MACE)</b> by ~40–42% — and the benefit appears <b>before clinically meaningful weight loss</b>. So the cardiovascular protection is <b>not just from losing weight</b>; the mechanism isn't fully understood (likely reduced inflammation/altered intercellular communication — hallmarks of aging). Side effect: some muscle-mass loss.</div>
       <p class="muted">GLP-1s may also benefit mental health via the <b>gut–brain axis</b>. And the <b>gut microbiome</b> (&gt;1000 bacterial species) breaks down compounds we can't (fiber) and releases metabolites into the blood that influence mood and every organ system.</p>`}
    ],
    quiz:[
     {type:"mcq", q:"What is the only well-supported human benefit of rapamycin shown so far?", opts:["It reverses aging","It improved immune function in older people (e.g., better flu-vaccine response)","It cured type 1 diabetes","It lengthened telomeres"], a:1,
      exp:"The solid human evidence (Mannick 2014) is improved immune function in older adults. Broader anti-aging claims remain unproven despite widespread off-label use."},
     {type:"mcq", q:"Why is metformin attractive as a longevity candidate?", opts:["It is a brand-new untested compound","It activates AMPK/inhibits mTOR and is already FDA-approved and proven safe in millions of diabetics","It directly edits DNA","It replaces insulin"], a:1,
      exp:"Metformin activates AMPK / inhibits mTOR and reduces hepatic glucose output; decades of safe diabetic use make it a low-risk longevity candidate ('double dividends')."},
     {type:"mcq", q:"Real-world data show GLP-1 agonists reduce major adverse cardiovascular events BEFORE significant weight loss occurs. What does this best support?", opts:["The benefit is entirely due to weight loss","The cardiovascular benefit involves mechanisms beyond weight loss (not yet fully understood)","GLP-1 drugs cause heart attacks","Weight has no relationship to cardiovascular risk"], a:1,
      exp:"Benefit appearing before weight loss means weight loss alone can't explain it — other mechanisms (e.g., reduced inflammation/altered intercellular signaling) are involved, and aren't fully understood."},
     {type:"mcq", q:"Which appetite hormone INCREASES hunger (signals the satiety center to eat)?", opts:["Leptin","Insulin","Ghrelin","PYY"], a:2,
      exp:"Ghrelin is the '+' hunger signal; leptin, insulin, and PYY are '−' satiety signals."},
     {type:"mcq", q:"GLP-1 agonists act on multiple tissues. Which pairing is correct?", opts:["Stomach → speeds gastric emptying","Brain → increases appetite","Pancreas → increases insulin secretion; stomach → slows gastric emptying","Liver → increases fat content"], a:2,
      exp:"GLP-1 increases pancreatic insulin secretion, slows gastric emptying, reduces appetite (brain), and reduces hepatic fat — all consistent with lower blood sugar and weight."}
    ]
   },
   {
    id:"L7T7", title:"🎙️ From the lecture (Meeting 7) — what Prof. Kemeny stressed",
    sub:"Points from the Whisper-transcribed audio: lifestyle is the hardest intervention, daf-16 logic, 'no magic bullet,' germline/menopause, and the GLP-1 surprise.",
    slides:[
     {h:"🎙️ From the lecture (Meeting 7) — key emphases", imgs:[], html:`
      <div class="callout">🎙️ <b>From the recorded Meeting 7 lecture.</b> Nutrient sensing has no separate slide notes — these are the spoken points the professor stressed. Strong candidates for 'understand &amp; reason' exam questions.</div>
      <h4>The daf-2 / daf-16 reasoning (she walked the class through it twice)</h4>
      <p>daf-2 mutant → long life. daf-2; daf-16 double mutant → <b>benefit gone</b>. Therefore <b>daf-16 (FOXO) is required for daf-2's longevity</b>. Her exact framing: "for daf-2 mutations to let worms live longer, the worms <b>need daf-16 there</b>." The active insulin receptor normally inhibits FOXO; knock out the receptor → FOXO is freed → longevity.</p>
      <h4>"No magic bullet" — the central message</h4>
      <p>"There is no one drug that you can know for sure that if you take it, you will live longer." Cells don't think — outcomes are just <b>the sum of active molecules, like computer logic</b>. The whole point of learning the messy pathway detail is so you <b>don't jump on an influencer's bandwagon</b> (rapamycin, mTOR inhibitors, intermittent fasting) without the science.</p>
      <h4>Lifestyle change = the hardest intervention</h4>
      <p>Best time to intervene is <b>before prediabetes</b>, but changing diet/exercise is "the hardest intervention of all" — people prefer a pill. The US has "a sick-care system," not a prevention-focused health-care system.</p>`},
     {h:"🎙️ Translation caveats, germline removal & the GLP-1 surprise", imgs:[], html:`
      <h4>"Mice lie and monkeys exaggerate"</h4>
      <p>Caloric restriction and many interventions extend life in yeast/worms/flies/mice/primates — but results often <b>don't translate to humans</b>. There's a "graveyard" of drugs that succeeded in mice and even monkeys and then failed in human trials. Always ask: was this shown in <b>humans</b>?</p>
      <h4>Germline removal & menopause</h4>
      <p>Removing the reproductive system extends lifespan in worms, flies, and mice — the reproductive system's hormones affect the whole body. In human females, reaching <b>menopause accelerates aging</b>. This ties to the <b>disposable soma</b> theory: evolution doesn't select for longevity after reproduction ends.</p>
      <h4>The GLP-1 cardiovascular surprise (evidence vs hype)</h4>
      <p>GLP-1 agonists cut heart-attack risk by <b>~half</b>, and the protection shows up <b>immediately — before weight loss</b>. So the cardiovascular benefit is <b>not simply from losing weight</b>; the mechanism is still unknown. A clean example of real-world data revealing effects the original trials weren't designed to find.</p>
      <div class="callout warn">Recurring evidence-vs-hype theme for the exam: for any longevity claim ask — shown in <b>humans</b> or just model organisms? <b>correlation or causation</b>? and <b>who's selling it</b>? (companies offering biological-clock tests, influencers pushing rapamycin/fasting).</div>`}
    ],
    quiz:[
     {type:"mcq", q:"Prof. Kemeny's central take-home on longevity interventions was:", opts:["Rapamycin is a proven cure for aging","There is no single drug guaranteed to extend human life; outcomes depend on the whole context of molecules in the cell","Intermittent fasting works for everyone","mTOR should always be inhibited"], a:1,
      exp:"She stressed there is 'no magic bullet' — cells respond to the sum of active molecules ('like computer logic'), so context determines outcome and no single intervention is guaranteed."},
     {type:"mcq", q:"Why does removing the germline/reproductive system relate to the disposable soma theory?", opts:["Because reproduction repairs DNA","Because evolution doesn't select for longevity after reproduction ends, so diverting resources from reproduction can extend lifespan","Because germ cells make insulin","Because it lengthens telomeres"], a:1,
      exp:"Disposable soma: natural selection stops 'caring' after reproduction. Germline removal in worms/flies/mice extends lifespan; in human females menopause accelerates aging."},
     {type:"tf", q:"The cardiovascular benefit of GLP-1 agonists is fully explained by the weight loss they cause.", a:false,
      exp:"False — the MACE reduction appears BEFORE meaningful weight loss, so weight loss alone can't explain it; the mechanism remains unknown (real-world-data surprise)."},
     {type:"mcq", q:"Applying the course's evidence-vs-hype lens to a longevity claim, which questions should you ask?", opts:["Only whether it sounds scientific","Shown in humans or just model organisms? Correlation or causation? Who profits?","Whether an influencer recommends it","Whether it is expensive"], a:1,
      exp:"The recurring framework: demand human (not just animal) data, distinguish correlation from causation, and check for conflicts of interest."}
    ]
   },
   {
    id:"L7X", title:"🔥 Challenge set — harder exam-style practice",
    sub:"Extra reasoning/application questions on the IIS/AMPK/mTOR axis, diabetes mechanism, and the drug interventions.",
    slides:[
     {h:"🔥 Challenge set", imgs:[], html:`<div class="callout key">Harder, application-level questions — trace signaling cascades, reason about daf-2/daf-16 logic, and separate evidence from hype on rapamycin/metformin/GLP-1. <b>Aim to ace these.</b></div>`}
    ],
    quiz:[
     {type:"mcq", q:"A daf-2 single mutant lives 2.3× longer, but a daf-2; daf-16 double mutant lives a normal lifespan. The logical conclusion is:", opts:["daf-16 is irrelevant","daf-2's longevity REQUIRES daf-16 (FOXO) acting downstream; the receptor normally inhibits FOXO","daf-2 and daf-16 are unrelated","Caloric restriction caused it"], a:1,
      exp:"Removing daf-16 abolishes the benefit → daf-16 (FOXO) is the required downstream effector. The active insulin receptor normally inhibits FOXO; losing it frees FOXO → longevity."},
     {type:"mcq", q:"In type 2 diabetes, defective insulin signaling to GLUT4 most directly impairs:", opts:["Insulin production","Glucose uptake into cells","Glucagon release","DNA repair"], a:1,
      exp:"GLUT4 is the glucose transporter brought to the membrane by insulin signaling; if signaling fails, glucose can't enter — glucose uptake is directly impaired."},
     {type:"mcq", q:"To bias a cell toward longevity, you would:", opts:["Activate insulin/IGF-1 signaling and mTOR","Suppress insulin/IGF-1 signaling and mTOR; activate AMPK","Activate all three pathways","Suppress AMPK only"], a:1,
      exp:"Suppress IIS and mTOR (both anabolic, both block autophagy) and activate AMPK (energy sensor that inhibits mTOR and promotes autophagy)."},
     {type:"mcq", q:"Trace how a high-sugar meal ends up SUPPRESSING autophagy:", opts:["Sugar directly destroys lysosomes","Insulin → IRS → PI3K → AKT → mTOR; mTOR inhibits ULK and therefore autophagy","Glucagon activates AMPK","Sugar activates FOXO"], a:1,
      exp:"High glucose → insulin → the IRS/PI3K/AKT/mTOR cascade. mTOR inhibits ULK, shutting down autophagy — so feeding blocks the cell's clean-up."},
     {type:"tf", q:"The cardiovascular benefit of GLP-1 agonists is fully explained by the weight loss they cause.", a:false,
      exp:"False — MACE reduction appears BEFORE meaningful weight loss, so weight loss alone can't explain it; additional (not fully understood) mechanisms are involved."},
     {type:"short", q:"Biologically, why is intervening 'before prediabetes' likely to have the greatest impact?", model:"Before prediabetes, insulin receptors are still sensitive and β-cells are healthy, so lifestyle/AMPK-activating interventions can keep glucose homeostasis on its set point and prevent the years of high sugar that desensitize receptors. Once prediabetes/diabetes develops, receptor desensitization and tissue/vascular damage have accumulated and are harder to reverse — prevention beats damage control. (Caveat: lifestyle change is the hardest intervention to sustain.)", pts:["Receptors still sensitive / β-cells healthy early","Prevents cumulative high-sugar desensitization & vascular damage","Later damage is harder to reverse → prevention > damage control","(Lifestyle change is hardest to sustain)"]},
     {type:"mcq", q:"What is the only well-supported HUMAN benefit of rapamycin demonstrated so far?", opts:["It reverses aging","Improved immune function in older adults (e.g., better flu-vaccine response)","It cures type 1 diabetes","It lengthens telomeres"], a:1,
      exp:"The solid human evidence (Mannick 2014) is enhanced immune function in older people. Broader anti-aging claims remain unproven despite widespread off-label use."},
     {type:"mcq", q:"Metformin's relevant mechanisms for longevity research include:", opts:["Activating mTOR and raising blood glucose","Activating AMPK / inhibiting mTOR and reducing hepatic glucose production","Lengthening telomeres directly","Replacing insulin"], a:1,
      exp:"Metformin activates AMPK / inhibits mTOR and lowers liver glucose output; decades of safe diabetic use make it a low-risk longevity candidate."},
     {type:"short", q:"GLP-1 agonists act on multiple tissues. Name three target tissues and the effect in each that helps lower blood sugar or weight.", model:"Brain (hypothalamus): ↓appetite/↑satiety → less food intake. Pancreas: ↑insulin secretion → lowers blood glucose. Stomach/gut: ↓gastric emptying/motility → prolonged fullness and slower glucose absorption. (Also liver: ↓fat content; fat tissue: ↑lipolysis.) These combine to reduce weight and blood sugar.", pts:["Brain → ↓appetite/↑satiety","Pancreas → ↑insulin secretion","Stomach/gut → slowed gastric emptying","(Liver ↓fat / fat-tissue lipolysis also accepted)"]},
     {type:"mcq", q:"Which statement correctly contrasts type 1 and type 2 diabetes at the mechanism level?", opts:["Both are autoimmune","Type 1 = autoimmune β-cell loss (too little insulin); type 2 = insulin resistance (cells stop responding)","Type 2 is autoimmune; type 1 is metabolic","Both are caused by GLUT4 overactivity"], a:1,
      exp:"Type 1 = autoimmune destruction of β-cells → insufficient insulin. Type 2 = metabolic insulin resistance → receptors/signaling fail despite insulin being present."}
    ]
   }
  ]
 },


 /* ============================ FACTS ON AGING (quiz handout) ============================ */
 {
  id:"FAQ", icon:"📋", short:"FAQ · Facts on Aging",
  title:"Facts on Aging Quiz — Myths vs. Evidence",
  blurb:"The classic Facts on Aging Quiz (Breytspraak & Badura 2015, after Palmore). Sorting common beliefs about aging into TRUE and FALSE, with the evidence behind each.",
  objectives:[
    "Distinguish evidence-based facts about aging from common myths/ageist stereotypes",
    "Identify which cognitive and mental-health changes are normal vs. abnormal in aging",
    "Identify which physical/physiological declines are normal aging vs. disease",
    "Correct common social and demographic misconceptions about older adults"
  ],
  topics:[
   {
    id:"FAQT1", title:"Cognition, mental health & personality",
    sub:"What really happens to the aging mind — myths vs. facts (FAQ items 1–7, 24, 34–36).",
    slides:[
     {h:"The aging mind — separating myth from fact", html:`
       <p class="lead">A huge share of aging myths are about the mind. The evidence-based picture:</p>
       <table class="dt">
        <tr><th>Belief</th><th>Reality</th></tr>
        <tr><td>Most people 65+ have Alzheimer's</td><td><span class="warn">FALSE</span> — only ~11% of those 65+ (about 1 in 9); ~32% of those 85+.</td></tr>
        <tr><td>Intelligence declines significantly with age</td><td><span class="warn">FALSE</span> — in healthy adults intellectual performance holds up well; decline is usually small and modifiable.</td></tr>
        <tr><td>It's very hard for older adults to learn new things</td><td><span class="warn">FALSE</span> — all ages can learn; performance improves with practice, time, and relevance.</td></tr>
        <tr><td>Personality changes with age</td><td><span class="warn">FALSE</span> — personality stays largely consistent across life.</td></tr>
        <tr><td>Memory loss is a normal part of aging</td><td><span class="kw">TRUE</span> — modest, mainly short-term/recent memory; retrieval may slow.</td></tr>
        <tr><td>Clinical depression is more frequent in older than younger people</td><td><span class="warn">FALSE</span> — no evidence it's more common; it's <i>not</i> a normal part of aging (though it is the most common mental-health problem of older adults).</td></tr>
        <tr><td>Older adults are less anxious about death</td><td><span class="kw">TRUE</span> — on average death anxiety decreases with age.</td></tr>
        <tr><td>Old people are "set in their ways," bored, and all alike</td><td><span class="warn">FALSE</span> — they adapt and change; stay busy/engaged; and are <i>at least as diverse</i> as any age group.</td></tr>
       </table>
       <div class="callout key">Big themes: <b>memory loss = mildly normal; significant intelligence loss, "can't learn," personality change, and more depression = myths.</b></div>`}
    ],
    quiz:[
     {type:"tf", q:"The majority of people over 65 have Alzheimer's disease.", a:false,
      exp:"FALSE — only about 11% (1 in 9) of people 65+ have Alzheimer's; about a third of those 85+ do."},
     {type:"tf", q:"As people grow older, their intelligence declines significantly.", a:false,
      exp:"FALSE — in healthy individuals, intellectual performance holds up well into old age; average decline is small and can be modified by lifestyle."},
     {type:"tf", q:"Modest memory loss (especially recent/short-term memory) is a normal part of aging.", a:true,
      exp:"TRUE — modest memory change, primarily short-term, is normal; retrieval may slow. Severe loss is not normal."},
     {type:"tf", q:"Clinical depression occurs more frequently in older adults than in younger people.", a:false,
      exp:"FALSE — there's no evidence depression is more common in older adults, and it should not be considered a normal part of aging (though it is their most common mental-health problem)."},
     {type:"tf", q:"Personality changes substantially as people age.", a:false,
      exp:"FALSE — personality remains largely consistent throughout life; traits may even become more pronounced."},
     {type:"mcq", q:"Which statement about the aging mind is TRUE?", opts:["Older adults cannot learn new skills","Older adults are, on average, less anxious about death than younger/middle-aged adults","Most older adults are bored","Older people are all pretty much alike"], a:1,
      exp:"On average, death anxiety decreases with age. The others are myths — older adults can learn, are not mostly bored, and are highly diverse."},
     {type:"tf", q:"It is very difficult for older adults to learn new things.", a:false,
      exp:"FALSE — all age groups can learn; performance improves with practice, extra time, and relevance to the learner."},
     {type:"tf", q:"In general, most old people are pretty much alike.", a:false,
      exp:"FALSE — older adults are at least as diverse as any age group, arguably more so given varied health and life experiences."}
    ]
   },
   {
    id:"FAQT2", title:"Physical & physiological changes",
    sub:"Which bodily declines are normal aging vs. disease (FAQ items 5–6, 13–21, 47).",
    slides:[
     {h:"Normal physiological aging — the body", html:`
       <p class="lead">Several physical changes are genuinely normal aging; a few commonly-assumed ones are not.</p>
       <table class="dt">
        <tr><th>Statement</th><th>Verdict</th></tr>
        <tr><td>Reaction time increases (slows) with age</td><td><span class="kw">TRUE</span></td></tr>
        <tr><td>Older people perspire less → more prone to hyperthermia</td><td><span class="kw">TRUE</span></td></tr>
        <tr><td>Height tends to decline in old age</td><td><span class="kw">TRUE</span> (discs, osteoporosis, muscle atrophy)</td></tr>
        <tr><td>Physical strength declines (sarcopenia)</td><td><span class="kw">TRUE</span> — muscle declines ~1%/yr from ~age 45</td></tr>
        <tr><td>Bladder capacity decreases → more frequent urination</td><td><span class="kw">TRUE</span></td></tr>
        <tr><td>All five senses tend to decline with age</td><td><span class="kw">TRUE</span> (large individual variation)</td></tr>
        <tr><td>Older persons take longer to recover from stress/illness</td><td><span class="kw">TRUE</span></td></tr>
        <tr><td>All women develop osteoporosis as they age</td><td><span class="warn">FALSE</span> — common but not inevitable</td></tr>
        <tr><td>Kidney function is not affected by age</td><td><span class="warn">FALSE</span> — GFR and renal mass decline with age</td></tr>
        <tr><td>Constipation is a normal change of aging</td><td><span class="warn">FALSE</span> — usually due to diet/exercise/meds, not aging itself</td></tr>
        <tr><td>Most old people lose interest/capacity for sexual relations</td><td><span class="warn">FALSE</span> — sexuality continues; tied to health</td></tr>
       </table>
       <div class="callout tip">Pattern: <b>slowing, sensory decline, sarcopenia, height/bladder changes = normal.</b> <b>"All women get osteoporosis," "kidneys unaffected," "constipation is normal" = false.</b></div>`}
    ],
    quiz:[
     {type:"tf", q:"As adults grow older, reaction time increases (i.e., responses get slower).", a:true,
      exp:"TRUE — reaction time lengthens with age; older adults show large increases in time to respond to ordinary stimuli."},
     {type:"tf", q:"All women develop osteoporosis as they age.", a:false,
      exp:"FALSE — osteoporosis is more common in women (especially White and Asian women) but is NOT inevitable; it can be prevented/minimized."},
     {type:"tf", q:"Kidney function is not affected by age.", a:false,
      exp:"FALSE — nephron number, renal mass, GFR and renal blood flow all decline with age."},
     {type:"tf", q:"Sarcopenia — age-related loss of muscle mass and strength — typically begins around age 45.", a:true,
      exp:"TRUE — muscle mass begins declining ~1% per year starting around age 45; resistance exercise can counter it."},
     {type:"tf", q:"Increased constipation is a normal, unavoidable change of aging.", a:false,
      exp:"FALSE — studies show little difference in colon activity between healthy young and old; constipation usually reflects diet, fluids, exercise, or medications."},
     {type:"mcq", q:"Which of these is a TRUE statement about normal physiological aging?", opts:["Most older people lose all interest in sex","Older people perspire less and are more prone to hyperthermia","Kidney function is unaffected by age","All five senses stay sharp into old age"], a:1,
      exp:"Older adults perspire less and regulate temperature less efficiently, raising hyperthermia risk. The others are false."},
     {type:"tf", q:"A person's height tends to decline in old age.", a:true,
      exp:"TRUE — disc compression, osteoporosis, and muscle atrophy reduce height, typically starting around age 40 and accelerating after 70."},
     {type:"tf", q:"All five senses tend to decline with age (with large individual variation).", a:true,
      exp:"TRUE — on average vision, hearing, taste, smell, and touch thresholds rise with age, though variation is large and aids can compensate."}
    ]
   },
   {
    id:"FAQT3", title:"Health, disease & lifespan",
    sub:"Chronic vs. acute conditions, blood pressure, life expectancy, self-rated health (FAQ items 8, 11–12, 22, 28–29, 48–50).",
    slides:[
     {h:"Health and longevity facts", html:`
       <p class="lead">Key health and demographic facts to know:</p>
       <table class="dt">
        <tr><th>Statement</th><th>Verdict / detail</th></tr>
        <tr><td>With longer life, people face fewer acute and more chronic conditions</td><td><span class="kw">TRUE</span> — &gt;80% of older adults have ≥1 chronic condition; ~50% have ≥2</td></tr>
        <tr><td>Older adults are at risk for HIV/AIDS</td><td><span class="kw">TRUE</span> — share many risk factors with younger adults</td></tr>
        <tr><td>High blood pressure increases with age</td><td><span class="kw">TRUE &amp; FALSE</span> — BP does rise, but criteria/cutoffs for "high" in elders are debated</td></tr>
        <tr><td>Older adults have the highest suicide rate of any age group</td><td><span class="warn">FALSE</span> — highest rate is 45–64; though older White males remain high-risk</td></tr>
        <tr><td>Life expectancy of men at 65 ≈ that of women</td><td><span class="warn">FALSE</span> — women outlive men (~2½ yrs more remaining at 65)</td></tr>
        <tr><td>At 85, remaining life expectancy of Black ≈ White Americans</td><td><span class="kw">TRUE</span> — convergence/"crossover" by the oldest ages</td></tr>
        <tr><td>Most older adults rate their health as good or excellent</td><td><span class="kw">TRUE</span></td></tr>
        <tr><td>Older females show better health-care practices than older males</td><td><span class="kw">TRUE</span> — "women get sicker, but men die quicker"</td></tr>
        <tr><td>Research shows old age "truly begins" at 65</td><td><span class="warn">FALSE</span> — old age is a social construct; 65 is an arbitrary policy marker</td></tr>
       </table>`}
    ],
    quiz:[
     {type:"tf", q:"As people live longer, they tend to face fewer acute conditions and more chronic health conditions.", a:true,
      exp:"TRUE — acute illness incidence falls while chronic conditions rise; over 80% of older adults have at least one chronic condition."},
     {type:"tf", q:"Older adults (65+) have the highest suicide rate of any age group.", a:false,
      exp:"FALSE — as of recent CDC data the highest rate is among those 45–64; this changed from the historical pattern. Males predominate in all age groups."},
     {type:"tf", q:"At age 65, men and women have about the same remaining life expectancy.", a:false,
      exp:"FALSE — women have roughly 2½ more years of remaining life expectancy at 65; the gap narrows at very old ages."},
     {type:"tf", q:"Most older adults rate their own health as good or excellent.", a:true,
      exp:"TRUE — the majority of people over 65 still rate their health positively, adjusting their reference point over time."},
     {type:"mcq", q:"The statement 'old age truly begins at 65' is best described as:", opts:["A proven biological fact","False — old age is largely a social construct and 65 is an arbitrary policy marker","True only for women","True only in the U.S."], a:1,
      exp:"FALSE — 'old' depends on health, function, roles, and self-perception; 65 is an arbitrary marker tied to programs like Social Security/Medicare."},
     {type:"mcq", q:"'High blood pressure increases with age' is best answered:", opts:["Simply true","Simply false","True AND false — BP does rise, but the cutoff for 'high' in older adults is debated","Unknown / never studied"], a:2,
      exp:"BP does tend to increase with age, but there's genuine controversy over the criteria/treatment thresholds for hypertension in elders."},
     {type:"tf", q:"Older adults are at risk for HIV/AIDS.", a:true,
      exp:"TRUE — older adults share many HIV risk factors with younger people; adults 55+ account for a notable share of those living with HIV."},
     {type:"tf", q:"At age 85, the remaining life expectancy of Black and White Americans is about the same.", a:true,
      exp:"TRUE — a 'crossover/convergence' effect: by the oldest ages remaining life expectancy is similar (slightly higher for Black Americans)."}
    ]
   },
   {
    id:"FAQT4", title:"Social, demographic & policy myths",
    sub:"Living arrangements, family, work, crime, volunteering, poverty (FAQ items 9–10, 23, 25–27, 30–33, 37–46).",
    slides:[
     {h:"Society & older adults — correcting stereotypes", html:`
       <p class="lead">Many ageist beliefs are social/demographic. The evidence:</p>
       <table class="dt">
        <tr><th>Belief</th><th>Verdict</th></tr>
        <tr><td>Most older people live in nursing homes</td><td><span class="warn">FALSE</span> — only ~3.4% of 65+ (rises with age)</td></tr>
        <tr><td>The modern family no longer cares for its elderly</td><td><span class="warn">FALSE</span> — families provide 70–80% of in-home care</td></tr>
        <tr><td>Retirement is detrimental to health (people die soon after)</td><td><span class="warn">FALSE</span> — no clear causal link; may improve well-being</td></tr>
        <tr><td>Older workers can't work as effectively as younger workers</td><td><span class="warn">FALSE</span> — lower turnover, fewer injuries, dependable</td></tr>
        <tr><td>Most older drivers are quite capable of driving safely</td><td><span class="kw">TRUE</span> — most compensate; fewer fatalities/driver until ~85</td></tr>
        <tr><td>Older adults have higher rates of criminal victimization</td><td><span class="warn">FALSE</span> — they have the LOWEST victimization rates</td></tr>
        <tr><td>Older adults are more fearful of crime than younger people</td><td><span class="warn">FALSE</span> — not more fearful of specific crimes (the "victimization/fear paradox")</td></tr>
        <tr><td>Volunteering declines among older adults</td><td><span class="warn">FALSE</span> — they devote MORE hours (drop-off after ~80)</td></tr>
        <tr><td>People are happier if allowed to disengage from society</td><td><span class="warn">FALSE</span> — disengagement theory is outdated; engagement → better function</td></tr>
        <tr><td>Elder abuse is not a significant problem in the U.S.</td><td><span class="warn">FALSE</span> — 500,000+ abused/neglected each year (underestimate)</td></tr>
        <tr><td>People become more spiritual as they age</td><td><span class="kw">TRUE</span></td></tr>
        <tr><td>Social Security benefits automatically increase with inflation</td><td><span class="kw">TRUE</span> (since 1975, tied to CPI)</td></tr>
        <tr><td>Geriatrics is a specialty in American medicine</td><td><span class="kw">TRUE</span> — but most med schools don't require it</td></tr>
       </table>
       <div class="callout key">Recurring lesson: most negative stereotypes about older adults' competence, social value, and safety are <b>not supported by data</b>.</div>`}
    ],
    quiz:[
     {type:"tf", q:"Most older people live in nursing homes.", a:false,
      exp:"FALSE — only about 3.4% of those 65+ live in institutional settings (the share rises sharply with age but is still a minority even at 85+)."},
     {type:"tf", q:"Older adults (65+) have higher rates of criminal victimization than younger adults.", a:false,
      exp:"FALSE — older adults actually have the LOWEST victimization rates of any age group in most categories."},
     {type:"tf", q:"Retirement is generally detrimental to health, causing people to become ill or die soon after.", a:false,
      exp:"FALSE — there's no clear causal link; health decline relates to age/prior health, not retirement itself, which may even improve well-being."},
     {type:"tf", q:"Older adults devote more hours to volunteering than middle-aged or younger adults (until a drop-off after ~80).", a:true,
      exp:"TRUE — older adults volunteer more hours on average, with a significant decline only after about age 80."},
     {type:"mcq", q:"The idea that older people are happier if they withdraw from society reflects which outdated theory?", opts:["Hormesis theory","Disengagement theory","Free-radical theory","Disposable soma theory"], a:1,
      exp:"Disengagement theory (now largely rejected) claimed mutual withdrawal is normal/beneficial; evidence shows continued engagement supports better function and happiness."},
     {type:"mcq", q:"Which statement is TRUE?", opts:["The modern family no longer cares for its elderly","Elder abuse is not a significant U.S. problem","Families provide 70–80% of in-home care for impaired older relatives","Older workers are less dependable than younger workers"], a:2,
      exp:"Families provide the large majority (70–80%) of in-home care. The other three are myths contradicted by evidence."},
     {type:"tf", q:"Most older drivers are quite capable of safely operating a motor vehicle.", a:true,
      exp:"TRUE — most compensate for changes by driving cautiously; until ~85 they have fewer fatalities per driver than the youngest drivers."},
     {type:"tf", q:"Social Security benefits automatically increase with inflation.", a:true,
      exp:"TRUE — since 1975 benefits have been adjusted to inflation (tied to the CPI)."}
    ]
   }
  ]
 }
];

/* ============================ FLASHCARDS ============================ */
window.FLASHCARDS = {
 L1:[
  {f:"Free-radical theory of aging (FRTA)", b:"Harman, 1950s — aerobic organisms age because reactive oxygen species (ROS) accumulate and damage cells."},
  {f:"Why did antioxidant supplements fail?", b:"Best human evidence (JAMA meta-analysis) showed no benefit / increased mortality. ROS are also protective signals — blunting them removes hormesis."},
  {f:"Hormesis", b:"Mild, intermittent stress (exercise, caloric restriction) triggers protective responses (autophagy, proteostasis) and can extend lifespan."},
  {f:"Chronic-disease risk vs. age", b:"Roughly doubles every ~8 years of age."},
  {f:"Ten hallmarks — the split", b:"6 molecular + 3 cellular + 1 systemic = 10."},
  {f:"6 molecular hallmarks", b:"Genomic instability, telomere shortening, epigenetic alterations, loss of proteostasis, compromised autophagy, mitochondrial dysfunction."},
  {f:"3 cellular hallmarks", b:"Cellular senescence, stem cell exhaustion, altered intercellular communication."},
  {f:"Systemic hallmark", b:"Deregulated nutrient sensing (IGF, AMPK, mTOR)."},
  {f:"Cellular senescence", b:"Cells stop dividing but don't die; they persist and secrete the SASP."},
  {f:"SASP", b:"Senescence-associated secretory phenotype — pro-inflammatory factors secreted by senescent cells."},
  {f:"Telomeres & telomerase", b:"Protective chromosome-end caps that shorten with division; telomerase can rebuild them (high in stem cells/cancer)."},
  {f:"Epigenetic alterations", b:"Changes in DNA readout WITHOUT changing sequence: DNA methylation, histone/chromatin mods, ncRNAs."},
  {f:"Loss of proteostasis", b:"Failure to keep proteins folded; involves HSPs, HSF-1, chaperones, ubiquitin-proteasome, autophagy."},
  {f:"Autophagy genes", b:"BECN1 (Beclin 1), ATG5, ATG7 — autophagy declines with age."},
  {f:"Mitochondrial dysfunction", b:"Aging mitochondria leak excess ROS, make less ATP (OXPHOS), and clear poorly (low mitophagy)."},
  {f:"Strong vs. weak evidence", b:"Strong = review citing multiple controlled human studies. Weak = anecdote, testimonial, company press release."},
  {f:"Theory vs hypothesis (science)", b:"Theory = system of ideas backed by lots of evidence (e.g., gravity). Hypothesis = educated guess tested in a controlled experiment."},
  {f:"Misinformation vs disinformation", b:"Misinformation = simply wrong. Disinformation = wrong AND spread deliberately (profit/votes/agenda)."},
  {f:"Clinical vs preclinical", b:"Clinical = experiment on humans. Preclinical = on animals (or cells in a dish)."},
  {f:"Lifespan vs longevity", b:"Lifespan = how long you live. Longevity = long AND healthy/functional life."},
  {f:"Predatory journals", b:"Journals that publish anything for money without real peer review → pseudoscience. A red flag for source reliability."},
  {f:"DAF-2 (C. elegans)", b:"Mutating DAF-2 made worms live ~150% longer; the gene is conserved in humans. Classic 'genes affect aging' example."},
  {f:"Antioxidant supplements — verdict", b:"Don't slow aging and can be HARMFUL (↑ cardiovascular risk in trials). Supplements aren't FDA-approved."}
 ],
 L2:[
  {f:"Disposable Soma model", b:"Organisms invest only enough energy to maintain the body until reproduction; aging = imperfect maintenance, NOT a program."},
  {f:"Genomic instability — 4 sub-features", b:"Mutation accumulation, chromosomal abnormalities, telomere dysfunction, mitochondrial DNA damage."},
  {f:"Daily DNA lesions", b:"Tens of thousands per cell per day; we survive because of efficient DNA repair."},
  {f:"Repair vs. replication", b:"Repair before replication = wild-type restored. Replication before repair = permanent heritable mutation."},
  {f:"Endogenous damage sources", b:"Replication errors, ROS (oxidative), spontaneous depurination, deamination."},
  {f:"Exogenous damage sources", b:"UV radiation, ionizing radiation, cigarette smoke, environmental toxins."},
  {f:"Proofreading", b:"DNA polymerase's 3′→5′ exonuclease excises mismatched bases; error rate < 10⁻⁹."},
  {f:"8-oxodG (oxidative)", b:"Oxidized guanine; mispairs with A → G–C becomes T–A."},
  {f:"Depurination", b:"Loss of a purine → apurinic site (~1000/hr/cell); random base inserted opposite on replication."},
  {f:"Deamination", b:"Cytosine → uracil; pairs with A → C–G becomes A–T."},
  {f:"X-rays vs. UV", b:"X-rays break the sugar-phosphate backbone (strand breaks); UV makes thymine dimers."},
  {f:"5 repair pathways", b:"BER (small/oxidative), NER (bulky/UV), MMR (replication errors), NHEJ (DSB, no template), HR (DSB, template)."},
  {f:"Progeroid syndromes", b:"Accelerated-aging diseases (Werner, Cockayne, xeroderma pigmentosum, progeria) caused by DNA-repair/genome-maintenance gene defects."},
  {f:"NAD⁺ consumers", b:"PARP1 (DNA repair), sirtuins/SIRT1 (chromatin/stress), CD38 — they compete for the NAD⁺ pool."},
  {f:"PARPs", b:"Detect DNA breaks, recruit repair machinery, consume NAD⁺."},
  {f:"Proposed aging cycle", b:"DNA damage ↑ → PARP ↑ → NAD⁺ consumption ↑ → cellular function ↓ (causality still unproven)."},
  {f:"p53 (DNA-damage checkpoint)", b:"On DNA damage, p53 halts the cell cycle → DNA repair, or apoptosis if unrepairable. Cancer cells mutate p53 to evade apoptosis."},
  {f:"Why not cancer in childhood?", b:"DNA repair + p53-driven apoptosis remove damaged cells, despite tens of thousands of lesions/day."},
  {f:"2% coding genome", b:"Only ~2% of the ~3 billion bp genome codes protein; ~98% non-coding (introns, regulatory, viral remnants) → many mutations tolerated."},
  {f:"DNA repair capacity (nature+nurture)", b:"Why two 70-yr-olds differ: inherited repair-enzyme alleles (genetic) PLUS environment (smoking, UV, pollution)."},
  {f:"Comorbidities", b:"Having more than one disease at the same time — common in older adults."},
  {f:"Melanin", b:"Pigment made in UV-exposed skin to block radiation and protect DNA — a biological defense against UV damage."},
  {f:"Direct vs indirect evidence (DNA repair)", b:"Direct = measure the DNA itself (fewer mutations). Indirect = repair-protein levels (doesn't prove DNA was fixed)."},
  {f:"NAD⁺ is a 'vitamin'", b:"A molecule the body needs but the enzymes consume; PARPs & sirtuins require it. Sirtuins also regulate chromatin & circadian rhythm."}
 ],
 L3:[
  {f:"Telomere sequence", b:"5′-TTAGGG repeats at both ends of every chromosome."},
  {f:"t-loop", b:"Telomere folds back, tucking its 3′ overhang into the duplex to hide the chromosome end (a protective cap)."},
  {f:"End-replication problem", b:"DNA polymerase can't fully copy the very end; ~50–100 bp lost per division → telomere shortening."},
  {f:"Telomere crisis / fusion", b:"Below ~12 repeats = crisis; critically short telomeres fuse end-to-end → chromosomal instability."},
  {f:"Telomerase", b:"Enzyme that lengthens telomeres; active in stem cells & most cancers, absent in most somatic cells (e.g., heart muscle)."},
  {f:"Short telomeres = ?", b:"Recognized as DNA damage → trigger the DDR → senescence."},
  {f:"γH2AX", b:"Gamma-phosphorylated histone H2A.X — marks DNA breaks; an indirect DNA-damage measure (↑ with age)."},
  {f:"DDR pathway", b:"DNA damage → ATM/ATR → CHK1/CHK2 → p53 → p21 → arrest/repair/apoptosis (protects genomic stability)."},
  {f:"p16 vs p21", b:"Both enforce senescent arrest by inhibiting cyclin-CDK; p21 is induced by p53, p16 is an independent CDK inhibitor."},
  {f:"5 drivers of senescence", b:"DNA damage, telomere shortening, epigenetic dysregulation, oncogene induction, reactive metabolites."},
  {f:"Senescent vs quiescent", b:"Senescent = permanently arrested + secretes SASP. Quiescent = reversibly resting, can re-enter cycle."},
  {f:"SA-β-gal", b:"Senescence-associated β-galactosidase — the classic senescence stain (also SAHFs, DNA-SCARS, γH2AX)."},
  {f:"Antagonistic pleiotropy of senescence", b:"Good early (suppresses cancer), bad late (accumulates, SASP/inflammaging, impairs regeneration)."},
  {f:"Senolytics vs senomorphics", b:"Senolytics kill senescent cells (↓ number); senomorphics suppress the SASP without killing them."},
  {f:"Senolytic examples", b:"Dasatinib, quercetin, fisetin, navitoclax (ABT-263), HSP90 inhibitors."},
  {f:"EdU incorporation", b:"Marks cells entering S-phase (DNA synthesis) → readout of restored proliferation."},
  {f:"FISH", b:"Fluorescence in situ hybridization: a fluorophore-tagged complementary DNA probe binds a target sequence (e.g., telomeres glow as dots; shows fusions)."},
  {f:"COMET assay", b:"Single-cell gel electrophoresis; broken DNA forms a 'comet tail' (more tail = more damage). Not specific to lesion type."},
  {f:"LC-MS (for DNA damage)", b:"Liquid chromatography–mass spectrometry; very specific via a standard + laser mass/shape reading, but one lesion type per run."},
  {f:"Immunofluorescence", b:"Fluorophore-tagged antibodies bind a specific protein (e.g., phospho-γH2AX) to reveal DNA-damage foci."},
  {f:"Why DNA damage is hard to measure", b:"Only ~1 in 200,000 bases damaged (of ~3 billion), many lesion types, and isolating DNA itself induces damage."},
  {f:"SA-β-gal screen (MEF)", b:"Mouse embryonic fibroblasts in multi-well plates + β-gal substrate; senescent cells turn blue. Less blue after drug = senolytic; more blue = senescence inducer."},
  {f:"Senescence biomarker panel", b:"Combine many: p53/p21/p16, short telomeres, γH2AX, SADS, SAHF, DAMPs, ROS, cytoplasmic chromatin, SA-β-gal, changed receptors, ECM damage, chemokines."},
  {f:"Cytoplasmic chromatin (CCF)", b:"Lamins/HMGB drop → nuclear membrane porous → DNA leaks to cytoplasm = senescence alarm signal."},
  {f:"Centenarians & telomeres", b:"People who reach 100+ in good health tend to have longer telomeres; comparing their alleles reveals longevity genes."},
  {f:"Senescence is protective", b:"Oncogene-induced senescence stops would-be cancer cells dividing. So 'kill all senescent cells' or 'keep telomeres long forever' risks cancer."}
 ],
 L4:[
  {f:"Epigenetics (definition)", b:"Inheritance of traits NOT coded by the DNA sequence — heritable changes in expression without changing bases."},
  {f:"Epigenome", b:"The complete set of all epigenetic modifications in a cell's genome."},
  {f:"Same genome, different epigenome", b:"Different cell types share one genome but have different epigenomes → different behavior."},
  {f:"Histone acetylation", b:"High acetyl groups = open chromatin (euchromatin) = active transcription."},
  {f:"Euchromatin vs heterochromatin", b:"Euchromatin = loose, active. Heterochromatin = tight, silenced."},
  {f:"DNA methylation (promoter)", b:"Generally represses transcription; basis of epigenetic clocks."},
  {f:"Epigenetic clock", b:"Estimates biological age from DNA-methylation patterns that correlate with aging."},
  {f:"Why diverse training data", b:"So the clock's aging patterns generalize across populations (avoid overfitting one group)."},
  {f:"Nuclear transplantation (cattle)", b:"A differentiated cell's nucleus retains the full genome — can direct a whole organism (differentiation is epigenetic)."},
  {f:"Agouti mouse", b:"Methyl-rich maternal diet changes agouti-gene methylation → coat color change. Classic epigenetic example."},
  {f:"Epigenetic vs genetic", b:"BRCA1 mutation & husky eye color = genetic (sequence). Lizard color after hurricane = selection. NOT epigenetic."},
  {f:"Transgenerational epigenetics", b:"Dioxin / high-fat parental diet effects on offspring = environmentally induced, heritable expression changes."},
  {f:"Epigenetic mark inheritance", b:"Generally maintained in daughter cells but still susceptible to environmental influence."},
  {f:"Glucocorticoid-receptor methylation", b:"Childhood abuse → GR methylation = an epigenetic effect."},
  {f:"Epigenetics in development", b:"A normal, essential process — not only a disease phenomenon."},
  {f:"DNMT & CpG", b:"DNA methyltransferase adds methyl to cytosine in 5′-CpG-3′; methylated CpG islands → MeCP binds → silencing."},
  {f:"Accelerated vs decelerated aging", b:"On an epigenetic-vs-chronological age plot: above line = accelerated; below = decelerated."},
  {f:"Clocks: causal or correlative?", b:"Open question. Clocks are predictive models detecting methylation that CORRELATES with aging — not direct damage measures."},
  {f:"DNA = hardware; epigenetics = software", b:"Prof. Kemeny's analogy: the DNA sequence is the hardware, the epigenome (methyl/acetyl marks) is the software running on top of it. Software can be changed without rewriting the hardware."},
  {f:"CopyKat & Rainbow — the cloning epigenetics lesson", b:"CopyKat (cloned cat) had different coat pattern than the donor cat; Rainbow (donor) had patchy color, CopyKat did not. Identical DNA → different epigenome → different phenotype. Epigenetics ≠ genetics."},
  {f:"Four key epigenetic enzymes", b:"DNMT (adds methyl to CpG), MeCP2 (binds methylated CpG → represses), HDAC (removes acetyl → tighter chromatin → silenced), HAT (adds acetyl → loose chromatin → active). 'Readers, writers, erasers.'"},
  {f:"Genetic vs. epigenetic: the key distinction", b:"Genetic change = change in DNA sequence = IRREVERSIBLE without mutation or editing. Epigenetic change = change in mark on DNA = REVERSIBLE (drugs, environment can reset it). Exam-critical difference."},
  {f:"Epigenetic clock starts at age 20", b:"Prof. Kemeny stressed: you cannot train an epigenetic-age AI model on children (too much development noise). Training data begin at ~age 20 and go up. Keep in mind when evaluating clock studies."},
  {f:"'Garbage in / garbage out' — AI clock training", b:"If your training data are biased (wrong ages, non-diverse cohort, poor sample quality), the AI clock's predictions will be biased. The model is only as good as its data. Prof. specifically warned about company-sold clocks."},
  {f:"Financial bias warning — epigenetic clock companies", b:"Prof. Kemeny explicitly called out companies selling epigenetic age tests. Conflict of interest = their clocks may overstate biological age (to frighten/sell more products). Always ask who funded the study."}
 ],
 L5:[
  {f:"Chaperones — job", b:"Prevent aggregation and assist (re)folding to native shape; NOT trafficking already-folded proteins to locations."},
  {f:"Ribosome-associated chaperones", b:"Engage nascent chains as they exit the ribosome → catch misfolding early → improve fitness."},
  {f:"TRiC (CCT)", b:"Binds partially folded substrate, ATP hydrolysis closes the lid, protected chamber lets it fold."},
  {f:"Hsp70 cycle", b:"Cycles high-/low-affinity binding via ATP hydrolysis + nucleotide exchange → repeated refolding attempts (key in aged cells)."},
  {f:"HSP90", b:"ATP-driven conformational changes stabilize/mature client signaling proteins; inhibit ATP → clients degraded."},
  {f:"Proteostasis & aging", b:"Aged cells have more damaged proteins → chaperone network (Hsp70 etc.) becomes increasingly important."},
  {f:"Histone chaperones", b:"Assemble/distribute histones onto new DNA in replication → inherit chromatin states."},
  {f:"Histone-chaperone mutation", b:"Loss of histone-modification inheritance → altered chromatin & abnormal gene expression across generations."},
  {f:"Mono- vs poly-ubiquitination (histones)", b:"Mono = regulatory (dynamic chromatin control); poly = tag for proteasomal degradation."},
  {f:"Ubiquitin–proteasome system", b:"Polyubiquitin tag marks a protein for destruction by the proteasome."},
  {f:"PROTAC", b:"Two-headed molecule binding the target protein AND an E3 ubiquitin ligase → target ubiquitinated & degraded."},
  {f:"PROTAC key point", b:"Protein level drops even though the gene is still transcribed — it's degradation, not gene silencing."},
  {f:"E3 ubiquitin ligase", b:"Enzyme that transfers ubiquitin onto a target; recruited by PROTACs to force degradation. Source of specificity (degrons)."},
  {f:"E1 → E2 → E3", b:"E1 activates ubiquitin (ATP) → E2 conjugating enzyme → E3 ligase attaches it to the target's lysine."},
  {f:"Proteasome", b:"19S + 20S machine; binds polyubiquitinated proteins, removes ubiquitin, hydrolyzes them into short peptides (ATP-dependent)."},
  {f:"Degrons / DUBs", b:"Degrons = internal sequences targeting a protein for degradation; DUBs (deubiquitylating enzymes) remove ubiquitin to reverse it."},
  {f:"SUMOylation", b:"Adding SUMOs alters protein stability, nuclear trafficking, and transcription-factor function (regulatory, not just degradation)."},
  {f:"Microautophagy", b:"Lysosome directly engulfs proteins by membrane infolding; nonselective, slow amino-acid recycling."},
  {f:"Endomembrane system", b:"Nuclear envelope, ER, Golgi, lysosomes, vacuoles, plasma membrane — linked by vesicles; regulates protein traffic."},
  {f:"Protein 'zip code' analogy", b:"Every protein contains a signal sequence (the 'zip code') that directs it to the correct cellular address (nucleus, ER, mitochondria, secretion). Without the zip code, proteins end up at the wrong location."},
  {f:"E1/E2/E3 ubiquitin cascade — the numbers", b:"E1: only 1–2 in a cell (activates ubiquitin). E2: a few dozen (conjugating enzymes). E3: HUNDREDS (ligases). The huge number of E3s is what gives each protein target its specificity."},
  {f:"Single vs poly-ubiquitin chain — different fates", b:"MONO-ubiquitin: regulatory signal — e.g., protein localization, DNA repair, histone function. POLY-ubiquitin (Lys48-linked): flags for proteasomal degradation. Different chain types = entirely different outcomes."},
  {f:"Vicious cycle of protein aggregation", b:"Damaged/misfolded proteins → overload chaperones → overwhelm proteasome → more aggregation → the aggregates themselves damage chaperones & UPS → worse misfolding. A positive-feedback death spiral that accelerates with age."},
  {f:"Parkin is an E3 ubiquitin ligase", b:"Parkin mutations cause familial early-onset Parkinson's disease. Parkin is the same E3 ligase (L5) AND a key component of mitophagy (L6). Both roles are exam-relevant and the professor highlighted her own research on Parkin."},
  {f:"AlphaFold — protein structure Nobel", b:"AlphaFold2 (DeepMind) predicted 3D protein structures from sequence using AI with near-crystallography accuracy. Scientists who enabled this work won the 2024 Nobel in Chemistry. Transformed how we study protein folding diseases."}
 ],
 L6:[
  {f:"3 proteostasis systems (decline with age)", b:"UPS, chaperone-mediated autophagy (CMA), macroautophagy (MA)."},
  {f:"Macroautophagy steps", b:"Initiation → elongation → closure → fusion (with lysosome) → degradation. Uses ULK1, ATG proteins, LC3."},
  {f:"AMPK vs mTOR (autophagy)", b:"AMPK (low energy) activates autophagy; mTOR (abundance) inhibits it."},
  {f:"p62/SQST-1", b:"Autophagy receptor; promotes proteostasis & longevity in C. elegans; overexpression ↑ lifespan."},
  {f:"Mitohormesis", b:"Mild stress (exercise, fasting, modest ROS) is beneficial; excessive stress is damaging. High-dose antioxidants can blunt exercise benefits."},
  {f:"Mitochondrial structure", b:"Outer + inner membrane; inner folds = cristae (hold ETC); intermembrane space; matrix."},
  {f:"Mitochondrial roles", b:"ATP (OXPHOS), TCA/Krebs cycle, apoptosis, fatty-acid oxidation, Ca²⁺ regulation, ROS signaling."},
  {f:"ROS source", b:"~1–4% of O₂ → ROS; >90% mitochondrial (ETC electron leak)."},
  {f:"Antioxidant enzymes", b:"SOD (CuZnSOD/MnSOD), GPx (glutathione peroxidase), PRDX (peroxiredoxins); GSH↔GSSG."},
  {f:"ROS good vs bad", b:"BAD: oxidative damage to lipids/proteins/DNA (8-oxodG). GOOD: signaling (survival, HIF-1α, NF-κB, MAPKs)."},
  {f:"Mito dynamics", b:"Fission: Drp1 (+Mff, Fis1, Mid49/51). Fusion: Mfn (outer) + Opa1 (inner)."},
  {f:"mtDNA", b:"Circular; 13 protein-coding + 22 tRNA + 2 rRNA genes; higher mutation rate than nuclear DNA."},
  {f:"Mitophagy / PINK1-Parkin", b:"Selective autophagy of damaged mitochondria; PINK1/Parkin recognizes/tags them."},
  {f:"Mitochondrial transfer", b:"Horizontal transfer between cells via tunneling nanotubes & EVs (vs. vertical inheritance at division)."},
  {f:"Mitochondrial protein import", b:"Cytosolic Hsp70 keeps precursor unfolded; transit sequence → TOM (outer) → TIM (inner); Hsp60 aids folding in matrix."},
  {f:"'Mitochondria are NOT static ovals'", b:"Prof. Kemeny's explicit correction to textbook diagrams. In living cells, mitochondria form a dynamic, interconnected network; constantly fuse and divide; move along cytoskeletal tracks. Brain/muscle cells can have thousands."},
  {f:"Prokaryotic endosymbiont features", b:"Mitochondria still have: circular DNA (like bacteria), their own ribosomes (why some antibiotics harm mitochondria), their own polymerases, and genes with NO introns (prokaryotic gene structure). Evidence for ancient bacterial origin."},
  {f:"ROS paradox — decades of antioxidant failure", b:"50+ years of antioxidant supplementation experiments in worms, flies, mice, monkeys, humans: NO lifespan extension. Some trials showed INCREASED disease risk. Reason: ROS is a required cell-signaling molecule, not only a toxin."},
  {f:"Mitohormesis — why exercise-induced ROS is good", b:"Exercise → mild ROS rise → activates HIF-1α, NF-κB, MAPKs → upregulates repair pathways → net protective effect. High-dose antioxidants taken around exercise BLUNT these benefits. The dose makes it a cure or a poison."},
  {f:"PINK1 → Parkin mitophagy cascade", b:"Damaged mitochondrion → PINK1 (kinase) accumulates on it → phosphorylates Parkin (E3 ligase) → Parkin adds poly-ubiquitin to mitochondrial surface → autophagy receptor recognizes → phagosome forms → lysosome fuses → degraded."},
  {f:"PINK1/PARKIN mutations = early-onset Parkinson's", b:"Loss-of-function mutations in either gene → defective mitophagy → damaged mitochondria accumulate in dopaminergic neurons → neurodegeneration → Parkinson's disease, sometimes in teenagers."},
  {f:"Horizontal mitochondrial transfer — 3 routes", b:"1) Tunneling nanotubes — direct membrane tubes between cells. 2) Extracellular vesicles (EVs) — mitochondria inside membrane vesicles. 3) Free mitochondria captured by cell-surface carbohydrate receptors. Recently discovered; hot research area."},
  {f:"Hype warning: mitophagy supplements", b:"Prof. Kemeny: 'If you meet a promoter of a mitophagy product, tell them you know better.' Heart and muscle cells NEED mitochondria for ATP. Too much mitophagy → fatigue, muscle loss, heart dysfunction. More is not always better."}
 ],
 L7:[
  {f:"Deregulated nutrient sensing (hallmark)", b:"The systemic hallmark of aging: IGF/insulin, AMPK, and mTOR pathways that sense food and decide growth vs. clean-up. Diabetes is its clearest disease manifestation."},
  {f:"Type 1 vs Type 2 diabetes", b:"Type 1 = autoimmune β-cell destruction → too little insulin (~5–10%, not preventable). Type 2 = insulin resistance, cells stop responding (~90–95%, largely preventable)."},
  {f:"Glucose homeostasis (insulin/glucagon)", b:"High sugar → β-cells release insulin → cells take in glucose, liver stores glycogen. Low sugar → α-cells release glucagon → liver breaks glycogen → glucose out. Oscillates around a set point."},
  {f:"GLUT4 & insulin resistance", b:"Insulin binding normally brings GLUT4 to the membrane so glucose enters. In type 2 diabetes the receptor can't signal → GLUT4 stays inside → glucose uptake fails. HbA1c = biomarker."},
  {f:"Caloric restriction & lifespan", b:"Extends lifespan across species (yeast ~300%, worms/rats ~2×, primates ~150%) while keeping healthspan. Works partly by inhibiting PI3K/AKT and mTOR."},
  {f:"Kenyon daf-2 / daf-16 (1993)", b:"daf-2 (insulin/IGF-1 receptor) mutant lives 2.3× longer. daf-2;daf-16 double mutant loses the benefit → daf-16 (FOXO) is REQUIRED downstream. Receptor normally inhibits FOXO."},
  {f:"DAF-2 = receptor; DAF-16 = FOXO", b:"Worm DAF-2 ≈ human insulin/IGF-1 receptor; worm DAF-16 ≈ human FOXO transcription factor. The IIS→FOXO longevity axis is evolutionarily conserved."},
  {f:"What is a hormone?", b:"A molecule secreted from one tissue, carried in blood, acting only on cells with the matching receptor (target cells). Types: steroid, gas (NO), protein (insulin)."},
  {f:"Nutrient-sensing network components", b:"Energy mediators (ATP, NAD), carbohydrates (glucose), proteins (amino acids), fats (fatty acids), plus micronutrients (vitamins/cofactors like zinc) and phytonutrients."},
  {f:"IIS pathway (insulin/IGF-1 signaling)", b:"Insulin/IGF-1 → receptor dimers → IRS → PI3K → AKT → mTOR. Kinase adds phosphate; phosphatase removes it. AKT also inhibits FOXO."},
  {f:"mTOR inhibits autophagy", b:"mTOR inhibits ULK → blocks autophagy. mTOR = anabolic (building: protein translation, growth). Autophagy = catabolic ('cutting down'). Eating sugar → mTOR on → clean-up off."},
  {f:"AMPK = energy sensor", b:"Conserved kinase active in LOW energy. Turns ON ATP-producing pathways, turns OFF ATP-consumers — inhibits mTOR. For longevity: ACTIVATE AMPK."},
  {f:"Longevity: activate vs suppress", b:"Suppress insulin/IGF-1 signaling ⬇ and mTOR ⬇; activate AMPK ⬆. These shift the cell from growth/reproduction toward stress-resistance/longevity."},
  {f:"IGF-1 = Dr Jekyll & Mr Hyde", b:"Good: development, neurogenesis, myelination, cell survival. Bad: inhibits autophagy/stress resistance, drives excess ROS. Timing matters — children need IGF-1."},
  {f:"mTORC1 vs mTORC2", b:"mTOR is a protein complex with two forms (mTORC1, mTORC2), the master regulator of growth/metabolism. Inhibited by AMPK; mTORC1 notably blocks autophagy/lysosome biogenesis."},
  {f:"Rapamycin", b:"From a fungus; 'mechanistic Target Of Rapamycin' inhibitor → boosts autophagy. Only solid human evidence: improved immune function in older adults (better flu-vaccine response, Mannick 2014)."},
  {f:"Metformin", b:"Activates AMPK / inhibits mTOR, reduces hepatic glucose output. FDA-approved diabetes drug for decades → safe in millions → now a longevity candidate ('double dividends')."},
  {f:"GLP-1 agonists (semaglutides)", b:"Ozempic, Wegovy, Mounjaro, Zepbound. Act on brain (↓appetite), pancreas (↑insulin), liver (↓fat), fat (lipolysis), gut (↓gastric emptying). Developed in Denmark for diabetes."},
  {f:"GLP-1 cardiovascular surprise", b:"Real-world data: ~40–42% reduction in major adverse cardiovascular events (MACE), appearing BEFORE weight loss → benefit is not just weight loss; mechanism unknown."},
  {f:"Appetite hormones", b:"Hypothalamus satiety center. Ghrelin = '+' (hunger). Leptin, insulin, PYY = '−' (satiety)."},
  {f:"'Mice lie and monkeys exaggerate'", b:"Many interventions extend lifespan in model organisms but fail in humans. A 'graveyard' of drugs succeeded preclinically then failed in human trials. Always demand human data."},
  {f:"Germline removal & menopause", b:"Removing the reproductive system extends lifespan in worms/flies/mice. In human females, menopause accelerates aging. Ties to disposable-soma: no selection for longevity after reproduction."},
  {f:"'No magic bullet' (Kemeny)", b:"No single drug guaranteed to extend human life. Cells don't 'think' — outcomes are the sum of active molecules ('computer logic'). Learn the science so you don't fall for influencer hype."},
  {f:"Gut microbiome & gut–brain axis", b:">1000 bacterial species break down compounds we can't (fiber), releasing metabolites into blood that affect mood and every organ. GLP-1s may aid mental health via this axis."}
 ],
 FAQ:[
  {f:"Alzheimer's in 65+", b:"MYTH that most have it — only ~11% (1 in 9); ~32% of those 85+."},
  {f:"Intelligence & aging", b:"Does NOT decline significantly in healthy adults; decline is small and modifiable."},
  {f:"Memory loss & aging", b:"Modest short-term memory loss is normal; severe loss is not."},
  {f:"Depression & aging", b:"NOT more common in older adults and not normal — but it is their most common mental-health problem."},
  {f:"Personality & aging", b:"Stays largely consistent across life."},
  {f:"Sarcopenia", b:"Age-related muscle loss; ~1%/yr from ~age 45. Strength decline is normal."},
  {f:"Osteoporosis 'in all women'", b:"MYTH — common but not inevitable; preventable."},
  {f:"Kidney function & age", b:"DOES decline (GFR, renal mass, nephrons) — the 'unaffected' claim is false."},
  {f:"Constipation & aging", b:"NOT a normal change — usually diet/fluids/exercise/medications."},
  {f:"Suicide rate by age", b:"Highest in 45–64, not 65+ (a change from the historical pattern)."},
  {f:"Life expectancy by sex", b:"Women outlive men (~2½ more remaining years at 65)."},
  {f:"Nursing-home residence", b:"Only ~3.4% of 65+ live in nursing homes (rises with age)."},
  {f:"Family care of elders", b:"Families provide 70–80% of in-home care — the 'family no longer cares' claim is false."},
  {f:"Crime & older adults", b:"They have the LOWEST victimization rates; the fear paradox = fear without higher risk."},
  {f:"Disengagement theory", b:"Outdated idea that withdrawal is good; evidence shows engagement → better function/happiness."},
  {f:"'Old age begins at 65'", b:"FALSE — old age is a social construct; 65 is an arbitrary policy marker."}
 ]
};
