export default function GradientBackgroundGodrayThingy() {
  return (
    <>
      <svg
        height={1000}
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 800 800'
        opacity='0.5'
      >
        <defs>
          <filter
            id='blurry-filter'
            x='-100%'
            y='-100%'
            width='300%'
            height='600%'
            filterUnits='objectBoundingBox'
            primitiveUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feGaussianBlur
              stdDeviation='40'
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              in='SourceGraphic'
              edgeMode='none'
              result='blur'
            ></feGaussianBlur>
          </filter>
        </defs>
        <g className=' ' filter='url(#blurry-filter)'>
          <ellipse
            transform='rotate(-40)'
            opacity={0.3}
            rx='84.5'
            ry='577.5'
            cx='70.5037638878946'
            cy='85.13481004325507'
            fill='hsla(89, 73%, 48%, 1.00)'
          ></ellipse>
        </g>
      </svg>
    </>
  );
}
