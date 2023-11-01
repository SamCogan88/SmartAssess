const assessment_formats = [
    {
        "id": 1,
        "format": "Essay"
    },
    {
        "id": 2,
        "format": "Research Paper"
    },
    {
        "id": 3,
        "format": "Short Answer Test"
    },
    {
        "id": 4,
        "format": "Multiple Choice Test"
    },
    {
        "id": 5,
        "format": "Oral Presentation"
    },
    {
        "id": 6,
        "format": "Poster Presentation"
    },
    {
        "id": 7,
        "format": "Digital Presentation (e.g., PowerPoint, Prezi)"
    },
    {
        "id": 8,
        "format": "Online Quizzes"
    },
    {
        "id": 9,
        "format": "Lab Report"
    },
    {
        "id": 10,
        "format": "Group Project"
    },
    {
        "id": 11,
        "format": "Portfolio"
    },
    {
        "id": 12,
        "format": "Journal Entry"
    },
    {
        "id": 13,
        "format": "Debate"
    },
    {
        "id": 14,
        "format": "Performance Task"
    },
    {
        "id": 15,
        "format": "Simulation or Role Play"
    },
    {
        "id": 16,
        "format": "Case Study Analysis"
    },
    {
        "id": 17,
        "format": "Fieldwork Report"
    },
    {
        "id": 18,
        "format": "Art or Design Project"
    },
    {
        "id": 19,
        "format": "Film or Video Project"
    },
    {
        "id": 20,
        "format": "Dissertation or Thesis"
    }
];

const mapping=[
		{
			"verb": "Assess",
            "assessment_formats": [
                1,
                2,
                5,
				6,
				7,
				12,
				15,
				16,
				17,
				20
            ]
		},
        {
            "verb": "Cite",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
		{
            "verb": "Evaluate",
            "assessment_formats": [
                1,
				2,							
				3,
                4,
				5,
				6,
                8,
				12,
				17,
				19,
				20,
            ]
        },
        {
            "verb": "Define",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Describe",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Draw",
            "assessment_formats": []
        },
        {
            "verb": "Enumerate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Identify",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Index",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Indicate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Label",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "List",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Match",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Meet",
            "assessment_formats": []
        },
        {
            "verb": "Name",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Outline",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Point",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Quote",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Read",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Recall",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Recite",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Recognize",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Record",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Repeat",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Reproduce",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Review",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Select",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "State",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Study",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Tabulate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Trace",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Write",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Discuss",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Design",
            "assessment_formats": [
                5,
				6,
				7,
				10,
				11,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Create",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Compose",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Analyze",
            "assessment_formats": []
        },
        {
            "verb": "Audit",
            "assessment_formats": []
        },
        {
            "verb": "Arrange",
            "assessment_formats": []
        },
        {
            "verb": "Assemble",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Budget",
            "assessment_formats": []
        },
        {
            "verb": "Categorize",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Code",
            "assessment_formats": []
        },
        {
            "verb": "Combine",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Compile",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Construct",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Explain",
            "assessment_formats": [
                1,
                2,
				5,6,7,13,20
            ]
        },
        {
            "verb": "Rewrite",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Summarize",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Translate",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Defend",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Elaborate",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Express",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Interpret",
            "assessment_formats": [
                1,
                2,
				5,
				6,
				7,
				12,
				13,
				16,
				20
				
            ]
        },
        {
            "verb": "Paraphrase",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Predict",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Report",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Detail",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Differentiate",
            "assessment_formats": [
                1,
                2
            ]
        },
        {
            "verb": "Develop",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Devise",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Formulate",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Generate",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Illustrate",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Model",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Organize",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Plan",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Produce",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Reconstruct",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Sketch",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Correspond",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Cultivate",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Debug",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Depict",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Enhance",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Facilitate",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Format",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Graph",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Interface",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Join",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Lecture",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Network",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Overhaul",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Portray",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Program",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Rearrange",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Reorganize",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Revise",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Specify",
            "assessment_formats": [
                10,
                14,
                18,
                19
            ]
        },
        {
            "verb": "Add",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Approximate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Articulate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Associate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Characterize",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Clarify",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Classify",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Compare",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Compute",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Contrast",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Convert",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Estimate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Factor",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Generalize",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Infer",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Interact",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Interpolate",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Observe",
            "assessment_formats": [
                3,
                4,
                8
            ]
        },
        {
            "verb": "Subtract",
            "assessment_formats": [
                3,
                4,
                8
            ]
        }
    ];

const verbs=[
    {
        "verb": "Cite",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Provide citations for a research paper",
            "List sources used in a presentation",
            "Identify the author of a specific study",
            "Reference a quote in an article",
            "Mention the original source of an image"
        ]
    },
    {
        "verb": "Define",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "State the meaning of a term",
            "Explain a concept in your own words",
            "Provide the definition of a complex word",
            "Illustrate the term using an example",
            "Compare the term to a similar concept"
        ]
    },
    {
        "verb": "Describe",
        "levels": [
            "Remember",
            "Understand"
        ],
        "assessment_examples": [
            "Explain the characteristics of a concept",
            "Illustrate a scenario in detail",
            "Provide a detailed account of an event",
            "Outline the steps in a process",
            "Narrate a personal experience"
        ]
    },
    {
        "verb": "Draw",
        "levels": [
            "Remember",
            "Apply"
        ],
        "assessment_examples": [
            "Sketch a diagram of a cell",
            "Illustrate a specific scenario",
            "Produce a quick doodle of a concept",
            "Draft a basic blueprint of a design",
            "Draw a map from memory"
        ]
    },
    {
        "verb": "Enumerate",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "List down the key points",
            "Mention all the steps in a process",
            "Itemize the components of a product",
            "Detail the chapters of a book",
            "Recall the phases in a cycle"
        ]
    },
    {
        "verb": "Identify",
        "levels": [
            "Remember",
            "Analyze"
        ],
        "assessment_examples": [
            "Point out the correct answer",
            "Recognize a figure among others",
            "Select the right image representing a concept",
            "Pick out the relevant information",
            "Distinguish the main idea from a passage"
        ]
    },
    {
        "verb": "Index",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Categorize items in an order",
            "Sort out data according to criteria",
            "Arrange terms in alphabetical order",
            "List down topics with page numbers",
            "Organize content in a systematic manner"
        ]
    },
    {
        "verb": "Indicate",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Point to the relevant area on a map",
            "Highlight the correct answer",
            "Mark the right option",
            "Signify a specific region in a diagram",
            "Show the required information on a graph"
        ]
    },
    {
        "verb": "Label",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Tag parts of a diagram",
            "Name sections of an image",
            "Annotate areas of a picture",
            "Mark components on a blueprint",
            "Attach terms to parts of a drawing"
        ]
    },
    {
        "verb": "List",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Write down the elements of a set",
            "Mention all the characters in a story",
            "Detail the ingredients required for a recipe",
            "Enumerate the steps in a process",
            "Recall the chapters of a book"
        ]
    },
    {
        "verb": "Match",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Pair terms with their definitions",
            "Connect images with corresponding labels",
            "Link concepts with relevant examples",
            "Associate symbols with their meanings",
            "Relate characters to their roles in a story"
        ]
    },
    {
        "verb": "Meet",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Recall the criteria for a task",
            "Identify the requirements of a project",
            "List the standards set for an evaluation",
            "Recognize the expectations of an assignment",
            "State the benchmarks for success"
        ]
    },
    {
        "verb": "Name",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Mention the title of a book",
            "Recall the scientific name of an organism",
            "State the capital of a country",
            "Identify the artist of a song",
            "List the main characters in a story"
        ]
    },
    {
        "verb": "Outline",
        "levels": [
            "Remember",
            "Analyze",
            "Create"
        ],
        "assessment_examples": [
            "Sketch the main ideas of a topic",
            "Detail the structure of an essay",
            "Provide a brief overview of a concept",
            "List down the stages of a process",
            "Summarize the key points of a lecture"
        ]
    },
    {
        "verb": "Point",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Indicate a specific location on a map",
            "Highlight a particular word in a text",
            "Show a particular item among many",
            "Draw attention to a specific detail in an image",
            "Select a specific answer among choices"
        ]
    },
    {
        "verb": "Quote",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Recite a famous saying",
            "Mention a line from a book",
            "State a memorable phrase from a speech",
            "Recall a dialogue from a movie",
            "Refer to a specific text from an article"
        ]
    },
    {
        "verb": "Read",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Recognize words in a passage",
            "Identify the main idea of a text",
            "Distinguish between fact and opinion",
            "Understand the context of a sentence",
            "Decode symbols and characters in a script"
        ]
    },
    {
        "verb": "Recall",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Remember details from a story",
            "Mention key events of a historical period",
            "List the steps of a specific process",
            "State facts from a lesson",
            "Reiterate the rules of a game"
        ]
    },
    {
        "verb": "Recite",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Say a poem from memory",
            "Mention a sequence of events in order",
            "State the terms of a formula",
            "Enumerate the principles of a theory",
            "Outline the storyline of a movie"
        ]
    },
    {
        "verb": "Recognize",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Identify a familiar face in a crowd",
            "Distinguish a brand logo among others",
            "Point out known symbols in a set",
            "Acknowledge familiar sounds or tunes",
            "Pick out known patterns or sequences"
        ]
    },
    {
        "verb": "Record",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Note down observations during an experiment",
            "Document key points from a lecture",
            "Chronicle events in a journal",
            "Log data in a table or chart",
            "Archive findings in a report"
        ]
    },
    {
        "verb": "Repeat",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Restate a fact or idea",
            "Echo a phrase or sentence verbatim",
            "Mimic a demonstrated action",
            "Reproduce a sequence from memory",
            "Reiterate instructions given earlier"
        ]
    },
    {
        "verb": "Reproduce",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Draw a known image from memory",
            "Recreate a previously seen pattern",
            "Mimic a demonstrated skill",
            "Restate a learned fact",
            "Redraw a specific structure without reference"
        ]
    },
    {
        "verb": "Review",
        "levels": [
            "Remember",
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Revisit key topics from a lesson",
            "Reread a chapter for main ideas",
            "Recapitulate primary concepts of a subject",
            "Go over main events in a storyline",
            "Sum up main arguments of a discussion"
        ]
    },
    {
        "verb": "Select",
        "levels": [
            "Remember",
            "Analyze",
            "Evaluate"
        ],
        "assessment_examples": [
            "Choose the correct answer from multiple choices",
            "Pick relevant data from a given set",
            "Identify the appropriate tool for a task",
            "Highlight the key words in a text",
            "Determine the best solution from a list of options"
        ]
    },
    {
        "verb": "State",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Provide a definition in one's own words",
            "Reiterate a known fact",
            "Express the main idea of a topic",
            "Voice a known rule or principle",
            "Declare a previously learned concept"
        ]
    },
    {
        "verb": "Study",
        "levels": [
            "Remember",
            "Understand"
        ],
        "assessment_examples": [
            "Examine material for an upcoming test",
            "Review concepts for understanding",
            "Investigate details of a subject",
            "Peruse a text for main ideas",
            "Scrutinize diagrams or illustrations for understanding"
        ]
    },
    {
        "verb": "Tabulate",
        "levels": [
            "Remember",
            "Apply"
        ],
        "assessment_examples": [
            "Arrange data in a table format",
            "Compile results in columns and rows",
            "Order information in a chart",
            "Categorize data in a structured form",
            "Organize figures in a grid"
        ]
    },
    {
        "verb": "Trace",
        "levels": [
            "Remember"
        ],
        "assessment_examples": [
            "Follow a known path or route on a map",
            "Identify the sequence of a historical event",
            "Delineate the shape of an object",
            "Track the lineage or origin of a concept",
            "Chart the development of a phenomenon over time"
        ]
    },
    {
        "verb": "Write",
        "levels": [
            "Remember",
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Pen down known facts or ideas",
            "Draft a response based on prior knowledge",
            "Compose an original piece",
            "Document observations or findings",
            "Inscribe a learned concept in one's own words"
        ]
    },
    {
        "verb": "Add",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Combine numbers in a math problem",
            "Incorporate feedback into an essay",
            "Insert additional data into a chart",
            "Merge ideas to form a cohesive argument",
            "Join elements in a scientific equation"
        ]
    },
    {
        "verb": "Approximate",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Estimate a number close to the actual",
            "Gauge the approximate time required for a task",
            "Predict a ballpark figure for a variable",
            "Surmise the potential outcome of an experiment",
            "Deduce a near-accurate size or amount"
        ]
    },
    {
        "verb": "Articulate",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Express ideas clearly in speech",
            "Convey complex concepts in understandable terms",
            "Narrate a story with clarity",
            "Describe an event in detail",
            "Elucidate on a topic with precision"
        ]
    },
    {
        "verb": "Associate",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Link ideas based on similarities",
            "Connect events to underlying causes",
            "Relate concepts to real-world applications",
            "Match terms with their corresponding definitions",
            "Pair items based on common attributes"
        ]
    },
    {
        "verb": "Characterize",
        "levels": [
            "Understand",
            "Analyze"
        ],
        "assessment_examples": [
            "Describe the main features of an object",
            "Depict the nature of a fictional character",
            "Outline the distinct attributes of a concept",
            "Illustrate the peculiarities of an event",
            "Render a detailed portrayal of a phenomenon"
        ]
    },
    {
        "verb": "Clarify",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Explain a confusing concept in simpler terms",
            "Elaborate on a brief statement",
            "Provide details to a vague idea",
            "Expand on a summarized point",
            "Shed light on a complex problem"
        ]
    },
    {
        "verb": "Classify",
        "levels": [
            "Understand",
            "Analyze",
            "Apply"
        ],
        "assessment_examples": [
            "Categorize items based on attributes",
            "Sort data into predefined groups",
            "Assign organisms into taxonomic ranks",
            "Organize information by theme or topic",
            "Arrange objects according to size, shape, or function"
        ]
    },
    {
        "verb": "Compare",
        "levels": [
            "Understand",
            "Analyze",
            "Evaluate"
        ],
        "assessment_examples": [
            "Contrast the pros and cons of two products",
            "Analyze the similarities and differences between two texts",
            "Assess the effectiveness of two methods",
            "Juxtapose historical events",
            "Scrutinize the features of competing theories"
        ]
    },
    {
        "verb": "Compute",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Calculate the result of a mathematical operation",
            "Determine the outcome of a formula",
            "Evaluate the sum of a series of numbers",
            "Establish the product of factors",
            "Ascertain the solution to an equation"
        ]
    },
    {
        "verb": "Contrast",
        "levels": [
            "Understand",
            "Analyze",
            "Evaluate"
        ],
        "assessment_examples": [
            "Highlight the differences between two concepts",
            "Differentiate between competing theories",
            "Distinguish between two methods or approaches",
            "Oppose two contrasting viewpoints",
            "Set off the variances in similar phenomena"
        ]
    },
    {
        "verb": "Convert",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Change a measurement from one unit to another",
            "Transform a physical quantity into another form",
            "Adapt a narrative into a different medium",
            "Rework a currency to its equivalent in another denomination",
            "Switch data from one format to another"
        ]
    },
    {
        "verb": "Defend",
        "levels": [
            "Understand",
            "Evaluate"
        ],
        "assessment_examples": [
            "Support a stance or argument",
            "Justify a decision or action",
            "Uphold a particular viewpoint against criticism",
            "Back a theory with evidence",
            "Champion a cause or principle"
        ]
    },
    {
        "verb": "Detail",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Provide a comprehensive explanation of a concept",
            "Elaborate on the steps of a process",
            "Expand on the facets of an idea",
            "Furnish specifics about an event or occurrence",
            "Supply the finer points of a topic"
        ]
    },
    {
        "verb": "Differentiate",
        "levels": [
            "Understand",
            "Analyze"
        ],
        "assessment_examples": [
            "Distinguish between similar concepts",
            "Separate items based on unique attributes",
            "Discriminate between two competing ideas",
            "Identify the nuances between scenarios",
            "Decipher the variations within a category"
        ]
    },
    {
        "verb": "Discuss",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Engage in a conversation about a topic",
            "Deliberate the implications of an idea",
            "Converse about the pros and cons of a concept",
            "Exchange views on a controversial issue",
            "Debate the merits of a particular theory or approach"
        ]
    },
    {
        "verb": "Distinguish",
        "levels": [
            "Understand",
            "Analyze"
        ],
        "assessment_examples": [
            "Differentiate between two concepts based on characteristics",
            "Discriminate among various options",
            "Identify unique features of an item",
            "Separate facts from opinions",
            "Discern the differences between scenarios or events"
        ]
    },
    {
        "verb": "Elaborate",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Expand on a brief idea or statement",
            "Provide additional details to a summarized point",
            "Clarify a complex concept by adding information",
            "Explain a topic in depth",
            "Amplify the nuances of an argument or theory"
        ]
    },
    {
        "verb": "Estimate",
        "levels": [
            "Understand",
            "Apply",
            "Evaluate"
        ],
        "assessment_examples": [
            "Gauge a rough value or amount",
            "Predict the potential outcome of a scenario",
            "Provide a ballpark figure for a variable",
            "Surmise the approximate size or duration",
            "Formulate an educated guess based on available data"
        ]
    },
    {
        "verb": "Example",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Provide a representative case or illustration",
            "Show a model that demonstrates a concept",
            "Cite a scenario that embodies a principle",
            "Present a sample that clarifies a theory",
            "Give an instance that highlights a phenomenon"
        ]
    },
    {
        "verb": "Explain",
        "levels": [
            "Understand",
            "Analyze",
            "Evaluate",
            "Create"
        ],
        "assessment_examples": [
            "Clarify a difficult concept",
            "Elucidate on the principles underlying a phenomenon",
            "Provide a detailed account of a process",
            "Describe the cause and effect relationship of an event",
            "Break down the steps of a methodology"
        ]
    },
    {
        "verb": "Express",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Convey thoughts or feelings",
            "Articulate an opinion or stance",
            "Demonstrate understanding through words or actions",
            "Showcase proficiency in a given area",
            "Manifest knowledge in a tangible form"
        ]
    },
    {
        "verb": "Extend",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Broaden the scope of a concept",
            "Amplify the reach of an idea",
            "Expand upon a given topic",
            "Elongate the duration or span of an event",
            "Increase the range or coverage of a principle"
        ]
    },
    {
        "verb": "Extrapolate",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Predict future trends based on current data",
            "Estimate outcomes by extending known information",
            "Foresee potential scenarios by projecting existing patterns",
            "Speculate on future developments using available evidence",
            "Deduce possible results by analyzing current trends"
        ]
    },
    {
        "verb": "Factor",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Break down an equation into its constituent elements",
            "Determine the underlying components of a phenomenon",
            "Isolate the individual parts contributing to a result",
            "Separate a complex structure into its base units",
            "Identify the elements making up a larger entity"
        ]
    },
    {
        "verb": "Generalize",
        "levels": [
            "Understand",
            "Create"
        ],
        "assessment_examples": [
            "Draw broad conclusions from specific instances",
            "Formulate overarching principles based on detailed observations",
            "Derive universal truths from particular cases",
            "Establish wide-ranging theories after analyzing individual scenarios",
            "Extrapolate common patterns from diverse data points"
        ]
    },
    {
        "verb": "Give",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Present information or knowledge",
            "Provide insights or perspectives",
            "Contribute data or evidence",
            "Offer feedback or suggestions",
            "Supply details or specifics on a topic"
        ]
    },
    {
        "verb": "Infer",
        "levels": [
            "Understand",
            "Analyze"
        ],
        "assessment_examples": [
            "Draw conclusions based on evidence",
            "Deduce outcomes from given information",
            "Make educated guesses based on observations",
            "Predict results by interpreting data",
            "Formulate opinions by evaluating facts"
        ]
    },
    {
        "verb": "Interact",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Engage with peers on a topic",
            "Collaborate in a group setting",
            "Communicate ideas in a discussion",
            "Participate actively in a debate",
            "Exchange views and feedback in a team"
        ]
    },
    {
        "verb": "Interpolate",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Estimate values within known data points",
            "Predict intermediate outcomes between two extremes",
            "Gauge potential results within a given range",
            "Calculate approximate figures by analyzing trends",
            "Deduce possible scenarios by bridging existing data"
        ]
    },
    {
        "verb": "Interpret",
        "levels": [
            "Understand",
            "Evaluate"
        ],
        "assessment_examples": [
            "Decipher the meaning of a complex text",
            "Explain the significance of a dataset",
            "Translate an abstract concept into layman terms",
            "Provide insights into the implications of a theory",
            "Unravel the deeper message in a piece of art"
        ]
    },
    {
        "verb": "Observe",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Notice and report patterns in an experiment",
            "Watch a phenomenon and document findings",
            "Monitor changes and record observations",
            "Inspect an object and detail its characteristics",
            "Witness an event and describe its progression"
        ]
    },
    {
        "verb": "Paraphrase",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Reword a complex sentence for clarity",
            "Translate a paragraph into simpler terms",
            "Reiterate a concept using different vocabulary",
            "Reproduce a statement with a personal touch",
            "Restate a thesis in a concise manner"
        ]
    },
    {
        "verb": "Picture graphically",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Represent data visually using charts",
            "Illustrate a process through a flow diagram",
            "Showcase relationships using a Venn diagram",
            "Visualize statistics using a bar graph",
            "Explain a theory using a conceptual map"
        ]
    },
    {
        "verb": "Predict",
        "levels": [
            "Understand",
            "Apply",
            "Evaluate"
        ],
        "assessment_examples": [
            "Foresee the outcome of an experiment",
            "Estimate the results of a change in variables",
            "Anticipate the impact of a decision",
            "Project future trends based on historical data",
            "Speculate on the consequences of an action"
        ]
    },
    {
        "verb": "Rewrite",
        "levels": [
            "Understand",
            "Create"
        ],
        "assessment_examples": [
            "Reformulate a text with a different perspective",
            "Revise a piece of writing for better clarity",
            "Transform a narrative with a unique voice",
            "Adapt a script for a different audience",
            "Reconfigure a story with alternate plot points"
        ]
    },
    {
        "verb": "Subtract",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Remove a value from a total",
            "Calculate the difference between two numbers",
            "Determine the remaining amount after a deduction",
            "Estimate the decrease in quantity",
            "Assess the shortfall after an expenditure"
        ]
    },
    {
        "verb": "Summarize",
        "levels": [
            "Understand",
            "Evaluate",
            "Create"
        ],
        "assessment_examples": [
            "Condense a lengthy article into key points",
            "Present the main ideas of a book in a brief",
            "Capture the essence of a discussion in a synopsis",
            "Highlight the primary findings of a research",
            "Provide an overview of a complex topic"
        ]
    },
    {
        "verb": "Translate",
        "levels": [
            "Understand",
            "Apply"
        ],
        "assessment_examples": [
            "Convert a text from one language to another",
            "Render a technical term into layman's vocabulary",
            "Adapt a cultural concept for a different audience",
            "Change a piece of code into another programming language",
            "Express an idea in a different medium"
        ]
    },
    {
        "verb": "Visualize",
        "levels": [
            "Understand"
        ],
        "assessment_examples": [
            "Imagine a concept in a tangible form",
            "Construct a mental image of an abstract idea",
            "Depict a process in the mind's eye",
            "See the potential outcome of a strategy",
            "Envision the structure of a molecule"
        ]
    },
    {
        "verb": "Acquire",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Gain a new skill through practice",
            "Obtain knowledge through study",
            "Secure a resource for a project",
            "Grasp a concept through hands-on experience",
            "Fetch necessary information for a task"
        ]
    },
    {
        "verb": "Adapt",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Modify an approach based on feedback",
            "Change a design to fit a different context",
            "Adjust a plan according to new constraints",
            "Transform a recipe based on available ingredients",
            "Revise a strategy in response to challenges"
        ]
    },
    {
        "verb": "Allocate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Distribute resources for a project",
            "Assign tasks to team members",
            "Designate a portion of budget for a specific purpose",
            "Allot time for each agenda item in a meeting",
            "Appoint roles in a group activity"
        ]
    },
    {
        "verb": "Alphabetize",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Arrange words in order from A to Z",
            "Organize files in a directory",
            "Order a list of names",
            "Sort books on a shelf",
            "Categorize items in a catalog"
        ]
    },
    {
        "verb": "Apply",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Use a formula to solve a problem",
            "Implement a technique in a real-world scenario",
            "Employ a tool to accomplish a task",
            "Practice a skill in a practical setting",
            "Adopt a strategy to achieve an objective"
        ]
    },
    {
        "verb": "Ascertain",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Determine the truth of a statement",
            "Verify the accuracy of data",
            "Discover the root cause of a problem",
            "Identify the key elements of a situation",
            "Clarify doubts through investigation"
        ]
    },
    {
        "verb": "Assign",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Designate a task to someone",
            "Allocate resources to a project",
            "Distribute roles in a group",
            "Set a value to a variable",
            "Appoint responsibilities in a team"
        ]
    },
    {
        "verb": "Attain",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Achieve a goal through effort",
            "Reach a milestone in a project",
            "Obtain a desired skill level",
            "Acquire a set amount of knowledge",
            "Realize an objective after dedication"
        ]
    },
    {
        "verb": "Avoid",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Steer clear of potential pitfalls",
            "Evade a common mistake",
            "Bypass an obstacle",
            "Stay away from a risky situation",
            "Prevent an unfavorable outcome"
        ]
    },
    {
        "verb": "Back up",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Create a copy of digital data",
            "Support a claim with evidence",
            "Provide reinforcements in a debate",
            "Ensure data safety by creating duplicates",
            "Validate a statement with citations"
        ]
    },
    {
        "verb": "Calculate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Determine the result of a mathematical operation",
            "Estimate the costs of a project",
            "Figure out the distance between two places",
            "Compute the interest on a loan",
            "Gauge the time required to complete a task"
        ]
    },
    {
        "verb": "Capture",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Record an event on video",
            "Seize an opportunity",
            "Attain a specific data metric",
            "Grab attention with a compelling statement",
            "Acquire data through sensors"
        ]
    },
    {
        "verb": "Change",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Alter a method to achieve better results",
            "Switch a component in a machine",
            "Modify an aspect of a plan",
            "Adapt a strategy to fit new circumstances",
            "Revise an essay based on feedback"
        ]
    },
    {
        "verb": "Complete",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Finish a task within a given time",
            "Fulfill the requirements of a project",
            "Achieve all objectives of a plan",
            "Conclude a study",
            "End a process ensuring all steps are done"
        ]
    },
    {
        "verb": "Construct",
        "levels": [
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Build a model based on specifications",
            "Create a diagram illustrating a process",
            "Assemble a machine following instructions",
            "Develop a strategy based on inputs",
            "Formulate a hypothesis from observations"
        ]
    },
    {
        "verb": "Customize",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Alter a product to fit a customer's needs",
            "Modify a software interface for a user",
            "Tailor a solution to a specific problem",
            "Adapt a plan for a unique scenario",
            "Design a personalized exercise regimen"
        ]
    },
    {
        "verb": "Demonstrate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Show proficiency in a skill",
            "Exhibit knowledge in a presentation",
            "Reveal the workings of a tool",
            "Present evidence supporting a claim",
            "Display a technique in practice"
        ]
    },
    {
        "verb": "Depreciate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Calculate the reduction in value of an asset",
            "Estimate the wear and tear on machinery over time",
            "Determine the diminished value of a property",
            "Account for the decrease in the worth of an investment",
            "Evaluate the loss of value in a car after a year"
        ]
    },
    {
        "verb": "Derive",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Obtain a formula from fundamental principles",
            "Figure out a conclusion from given data",
            "Extract an ingredient from a compound",
            "Conclude a result based on observations",
            "Get an equation from a set of conditions"
        ]
    },
    {
        "verb": "Determine",
        "levels": [
            "Apply",
            "Analyze",
            "Evaluate"
        ],
        "assessment_examples": [
            "Decide on an approach after weighing options",
            "Ascertain a solution to a problem",
            "Judge the most effective method",
            "Establish the root cause of an issue",
            "Identify the factors influencing a decision"
        ]
    },
    {
        "verb": "Diminish",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Reduce the intensity of a situation",
            "Decrease the size of a project scope",
            "Lower the volume of a sound",
            "Minimize the risks associated with a task",
            "Cut down on expenses in a budget"
        ]
    },
    {
        "verb": "Discover",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Find out a new method after experimentation",
            "Uncover hidden patterns in data",
            "Reveal an unknown fact through research",
            "Detect a previously unnoticed detail",
            "Identify a new opportunity in a market"
        ]
    },
    {
        "verb": "Employ",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Use a specific technique to achieve a result",
            "Adopt a particular strategy for a task",
            "Apply a tool for a designated purpose",
            "Utilize skills to solve a problem",
            "Engage methods to enhance efficiency"
        ]
    },
    {
        "verb": "Examine",
        "levels": [
            "Apply",
            "Analyze"
        ],
        "assessment_examples": [
            "Inspect an item closely for details",
            "Study a subject in depth",
            "Scrutinize data for anomalies",
            "Review a process for inefficiencies",
            "Probe a case for understanding"
        ]
    },
    {
        "verb": "Exercise",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Practice a skill to gain proficiency",
            "Utilize a right or privilege",
            "Carry out a series of tasks to maintain health",
            "Operate a function to ensure it works",
            "Engage in activities to enhance learning"
        ]
    },
    {
        "verb": "Explore",
        "levels": [
            "Apply",
            "Analyze"
        ],
        "assessment_examples": [
            "Investigate a topic in detail",
            "Delve into a new area of study",
            "Search a place for specific items",
            "Probe into a theory for deeper understanding",
            "Study an environment to gather data"
        ]
    },
    {
        "verb": "Expose",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Reveal hidden information about a subject",
            "Uncover the truth behind a theory",
            "Demonstrate the flaws in a process",
            "Showcase the underlying details of a scenario",
            "Highlight the unseen aspects of an item"
        ]
    },
    {
        "verb": "Figure",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Calculate the total cost of a project",
            "Determine the final score of a game",
            "Estimate the duration of a task",
            "Decide on the number of resources needed",
            "Predict the outcome based on given factors"
        ]
    },
    {
        "verb": "Graph",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Plot data on a coordinate plane",
            "Represent statistical information visually",
            "Showcase trends over time through a chart",
            "Illustrate relationships between variables",
            "Depict numerical data for analysis"
        ]
    },
    {
        "verb": "Handle",
        "levels": [
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Manage a challenging situation effectively",
            "Operate machinery safely",
            "Deal with customer complaints proficiently",
            "Administer a task within set guidelines",
            "Tackle obstacles during a project"
        ]
    },
    {
        "verb": "Illustrate",
        "levels": [
            "Apply",
            "Analyze"
        ],
        "assessment_examples": [
            "Create a visual representation of a concept",
            "Provide examples to clarify a point",
            "Draw a diagram to explain a theory",
            "Showcase a scenario through imagery",
            "Depict a story using graphics"
        ]
    },
    {
        "verb": "Interconvert",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Change units from metric to imperial",
            "Transform data from one format to another",
            "Shift between currencies using an exchange rate",
            "Translate a message from one language to another",
            "Modify resources to suit different platforms"
        ]
    },
    {
        "verb": "Investigate",
        "levels": [
            "Apply",
            "Analyze"
        ],
        "assessment_examples": [
            "Delve into a topic to uncover details",
            "Probe a scenario for understanding",
            "Examine evidence in a case",
            "Research a phenomenon for insights",
            "Study a situation to determine causes"
        ]
    },
    {
        "verb": "Manipulate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Modify data to serve a specific purpose",
            "Handle tools or equipment proficiently",
            "Adjust variables to achieve desired results",
            "Change conditions to test a hypothesis",
            "Operate machinery to produce an outcome"
        ]
    },
    {
        "verb": "Modify",
        "levels": [
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Change the design of a product to improve its efficiency",
            "Adjust a recipe based on available ingredients",
            "Alter a plan to better suit current circumstances",
            "Revise a strategy to achieve better results",
            "Transform a project to meet new requirements"
        ]
    },
    {
        "verb": "Operate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Use machinery according to guidelines",
            "Run a system efficiently",
            "Work a device to perform specific tasks",
            "Handle equipment safely",
            "Manage processes within specified parameters"
        ]
    },
    {
        "verb": "Personalize",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Tailor a product to an individual's preferences",
            "Adapt a service to cater to specific needs",
            "Customize settings on a device",
            "Modify content to resonate with a target audience",
            "Adjust a plan based on personal feedback"
        ]
    },
    {
        "verb": "Plot",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Draw points on a graph based on data",
            "Design a storyline for a narrative",
            "Position elements on a map",
            "Lay out steps for a project timeline",
            "Arrange data visually for analysis"
        ]
    },
    {
        "verb": "Practice",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Perform an action repeatedly to improve",
            "Engage in exercises to enhance skills",
            "Carry out drills to master a technique",
            "Implement strategies learned in training",
            "Work on tasks to gain experience"
        ]
    },
    {
        "verb": "Prepare",
        "levels": [
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Arrange materials needed for a task",
            "Plan for an upcoming event",
            "Organize resources for a project",
            "Set up equipment for an experiment",
            "Develop strategies for potential challenges"
        ]
    },
    {
        "verb": "Price",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Determine the cost of a product based on its value",
            "Estimate the financial worth of a service",
            "Set the monetary value of goods",
            "Assess market factors to decide on pricing",
            "Calculate expenses to establish sale rates"
        ]
    },
    {
        "verb": "Process",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Handle data through a sequence of operations",
            "Convert raw materials into finished products",
            "Analyze information to gain insights",
            "Execute steps to achieve a specific outcome",
            "Carry out procedures to complete a task"
        ]
    },
    {
        "verb": "Produce",
        "levels": [
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Create goods for consumption",
            "Generate content for an audience",
            "Manufacture items based on specifications",
            "Craft artworks or performances",
            "Develop outputs using resources and tools"
        ]
    },
    {
        "verb": "Project",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Forecast future trends based on current data",
            "Estimate results of a plan's execution",
            "Anticipate outcomes using predictive analysis",
            "Envision potential scenarios for a situation",
            "Predict growth using statistical models"
        ]
    },
    {
        "verb": "Provide",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Supply necessary materials for a task",
            "Offer services to customers",
            "Present evidence in a debate",
            "Give feedback on performance",
            "Deliver goods to clients"
        ]
    },
    {
        "verb": "Relate",
        "levels": [
            "Apply",
            "Understand",
            "Analyze",
            "Create"
        ],
        "assessment_examples": [
            "Connect concepts from different subjects",
            "Describe how two events are interlinked",
            "Draw parallels between historical events",
            "Associate a real-life situation to a theory",
            "Match patterns from different data sets"
        ]
    },
    {
        "verb": "Round off",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Simplify a number to the nearest whole",
            "Approximate decimal values to specific places",
            "Estimate amounts for easier calculations",
            "Trim data values for convenience",
            "Finalize figures by eliminating minor details"
        ]
    },
    {
        "verb": "Sequence",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Arrange events in chronological order",
            "Prioritize tasks for efficiency",
            "Order data based on specific criteria",
            "Structure steps in a logical manner",
            "Organize elements in a systematic way"
        ]
    },
    {
        "verb": "Show",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Demonstrate a technique to an audience",
            "Display results of an experiment",
            "Present findings in a presentation",
            "Reveal processes in a demonstration",
            "Exhibit skills in a practical exam"
        ]
    },
    {
        "verb": "Simulate",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Mimic real-world conditions in a controlled environment",
            "Model scenarios using computer programs",
            "Recreate situations for testing purposes",
            "Replicate natural processes in a lab",
            "Emulate behaviors to study outcomes"
        ]
    },
    {
        "verb": "Sketch",
        "levels": [
            "Apply",
            "Create"
        ],
        "assessment_examples": [
            "Draw a preliminary design for a project",
            "Illustrate concepts using simple visuals",
            "Outline main features of an object",
            "Draft ideas on paper before finalizing",
            "Diagram processes to visualize steps"
        ]
    },
    {
        "verb": "Solve",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Find answers to mathematical problems",
            "Address challenges using strategies",
            "Resolve conflicts through negotiation",
            "Crack codes or puzzles",
            "Overcome hurdles using available resources"
        ]
    },
    {
        "verb": "Subscribe",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Enroll in a service or platform",
            "Commit to receiving updates or content",
            "Join a membership or organization",
            "Sign up for a course or class",
            "Pledge support to a cause or initiative"
        ]
    },
    {
        "verb": "Transcribe",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Convert spoken words into written text",
            "Document proceedings of a meeting",
            "Write down a musical composition from listening",
            "Note verbal instructions in detail",
            "Record statements verbatim"
        ]
    },
    {
        "verb": "Use",
        "levels": [
            "Apply"
        ],
        "assessment_examples": [
            "Operate machinery as per instructions",
            "Implement theories in real-world scenarios",
            "Apply tools in a given task",
            "Adopt software to complete a project",
            "Engage techniques learned in training"
        ]
    },
    {
        "verb": "Analyze",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Break down data to find patterns",
            "Evaluate elements of a story for deeper understanding",
            "Interpret results of an experiment",
            "Examine factors leading to a phenomenon",
            "Dissect a complex problem into smaller components"
        ]
    },
    {
        "verb": "Audit",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Review financial records for accuracy",
            "Examine processes to ensure compliance",
            "Evaluate systems for efficiency",
            "Inspect facilities for safety standards",
            "Scrutinize activities for quality assurance"
        ]
    },
    {
        "verb": "Blueprint",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Draft detailed plans for a project",
            "Design schematics for construction",
            "Develop roadmaps for product development",
            "Sketch strategies for organizational growth",
            "Plan sequences for film production"
        ]
    },
    {
        "verb": "Breadboard",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Prototype electronic circuits",
            "Test design functionalities on a board",
            "Experiment with component arrangements",
            "Simulate circuit behaviors on a platform",
            "Debug configurations using a breadboard"
        ]
    },
    {
        "verb": "Break down",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Decompose complex structures into simpler ones",
            "Dissect information for clearer understanding",
            "Separate elements of a concept",
            "Fragment processes into step-by-step actions",
            "Dismantle systems to study individual components"
        ]
    },
    {
        "verb": "Confirm",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Verify the accuracy of data",
            "Corroborate testimonies with evidence",
            "Ascertain the validity of a claim",
            "Substantiate facts with sources",
            "Ensure consistency of information with baseline"
        ]
    },
    {
        "verb": "Correlate",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Identify relationships between variables",
            "Link events based on causation",
            "Establish connections between patterns",
            "Find associations in data sets",
            "Determine interdependence in a system"
        ]
    },
    {
        "verb": "Detect",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Identify subtle patterns or changes",
            "Notice anomalies in data",
            "Spot differences in similar objects",
            "Recognize early signs of an issue",
            "Observe deviations from a norm"
        ]
    },
    {
        "verb": "Diagnose",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Identify the root cause of a problem",
            "Determine the nature of an illness",
            "Isolate faults in a system",
            "Establish reasons for behavioral changes",
            "Find the source of an error in a process"
        ]
    },
    {
        "verb": "Diagram",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Illustrate concepts using visual tools",
            "Sketch processes in a flowchart",
            "Outline structures in a schematic",
            "Present relationships in a graph",
            "Portray ideas in a mind map"
        ]
    },
    {
        "verb": "Discriminate",
        "levels": [
            "Analyze",
            "Evaluate"
        ],
        "assessment_examples": [
            "Recognize nuances and subtleties",
            "Separate items based on precision",
            "Choose based on clear criteria",
            "Distinguish quality over inferiority",
            "Evaluate based on defined metrics"
        ]
    },
    {
        "verb": "Dissect",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Break down a topic into its constituent parts",
            "Separate a specimen for examination",
            "Analyze elements of a literary work",
            "Examine the components of a complex system",
            "Study the structure of an organism in detail"
        ]
    },
    {
        "verb": "Document",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Record detailed observations",
            "Catalogue data systematically",
            "Annotate processes for reference",
            "Maintain a log of changes or updates",
            "Create a comprehensive report of findings"
        ]
    },
    {
        "verb": "Ensure",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Verify that standards are met",
            "Confirm adherence to guidelines",
            "Guarantee that procedures are followed",
            "Ascertain the correctness of a process",
            "Certify the validity of information"
        ]
    },
    {
        "verb": "Figure out",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Solve a complex problem",
            "Decipher a challenging puzzle",
            "Determine the solution to a riddle",
            "Understand the intricacies of a situation",
            "Deduce the reasoning behind a phenomenon"
        ]
    },
    {
        "verb": "File",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Organize documents systematically",
            "Catalogue data for easy retrieval",
            "Maintain records in an orderly manner",
            "Sort information based on specific criteria",
            "Store resources for future reference"
        ]
    },
    {
        "verb": "Group",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Categorize items based on similarities",
            "Cluster data points based on trends",
            "Assemble subjects with shared characteristics",
            "Organize concepts into related families",
            "Segment objects based on defining features"
        ]
    },
    {
        "verb": "Interrupt",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Stop a process to analyze it",
            "Break into a sequence to understand it",
            "Halt an event for closer examination",
            "Pause an action to determine its implications",
            "Interject during a procedure to gauge its effectiveness"
        ]
    },
    {
        "verb": "Inventory",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Catalogue items for analysis",
            "List resources and assess their value",
            "Itemize assets for closer scrutiny",
            "Document available tools for a task",
            "Record elements before deeper examination"
        ]
    },
    {
        "verb": "Layout",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Arrange elements for analysis",
            "Organize components of a design",
            "Position items for optimal study",
            "Set out parts of a project for review",
            "Configure resources for a task"
        ]
    },
    {
        "verb": "Manage",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Oversee elements to ensure efficiency",
            "Organize resources for a task",
            "Direct operations to ensure success",
            "Control a process for optimal outcomes",
            "Lead a team towards a goal while analyzing progress"
        ]
    },
    {
        "verb": "Maximize",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Enhance elements for optimal output",
            "Increase efficiency through analysis",
            "Boost results by improving variables",
            "Augment benefits by optimizing factors",
            "Elevate outcomes by adjusting components"
        ]
    },
    {
        "verb": "Minimize",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Reduce elements to their simplest form",
            "Decrease complications through analysis",
            "Lessen negative impacts by refining variables",
            "Diminish risks by making informed choices",
            "Contract issues by optimizing factors"
        ]
    },
    {
        "verb": "Optimize",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Improve efficiency of a process",
            "Refine a method for best results",
            "Adjust variables for maximum output",
            "Tweak settings for optimal performance",
            "Enhance procedures after thorough analysis"
        ]
    },
    {
        "verb": "Order",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Arrange items in a specific sequence",
            "Organize elements based on a criterion",
            "Sort data points for better understanding",
            "Prioritize tasks after evaluating importance",
            "Sequence events based on chronological occurrence"
        ]
    },
    {
        "verb": "Point out",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Highlight specific details of a concept",
            "Draw attention to key elements",
            "Indicate particular aspects for consideration",
            "Signal important parts during analysis",
            "Flag anomalies in data"
        ]
    },
    {
        "verb": "Prioritize",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Rank items based on importance",
            "Order tasks after evaluating urgency",
            "Arrange elements based on significance",
            "Determine sequence of actions based on value",
            "Sort objectives based on strategic relevance"
        ]
    },
    {
        "verb": "Proofread",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Check documents for errors",
            "Review texts for grammatical mistakes",
            "Inspect written content for consistency",
            "Examine manuscripts for formatting issues",
            "Validate written pieces for clarity and correctness"
        ]
    },
    {
        "verb": "Query",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Pose questions for deeper understanding",
            "Investigate databases to retrieve specific data",
            "Probe topics for detailed insights",
            "Inquire into subjects for clarity",
            "Seek answers through systematic questioning"
        ]
    },
    {
        "verb": "Separate",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Divide items into categories",
            "Distinguish elements based on characteristics",
            "Sort data into relevant groups",
            "Partition materials for better examination",
            "Classify subjects based on shared traits"
        ]
    },
    {
        "verb": "Subdivide",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Break down a concept into smaller parts",
            "Partition a topic for detailed study",
            "Separate an entity into its components",
            "Divide a subject for better understanding",
            "Split a theme into individual elements"
        ]
    },
    {
        "verb": "Train",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Prepare individuals for a specific task",
            "Educate team members on a new concept",
            "Guide students on a particular subject",
            "Instruct employees on new procedures",
            "Coach individuals for improved performance"
        ]
    },
    {
        "verb": "Transform",
        "levels": [
            "Analyze"
        ],
        "assessment_examples": [
            "Change a concept into another form",
            "Convert data from one format to another",
            "Adapt a theory to fit a new context",
            "Modify procedures for better outcomes",
            "Alter methods based on analysis"
        ]
    },
    {
        "verb": "Appraise",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Determine the value of an item",
            "Judge the worth of a concept",
            "Assess the significance of a theory",
            "Estimate the importance of a finding",
            "Gauge the relevance of data"
        ]
    },
    {
        "verb": "Assess",
        "levels": [
            "Evaluate","Analyse"
        ],
        "assessment_examples": [
            "Judge the merit of a concept",
            "Review a topic for its value",
            "Examine a subject for its importance",
            "Determine the quality of a product",
            "Evaluate the significance of an outcome"
        ]
    },
    {
        "verb": "Conclude",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Determine a final judgment",
            "Draw a final observation",
            "Make a definitive statement after examination",
            "Establish a decisive opinion",
            "Formulate a final viewpoint"
        ]
    },
    {
        "verb": "Counsel",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Advise based on assessment",
            "Provide guidance on a matter",
            "Offer recommendations after examination",
            "Suggest actions based on evaluation",
            "Direct individuals based on judgment"
        ]
    },
    {
        "verb": "Criticize",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Highlight flaws in a concept",
            "Judge a topic for its weaknesses",
            "Assess a subject critically",
            "Examine a theme for its shortcomings",
            "Review a notion with scrutiny"
        ]
    },
    {
        "verb": "Critique",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Provide a detailed analysis and assessment",
            "Examine a work for its artistic or theoretical value",
            "Review and offer feedback",
            "Analyze and judge a piece of work",
            "Give an evaluation with supporting reasons"
        ]
    },
    {
        "verb": "Evaluate",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Judge or determine the value",
            "Assess the worth",
            "Review and give feedback",
            "Weigh pros and cons",
            "Determine the significance"
        ]
    },
    {
        "verb": "Grade",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Assign a rank or level",
            "Judge based on criteria",
            "Rate in terms of quality",
            "Determine the merit",
            "Assess using a scale"
        ]
    },
    {
        "verb": "Hire",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Select for a job or task",
            "Choose based on evaluation",
            "Engage services after assessment",
            "Recruit after judging qualifications",
            "Employ based on merits"
        ]
    },
    {
        "verb": "Judge",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Form an opinion or conclusion",
            "Assess the value or quality",
            "Determine the merit",
            "Compare against a standard",
            "Evaluate based on criteria"
        ]
    },
    {
        "verb": "Justify",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Provide reasons for a decision",
            "Defend a position or action",
            "Show or prove to be right",
            "Give evidence for a choice",
            "Explain the rationale behind a decision"
        ]
    },
    {
        "verb": "Measure",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Determine the size or quantity",
            "Gauge the extent of something",
            "Use tools to get precise dimensions",
            "Quantify an entity",
            "Evaluate an attribute quantitatively"
        ]
    },
    {
        "verb": "Prescribe",
        "levels": [
            "Evaluate",
            "Create"
        ],
        "assessment_examples": [
            "Recommend a course of action",
            "Advise on a solution",
            "Order a specific procedure",
            "Dictate a remedy",
            "Suggest a specific course"
        ]
    },
    {
        "verb": "Rank",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Assign a position in a hierarchy",
            "Place in order based on criteria",
            "Rate in order of importance",
            "Classify based on merit",
            "List in a specific sequence"
        ]
    },
    {
        "verb": "Rate",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Assign a value or standard",
            "Determine the quality",
            "Quantify based on a scale",
            "Measure against a criterion",
            "Judge the caliber"
        ]
    },
    {
        "verb": "Recommend",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Advise or suggest",
            "Endorse a course of action",
            "Propose a solution",
            "Counsel in favor of",
            "Advocate for a particular choice"
        ]
    },
    {
        "verb": "Release",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Make available or set free",
            "Discharge or let go",
            "Unveil or publish",
            "Grant permission for public viewing",
            "Issue for distribution"
        ]
    },
    {
        "verb": "Support",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Provide evidence for",
            "Back up with details",
            "Defend a statement or claim",
            "Uphold an argument",
            "Justify with proof"
        ]
    },
    {
        "verb": "Test",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Assess or trial an attribute",
            "Conduct an examination",
            "Measure a feature's quality or performance",
            "Experiment to determine validity",
            "Gauge effectiveness through evaluation"
        ]
    },
    {
        "verb": "Validate",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Confirm the truth or accuracy",
            "Corroborate with evidence",
            "Certify based on standards",
            "Substantiate a claim",
            "Verify authenticity"
        ]
    },
    {
        "verb": "Verify",
        "levels": [
            "Evaluate"
        ],
        "assessment_examples": [
            "Make sure or demonstrate that something is true",
            "Ascertain the truth",
            "Cross-check for accuracy",
            "Confirm authenticity",
            "Substantiate through evidence"
        ]
    },
    {
        "verb": "Abstract",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Summarize main ideas",
            "Distill essential concepts",
            "Generalize from specific information",
            "Condense into a shorter form",
            "Extract core principles"
        ]
    },
    {
        "verb": "Animate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Bring to life through motion",
            "Illustrate with dynamic visuals",
            "Create a moving representation",
            "Design a sequence of frames",
            "Produce an interactive display"
        ]
    },
    {
        "verb": "Arrange",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Set in a specific order",
            "Organize based on a pattern or design",
            "Assemble in a structured manner",
            "Sequence according to a plan",
            "Coordinate components in a harmonious layout"
        ]
    },
    {
        "verb": "Assemble",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Bring components together",
            "Construct from parts",
            "Combine elements into a whole",
            "Piece together segments",
            "Build by joining units"
        ]
    },
    {
        "verb": "Budget",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Allocate funds or resources",
            "Plan expenditures",
            "Outline a financial blueprint",
            "Design a monetary strategy",
            "Project future expenses and income"
        ]
    },
    {
        "verb": "Categorize",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Sort into classes",
            "Organize based on shared characteristics",
            "Group according to attributes",
            "Classify into distinct sections",
            "Arrange entities based on criteria"
        ]
    },
    {
        "verb": "Code",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Program software",
            "Write a sequence of instructions",
            "Design an algorithm",
            "Script for a specific function",
            "Develop a computational solution"
        ]
    },
    {
        "verb": "Combine",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Merge elements",
            "Integrate components",
            "Unite parts into a whole",
            "Amalgamate resources",
            "Blend varied entities"
        ]
    },
    {
        "verb": "Compile",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Gather and arrange",
            "Assemble systematically",
            "Aggregate relevant data",
            "Collect into a comprehensive format",
            "Amass and structure"
        ]
    },
    {
        "verb": "Compose",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Create music or write text",
            "Design a work from elements",
            "Craft a piece or artwork",
            "Produce using creative skills",
            "Formulate using imagination"
        ]
    },
    {
        "verb": "Cope",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Manage under challenging conditions",
            "Handle stress or difficulties",
            "Adapt to adversity",
            "Find solutions to problems",
            "Navigate through challenges"
        ]
    },
    {
        "verb": "Correspond",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Communicate through writing",
            "Relay information",
            "Engage in dialogue",
            "Interact through letters or emails",
            "Exchange ideas or news"
        ]
    },
    {
        "verb": "Create",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Produce something new",
            "Design from imagination",
            "Invent a novel concept",
            "Develop an original piece",
            "Craft using artistic or intellectual skills"
        ]
    },
    {
        "verb": "Cultivate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Develop over time",
            "Nurture and grow",
            "Enhance through care",
            "Foster positive attributes",
            "Promote beneficial qualities"
        ]
    },
    {
        "verb": "Debug",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Identify errors in a program",
            "Solve software issues",
            "Correct code malfunctions",
            "Pinpoint issues in a system",
            "Resolve technical glitches"
        ]
    },
    {
        "verb": "Depict",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Illustrate through art or words",
            "Describe vividly",
            "Portray in detail",
            "Represent graphically",
            "Present in a clear manner"
        ]
    },
    {
        "verb": "Design",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Plan a structure or concept",
            "Craft a blueprint",
            "Develop a visual representation",
            "Engineer a solution",
            "Compose an artistic piece"
        ]
    },
    {
        "verb": "Develop",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Enhance over time",
            "Expand on an idea",
            "Grow a concept to fruition",
            "Build upon foundations",
            "Formulate and refine"
        ]
    },
    {
        "verb": "Devise",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Invent a strategy or method",
            "Formulate a solution",
            "Concoct a new approach",
            "Design a novel mechanism",
            "Plan a unique system"
        ]
    },
    {
        "verb": "Dictate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Command or pronounce",
            "Instruct with authority",
            "Lay down rules",
            "Direct in a certain manner",
            "Prescribe specific actions"
        ]
    },
    {
        "verb": "Enhance",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Improve quality or value",
            "Augment features",
            "Elevate characteristics",
            "Boost performance or appearance",
            "Intensify strengths"
        ]
    },
    {
        "verb": "Facilitate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Make processes easier",
            "Aid in achieving goals",
            "Simplify tasks",
            "Promote efficiency",
            "Enable smoother operations"
        ]
    },
    {
        "verb": "Format",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Arrange in a specific manner",
            "Organize content",
            "Design layout",
            "Structure data",
            "Set up presentation styles"
        ]
    },
    {
        "verb": "Formulate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Devise a strategy",
            "Develop a hypothesis",
            "Compose a plan",
            "Craft a solution",
            "Design a new approach"
        ]
    },
    {
        "verb": "Generate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Produce something new",
            "Invent novel ideas",
            "Initiate original concepts",
            "Bring about results",
            "Create unique outcomes"
        ]
    },
    {
        "verb": "Import",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Bring in from another source",
            "Acquire externally",
            "Introduce foreign elements",
            "Transfer data",
            "Incorporate additional components"
        ]
    },
    {
        "verb": "Improve",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Enhance performance",
            "Upgrade quality",
            "Refine processes",
            "Augment features",
            "Elevate standards"
        ]
    },
    {
        "verb": "Incorporate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Integrate elements",
            "Combine aspects",
            "Merge features",
            "Unify components",
            "Blend in additions"
        ]
    },
    {
        "verb": "Integrate",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Combine into a whole",
            "Merge systems or concepts",
            "Unify diverse elements",
            "Blend different aspects",
            "Amalgamate solutions"
        ]
    },
    {
        "verb": "Interface",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Connect systems or elements",
            "Integrate software",
            "Blend different technologies",
            "Merge interfaces",
            "Unify user experiences"
        ]
    },
    {
        "verb": "Join",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Combine elements",
            "Unite groups",
            "Link ideas or concepts",
            "Connect segments",
            "Merge sections together"
        ]
    },
    {
        "verb": "Lecture",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Deliver a speech",
            "Present a topic",
            "Explain concepts verbally",
            "Talk on a specific subject",
            "Address an audience"
        ]
    },
    {
        "verb": "Model",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Design a representation",
            "Construct a simulation",
            "Create a prototype",
            "Develop a 3D depiction",
            "Formulate a mock-up"
        ]
    },
    {
        "verb": "Network",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Connect with peers",
            "Develop relationships",
            "Formulate collaborations",
            "Link up with professionals",
            "Engage with a community"
        ]
    },
    {
        "verb": "Organize",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Arrange elements",
            "Structure information",
            "Order tasks",
            "Coordinate events",
            "Categorize data"
        ]
    },
    {
        "verb": "Overhaul",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Reconstruct a system",
            "Revamp a design",
            "Reformulate a strategy",
            "Rebuild from scratch",
            "Upgrade comprehensively"
        ]
    },
    {
        "verb": "Plan",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Design a strategy",
            "Develop a blueprint",
            "Draft a timeline",
            "Sketch a sequence",
            "Arrange activities"
        ]
    },
    {
        "verb": "Portray",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Represent through art",
            "Depict in words",
            "Illustrate an idea",
            "Describe vividly",
            "Capture essence through media"
        ]
    },
    {
        "verb": "Program",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Write code",
            "Develop a software",
            "Construct an algorithm",
            "Design a system script",
            "Encode a function"
        ]
    },
    {
        "verb": "Rearrange",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Alter the order",
            "Modify the structure",
            "Change the sequence",
            "Shift elements",
            "Organize differently"
        ]
    },
    {
        "verb": "Reconstruct",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Rebuild from basics",
            "Revamp a structure",
            "Reformulate an idea",
            "Remodel a design",
            "Restore to a new form"
        ]
    },
    {
        "verb": "Reorganize",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Rearrange structures",
            "Change the setup",
            "Shift the order",
            "Adjust configurations",
            "Realign elements"
        ]
    },
    {
        "verb": "Revise",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Modify content",
            "Correct mistakes",
            "Edit drafts",
            "Rework plans",
            "Update information"
        ]
    },
    {
        "verb": "Specify",
        "levels": [
            "Create"
        ],
        "assessment_examples": [
            "Detail out",
            "Describe precisely",
            "Dictate specifics",
            "Enumerate elements",
            "Clarify requirements"
        ]
    }
];
const verbNames = verbs.map(entry => entry.verb);

$(function() {
    $("#searchBar").autocomplete({
        source: verbNames
    });
});

const bloomsColors = {
    "Create": "#D93B43",
    "Evaluate": "#FBA74B",
    "Analyse": "#FCD164",
    "Apply": "#36A872",
    "Understand": "#21B4F3",
    "Remember": "#1276DC"
};

$("#searchBtn").on("click", function() {
    const query = $("#searchBar").val().toLowerCase().trim();
    const resultsArea = $("#resultsArea");
    resultsArea.empty(); // Clear previous results

    // ... rest of your code ...

for (const entry of verbs) {
    if (entry.verb.toLowerCase() === query) {
        
        // Displaying all Bloom's levels as buttons. If the level is not in entry.levels, it will be greyed out
        Object.keys(bloomsColors).forEach(level => {
            if (entry.levels.includes(level)) {
                const button = $(`<button class="btn mb-2" style="background-color: ${bloomsColors[level]}; color: #FFF">${level}</button>`);
                resultsArea.append(button);
            } else {
                const button = $(`<button class="btn mb-2" style="background-color: #C0C0C0; color: #FFF" disabled>${level}</button>`);
                resultsArea.append(button);
            }
        });
        // Create a row to contain the two cards side by side on larger screens
        const cardRow = $('<div class="row mt-3"></div>');

        // Displaying the assessments directly in a card within the left column
        const assessmentsCard = $(`
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Assessment Examples</div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush"></ul>
                    </div>
                </div>
            </div>
        `);
        entry.assessment_examples.forEach(assessment => {
            assessmentsCard.find("ul").append(`<li class="list-group-item">${assessment}</li>`);
        });
        cardRow.append(assessmentsCard);

        // Adding the assessment formats in a separate card within the right column
        const formatsCard = $(`
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Assessment Formats</div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush"></ul>
                    </div>
                </div>
            </div>
        `);

        const mappedFormats = mapping.find(m => m.verb === entry.verb).assessment_formats;
        mappedFormats.forEach(formatId => {
            const formatName = assessment_formats.find(f => f.id === formatId).format;
            formatsCard.find("ul").append(`<li class="list-group-item">${formatName}</li>`);
        });
        cardRow.append(formatsCard);

        resultsArea.append(cardRow);

        break; // Exit the loop once the verb is found
    }
}

});





