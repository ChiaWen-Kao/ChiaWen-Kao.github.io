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
"[project]/src/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Component: CenterTextHero
 *
 * A centered hero section that introduces the portfolio with bold, animated text.
 * This component is typically used as the main hero section.
 *
 * Features:
 * - Smooth GSAP entrance animation (`fadeInUp`) triggered on mount.
 * - Each text element can animate sequentially with staggered delay.
 * - Respects user accessibility settings for reduced motion.
 *
 * @returns {JSX.Element} A full-height hero section with animated introduction text.
 *
 * @example
 * import { CenterTextHero } from "@/components/CenterTextHero";
 *
 * export default function HomePage() {
 *   return (
 *     <CenterTextHero />
 *   );
 * }
 */ __turbopack_context__.s([
    "CenterTextHero",
    ()=>CenterTextHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useViewpointMinHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useViewpointMinHeight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/gsapAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CenterTextHero = ()=>{
    _s();
    const minHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useViewpointMinHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // GSAP enter animation
    const contentSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CenterTextHero.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"])(contentSectionRef);
        }
    }["CenterTextHero.useEffect"], [
        contentSectionRef
    ]); // Runs once only, after the compoenent mounts
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight
        },
        ref: contentSectionRef,
        className: "flex flex-col px-6 md:px-30 items-center justify-center text-center font-bold uppercase text-5xl md:text-7xl leading-[140%] font-telugu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-foreground content-item opacity-0",
                children: "Hi, I'm Wen."
            }, void 0, false, {
                fileName: "[project]/src/components/hero.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-cta content-item opacity-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block",
                        children: "A UI/UX designer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block",
                        children: "& Full-stack developer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hero.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CenterTextHero, "iGM7CjSrL6CYvDnV/ADspAX8w6k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useViewpointMinHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = CenterTextHero;
var _c;
__turbopack_context__.k.register(_c, "CenterTextHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Component: Tag
 *
 * Renders a tag element with optional icons, color variants, and border styles.
 *
 * Features:
 * - Supports multiple visual variants (`filled`, `bordered`, `icon`, `borderedIcon`).
 * - Accepts two color themes (`cta`, `foreground`).
 * - Optional built-in icon support (e.g., `"location"`) or custom React nodes.
 *
 * @param {Object} TagProps - The props for the Tag component.
 * @param {"filled" | "bordered" | "icon" | "borderedIcon"} [TagProps.variant="filled"]: Defines the visual style of the tag.
 * @param {"cta" | "foreground"} [TagProps.colour="cta"]: Sets the tag’s color theme.
 * @param {"" | "location" | ReactNode} [TagProps.icon=""]: Specifies an icon to display before the text.
 * @param {ReactNode} TagProps.children: The content displayed inside the tag.
 * @param {string} [TagProps.className]: Additional Tailwind or custom classes for further styling.
 * @param {React.HTMLAttributes<HTMLSpanElement>} [props]: Any additional standard `<span>` attributes.
 *
 * @returns {JSX.Element} A styled tag element with optional icon and variant-based styling.
 *
 * @example
 * <Tag vaiant="icon" colour="cta" icon="location">Next.js</Tag>
 */ __turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const icons = {
    // Mapping from the tagIcon keys to a ReactNode
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
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/tag.tsx",
                lineNumber: 57,
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
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tag.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tag.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
const Tag = (param)=>{
    let { // React Function Component
    variant = "filled", colour = "cta", icon = "", children, className, ...props } = param;
    const baseStyles = "inline-flex items-center self-start w-auto rounded-md text-xs font-montserrat px-2 py-1";
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
                lineNumber: 100,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tag.tsx",
        lineNumber: 95,
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
"[project]/src/components/imageContentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Component: Image Content Card
 *
 * Renders a responsive project preview card with an image and descriptive text,
 * design for use in project overview sections.
 *
 * Features:
 * - Smooth GSAP entrance animation (`slideInAlternative`) triggered on mount.
 * - Alternating layout for even and odd indexed cards.
 * - Each text element can animate sequentially.
 * - Respects user accessibility settings for reduced motion.
 *
 * @param {Object} ProjectPreviewProps: The props for the component.
 * @param {Object} ProjectPreviewProps.data: The project data to display.
 * @param {string} ProjectPreviewProps.data.title: The title of the project.
 * @param {string} ProjectPreviewProps.data.duration: The duration of the project.
 * @param {string} ProjectPreviewProps.data.projectType: The type/category of the project.
 * @param {string} ProjectPreviewProps.data.description: A brief description of the project.
 * @param {string[]} ProjectPreviewProps.data.tag: An array of tags/technologies used in the project.
 * @param {string} ProjectPreviewProps.data.image: The URL of the project's preview image.
 * @param {number} ProjectPreviewProps.index: The index of the project card (used for layout alternation).
 *
 * @returns {JSX.Element} A project preview card with animated content.
 *
 * @example
 * import ImageContentCard from "@/components/ImageContentCard";
 *
 * export default function HomePage() {
 *   const project = {
 *     title: "InsightHub",
 *     duration: "2024",
 *     projectType: "Web App",
 *     description: "A dashboard for visualizing user behavior analytics.",
 *     tag: ["Next.js", "Tailwind", "Django"],
 *     image: "/images/insighthub-cover.jpg",
 *   };
 *
 *   return <ImageContentCard data={project} index={0} />;
 * }
 */ __turbopack_context__.s([
    "default",
    ()=>ImageContentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/gsapAnimation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImageContentCard(param) {
    let { data, index } = param;
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageContentCard.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideInAlternative"])(cardRef, index);
        }
    }["ImageContentCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-20 md:my-24",
        ref: cardRef,
        "aria-label": data.title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-image relative md:col-span-2 overflow-hidden aspect-[3/2] ".concat(index % 2 === 1 ? "md:order-2" : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: data.image,
                    alt: data.title,
                    fill: true,
                    className: "object-cover w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/imageContentCard.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/imageContentCard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-content relative rounded-md bg-[rgba(18, 38, 46, 0.5)] backdrop-blur-3xl p-6 md:p-9 md:ml-[-100px] z-10 ".concat(index % 2 === 1 ? "md:order-1 md:ml-[0px] md:mr-[-100px]" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-md bg-foreground/8 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/imageContentCard.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-foreground text-xl font-telugu leading-[200%]",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/imageContentCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-caption text-md font-montserrat",
                                children: [
                                    data.duration,
                                    " | ",
                                    data.projectType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/imageContentCard.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground text-md font-montserrat leading-[200%] mt-5",
                                children: data.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/imageContentCard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 mt-5",
                                children: data.tag.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                                        variant: "bordered",
                                        colour: "foreground",
                                        icon: "",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/components/imageContentCard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/imageContentCard.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/imageContentCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/imageContentCard.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/imageContentCard.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(ImageContentCard, "6u/bLyT0WzEP0A9aknmDXb+lDH8=");
_c = ImageContentCard;
var _c;
__turbopack_context__.k.register(_c, "ImageContentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projectsOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const projectsOverview = [
    {
        title: "ZenZzz - Sleep Tracker Application",
        duration: "03.2024 - 05.2025",
        projectType: "Course Work",
        description: "Designed and prototyped a sleep tracker app for university students. Developed a series of features to improve the functionality and address problems in existing sleep tracking applications.",
        tag: [
            "UIUX Design",
            "User Research",
            "Desk Research"
        ],
        image: "/imgs/zenzzz-mockup.jpg"
    },
    {
        title: "InsightHub - Data Visualisation Tool",
        duration: "02.2025 - 03.2025",
        projectType: "Course Work",
        description: "A web-based SaaS platform that simplifies data analysis by converting CSV files into interactive charts and dashboards, which can be easily shared for collaborative insights.",
        tag: [
            "Full-Stack Development",
            "Database Design",
            "UIUX Design"
        ],
        image: "/imgs/p2/insighthub-mockup.png"
    },
    {
        title: "COPD Self-Monitoring FHIR App",
        duration: "04.2024 - 10.2024",
        projectType: "Industry-Sponsored Work",
        description: "Developed a SMART on FHIR COPD management App to supportpatient self-monitoring. This project allows healthcare providers to track patients’ vital signs alongside a self-administered COPD questionnaire.",
        tag: [
            "UIUX Design",
            "Frontend Developemnt"
        ],
        image: "/imgs/p4/p4-cover.png"
    },
    {
        title: "TNVR - Marketing Material",
        duration: "12.2022 - 12.2022",
        projectType: "Client Project",
        description: "Designed a campaign logo and canvas bag marketing material in collaboration with the Animal Protection Office of Taoyuan, Taiwan.",
        tag: [
            "User Research",
            "Graphic Design",
            "Marketing Material"
        ],
        image: "/imgs/tnvr.jpg"
    }
];
const __TURBOPACK__default__export__ = projectsOverview;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Page: Landing Page
 *
 * The Landing Page provides users with a quick introduction to who I am,
 * including links to the "About" and "Works" pages. It serves as an entry
 * point for exploring my portfolio and key projects.
 *
 * Features:
 * - Displays a set of highlighted project preview cards, each linking to a detailed project page.
 * - Integrates GSAP animations:
 *   - Headline animation when the page loads.
 *   - Project cards slide in from alternating sides as the user scrolls.
 *
 * @returns {JSX.Element} The complete landing page layout.
 */ __turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/gsapAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/imageContentCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectsOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projectsOverview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LandingPage() {
    _s();
    const images = [
        "/imgs/zenzzz.png",
        "/imgs/chilling-coffee.jpg",
        "/imgs/tnvr.jpg",
        "/imgs/sereno.png"
    ];
    const snapScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const projectCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$gsapAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapScroll"])(snapScrollRef);
        }
    }["LandingPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterTextHero"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-20 md:my-[250px] md:pl-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-5 overflow-x-hidden",
                    ref: snapScrollRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col col-span-2 px-6 py-10 md:px-0 md:pr-20 md:py-0 align-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-foreground font-bold text-3xl font-telugu mb-10",
                                    children: "Passionate designer with expertise in user-centred design"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground text-md font-montserrat leading-[200%] mb-10",
                                    children: "I’m a problem solver who loves addressing users’ pain points and turning them into meaningful solutions. During the design process, I continuously ask “why” and validate decisions through user testing to ensure the best possible experience."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/about",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "borderedIcon",
                                        colour: "cta",
                                        icon: "link",
                                        children: "read more about me"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-3 relative h-screen overflow-hidden hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full",
                                children: images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: "Project image ".concat(index + 1),
                                        loading: "eager",
                                        className: "panel w-screen h-full w-full object-cover object-center flex-shrink-0"
                                    }, "desktop-".concat(index), false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex overflow-x-auto gap-2 md:hidden",
                            children: images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square overflow-hidden flex-shrink-0 w-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: "Project image ".concat(index + 1),
                                        loading: "eager",
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                }, "mobile-".concat(index), false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-20 md:my-[150px] px-6 md:px-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " text-foreground font-bold text-3xl font-telugu mb-10",
                        children: [
                            "Showcasing Design & Development in Action",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            "“Exploring design through real-world applications.”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-10 md:items-end mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground text-md font-montserrat leading-[200%]",
                                    children: "In today’s fast-paced digital world, I continuously learn, adapt, and apply new skills across a variety of projects. From UI/UX design and full-stack web development to WordPress, graphic design, and marketing materials, these featured works highlight my versatility. Each project reflects not only my technical expertise but also my passion for solving problems through thoughtful design."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start md:justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/works",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "borderedIcon",
                                        colour: "cta",
                                        icon: "link",
                                        children: "see more projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: projectCardRef,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectsOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: item,
                                index: index
                            }, index, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(LandingPage, "UrEuR/AzOpVNXHiaFafVVlqAQ2k=");
_c = LandingPage;
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bdf82826._.js.map