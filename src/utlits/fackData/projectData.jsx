// Bookie
import bookie1 from "../../assets/images/projects/bookie/1.PNG"
import bookie2 from "../../assets/images/projects/bookie/2.PNG"
import bookie3 from "../../assets/images/projects/bookie/3.PNG"

//Sophie
import sophie1 from "../../assets/images/projects/Sophie/1.png"
import sophie2 from "../../assets/images/projects/Sophie/2.png"
import sophie3 from "../../assets/images/projects/Sophie/3.png"
import sophie4 from "../../assets/images/projects/Sophie/4.png"

//Kaza
import kaza1 from "../../assets/images/projects/Kaza/1.png"
import kaza2 from "../../assets/images/projects/Kaza/2.png"
import kaza3 from "../../assets/images/projects/Kaza/3.png"
import kaza4 from "../../assets/images/projects/Kaza/4.png"

//Grimoire
import grimoire1 from "../../assets/images/projects/grimoire/1.png"
import grimoire2 from "../../assets/images/projects/grimoire/2.png"
import grimoire3 from "../../assets/images/projects/grimoire/3.png"
import grimoire4 from "../../assets/images/projects/grimoire/4.png"

//Qwenta
import qwenta1 from "../../assets/images/projects/qwenta/1.png"
import qwenta2 from "../../assets/images/projects/qwenta/2.png"
import qwenta3 from "../../assets/images/projects/qwenta/3.png"
import qwenta4 from "../../assets/images/projects/qwenta/4.png"

//Apple
import apple1 from "../../assets/images/projects/apple/1.png"
import apple2 from "../../assets/images/projects/apple/2.png"
import apple3 from "../../assets/images/projects/apple/3.png"
import apple4 from "../../assets/images/projects/apple/4.png"

//logo
import html from "../../assets/images/projects/icon/html.svg"
import css from "../../assets/images/projects/icon/css.svg"
import firebase from "../../assets/images/projects/icon/firebase.svg"
import react from "../../assets/images/projects/icon/react.svg"
import node from "../../assets/images/projects/icon/node.svg"
import mongo from "../../assets/images/projects/icon/mongo.svg"
import js from "../../assets/images/projects/icon/js.svg"
import scss from "../../assets/images/projects/icon/scss.svg"
import motion from "../../assets/images/projects/icon/motion.svg"



export const projectsData = [
    {
        id: 1,
        src: bookie1,
        category: "Front-end",
        title: "Bookie",
        description: `J'ai réalisé la page d'accueil de Booki, une agence de voyage en ligne. Ce projet m'a permis de poser les bases pour concevoir des pages web à la fois esthétiques et fonctionnelles. Mon principal défi a été d'assurer une expérience utilisateur fluide sur tous les types d'appareils, ce qui m'a amené à explorer et mettre en œuvre des techniques avancées en CSS pour garantir une compatibilité optimale et un design entièrement responsive. En suivant un design précis fourni sous Figma, j'ai intégré le site en utilisant HTML et CSS, ce qui m'a permis d'appliquer les principes essentiels du développement web.`,
        client: "Bookie",
        technologie: [
            html,
            css,
        ],
        project: "",
        github: "https://github.com/lmn31190/P2_booki",
        img: [
            bookie1,
            bookie2,
            bookie3,
            bookie1
        ]
    },
    {
        id: 2,
        src: sophie1,
        category: "Front-end",
        title: "Sophie Bluel",
        description: "Dans ce projet, l'objectif principal était de développer une galerie dynamique en récupérant des données via une API. J'ai également intégré des formulaires permettant aux utilisateurs de s'inscrire, de se connecter et d'ajouter de nouveaux projets à leur portfolio. Pour améliorer l'expérience utilisateur, des fonctionnalités ont été créées afin que les utilisateurs authentifiés puissent éditer et supprimer leurs projets. Le travail sans l'aide de frameworks m'a permis de renforcer mes compétences en JavaScript tout en acquérant une meilleure compréhension de la gestion des données externes et des interactions entre les parties backend et frontend du développement web.",
        client: "Sophie Bluel",
        technologie: [
            html,
            css,
            js
        ],
        project: "",
        github: "https://github.com/lmn31190/P3_sophieBluel",
        img: [
            sophie1,
            sophie2,
            sophie3,
            sophie4
        ]
    },
    {
        id: 3,
        src: kaza1,
        category: "Front-end",
        title: "Kaza",
        description: "Lors du développement de l'application web KASA, j'ai travaillé sur l'intégration de la maquette fournie en utilisant React et Sass. Parmi les composants spécifiques que j'ai mis en place, les éléments collapsables et le slider se distinguent particulièrement. Ces éléments ont été dotés d'animations fluides afin d'offrir une expérience utilisateur agréable et intuitive. En l'absence d'un backend opérationnel, j'ai opté pour un fichier JSON temporaire afin d'afficher dynamiquement les propriétés disponibles. Cette expérience m'a permis d'améliorer mes compétences en développement frontend, notamment dans la création d'interfaces utilisateur attrayantes et organisées.",
        client: "Kaza",
        technologie: [
            react,
            scss
        ],
        project: "",
        github: "https://github.com/lmn31190/P5_kaza",
        img: [
            kaza1,
            kaza2,
            kaza3,
            kaza4
        ]
    },
    {
        id: 4,
        src: grimoire1,
        category: "Back-end",
        title: "Mon Vieux Grimoire",
        description: "Dans ce projet, l'accent a été mis sur le développement backend en utilisant Node.js, Express et MongoDB. En suivant les spécifications techniques de l'API, j'ai mis en place les endpoints et configuré la base de données pour garantir une performance optimale. Les principaux défis concernaient la sécurisation des données et l'optimisation des fichiers images téléchargés. Grâce à des outils tels que Multer, Sharp, Helmet et Sanitize, combinés à des logiques côté serveur personnalisées, ces obstacles ont été efficacement surmontés, assurant une application robuste et sécurisée.",
        client: "Le Vieux Grimoire",
        technologie: [
            node,
            react,
            mongo
        ],
        project: "",
        github: "https://github.com/lmn31190/P6_MonVieuxGrimoire",
        img: [
            grimoire1,
            grimoire2,
            grimoire3,
            grimoire4
        ]
    },
    {
        id: 5,
        src: qwenta1,
        category: "Gestion de projet",
        title: "Menu Maker by Qwenta",
        description: `Dans le cadre du projet Menu Maker, un outil interactif de création de menus développé par Qwenta, j’ai eu l’opportunité de mettre en pratique des méthodologies agiles en collaboration étroite avec le Product Owner. Pour assurer la réussite de ce projet, j’ai pris en charge la rédaction des spécifications techniques détaillées, garantissant ainsi une communication claire et une bonne coordination avec l’équipe de développement.

Après une analyse approfondie, j'ai proposé d'adopter la méthode Kanban afin d'optimiser le processus de production. Ce choix a permis une gestion fluide des tâches et une adaptation rapide aux évolutions du projet, tout en favorisant un flux de travail constant. J'ai ensuite présenté notre planification complète au chef de projet à l’aide de diapositives détaillées, soulignant notre approche agile et la flexibilité qu’elle offrait dans le cadre de ce projet. Le plan est consultable via le lien fourni.`,
        client: "Qwenta",
        technologie: [
            react,
            scss,
            firebase,
            node,
            mongo
        ],
        project: "",
        github: "https://github.com/lmn31190/P7-MenuMakerQwenta",
        img: [
            qwenta1,
            qwenta2,
            qwenta3,
            qwenta4
        ]
    },
    {
        id: 6,
        src: apple3,
        category: "Animation",
        title: "Brand Identity and Motion Design",
        description: "Dans le cadre d'un projet de développement front-end, j'ai réalisé un clone du site Apple en utilisant React.js pour structurer l'interface et Framer Motion pour intégrer des animations fluides et dynamiques. Ce projet a mis l'accent sur la fidélité du design original, tout en optimisant l'expérience utilisateur grâce à des transitions visuelles harmonieuses. Chaque composant du site a été soigneusement recréé pour respecter l'esthétique minimaliste et l'ergonomie du site d'origine, tout en apportant une touche de modernité grâce aux animations interactives fournies par Framer Motion, améliorant ainsi l'engagement et l'interaction.",
        client: "Clone Apple",
        technologie: [
            react,
            motion
        ],
        project: "",
        github: "https://github.com/lmn31190/apple",
        img: [
            apple1,
            apple2,
            apple3,
            apple4
        ]
    },

]