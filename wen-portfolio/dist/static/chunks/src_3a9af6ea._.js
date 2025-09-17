(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const projects = [
    {
        title: "InsightHub SaaS Data Visualisation Platform",
        duration: "02.2025 - 03.2025",
        projectType: "Course Work",
        description: "This platform streamlines the analysis process by generating charts through a straightforward user interface. Users simply upload a CSV file, select the relevant data columns, and the system automatically creates visualisations. Dashboards can also be easily shared with others, supporting collaborative insights and data-driven decision-making. The platform is being developed as a web-based application using Django, an MVC backend framework that ensures scalability and maintainability. MySQL is implemented as the relational database system to provide efficient and secure data management. The project also incorporates CRUD functionality to manage user and data operations effectively. A key focus of the design is accessibility. The platform features a **responsive interface** that adapts across devices, ensuring a seamless user experience and intuitive navigation for a diverse range of users.",
        tag: [
            "Full-Stack Development",
            "Database Design",
            "UIUX Design"
        ],
        image: "/imgs/insighthub.png",
        url: "/work/insighthub"
    },
    {
        title: "Cool Hack Game Cybersecurity Website Game",
        duration: "03.2025 - 05.2025",
        projectType: "Course Work",
        description: "Collaborated on the design and development of Cool Hack Game, an online multiplayer platform that teaches adolescents practical cybersecurity skills through engaging, game-based challenges. The system features interactive encryption puzzles, a firewall simulation game, and AI-driven difficulty adjustment to personalize the learning experience.",
        tag: [
            "Frontend Development",
            "UIUX Design",
            "Deployment"
        ],
        image: "/imgs/cool-hack-game.png"
    },
    {
        title: "COPD Management FHIR App for Patient self-monitoring",
        duration: "09.2024 - 10.2024",
        projectType: "Industry-Sponsored Project",
        description: "Co-developed a patient-facing web application to support self-monitoring for individuals with Chronic Obstructive Pulmonary Disease (COPD). The system enables patients to complete the COPD Assessment Test (CAT), integrate and visualize data from wearable devices (e.g., heart rate, oxygen saturation, daily steps), and share results securely via a FHIR-compliant server.",
        tag: [
            "Frontend Development",
            "UIUX Design"
        ],
        image: "/imgs/copd.png"
    },
    {
        title: "ZenZzz Sleep Tracker Application",
        duration: "04.2024 - 05.2025",
        projectType: "Course Work",
        description: "Designed and prototyped a sleep tracker app for university students. Developed a series of features to improve the functionality and address problems in existing sleep tracking applications.",
        tag: [
            "UIUX Design",
            "Desk Research",
            "User Research"
        ],
        image: "/imgs/zenzzz-mockup.jpg",
        url: "/work/zenzzz"
    },
    {
        title: "Serene Activity Booking Website",
        duration: "08.2023 - 10.2023",
        projectType: "Course Work",
        description: "Designed as an activity booking website, this platform aims to strengthen community bonds among residents.",
        tag: [
            "UIUX Design",
            "Desk Research",
            "User Research"
        ],
        image: "/imgs/sereno.png"
    },
    {
        title: "TNVR Marketing Material",
        duration: "12.2022",
        projectType: "Client Project",
        description: "Designed a campaign logo and canvas bag marketing material in collaboration with the Animal Protection Office of Taoyuan, Taiwan.",
        tag: [
            "User Research",
            "Graphic Design"
        ],
        image: "/imgs/tnvr.jpg",
        url: "/work/tnvr"
    }
];
const __TURBOPACK__default__export__ = projects;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/work/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const allTags = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flatMap((project)=>project.tag))); // Collect all tags from data and remove the duplicated one
function Work() {
    _s();
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [minH, setMinH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100vh");
    const [selectedTags, setSelectedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Toggle tag selection
    const handleTagClick = (tag)=>{
        setSelectedTags((prev)=>prev.includes(tag) // Check if the tag is selected
             ? prev.filter((t)=>t !== tag) // Remove if already selected
             : [
                ...prev,
                tag
            ] // Add if not selected
        );
    };
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter((project)=>selectedTags.length === 0 ? true : selectedTags.some((tag)=>project.tag.includes(tag)));
    // Get navbar height
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            const updateMinHeight = {
                "Work.useEffect.updateMinHeight": ()=>{
                    const nav = document.getElementById("navbar");
                    var _nav_offsetHeight;
                    const h = (_nav_offsetHeight = nav === null || nav === void 0 ? void 0 : nav.offsetHeight) !== null && _nav_offsetHeight !== void 0 ? _nav_offsetHeight : 0;
                    setMinH("calc(100vh - ".concat(h, "px)"));
                }
            }["Work.useEffect.updateMinHeight"];
            updateMinHeight();
            window.addEventListener("resize", updateMinHeight);
        }
    }["Work.useEffect"], []);
    // Heading animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            if (!headingRef.current) return;
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Check for accessiblity setting for reduced motion
            if (prefersReduced) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Work.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(headingRef.current, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.5,
                        ease: "power3.out"
                    });
                }
            }["Work.useEffect.ctx"], headingRef);
            return ({
                "Work.useEffect": ()=>ctx.revert()
            })["Work.useEffect"]; // Cleanup animation if component unmounts
        }
    }["Work.useEffect"], []);
    // Project list animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const cards = document.querySelectorAll(".project-card");
            cards.forEach({
                "Work.useEffect": (card)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(card, {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 80%",
                            scrub: true,
                            toggleActions: "play none play reverse"
                        }
                    });
                }
            }["Work.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            // Clean up
            return ({
                "Work.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "Work.useEffect": (st)=>st.kill()
                    }["Work.useEffect"]);
                }
            })["Work.useEffect"];
        }
    }["Work.useEffect"], []);
    // Project card animation
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-10 md:px-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: minH
                },
                ref: headingRef,
                className: "flex flex-cols items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-telugu font-bold text-8xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Works."
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/work/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-montserrat leading-[200%] flex justify-end items-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "A showcase of my work across diverse fields, including UI/UX design, web development, no-code solutions, and graphic design. I continuously learn new skills and tools, staying adaptable and open to new possibilities."
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/work/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/work/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/work/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "md:mt-10 md:mb-[300px] md:px-[100px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex gap-4 flex-wrap",
                    children: allTags.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTagClick(item),
                            className: "px-4 py-2 rounded border ".concat(selectedTags.includes(item) ? "bg-cta text-background" : "border-foreground text-foreground hover:bg-foreground/20"),
                            children: item
                        }, index, false, {
                            fileName: "[project]/src/app/work/page.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/work/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/work/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-colrs-1 md:grid-cols-2 gap-10",
                    children: filteredProjects.map((project, index)=>{
                        var _project_duration;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-115 flex flex-col justify-end items-start p-10 project-card overflow-hidden group cursor-pointer ".concat(index % 2 === 0 ? "md:-mt-[200px]" : ""),
                            onClick: ()=>window.location.href = "".concat(project.url),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110",
                                    style: {
                                        backgroundImage: "url(".concat(project.image, ")")
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-foreground/0 to-background/70"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "relative font-bold text-2xl font-montserrat text-foreground z-10",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px w-full bg-white my-2 relative z-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-montserrat text-foreground z-10",
                                    children: ((_project_duration = project.duration) === null || _project_duration === void 0 ? void 0 : _project_duration.includes("-")) ? project.duration.split("-")[1].trim() : project.duration || ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/work/page.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/work/page.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/work/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(Work, "XSE+ZWwAU+v57C+n9Nt1GxoPv1k=");
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3a9af6ea._.js.map