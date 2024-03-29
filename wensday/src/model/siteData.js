export default {
  projects: [
    {
      id: "lanuitlumiere",
      title: "La Nuit Lumière",
      subtitle: "La Nuit Blanche Taipei 2022",
      cover: "projects/laNuit-Cover.jpg",
      innerCover: "projects/laNuit-CoverInner.jpg",
      descrpition: `La nuit lumiere is generated by the data of participants accumulated throughout the 12 hours of Nuit Blanche Taipei 2022. The participant flow and the audience credit mission trigger the ratio of RGB color values, which represents “avant grade,” “guarding” and “balance.” 

Everyone’s authentic experience is fantastically transformed into real-time data of the virtual world, which is converged and converted into the lumiere of the night, shining for the belief of all and merging with the sun at 6 am.
    
At the moment of sunrise, step towards the future.
      
6pm-6am. Once every hour, 12 times in total.`,
      medias: [
        {
          type: "image",
          url: "projects/laNuit-01.jpg",
        },
        {
          type: "image",
          url: "projects/laNuit-02.jpg",
        },
        {
          type: "image",
          url: "projects/laNuit-03.jpg",
        },
        {
          type: "vimeo",
          url: "https://vimeo.com/764434760/978e00b006",
        },
      ],
    },
    {
      id: "datafaceprint",
      title: "Data Face Print",
      subtitle: "Barbican Centre - AI: More Than Human",
      cover: "projects/dfp-Cover.jpg",
      innerCover: "projects/dfp-CoverInner.jpg",
      descrpition: `Part of the 'AI:More than Human' exhibition 2019 at Barbican

Through a series of questions, making viewers realize how big of a footprint they have left on the internet. The project is built using WebGL combined with face detection. With detection of the looking direction of the face, we could also detect whether the viewer is nodding or shaking their head. And then we invite the views to nod or shake to answer the question. 

Progressing through the questions, if the user has left more footprints on the internet, it makes the face more visible. 
        `,
      medias: [
        {
          type: "image",
          url: "projects/dfp01.jpg",
        },
        {
          type: "image",
          url: "projects/dfp02.jpg",
        },
        {
          type: "vimeo",
          url: "https://vimeo.com/387633341",
        },
        {
          type: "image",
          url: "projects/dfp03.jpg",
        },
      ],
    },
    {
      id: "pulse",
      title: "FC Bayern - Pulse",
      subtitle: "Visualisation of a football game",
      cover: "projects/pulseCover.jpg",
      innerCover: "projects/pulseCoverInner.jpg",
      descrpition: `Pulse is a data visualization of a football match using the gathered audio data in a live football match. Enabling viewers to see and hear the excitement of the match scrolling through the timeline and compare with the marked important timestamps. An alternative view is also provided for visualizing the overview of the match.
 
The project is built with a customized WebGL library. Capture the mouse scroll to move the camera through the timeline and using instancing to render the huge amount of cubes.      
      `,
      medias: [
        {
          type: "vimeo",
          url: "https://vimeo.com/768524473",
        },
        {
          type: "image",
          url: "projects/pulse03.jpg",
        },
        {
          type: "image",
          url: "projects/pulse02.jpg",
        },
        {
          type: "image",
          url: "projects/pulse01.jpg",
        },
      ],
    },
    {
      id: "sibos",
      title: "Sibos",
      subtitle: "2018",
      cover: "projects/sibosCover.jpg",
      innerCover: "projects/sibosCoverInner.jpg",
      descrpition: `An interactive data visualization project, using the data of the transactions of the Sibos in one day. Each circle represents a transaction, the bigger the circle is, the larger the amount is. There are also 5 interactive data stories that are randomly displayed when viewers get close to the LED wall.

There are different layers of interaction in this project. The first layer is for viewers that's more than a meter away from the LED wall. 2 Kinects are set up to capture the viewer's motion and use it to affect the flow of the circles. The second layer is when the viewer stands next to the LED wall, a randomly selected data story will appear in front of the viewer. The last layer is the touch LED wall that the viewer can go through the different pages of the data story or even to the next data story.
      
The visualization is built using WebGL and a custom library. Processing for capturing motion with kinect, and lastly a node server is set up as the central control transmitting message and events between WebGL and the kinect using websockets and OSC.
      `,
      medias: [
        {
          type: "vimeo",
          url: "https://vimeo.com/534333355",
        },
        {
          type: "image",
          url: "projects/sibos00.jpg",
        },
        {
          type: "image",
          url: "projects/sibos01.jpg",
        },
        {
          type: "image",
          url: "projects/sibos02.jpg",
        },
        {
          type: "image",
          url: "projects/sibos03.jpg",
        },

        {
          type: "vimeo",
          url: "https://vimeo.com/534357972",
        },
      ],
    },
  ],
  generatives: {
    fireWithin: {
      title: "The Fire Within",
      path: "fireWithin.jpg",
      url: "https://www.fxhash.xyz/generative/20140",
      editions: 256,
    },
    collage: {
      title: "Collage",
      path: "collage.jpg",
      url: "https://www.fxhash.xyz/generative/11805",
      editions: 333,
    },
    sketching: {
      title: "Sketching",
      path: "sketching.jpg",
      url: "https://www.fxhash.xyz/generative/8084",
      editions: 512,
    },
    wondering: {
      title: "Wondering",
      path: "wondering.jpg",
      url: "https://www.fxhash.xyz/generative/4680",
      editions: 256,
    },
    percentage: {
      title: "Project%",
      path: "percentage.jpg",
      url: "https://project.fab.tw/",
    },
    strand: {
      title: "Strand",
      path: "strand.jpg",
      url: "https://www.fxhash.xyz/generative/3266",
      editions: 256,
    },
    labyrinth: {
      title: "Labyrinth",
      path: "labyrinth.jpg",
      url: "https://www.fxhash.xyz/generative/2501",
      editions: 256,
    },
    maze: {
      title: "Maze",
      path: "maze.jpg",
      url: "https://www.fxhash.xyz/generative/1870",
      editions: 128,
    },
    hex: {
      title: "Hex",
      path: "hex.jpg",
      url: "https://www.fxhash.xyz/generative/1762",
      editions: 128,
    },
    rubixCube: {
      title: "Rubik's Cube",
      path: "rubixCube.jpg",
      url: "https://www.fxhash.xyz/generative/1983",
      editions: 256,
    },
    excursion: {
      title: "Excursion",
      path: "excursion.jpg",
      url: "https://www.fxhash.xyz/generative/1205",
      editions: 128,
    },
    threads: {
      title: "Threads",
      path: "threads.jpg",
      url: "https://www.fxhash.xyz/generative/671",
      editions: 512,
    },
    circles: {
      title: "Circles",
      path: "circles.jpg",
      url: "https://www.fxhash.xyz/generative/316",
      editions: 512,
    },
  },
};
