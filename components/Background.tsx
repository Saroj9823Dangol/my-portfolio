const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-auto">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="waveFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                from="0.02"
                to="0.06"
                dur="0.4s"
                begin="mouseover"
                fill="freeze"
              />
              <animate
                attributeName="baseFrequency"
                from="0.06"
                to="0.02"
                dur="0.4s"
                begin="mouseout"
                fill="freeze"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                from="0"
                to="60"
                dur="0.4s"
                begin="mouseover"
                fill="freeze"
              />
              <animate
                attributeName="scale"
                from="60"
                to="0"
                dur="0.4s"
                begin="mouseout"
                fill="freeze"
              />
            </feDisplacementMap>
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.3  0 1 0 0 0.3  0 0 1 0 0.4  0 0 0 1 0"
            >
              <animate
                attributeName="values"
                from="1 0 0 0 0.3  0 1 0 0 0.3  0 0 1 0 0.4  0 0 0 1 0"
                to="1 0 0 0 0.6  0 1 0 0 0.6  0 0 1 0 0.7  0 0 0 1 0"
                dur="0.4s"
                begin="mouseover"
                fill="freeze"
              />
              <animate
                attributeName="values"
                from="1 0 0 0 0.6  0 1 0 0 0.6  0 0 1 0 0.7  0 0 0 1 0"
                to="1 0 0 0 0.3  0 1 0 0 0.3  0 0 1 0 0.4  0 0 0 1 0"
                dur="0.4s"
                begin="mouseout"
                fill="freeze"
              />
            </feColorMatrix>
          </filter>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="sparkleFilter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08"
              numOctaves="1"
              result="sparkle"
            >
              <animate
                attributeName="seed"
                from="0"
                to="50"
                dur="5s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0"
              result="sparkleColor"
            />
            <feComposite
              in="sparkleColor"
              in2="SourceGraphic"
              operator="over"
              result="combined"
            />
          </filter>
          <linearGradient
            id="bgGradientLight"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 0.5 }} />
            <stop
              offset="50%"
              style={{ stopColor: "#fff", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#fff", stopOpacity: 0.3 }}
            />
          </linearGradient>
          <linearGradient
            id="bgGradientDark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#0f766e", stopOpacity: 0.5 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#1e3a8a", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#065f46", stopOpacity: 0.3 }}
            />
          </linearGradient>
          <linearGradient id="opacityMask" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 1 }}
            />
          </linearGradient>
          <mask id="netMask">
            <rect width="100%" height="100%" fill="url(#opacityMask)" />
          </mask>
          <pattern
            id="squarePattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0H50M0 0V50"
              stroke="rgba(219, 39, 119, 0.5)"
              strokeWidth="1.5"
              fill="none"
              className="dark:stroke-[rgba(45,212,191,0.5)]"
              filter="url(#glowFilter)"
            >
              <animate
                attributeName="stroke-width"
                from="1.5"
                to="2.5"
                dur="2.5s"
                repeatCount="indefinite"
                values="1.5;2.5;1.5"
              />
              <animate
                attributeName="stroke"
                from="rgba(219, 39, 119, 0.5)"
                to="rgba(236, 72, 153, 0.6)"
                dur="2.5s"
                repeatCount="indefinite"
                values="rgba(219, 39, 119, 0.5);rgba(236, 72, 153, 0.6);rgba(219, 39, 119, 0.5)"
                className="dark:from-[rgba(45,212,191,0.5)] dark:to-[rgba(110,231,183,0.6)] dark:values-[rgba(45,212,191,0.5);rgba(110,231,183,0.3);rgba(45,212,191,0.5)]"
              />
            </path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#bgGradientLight)"
          className="dark:fill-[url(#bgGradientDark)]"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#squarePattern)"
          filter="url(#waveFilter)"
          mask="url(#netMask)"
        />
        <rect
          width="100%"
          height="100%"
          fill="none"
          filter="url(#sparkleFilter)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            from="0"
            to="0.2"
            dur="0.4s"
            begin="mouseover"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            from="0.2"
            to="0"
            dur="0.4s"
            begin="mouseout"
            fill="freeze"
          />
        </rect>
        {/* Dynamic Animated Colorful Shapes */}
        <g className="pointer-events-none">
          <circle
            cx="15%"
            cy="25%"
            r="20"
            fill="rgba(239, 68, 68, 0.3)"
            className="dark:fill-[rgba(45,212,191,0.3)]"
          >
            <animate
              attributeName="r"
              from="20"
              to="25"
              dur="3s"
              repeatCount="indefinite"
              values="20;25;20"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="3s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path="M0,0 C50,30 100,-20 150,0 C100,20 50,30 0,0"
            />
            <animate
              attributeName="fill"
              from="rgba(239, 68, 68, 0.3)"
              to="rgba(251, 191, 36, 0.3)"
              dur="5s"
              repeatCount="indefinite"
              values="rgba(239, 68, 68, 0.3);rgba(251, 191, 36, 0.3);rgba(239, 68, 68, 0.3)"
            />
            <animate
              attributeName="r"
              from="20"
              to="30"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animate
              attributeName="r"
              from="30"
              to="20"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </circle>
          <path
            d="M85% 35 L90% 45 L80% 45 Z"
            fill="rgba(251, 191, 36, 0.3)"
            className="dark:fill-[rgba(110,231,183,0.3)]"
          >
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="4s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 85% 40"
              to="360 85% 40"
              dur="6s"
              repeatCount="indefinite"
            />
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M0,0 C-30,50 30,-50 60,0 C30,50 -30,50 0,0"
            />
            <animate
              attributeName="fill"
              from="rgba(251, 191, 36, 0.3)"
              to="rgba(59, 130, 246, 0.3)"
              dur="4s"
              repeatCount="indefinite"
              values="rgba(251, 191, 36, 0.3);rgba(59, 130, 246, 0.3);rgba(251, 191, 36, 0.3)"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1"
              to="1.2"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1.2"
              to="1"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </path>
          <circle
            cx="40%"
            cy="75%"
            r="15"
            fill="rgba(59, 130, 246, 0.3)"
            className="dark:fill-[rgba(45,212,191,0.3)]"
          >
            <animate
              attributeName="r"
              from="15"
              to="20"
              dur="3.5s"
              repeatCount="indefinite"
              values="15;20;15"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="3.5s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M0,0 C20,-40 -20,40 0,0"
            />
            <animate
              attributeName="fill"
              from="rgba(59, 130, 246, 0.3)"
              to="rgba(219, 39, 119, 0.3)"
              dur="5s"
              repeatCount="indefinite"
              values="rgba(59, 130, 246, 0.3);rgba(219, 39, 119, 0.3);rgba(59, 130, 246, 0.3)"
            />
            <animate
              attributeName="r"
              from="15"
              to="25"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animate
              attributeName="r"
              from="25"
              to="15"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </circle>
          <rect
            x="60%"
            y="15%"
            width="20"
            height="20"
            fill="rgba(219, 39, 119, 0.3)"
            className="dark:fill-[rgba(110,231,183,0.3)]"
          >
            <animate
              attributeName="width"
              from="20"
              to="25"
              dur="4s"
              repeatCount="indefinite"
              values="20;25;20"
            />
            <animate
              attributeName="height"
              from="20"
              to="25"
              dur="4s"
              repeatCount="indefinite"
              values="20;25;20"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="4s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 60% 15"
              to="360 60% 15"
              dur="7s"
              repeatCount="indefinite"
            />
            <animateMotion
              dur="5.5s"
              repeatCount="indefinite"
              path="M0,0 C40,20 -40,-20 0,0"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1"
              to="1.2"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1.2"
              to="1"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </rect>
          <path
            d="M25% 55 L30% 65 L20% 65 Z"
            fill="rgba(236, 72, 153, 0.3)"
            className="dark:fill-[rgba(45,212,191,0.3)]"
          >
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="3.8s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25% 60"
              to="360 25% 60"
              dur="5s"
              repeatCount="indefinite"
            />
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              path="M0,0 C-20,30 20,-30 0,0"
            />
            <animate
              attributeName="fill"
              from="rgba(236, 72, 153, 0.3)"
              to="rgba(59, 130, 246, 0.3)"
              dur="3.8s"
              repeatCount="indefinite"
              values="rgba(236, 72, 153, 0.3);rgba(59, 130, 246, 0.3);rgba(236, 72, 153, 0.3)"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1"
              to="1.2"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1.2"
              to="1"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </path>
          <circle
            cx="70%"
            cy="50%"
            r="18"
            fill="rgba(251, 191, 36, 0.3)"
            className="dark:fill-[rgba(110,231,183,0.3)]"
          >
            <animate
              attributeName="r"
              from="18"
              to="23"
              dur="4.5s"
              repeatCount="indefinite"
              values="18;23;18"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="4.5s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateMotion
              dur="7.5s"
              repeatCount="indefinite"
              path="M0,0 C30,-20 -30,40 0,0"
            />
            <animate
              attributeName="fill"
              from="rgba(251, 191, 36, 0.3)"
              to="rgba(239, 68, 68, 0.3)"
              dur="4.5s"
              repeatCount="indefinite"
              values="rgba(251, 191, 36, 0.3);rgba(239, 68, 68, 0.3);rgba(251, 191, 36, 0.3)"
            />
            <animate
              attributeName="r"
              from="18"
              to="28"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animate
              attributeName="r"
              from="28"
              to="18"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </circle>
          <rect
            x="20%"
            y="80%"
            width="25"
            height="25"
            fill="rgba(34, 197, 94, 0.3)"
            className="dark:fill-[rgba(45,212,191,0.3)]"
          >
            <animate
              attributeName="width"
              from="25"
              to="30"
              dur="5s"
              repeatCount="indefinite"
              values="25;30;25"
            />
            <animate
              attributeName="height"
              from="25"
              to="30"
              dur="5s"
              repeatCount="indefinite"
              values="25;30;25"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="5s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 20% 80"
              to="360 20% 80"
              dur="6s"
              repeatCount="indefinite"
            />
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M0,0 C-40,20 40,-20 0,0"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1"
              to="1.2"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1.2"
              to="1"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </rect>
          <path
            d="M50% 20 L55% 25 L45% 25 L48% 18 Z"
            fill="rgba(147, 51, 234, 0.3)"
            className="dark:fill-[rgba(110,231,183,0.3)]"
          >
            <animate
              attributeName="opacity"
              from="0.3"
              to="0.5"
              dur="4.2s"
              repeatCount="indefinite"
              values="0.3;0.5;0.3"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50% 22"
              to="360 50% 22"
              dur="5.5s"
              repeatCount="indefinite"
            />
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path="M0,0 C20,40 -20,-40 0,0"
            />
            <animate
              attributeName="fill"
              from="rgba(147, 51, 234, 0.3)"
              to="rgba(236, 72, 153, 0.3)"
              dur="4.2s"
              repeatCount="indefinite"
              values="rgba(147, 51, 234, 0.3);rgba(236, 72, 153, 0.3);rgba(147, 51, 234, 0.3)"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1"
              to="1.2"
              dur="0.3s"
              begin="mouseover"
              fill="freeze"
              className="group-hover:animate-pulse"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              from="1.2"
              to="1"
              dur="0.3s"
              begin="mouseout"
              fill="freeze"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default Background;
