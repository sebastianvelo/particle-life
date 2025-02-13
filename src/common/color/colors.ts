export const cssColors = [
    // Neutrals (achromatic)
    "black", "gray",
    // Reds and pinks:
    "red", "maroon", "darkred", "firebrick", "crimson", "orangered", "darksalmon", "tomato", "indianred", "salmon", "coral", "lightsalmon",
    // Oranges, browns:
    "brown", "peru", "sienna", "chocolate", "saddlebrown", "burlywood", "bisque", "orange", "darkorange", "sandybrown",
    // Yellows:
    "darkgoldenrod", "goldenrod", "gold", "khaki", "palegoldenrod", "darkkhaki", "lemonchiffon", "olive", "beige", "yellow",
    // Greens:
    "yellowgreen", "greenyellow", "chartreuse", "lawngreen", "green", "lime", "limegreen", "darkgreen", "forestgreen", "mediumseagreen", "mediumspringgreen", "palegreen", "lightgreen",
    // Cyan / Turquoise:
    "aquamarine", "aqua", "cyan", "darkcyan", "darkturquoise", "mediumturquoise", "turquoise", "teal", "paleturquoise", "lightseagreen",
    // Blues:
    "deepskyblue", "skyblue", "lightblue", "powderblue", "cadetblue", "dodgerblue", "steelblue", "lightsteelblue", "royalblue", "cornflowerblue", "slateblue", "darkslateblue", "blue", "darkblue", "mediumblue", "midnightblue", "navy",
    // Violets, purples and magentas:
    "blueviolet", "rebeccapurple", "mediumpurple", "lavender", "indigo", "darkorchid", "mediumorchid", "darkviolet", "orchid", "plum", "violet", "purple", "magenta", "fuchsia", "mediumvioletred", "deeppink", "hotpink", "palevioletred", "lightpink", "pink",
    // Light neutrals:
    "seashell", "snow", "white"
];

export const getRandomColor = () => cssColors[Math.floor(Math.random() * cssColors.length)];