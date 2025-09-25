(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/imageHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// export default function ImageHero() {
//   // Get navbar height
//   const [navHeight, setNavHeight] = useState(0);
//   useEffect(() => {
//     const nav = document.getElementById("navbar");
//     const h = nav?.offsetHeight ?? 0;
//     setNavHeight(h);
//   }, []);
//   // GSAP animation
//   const imageHeroRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLImageElement>(null);
//   useEffect(() => {
//     if (!imageHeroRef.current || !imageRef.current) return;
//     const prefersReduced = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;
//     if (prefersReduced) return;
//     const ctx = gsap.context(() => {
//       gsap.to(imageRef.current, {
//         scale: 1.8,
//         ease: "none",
//         scrollTrigger: {
//           trigger: imageHeroRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     });
//     return () => ctx.revert();
//   }, []);
//   return (
//     <section style={{ marginTop: `-${navHeight}px` }}>
//       <div
//         className="z-[-10] h-[100vh] w-full overflow-hidden relative"
//         ref={imageHeroRef}
//       >
//         <Image
//           src="/imgs/portrait.jpg"
//           alt="portrait"
//           fill
//           ref={imageRef}
//           loading="eager"
//           className="object-cover object-[33%_0%]"
//         />
//       </div>
//     </section>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ImageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ImageHero() {
    _s();
    const [navHeight, setNavHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imageHeroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get navbar height
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageHero.useEffect": ()=>{
            const nav = document.getElementById("navbar");
            var _nav_offsetHeight;
            setNavHeight((_nav_offsetHeight = nav === null || nav === void 0 ? void 0 : nav.offsetHeight) !== null && _nav_offsetHeight !== void 0 ? _nav_offsetHeight : 0);
        }
    }["ImageHero.useEffect"], []);
    // Animate entrance once image is loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageHero.useEffect": ()=>{
            if (!loaded || !imageContainerRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ImageHero.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imageContainerRef.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out"
                    });
                }
            }["ImageHero.useEffect.ctx"]);
            return ({
                "ImageHero.useEffect": ()=>ctx.revert()
            })["ImageHero.useEffect"];
        }
    }["ImageHero.useEffect"], [
        loaded
    ]);
    // Scroll scale effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageHero.useEffect": ()=>{
            if (!imageHeroRef.current || !imageContainerRef.current) return;
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReduced) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ImageHero.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageContainerRef.current, {
                        scale: 1.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: imageHeroRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                }
            }["ImageHero.useEffect.ctx"]);
            return ({
                "ImageHero.useEffect": ()=>ctx.revert()
            })["ImageHero.useEffect"];
        }
    }["ImageHero.useEffect"], [
        loaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            marginTop: "-".concat(navHeight, "px")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: imageHeroRef,
            className: "relative z-[-10] h-[100vh] w-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: imageContainerRef,
                className: "w-full h-full relative opacity-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/imgs/portrait.jpg",
                    alt: "portrait",
                    fill: true,
                    className: "object-cover object-[33%_0%]",
                    loading: "eager",
                    onLoadingComplete: ()=>setLoaded(true)
                }, void 0, false, {
                    fileName: "[project]/src/components/imageHero.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/imageHero.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/imageHero.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/imageHero.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(ImageHero, "/YoWFZmLMCluN6jNctBvV1ZAHds=");
_c = ImageHero;
var _c;
__turbopack_context__.k.register(_c, "ImageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const icons = {
    "": null,
    location: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        version: "1.0",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 64 64",
        enableBackground: "new 0 0 64 64",
        fill: "",
        stroke: "",
        transform: "matrix(1, 0, 0, 1, 0, 0)",
        strokeWidth: "0.00064",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "SVGRepo_bgCarrier",
                strokeWidth: "0"
            }, void 0, false, {
                fileName: "[project]/src/components/tag.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/tag.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "SVGRepo_iconCarrier",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#f8f7f3",
                        d: "M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tag.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tag.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tag.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
const Tag = (param)=>{
    let { variant = "filled", colour = "cta", icon = "", children, className, ...props } = param;
    const baseStyles = "inline-flex items-center w-auto self-start text-xs font-montserrat px-2 py-1 rounded-md";
    const variantStyles = {
        filled: "bg-foreground text-background",
        bordered: "border border-".concat(colour, " text-").concat(colour),
        icon: "text-".concat(colour, " hover:bg-").concat(colour, "/10 p-2"),
        borderedIcon: "bg-transparent border-".concat(colour, " border-[0.5px] text-cta py-4")
    };
    const renderIcon = typeof icon === "string" && icon in icons ? icons[icon] : icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(className || ""),
        ...props,
        children: [
            renderIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-1",
                children: renderIcon
            }, void 0, false, {
                fileName: "[project]/src/components/tag.tsx",
                lineNumber: 73,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tag.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Tag;
var _c;
__turbopack_context__.k.register(_c, "Tag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const about = {
    overview: [
        {
            label: "Years of Experience",
            value: 2
        },
        {
            label: "Projects Completed",
            value: 6
        },
        {
            label: "Happy Clients",
            value: 3
        }
    ],
    workExperience: [
        {
            company: "",
            roles: "Full-Stack Developer & Graphic Designer",
            type: "Freelance",
            date: "July 2025 - Present",
            location: "Brisbane, Australia"
        },
        {
            company: "Digiwin Software",
            roles: [
                "Customer Service Engineer"
            ],
            type: "Full-Time",
            date: "August 2021 - September 2022",
            location: "New Taipei City, Taiwan"
        },
        {
            company: "atSENSES",
            roles: [
                "Web Designer & Marketing Assistant"
            ],
            type: "Internship",
            date: "March 2020 - June 2021",
            location: "Taipei, Taiwan"
        }
    ],
    education: [
        {
            institution: "The University of Queensland",
            degree: "Master of Interaction Design",
            location: "Brisbane, Australia",
            date: "July 2023 - July 2025"
        },
        {
            institution: "National Taipei University of Business",
            degree: "Bachelor of Information Management",
            location: "Taipei, Taiwan",
            date: "Jun 2017 - Jun 2021"
        }
    ],
    skills: [
        {
            category: "Web Development",
            subcategories: [
                {
                    label: "Frontend",
                    items: [
                        "HTML",
                        "CSS (Bootstrap, Tailwind Framework)",
                        "React",
                        "React Native",
                        "JavaScript",
                        "GSAP"
                    ]
                },
                {
                    label: "Backend",
                    items: [
                        "Django",
                        "Next.js"
                    ]
                },
                {
                    label: "Database",
                    items: [
                        "PostgreSQL",
                        "MySQL",
                        "SQLite",
                        "MS SQL"
                    ]
                },
                {
                    label: "Programming",
                    items: [
                        "Python",
                        "Java",
                        "TypeScript",
                        "C#",
                        "C++"
                    ]
                }
            ]
        },
        {
            category: "Design",
            subcategories: [
                {
                    label: "UI/UX",
                    items: [
                        "Figma",
                        "Adobe XD",
                        "Miro"
                    ]
                },
                {
                    label: "SaaS",
                    items: [
                        "WordPress",
                        "Webflow"
                    ]
                },
                {
                    label: "Graphic",
                    items: [
                        "Adobe Illustrator",
                        "Adobe Photoshop"
                    ]
                },
                {
                    label: "Data Visualisation",
                    items: [
                        "Flourish"
                    ]
                },
                {
                    label: "Game Design",
                    items: [
                        "Unity",
                        "VR Game Development (Meta Quest)"
                    ]
                }
            ]
        },
        {
            category: "Development Environment",
            subcategories: [
                {
                    label: "Operating Systems",
                    items: [
                        "Linux-Based System for Command-Line Operations",
                        "macOS",
                        "Windows"
                    ]
                }
            ]
        },
        {
            category: "Tools",
            subcategories: [
                {
                    label: "Version Control",
                    items: [
                        "Git",
                        "GitHub"
                    ]
                },
                {
                    label: "Project Management",
                    items: [
                        "Jira",
                        "Trello"
                    ]
                },
                {
                    label: "Office Work",
                    items: [
                        "Microsoft Office",
                        "Google Workspace"
                    ]
                },
                {
                    label: "Communication",
                    items: [
                        "Slack",
                        "Microsoft Teams",
                        "Zoom"
                    ]
                }
            ]
        }
    ],
    quotation: {
        text: "I believe excellent design goes beyond visual appeal. It builds a deeper emotional connection with users. I always keep the ‘why’ in mind, ensuring every design decision has purpose and value.",
        image: "/imgs/quotation.jpeg"
    }
};
const __TURBOPACK__default__export__ = about;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/about/page.tsx'\n\nExpected ',', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_f271ef58._.js.map