import React from 'react'
import Svg, {Path} from 'react-native-svg'

export function OnePercent({fill}: {fill?: string}) {
  return (
    <Svg fill="none" viewBox="0 0 101 101">
      <Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="m60.366 5.567 3.002.49c.053-.687-.01-1.314-.19-1.883a4.129 4.129 0 0 0-.837-1.497 4.633 4.633 0 0 0-1.387-1.074 6.196 6.196 0 0 0-1.854-.592c-.98-.16-1.901-.09-2.766.209-.865.296-1.599.822-2.204 1.58-.604.753-1.005 1.737-1.203 2.95-.197 1.206-.135 2.264.187 3.172.325.91.848 1.643 1.569 2.202.724.559 1.587.92 2.587 1.084.798.13 1.52.122 2.162-.024a4.662 4.662 0 0 0 1.675-.72 4.648 4.648 0 0 0 1.169-1.165 4.12 4.12 0 0 0 .618-1.347l-2.997-.511a1.926 1.926 0 0 1-.312.599c-.13.168-.284.305-.465.41a1.746 1.746 0 0 1-.614.211 2.5 2.5 0 0 1-.751-.019c-.479-.078-.87-.257-1.175-.536-.303-.282-.509-.662-.617-1.139-.104-.48-.1-1.053.008-1.72.103-.631.279-1.158.526-1.58.251-.422.567-.725.947-.91.383-.186.823-.238 1.32-.157.284.047.53.129.741.247.21.115.382.26.514.434.136.171.232.365.287.582.06.217.08.452.06.704Zm8.975-1.753-4.92 9.887 7.105 3.537 1.077-2.163-4.422-2.2.846-1.7 4.074 2.028 1.076-2.163-4.074-2.028.846-1.7 4.44 2.211 1.077-2.163-7.125-3.546Zm4.447 14.833 7.456-8.146 3.516 3.218c.605.553 1.033 1.148 1.285 1.783s.315 1.275.188 1.919c-.127.644-.455 1.256-.984 1.834-.534.583-1.114.956-1.74 1.119a3.216 3.216 0 0 1-1.786-.046l-1.125 4.552-2.403-2.199 1.03-3.998-.765-.7L76 20.672l-2.212-2.025Zm7.025-1.67-.78-.713 1.806-1.973.78.714c.26.237.448.476.566.715.122.239.165.478.127.716-.033.238-.156.474-.37.707-.21.23-.432.372-.664.422-.23.054-.467.029-.714-.075a2.758 2.758 0 0 1-.751-.512Zm10.376 3.54-2.07 1.245 1.713 2.846-7.393 4.448 1.524 2.532 7.392-4.448 1.713 2.846 2.07-1.246-4.95-8.224Zm7.375 14.937-10.45 3.575-.97-2.836 10.449-3.576.97 2.837Zm1.311 4.357-10.952 1.422.386 2.973 4.278-.555.553 4.256 2.395-.31-.552-4.257 1.882-.245.614 4.728 2.395-.311-.999-7.7Zm.737 15.417-11.016-.776.21-2.991 11.017.776-.211 2.99Zm-.483 4.547-10.636-2.972-2.136 7.644 2.326.65 1.33-4.757 1.828.511-1.225 4.383 2.326.65 1.226-4.383 1.828.511-1.336 4.778 2.327.65 2.142-7.665ZM84.151 70.583l2.293-3.578 9.298 5.96-2.27 3.54c-.613.957-1.328 1.664-2.147 2.121a4.568 4.568 0 0 1-2.634.592c-.937-.062-1.89-.404-2.859-1.025-.968-.62-1.68-1.343-2.133-2.168-.45-.822-.64-1.7-.568-2.631.075-.93.415-1.867 1.02-2.811Zm2.818.32-.617.962c-.295.46-.472.9-.531 1.319-.061.422.035.834.29 1.236.253.405.703.816 1.35 1.23.648.416 1.21.652 1.686.71.474.06.892-.03 1.256-.272.361-.238.697-.599 1.008-1.083l.57-.89-5.012-3.212Zm-5.738 19.42-5.842-9.373-4.411 2.75c-.68.424-1.195.903-1.544 1.438-.348.535-.53 1.085-.547 1.65-.02.568.13 1.107.45 1.62.276.442.613.766 1.012.97.4.208.823.302 1.269.283a2.77 2.77 0 0 0 1.29-.378l.056.092c-.317.3-.552.628-.706.987a2.38 2.38 0 0 0-.187 1.107c.025.379.144.74.36 1.086.296.475.678.81 1.147 1.006.466.197 1.003.239 1.61.127.606-.11 1.265-.388 1.98-.833l4.063-2.533Zm-8.31-5.013 1.19-.742 1.232 1.977-1.226.764c-.26.162-.505.26-.738.295a1.11 1.11 0 0 1-.647-.08 1.168 1.168 0 0 1-.499-.464c-.196-.314-.237-.619-.124-.913.114-.292.385-.571.812-.837Zm2.36 3.46 1.044-.65 1.118 1.793-1.08.673c-.317.198-.628.284-.933.257-.302-.023-.544-.18-.725-.47a.955.955 0 0 1-.158-.58c.012-.19.082-.374.21-.55.127-.177.301-.335.524-.474Zm-9.737-2.132 3.067 10.61-2.88.832-2.396-8.288-4.29 1.24-.67-2.321 7.17-2.073Zm-19.456 13.615 2.998.037.084-6.816c.004-.341.083-.646.237-.913.155-.265.366-.47.634-.618.268-.148.574-.22.92-.215.34.004.645.083.913.237.264.154.47.366.618.633.147.272.22.578.215.92l-.084 6.815 2.998.037.087-7.074c.01-.841-.178-1.572-.566-2.191-.392-.616-.943-1.096-1.654-1.439-.712-.34-1.544-.515-2.496-.527-.945-.011-1.778.144-2.497.466-.72.325-1.283.791-1.69 1.397-.41.61-.62 1.335-.63 2.177l-.087 7.074Zm-3.141-11.57-3.408 10.504-7.57-2.456.745-2.298 4.719 1.531.585-1.805-4.329-1.405.746-2.298 4.329 1.405.586-1.806-4.699-1.524.746-2.298 7.55 2.45Zm-19.303.375c-.087-.302-.042-.61.136-.923l-2.378-1.606c-.401.601-.605 1.224-.612 1.87-.012.647.168 1.277.54 1.888.373.612.928 1.167 1.667 1.666.724.489 1.449.8 2.174.934.722.132 1.389.085 2-.14.607-.223 1.105-.626 1.494-1.21.486-.712.636-1.433.451-2.16-.19-.728-.63-1.453-1.322-2.176l-.78-.812a5.515 5.515 0 0 1-.645-.787c-.143-.219-.222-.41-.236-.576a.682.682 0 0 1 .109-.46.776.776 0 0 1 .412-.301c.17-.054.367-.053.59.002.223.055.467.172.733.351.315.213.555.447.718.7.16.251.238.514.234.79-.003.274-.092.557-.266.847l2.359 1.594c.514-.768.775-1.507.782-2.218.002-.71-.212-1.382-.643-2.016-.434-.635-1.049-1.222-1.844-1.759-.775-.523-1.511-.862-2.21-1.017-.7-.156-1.34-.127-1.92.09-.58.215-1.074.623-1.484 1.223-.232.35-.392.71-.482 1.08a2.676 2.676 0 0 0-.032 1.136c.069.393.224.8.466 1.219.241.419.58.853 1.013 1.302l.643.668c.187.192.34.37.46.533.12.163.207.313.262.45.053.14.074.269.063.388a.708.708 0 0 1-.144.338.733.733 0 0 1-.362.276.915.915 0 0 1-.523.005c-.206-.049-.437-.159-.694-.332-.402-.272-.645-.557-.729-.857Zm.158-10.414-8.56 6.979-1.894-2.324 3.46-2.822-.095-.117-5.56.247L8.945 77.9l6.17-.215 2.335-6.83 2.263 2.775-1.643 4.54 1.63-.05 2.207-1.799 1.895 2.324ZM5.312 70.78l1.245 3.103 5.516-6.583 3.223-1.294-1.109-2.762-3.223 1.293-8.536-.943 1.245 3.102 4.967.331.032.08-3.36 3.673Zm6.595-17.898-11.033-.49.354-7.951 2.413.107-.22 4.956 1.896.084.202-4.546 2.414.107-.202 4.547 1.896.084.22-4.935 2.412.108-.352 7.93ZM2.16 39.01l10.522 3.355 2.267-7.11-2.302-.734-1.356 4.254-8.22-2.621-.91 2.856Zm16.115-9.721L15.88 32.8l-9.126-6.22 2.368-3.475c.64-.939 1.376-1.625 2.207-2.06a4.567 4.567 0 0 1 2.65-.517c.935.09 1.878.458 2.828 1.106.95.648 1.641 1.39 2.071 2.227.428.835.592 1.717.494 2.647-.101.927-.468 1.854-1.1 2.78Zm-2.808-.4.644-.944c.307-.452.497-.886.568-1.303.073-.42-.012-.835-.255-1.244-.241-.413-.68-.835-1.315-1.269-.636-.433-1.191-.685-1.665-.755-.472-.074-.893.005-1.263.235-.368.228-.714.579-1.038 1.054l-.596.874 4.92 3.352Zm.873-14.72 6.926 8.603 6.182-4.978-1.515-1.882-3.847 3.098-1.19-1.479 3.545-2.854-1.515-1.882-3.545 2.854-1.19-1.478 3.864-3.111-1.515-1.882-6.2 4.991Zm15.342 2.15L27.406 6.136l4.395-1.845c.756-.317 1.475-.457 2.157-.42.683.037 1.29.248 1.822.633s.95.938 1.253 1.66c.306.73.402 1.413.287 2.05a3.216 3.216 0 0 1-.789 1.603l3.662 2.928-3.003 1.26-3.199-2.61-.957.402 1.412 3.361-2.765 1.16Zm-.584-9.136 1.036 2.466.974-.409c.325-.136.585-.292.78-.468.198-.18.32-.385.367-.616.051-.232.016-.492-.105-.78-.122-.292-.285-.503-.487-.632a1.145 1.145 0 0 0-.704-.184 2.475 2.475 0 0 0-.886.214l-.975.41ZM64.39 27.996v2.67h3.672v9.539h3.267v-9.539H75v-2.67H64.39Zm-4.266 3.815c-.032-.398-.18-.708-.447-.93-.262-.223-.662-.334-1.198-.334-.342 0-.622.042-.84.125-.215.08-.374.189-.478.328a.81.81 0 0 0-.16.477.783.783 0 0 0 .077.4c.064.115.163.22.298.315.135.092.308.175.519.25.21.076.46.144.75.203l1.002.215c.676.143 1.254.332 1.735.566.48.235.874.511 1.18.83.306.313.531.667.674 1.06.147.394.223.823.227 1.288-.004.803-.205 1.482-.603 2.039-.397.556-.965.98-1.705 1.27-.735.29-1.619.435-2.652.435-1.062 0-1.988-.157-2.778-.471-.787-.314-1.4-.797-1.836-1.449-.434-.656-.652-1.494-.656-2.516h3.147c.02.374.114.688.28.942.168.255.402.447.704.578.306.132.67.197 1.091.197.354 0 .65-.043.888-.13.239-.088.42-.21.543-.364a.859.859 0 0 0 .19-.531.754.754 0 0 0-.184-.489c-.116-.143-.306-.27-.573-.382a6.098 6.098 0 0 0-1.079-.321l-1.216-.263c-1.08-.234-1.933-.626-2.557-1.174-.62-.553-.928-1.306-.924-2.26-.004-.774.202-1.452.62-2.032.421-.585 1.003-1.04 1.746-1.366.748-.325 1.604-.488 2.57-.488.986 0 1.838.165 2.557.494.72.33 1.274.795 1.664 1.395.393.596.592 1.294.596 2.093h-3.172Zm-17.795-3.816v12.21h3.315v-4.03h1.147l2.144 4.03h3.6l-2.48-4.552a3.556 3.556 0 0 0 1.49-1.297c.39-.6.585-1.337.585-2.211 0-.867-.189-1.61-.566-2.23a3.705 3.705 0 0 0-1.586-1.425c-.68-.33-1.473-.494-2.379-.494h-5.27Zm3.315 5.604h1.168c.39 0 .721-.047.996-.143.278-.1.49-.256.638-.47.15-.215.226-.496.226-.841 0-.35-.075-.634-.226-.853a1.266 1.266 0 0 0-.638-.489c-.275-.107-.606-.16-.996-.16h-1.168v2.956Zm-4.886-5.603v12.209h-3.314v-12.21h3.314Zm-13.118 0v12.209h3.315v-4.77h4.745v-2.67h-4.745v-2.099h5.27v-2.67h-8.585Zm33.322 38.79v-1.392c0-1.117.24-2.148.722-3.093a5.77 5.77 0 0 1 2.126-2.281c.928-.576 2.058-.864 3.39-.864 1.366 0 2.513.284 3.441.85a5.565 5.565 0 0 1 2.127 2.27c.481.944.722 1.984.722 3.118v1.392a6.622 6.622 0 0 1-.735 3.093 5.651 5.651 0 0 1-2.127 2.282c-.936.576-2.079.863-3.428.863-1.349 0-2.487-.287-3.416-.863a5.678 5.678 0 0 1-2.113-2.282c-.473-.945-.71-1.976-.71-3.093Zm4.485-1.392v1.392c0 .49.12.975.361 1.457.25.472.713.709 1.392.709.713 0 1.181-.232 1.405-.696.232-.464.348-.954.348-1.47v-1.392a3.63 3.63 0 0 0-.322-1.495c-.215-.481-.692-.722-1.431-.722-.679 0-1.143.241-1.392.722-.24.481-.36.98-.36 1.495ZM47.144 51.681v-1.392c0-1.135.245-2.174.735-3.12a5.774 5.774 0 0 1 2.14-2.268c.927-.567 2.049-.85 3.363-.85 1.367 0 2.514.283 3.442.85a5.565 5.565 0 0 1 2.126 2.269c.481.945.722 1.984.722 3.119v1.392c0 1.134-.245 2.17-.735 3.106a5.502 5.502 0 0 1-2.126 2.242c-.937.559-2.08.838-3.429.838-1.349 0-2.487-.283-3.415-.85a5.613 5.613 0 0 1-2.114-2.256c-.473-.937-.709-1.963-.709-3.08Zm4.537-1.392v1.392c0 .515.12 1.005.36 1.469.242.464.688.696 1.341.696.714 0 1.182-.232 1.405-.696.232-.464.348-.954.348-1.47V50.29a3.63 3.63 0 0 0-.322-1.495c-.215-.482-.692-.722-1.43-.722-.68 0-1.135.249-1.367.747-.223.49-.335.98-.335 1.47Zm-2.346 21.447 18.148-26.397h3.66L52.996 71.736h-3.66Zm-8.9 0V45.339h-6.599l-6.495 3.97v6.084l5.774-3.455h.154v19.798h7.166Z"
      />
    </Svg>
  )
}