import { TailwindColors } from "@navtrack/shared/utils/tailwind";

type NavtrackLogoProps = {
  className?: string;
};

export function NavtrackLogo(props: NavtrackLogoProps) {
  const links = TailwindColors.gray[300];
  const body = TailwindColors.white;
  const antennaShadow = TailwindColors.white;
  const antennaTip = TailwindColors.gray[300];
  const wingGrid = TailwindColors.gray[300];

  return (
    <div className={props.className}>
      <svg
        viewBox="22 22 84 84"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%">
        <g id="icon">
          <path
            d="m89.935 87.097h1.942v7.63h-1.942z"
            fill={links}
            transform="matrix(.707 -.707 .707 .707 -37.659 90.908)"
          />
          <path
            d="m67.662 46.61h3.544v11.421h-3.544z"
            fill={links}
            transform="matrix(.707 -.707 .707 .707 -16.659 64.422)"
          />
          <rect
            fill={body}
            height="19.517"
            rx="1.64"
            transform="matrix(.707 -.707 .707 .707 -4.679 69.384)"
            width="31.468"
            x="65.681"
            y="30.582"
          />
          <rect
            fill={wingGrid}
            height="16.153"
            rx=".239"
            transform="matrix(.707 -.707 .707 .707 -4.679 69.384)"
            width="27.957"
            x="67.435"
            y="32.264"
          />
          <g fill={body}>
            <path
              d="m86.913 25.105h.959v18.268h-.959z"
              transform="matrix(.707 -.707 .707 .707 1.386 71.824)"
            />
            <path
              d="m83.173 28.066h.959v28.883h-.959z"
              transform="matrix(-.707 -.707 .707 -.707 112.746 131.715)"
            />
            <path
              d="m78.811 23.704h.959v28.883h-.959z"
              transform="matrix(-.707 -.707 .707 -.707 108.385 121.186)"
            />
            <path
              d="m82.886 29.132h.959v18.268h-.959z"
              transform="matrix(.707 -.707 .707 .707 -2.641 70.156)"
            />
            <path
              d="m78.859 33.159h.959v18.268h-.959z"
              transform="matrix(.707 -.707 .707 .707 -6.668 68.488)"
            />
            <path
              d="m74.831 37.187h.959v18.268h-.959z"
              transform="matrix(.707 -.707 .707 .707 -10.696 66.82)"
            />
          </g>
          <path
            d="m50.555 63.717h3.544v11.421h-3.544z"
            fill={links}
            transform="matrix(-.707 .707 -.707 -.707 138.42 81.52)"
          />
          <rect
            fill={body}
            height="19.517"
            rx="1.64"
            transform="matrix(.707 -.707 .707 .707 -45.747 52.373)"
            width="31.468"
            x="24.613"
            y="71.649"
          />
          <path
            d="m26.608 73.331h27.477a.24.24 0 0 1 .24.24v15.674a.239.239 0 0 1 -.239.239h-27.479a.239.239 0 0 1 -.239-.239v-15.673a.24.24 0 0 1 .24-.24z"
            fill={wingGrid}
            transform="matrix(.707 -.707 .707 .707 -45.747 52.373)"
          />
          <path
            d="m33.766 78.252h.959v18.268h-.959z"
            fill={body}
            transform="matrix(-.707 .707 -.707 -.707 120.252 124.963)"
          />
          <path
            d="m42.034 69.204h.959v28.883h-.959z"
            fill={body}
            transform="matrix(-.707 -.707 .707 -.707 13.429 172.854)"
          />
          <path
            d="m37.673 64.843h.959v28.883h-.959z"
            fill={body}
            transform="matrix(-.707 -.707 .707 -.707 9.068 162.325)"
          />
          <path
            d="m37.793 74.225h.959v18.268h-.959z"
            fill={body}
            transform="matrix(-.707 .707 -.707 -.707 124.279 115.24)"
          />
          <path
            d="m41.82 70.198h.959v18.268h-.959z"
            fill={body}
            transform="matrix(-.707 .707 -.707 -.707 128.306 105.517)"
          />
          <path
            d="m45.848 66.17h.959v18.268h-.959z"
            fill={body}
            transform="matrix(-.707 .707 -.707 -.707 132.334 95.794)"
          />
          <path
            d="m68.341 72.237h15.13v7.35h-15.13z"
            fill={links}
            transform="matrix(.707 -.707 .707 .707 -31.446 75.908)"
          />
          <path
            d="m56.381 40.1-1.581-1.583a11.51 11.51 0 1 0 -16.28 16.283l1.58 1.579z"
            fill={links}
          />
          <path
            d="m82.1 65.82-25.719-25.72-16.281 16.279 25.722 25.721a1.39 1.39 0 0 0 1.972 0l14.306-14.308a1.4 1.4 0 0 0 0-1.972z"
            fill={body}
          />
          <path
            d="m105 72.646c-4.6-4.6-19.152-4.673-28.088 4.263-.641.641-1.243 1.282-1.825 1.943-7.575 8.522-6.719 21.884-2.448 26.155z"
            fill={antennaShadow}
          />
          <path
            d="m101.222 76.423c-4.271-4.271-17.623-5.137-26.135 2.428-7.575 8.522-6.719 21.884-2.448 26.155z"
            fill={body}
          />
          <path
            d="m96.516 92.844a2.6 2.6 0 1 0 0 3.665 2.6 2.6 0 0 0 0-3.665z"
            fill={antennaTip}
          />
        </g>
      </svg>
    </div>
  );
}
