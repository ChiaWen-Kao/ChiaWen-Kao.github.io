(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/useViewpointMinHeight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility: useViewpointMinHeight
 * Custom hook to calculate the minimum page height, excluding the navbar's height.
 *
 * @return {string}: A CSS value for 'min-height' (e.g., "calc(100vh - 80px)").
 *
 * Example:
 * ```
 * import useViewpointMinHeight from "../../utils/useViewpointMinHeight";  // Import utility
 * const minHeight = useViewpointMinHeight();  // Call function
 * ```
 */ __turbopack_context__.s([
    "default",
    ()=>useViewpointMinHeight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useViewpointMinHeight() {
    _s();
    const [minH, setMinH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100vh");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useViewpointMinHeight.useEffect": ()=>{
            const updateMinHeight = {
                "useViewpointMinHeight.useEffect.updateMinHeight": ()=>{
                    const nav = document.getElementById("navbar");
                    var _nav_offsetHeight;
                    const navH = (_nav_offsetHeight = nav === null || nav === void 0 ? void 0 : nav.offsetHeight) !== null && _nav_offsetHeight !== void 0 ? _nav_offsetHeight : 0;
                    setMinH("calc(100vh - ".concat(navH, "px)"));
                }
            }["useViewpointMinHeight.useEffect.updateMinHeight"];
            updateMinHeight(); // Call the function immediately
            window.addEventListener("resize", updateMinHeight); // Rerun the function when the window is resize
            return ({
                "useViewpointMinHeight.useEffect": ()=>{
                    window.removeEventListener("resize", updateMinHeight); // Cleanup
                }
            })["useViewpointMinHeight.useEffect"];
        }
    }["useViewpointMinHeight.useEffect"], []);
    return minH;
}
_s(useViewpointMinHeight, "Ysp4dS9A2wVGaY1ZR79JiRB0OD0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/hideFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility: useHideFooter
 *
 * Hides the footer element in some particular page when the component is mounted.
 * Automatically cleans up if the component unmounts.
 * 
 * Example:
 * ```
 * import useHideFooter from "../../utils/useHideFooter";  // Import utility
 * useHideFooter();
 * ```
 */ __turbopack_context__.s([
    "default",
    ()=>useHideFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useHideFooter() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHideFooter.useEffect": ()=>{
            const footer = document.getElementById("footer");
            footer === null || footer === void 0 ? void 0 : footer.style.setProperty("display", "none");
        }
    }["useHideFooter.useEffect"], []);
}
_s(useHideFooter, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/gsapAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fadeInDown",
    ()=>fadeInDown,
    "fadeInUp",
    ()=>fadeInUp,
    "fadeOutUp",
    ()=>fadeOutUp,
    "slideInAlternative",
    ()=>slideInAlternative,
    "snapScroll",
    ()=>snapScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
"use client";
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
/**
 * Utility: Resolve Element
 *
 * Safely resolve a target from either HTMLElement or React.RefObject.
 * Returns `null` if not available.
 */ function resolveElement(targetRef) {
    // Check the type of the element
    // If targetRef is a DOM element, use it directly
    // If it's a ref, use .current
    return targetRef instanceof HTMLElement ? targetRef : targetRef.current;
}
/**
 * Utility: Check Reduce Motion (Accessibility Setting)
 *
 * Check for accessibility setting for reduced motion
 */ function checkReduceMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
const fadeInUp = (targetRef)=>{
    const element = resolveElement(targetRef);
    if (!element || checkReduceMotion()) return;
    // Animtaion settings
    // Group animations together and attach them to a specific element
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        const elements = element.getElementsByClassName("content-item");
        const items = elements.length > 0 ? elements : [
            element
        ]; // Check if there are child elements to animate
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
            y: 50,
            opacity: 0
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(items, {
            y: 0,
            opacity: 1,
            duration: 2,
            stagger: 0.5,
            ease: "power3.out"
        });
    }, element);
    return ()=>ctx.revert(); // Cleanup animation if component unmounts
};
const fadeInDown = (targetRef)=>{
    const element = resolveElement(targetRef);
    if (!element || checkReduceMotion()) return;
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
            y: -30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        });
    }, element);
    return ()=>ctx.revert();
};
const fadeOutUp = (targetRef, onComplete)=>{
    const element = resolveElement(targetRef);
    if (!element || checkReduceMotion()) return;
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(element, {
            y: -30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            onComplete
        });
    }, element);
    return ()=>ctx.revert();
};
const snapScroll = (targetRef)=>{
    const element = resolveElement(targetRef);
    if (!element || checkReduceMotion()) return;
    let sections = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".panel");
    if (sections.length <= 0) return;
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: element,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: ()=>"+=" + element.offsetWidth * 0.8
            }
        });
    });
    return ()=>ctx.revert();
};
const slideInAlternative = (targetRef, index)=>{
    const element = resolveElement(targetRef);
    if (!element || checkReduceMotion()) return;
    const image = element.querySelector(".card-image");
    const content = element.querySelector(".card-content");
    if (!image || !content) return;
    const imageFromX = index % 2 === 0 ? -120 : 120;
    const contentFromX = index % 2 === 0 ? 120 : -120;
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: element,
                start: "top -40%",
                end: "bottom -70%",
                toggleActions: "play none play reverse"
            }
        }).from(image, {
            x: imageFromX,
            opacity: 0,
            ease: "power2.out"
        }).from(content, {
            x: contentFromX,
            opacity: 0,
            ease: "power2.out"
        }, 0);
        return tl;
    });
    return ()=>{
        ctx.revert();
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/blog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Page: Blog
 *
 * This page serves as a blog list page and the entry point for individual blog posts.
 *
 * Features:
 * - Displays a placeholder image and text for blog pages.
 * - Shows a "still constructing" illustration and text when no blog content is available.
 *
 * @returns {JSX.Element}: The Blog page layout.
 */ __turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useViewpointMinHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useViewpointMinHeight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hideFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/hideFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/gsapAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Blog() {
    _s();
    const minHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useViewpointMinHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hideFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // GSAP enter animation
    const contentSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Blog.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"])(contentSectionRef);
        }
    }["Blog.useEffect"], []); // Runs once only, after the compoenent mounts
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center justify-center px-4 md:px-30 opacity-0",
        style: {
            minHeight: minHeight
        },
        ref: contentSectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 md:mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/imgs/constructing.svg",
                    className: "w-70 md:w-130"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-foreground font-bold text-md md:text-2xl font-montserrat",
                children: [
                    "This space will be filled with insights, stories, and projects soon.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    "Stay tuned!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Blog, "Ceud7SDJEfqtflKC+yl1hHudkqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useViewpointMinHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$hideFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Blog;
var _c;
__turbopack_context__.k.register(_c, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c49640b0._.js.map